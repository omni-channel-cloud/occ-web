/**
 * 入口、导入组件样式、渲染
 */

import React from 'react';
import { render } from 'mirrorx';
<% if(isI18n){ %>
// 国际化多语包引用
import { IntlProvider } from 'react-intl';
// 项目内多语组件引用
import Intl from 'components/Intl';
<% } %>
import App from "./container";
import OccExtendsHOC from 'components/OccExtendsHOC';
const HocApp = OccExtendsHOC(App);

import 'occ-common/styles/occ-tinper-bee.css';
import 'occ-common/styles/public.less';
import './app.less';


<% if(isI18n){ %>
render(<Intl>
        <IntlProvider>
            <HocApp />
        </IntlProvider>
    </Intl>, document.querySelector("#app"));
<% }else{ %>
render(<HocApp />, document.querySelector("#app"));
<% } %>