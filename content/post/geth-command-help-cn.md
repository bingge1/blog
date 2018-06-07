---
title: "Geth 命令行简析"
date: 2018-06-07T11:52:48+08:00
draft: true
tags: ["以太坊","ethereum"]
series: ["以太坊开发"]
categories: ["以太坊开发"]
---


英文好的童鞋可以直接看运行程序的帮助文档

geth --help

当然也可以访问github上的wiki文档查看，地址为：

[https://github.com/ethereum/go-ethereum/wiki](https://github.com/ethereum/go-ethereum/wiki)

本文geth版本为

~~~actionscript
$ geth version
Geth
Version: 1.8.10-stable
Git Commit: eae63c511ceafab14b92e274c1b18bf1700e2d3d
Architecture: amd64
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.10.1
Operating System: linux
GOPATH=/usr/local/GOPATH
GOROOT=/usr/local/go

~~~

我们看一下命令行参数帮助文档

~~~javascript
$ geth -h
NAME:
   geth - the go-ethereum command line interface

   Copyright 2013-2018 The go-ethereum Authors

USAGE:
   geth [options] command [command options] [arguments...]
   
VERSION:
   1.8.10-stable-eae63c51
   
COMMANDS:
   account           管理账户
   attach            启动交互式Javascript环境（连接已经运行的节点可以是geth或者parity）
   bug               打开一个窗口上报bug到Issues
   console           启动交互式Javascript环境
   copydb            从目标文件夹创建本地链
   dump              将特定块从存储中转储
   dumpconfig        显示配置信息
   export            导出区块链数据到文件
   export-preimages  导出数据库预图像到 RLP 流
   import            从指定区块链文件导入
   import-preimages  从指定RLP流导入到数据库预图像
   init              引导和初始化一个创世区块，一般在搭建私链的时候用到
   js                运行指定Javascript文件
   license           显示许可信息
   makecache         生成ethash验证缓存(用于测试)
   makedag           生成ethash 挖矿DAG(用于测试)
   monitor           监控和可视化节点指标
   removedb          删除区块链和状态数据库
   version           打印当前版本信息
   wallet            管理以太坊预售钱包
   help, h           显示命令行帮助信息
   
ETHEREUM OPTIONS:

  --config value               TOML 配置文件
  --datadir "/root/.ethereum"  数据库和keystore密钥数据目录，默认"(/root/.ethereum)"
  --keystore                   keystore存放目录（默认在datadir里面）
  --nousb                      禁用监控和管理USB硬件钱包
  --networkid value            网络标识符(整型, 1=Frontier, 2=Morden (弃用), 3=Ropsten, 4=Rinkeby) (默认: 1)
  --testnet                    Ropsten网络:预先配置的POW(proof-of-work)测试网络
  --rinkeby                    Rinkeby网络: 预先配置的POA(proof-of-authority)测试网络
  --syncmode "fast"            同步模式 ("fast", "full", or "light") 默认为 "fast"
  --gcmode value                
  --ethstats value             上报ethstats service  URL (nodename:secret@host:port)
  --identity value             自定义节点名
  --lightserv value            允许LES请求时间最大百分比(0 – 90)(默认值:0) 
  --lightpeers value           最大LES client peers数量(默认值:100)
  --lightkdf                   在KDF强度消费时降低key-derivation RAM&CPU使用

  
DEVELOPER CHAIN OPTIONS:(开发者（模式）选项:)

  --dev               使用POA共识网络，默认预分配一个开发者账户并且会自动开启挖矿。
  --dev.period value  开发者模式下挖矿周期 (0 = 仅在交易时) (默认: 0)

  
ETHASH OPTIONS:(THASH 选项)
  --ethash.cachedir                ethash验证缓存目录(默认 = datadir目录内)
  --ethash.cachesinmem value       在内存保存的最近的ethash缓存个数  (每个缓存16MB ) (默认: 2)
  --ethash.cachesondisk value      在磁盘保存的最近的ethash缓存个数 (每个缓存16MB) (默认: 3)
  --ethash.dagdir "/root/.ethash"  存ethash DAGs目录 (默认 = 用户hom目录)
  --ethash.dagsinmem value         在内存保存的最近的ethash DAGs 个数 (每个1GB以上) (默认: 1)
  --ethash.dagsondisk value        在磁盘保存的最近的ethash DAGs 个数 (每个1GB以上) (默认: 2)
  
TRANSACTION POOL OPTIONS:(事务/交易 池选项)
  --txpool.nolocals            为本地提交交易禁用价格豁免
  --txpool.journal value       本地交易的磁盘日志：用于节点重启 (默认: "transactions.rlp")
  --txpool.rejournal value     重新生成本地交易日志的时间间隔 (默认: 1小时)
  --txpool.pricelimit value    加入交易池的最小的gas价格限制(默认: 1)
  --txpool.pricebump value     价格波动百分比（相对之前已有交易） (默认: 10)
  --txpool.accountslots value  每个帐户保证可执行的最少交易槽数量  (默认: 16)
  --txpool.globalslots value   所有帐户可执行的最大交易槽数量 (默认: 4096)
  --txpool.accountqueue value  每个帐户允许的最多非可执行交易槽数量 (默认: 64)
  --txpool.globalqueue value   所有帐户非可执行交易最大槽数量  (默认: 1024)
  --txpool.lifetime value      非可执行交易最大入队时间(默认: 3小时)
  


PERFORMANCE TUNING OPTIONS:（性能调优的选项:）


  --cache value            分配给内部缓存的内存MB数量，缓存值(最低16 mb /数据库强制要求)(默认:128)
  --cache.database value   用于数据库IO的允许百分比（默认值：75）
  --cache.gc value         用于垃圾回收占百分比（默认值：25）
  --trie-cache-gens value  保持在内存中产生的trie node数量(默认:120)
  
ACCOUNT OPTIONS:
  --unlock value    解锁一个账号
  --password value  输入密码解锁
  
API AND CONSOLE OPTIONS:(API和控制台选项:)


  --rpc                  开启Http rpc 接口访问
  --rpcaddr value        HTTP-RPC 服务监听地址 (默认: "localhost")
  --rpcport value        HTTP-RPC 服务监听端口 (默认: 8545)
  --rpcapi value         基于HTTP-RPC接口提供的API
  --ws                   开启 WS-RPC 服务
  --wsaddr value         WS-RPC 服务监听地址 (默认: "localhost")
  --wsport value         WS-RPC 服务监听端口 (默认: 8546)
  --wsapi value          基于WS-RPC的接口提供的API
  --wsorigins value      WebSocket允许的源
  --ipcdisable           禁用IPC-RPC服务器
  --ipcpath              包含在datadir里的IPC socket/pipe文件名(转义过的显式路径)
  --rpccorsdomain value  允许跨域请求的域名列表(逗号分隔)(浏览器强制)
  --rpcvhosts value      允许的rpchost，以逗号分隔（默认："localhost")
  --jspath loadScript    Javascript加载脚本的根路径(默认值:“.”)
  --exec value           允许Javascript脚本
  --preload value        预加载到控制台的Javascript文件列表(逗号分隔)
  
NETWORKING OPTIONS: (网络选项:)
  --bootnodes value     用于P2P发现引导的enode urls(逗号分隔)(对于light servers用v4+v5代替)
  --bootnodesv4 value   用于P2P v4发现引导的enode urls(逗号分隔) (light server, 全节点)
  --bootnodesv5 value   用于P2P v5发现引导的enode urls(逗号分隔) (light server, 轻节点)
  --port value          网卡监听端口(默认值:30303)
  --maxpeers value      最大的网络节点数量(如果设置为0，网络将被禁用)(默认值:25)
  --maxpendpeers value  最大尝试连接的数量(如果设置为0，则将使用默认值)(默认值:0)
  --nat value           NAT端口映射机制 (any|none|upnp|pmp|extip:<IP>) (默认: “any”)
  --nodiscover          禁用节点发现机制(手动添加节点)
  --v5disc              启用实验性的RLPx V5(Topic发现)机制
  --netrestrict value   将网络通信限制到给定的IP网络（CIDR掩码）
  --nodekey value       P2P节点密钥文件
  --nodekeyhex value    十六进制的P2P节点密钥(用于测试)
  
MINER OPTIONS:(矿工选项:)

  --mine                    开启挖矿
  --minerthreads value      挖矿使用的CPU线程数量(默认值:4)
  --etherbase value         挖矿奖励地址(默认=第一个创建的帐户)(默认值:“0”)
  --targetgaslimit value    目标gas限制：设置最低gas限制（低于这个不会被挖？） (默认值:“4712388”)
  --gasprice "18000000000"  挖矿接受交易的最低gas价格
  --extradata value         矿工设置的额外块数据(默认=client version)
  
GAS PRICE ORACLE OPTIONS:(GAS价格选项:)


  --gpoblocks value      用于检查gas价格的最近块的个数  (默认: 10)
  --gpopercentile value  建议gas价参考最近交易的gas价的百分位数，(默认: 50)
  
VIRTUAL MACHINE OPTIONS:(虚拟机的选项:)
  --vmdebug  记录VM及合约调试信息

  
LOGGING AND DEBUGGING OPTIONS:(日志和调试选项:)


  --metrics                 启用metrics收集和报告
  --fakepow                 禁用proof-of-work验证
  --nocompaction            禁用导入DB后压缩
  --verbosity value         日志详细度:0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)
  --vmodule value           每个模块详细度:以 <pattern>=<level>的逗号分隔列表 (比如 eth/*=6,p2p=5)
  --backtrace value         请求特定日志记录堆栈跟踪 (比如 “block.go:271”)
  --debug                   突出显示调用位置日志(文件名及行号)
  --pprof                   启用pprof HTTP服务器
  --pprofaddr value         pprof HTTP服务器监听接口(默认值:127.0.0.1)
  --pprofport value         pprof HTTP服务器监听端口(默认值:6060)
  --memprofilerate value    按指定频率打开memory profiling    (默认:524288)
  --blockprofilerate value  按指定频率打开block profiling    (默认值:0)
  --cpuprofile value        将CPU profile写入指定文件
  --trace value             将execution trace写入指定文件
  
WHISPER (EXPERIMENTAL) OPTIONS:(WHISPER实验选项:)


  --shh                       启用Whisper
  --shh.maxmessagesize value  可接受的最大的消息大小 (默认值: 1048576)
  --shh.pow value             可接受的最小的POW (默认值: 0.2)
  
DEPRECATED OPTIONS:(弃用选项：)
  --fast   开启快速同步(改为 --syncmode "fast"   )
  --light  启用轻客户端模式
  
MISC OPTIONS:(其他选项)
  --help, -h  显示帮助文档
  

COPYRIGHT:(版权信息)
   Copyright 2013-2018 The go-ethereum Authors

~~~

有些参数翻译可能有不准确的地方，请大家指正。