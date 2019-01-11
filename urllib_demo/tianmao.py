import re
from urllib import request, error


def get_html(url):
    try:
        req = request.Request(url)
        response = request.urlopen(req)
        if response.status == 200:
            return response.read().decode('utf8')
    except error.URLError as e:
        print(e.reason)
    return None


# <a.*?class="imgbox".*?><images.*?src="(.*?)".*?></a>

def parser_html(html):
    pattern = re.compile('<dd>'
                         '<div class="newsitem">.*?'
                         '<a.*?"imgbox".*?<images src="(.*?)".*?></a>'
                         '<h3>.?<a.*?>(.*?)</a></h3>'
                         '<p.*?><a.*?>(.*?)</a></p>'
                         '.*?'
                         '</div>'
                         '</dd>',
                         flags=re.S)
    content = pattern.findall(html)
    return content


if __name__ == '__main__':
    url = 'http://www.mtime.com'
    html = get_html(url)
    content = parser_html(html)
    print(type(content))
    for item in content:
        print(item)
