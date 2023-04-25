(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global['rebtel-ui-core'] = global['rebtel-ui-core'] || {}, global.vue));
}(this, (function (exports, vue) { 'use strict';

  //

  var script = vue.defineComponent({
    name: 'Tooltip',
    inheritAttrs: false,
    props: {
      text: {
        type: String,
        required: true
      }
    }
  });

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  var isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return function (id, style) { return addStyle(id, style); };
  }
  var HEAD;
  var styles = {};
  function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          var code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  { style.element.setAttribute('media', css.media); }
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              var index = style.ids.size - 1;
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index])
                  { style.element.removeChild(nodes[index]); }
              if (nodes.length)
                  { style.element.insertBefore(textNode, nodes[index]); }
              else
                  { style.element.appendChild(textNode); }
          }
      }
  }

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "tool", attrs: { "data-tip": _vm.text } }, [
      _c(
        "div",
        [_c("rb", { staticClass: "tw-text-brand", attrs: { icon: "info-big" } })],
        1
      ) ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-49f571cd_0", { source: "\n.tool[data-v-49f571cd] {\n    cursor: help;\n    position: relative;\n}\n\n/*== common styles for both parts of tool tip ==*/\n.tool[data-v-49f571cd]::before,\n.tool[data-v-49f571cd]::after {\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    z-index: -100;\n}\n.tool[data-v-49f571cd]:hover::before,\n.tool[data-v-49f571cd]:focus::before,\n.tool[data-v-49f571cd]:hover::after,\n.tool[data-v-49f571cd]:focus::after {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    z-index: 100;\n}\n\n/*== pointer tip ==*/\n.tool[data-v-49f571cd]::before {\n    border-style: solid;\n    border-width: 1em 0.75em 0 0.75em;\n    border-color: #E3232C transparent transparent transparent;\n    bottom: 100%;\n    content: \"\";\n    margin-left: -0.5em;\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26), opacity .65s .5s;\n    transform:  scale(.6) translateY(-90%);\n}\n.tool[data-v-49f571cd]:hover::before,\n.tool[data-v-49f571cd]:focus::before {\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;\n}\n\n/*== speech bubble ==*/\n.tool[data-v-49f571cd]::after {\n    background: #E3232C;\n    border-radius: .25em;\n    bottom: 165%;\n    color: #EDEFF0;\n    content: attr(data-tip);\n    margin-left: -8.75em;\n    padding: 1em;\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;\n    transform:  scale(.6) translateY(50%);\n    width: 17.5em;\n}\n.tool[data-v-49f571cd]:hover::after,\n.tool[data-v-49f571cd]:focus::after  {\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26);\n}\n@media (max-width: 760px) {\n.tool[data-v-49f571cd]::after {\n        font-size: .75em;\n        margin-left: -5em;\n        width: 10em;\n}\n}\n", map: {"version":3,"sources":["/Users/alper.baskir/Desktop/projects/rebtel-ui-core/src/components/tooltip/tooltip.vue"],"names":[],"mappings":";AAuBA;IACA,YAAA;IACA,kBAAA;AACA;;AAEA,iDAAA;AACA;;IAEA,SAAA;IACA,UAAA;IACA,kBAAA;IACA,aAAA;AACA;AAEA;;;;IAIA,UAAA;IACA,iCAAA;IACA,YAAA;AACA;;AAEA,oBAAA;AACA;IACA,mBAAA;IACA,iCAAA;IACA,yDAAA;IACA,YAAA;IACA,WAAA;IACA,mBAAA;IACA,uEAAA;IACA,sCAAA;AACA;AAEA;;IAEA,yDAAA;AACA;;AAEA,sBAAA;AACA;IACA,mBAAA;IACA,oBAAA;IACA,YAAA;IACA,cAAA;IACA,uBAAA;IACA,oBAAA;IACA,YAAA;IACA,yDAAA;IACA,qCAAA;IACA,aAAA;AACA;AAEA;;IAEA,qDAAA;AACA;AAEA;AACA;QACA,gBAAA;QACA,iBAAA;QACA,WAAA;AACA;AACA","file":"tooltip.vue","sourcesContent":["<template>\n  <div class=\"tool\" :data-tip=\"text\">\n    <div>\n      <rb class=\"tw-text-brand\" icon=\"info-big\" />\n    </div>\n  </div>\n</template>\n<script>\nimport { defineComponent } from 'vue'\n\nexport default defineComponent({\n  name: 'Tooltip',\n  inheritAttrs: false,\n  props: {\n    text: {\n      type: String,\n      required: true\n    }\n  }\n})\n</script>\n\n<style scoped>\n.tool {\n    cursor: help;\n    position: relative;\n}\n\n/*== common styles for both parts of tool tip ==*/\n.tool::before,\n.tool::after {\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    z-index: -100;\n}\n\n.tool:hover::before,\n.tool:focus::before,\n.tool:hover::after,\n.tool:focus::after {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    z-index: 100;\n}\n\n/*== pointer tip ==*/\n.tool::before {\n    border-style: solid;\n    border-width: 1em 0.75em 0 0.75em;\n    border-color: #E3232C transparent transparent transparent;\n    bottom: 100%;\n    content: \"\";\n    margin-left: -0.5em;\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26), opacity .65s .5s;\n    transform:  scale(.6) translateY(-90%);\n}\n\n.tool:hover::before,\n.tool:focus::before {\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;\n}\n\n/*== speech bubble ==*/\n.tool::after {\n    background: #E3232C;\n    border-radius: .25em;\n    bottom: 165%;\n    color: #EDEFF0;\n    content: attr(data-tip);\n    margin-left: -8.75em;\n    padding: 1em;\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;\n    transform:  scale(.6) translateY(50%);\n    width: 17.5em;\n}\n\n.tool:hover::after,\n.tool:focus::after  {\n    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26);\n}\n\n@media (max-width: 760px) {\n  .tool::after {\n        font-size: .75em;\n        margin-left: -5em;\n        width: 10em;\n  }\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-49f571cd";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component("rebtel-tooltip", __vue_component__);
  }

  var plugin = {
  	install: install,
  };

  var GlobalVue = null;
  if (typeof window !== "undefined") {
  	GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
  	GlobalVue = global.vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  __vue_component__.install = install;

  exports.RebtelTooltip = __vue_component__;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
