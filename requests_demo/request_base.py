import requests
from requests import RequestException


def request_base():
    requests.request()


def get_response_json():
    url = 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1'
    resp = requests.get(url)
    print(type(resp))
    print(resp.json())


def login():
    '''通过cookiejar登陆

    cookiejar适用于动态的获取cookie  不需要再headers里面自定义一个cookie'''

    import urllib.request

    import urllib.parse

    import http.cookiejar

    post_url = 'http://www.quanshuwang.com/login.php?do=submit'

    post_headers = {

        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'

    }

    data = {

        'username': 'action',

        'password': 'action',

        'action': 'login',

    }

    data = urllib.parse.urlencode(data).encode('gbk')

    request = urllib.request.Request(url=post_url, headers=post_headers, data=data)

    cookie = http.cookiejar.CookieJar()

    handler = urllib.request.HTTPCookieProcessor(cookie)

    opener = urllib.request.build_opener(handler)

    response = opener.open(request)

    # print(response.read().decode('gbk'))

    get_url = 'http://www.quanshuwang.com/modules/article/bookcase.php'

    request1 = urllib.request.Request(url=get_url, headers=post_headers)

    response1 = opener.open(request1)

    print(response1.read().decode('gbk'))


def request_head():
    params = {'type': 'content', 'q': 'python'}
    headers = {'content-type': 'application/json',
               'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'}
    r = requests.get("https://www.zhihu.com/search", params=params, headers=headers)
    print(type(r))
    print(r.url)
    print(r.text)


def request_post_file():
    url = 'http://httpbin.org/post'
    image = {'file': open('test.txt', 'rb')}
    resp = requests.post(url, files=image)
    print(resp.text)


if __name__ == '__main__':
    # get_response_json()
    # request_post_file()
    # request_head()
    resp = requests.request('get', 'https://www.taobao.com')
    print(resp.text)
    pass
