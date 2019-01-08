import re

from bs4 import BeautifulSoup, Tag

html = """
<html>
    <head>
     <title >BS4-基本使用</title>
    </head>
    <body>
        <h1>BeautifulSoup4</h1>
        <p class="sub" id="demo">就是这么简单</p>
        <p class="parent">如何使用BeautifulSoup</p>
      
        <ul class="top clear"><!--注释内容-->
            <li><a href=''>热点</a></li>
            <li>娱乐</li>
            <li>图片</li>
            <li>科技</li>
        </ul>
        <div><!--注释部分的内容--></div>
        <a href="http://www.baidu.com">python</a>
        <img src='http://5b0988e595225.cdn.sohucs.com/images/20180421/01bcab8b40584e0997eca26ede276268.jpeg'>
    </body>
</html>
"""


def parse_html_tag():
    soup = BeautifulSoup(html, features='lxml')
    # 打印p标签的类型
    print(type(soup.p))
    # 获取标签(标签 + 属性 + 内容)
    print(soup.p)
    print(soup.title)
    # 获取标签的名字
    print(soup.h1.name)


def get_bs4_tag_name():
    soup = BeautifulSoup(html, features='lxml')
    print(soup.name)
    print(soup.p.name)


def get_bs4_tag_attr():
    soup = BeautifulSoup(html, features='lxml')
    print(soup.p['class'])


def get_bs4_tag_attr_list():
    soup = BeautifulSoup(html, features='lxml')
    print(soup.ul['class'])


def get_bs4_tag_attrs():
    """
    获取标签下的所有标签属性
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    print(soup.p.attrs)


def get_bs4():
    """
    获取bs对象
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    print(soup.attrs)
    print(soup.name)


def get_tag_text():
    """
    获取标签中的内容
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    print(soup.title.string)
    # 转化成str类型
    print(str(soup.title.string))
    print(soup.p.string)
    print(soup.a.string)


def get_tag_comment():
    """
    获取标签中的注释内容
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    # 注意 只有注释在同一行的情况下才能获取到,换行返回None
    print(soup.div.string)


def get_tag_contents():
    """
    获取标签下的所有子元素
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    contents = soup.ul.contents
    print(contents)
    for content in contents:
        print(content)
        print(type(content))


def get_tag_children():
    """
    获取标签下的所有子元素
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    childrens = soup.ul.children
    # 包含所有节点,主要包含字符串,注释,标签
    for child in childrens:
        # 判断是否是标签类型
        if isinstance(child, Tag):
            print(child)
            print(type(child))


def get_tag_descendants():
    """
    获取标签下的所有子元素
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    descentdants = soup.ul.descendants
    # 包含所有节点,主要包含字符串,注释,标签
    for child in descentdants:
        # 判断是否是标签类型
        if isinstance(child, Tag):
            print(child)
            print(type(child))


def get_tag_parent():
    """
    获取当前标签的父类元素
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    if soup.a.parent is not None:
        print(soup.a.parent.name)
        # li


def get_tag_parents():
    """
    获取当前标签的所有先辈标签
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    parents = soup.a.parents
    if parents is not None:
        for parent in parents:
            print(parent.name)


'''
去掉空行跟换行符
'''


def bs_preprocess(html):
    """删除空格和换行字符"""
    pat = re.compile('(^[\s]+)|([\s]+$)', re.MULTILINE)
    html = re.sub(pat, '', html)  # 删除开头和结尾的空格
    html = re.sub('\n', ' ', html)  # 转换换行符空间
    html = re.sub('[\s]+<', '<', html)  # 打开标签之前删除空格
    html = re.sub('>[\s]+', '>', html)  # r结束标记后删除空格
    return html


def get_tag_sibling():
    """
    获取当前标签的所有先辈标签
    :return:
    """
    soup = BeautifulSoup(bs_preprocess(html), features='lxml')
    next = soup.p.next_sibling
    print(next)
    nexts = soup.p.next_siblings
    print(nexts)
    for tag in nexts:
        print(tag)
    # 获取所有的兄弟元素标签
    pre = soup.p.previous_sibling
    print(pre)
    pres = soup.p.previous_siblings
    for tag in pres:
        print(tag)


def get_html_strings():
    soup = BeautifulSoup(html, features='lxml', from_encoding='utf8')
    for text in soup.ul.strings:
        print(str(text))


def get_html_stripped__strings():
    soup = BeautifulSoup(html, features='lxml', from_encoding='utf8')
    for text in soup.ul.stripped_strings:
        print(str(text))


def get_next_element():
    soup = BeautifulSoup(html, features='lxml')
    tag_a = soup.li.next_element
    # li的下一个标签对象
    print(type(tag_a))
    print(tag_a)
    # p 标签的下一个标签对象是字符串
    tag_p = soup.p.next_element
    print(type(tag_p))
    print(tag_p)

    tag_p = soup.ul.next_element
    print(type(tag_p))
    print(tag_p)

if __name__ == '__main__':
    # parse_html_tag()
    # get_bs4_tag_attr()
    # get_bs4_tag_attrs()
    # get_bs4_tag_attr_list()
    # get_bs4()
    # get_tag_text()
    # get_tag_comment()
    # get_tag_contents()
    # get_tag_children()
    # get_tag_descendants()
    # get_tag_parent()
    # get_tag_parents()
    # get_tag_sibling()
    # get_html_strings()
    # get_html_stripped__strings()
    get_next_element()
