from http import cookiejar
from urllib import request


def get_cookie():
    url = 'http://www.baidu.com/'
    headers = {
        'User-Agent': 'Mozilla/5.0(Windows NT 10.0; WOW64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.104 Safari/537.36 Core/1.53.3427.400 QQBrowser/9.6.12513.400'
    }
    # 1. 构建一个CookieJar对象实例来保存cookie
    cookie = cookiejar.CookieJar()
    # 2. 使用HTTPCookieProcessor()来创建cookie处理器对象，参数为CookieJar()对象
    handler = request.HTTPCookieProcessor(cookie)
    # 3. 通过 build_opener() 来构建opener
    opener = request.build_opener(handler)
    # 4. 通过 opener的open方法发送请求
    resp = opener.open(url)
    # 获取服务器返回的cookie信息
    cookie_str = ''
    for item in cookie:
        cookie_str += item.name + ':' + item.value + ';\n'
    print(cookie_str)


# 将cookie信息保存到文件中
def save_cookie_file():
    # 设置保存cookie的文件，同级目录下的cookie.txt
    filename = 'cookie.txt'
    # 声明一个MozillaCookieJar对象实例来保存cookie，之后写入文件
    cookie = cookiejar.MozillaCookieJar(filename)
    # 利用urllib库的HTTPCookieProcessor对象来创建cookie处理器
    handler = request.HTTPCookieProcessor(cookie)
    # 通过handler来构建opener
    opener = request.build_opener(handler)
    # 创建一个请求，原理同urllib的urlopen
    response = opener.open("http://www.baidu.com")
    # 保存cookie到文件
    cookie.save()


def save_lwp_cookie():
    # 设置保存cookie的文件，同级目录下的cookie.txt
    filename = 'cookies'
    # 声明一个MozillaCookieJar对象实例来保存cookie，之后写入文件
    cookie = cookiejar.LWPCookieJar(filename)
    # 利用urllib库的HTTPCookieProcessor对象来创建cookie处理器
    handler = request.HTTPCookieProcessor(cookie)
    # 通过handler来构建opener
    opener = request.build_opener(handler)
    # 创建一个请求，原理同urllib的urlopen
    response = opener.open("http://www.baidu.com")
    # 保存cookie到文件
    cookie.save()


if __name__ == '__main__':
    # get_cookie()
    save_cookie_file()
    # save_lwp_cookie()
