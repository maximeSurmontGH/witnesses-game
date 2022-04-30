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
  I: () => Invitation
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1d801ba1 = require("./index-1d801ba1.js");
var Invitation_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1ev5pu{width:calc(100% - 40px);display:flex;flex-direction:column;justify-content:center;background-color:var(--mdc-theme-secondary);padding:20px}h1.svelte-1ev5pu{margin:0;font-size:10em;color:var(--mdc-theme-primary);width:100%}h3.svelte-1ev5pu{margin:0;font-size:5em;color:var(--mdc-theme-primary);width:100%}h5.svelte-1ev5pu{margin:0;font-size:2em;color:var(--mdc-theme-primary);width:100%;text-align:end}a.svelte-1ev5pu{color:var(--mdc-theme-primary)}@media(max-width: 1100px){h1.svelte-1ev5pu{font-size:5.5em}h3.svelte-1ev5pu{font-size:3em}h5.svelte-1ev5pu{font-size:1.5em}}@media(max-width: 600px){h1.svelte-1ev5pu{font-size:4em}h3.svelte-1ev5pu{font-size:2.5em}h5.svelte-1ev5pu{font-size:1em}}@media(max-width: 400px){h1.svelte-1ev5pu{font-size:3em}h3.svelte-1ev5pu{font-size:2em}h5.svelte-1ev5pu{font-size:1em}}",
  map: null
};
const Invitation = (0, import_index_1d801ba1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-1ev5pu"}"><h3 class="${"svelte-1ev5pu"}">Tu es invit\xE9 \xE0 :</h3>
	<h1 class="${"svelte-1ev5pu"}">&quot;Qui seront nos</h1>
	<h1 class="${"svelte-1ev5pu"}">t\xE9moins ?&quot;</h1>
	<h5 class="${"svelte-1ev5pu"}">Un jeu produit par Pellemont Ind.</h5>
	<h5 class="${"svelte-1ev5pu"}">Dimanche 1er mai \xE0 16h30 - <a target="${"_blank"}" href="${"https://www.google.com/maps?q=29+rue+Kant+LILLE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiyp-mA4v32AhVoRfEDHXIOBjMQ_AUoAXoECAEQAw"}" class="${"svelte-1ev5pu"}">29 rue Kant LILLE</a>.
	</h5>
	<h5 class="${"svelte-1ev5pu"}">En cas d&#39;insdisponibilit\xE9s, merci de pr\xE9venir les organisateurs au plus vite.</h5>
</section>`;
});
