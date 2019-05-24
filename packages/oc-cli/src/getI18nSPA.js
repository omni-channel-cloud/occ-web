/**
 * 生成SPA微应用
 */

const path = require('path');
const fse = require('fs-extra');
const ejs = require('ejs');

module.exports = async (occApps, occParam) => {
    // let IntlDirPath = path.resolve(occApps, occParam.name, 'src', 'Intl');
    // #package.json
    let sps_pkg_path = path.resolve(occApps, occParam.name, 'package.json');
    let sps_pkg_json = await ejs.renderFile(sps_pkg_path, { name: occParam.name });
    await fse.outputFile(sps_pkg_path, sps_pkg_json);

    // #app.js
    let spa_app_path = path.resolve(occApps, occParam.name, 'src', 'app.js');
    let spa_app_json = await ejs.renderFile(spa_app_path, { isI18n: occParam.i18n });
    await fse.outputFile(spa_app_path, spa_app_json);

    // #home/container.js
    let home_container_path = path.resolve(occApps, occParam.name, 'src', 'routes', 'home', 'container.js');
    let home_container_json = await ejs.renderFile(home_container_path, { isI18n: occParam.i18n });
    await fse.outputFile(home_container_path, home_container_json);

    // #home/components/IndexView/index.js
    let indexview_path = path.resolve(occApps, occParam.name, 'src', 'routes', 'home', 'components', 'IndexView', 'index.js');
    let indexview_json = await ejs.renderFile(indexview_path, { isI18n: occParam.i18n });
    await fse.outputFile(indexview_path, indexview_json);
    // 删除不属于多语的文件夹
    // if (!occParam.i18n) {
    //     await fse.remove(IntlDirPath)
    // }
}