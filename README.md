# rebtel-ui-core <img align="right" alt="Rebtel" width="22px" src="https://play-lh.googleusercontent.com/NDI9Gx2s4zcjuAMjJ_NNHM2XGdtNUJ-uzFDa-7vXE1OF_tsmfykxd_NNI1CBsW42pw" /> <img align="right" width="22" src="https://vuejs.org/images/logo.png" alt="Vue logo">
  <h3>Introduction</h3>
  
  This Library created by Rebtel WEB team to use for some core UI components in multiple repositories. 👋 
  </br>
### Install

```bash
npm install @rebtel-dev/rebtel-ui-core --save
```

### Import

Import plugin:

```javascript
import {RebtelTooltip} from '@rebtel-dev/rebtel-ui-core'

Vue.use(RebtelTooltip)
```
**OR**

Import component:

```javascript
import { RebtelTooltip } from '@rebtel-dev/rebtel-ui-core'

Vue.component('RebtelTooltip', RebtelTooltip)
```
### Use

```xml
<RebtelTooltip :text="$t('your_source.some_strings')"/>

```
### SSR

Include plugin in your `nuxt.config.js` file:

```javascript
module.exports = {
  plugins: ['@/plugins/rebtel-core-ui.js']
}
```

And your `plugins/rebtel-core-ui.js` will look like:

```javascript
import Vue from 'vue'
import { RebtelTooltip } from '@rebtel-dev/rebtel-ui-core'
Vue.component('RebtelTooltip', RebtelTooltip)
```
#


