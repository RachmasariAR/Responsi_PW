import { _ as __nuxt_component_0 } from "./nuxt-link-DyZc7qn_.js";
import { u as useHead } from "./index-BabADJUJ.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext, resolveComponent, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "@unhead/shared";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
        to: "/ContactSection",
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("Foto.jimFNxau.jpg");
const _sfc_main$3 = {
  name: "HeroSection"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h7 = resolveComponent("h7");
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" data-v-8c81329e><section class="hero" data-v-8c81329e><div class="container" data-v-8c81329e><div class="main-body" data-v-8c81329e><div class="row gutters-sm" data-v-8c81329e><div class="col-md-4 mb-3" data-v-8c81329e><div class="card" data-v-8c81329e><div class="card-body" data-v-8c81329e><div class="d-flex flex-column align-items-center text-center" data-v-8c81329e><img${ssrRenderAttr("src", _imports_0)} alt="Admin" class="rounded-circle" width="150" data-v-8c81329e><div class="mt-3" data-v-8c81329e><h4 data-v-8c81329e>Rachmasari Annisa Rida</h4><p class="text-secondary mb-1" data-v-8c81329e>Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan dan analisis data. </p></div></div></div></div><div class="card mt-3" data-v-8c81329e><ul class="list-group list-group-flush" data-v-8c81329e><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e><img src="https://w7.pngwing.com/pngs/528/1/png-transparent-logo-whatsapp-computer-icons-viber-text-viber-area.png" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline" data-v-8c81329e><circle cx="12" cy="12" r="10" data-v-8c81329e></circle><line x1="2" y1="12" x2="22" y2="12" data-v-8c81329e></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-8c81329e></path>Phone</h6><div class="text-left" data-v-8c81329e><span class="text-secondary" text-align="left" data-v-8c81329e><br data-v-8c81329e>+6287749934057</span></div></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e><img src="https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline" data-v-8c81329e><circle cx="12" cy="12" r="10" data-v-8c81329e></circle><line x1="2" y1="12" x2="22" y2="12" data-v-8c81329e></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-8c81329e></path>Gmail</h6><span class="text-secondary" data-v-8c81329e>rachmasari.ar@students.amikom.ac.id</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline" data-v-8c81329e><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-8c81329e></path></svg>Github</h6><span class="text-secondary" data-v-8c81329e>https://github.com/RachmasariAR</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e><img src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-Background-PNG-.png" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info" data-v-8c81329e><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-8c81329e></path>LinkedIn</h6><span class="text-secondary" data-v-8c81329e>https://www.linkedin.com/in/rachmasari-annisa-rida</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger" data-v-8c81329e><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-8c81329e></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-8c81329e></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-8c81329e></line></svg>Instagram</h6><span class="text-secondary" href="https://www.instagram.com/rachmasari_a.r/" data-v-8c81329e>https://www.instagram.com/rachmasari_a.r/</span></li></ul></div></div><div class="col-md-8" data-v-8c81329e><div class="card mb-3" data-v-8c81329e><div class="card-body" data-v-8c81329e><h5 class="d-flex align-items-center mb-3" data-v-8c81329e>Biodata</h5><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Full Name</h6></div><div class="col-sm-9 text-secondary" data-v-8c81329e> Rachmasari Annisa Rida </div></div><hr data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>NIM</h6></div><div class="col-sm-9 text-secondary" data-v-8c81329e> 22.11.4624 </div></div><hr data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Major</h6></div><div class="col-sm-9 text-secondary" data-v-8c81329e> S1 Informatika </div></div><hr data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Faculty</h6></div><div class="col-sm-9 text-secondary" data-v-8c81329e> Fakultas Ilmu Komputer </div></div><hr data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>University</h6></div><div class="col-sm-9 text-secondary" data-v-8c81329e> Universitas Amikom Yogyakarta </div></div><hr data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Address</h6></div><div class="col-sm-9 text-secondary" data-v-8c81329e> Sleman, Daerah Istimewa Yogyakarta </div></div><hr data-v-8c81329e><div class="row" data-v-8c81329e></div></div></div><div class="row gutters-sm" data-v-8c81329e><div class="col-md-12" data-v-8c81329e><div class="card mb-3" data-v-8c81329e><div class="card-body" data-v-8c81329e><h5 class="d-flex align-items-center mb-3" data-v-8c81329e>Skill</h5>`);
  _push(ssrRenderComponent(_component_h7, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-8c81329e${_scopeId}>Bahasa Inggris</li><li data-v-8c81329e${_scopeId}>Bahasa Pemrograman C++, SQL, Python, C#</li><li data-v-8c81329e${_scopeId}>Microsoft Office</li><li data-v-8c81329e${_scopeId}>Problem Solving</li><li data-v-8c81329e${_scopeId}>Mampu bekerja secara individu maupun tim</li><li data-v-8c81329e${_scopeId}>Mampu berkomunikasi secara efektif</li>`);
      } else {
        return [
          createVNode("li", null, "Bahasa Inggris"),
          createVNode("li", null, "Bahasa Pemrograman C++, SQL, Python, C#"),
          createVNode("li", null, "Microsoft Office"),
          createVNode("li", null, "Problem Solving"),
          createVNode("li", null, "Mampu bekerja secara individu maupun tim"),
          createVNode("li", null, "Mampu berkomunikasi secara efektif")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-md-12" data-v-8c81329e><div class="card mb-3" data-v-8c81329e><div class="card-body" data-v-8c81329e><h5 class="d-flex align-items-center mb-3" data-v-8c81329e>Short Course</h5><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Maret 2024</h6></div><div class="col-sm-9" data-v-8c81329e> Belajar Dasar Visualisasi Data <br data-v-8c81329e> Dicoding Indonesia </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>05–16 Februari 2024</h6></div><div class="col-sm-9" data-v-8c81329e> Mini Course Intro to Data Analytics <br data-v-8c81329e> RevoU </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>19 Maret 2023</h6></div><div class="col-sm-9" data-v-8c81329e> Short Class Basic Statistics and Data Visualization <br data-v-8c81329e> MySkill </div></div></div></div></div></div></div><div class="col-md-12" data-v-8c81329e><div class="card h-100" data-v-8c81329e><div class="card-body" data-v-8c81329e><h5 class="d-flex align-items-center mb-3" data-v-8c81329e>Experience</h5><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Apr 2024 - sekarang</h6></div><div class="col-sm-9" data-v-8c81329e> Anggota Hubungan Masyarakat <br data-v-8c81329e> CODE Amikom Computer Club 2024 </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Feb 2024 - sekarang</h6></div><div class="col-sm-9" data-v-8c81329e> Asisten Praktikum Semester 2 <br data-v-8c81329e> Mata Kuliah Struktur Data </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Jan 2024 – Feb 2024</h6></div><div class="col-sm-9" data-v-8c81329e> Anggota Hubungan Masyarakat <br data-v-8c81329e> AMCC Goes to School 2024 </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Sep 2023 – Jan 2024</h6></div><div class="col-sm-9" data-v-8c81329e> Asisten Praktikum Semester 1 <br data-v-8c81329e> Mata Kuliah Algoritma dan Pemrograman </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Okt 2020 – Okt 2021</h6></div><div class="col-sm-9" data-v-8c81329e> Koordinator Hubungan Masyarakat <br data-v-8c81329e> Dewan Ambalan SMAN 9 Yogyakarta </div></div> <br data-v-8c81329e><div class="row" data-v-8c81329e><div class="col-sm-3" data-v-8c81329e><h6 class="mb-0" data-v-8c81329e>Nov 2020 – Jul 2021</h6></div><div class="col-sm-9" data-v-8c81329e> Editor Majalah Bnine <br data-v-8c81329e> Ekstrakurikuler Jurnalistik SMAN 9 Yogyakarta </div></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8c81329e"]]);
const _sfc_main$2 = {
  name: "AboutSection"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-b9b240b1><div class="responsive-container-block bigContainer" data-v-b9b240b1><div class="responsive-container-block Container bottomContainer" data-v-b9b240b1><div class="ultimateImg" data-v-b9b240b1><img class="mainImg"${ssrRenderAttr("src", _imports_0)} height="100" data-v-b9b240b1></div><div class="col-md-8" data-v-b9b240b1><div class="allText bottomText" data-v-b9b240b1><h2 class="text-blk headingText" data-v-b9b240b1> About Me </h2><h5 class="text-blk subHeadingText" data-v-b9b240b1> Rachmasari Annisa Rida </h5><p class="text-blk description" data-v-b9b240b1> Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan dan analisis data. </p><button data-v-b9b240b1><a class="explore" href="https://drive.google.com/file/d/1LChpTxkduFRyoPVA7E-xXWQ1Ft9Wjs8O/view?usp=sharing" data-v-b9b240b1> Curriculum Vitae </a></button></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-b9b240b1"]]);
const _sfc_main$1 = {
  name: "ContactSection"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-58d381ef><h2 data-v-58d381ef>Contact Me</h2><p data-v-58d381ef>Email: rachmasari.ar@students.amikom.ac.id</p></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-58d381ef"]]);
const _sfc_main = {
  components: {
    MyHeader: _sfc_main$4,
    AboutSection: __nuxt_component_2,
    HeroSection: __nuxt_component_1,
    ContactSection: __nuxt_component_3
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MyHeader = _sfc_main$4;
  const _component_HeroSection = __nuxt_component_1;
  const _component_AboutSection = __nuxt_component_2;
  const _component_ContactSection = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MyHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-CaArgi4Q.js.map
