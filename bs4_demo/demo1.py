import re

from bs4 import BeautifulSoup

html = """
<html>
    <head>
     <title >BS4-基本使用</title>
    </head>
    <body>
    <div class='warp'>
        <h1>BeautifulSoup4</h1>
        <p class="sub" id="demo">就是这么简单</p>
        <p class="parent">如何使用BeautifulSoup</p>
        <ul class="top clear"><!--注释内容-->
            <li class='item' id='first'><a href='' data-id='123'>热点</a></li>
            <li class='item'>娱乐</li>
            <li class='item'>图片</li>
            <li class='item'>科技</li>
        </ul>
        <div><!--注释部分的内容--></div>
        <a href="http://www.baidu.com">python</a>
        <images src='http://5b0988e595225.cdn.sohucs.com/images/20180421/01bcab8b40584e0997eca26ede276268.jpeg'>
    </div>
    </body>
</html>
"""


def search_all():
    soup = BeautifulSoup(html, features='lxml')
    # 通过name来查询标签元素
    tags = soup.find_all(name='li')
    for tag in tags:
        print(type(tag))


def find_by_tag_name():
    """
    通过标签名查询标签
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    tags = soup.body.find_all('p')
    for tag in tags:
        print(tag.string)


def find_name_to_re():
    """
    通过标签名查询标签
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    tags = soup.body.find_all(re.compile('^l'))
    for tag in tags:
        print(tag.string)


def find_name_to_list():
    """
    通过标签名列表查询标签
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    tags = soup.body.find_all(['p', 'li'])
    for tag in tags:
        print(tag.string)


"""
"""


def find_name_to_true():
    """
    如果传入的是True 可以匹配任意标签
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    tags = soup.body.find_all(True)
    for tag in tags:
        print(tag.name)


def find_by_kwargs():
    """
    通过关键字查找标签
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    # 通过id查询
    # tags = soup.body.find_all(id='demo')
    #  通过class查询注意class在python中是关键字所以如果通过
    #  class查询必须使用class_
    #  tags = soup.body.find_all(class_='top')
    #  多条件配合使用
    tags = soup.body.find_all(class_='item', id='first')
    for tag in tags:
        print(tag.name)


def find_by_text():
    """
    通过 text 参数可以文档中的字符串内容
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    #
    texts = soup.body.find_all(text='BeautifulSoup4')
    # tags = soup.body.find_all(text=re.compile('\w+'))
    for text in texts:
        print(type(text))
        print(text)


def find_by_attrs():
    """
    有些属性在搜索时就不能使用 比如 data-* 比如一些自定义属性
    主要是命名方式不符合python命名规范
    :return:
    """
    soup = BeautifulSoup(html, features='lxml')
    # 语法错误
    # soup.find_all(data-id='123')
    tags = soup.find_all(attrs={'data-id': '123'})
    for tag in tags:
        print(type(tag))
        print(tag.string)


def find_by_recursive():
    soup = BeautifulSoup(html, features='lxml')
    # 查找符合的子类的标签
    tags = soup.body.find_all('ul', recursive=False)
    for tag in tags:
        print(tag)


def find_by_limit():
    soup = BeautifulSoup(html, features='lxml')
    # 只查询前两条记录
    tags = soup.body.find_all('li', limit=2)
    for tag in tags:
        print(tag)


if __name__ == '__main__':
    # search_all()
    # find_by_tag_name()
    # find_name_to_re()
    # find_name_to_list()
    # find_name_to_true()
    # find_by_kwargs()
    # find_by_text()
    # find_by_attrs()
    # find_by_recursive()
    find_by_limit()
    pass
