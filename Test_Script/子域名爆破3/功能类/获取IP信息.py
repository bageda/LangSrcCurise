# -*- encoding: utf-8 -*- 
"""
@author: LangziFun
@Blog: www.langzi.fun
@time: 2019/8/5 22:47
@file: 获取IP信息.py
"""
import IPy
import nmap
import socket
import re
import time
socket.setdefaulttimeout(25)
from urllib.parse import urlparse
import requests
requests.packages.urllib3.disable_warnings()
from concurrent.futures import ProcessPoolExecutor,ThreadPoolExecutor

Alive_Status = [200,301,302,404]
# 判断存活验证码·机制，实际清空会写在配置文件中

Banner = {b'http': [b'^HTTP/.*\nServer: Apache/2'], b'ssh': [b'^SSH-.*openssh'], b'netbios': [b'\xc2\x83\x00\x00\x01\xc2\x8f'], b'backdoor-fxsvc': [b'^500 Not Loged in'], b'backdoor-shell': [b'^sh[$#]'], b'bachdoor-shell': [b'[a-z]*sh: .* command not found'], b'backdoor-cmdshell': [b'^Microsoft Windows .* Copyright .*>'], b'db2': [b'.*SQLDB2RA'], b'db2jds': [b'^N\x00'], b'dell-openmanage': [b'^N\x00\r'], b'finger': [b'finger: GET: '], b'ftp': [b'^220 .* UserGate'], b'http-iis': [b'^<h1>Bad Request .Invalid URL.</h1>'], b'http-jserv': [b'^HTTP/.*Cookie.*JServSessionId'], b'http-tomcat': [b'.*Servlet-Engine'], b'http-weblogic': [b'^HTTP/.*Cookie.*WebLogicSession'], b'http-vnc': [b'^HTTP/.*RealVNC/'], b'ldap': [b'^0E'], b'smb': [b'^\x00\x00\x00.\xc3\xbfSMBr\x00\x00\x00\x00.*'], b'msrdp': [b'^\x03\x00\x00\x0b\x06\xc3\x90\x00\x004\x12\x00'], b'msrdp-proxy': [b'^nmproxy: Procotol byte is not 8\n$'], b'msrpc': [b'\x05\x00\r\x03\x10\x00\x00\x00\x18\x00\x00\x00....\x04\x00\x01\x05\x00\x00\x00\x00$'], b'mssql': [b';MSSQLSERVER;'], b'telnet': [b'^\xc3\xbf\xc3\xbe'], b'mysql': [b"whost '"], b'mysql-blocked': [b'^\\(\x00\x00'], b'mysql-secured': [b'this MySQL'], b'mongodb': [b'^.*version.....([\\.\\d]+)'], b'nagiosd': [b'Sorry, you \\(.*are not among the allowed hosts...'], b'nessus': [b'< NTP 1.2 >\nUser:'], b'oracle-tns-listener': [b'\\(ADDRESS=\\(PROTOCOL='], b'oracle-dbsnmp': [b'^\x00\x0c\x00\x00\x04\x00\x00\x00\x00'], b'oracle-https': [b'^220- ora'], b'oracle-rmi': [b'^N\x00\t'], b'postgres': [b'^EFATAL'], b'rlogin': [b'^\x01Permission denied.\n'], b'rpc-nfs': [b'^\x02\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00'], b'rpc': [b'^\xc2\x80\x00\x00'], b'rsync': [b'^@RSYNCD:.*'], b'smux': [b'^A\x01\x02\x00'], b'snmp-public': [b'public\xc2\xa2'], b'snmp': [b'A\x01\x02'], b'socks': [b'^\x05[\x00-\x08]\x00'], b'ssl': [b'^\x16\x03\x00..\x02...\x03\x00'], b'sybase': [b'^\x04\x01\x00'], b'tftp': [b'^\x00[\x03\x05]\x00'], b'uucp': [b'^login: password: '], b'vnc': [b'^RFB.*'], b'webmin': [b'^0\\.0\\.0\\.0:.*:[0-9]'], b'websphere-javaw': [b'^\x15\x00\x00\x00\x02\x02\n']}


def get_title(r):
    title = '获取失败'
    try:
        encoding = requests.utils.get_encodings_from_content(r.text)[0]
        content = r.content.decode(encoding,'replace')
        title_pattern = '<title>(.*?)</title>'
        title = re.search(title_pattern, content, re.S | re.I).group(1)
        return title.replace('\n', '').strip()
    except:
        return title

def Requests(url):
    print('当前检查网址:{}'.format(url))
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'}
    try:
        r = requests.get(url=url,headers=headers,verify=False,timeout=20)
        if r.status_code in Alive_Status:
            u = urlparse(str(r.url))
            title = get_title(r)
            print({u.scheme+'://'+u.netloc:title})
            return {u.scheme+'://'+u.netloc:title}
    except:
        return None


def Get_Alive_Url(urls):
    '''
    如果想要获取 IP 段内存活web服务
        hosts = IPy.IP('118.24.1.0/24')
        urls = []
        for host in hosts:
            urls.append('http://{}:{}'.format(host,80))
            urls.append('https://{}:{}'.format(host,443))
        Get_Alive_Url(urls)
        返回结果是一个列表
    '''
    with ThreadPoolExecutor() as p:
        future_tasks = [p.submit(Requests, i) for i in urls]
    result = [obj.result() for obj in future_tasks if obj.result() is not None]
    print(result)
    return result

class Get_Ip_Info:
    '''
    要获取开放端口的服务
        r = Get_Ip_Info('118.24.11.235')
        print(r.get_server_from_banner('118.24.11.235',80))
        返回 mssql，没识别出则返回 ‘识别失败’

    要获取网段存活主机
            r = Get_Ip_Info('192.168.1.55')
            print(r.get_alive_host())
            返回列表，没有则是空列表

    要获取IP上面的端口与服务(nmap扫描存在误报)
            r = Get_Ip_Info('118.24.11.235')
            print(r.get_server_from_nmap('118.24.11.235'))
            返回字典，对应
            {80:'http'...}

    '''
    def __init__(self,ip):
        self.ip = ip
    def get_server_from_banner(self,ip,port):
        try:
            s = socket.socket()
            s.connect((ip,port))
            s.send(b'')
            res = s.recv(1024)
            s.close()
            for k,v in Banner.items():
                for b in v:
                    banner = re.search(b,res)
                    if banner:
                        return k.decode()
            return '获取失败'
        except Exception as e:
            # print(e)
            return '获取失败'
    def get_alive_host(self):
        ip = '.'.join(self.ip.split('.')[0:-1])+'.0/24'
        # hosts = list(IPy.IP(ip))
        # print(hosts)
        nma = nmap.PortScanner()
        result = nma.scan(hosts=ip, arguments='-n -sP -PE')
        alive_host = []
        alive_host = list(result['scan'].keys())
        return alive_host

    def get_server_from_nmap(self,ip):
        result = {}
        nm = nmap.PortScanner()
        res = nm.scan(ip,arguments='-A')
        r = (res['scan'][ip]['tcp'])
        if r:
            for k, v in r.items():
                result[k]=v.get('name')
            # print('first data')
            # print(result)
            # print('secend data')
            for k,v in result.items():
                if v == None:
                    result[k] = self.get_server_from_banner(ip,int(k))
        return result




if __name__ == '__main__':
    hosts = IPy.IP('118.24.11.0/24')
    urls = []
    for host in hosts:
        urls.append('http://{}:{}'.format(host, 80))
        urls.append('https://{}:{}'.format(host, 443))
    Get_Alive_Url(urls)