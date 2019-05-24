/* util
 * @Author: Kvkens(yueming@yonyou.com)
 * @Date:   2019-01-21 12:59:30
 * @Last Modified by:   Kvkens
 * @Last Modified time: 2019-05-10 10:16:46
 */

const path = require("path");
const chalk = require("chalk");
const fse = require('fs-extra');
let config = null;

/**
 * 获得当前运行路径
 * @param {string} file 获得文件路径
 */
exports.getRunPath = (file) => {
    return path.resolve(".", file);
}
/**
 * 获得uba.config
 */
exports.getUcfConfig = (cmd) => {
    try {
        let isUcfConfig = fse.pathExistsSync(this.getRunPath("occ.config.js"));
        // 缓存配置文件，防止二次修改无效
        if (config == null) {
            // 兼容mtl.config
            config = require(this.getRunPath(isUcfConfig ? 'occ.config.js' : 'mtl.config.js'))(cmd[0] == 'start' ? 'development' : 'production', cmd);
        }
        return config;
    } catch (error) {
        this.errorLog(error, 'The "occ.config.js" configuration file was not found', true);
        process.exit(0);
    }
}

/**
 * 获取package.json
 */
exports.getPkg = () => {
    return require("../package.json");
}

/**
 * 错误处理
 * @param {*} err 错误对象
 * @param {*} msg 描述文字
 * @param {*} statck 是否显示错误栈
 */
exports.errorLog = (err, msg, statck) => {
    console.log(chalk.bold.red(`>> Error Message:`));
    console.log(chalk.cyan(err.message));
    msg && console.log(chalk.yellow(`[message] ${msg}`));
    console.log(chalk.bold.red(`>> End`));
    statck && console.log()
    statck && console.log(chalk.bold.red(`>> Stack Message:`));
    statck && console.log(chalk.cyan(err.stack));
    statck && console.log(chalk.bold.red(`>> End`));
}