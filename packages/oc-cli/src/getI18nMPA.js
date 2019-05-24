/**
 * 生成MPA微应用
 */

const path = require('path');
const fse = require('fs-extra');
const ejs = require('ejs');

module.exports = async (occApps, occParam) => {
    // let IntlDirPath = path.resolve(occApps, occParam.name, 'src', 'components', 'Intl');
    // #package.json
    let pkg_path = path.resolve(occApps, occParam.name, 'package.json');
    let pkg_json = await ejs.renderFile(pkg_path, { name: occParam.name });
    await fse.outputFile(pkg_path, pkg_json);

    // #app.js
    let app_path = path.resolve(occApps, occParam.name, 'src', 'app.js');
    let app_json = await ejs.renderFile(app_path, { isI18n: occParam.i18n });
    await fse.outputFile(app_path, app_json);

    // #container.js
    let container_path = path.resolve(occApps, occParam.name, 'src', 'container.js');
    let container_json = await ejs.renderFile(container_path, { isI18n: occParam.i18n });
    await fse.outputFile(container_path, container_json);

    // #App/index.js
    let app_index_path = path.resolve(occApps, occParam.name, 'src', 'components', 'app', 'index.js');
    let app_index_json = await ejs.renderFile(app_index_path, { isI18n: occParam.i18n });
    await fse.outputFile(app_index_path, app_index_json);
    // 删除不属于多语的文件夹
    // if (!occParam.i18n) {
    //     await fse.remove(IntlDirPath)
    // }
}