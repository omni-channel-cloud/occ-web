/**
 * OCC 微服务前端工程最佳实践脚手架生成工具
 * @author  Kvkens(yueming@yonyou.com)
 * @date    2019-01-21 11:14:35
 */

const chalk = require('chalk');
const getDownloadUcf = require('./getDownloadUcf');
const getNewModule = require('./getNewModule');
const getUcfPkg = require('./getUcfPkg');
const getAutoUpdate = require('./getAutoUpdate');

//第一时间检测是否有最新版本给出提升自行升级或者是热更新模板

// getAutoUpdate();


function getHelp() {
    console.log(chalk.green.bold(" Usage : "));
    console.log();
    console.log(chalk.green(" occ init \t 🚀 Create a standard microservice front-end project"));
    console.log();
    console.log(chalk.green(" occ new app \t ☁️  Create a module page \n \t\t ⚠️  There are two types of pages: separate pages and separate pages containing routing."));
    console.log();
    // process.exit(0);
}

function getVersion() {
    console.log(chalk.green('👉  ' + require("../package.json").version));
    // process.exit(0);
}

module.exports = {
    plugin: function (options) {
        commands = options.cmd;
        pluginname = options.name;
        if (options.argv.h || options.argv.help) {
            getHelp();
        }
        if (options.argv.v || options.argv.version) {
            getVersion();
        }
        // if (options.argv._.length == 0) {
        //     getHelp();
        // }
        let action = options.argv._[0],
            param = options.argv._[1];
        switch (action) {
            case 'init':
                getDownloadUcf(param);
                break;
            case 'new':
                getNewModule(param);
                break;
            case 'list':
                getUcfPkg();
                break;
            default:
                // getHelp();
                break;
        }

    }
}