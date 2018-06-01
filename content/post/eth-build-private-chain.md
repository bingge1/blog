---
title: "以太坊入门——搭建以太坊私链环境"
date: 2018-06-01T22:21:12+08:00
draft: true
tags: ["以太坊","私链","ethereum"]
series: ["以太坊开发"]
categories: ["以太坊开发"]
---


####  一、为什么要搭建私链

已经有以太坊公链了，我们为什么还要搭建自己的私链程序呢？一方面搭建私链可以让我们更好的理解以太坊的工作模式，另一方面以太坊私链可以帮我们节省大量的
资金（以太坊公链上都是任何操作都是需要消耗gas的，也就是说真金白银的，部署合约、转账都是需要花费真实以太坊的），所以我们搭建一个以太坊私链，作为我们的学习/开发/测试环境


####  二、安装Geth程序

##### 1、通过源码安装
有Golang基础和开发环境的同学，可以通过源码安装Geth程序，另编译Geth程序需要C编译环境。

~~~shell
$ git clone git@github.com:ethereum/go-ethereum.git
$ cd go-ethereum
$ make geth
$ make all
~~~


##### 1、直接通过可执行文件安装
点击 [https://geth.ethereum.org/downloads/](https://geth.ethereum.org/downloads/) 跳转到下载页面选择最新的匹配当前操作系统的Geth程序下载
如果是Windows 直接点击[https://gethstore.blob.core.windows.net/builds/geth-windows-amd64-1.8.10-eae63c51.exe](https://gethstore.blob.core.windows.net/builds/geth-windows-amd64-1.8.10-eae63c51.exe)下载可执行文件


#### 三、搭建以太坊私链环境
在合适的目录创建一个 genesis.json 文件，本示例路径为 E://eth/priChain/genesis.json 这个文件里面主要是一些[创世区块](https://baike.baidu.com/item/%E5%88%9B%E4%B8%96%E5%8C%BA%E5%9D%97/22448241?fr=aladdin)的参数
~~~json
{
  "config": {
        "chainId": 0,
        "homesteadBlock": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
  "alloc"      : {},
  "coinbase"   : "0x0000000000000000000000000000000000000000",
  "difficulty" : "0x20000",
  "extraData"  : "",
  "gasLimit"   : "0x2fefd8",
  "nonce"      : "0x0000000000000042",
  "mixhash"    : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash" : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp"  : "0x00"
}
~~~

然后我们就可以初始化我们的创世区块了
~~~actionscript
$ geth --datadir "F:\eth\priChain" init "F:\eth\priChain\genesis.json"
INFO [06-01|23:23:47] Maximum peer count                       ETH=25 LES=0 total=25
INFO [06-01|23:23:48] Allocated cache and file handles         database=F:\\eth\\priChain\\geth\\chaindata cache=16 handles=16
INFO [06-01|23:23:48] Writing custom genesis block
INFO [06-01|23:23:48] Persisted trie from memory database      nodes=1 size=205.00B time=0s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [06-01|23:23:48] Successfully wrote genesis state         database=chaindata                          hash=ffd9af…57dbb1
INFO [06-01|23:23:48] Allocated cache and file handles         database=F:\\eth\\priChain\\geth\\lightchaindata cache=16 handles=16
INFO [06-01|23:23:48] Writing custom genesis block
INFO [06-01|23:23:48] Persisted trie from memory database      nodes=1 size=205.00B time=502.1µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [06-01|23:23:48] Successfully wrote genesis state         database=lightchaindata                          hash=ffd9af…57dbb1 
~~~

我们的创世区块已经完成了

我们来运行我的私链的程序
~~~actionscript
$ geth --datadir "F:\eth\priChain" console
INFO [06-01|23:24:09] Maximum peer count                       ETH=25 LES=0 total=25
INFO [06-01|23:24:09] Starting peer-to-peer node               instance=Geth/v1.8.8-stable-2688dab4/windows-amd64/go1.10.1
INFO [06-01|23:24:09] Allocated cache and file handles         database=F:\\eth\\priChain\\geth\\chaindata cache=768 handles=1024
INFO [06-01|23:24:10] Initialised chain configuration          config="{ChainID: <nil> Homestead: 5 DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: <nil> EIP158: <nil> Byzantium: <nil> Constantinople: <nil> Engine: unknown}"
INFO [06-01|23:24:10] Disk storage enabled for ethash caches   dir=F:\\eth\\priChain\\geth\\ethash count=3
INFO [06-01|23:24:10] Disk storage enabled for ethash DAGs     dir=C:\\Users\\liang\\AppData\\Ethash count=2
INFO [06-01|23:24:10] Initialising Ethereum protocol           versions="[63 62]" network=1
INFO [06-01|23:24:10] Loaded most recent local header          number=0 hash=ffd9af…57dbb1 td=65536
INFO [06-01|23:24:10] Loaded most recent local full block      number=0 hash=ffd9af…57dbb1 td=65536
INFO [06-01|23:24:10] Loaded most recent local fast block      number=0 hash=ffd9af…57dbb1 td=65536
INFO [06-01|23:24:10] Regenerated local transaction journal    transactions=0 accounts=0
INFO [06-01|23:24:10] Starting P2P networking
INFO [06-01|23:24:10] Mapped network port                      proto=udp extport=30303 intport=30303 interface=NAT-PMP(192.168.0.1)
INFO [06-01|23:24:10] UDP listener up                          self=enode://911f1cc9711cf77f9f91f6af3acd32471f00a1f4e095156a5a6307f0e552af7cfee3879971f57fccb65d3346a4f252fe04e768409725a99bb47bcc5abe4b98d0@100.64.85.213:30303
INFO [06-01|23:24:10] RLPx listener up                         self=enode://911f1cc9711cf77f9f91f6af3acd32471f00a1f4e095156a5a6307f0e552af7cfee3879971f57fccb65d3346a4f252fe04e768409725a99bb47bcc5abe4b98d0@100.64.85.213:30303
INFO [06-01|23:24:10] IPC endpoint opened                      url=\\\\.\\pipe\\geth.ipc
INFO [06-01|23:24:10] Mapped network port                      proto=tcp extport=30303 intport=30303 interface=NAT-PMP(192.168.0.1)
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.8-stable-2688dab4/windows-amd64/go1.10.1
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0
~~~

经过初始化之后，我们已经进入了Geth Console ,也就是命令控制台，在这里我们可以执行很多命令与以太坊节点进行交互
接下来 我们创建一个以太坊钱包账户

~~~actionscript
> personal.newAccount('123')
"0x62851b0ad3fddccef7095517d0e9caee6e9239a5"
~~~

返回的"0x62851b0ad3fddccef7095517d0e9caee6e9239a5"就是我们本次生产的以太坊钱包地址,我们可以查询一下这个账户的余额不出意外应该是0

~~~actionscript
> eth.getBalance("0x62851b0ad3fddccef7095517d0e9caee6e9239a5")
0
~~~

我们可以进行挖矿，为之前创建的coinbase账户创建以太坊收入
目前的以太坊使用POW(Proof of Work)共识机制来激励人们去维护账本记账。此机制的核心是系统出一道题，让全网有意记账节点来求解，第一个求解出题目答案的节点会获得新区块的记账权并获得eth作为奖励。其中有意记账的节点叫做矿工节点。下面我们在我们的私链上挖矿赚一些钱便于我们后续的转账实验。
输入命令：




~~~actionscript
>  miner.start()
~~~
挖矿一段时间以后，停止挖矿
~~~actionscript
>  miner.stop()
true
~~~



此时，再次查看我们的账户余额，发现你已经“发财”了哈哈
~~~actionscript
> eth.getBalance("0x62851b0ad3fddccef7095517d0e9caee6e9239a5")
80000000000000000000
~~~

这里显示的以Wei为单位的，关于Wei与Ether的换算可以参考[链接](https://converter.murkin.me/)我们可以进行一下以太坊转账测试
我们需要新创建一个账户，用刚才挖矿收入的账户转账到新钱包账户

~~~actionscript
> personal.newAccount('Your Password')
"0x6e476f9f14931ce8906c16298c566fe257cf2e8f"
~~~

在转账之前我们先要对账户进行解释，输入 personal.unlockAccount(my)命令之后，键入之前创建钱包时输入的密码，即可解锁
~~~actionscript
$ personal.unlockAccount("0x62851b0ad3fddccef7095517d0e9caee6e9239a5")
Unlock account 0x62851b0ad3fddccef7095517d0e9caee6e9239a5
Passphrase:
true
~~~ 

开始进行转账，命令返回值为本次事务的hash(公链环境该事务HASH可以到专门网站查询)
~~~actionscript
eth.sendTransaction({from:"0x62851b0ad3fddccef7095517d0e9caee6e9239a5", to:"0x6e476f9f14931ce8906c16298c566fe257cf2e8f", value:10000})
"0x6aad3710d4616818e820cc4dc7940c20c20e69516e7339dacc4d582390da6c5d"
~~~ 

然后我们查询新账户的余额，竟然还是0？ 为什么呢，原来以太坊交易需要确认之后才会到账，也就是说我们要进行挖矿，然后才能打包这一笔交易
~~~actionscript
>  miner.start()
~~~
过一段时间，我们再去查询我们的新钱包地址余额，发现我们的余额已经新增了刚刚转账到的一笔。
~~~actionscript
>  eth.getBalance("0x6e476f9f14931ce8906c16298c566fe257cf2e8f")
10000
~~~

到此本节教程结束，此教程我主要介绍了如何搭建一个以太坊开发实验环境，创建私链及在私链上挖矿转账。