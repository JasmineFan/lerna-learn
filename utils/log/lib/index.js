'use strict';



const log = require('npmlog')

log.heading = 'fanfan'   //添加前缀
log.headingStyle = {fg:'red',bg:'black'}  //修改前缀的样式
log.level = process.env.LOG_LEVEL? process.env.LOG_LEVEL :'info'  //判断debug 模式
log.addLevel('success',2000, {fg:'green',bold:true})//添加自定义的命令

module.exports = log
