from bs4 import BeautifulSoup

html = """

<table class="tablelist" cellpadding="0" cellspacing="0">
    <tr class="h">
        <td class="l" width="374">职位名称</td>
        <td>职位类别</td>
        <td>人数</td>
        <td>地点</td>
        <td>发布时间</td>
    </tr>
    <tr class="even">
        <td class="l square"><a target="_blank" href="position_detail.php?id=45021&keywords=python&tid=0&lid=0">22120-python中级-高级工程师(深度学习方向)</a></td>
        <td>技术类</td>
        <td>2</td>
        <td>武汉</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="odd">
        <td class="l square"><a target="_blank" href="position_detail.php?id=45005&keywords=python&tid=0&lid=0">25663-python算法</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>武汉</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="even">
        <td class="l square"><a target="_blank" href="position_detail.php?id=45007&keywords=python&tid=0&lid=0">TEG06-云计算架构师（深圳）</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="odd">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44980&keywords=python&tid=0&lid=0">PCG04-PCG研发部数据科学家（深圳/北京）</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="even">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44981&keywords=python&tid=0&lid=0">PCG04-PCG研发部业务运维工程师（深圳）</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="odd">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44971&keywords=python&tid=0&lid=0">23674-腾讯新闻大数据分析工程师（北京）</a></td>
        <td>技术类</td>
        <td>2</td>
        <td>北京</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="even">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44964&keywords=python&tid=0&lid=0">TEG05-高级数据挖掘工程师（深圳）</a></td>
        <td>技术类</td>
        <td>2</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="odd">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44968&keywords=python&tid=0&lid=0">PCG01-QQ后台推荐算法工程师</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="even">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44969&keywords=python&tid=0&lid=0">PCG01-QQ后台大数据开发工程师</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
    <tr class="odd">
        <td class="l square"><a target="_blank" href="position_detail.php?id=44952&keywords=python&tid=0&lid=0">22989-腾讯云AI产品高级咨询顾问（深圳北京）</a></td>
        <td>技术类</td>
        <td>1</td>
        <td>深圳</td>
        <td>2018-10-23</td>
    </tr>
</table>  
"""


# 将字符串或者html文档转化成bs4对象
def parse_html_str(html):
    soup = BeautifulSoup(html, features='lxml', from_encoding='utf8')
    print(soup.prettify())


def parse_html_file(file):
    soup = BeautifulSoup(open(file, encoding='utf-8'), features='lxml')
    print(soup.title)
    print(soup.title.name)
    print(soup.title.text)


# 指定编码格式
def parse_html_encode(html):
    pass


def get_html_strs(html):
    soup = BeautifulSoup(html, features='lxml', from_encoding='utf8')
    for s in soup.ul.strings:
        print(s)


if __name__ == '__main__':
    # parse_html_str(html)
    # parse_html_file('bs4.html')
    get_html_strs(html)
    pass
