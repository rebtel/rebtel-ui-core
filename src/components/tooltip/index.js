import Tooltip from "./tooltip.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("rebtel-tooltip", Tooltip);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

Tooltip.install = install;

export {
    Tooltip as RebtelTooltip
}