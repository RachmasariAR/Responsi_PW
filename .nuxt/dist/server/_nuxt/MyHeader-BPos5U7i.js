import { _ as __nuxt_component_0 } from "./nuxt-link-DyZc7qn_.js";
import { u as useHead } from "./index-BabADJUJ.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [{ src: "/assets/navbar.js" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-dark navbar-expand-sm bg-transparent fixed-top" }, _attrs))}><div class="container"><a href="/" class="navbar-brand fw-bolder" style="${ssrRenderStyle({ "font-size": "34px" })}"><i class="fas fa-blog"></i>   <b>RAR</b></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><div id="navbarCollapse" class="collapse navbar-collapse"><ul class="navbar-nav ml-auto"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/HeroSection",
        class: "nav-link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "",
        class: "nav-link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Short Course `);
          } else {
            return [
              createTextVNode(" Short Course ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "",
        class: "nav-link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Experience `);
          } else {
            return [
              createTextVNode(" Experience ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/MyHeader",
        class: "nav-link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "ContactSection",
        class: "nav-link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MyHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MyHeader-BPos5U7i.js.map
