/**
 * 容器类组件
 */

import mirror, { connect } from 'mirrorx';
<% if(isI18n){ %>
import { injectIntl } from 'react-intl';
<% } %>
import App from './components/App';
import OccExtendsHOC from 'components/OccExtendsHOC';
import model from './model'
// 数据和组件UI关联、绑定
mirror.model(model);
<% if(isI18n){ %>
export default connect(state => state.app)(injectIntl(OccExtendsHOC(App)));
<% }else{ %>
export default connect(state => state.app)(OccExtendsHOC(App));
<% } %>