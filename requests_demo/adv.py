import random

import requests


# 会话机制
def session_method():
    session = requests.Session()
    session.get('http://httpbin.org/cookies/set/sessionid/123456789')
    resp = session.get("http://httpbin.org/cookies")
    print(resp.text)
    session.close()


def session_method1():
    with requests.Session() as session:
        session.get('http://httpbin.org/cookies/set/sessionid/123456789')
        resp = session.get("http://httpbin.org/cookies")
        print(resp.text)


def upload_file():
    url = 'http://httpbin.org/post'
    files = [
        ('images', ('test1.png', open('test1.jpg', 'rb'), 'image/*')),
        ('images', ('test2.png', open('test2.jpg', 'rb'), 'image/*'))]
    resp = requests.post(url, files=files)
    print(resp.text)


"""


referer: https://account.toursforfun.com/signIn?callback=https%3A%2F%2Fcn.toursforfun.com%2F
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
"""


def random_proxy():
    pass


headers = {
    'origin': 'https://account.toursforfun.com',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
}


def login():
    proxies = {
        "http": "119.101.116.253:9999",
        # "https": "119.101.112.97:9999",
    }

    login_url = 'https://account.toursforfun.com/signIn'
    data = {
        'type': 'general',
        'name': '36558563@qq.com',
        'password': 'py123456'
    }
    session = requests.Session()
    resp = session.post(login_url, data=data, headers=headers, verify=False, proxies=proxies)
    if resp.status_code == 200:
        print(resp.cookies['TFF_ACCOUNT'])

        print(resp.text)


"""
判断是否登录
"""


def is_login():
    session = requests.Session()
    session.cookies = requests.utils.cookiejar_from_dict(cookie_dict={})

    resp = requests.get('https://cn.toursforfun.com/account/new#/user', headers=headers, verify=False)
    print(resp.status_code)
    print(resp.history)
    # r = requests.head('http://github.com', allow_redirects=True)
    # print(r.url, r.history)


if __name__ == '__main__':
    # session_method()
    # upload_file()
    # login()
    is_login()
