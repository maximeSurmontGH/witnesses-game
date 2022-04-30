var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1d801ba1 = require("../../chunks/index-1d801ba1.js");
var import_Invitation_d74634b8 = require("../../chunks/Invitation-d74634b8.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-18ss6oi{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--mdc-theme-secondary)}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Witnesses Game</title>`, ""}`, ""}

<section class="${"svelte-18ss6oi"}">${(0, import_index_1d801ba1.v)(import_Invitation_d74634b8.I, "Invitation").$$render($$result, {}, {}, {})}
</section>`;
});
