import json
from concurrent.futures import ProcessPoolExecutor

import requests
from bs4 import BeautifulSoup, Tag

"""
爬取小米商城

"""

html = """
 <ul class="nav-list J_navMainList clearfix">
                <li id="J_navCategory" class="nav-category">
                    <a class="link-category" href="//list.mi.com"><span class="text">全部商品分类</span></a>
                </li>
                            <li class="nav-item">
                    <a class="link" href="javascript: void(0);"><span class="text">小米手机</span><span class="arrow"></span></a>
                    <div class="item-children">
                        <div class="container">
                            <ul class="children-list clearfix">
                                                            <li class="first">
                                    <div class="figure figure-thumb">
                                        <a href="https://www.mi.com/mix3/"><images src="//i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png" data-src="//i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png"   alt="小米MIX 3" width="160" height="110" /></a>
                                    </div>
                                    <div class="title"><a href="https://www.mi.com/mix3/">小米MIX 3</a></div>
                                    <p class="price">3299元起</p>                                    <div class="flags"><div class="flag">新品</div></div>                                </li>
                                                            <li>
                                    <div class="figure figure-thumb">
                                        <a href="https://www.mi.com/mi8youth/"><images src="//i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png" data-src="//i1.mifile.cn/f/i/g/2015/cn-index/qingchun-320.png"   alt="小米8 青春版" width="160" height="110" /></a>
                                    </div>
                                    <div class="title"><a href="https://www.mi.com/mi8youth/">小米8 青春版</a></div>
                                    <p class="price">1399元起</p>                                                                    </li>
                                                            <li>
                                    <div class="figure figure-thumb">
                                        <a href="https://www.mi.com/mi8/"><images src="//i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png" data-src="//i1.mifile.cn/f/i/g/2015/cn-index/pc-320-220-mi8.png"   alt="小米8" width="160" height="110" /></a>
                                    </div>
                                    <div class="title"><a href="https://www.mi.com/mi8/">小米8</a></div>
                                    <p class="price">2699元起</p>                                                                    </li>
                                                            <li>
                                    <div class="figure figure-thumb">
                                        <a href="https://www.mi.com/miplay/"><images src="//i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png" data-src="//i1.mifile.cn/f/i/g/2015/cn-index/pc-320-miplay-1.png"   alt="小米Play" width="160" height="110" /></a>
                                    </div>
                                    <div class="title"><a href="https://www.mi.com/miplay/">小米Play</a></div>
                                    <p class="price">1099元</p>                                    <div class="flags"><div class="flag">新品</div></div>                                </li>
                                                            <li>
                                    <div class="figure figure-thumb">
                                        <a href="https://www.mi.com/mi8i/"><images src="//i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png" data-src="//i1.mifile.cn/f/i/g/2015/cn-index/pc-320-220-mi8se.png"   alt="小米8 SE" width="160" height="110" /></a>
                                    </div>
                                    <div class="title"><a href="https://www.mi.com/mi8i/">小米8 SE</a></div>
                                    <p class="price">1699元起</p>                                                                    </li>
                                                        </ul>
                        </div>
                    </div>
                </li>
"""


def get_html(url):
    resp = requests.get(url)
    return resp.text


def parser_nav(html):
    i = 0
    soup = BeautifulSoup(html, features='lxml')
    tags = soup.ul.find_all('li', class_='nav-item')
    data = []
    for tag in tags:
        name = tag.find('span').text
        nav = {'name': name}
        childrens = tag.select('ul >li')
        child_list = []
        for child in childrens:
            img_url = child.find('img').attrs.get('data-src')
            # start_down(img_url)
            name = child.find('div', class_='title').find('a').string
            p_tag = child.find('p', class_='price', recursive=False)
            price = p_tag.text if p_tag else ''
            flag_tag = child.find('div', class_='flag')
            flag = flag_tag.string if flag_tag else ''
            shop = {
                'name': name,
                'images': img_url,
                'price': price,
                'flag': flag,
            }
            child_list.append(shop)
        nav.update(shops=child_list)
        data.append(nav)
        json.dump(data, fp=open('shop.json', 'w', encoding='utf8'), ensure_ascii=False)


p = ProcessPoolExecutor(max_workers=10)


def start_down(img_url):
    p.submit(download_img, img_url)


def download_img(img_url: str):
    img_url = img_url if img_url.startswith('https') else 'https:' + img_url

    name = img_url.split('/')[-1]
    with open('images/shop/%s' % name, 'wb') as f:
        resp = requests.get(img_url)
        f.write(resp.content)


if __name__ == '__main__':
    url = 'https://www.mi.com/'
    content = get_html(url)
    parser_nav(content)
