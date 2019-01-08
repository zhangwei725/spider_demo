# resp = request.urlopen('https://www.baidu.com')
# print(resp)
from urllib import parse, request
from urllib.error import HTTPError, URLError


def base():
    response = request.urlopen('http://www.baidu.com')
    html = response.read()
    print(html)
    response.close()


#
def post_response_by_data():
    from urllib import request

    data = bytes(parse.urlencode({'hello': 'world'}), encoding='utf8')

    response = request.urlopen('http://httpbin.org/post', data=data)
    print(response.read().decode('utf8'))
    response.close()


def add_request_header():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)'
    }
    requests = request.Request('https://movie.douban.com/', headers=headers)
    response = request.urlopen(requests)
    print(response.read().decode('utf-8'))
    response.close()


def custom_request():
    url = 'https://www.tmall.com/'
    headers = {
        'user-agent', 'Mozilla/5.0'
    }
    requests = request.Request(url, headers=headers)
    # 或者通过add_header方法添加
    # requests.add_header('user-agent', 'Mozilla/5.0')
    response = request.urlopen(requests)
    if response.status == 200:
        print(response.read().decode())

    response.close()


def custom_request_other():
    url = 'http://httpbin.org/post'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
        'Host': 'httpbin.org'
    }
    data = {
        'name': 'spider'
    }

    # 讲字典转化成byte数据提交到服务器
    data = bytes(parse.urlencode(data), encoding='utf8')
    # 构建request对象
    req = request.Request(url=url, data=data, headers=headers, method='POST')
    # 通过req对象打开请求
    response = request.urlopen(req)
    if response.status == 200:
        print(response.read().decode('utf8'))
    response.close()


def get_response():
    # 构造请求对象,并添加请求头
    url = 'https://www.python.org'
    req = request.Request(url)
    # 发起请求
    resp = request.urlopen(req)
    print(type(resp))  # <class 'http.client.HTTPResponse'>
    # 获取HTTP协议版本号(10 for HTTP/1.0, 11 for HTTP/1.1)
    print(resp.version)
    # 获取响应码
    print(resp.status)
    print(resp.getcode())
    # 获取响应描述字符串
    print(resp.reason)
    # 获取实际请求的页面url(防止重定向用)
    print(resp.geturl())
    # 获取特定响应头信息
    print(resp.getheader(name="Content-Type"))
    # 获取响应头信息,返回二元元组列表
    print(resp.getheaders())
    # 获取响应头信息,返回字符串
    print(resp.info())
    # 读取响应体
    print(resp.readline().decode('utf8'))
    print(resp.read().decode('utf8'))


def handle_url_error():
    try:
        url = 'http:www.test.com'
        response = request.urlopen(url)
        content = response.read().decode('utf8')
        print(content)
    except URLError as e:
        print(e.reason)
    else:
        print('请求成功!!!')


def handle_http_error():
    url = 'https://www.douyu.com/test.html'
    req = request.Request(url)
    try:
        response = request.urlopen(req)
        print(response.read().decode('utf8'))
    except HTTPError as e:
        print(e.code)
    except URLError as e:
        print(e.reason)


def handler_http_error2():
    try:
        url = 'http://httpbin.org'
        data = {
            'name': 'test'
        }
        data = bytes(parse.urlencode(data), encoding='utf8')
        req = request.Request(url=url, data=data, method='POST')
        string = request.urlopen(req).read().decode('utf8')
        print(string)
    except HTTPError as e:
        print(e.code)


def handler_proxy():
    # 1. 创建代理对象
    proxy = request.ProxyHandler({"https": "119.101.113.139:9999"})
    # 2. 创建opener
    opener = request.build_opener(proxy)
    # 3. 创建request对象
    requests = request.Request("https://www.baidu.com/")
    # 4 .  调用 opener对象的open方法发送请求
    response = opener.open(requests)
    if response.status == 200:
        print(response.read().decode('utf8'))
    response.close()

# 利用正则爬取网页内容



if __name__ == '__main__':
    # base()
    # post_response_by_data()
    # add_request_header()
    # custom_request()
    # custom_request_other()
    # get_response()
    # handle_http_error()
    # handler_http_error2()
    handler_proxy()
