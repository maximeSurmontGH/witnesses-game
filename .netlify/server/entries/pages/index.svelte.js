var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
	key in obj
		? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
		: (obj[key] = value);
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols)
		for (var prop of __getOwnPropSymbols(b)) {
			if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
	return a;
};
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => Routes,
	prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f9eb35ed = require('../../chunks/index-f9eb35ed.js');
var import_tslib = require('tslib');
var Invitation_svelte_svelte_type_style_lang = '';
const css$5 = {
	code: 'section.svelte-1ev5pu{width:calc(100% - 40px);display:flex;flex-direction:column;justify-content:center;background-color:var(--mdc-theme-secondary);padding:20px}h1.svelte-1ev5pu{margin:0;font-size:10em;color:var(--mdc-theme-primary);width:100%}h3.svelte-1ev5pu{margin:0;font-size:5em;color:var(--mdc-theme-primary);width:100%}h5.svelte-1ev5pu{margin:0;font-size:2em;color:var(--mdc-theme-primary);width:100%;text-align:end}a.svelte-1ev5pu{color:var(--mdc-theme-primary)}@media(max-width: 1100px){h1.svelte-1ev5pu{font-size:5.5em}h3.svelte-1ev5pu{font-size:3em}h5.svelte-1ev5pu{font-size:1.5em}}@media(max-width: 600px){h1.svelte-1ev5pu{font-size:4em}h3.svelte-1ev5pu{font-size:2.5em}h5.svelte-1ev5pu{font-size:1em}}@media(max-width: 400px){h1.svelte-1ev5pu{font-size:3em}h3.svelte-1ev5pu{font-size:2em}h5.svelte-1ev5pu{font-size:1em}}',
	map: null
};
const Invitation = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$5);
	return `<section class="${'svelte-1ev5pu'}"><h3 class="${'svelte-1ev5pu'}">Tu es invit\xE9 \xE0 :</h3>
	<h1 class="${'svelte-1ev5pu'}">&quot;Qui seront nos</h1>
	<h1 class="${'svelte-1ev5pu'}">t\xE9moins ?&quot;</h1>
	<h5 class="${'svelte-1ev5pu'}">Un jeu produit par Pellemont Ind.</h5>
	<h5 class="${'svelte-1ev5pu'}">Dimanche 1er mai \xE0 16h30 - <a target="${'_blank'}" href="${'https://www.google.com/maps?q=29+rue+Kant+LILLE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiyp-mA4v32AhVoRfEDHXIOBjMQ_AUoAXoECAEQAw'}" class="${'svelte-1ev5pu'}">29 rue Kant LILLE</a>.
	</h5>
	<h5 class="${'svelte-1ev5pu'}">En cas d&#39;insdisponibilit\xE9s, merci de pr\xE9venir les organisateurs au plus vite.</h5>
</section>`;
});
const subscriber_queue = [];
function writable(value, start = import_index_f9eb35ed.n) {
	let stop;
	const subscribers = /* @__PURE__ */ new Set();
	function set(new_value) {
		if ((0, import_index_f9eb35ed.a)(value, new_value)) {
			value = new_value;
			if (stop) {
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}
	function update(fn) {
		set(fn(value));
	}
	function subscribe2(run, invalidate = import_index_f9eb35ed.n) {
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set) || import_index_f9eb35ed.n;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe: subscribe2 };
}
const initStore = () => ({
	displayInvitation: false,
	displayGameTitle: true,
	displayWheel: false,
	displayQuestion: false,
	displayScore: false,
	users: [
		{ id: 'id', name: 'paul', score: 1 },
		{ id: 'id', name: 'vidal', score: 12 },
		{ id: 'id', name: 'hugo', score: 26 },
		{ id: 'id', name: 'baptiste', score: 13 },
		{ id: 'id', name: 'nico', score: 2 },
		{ id: 'id', name: 'charles', score: 37 }
	]
});
const createStore = () => {
	const { subscribe: subscribe2, set, update } = writable(initStore());
	return {
		subscribe: subscribe2,
		update,
		set,
		reset: () => set(initStore())
	};
};
const store = createStore();
var GameTitle_svelte_svelte_type_style_lang = '';
const css$4 = {
	code: 'section.svelte-zzsjmx{padding:0 50px;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:var(--mdc-theme-secondary)}h1.svelte-zzsjmx{margin:0;font-size:14em;color:var(--mdc-theme-primary);width:100%}@media(max-width: 1100px){h1.svelte-zzsjmx{font-size:8em}}@media(max-width: 600px){h1.svelte-zzsjmx{font-size:5em}}@media(max-width: 400px){h1.svelte-zzsjmx{font-size:4em}}p.svelte-zzsjmx{font-size:3em;color:var(--mdc-theme-primary);align-self:flex-end;padding-right:20px;text-decoration:underline;cursor:pointer}',
	map: null
};
const GameTitle = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$unsubscribe_store;
	$$unsubscribe_store = (0, import_index_f9eb35ed.b)(store, (value) => value);
	$$result.css.add(css$4);
	$$unsubscribe_store();
	return `<section class="${'svelte-zzsjmx'}"><h1 class="${'svelte-zzsjmx'}">Qui sera mon</h1>
	<h1 class="${'svelte-zzsjmx'}">t\xE9moin ?</h1>

	<p class="${'svelte-zzsjmx'}">Rejoindre le jeu
	</p>
</section>`;
});
function classMap(classObj) {
	return Object.entries(classObj)
		.filter(([name, value]) => name !== '' && value)
		.map(([name]) => name)
		.join(' ');
}
const oldModifierRegex =
	/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex =
	/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
	let $on;
	let events2 = [];
	component.$on = (fullEventType, callback) => {
		let eventType = fullEventType;
		let destructor = () => {};
		if ($on) {
			destructor = $on(eventType, callback);
		} else {
			events2.push([eventType, callback]);
		}
		const oldModifierMatch = eventType.match(oldModifierRegex);
		if (oldModifierMatch && console) {
			console.warn(
				'Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',
				eventType
			);
		}
		return () => {
			destructor();
		};
	};
	function forward(e) {
		(0, import_index_f9eb35ed.d)(component, e);
	}
	return (node) => {
		const destructors = [];
		const forwardDestructors = {};
		$on = (fullEventType, callback) => {
			let eventType = fullEventType;
			let handler = callback;
			let options = false;
			const oldModifierMatch = eventType.match(oldModifierRegex);
			const newModifierMatch = eventType.match(newModifierRegex);
			const modifierMatch = oldModifierMatch || newModifierMatch;
			if (eventType.match(/^SMUI:\w+:/)) {
				const newEventTypeParts = eventType.split(':');
				let newEventType = '';
				for (let i = 0; i < newEventTypeParts.length; i++) {
					newEventType +=
						i === newEventTypeParts.length - 1
							? ':' + newEventTypeParts[i]
							: newEventTypeParts[i]
									.split('-')
									.map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
									.join('');
				}
				console.warn(
					`The event ${eventType.split('$')[0]} has been renamed to ${newEventType.split('$')[0]}.`
				);
				eventType = newEventType;
			}
			if (modifierMatch) {
				const parts = eventType.split(oldModifierMatch ? ':' : '$');
				eventType = parts[0];
				const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
				if (eventOptions.passive) {
					options = options || {};
					options.passive = true;
				}
				if (eventOptions.nonpassive) {
					options = options || {};
					options.passive = false;
				}
				if (eventOptions.capture) {
					options = options || {};
					options.capture = true;
				}
				if (eventOptions.once) {
					options = options || {};
					options.once = true;
				}
				if (eventOptions.preventDefault) {
					handler = (0, import_index_f9eb35ed.p)(handler);
				}
				if (eventOptions.stopPropagation) {
					handler = (0, import_index_f9eb35ed.f)(handler);
				}
			}
			const off = (0, import_index_f9eb35ed.l)(node, eventType, handler, options);
			const destructor = () => {
				off();
				const idx = destructors.indexOf(destructor);
				if (idx > -1) {
					destructors.splice(idx, 1);
				}
			};
			destructors.push(destructor);
			if (!(eventType in forwardDestructors)) {
				forwardDestructors[eventType] = (0, import_index_f9eb35ed.l)(node, eventType, forward);
			}
			return destructor;
		};
		for (let i = 0; i < events2.length; i++) {
			$on(events2[i][0], events2[i][1]);
		}
		return {
			destroy: () => {
				for (let i = 0; i < destructors.length; i++) {
					destructors[i]();
				}
				for (let entry of Object.entries(forwardDestructors)) {
					entry[1]();
				}
			}
		};
	};
}
const Card = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, [
		'use',
		'class',
		'variant',
		'padded',
		'getElement'
	]);
	forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { variant = 'raised' } = $$props;
	let { padded = false } = $$props;
	let element;
	function getElement() {
		return element;
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
		$$bindings.variant(variant);
	if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
		$$bindings.padded(padded);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	return `<div${(0, import_index_f9eb35ed.i)(
		[
			{
				class: (0, import_index_f9eb35ed.j)(
					classMap({
						[className]: true,
						'mdc-card': true,
						'mdc-card--outlined': variant === 'outlined',
						'smui-card--padded': padded
					})
				)
			},
			(0, import_index_f9eb35ed.k)($$restProps)
		],
		{}
	)}${(0, import_index_f9eb35ed.o)('this', element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Div$1 = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, ['use', 'getElement']);
	let { use = [] } = $$props;
	forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let element;
	function getElement() {
		return element;
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	return `<div${(0, import_index_f9eb35ed.i)([(0, import_index_f9eb35ed.k)($$restProps)], {})}${(0,
	import_index_f9eb35ed.o)('this', element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const { Object: Object_1$1 } = import_index_f9eb35ed.t;
const internals = {
	component: Div$1,
	class: '',
	classMap: {},
	contexts: {},
	props: {}
};
const ClassAdder = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, [
		'use',
		'class',
		'component',
		'getElement'
	]);
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let element;
	const smuiClass = internals.class;
	const smuiClassMap = {};
	const smuiClassUnsubscribes = [];
	const contexts = internals.contexts;
	const props = internals.props;
	let { component = internals.component } = $$props;
	Object.entries(internals.classMap).forEach(([name, context]) => {
		const store2 = (0, import_index_f9eb35ed.q)(context);
		if (store2 && 'subscribe' in store2) {
			smuiClassUnsubscribes.push(
				store2.subscribe((value) => {
					smuiClassMap[name] = value;
				})
			);
		}
	});
	const forwardEvents = forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	for (let context in contexts) {
		if (contexts.hasOwnProperty(context)) {
			(0, import_index_f9eb35ed.s)(context, contexts[context]);
		}
	}
	(0, import_index_f9eb35ed.r)(() => {
		for (const unsubscribe of smuiClassUnsubscribes) {
			unsubscribe();
		}
	});
	function getElement() {
		return element.getElement();
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.component === void 0 && $$bindings.component && component !== void 0)
		$$bindings.component(component);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		$$rendered = `${(0, import_index_f9eb35ed.v)(
			component || import_index_f9eb35ed.m,
			'svelte:component'
		).$$render(
			$$result,
			Object_1$1.assign(
				{ use: [forwardEvents, ...use] },
				{
					class: classMap(
						__spreadValues(
							{
								[className]: true,
								[smuiClass]: true
							},
							smuiClassMap
						)
					)
				},
				props,
				$$restProps,
				{ this: element }
			),
			{
				this: ($$value) => {
					element = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `${slots.default ? slots.default({}) : ``}`;
				}
			}
		)}`;
	} while (!$$settled);
	return $$rendered;
});
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
	return new Proxy(ClassAdder, {
		construct: function (target, args) {
			Object.assign(internals, defaults, props);
			return new target(...args);
		},
		get: function (target, prop) {
			Object.assign(internals, defaults, props);
			return target[prop];
		}
	});
}
const A$1 = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, ['use', 'href', 'getElement']);
	let { use = [] } = $$props;
	let { href = 'javascript:void(0);' } = $$props;
	forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let element;
	function getElement() {
		return element;
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	return `<a${(0, import_index_f9eb35ed.i)(
		[{ href: (0, import_index_f9eb35ed.j)(href) }, (0, import_index_f9eb35ed.k)($$restProps)],
		{}
	)}${(0, import_index_f9eb35ed.o)('this', element, 0)}>${
		slots.default ? slots.default({}) : ``
	}</a>`;
});
const Button$1 = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, ['use', 'getElement']);
	let { use = [] } = $$props;
	forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let element;
	function getElement() {
		return element;
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	return `<button${(0, import_index_f9eb35ed.i)(
		[(0, import_index_f9eb35ed.k)($$restProps)],
		{}
	)}${(0, import_index_f9eb35ed.o)('this', element, 0)}>${
		slots.default ? slots.default({}) : ``
	}</button>`;
});
const Span = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, ['use', 'getElement']);
	let { use = [] } = $$props;
	forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let element;
	function getElement() {
		return element;
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	return `<span${(0, import_index_f9eb35ed.i)([(0, import_index_f9eb35ed.k)($$restProps)], {})}${(0,
	import_index_f9eb35ed.o)('this', element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
const A = A$1;
const Button = Button$1;
const Div = Div$1;
var Content = classAdderBuilder({
	class: 'smui-card__content',
	component: Div
});
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
	if (forceRefresh === void 0) {
		forceRefresh = false;
	}
	var CSS = windowObj.CSS;
	var supportsCssVars = supportsCssVariables_;
	if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
		return supportsCssVariables_;
	}
	var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
	if (!supportsFunctionPresent) {
		return false;
	}
	var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
	var weAreFeatureDetectingSafari10plus =
		CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
	supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
	if (!forceRefresh) {
		supportsCssVariables_ = supportsCssVars;
	}
	return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
	if (!evt) {
		return { x: 0, y: 0 };
	}
	var x = pageOffset.x,
		y = pageOffset.y;
	var documentX = x + clientRect.left;
	var documentY = y + clientRect.top;
	var normalizedX;
	var normalizedY;
	if (evt.type === 'touchstart') {
		var touchEvent = evt;
		normalizedX = touchEvent.changedTouches[0].pageX - documentX;
		normalizedY = touchEvent.changedTouches[0].pageY - documentY;
	} else {
		var mouseEvent = evt;
		normalizedX = mouseEvent.pageX - documentX;
		normalizedY = mouseEvent.pageY - documentY;
	}
	return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = (function () {
	function MDCFoundation2(adapter) {
		if (adapter === void 0) {
			adapter = {};
		}
		this.adapter = adapter;
	}
	Object.defineProperty(MDCFoundation2, 'cssClasses', {
		get: function () {
			return {};
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(MDCFoundation2, 'strings', {
		get: function () {
			return {};
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(MDCFoundation2, 'numbers', {
		get: function () {
			return {};
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(MDCFoundation2, 'defaultAdapter', {
		get: function () {
			return {};
		},
		enumerable: false,
		configurable: true
	});
	MDCFoundation2.prototype.init = function () {};
	MDCFoundation2.prototype.destroy = function () {};
	return MDCFoundation2;
})();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function applyPassive$1(globalObj) {
	if (globalObj === void 0) {
		globalObj = window;
	}
	return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
	if (globalObj === void 0) {
		globalObj = window;
	}
	var passiveSupported = false;
	try {
		var options = {
			get passive() {
				passiveSupported = true;
				return false;
			}
		};
		var handler = function () {};
		globalObj.document.addEventListener('test', handler, options);
		globalObj.document.removeEventListener('test', handler, options);
	} catch (err) {
		passiveSupported = false;
	}
	return passiveSupported;
}
var events = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			applyPassive: applyPassive$1
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function closest(element, selector) {
	if (element.closest) {
		return element.closest(selector);
	}
	var el = element;
	while (el) {
		if (matches$1(el, selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
}
function matches$1(element, selector) {
	var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
	return nativeMatches.call(element, selector);
}
function estimateScrollWidth(element) {
	var htmlEl = element;
	if (htmlEl.offsetParent !== null) {
		return htmlEl.scrollWidth;
	}
	var clone = htmlEl.cloneNode(true);
	clone.style.setProperty('position', 'absolute');
	clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
	document.documentElement.appendChild(clone);
	var scrollWidth = clone.scrollWidth;
	document.documentElement.removeChild(clone);
	return scrollWidth;
}
var ponyfill = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			closest,
			matches: matches$1,
			estimateScrollWidth
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
	BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
	FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
	FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
	ROOT: 'mdc-ripple-upgraded',
	UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
	VAR_FG_SCALE: '--mdc-ripple-fg-scale',
	VAR_FG_SIZE: '--mdc-ripple-fg-size',
	VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
	VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
	VAR_LEFT: '--mdc-ripple-left',
	VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
	DEACTIVATION_TIMEOUT_MS: 225,
	FG_DEACTIVATION_MS: 150,
	INITIAL_ORIGIN_SCALE: 0.6,
	PADDING: 10,
	TAP_DELAY_MS: 300
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
var activatedTargets = [];
var MDCRippleFoundation = (function (_super) {
	(0, import_tslib.__extends)(MDCRippleFoundation2, _super);
	function MDCRippleFoundation2(adapter) {
		var _this =
			_super.call(
				this,
				(0, import_tslib.__assign)(
					(0, import_tslib.__assign)({}, MDCRippleFoundation2.defaultAdapter),
					adapter
				)
			) || this;
		_this.activationAnimationHasEnded = false;
		_this.activationTimer = 0;
		_this.fgDeactivationRemovalTimer = 0;
		_this.fgScale = '0';
		_this.frame = { width: 0, height: 0 };
		_this.initialSize = 0;
		_this.layoutFrame = 0;
		_this.maxRadius = 0;
		_this.unboundedCoords = { left: 0, top: 0 };
		_this.activationState = _this.defaultActivationState();
		_this.activationTimerCallback = function () {
			_this.activationAnimationHasEnded = true;
			_this.runDeactivationUXLogicIfReady();
		};
		_this.activateHandler = function (e) {
			_this.activateImpl(e);
		};
		_this.deactivateHandler = function () {
			_this.deactivateImpl();
		};
		_this.focusHandler = function () {
			_this.handleFocus();
		};
		_this.blurHandler = function () {
			_this.handleBlur();
		};
		_this.resizeHandler = function () {
			_this.layout();
		};
		return _this;
	}
	Object.defineProperty(MDCRippleFoundation2, 'cssClasses', {
		get: function () {
			return cssClasses;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(MDCRippleFoundation2, 'strings', {
		get: function () {
			return strings;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(MDCRippleFoundation2, 'numbers', {
		get: function () {
			return numbers;
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(MDCRippleFoundation2, 'defaultAdapter', {
		get: function () {
			return {
				addClass: function () {
					return void 0;
				},
				browserSupportsCssVars: function () {
					return true;
				},
				computeBoundingRect: function () {
					return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
				},
				containsEventTarget: function () {
					return true;
				},
				deregisterDocumentInteractionHandler: function () {
					return void 0;
				},
				deregisterInteractionHandler: function () {
					return void 0;
				},
				deregisterResizeHandler: function () {
					return void 0;
				},
				getWindowPageOffset: function () {
					return { x: 0, y: 0 };
				},
				isSurfaceActive: function () {
					return true;
				},
				isSurfaceDisabled: function () {
					return true;
				},
				isUnbounded: function () {
					return true;
				},
				registerDocumentInteractionHandler: function () {
					return void 0;
				},
				registerInteractionHandler: function () {
					return void 0;
				},
				registerResizeHandler: function () {
					return void 0;
				},
				removeClass: function () {
					return void 0;
				},
				updateCssVariable: function () {
					return void 0;
				}
			};
		},
		enumerable: false,
		configurable: true
	});
	MDCRippleFoundation2.prototype.init = function () {
		var _this = this;
		var supportsPressRipple = this.supportsPressRipple();
		this.registerRootHandlers(supportsPressRipple);
		if (supportsPressRipple) {
			var _a = MDCRippleFoundation2.cssClasses,
				ROOT_1 = _a.ROOT,
				UNBOUNDED_1 = _a.UNBOUNDED;
			requestAnimationFrame(function () {
				_this.adapter.addClass(ROOT_1);
				if (_this.adapter.isUnbounded()) {
					_this.adapter.addClass(UNBOUNDED_1);
					_this.layoutInternal();
				}
			});
		}
	};
	MDCRippleFoundation2.prototype.destroy = function () {
		var _this = this;
		if (this.supportsPressRipple()) {
			if (this.activationTimer) {
				clearTimeout(this.activationTimer);
				this.activationTimer = 0;
				this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
			}
			if (this.fgDeactivationRemovalTimer) {
				clearTimeout(this.fgDeactivationRemovalTimer);
				this.fgDeactivationRemovalTimer = 0;
				this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
			}
			var _a = MDCRippleFoundation2.cssClasses,
				ROOT_2 = _a.ROOT,
				UNBOUNDED_2 = _a.UNBOUNDED;
			requestAnimationFrame(function () {
				_this.adapter.removeClass(ROOT_2);
				_this.adapter.removeClass(UNBOUNDED_2);
				_this.removeCssVars();
			});
		}
		this.deregisterRootHandlers();
		this.deregisterDeactivationHandlers();
	};
	MDCRippleFoundation2.prototype.activate = function (evt) {
		this.activateImpl(evt);
	};
	MDCRippleFoundation2.prototype.deactivate = function () {
		this.deactivateImpl();
	};
	MDCRippleFoundation2.prototype.layout = function () {
		var _this = this;
		if (this.layoutFrame) {
			cancelAnimationFrame(this.layoutFrame);
		}
		this.layoutFrame = requestAnimationFrame(function () {
			_this.layoutInternal();
			_this.layoutFrame = 0;
		});
	};
	MDCRippleFoundation2.prototype.setUnbounded = function (unbounded) {
		var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
		if (unbounded) {
			this.adapter.addClass(UNBOUNDED);
		} else {
			this.adapter.removeClass(UNBOUNDED);
		}
	};
	MDCRippleFoundation2.prototype.handleFocus = function () {
		var _this = this;
		requestAnimationFrame(function () {
			return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
		});
	};
	MDCRippleFoundation2.prototype.handleBlur = function () {
		var _this = this;
		requestAnimationFrame(function () {
			return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
		});
	};
	MDCRippleFoundation2.prototype.supportsPressRipple = function () {
		return this.adapter.browserSupportsCssVars();
	};
	MDCRippleFoundation2.prototype.defaultActivationState = function () {
		return {
			activationEvent: void 0,
			hasDeactivationUXRun: false,
			isActivated: false,
			isProgrammatic: false,
			wasActivatedByPointer: false,
			wasElementMadeActive: false
		};
	};
	MDCRippleFoundation2.prototype.registerRootHandlers = function (supportsPressRipple) {
		var e_1, _a;
		if (supportsPressRipple) {
			try {
				for (
					var ACTIVATION_EVENT_TYPES_1 = (0, import_tslib.__values)(ACTIVATION_EVENT_TYPES),
						ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next();
					!ACTIVATION_EVENT_TYPES_1_1.done;
					ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()
				) {
					var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
					this.adapter.registerInteractionHandler(evtType, this.activateHandler);
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (
						ACTIVATION_EVENT_TYPES_1_1 &&
						!ACTIVATION_EVENT_TYPES_1_1.done &&
						(_a = ACTIVATION_EVENT_TYPES_1.return)
					)
						_a.call(ACTIVATION_EVENT_TYPES_1);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
			if (this.adapter.isUnbounded()) {
				this.adapter.registerResizeHandler(this.resizeHandler);
			}
		}
		this.adapter.registerInteractionHandler('focus', this.focusHandler);
		this.adapter.registerInteractionHandler('blur', this.blurHandler);
	};
	MDCRippleFoundation2.prototype.registerDeactivationHandlers = function (evt) {
		var e_2, _a;
		if (evt.type === 'keydown') {
			this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
		} else {
			try {
				for (
					var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0, import_tslib.__values)(
							POINTER_DEACTIVATION_EVENT_TYPES
						),
						POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next();
					!POINTER_DEACTIVATION_EVENT_TYPES_1_1.done;
					POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()
				) {
					var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
					this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
				}
			} catch (e_2_1) {
				e_2 = { error: e_2_1 };
			} finally {
				try {
					if (
						POINTER_DEACTIVATION_EVENT_TYPES_1_1 &&
						!POINTER_DEACTIVATION_EVENT_TYPES_1_1.done &&
						(_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)
					)
						_a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
				} finally {
					if (e_2) throw e_2.error;
				}
			}
		}
	};
	MDCRippleFoundation2.prototype.deregisterRootHandlers = function () {
		var e_3, _a;
		try {
			for (
				var ACTIVATION_EVENT_TYPES_2 = (0, import_tslib.__values)(ACTIVATION_EVENT_TYPES),
					ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next();
				!ACTIVATION_EVENT_TYPES_2_1.done;
				ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()
			) {
				var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
				this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
			}
		} catch (e_3_1) {
			e_3 = { error: e_3_1 };
		} finally {
			try {
				if (
					ACTIVATION_EVENT_TYPES_2_1 &&
					!ACTIVATION_EVENT_TYPES_2_1.done &&
					(_a = ACTIVATION_EVENT_TYPES_2.return)
				)
					_a.call(ACTIVATION_EVENT_TYPES_2);
			} finally {
				if (e_3) throw e_3.error;
			}
		}
		this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
		this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
		if (this.adapter.isUnbounded()) {
			this.adapter.deregisterResizeHandler(this.resizeHandler);
		}
	};
	MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function () {
		var e_4, _a;
		this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
		try {
			for (
				var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0, import_tslib.__values)(
						POINTER_DEACTIVATION_EVENT_TYPES
					),
					POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next();
				!POINTER_DEACTIVATION_EVENT_TYPES_2_1.done;
				POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()
			) {
				var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
				this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
			}
		} catch (e_4_1) {
			e_4 = { error: e_4_1 };
		} finally {
			try {
				if (
					POINTER_DEACTIVATION_EVENT_TYPES_2_1 &&
					!POINTER_DEACTIVATION_EVENT_TYPES_2_1.done &&
					(_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)
				)
					_a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
			} finally {
				if (e_4) throw e_4.error;
			}
		}
	};
	MDCRippleFoundation2.prototype.removeCssVars = function () {
		var _this = this;
		var rippleStrings = MDCRippleFoundation2.strings;
		var keys = Object.keys(rippleStrings);
		keys.forEach(function (key) {
			if (key.indexOf('VAR_') === 0) {
				_this.adapter.updateCssVariable(rippleStrings[key], null);
			}
		});
	};
	MDCRippleFoundation2.prototype.activateImpl = function (evt) {
		var _this = this;
		if (this.adapter.isSurfaceDisabled()) {
			return;
		}
		var activationState = this.activationState;
		if (activationState.isActivated) {
			return;
		}
		var previousActivationEvent = this.previousActivationEvent;
		var isSameInteraction =
			previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
		if (isSameInteraction) {
			return;
		}
		activationState.isActivated = true;
		activationState.isProgrammatic = evt === void 0;
		activationState.activationEvent = evt;
		activationState.wasActivatedByPointer = activationState.isProgrammatic
			? false
			: evt !== void 0 &&
			  (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
		var hasActivatedChild =
			evt !== void 0 &&
			activatedTargets.length > 0 &&
			activatedTargets.some(function (target) {
				return _this.adapter.containsEventTarget(target);
			});
		if (hasActivatedChild) {
			this.resetActivationState();
			return;
		}
		if (evt !== void 0) {
			activatedTargets.push(evt.target);
			this.registerDeactivationHandlers(evt);
		}
		activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
		if (activationState.wasElementMadeActive) {
			this.animateActivation();
		}
		requestAnimationFrame(function () {
			activatedTargets = [];
			if (
				!activationState.wasElementMadeActive &&
				evt !== void 0 &&
				(evt.key === ' ' || evt.keyCode === 32)
			) {
				activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
				if (activationState.wasElementMadeActive) {
					_this.animateActivation();
				}
			}
			if (!activationState.wasElementMadeActive) {
				_this.activationState = _this.defaultActivationState();
			}
		});
	};
	MDCRippleFoundation2.prototype.checkElementMadeActive = function (evt) {
		return evt !== void 0 && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;
	};
	MDCRippleFoundation2.prototype.animateActivation = function () {
		var _this = this;
		var _a = MDCRippleFoundation2.strings,
			VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
			VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
		var _b = MDCRippleFoundation2.cssClasses,
			FG_DEACTIVATION = _b.FG_DEACTIVATION,
			FG_ACTIVATION = _b.FG_ACTIVATION;
		var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
		this.layoutInternal();
		var translateStart = '';
		var translateEnd = '';
		if (!this.adapter.isUnbounded()) {
			var _c = this.getFgTranslationCoordinates(),
				startPoint = _c.startPoint,
				endPoint = _c.endPoint;
			translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
			translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
		}
		this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
		this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
		clearTimeout(this.activationTimer);
		clearTimeout(this.fgDeactivationRemovalTimer);
		this.rmBoundedActivationClasses();
		this.adapter.removeClass(FG_DEACTIVATION);
		this.adapter.computeBoundingRect();
		this.adapter.addClass(FG_ACTIVATION);
		this.activationTimer = setTimeout(function () {
			_this.activationTimerCallback();
		}, DEACTIVATION_TIMEOUT_MS);
	};
	MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function () {
		var _a = this.activationState,
			activationEvent = _a.activationEvent,
			wasActivatedByPointer = _a.wasActivatedByPointer;
		var startPoint;
		if (wasActivatedByPointer) {
			startPoint = getNormalizedEventCoords(
				activationEvent,
				this.adapter.getWindowPageOffset(),
				this.adapter.computeBoundingRect()
			);
		} else {
			startPoint = {
				x: this.frame.width / 2,
				y: this.frame.height / 2
			};
		}
		startPoint = {
			x: startPoint.x - this.initialSize / 2,
			y: startPoint.y - this.initialSize / 2
		};
		var endPoint = {
			x: this.frame.width / 2 - this.initialSize / 2,
			y: this.frame.height / 2 - this.initialSize / 2
		};
		return { startPoint, endPoint };
	};
	MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function () {
		var _this = this;
		var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
		var _a = this.activationState,
			hasDeactivationUXRun = _a.hasDeactivationUXRun,
			isActivated = _a.isActivated;
		var activationHasEnded = hasDeactivationUXRun || !isActivated;
		if (activationHasEnded && this.activationAnimationHasEnded) {
			this.rmBoundedActivationClasses();
			this.adapter.addClass(FG_DEACTIVATION);
			this.fgDeactivationRemovalTimer = setTimeout(function () {
				_this.adapter.removeClass(FG_DEACTIVATION);
			}, numbers.FG_DEACTIVATION_MS);
		}
	};
	MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function () {
		var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
		this.adapter.removeClass(FG_ACTIVATION);
		this.activationAnimationHasEnded = false;
		this.adapter.computeBoundingRect();
	};
	MDCRippleFoundation2.prototype.resetActivationState = function () {
		var _this = this;
		this.previousActivationEvent = this.activationState.activationEvent;
		this.activationState = this.defaultActivationState();
		setTimeout(function () {
			return (_this.previousActivationEvent = void 0);
		}, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
	};
	MDCRippleFoundation2.prototype.deactivateImpl = function () {
		var _this = this;
		var activationState = this.activationState;
		if (!activationState.isActivated) {
			return;
		}
		var state = (0, import_tslib.__assign)({}, activationState);
		if (activationState.isProgrammatic) {
			requestAnimationFrame(function () {
				_this.animateDeactivation(state);
			});
			this.resetActivationState();
		} else {
			this.deregisterDeactivationHandlers();
			requestAnimationFrame(function () {
				_this.activationState.hasDeactivationUXRun = true;
				_this.animateDeactivation(state);
				_this.resetActivationState();
			});
		}
	};
	MDCRippleFoundation2.prototype.animateDeactivation = function (_a) {
		var wasActivatedByPointer = _a.wasActivatedByPointer,
			wasElementMadeActive = _a.wasElementMadeActive;
		if (wasActivatedByPointer || wasElementMadeActive) {
			this.runDeactivationUXLogicIfReady();
		}
	};
	MDCRippleFoundation2.prototype.layoutInternal = function () {
		var _this = this;
		this.frame = this.adapter.computeBoundingRect();
		var maxDim = Math.max(this.frame.height, this.frame.width);
		var getBoundedRadius = function () {
			var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
			return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
		};
		this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
		var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
		if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
			this.initialSize = initialSize - 1;
		} else {
			this.initialSize = initialSize;
		}
		this.fgScale = '' + this.maxRadius / this.initialSize;
		this.updateLayoutCssVars();
	};
	MDCRippleFoundation2.prototype.updateLayoutCssVars = function () {
		var _a = MDCRippleFoundation2.strings,
			VAR_FG_SIZE = _a.VAR_FG_SIZE,
			VAR_LEFT = _a.VAR_LEFT,
			VAR_TOP = _a.VAR_TOP,
			VAR_FG_SCALE = _a.VAR_FG_SCALE;
		this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + 'px');
		this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
		if (this.adapter.isUnbounded()) {
			this.unboundedCoords = {
				left: Math.round(this.frame.width / 2 - this.initialSize / 2),
				top: Math.round(this.frame.height / 2 - this.initialSize / 2)
			};
			this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + 'px');
			this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + 'px');
		}
	};
	return MDCRippleFoundation2;
})(MDCFoundation);
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(
	node,
	{
		ripple = true,
		surface = false,
		unbounded = false,
		disabled = false,
		color,
		active,
		rippleElement,
		eventTarget,
		activeTarget,
		addClass = (className) => node.classList.add(className),
		removeClass = (className) => node.classList.remove(className),
		addStyle = (name, value) => node.style.setProperty(name, value),
		initPromise = Promise.resolve()
	} = {}
) {
	let instance;
	let addLayoutListener = (0, import_index_f9eb35ed.q)('SMUI:addLayoutListener');
	let removeLayoutListener;
	let oldActive = active;
	let oldEventTarget = eventTarget;
	let oldActiveTarget = activeTarget;
	function handleProps() {
		if (surface) {
			addClass('mdc-ripple-surface');
			if (color === 'primary') {
				addClass('smui-ripple-surface--primary');
				removeClass('smui-ripple-surface--secondary');
			} else if (color === 'secondary') {
				removeClass('smui-ripple-surface--primary');
				addClass('smui-ripple-surface--secondary');
			} else {
				removeClass('smui-ripple-surface--primary');
				removeClass('smui-ripple-surface--secondary');
			}
		} else {
			removeClass('mdc-ripple-surface');
			removeClass('smui-ripple-surface--primary');
			removeClass('smui-ripple-surface--secondary');
		}
		if (instance && oldActive !== active) {
			oldActive = active;
			if (active) {
				instance.activate();
			} else if (active === false) {
				instance.deactivate();
			}
		}
		if (ripple && !instance) {
			instance = new MDCRippleFoundation({
				addClass,
				browserSupportsCssVars: () => supportsCssVariables(window),
				computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
				containsEventTarget: (target) => node.contains(target),
				deregisterDocumentInteractionHandler: (evtType, handler) =>
					document.documentElement.removeEventListener(evtType, handler, applyPassive()),
				deregisterInteractionHandler: (evtType, handler) =>
					(eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
				deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
				getWindowPageOffset: () => ({
					x: window.pageXOffset,
					y: window.pageYOffset
				}),
				isSurfaceActive: () => (active == null ? matches(activeTarget || node, ':active') : active),
				isSurfaceDisabled: () => !!disabled,
				isUnbounded: () => !!unbounded,
				registerDocumentInteractionHandler: (evtType, handler) =>
					document.documentElement.addEventListener(evtType, handler, applyPassive()),
				registerInteractionHandler: (evtType, handler) =>
					(eventTarget || node).addEventListener(evtType, handler, applyPassive()),
				registerResizeHandler: (handler) => window.addEventListener('resize', handler),
				removeClass,
				updateCssVariable: addStyle
			});
			initPromise.then(() => {
				if (instance) {
					instance.init();
					instance.setUnbounded(unbounded);
				}
			});
		} else if (instance && !ripple) {
			initPromise.then(() => {
				if (instance) {
					instance.destroy();
					instance = void 0;
				}
			});
		}
		if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
			oldEventTarget = eventTarget;
			oldActiveTarget = activeTarget;
			instance.destroy();
			requestAnimationFrame(() => {
				if (instance) {
					instance.init();
					instance.setUnbounded(unbounded);
				}
			});
		}
		if (!ripple && unbounded) {
			addClass('mdc-ripple-upgraded--unbounded');
		}
	}
	handleProps();
	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}
	function layout() {
		if (instance) {
			instance.layout();
		}
	}
	return {
		update(props) {
			({
				ripple,
				surface,
				unbounded,
				disabled,
				color,
				active,
				rippleElement,
				eventTarget,
				activeTarget,
				addClass,
				removeClass,
				addStyle,
				initPromise
			} = Object.assign(
				{
					ripple: true,
					surface: false,
					unbounded: false,
					disabled: false,
					color: void 0,
					active: void 0,
					rippleElement: void 0,
					eventTarget: void 0,
					activeTarget: void 0,
					addClass: (className) => node.classList.add(className),
					removeClass: (className) => node.classList.remove(className),
					addStyle: (name, value) => node.style.setProperty(name, value),
					initPromise: Promise.resolve()
				},
				props
			));
			handleProps();
		},
		destroy() {
			if (instance) {
				instance.destroy();
				instance = void 0;
				removeClass('mdc-ripple-surface');
				removeClass('smui-ripple-surface--primary');
				removeClass('smui-ripple-surface--secondary');
			}
			if (removeLayoutListener) {
				removeLayoutListener();
			}
		}
	};
}
classAdderBuilder({
	class: 'mdc-card__media-content',
	component: Div
});
const Actions$1 = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, [
		'use',
		'class',
		'fullBleed',
		'getElement'
	]);
	forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { fullBleed = false } = $$props;
	let element;
	(0, import_index_f9eb35ed.s)('SMUI:button:context', 'card:action');
	(0, import_index_f9eb35ed.s)('SMUI:icon-button:context', 'card:action');
	function getElement() {
		return element;
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
		$$bindings.fullBleed(fullBleed);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	return `<div${(0, import_index_f9eb35ed.i)(
		[
			{
				class: (0, import_index_f9eb35ed.j)(
					classMap({
						[className]: true,
						'mdc-card__actions': true,
						'mdc-card__actions--full-bleed': fullBleed
					})
				)
			},
			(0, import_index_f9eb35ed.k)($$restProps)
		],
		{}
	)}${(0, import_index_f9eb35ed.o)('this', element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
classAdderBuilder({
	class: 'mdc-card__action-buttons',
	component: Div
});
classAdderBuilder({
	class: 'mdc-card__action-icons',
	component: Div
});
const Actions = Actions$1;
const { Object: Object_1 } = import_index_f9eb35ed.t;
const Button_1 = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let actionProp;
	let defaultProp;
	let secondaryProp;
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, [
		'use',
		'class',
		'style',
		'ripple',
		'color',
		'variant',
		'touch',
		'href',
		'action',
		'defaultAction',
		'secondary',
		'component',
		'getElement'
	]);
	const forwardEvents = forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let { style = '' } = $$props;
	let { ripple = true } = $$props;
	let { color = 'primary' } = $$props;
	let { variant = 'text' } = $$props;
	let { touch = false } = $$props;
	let { href = void 0 } = $$props;
	let { action = 'close' } = $$props;
	let { defaultAction = false } = $$props;
	let { secondary = false } = $$props;
	let element;
	let internalClasses = {};
	let internalStyles = {};
	let context = (0, import_index_f9eb35ed.q)('SMUI:button:context');
	let { component = href == null ? Button : A } = $$props;
	let previousDisabled = $$restProps.disabled;
	(0, import_index_f9eb35ed.s)('SMUI:label:context', 'button');
	(0, import_index_f9eb35ed.s)('SMUI:icon:context', 'button');
	function addClass(className2) {
		if (!internalClasses[className2]) {
			internalClasses[className2] = true;
		}
	}
	function removeClass(className2) {
		if (!(className2 in internalClasses) || internalClasses[className2]) {
			internalClasses[className2] = false;
		}
	}
	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === '' || value == null) {
				delete internalStyles[name];
				internalStyles = internalStyles;
			} else {
				internalStyles[name] = value;
			}
		}
	}
	function getElement() {
		return element.getElement();
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
		$$bindings.ripple(ripple);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
		$$bindings.variant(variant);
	if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0) $$bindings.touch(touch);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.action === void 0 && $$bindings.action && action !== void 0)
		$$bindings.action(action);
	if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
		$$bindings.defaultAction(defaultAction);
	if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
		$$bindings.secondary(secondary);
	if ($$props.component === void 0 && $$bindings.component && component !== void 0)
		$$bindings.component(component);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		actionProp =
			context === 'dialog:action' && action != null
				? { 'data-mdc-dialog-action': action }
				: { action: $$props.action };
		defaultProp =
			context === 'dialog:action' && defaultAction
				? { 'data-mdc-dialog-button-default': '' }
				: { default: $$props.default };
		secondaryProp = context === 'banner' ? {} : { secondary: $$props.secondary };
		{
			if (previousDisabled !== $$restProps.disabled) {
				getElement().blur();
				previousDisabled = $$restProps.disabled;
			}
		}
		$$rendered = `${(0, import_index_f9eb35ed.v)(
			component || import_index_f9eb35ed.m,
			'svelte:component'
		).$$render(
			$$result,
			Object_1.assign(
				{
					use: [
						[
							Ripple,
							{
								ripple,
								unbounded: false,
								color,
								disabled: !!$$restProps.disabled,
								addClass,
								removeClass,
								addStyle
							}
						],
						forwardEvents,
						...use
					]
				},
				{
					class: classMap(
						__spreadValues(
							{
								[className]: true,
								'mdc-button': true,
								'mdc-button--raised': variant === 'raised',
								'mdc-button--unelevated': variant === 'unelevated',
								'mdc-button--outlined': variant === 'outlined',
								'smui-button--color-secondary': color === 'secondary',
								'mdc-button--touch': touch,
								'mdc-card__action': context === 'card:action',
								'mdc-card__action--button': context === 'card:action',
								'mdc-dialog__button': context === 'dialog:action',
								'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',
								'mdc-top-app-bar__action-item': context === 'top-app-bar:action',
								'mdc-snackbar__action': context === 'snackbar:actions',
								'mdc-banner__secondary-action': context === 'banner' && secondary,
								'mdc-banner__primary-action': context === 'banner' && !secondary,
								'mdc-tooltip__action': context === 'tooltip:rich-actions'
							},
							internalClasses
						)
					)
				},
				{
					style: Object.entries(internalStyles)
						.map(([name, value]) => `${name}: ${value};`)
						.concat([style])
						.join(' ')
				},
				actionProp,
				defaultProp,
				secondaryProp,
				{ href },
				$$restProps,
				{ this: element }
			),
			{
				this: ($$value) => {
					element = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `<div class="${'mdc-button__ripple'}"></div>
  ${slots.default ? slots.default({}) : ``}${
						touch ? `<div class="${'mdc-button__touch'}"></div>` : ``
					}`;
				}
			}
		)}`;
	} while (!$$settled);
	return $$rendered;
});
const CommonLabel = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $$restProps = (0, import_index_f9eb35ed.g)($$props, [
		'use',
		'class',
		'component',
		'getElement'
	]);
	const forwardEvents = forwardEventsBuilder((0, import_index_f9eb35ed.h)());
	let { use = [] } = $$props;
	let { class: className = '' } = $$props;
	let element;
	let { component = Span } = $$props;
	const context = (0, import_index_f9eb35ed.q)('SMUI:label:context');
	const tabindex = (0, import_index_f9eb35ed.q)('SMUI:label:tabindex');
	function getElement() {
		return element.getElement();
	}
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.component === void 0 && $$bindings.component && component !== void 0)
		$$bindings.component(component);
	if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
		$$bindings.getElement(getElement);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		$$rendered = `${(0, import_index_f9eb35ed.v)(
			component || import_index_f9eb35ed.m,
			'svelte:component'
		).$$render(
			$$result,
			Object.assign(
				{ use: [forwardEvents, ...use] },
				{
					class: classMap({
						[className]: true,
						'mdc-button__label': context === 'button',
						'mdc-fab__label': context === 'fab',
						'mdc-tab__text-label': context === 'tab',
						'mdc-image-list__label': context === 'image-list',
						'mdc-snackbar__label': context === 'snackbar',
						'mdc-banner__text': context === 'banner',
						'mdc-segmented-button__label': context === 'segmented-button',
						'mdc-data-table__pagination-rows-per-page-label': context === 'data-table:pagination',
						'mdc-data-table__header-cell-label': context === 'data-table:sortable-header-cell'
					})
				},
				context === 'snackbar' ? { 'aria-atomic': 'false' } : {},
				{ tabindex },
				$$restProps,
				{ this: element }
			),
			{
				this: ($$value) => {
					element = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `${slots.default ? slots.default({}) : ``}`;
				}
			}
		)}`;
	} while (!$$settled);
	return $$rendered;
});
const Label = CommonLabel;
var Countdown_svelte_svelte_type_style_lang = '';
var Question_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: 'section.svelte-s2j1ga{display:flex;flex-direction:column;align-items:center}h1.svelte-s2j1ga{margin:0;font-size:4em;color:var(--mdc-theme-primary);text-decoration:underline}p.svelte-s2j1ga{font-size:1.5em}',
	map: null
};
const Question = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let { question } = $$props;
	let { questionId } = $$props;
	let { responseA } = $$props;
	let { responseB } = $$props;
	let { responseC } = $$props;
	let { responseD } = $$props;
	let { goodAnswer } = $$props;
	if ($$props.question === void 0 && $$bindings.question && question !== void 0)
		$$bindings.question(question);
	if ($$props.questionId === void 0 && $$bindings.questionId && questionId !== void 0)
		$$bindings.questionId(questionId);
	if ($$props.responseA === void 0 && $$bindings.responseA && responseA !== void 0)
		$$bindings.responseA(responseA);
	if ($$props.responseB === void 0 && $$bindings.responseB && responseB !== void 0)
		$$bindings.responseB(responseB);
	if ($$props.responseC === void 0 && $$bindings.responseC && responseC !== void 0)
		$$bindings.responseC(responseC);
	if ($$props.responseD === void 0 && $$bindings.responseD && responseD !== void 0)
		$$bindings.responseD(responseD);
	if ($$props.goodAnswer === void 0 && $$bindings.goodAnswer && goodAnswer !== void 0)
		$$bindings.goodAnswer(goodAnswer);
	$$result.css.add(css$3);
	return `<section class="${'svelte-s2j1ga'}">${``}
	${(0, import_index_f9eb35ed.v)(Card, 'Card').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${(0, import_index_f9eb35ed.v)(Content, 'Content').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `<h1 class="${'svelte-s2j1ga'}">Question</h1>`;
						}
					}
				)}
		${(0, import_index_f9eb35ed.v)(Content, 'Content').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `<p class="${'svelte-s2j1ga'}">${(0, import_index_f9eb35ed.e)(question)}</p>`;
				}
			}
		)}
		${`${(0, import_index_f9eb35ed.v)(Actions, 'Actions').$$render(
			$$result,
			{ fullBleed: true },
			{},
			{
				default: () => {
					return `${(0, import_index_f9eb35ed.v)(Button_1, 'Button').$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${(0, import_index_f9eb35ed.v)(Label, 'Label').$$render(
									$$result,
									{},
									{},
									{
										default: () => {
											return `Voir les propositions de r\xE9ponses`;
										}
									}
								)}
					<i class="${'material-icons'}" aria-hidden="${'true'}">arrow_forward</i>`;
							}
						}
					)}`;
				}
			}
		)}`}`;
			}
		}
	)}
</section>`;
});
var Scores_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: 'h1.svelte-1oqdngo{margin:0;font-size:4em;color:var(--mdc-theme-primary);text-decoration:underline}p.svelte-1oqdngo{font-size:1.5em;margin:0;display:flex;justify-content:space-between}.username.svelte-1oqdngo{padding-right:50px}',
	map: null
};
const Scores = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let usersSortedByScore;
	let $store, $$unsubscribe_store;
	$$unsubscribe_store = (0, import_index_f9eb35ed.b)(store, (value) => ($store = value));
	$$result.css.add(css$2);
	usersSortedByScore = $store.users.sort((userA, userB) => userB.score - userA.score);
	$$unsubscribe_store();
	return `<section>${(0, import_index_f9eb35ed.v)(Card, 'Card').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${(0, import_index_f9eb35ed.v)(Content, 'Content').$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `<h1 class="${'svelte-1oqdngo'}">Tableau des scores</h1>`;
						}
					}
				)}
		${(0, import_index_f9eb35ed.u)(usersSortedByScore, (user, i) => {
			return `${(0, import_index_f9eb35ed.v)(Content, 'Content').$$render(
				$$result,
				{
					style: 'padding-top: 0; padding-bottom: 0;'
				},
				{},
				{
					default: () => {
						return `<p style="${
							'font-size: ' +
							(0, import_index_f9eb35ed.e)(36 - 2 * i) +
							'px; font-weight: ' +
							(0, import_index_f9eb35ed.e)(1e3 - 150 * i) +
							';'
						}" class="${'svelte-1oqdngo'}"><span class="${'username svelte-1oqdngo'}">${(0,
						import_index_f9eb35ed.e)(i + 1)}. ${(0, import_index_f9eb35ed.e)(user.name)}</span>
					${(0, import_index_f9eb35ed.e)(user.score)} pts
				</p>`;
					}
				}
			)}`;
		})}
		${(0, import_index_f9eb35ed.v)(Actions, 'Actions').$$render(
			$$result,
			{
				fullBleed: true,
				style: 'margin-top: 20px;'
			},
			{},
			{
				default: () => {
					return `${(0, import_index_f9eb35ed.v)(Button_1, 'Button').$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${(0, import_index_f9eb35ed.v)(Label, 'Label').$$render(
									$$result,
									{},
									{},
									{
										default: () => {
											return `Fermer le tableau des scores`;
										}
									}
								)}
				<i class="${'material-icons'}" aria-hidden="${'true'}">close</i>`;
							}
						}
					)}`;
				}
			}
		)}`;
			}
		}
	)}
</section>`;
});
var Wheel_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.score-container.svelte-gdvl4y.svelte-gdvl4y{top:0;left:0;position:absolute;cursor:pointer}.score-container.svelte-gdvl4y p.svelte-gdvl4y{display:flex;justify-content:space-between}.username.svelte-gdvl4y.svelte-gdvl4y{padding-right:20px}.svelte-gdvl4y.svelte-gdvl4y{box-sizing:border-box}.container.svelte-gdvl4y.svelte-gdvl4y{width:500px;height:500px;background-color:white;border-radius:50%;border:15px solid white;position:relative;overflow:hidden;transition:5s}.container.svelte-gdvl4y div.svelte-gdvl4y{height:50%;width:200px;position:absolute;clip-path:polygon(100% 0, 50% 100%, 0 0);transform:translateX(-50%);transform-origin:bottom;text-align:center;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;font-family:sans-serif;color:#fff;left:135px}.container.svelte-gdvl4y .one.svelte-gdvl4y{background-color:var(--mdc-theme-primary);left:50%}.container.svelte-gdvl4y .two.svelte-gdvl4y{background-color:var(--mdc-theme-secondary);transform:rotate(45deg)}.container.svelte-gdvl4y .three.svelte-gdvl4y{background-color:var(--mdc-theme-primary);transform:rotate(90deg)}.container.svelte-gdvl4y .four.svelte-gdvl4y{background-color:var(--mdc-theme-secondary);transform:rotate(135deg)}.container.svelte-gdvl4y .five.svelte-gdvl4y{background-color:var(--mdc-theme-primary);transform:rotate(180deg)}.container.svelte-gdvl4y .six.svelte-gdvl4y{background-color:var(--mdc-theme-secondary);transform:rotate(225deg)}.container.svelte-gdvl4y .seven.svelte-gdvl4y{background-color:var(--mdc-theme-primary);transform:rotate(270deg)}.container.svelte-gdvl4y .eight.svelte-gdvl4y{background-color:var(--mdc-theme-secondary);transform:rotate(315deg)}.arrow.svelte-gdvl4y.svelte-gdvl4y{position:absolute;top:40px;left:50%;transform:translateX(-50%);color:var(--mdc-theme-error);font-size:80px;z-index:999}#spin.svelte-gdvl4y.svelte-gdvl4y{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:10;background-color:white;text-transform:uppercase;border:8px solid #fff;font-weight:bold;font-size:20px;color:var(--mdc-theme-primary);width:80px;height:80px;font-family:sans-serif;border-radius:50%;cursor:pointer;outline:none;letter-spacing:1px}',
	map: null
};
const Wheel = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let usersSortedByScore;
	let $store, $$unsubscribe_store;
	$$unsubscribe_store = (0, import_index_f9eb35ed.b)(store, (value) => ($store = value));
	$$result.css.add(css$1);
	usersSortedByScore = $store.users.sort((userA, userB) => userB.score - userA.score);
	$$unsubscribe_store();
	return `<section class="${'svelte-gdvl4y'}"><div class="${'score-container svelte-gdvl4y'}">${(0,
	import_index_f9eb35ed.u)(usersSortedByScore, (user, i) => {
		return `${(0, import_index_f9eb35ed.v)(Content, 'Content').$$render(
			$$result,
			{
				style: 'padding-top: 0; padding-bottom: 0;'
			},
			{},
			{
				default: () => {
					return `<p class="${'svelte-gdvl4y'}"><span class="${'username svelte-gdvl4y'}">${(0,
					import_index_f9eb35ed.e)(i + 1)}. ${(0, import_index_f9eb35ed.e)(user.name)}</span>
					${(0, import_index_f9eb35ed.e)(user.score)} pts
				</p>`;
				}
			}
		)}`;
	})}</div>

	<button id="${'spin'}" class="${'svelte-gdvl4y'}">Spin</button>
	<span class="${'arrow svelte-gdvl4y'}">\u2193</span>

	<div class="${'container svelte-gdvl4y'}"><div class="${'one svelte-gdvl4y'}">1</div>
		<div class="${'two svelte-gdvl4y'}">2</div>
		<div class="${'three svelte-gdvl4y'}">3</div>
		<div class="${'four svelte-gdvl4y'}">4</div>
		<div class="${'five svelte-gdvl4y'}">5</div>
		<div class="${'six svelte-gdvl4y'}">6</div>
		<div class="${'seven svelte-gdvl4y'}">7</div>
		<div class="${'eight svelte-gdvl4y'}">8</div></div>
</section>`;
});
var index_svelte_svelte_type_style_lang = '';
const css = {
	code: 'section.svelte-18ss6oi{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--mdc-theme-secondary)}',
	map: null
};
const prerender = true;
const Routes = (0, import_index_f9eb35ed.c)(($$result, $$props, $$bindings, slots) => {
	let $store, $$unsubscribe_store;
	$$unsubscribe_store = (0, import_index_f9eb35ed.b)(store, (value) => ($store = value));
	$$result.css.add(css);
	$$unsubscribe_store();
	return `${(($$result.head += `${(($$result.title = `<title>Witnesses Game</title>`), '')}`), '')}

<section class="${'svelte-18ss6oi'}">${
		$store.displayInvitation
			? `${(0, import_index_f9eb35ed.v)(Invitation, 'Invitation').$$render($$result, {}, {}, {})}`
			: ``
	}
	${
		$store.displayGameTitle
			? `${(0, import_index_f9eb35ed.v)(GameTitle, 'GameTitle').$$render($$result, {}, {}, {})}`
			: ``
	}
	${
		$store.displayWheel
			? `${(0, import_index_f9eb35ed.v)(Wheel, 'Wheel').$$render($$result, {}, {}, {})}`
			: ``
	}
	${
		$store.displayQuestion
			? `${(0, import_index_f9eb35ed.v)(Question, 'Question').$$render(
					$$result,
					{
						question: "Quel est le nom de mon chien d'enfance ? ",
						questionId: 'cezecze',
						responseA: 'Flora',
						responseB: 'Gribouille',
						responseC: 'Pixies',
						responseD: 'Jet',
						goodAnswer: 'Gribouille'
					},
					{},
					{}
			  )}`
			: ``
	}
	${
		$store.displayScore
			? `${(0, import_index_f9eb35ed.v)(Scores, 'Scores').$$render($$result, {}, {}, {})}`
			: ``
	}
</section>`;
});
