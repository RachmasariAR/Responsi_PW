import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "ufo";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="sosmed"><a href="#"><i class="fab fa-email"></i></a><a href="#"><i class="fab fa-github"></i></a><a href="#"><i class="fab fa-linkedin"></i></a><a href="#"><i class="fab fa-instagram"></i></a></div><ul class="list"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Project</a></li><li><a href="#">Contact</a></li><li><a href="#">Privacy &amp; Policy</a></li></ul><p class="copyright"> Rachmasari Annisa Rida - 22.11.4624 </p></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MyFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MyFooter as default
};
//# sourceMappingURL=MyFooter-BdCCPE4W.js.map
