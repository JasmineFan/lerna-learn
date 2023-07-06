#! /usr/bin/env node

const importLocal = require('import-local')
if(importLocal(__filename)){
    require('npmlog').info('cli','正在使用 imooc-cli 本地版本')
    //在本地已经安装了一个imooc-cli-dev/core, 就是安装了一个发布到npm 上面的版本， 这是在node_modules 里面能找到这个版本
} else {
    require('../lib')(process.argv.slice(2))
    //本地没安装，使用的我们正在开发的版本，目前正在写的这个包
}
