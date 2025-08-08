import "./bootstrap";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "ziggy-js";
import isMobileMixin from "./mixins/isMobile";

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')?.trim() || '#ef4444';

createInertiaApp({
    progress: {
        delay: 0,
        color: primaryColor,
        includeCSS: true,
        showSpinner: false,
    },
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mixin(isMobileMixin)
            .mount(el);
    },
});
