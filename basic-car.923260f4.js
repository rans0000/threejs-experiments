// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lFSQu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "545c1219923260f4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"M5vdp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActiveCollisionTypes", ()=>oI);
parcelHelpers.export(exports, "ActiveEvents", ()=>EI);
parcelHelpers.export(exports, "ActiveHooks", ()=>iI);
parcelHelpers.export(exports, "Ball", ()=>uI);
parcelHelpers.export(exports, "BroadPhase", ()=>dI);
parcelHelpers.export(exports, "CCDSolver", ()=>rI);
parcelHelpers.export(exports, "Capsule", ()=>$I);
parcelHelpers.export(exports, "CharacterCollision", ()=>hg);
parcelHelpers.export(exports, "CoefficientCombineRule", ()=>AI);
parcelHelpers.export(exports, "Collider", ()=>sg);
parcelHelpers.export(exports, "ColliderDesc", ()=>Rg);
parcelHelpers.export(exports, "ColliderSet", ()=>cg);
parcelHelpers.export(exports, "ColliderShapeCastHit", ()=>XI);
parcelHelpers.export(exports, "Cone", ()=>Sg);
parcelHelpers.export(exports, "ConvexPolyhedron", ()=>Qg);
parcelHelpers.export(exports, "Cuboid", ()=>zI);
parcelHelpers.export(exports, "Cylinder", ()=>Dg);
parcelHelpers.export(exports, "DebugRenderBuffers", ()=>Jg);
parcelHelpers.export(exports, "DebugRenderPipeline", ()=>Ug);
parcelHelpers.export(exports, "DynamicRayCastVehicleController", ()=>Ng);
parcelHelpers.export(exports, "EventQueue", ()=>ag);
parcelHelpers.export(exports, "FeatureType", ()=>II);
parcelHelpers.export(exports, "FixedImpulseJoint", ()=>yI);
parcelHelpers.export(exports, "FixedMultibodyJoint", ()=>LI);
parcelHelpers.export(exports, "GenericImpulseJoint", ()=>sI);
parcelHelpers.export(exports, "HalfSpace", ()=>vI);
parcelHelpers.export(exports, "HeightFieldFlags", ()=>CI);
parcelHelpers.export(exports, "Heightfield", ()=>ig);
parcelHelpers.export(exports, "ImpulseJoint", ()=>UI);
parcelHelpers.export(exports, "ImpulseJointSet", ()=>qI);
parcelHelpers.export(exports, "IntegrationParameters", ()=>JI);
parcelHelpers.export(exports, "IslandManager", ()=>nI);
parcelHelpers.export(exports, "JointAxesMask", ()=>$A);
parcelHelpers.export(exports, "JointData", ()=>cI);
parcelHelpers.export(exports, "JointType", ()=>zA);
parcelHelpers.export(exports, "KinematicCharacterController", ()=>yg);
parcelHelpers.export(exports, "MassPropsMode", ()=>SI);
parcelHelpers.export(exports, "MotorModel", ()=>_A);
parcelHelpers.export(exports, "MultibodyJoint", ()=>YI);
parcelHelpers.export(exports, "MultibodyJointSet", ()=>eI);
parcelHelpers.export(exports, "NarrowPhase", ()=>TI);
parcelHelpers.export(exports, "PhysicsPipeline", ()=>Gg);
parcelHelpers.export(exports, "PointColliderProjection", ()=>WI);
parcelHelpers.export(exports, "PointProjection", ()=>bI);
parcelHelpers.export(exports, "Polyline", ()=>Cg);
parcelHelpers.export(exports, "PrismaticImpulseJoint", ()=>FI);
parcelHelpers.export(exports, "PrismaticMultibodyJoint", ()=>HI);
parcelHelpers.export(exports, "Quaternion", ()=>VA);
parcelHelpers.export(exports, "QueryFilterFlags", ()=>QI);
parcelHelpers.export(exports, "QueryPipeline", ()=>kg);
parcelHelpers.export(exports, "Ray", ()=>xI);
parcelHelpers.export(exports, "RayColliderHit", ()=>fI);
parcelHelpers.export(exports, "RayColliderIntersection", ()=>jI);
parcelHelpers.export(exports, "RayIntersection", ()=>mI);
parcelHelpers.export(exports, "RevoluteImpulseJoint", ()=>aI);
parcelHelpers.export(exports, "RevoluteMultibodyJoint", ()=>tI);
parcelHelpers.export(exports, "RigidBody", ()=>wI);
parcelHelpers.export(exports, "RigidBodyDesc", ()=>GI);
parcelHelpers.export(exports, "RigidBodySet", ()=>KI);
parcelHelpers.export(exports, "RigidBodyType", ()=>vA);
parcelHelpers.export(exports, "RopeImpulseJoint", ()=>NI);
parcelHelpers.export(exports, "RotationOps", ()=>XA);
parcelHelpers.export(exports, "RoundCone", ()=>wg);
parcelHelpers.export(exports, "RoundConvexPolyhedron", ()=>Eg);
parcelHelpers.export(exports, "RoundCuboid", ()=>_I);
parcelHelpers.export(exports, "RoundCylinder", ()=>og);
parcelHelpers.export(exports, "RoundTriangle", ()=>gg);
parcelHelpers.export(exports, "SdpMatrix3", ()=>PA);
parcelHelpers.export(exports, "SdpMatrix3Ops", ()=>uA);
parcelHelpers.export(exports, "Segment", ()=>Ag);
parcelHelpers.export(exports, "SerializationPipeline", ()=>Kg);
parcelHelpers.export(exports, "Shape", ()=>PI);
parcelHelpers.export(exports, "ShapeCastHit", ()=>VI);
parcelHelpers.export(exports, "ShapeContact", ()=>ZI);
parcelHelpers.export(exports, "ShapeType", ()=>gI);
parcelHelpers.export(exports, "SolverFlags", ()=>DI);
parcelHelpers.export(exports, "SphericalImpulseJoint", ()=>RI);
parcelHelpers.export(exports, "SphericalMultibodyJoint", ()=>pI);
parcelHelpers.export(exports, "SpringImpulseJoint", ()=>MI);
parcelHelpers.export(exports, "TempContactForceEvent", ()=>Fg);
parcelHelpers.export(exports, "TempContactManifold", ()=>OI);
parcelHelpers.export(exports, "TriMesh", ()=>Bg);
parcelHelpers.export(exports, "TriMeshFlags", ()=>BI);
parcelHelpers.export(exports, "Triangle", ()=>Ig);
parcelHelpers.export(exports, "UnitImpulseJoint", ()=>hI);
parcelHelpers.export(exports, "UnitMultibodyJoint", ()=>lI);
parcelHelpers.export(exports, "Vector3", ()=>jA);
parcelHelpers.export(exports, "VectorOps", ()=>fA);
parcelHelpers.export(exports, "World", ()=>Mg);
parcelHelpers.export(exports, "default", ()=>Og);
parcelHelpers.export(exports, "init", ()=>dg);
parcelHelpers.export(exports, "version", ()=>Tg);
let A;
const I = new Array(128).fill(void 0);
I.push(void 0, null, !0, !1);
let g = I.length;
function C(A) {
    g === I.length && I.push(I.length + 1);
    const C = g;
    return g = I[C], I[C] = A, C;
}
function B(A) {
    return I[A];
}
function Q(A) {
    const C = B(A);
    return function(A) {
        A < 132 || (I[A] = g, g = A);
    }(A), C;
}
function E(A) {
    return null == A;
}
let i = null;
function D() {
    return null !== i && 0 !== i.byteLength || (i = new Float64Array(A.memory.buffer)), i;
}
let o = null;
function S() {
    return null !== o && 0 !== o.byteLength || (o = new Int32Array(A.memory.buffer)), o;
}
const w = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: ()=>{
        throw Error("TextDecoder not available");
    }
};
"undefined" != typeof TextDecoder && w.decode();
let G = null;
function k(I, g) {
    return I >>>= 0, w.decode((null !== G && 0 !== G.byteLength || (G = new Uint8Array(A.memory.buffer)), G).subarray(I, I + g));
}
function K(A, I) {
    if (!(A instanceof I)) throw new Error(`expected instance of ${I.name}`);
    return A.ptr;
}
let J = null;
function U() {
    return null !== J && 0 !== J.byteLength || (J = new Float32Array(A.memory.buffer)), J;
}
let h = 128;
function y(A) {
    if (1 == h) throw new Error("out of js stack");
    return I[--h] = A, h;
}
function N(A, I) {
    return A >>>= 0, U().subarray(A / 4, A / 4 + I);
}
let M = null;
function F() {
    return null !== M && 0 !== M.byteLength || (M = new Uint32Array(A.memory.buffer)), M;
}
let a = 0;
function s(A, I) {
    const g = I(4 * A.length, 4) >>> 0;
    return U().set(A, g / 4), a = A.length, g;
}
function R(A, I) {
    const g = I(4 * A.length, 4) >>> 0;
    return F().set(A, g / 4), a = A.length, g;
}
function c(I, g) {
    try {
        return I.apply(this, g);
    } catch (I) {
        A.__wbindgen_exn_store(C(I));
    }
}
const q = Object.freeze({
    LinX: 0,
    0: "LinX",
    LinY: 1,
    1: "LinY",
    LinZ: 2,
    2: "LinZ",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ"
});
Object.freeze({
    AccelerationBased: 0,
    0: "AccelerationBased",
    ForceBased: 1,
    1: "ForceBased"
}), Object.freeze({
    Dynamic: 0,
    0: "Dynamic",
    Fixed: 1,
    1: "Fixed",
    KinematicPositionBased: 2,
    2: "KinematicPositionBased",
    KinematicVelocityBased: 3,
    3: "KinematicVelocityBased"
});
const Y = Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Rope: 3,
    3: "Rope",
    Spring: 4,
    4: "Spring",
    Spherical: 5,
    5: "Spherical",
    Generic: 6,
    6: "Generic"
});
Object.freeze({
    Vertex: 0,
    0: "Vertex",
    Edge: 1,
    1: "Edge",
    Face: 2,
    2: "Face",
    Unknown: 3,
    3: "Unknown"
});
const l = Object.freeze({
    Ball: 0,
    0: "Ball",
    Cuboid: 1,
    1: "Cuboid",
    Capsule: 2,
    2: "Capsule",
    Segment: 3,
    3: "Segment",
    Polyline: 4,
    4: "Polyline",
    Triangle: 5,
    5: "Triangle",
    TriMesh: 6,
    6: "TriMesh",
    HeightField: 7,
    7: "HeightField",
    Compound: 8,
    8: "Compound",
    ConvexPolyhedron: 9,
    9: "ConvexPolyhedron",
    Cylinder: 10,
    10: "Cylinder",
    Cone: 11,
    11: "Cone",
    RoundCuboid: 12,
    12: "RoundCuboid",
    RoundTriangle: 13,
    13: "RoundTriangle",
    RoundCylinder: 14,
    14: "RoundCylinder",
    RoundCone: 15,
    15: "RoundCone",
    RoundConvexPolyhedron: 16,
    16: "RoundConvexPolyhedron",
    HalfSpace: 17,
    17: "HalfSpace"
}), L = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawbroadphase_free(I >>> 0));
class H {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(H.prototype);
        return I.__wbg_ptr = A, L.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, L.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawbroadphase_free(I);
    }
    constructor(){
        const I = A.rawbroadphase_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
}
const t = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawccdsolver_free(I >>> 0));
class p {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawccdsolver_free(I);
    }
    constructor(){
        const I = A.rawccdsolver_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
}
const e = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawcharactercollision_free(I >>> 0));
class r {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, e.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcharactercollision_free(I);
    }
    constructor(){
        const I = A.rawcharactercollision_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    handle() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
        const I = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    translationDeltaRemaining() {
        const I = A.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    toi() {
        return A.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
        const I = A.rawcharactercollision_worldWitness1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    worldWitness2() {
        const I = A.rawcharactercollision_worldWitness2(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    worldNormal1() {
        const I = A.rawcharactercollision_worldNormal1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    worldNormal2() {
        const I = A.rawcharactercollision_worldNormal2(this.__wbg_ptr);
        return xA.__wrap(I);
    }
}
const n = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawcolliderset_free(I >>> 0));
class d {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(d.prototype);
        return I.__wbg_ptr = A, n.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, n.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcolliderset_free(I);
    }
    coTranslation(I) {
        const g = A.rawcolliderset_coTranslation(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    coRotation(I) {
        const g = A.rawcolliderset_coRotation(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    coSetTranslation(I, g, C, B) {
        A.rawcolliderset_coSetTranslation(this.__wbg_ptr, I, g, C, B);
    }
    coSetTranslationWrtParent(I, g, C, B) {
        A.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, I, g, C, B);
    }
    coSetRotation(I, g, C, B, Q) {
        A.rawcolliderset_coSetRotation(this.__wbg_ptr, I, g, C, B, Q);
    }
    coSetRotationWrtParent(I, g, C, B, Q) {
        A.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, I, g, C, B, Q);
    }
    coIsSensor(I) {
        return 0 !== A.rawcolliderset_coIsSensor(this.__wbg_ptr, I);
    }
    coShapeType(I) {
        return A.rawcolliderset_coShapeType(this.__wbg_ptr, I);
    }
    coHalfspaceNormal(I) {
        const g = A.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    coHalfExtents(I) {
        const g = A.rawcolliderset_coHalfExtents(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    coSetHalfExtents(I, g) {
        K(g, xA), A.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    coRadius(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coRadius(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetRadius(I, g) {
        A.rawcolliderset_coSetRadius(this.__wbg_ptr, I, g);
    }
    coHalfHeight(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHalfHeight(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetHalfHeight(I, g) {
        A.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, I, g);
    }
    coRoundRadius(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coRoundRadius(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetRoundRadius(I, g) {
        A.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, I, g);
    }
    coVertices(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coVertices(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            let Q;
            return 0 !== g && (Q = N(g, C).slice(), A.__wbindgen_free(g, 4 * C, 4)), Q;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coIndices(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coIndices(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            let Q;
            return 0 !== g && (Q = (function(A, I) {
                return A >>>= 0, F().subarray(A / 4, A / 4 + I);
            })(g, C).slice(), A.__wbindgen_free(g, 4 * C, 4)), Q;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coTriMeshFlags(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coTriMeshFlags(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            return 0 === g ? void 0 : C >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightFieldFlags(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightFieldFlags(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            return 0 === g ? void 0 : C >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldHeights(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldHeights(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            let Q;
            return 0 !== g && (Q = N(g, C).slice(), A.__wbindgen_free(g, 4 * C, 4)), Q;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldScale(I) {
        const g = A.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    coHeightfieldNRows(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldNRows(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            return 0 === g ? void 0 : C >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldNCols(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldNCols(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = S()[B / 4 + 1];
            return 0 === g ? void 0 : C >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coParent(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coParent(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = D()[B / 8 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coSetEnabled(I, g) {
        A.rawcolliderset_coSetEnabled(this.__wbg_ptr, I, g);
    }
    coIsEnabled(I) {
        return 0 !== A.rawcolliderset_coIsEnabled(this.__wbg_ptr, I);
    }
    coSetContactSkin(I, g) {
        A.rawcolliderset_coSetContactSkin(this.__wbg_ptr, I, g);
    }
    coContactSkin(I) {
        return A.rawcolliderset_coContactSkin(this.__wbg_ptr, I);
    }
    coFriction(I) {
        return A.rawcolliderset_coFriction(this.__wbg_ptr, I);
    }
    coRestitution(I) {
        return A.rawcolliderset_coRestitution(this.__wbg_ptr, I);
    }
    coDensity(I) {
        return A.rawcolliderset_coDensity(this.__wbg_ptr, I);
    }
    coMass(I) {
        return A.rawcolliderset_coMass(this.__wbg_ptr, I);
    }
    coVolume(I) {
        return A.rawcolliderset_coVolume(this.__wbg_ptr, I);
    }
    coCollisionGroups(I) {
        return A.rawcolliderset_coCollisionGroups(this.__wbg_ptr, I) >>> 0;
    }
    coSolverGroups(I) {
        return A.rawcolliderset_coSolverGroups(this.__wbg_ptr, I) >>> 0;
    }
    coActiveHooks(I) {
        return A.rawcolliderset_coActiveHooks(this.__wbg_ptr, I) >>> 0;
    }
    coActiveCollisionTypes(I) {
        return A.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, I);
    }
    coActiveEvents(I) {
        return A.rawcolliderset_coActiveEvents(this.__wbg_ptr, I) >>> 0;
    }
    coContactForceEventThreshold(I) {
        return A.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, I);
    }
    coContainsPoint(I, g) {
        K(g, xA);
        return 0 !== A.rawcolliderset_coContainsPoint(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    coCastShape(I, g, C, B, Q, E, i, D, o) {
        K(g, xA), K(C, dA), K(B, xA), K(Q, HA), K(E, xA);
        const S = A.rawcolliderset_coCastShape(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, E.__wbg_ptr, i, D, o);
        return 0 === S ? void 0 : OA.__wrap(S);
    }
    coCastCollider(I, g, C, B, Q, E, i) {
        K(g, xA), K(B, xA);
        const D = A.rawcolliderset_coCastCollider(this.__wbg_ptr, I, g.__wbg_ptr, C, B.__wbg_ptr, Q, E, i);
        return 0 === D ? void 0 : O.__wrap(D);
    }
    coIntersectsShape(I, g, C, B) {
        K(g, dA), K(C, xA), K(B, HA);
        return 0 !== A.rawcolliderset_coIntersectsShape(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr);
    }
    coContactShape(I, g, C, B, Q) {
        K(g, dA), K(C, xA), K(B, HA);
        const E = A.rawcolliderset_coContactShape(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q);
        return 0 === E ? void 0 : bA.__wrap(E);
    }
    coContactCollider(I, g, C) {
        const B = A.rawcolliderset_coContactCollider(this.__wbg_ptr, I, g, C);
        return 0 === B ? void 0 : bA.__wrap(B);
    }
    coProjectPoint(I, g, C) {
        K(g, xA);
        const B = A.rawcolliderset_coProjectPoint(this.__wbg_ptr, I, g.__wbg_ptr, C);
        return yA.__wrap(B);
    }
    coIntersectsRay(I, g, C, B) {
        K(g, xA), K(C, xA);
        return 0 !== A.rawcolliderset_coIntersectsRay(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B);
    }
    coCastRay(I, g, C, B, Q) {
        K(g, xA), K(C, xA);
        return A.rawcolliderset_coCastRay(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B, Q);
    }
    coCastRayAndGetNormal(I, g, C, B, Q) {
        K(g, xA), K(C, xA);
        const E = A.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B, Q);
        return 0 === E ? void 0 : qA.__wrap(E);
    }
    coSetSensor(I, g) {
        A.rawcolliderset_coSetSensor(this.__wbg_ptr, I, g);
    }
    coSetRestitution(I, g) {
        A.rawcolliderset_coSetRestitution(this.__wbg_ptr, I, g);
    }
    coSetFriction(I, g) {
        A.rawcolliderset_coSetFriction(this.__wbg_ptr, I, g);
    }
    coFrictionCombineRule(I) {
        return A.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, I) >>> 0;
    }
    coSetFrictionCombineRule(I, g) {
        A.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, I, g);
    }
    coRestitutionCombineRule(I) {
        return A.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, I) >>> 0;
    }
    coSetRestitutionCombineRule(I, g) {
        A.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, I, g);
    }
    coSetCollisionGroups(I, g) {
        A.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, I, g);
    }
    coSetSolverGroups(I, g) {
        A.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, I, g);
    }
    coSetActiveHooks(I, g) {
        A.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, I, g);
    }
    coSetActiveEvents(I, g) {
        A.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, I, g);
    }
    coSetActiveCollisionTypes(I, g) {
        A.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, I, g);
    }
    coSetShape(I, g) {
        K(g, dA), A.rawcolliderset_coSetShape(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    coSetContactForceEventThreshold(I, g) {
        A.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, I, g);
    }
    coSetDensity(I, g) {
        A.rawcolliderset_coSetDensity(this.__wbg_ptr, I, g);
    }
    coSetMass(I, g) {
        A.rawcolliderset_coSetMass(this.__wbg_ptr, I, g);
    }
    coSetMassProperties(I, g, C, B, Q) {
        K(C, xA), K(B, xA), K(Q, HA), A.rawcolliderset_coSetMassProperties(this.__wbg_ptr, I, g, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr);
    }
    constructor(){
        const I = A.rawcolliderset_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    len() {
        return A.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(I) {
        return 0 !== A.rawcolliderset_contains(this.__wbg_ptr, I);
    }
    createCollider(I, g, C, B, Q, E, i, o, w, G, k, J, U, h, y, N, M, F, a, s, R, c, q, Y, l) {
        try {
            const t = A.__wbindgen_add_to_stack_pointer(-16);
            K(g, dA), K(C, xA), K(B, HA), K(i, xA), K(o, xA), K(w, HA), K(l, lA), A.rawcolliderset_createCollider(t, this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q, E, i.__wbg_ptr, o.__wbg_ptr, w.__wbg_ptr, G, k, J, U, h, y, N, M, F, a, s, R, c, q, Y, l.__wbg_ptr);
            var L = S()[t / 4 + 0], H = D()[t / 8 + 1];
            return 0 === L ? void 0 : H;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    remove(I, g, C, B) {
        K(g, EA), K(C, lA), A.rawcolliderset_remove(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B);
    }
    isHandleValid(I) {
        return 0 !== A.rawcolliderset_contains(this.__wbg_ptr, I);
    }
    forEachColliderHandle(g) {
        try {
            A.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
}
const T = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawcollidershapecasthit_free(I >>> 0));
class O {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(O.prototype);
        return I.__wbg_ptr = A, T.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, T.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcollidershapecasthit_free(I);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    time_of_impact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    witness1() {
        const I = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    witness2() {
        const I = A.rawcollidershapecasthit_witness2(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    normal1() {
        const I = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    normal2() {
        const I = A.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
        return xA.__wrap(I);
    }
}
const Z = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawcontactforceevent_free(I >>> 0));
class b {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(b.prototype);
        return I.__wbg_ptr = A, Z.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Z.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcontactforceevent_free(I);
    }
    collider1() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    collider2() {
        return A.rawcontactforceevent_collider2(this.__wbg_ptr);
    }
    total_force() {
        const I = A.rawcontactforceevent_total_force(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    total_force_magnitude() {
        return A.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
        const I = A.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    max_force_magnitude() {
        return A.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
}
const W = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawcontactmanifold_free(I >>> 0));
class x {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(x.prototype);
        return I.__wbg_ptr = A, W.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, W.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcontactmanifold_free(I);
    }
    normal() {
        const I = A.rawcontactmanifold_normal(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    local_n1() {
        const I = A.rawcontactmanifold_local_n1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    local_n2() {
        const I = A.rawcontactmanifold_local_n2(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    subshape1() {
        return A.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
    }
    subshape2() {
        return A.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
    }
    num_contacts() {
        return A.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
    }
    contact_local_p1(I) {
        const g = A.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    contact_local_p2(I) {
        const g = A.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    contact_dist(I) {
        return A.rawcontactmanifold_contact_dist(this.__wbg_ptr, I);
    }
    contact_fid1(I) {
        return A.rawcontactmanifold_contact_fid1(this.__wbg_ptr, I) >>> 0;
    }
    contact_fid2(I) {
        return A.rawcontactmanifold_contact_fid2(this.__wbg_ptr, I) >>> 0;
    }
    contact_impulse(I) {
        return A.rawcontactmanifold_contact_impulse(this.__wbg_ptr, I);
    }
    contact_tangent_impulse_x(I) {
        return A.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, I);
    }
    contact_tangent_impulse_y(I) {
        return A.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, I);
    }
    num_solver_contacts() {
        return A.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
    }
    solver_contact_point(I) {
        const g = A.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    solver_contact_dist(I) {
        return A.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, I);
    }
    solver_contact_friction(I) {
        return A.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, I);
    }
    solver_contact_restitution(I) {
        return A.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, I);
    }
    solver_contact_tangent_velocity(I) {
        const g = A.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
}
const m = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawcontactpair_free(I >>> 0));
class j {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(j.prototype);
        return I.__wbg_ptr = A, m.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, m.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawcontactpair_free(I);
    }
    collider1() {
        return A.rawcontactpair_collider1(this.__wbg_ptr);
    }
    collider2() {
        return A.rawcontactpair_collider2(this.__wbg_ptr);
    }
    numContactManifolds() {
        return A.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
    }
    contactManifold(I) {
        const g = A.rawcontactpair_contactManifold(this.__wbg_ptr, I);
        return 0 === g ? void 0 : x.__wrap(g);
    }
}
const f = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawdebugrenderpipeline_free(I >>> 0));
class V {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, f.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawdebugrenderpipeline_free(I);
    }
    constructor(){
        const I = A.rawdebugrenderpipeline_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    vertices() {
        return Q(A.rawdebugrenderpipeline_vertices(this.__wbg_ptr));
    }
    colors() {
        return Q(A.rawdebugrenderpipeline_colors(this.__wbg_ptr));
    }
    render(I, g, C, B, Q) {
        K(I, lA), K(g, d), K(C, gA), K(B, SA), K(Q, GA), A.rawdebugrenderpipeline_render(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr);
    }
}
const X = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawdeserializedworld_free(I >>> 0));
class P {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(P.prototype);
        return I.__wbg_ptr = A, X.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, X.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawdeserializedworld_free(I);
    }
    takeGravity() {
        const I = A.rawdeserializedworld_takeGravity(this.__wbg_ptr);
        return 0 === I ? void 0 : xA.__wrap(I);
    }
    takeIntegrationParameters() {
        const I = A.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
        return 0 === I ? void 0 : BA.__wrap(I);
    }
    takeIslandManager() {
        const I = A.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
        return 0 === I ? void 0 : EA.__wrap(I);
    }
    takeBroadPhase() {
        const I = A.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
        return 0 === I ? void 0 : H.__wrap(I);
    }
    takeNarrowPhase() {
        const I = A.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
        return 0 === I ? void 0 : GA.__wrap(I);
    }
    takeBodies() {
        const I = A.rawdeserializedworld_takeBodies(this.__wbg_ptr);
        return 0 === I ? void 0 : lA.__wrap(I);
    }
    takeColliders() {
        const I = A.rawdeserializedworld_takeColliders(this.__wbg_ptr);
        return 0 === I ? void 0 : d.__wrap(I);
    }
    takeImpulseJoints() {
        const I = A.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
        return 0 === I ? void 0 : gA.__wrap(I);
    }
    takeMultibodyJoints() {
        const I = A.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
        return 0 === I ? void 0 : SA.__wrap(I);
    }
}
const u = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawdynamicraycastvehiclecontroller_free(I >>> 0));
class v {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, u.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawdynamicraycastvehiclecontroller_free(I);
    }
    constructor(I){
        const g = A.rawdynamicraycastvehiclecontroller_new(I);
        return this.__wbg_ptr = g >>> 0, this;
    }
    current_vehicle_speed() {
        return A.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    chassis() {
        return A.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
    }
    index_up_axis() {
        return A.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_up_axis(I) {
        A.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, I);
    }
    index_forward_axis() {
        return A.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_forward_axis(I) {
        A.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, I);
    }
    add_wheel(I, g, C, B, Q) {
        K(I, xA), K(g, xA), K(C, xA), A.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B, Q);
    }
    num_wheels() {
        return A.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(g, C, B, Q, i, D, o) {
        try {
            K(C, lA), K(B, d), K(Q, MA), A.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, g, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i, !E(D), E(D) ? 0 : D, y(o));
        } finally{
            I[h++] = void 0;
        }
    }
    wheel_chassis_connection_point_cs(I) {
        const g = A.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    set_wheel_chassis_connection_point_cs(I, g) {
        K(g, xA), A.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    wheel_suspension_rest_length(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_rest_length(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, I, g);
    }
    wheel_max_suspension_travel(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_max_suspension_travel(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, I, g);
    }
    wheel_radius(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_radius(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_radius(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, I, g);
    }
    wheel_suspension_stiffness(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_stiffness(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, I, g);
    }
    wheel_suspension_compression(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_compression(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, I, g);
    }
    wheel_suspension_relaxation(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_relaxation(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, I, g);
    }
    wheel_max_suspension_force(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_max_suspension_force(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, I, g);
    }
    wheel_brake(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_brake(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_brake(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, I, g);
    }
    wheel_steering(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_steering(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_steering(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, I, g);
    }
    wheel_engine_force(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_engine_force(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_engine_force(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, I, g);
    }
    wheel_direction_cs(I) {
        const g = A.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    set_wheel_direction_cs(I, g) {
        K(g, xA), A.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    wheel_axle_cs(I) {
        const g = A.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    set_wheel_axle_cs(I, g) {
        K(g, xA), A.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    wheel_friction_slip(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_friction_slip(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_friction_slip(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, I, g);
    }
    wheel_side_friction_stiffness(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_side_friction_stiffness(I, g) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, I, g);
    }
    wheel_rotation(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_rotation(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_forward_impulse(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_side_impulse(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_side_impulse(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_suspension_force(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_force(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_contact_normal_ws(I) {
        const g = A.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    wheel_contact_point_ws(I) {
        const g = A.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    wheel_suspension_length(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_length(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = U()[B / 4 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_hard_point_ws(I) {
        const g = A.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, I);
        return 0 === g ? void 0 : xA.__wrap(g);
    }
    wheel_is_in_contact(I) {
        return 0 !== A.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, I);
    }
    wheel_ground_object(I) {
        try {
            const B = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_ground_object(B, this.__wbg_ptr, I);
            var g = S()[B / 4 + 0], C = D()[B / 8 + 1];
            return 0 === g ? void 0 : C;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const z = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_raweventqueue_free(I >>> 0));
class _ {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, z.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_raweventqueue_free(I);
    }
    constructor(I){
        const g = A.raweventqueue_new(I);
        return this.__wbg_ptr = g >>> 0, this;
    }
    drainCollisionEvents(g) {
        try {
            A.raweventqueue_drainCollisionEvents(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
    drainContactForceEvents(g) {
        try {
            A.raweventqueue_drainContactForceEvents(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
    clear() {
        A.raweventqueue_clear(this.__wbg_ptr);
    }
}
const $ = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawgenericjoint_free(I >>> 0));
class AA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(AA.prototype);
        return I.__wbg_ptr = A, $.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, $.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawgenericjoint_free(I);
    }
    static generic(I, g, C, B) {
        K(I, xA), K(g, xA), K(C, xA);
        const Q = A.rawgenericjoint_generic(I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B);
        return 0 === Q ? void 0 : AA.__wrap(Q);
    }
    static spring(I, g, C, B, Q) {
        K(B, xA), K(Q, xA);
        const E = A.rawgenericjoint_spring(I, g, C, B.__wbg_ptr, Q.__wbg_ptr);
        return AA.__wrap(E);
    }
    static rope(I, g, C) {
        K(g, xA), K(C, xA);
        const B = A.rawgenericjoint_rope(I, g.__wbg_ptr, C.__wbg_ptr);
        return AA.__wrap(B);
    }
    static spherical(I, g) {
        K(I, xA), K(g, xA);
        const C = A.rawgenericjoint_spherical(I.__wbg_ptr, g.__wbg_ptr);
        return AA.__wrap(C);
    }
    static prismatic(I, g, C, B, Q, E) {
        K(I, xA), K(g, xA), K(C, xA);
        const i = A.rawgenericjoint_prismatic(I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B, Q, E);
        return 0 === i ? void 0 : AA.__wrap(i);
    }
    static fixed(I, g, C, B) {
        K(I, xA), K(g, HA), K(C, xA), K(B, HA);
        const Q = A.rawgenericjoint_fixed(I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr);
        return AA.__wrap(Q);
    }
    static revolute(I, g, C) {
        K(I, xA), K(g, xA), K(C, xA);
        const B = A.rawgenericjoint_revolute(I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr);
        return 0 === B ? void 0 : AA.__wrap(B);
    }
}
const IA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawimpulsejointset_free(I >>> 0));
class gA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(gA.prototype);
        return I.__wbg_ptr = A, IA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawimpulsejointset_free(I);
    }
    jointType(I) {
        return A.rawimpulsejointset_jointType(this.__wbg_ptr, I);
    }
    jointBodyHandle1(I) {
        return A.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, I);
    }
    jointBodyHandle2(I) {
        return A.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, I);
    }
    jointFrameX1(I) {
        const g = A.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    jointFrameX2(I) {
        const g = A.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    jointAnchor1(I) {
        const g = A.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    jointAnchor2(I) {
        const g = A.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    jointSetAnchor1(I, g) {
        K(g, xA), A.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    jointSetAnchor2(I, g) {
        K(g, xA), A.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    jointContactsEnabled(I) {
        return 0 !== A.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, I);
    }
    jointSetContactsEnabled(I, g) {
        A.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, I, g);
    }
    jointLimitsEnabled(I, g) {
        return 0 !== A.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, I, g);
    }
    jointLimitsMin(I, g) {
        return A.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, I, g);
    }
    jointLimitsMax(I, g) {
        return A.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, I, g);
    }
    jointSetLimits(I, g, C, B) {
        A.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, I, g, C, B);
    }
    jointConfigureMotorModel(I, g, C) {
        A.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, I, g, C);
    }
    jointConfigureMotorVelocity(I, g, C, B) {
        A.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, I, g, C, B);
    }
    jointConfigureMotorPosition(I, g, C, B, Q) {
        A.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, I, g, C, B, Q);
    }
    jointConfigureMotor(I, g, C, B, Q, E) {
        A.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, I, g, C, B, Q, E);
    }
    constructor(){
        const I = A.rawimpulsejointset_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    createJoint(I, g, C, B) {
        K(I, AA);
        return A.rawimpulsejointset_createJoint(this.__wbg_ptr, I.__wbg_ptr, g, C, B);
    }
    remove(I, g) {
        A.rawimpulsejointset_remove(this.__wbg_ptr, I, g);
    }
    len() {
        return A.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    contains(I) {
        return 0 !== A.rawimpulsejointset_contains(this.__wbg_ptr, I);
    }
    forEachJointHandle(g) {
        try {
            A.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
    forEachJointAttachedToRigidBody(g, C) {
        try {
            A.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, g, y(C));
        } finally{
            I[h++] = void 0;
        }
    }
}
const CA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawintegrationparameters_free(I >>> 0));
class BA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(BA.prototype);
        return I.__wbg_ptr = A, CA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, CA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawintegrationparameters_free(I);
    }
    constructor(){
        const I = A.rawintegrationparameters_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    get dt() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
        return A.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
        return A.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
        return A.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
    get numSolverIterations() {
        return A.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numAdditionalFrictionIterations() {
        return A.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
        return A.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
        return A.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
        return A.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
        return A.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
    }
    set dt(I) {
        A.rawintegrationparameters_set_dt(this.__wbg_ptr, I);
    }
    set contact_natural_frequency(I) {
        A.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, I);
    }
    set normalizedAllowedLinearError(I) {
        A.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, I);
    }
    set normalizedPredictionDistance(I) {
        A.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, I);
    }
    set numSolverIterations(I) {
        A.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, I);
    }
    set numAdditionalFrictionIterations(I) {
        A.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, I);
    }
    set numInternalPgsIterations(I) {
        A.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, I);
    }
    set minIslandSize(I) {
        A.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, I);
    }
    set maxCcdSubsteps(I) {
        A.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, I);
    }
    set lengthUnit(I) {
        A.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, I);
    }
    switchToStandardPgsSolver() {
        A.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolver() {
        A.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
        A.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
    }
}
const QA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawislandmanager_free(I >>> 0));
class EA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(EA.prototype);
        return I.__wbg_ptr = A, QA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, QA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawislandmanager_free(I);
    }
    constructor(){
        const I = A.rawislandmanager_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    forEachActiveRigidBodyHandle(g) {
        try {
            A.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
}
const iA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawkinematiccharactercontroller_free(I >>> 0));
class DA {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawkinematiccharactercontroller_free(I);
    }
    constructor(I){
        const g = A.rawkinematiccharactercontroller_new(I);
        return this.__wbg_ptr = g >>> 0, this;
    }
    up() {
        const I = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    setUp(I) {
        K(I, xA), A.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, I.__wbg_ptr);
    }
    normalNudgeFactor() {
        return A.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
    }
    setNormalNudgeFactor(I) {
        A.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, I);
    }
    offset() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    setOffset(I) {
        A.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, I);
    }
    slideEnabled() {
        return 0 !== A.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr);
    }
    setSlideEnabled(I) {
        A.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, I);
    }
    autostepMaxHeight() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_autostepMaxHeight(C, this.__wbg_ptr);
            var I = S()[C / 4 + 0], g = U()[C / 4 + 1];
            return 0 === I ? void 0 : g;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    autostepMinWidth() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_autostepMinWidth(C, this.__wbg_ptr);
            var I = S()[C / 4 + 0], g = U()[C / 4 + 1];
            return 0 === I ? void 0 : g;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    autostepIncludesDynamicBodies() {
        const I = A.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
        return 16777215 === I ? void 0 : 0 !== I;
    }
    autostepEnabled() {
        return 0 !== A.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr);
    }
    enableAutostep(I, g, C) {
        A.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, I, g, C);
    }
    disableAutostep() {
        A.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
    }
    maxSlopeClimbAngle() {
        return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    setMaxSlopeClimbAngle(I) {
        A.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, I);
    }
    minSlopeSlideAngle() {
        return A.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
    }
    setMinSlopeSlideAngle(I) {
        A.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, I);
    }
    snapToGroundDistance() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_snapToGroundDistance(C, this.__wbg_ptr);
            var I = S()[C / 4 + 0], g = U()[C / 4 + 1];
            return 0 === I ? void 0 : g;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    enableSnapToGround(I) {
        A.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, I);
    }
    disableSnapToGround() {
        A.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
    }
    snapToGroundEnabled() {
        return 0 !== A.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr);
    }
    computeColliderMovement(g, C, B, Q, i, D, o, S, w, G, k) {
        try {
            K(C, lA), K(B, d), K(Q, MA), K(D, xA), A.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, g, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i, D.__wbg_ptr, o, !E(S), E(S) ? 0 : S, w, !E(G), E(G) ? 0 : G, y(k));
        } finally{
            I[h++] = void 0;
        }
    }
    computedMovement() {
        const I = A.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    computedGrounded() {
        return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr);
    }
    numComputedCollisions() {
        return A.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
    }
    computedCollision(I, g) {
        K(g, r);
        return 0 !== A.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, I, g.__wbg_ptr);
    }
}
const oA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawmultibodyjointset_free(I >>> 0));
class SA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(SA.prototype);
        return I.__wbg_ptr = A, oA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawmultibodyjointset_free(I);
    }
    jointType(I) {
        return A.rawmultibodyjointset_jointType(this.__wbg_ptr, I);
    }
    jointFrameX1(I) {
        const g = A.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    jointFrameX2(I) {
        const g = A.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    jointAnchor1(I) {
        const g = A.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    jointAnchor2(I) {
        const g = A.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    jointContactsEnabled(I) {
        return 0 !== A.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, I);
    }
    jointSetContactsEnabled(I, g) {
        A.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, I, g);
    }
    jointLimitsEnabled(I, g) {
        return 0 !== A.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, I, g);
    }
    jointLimitsMin(I, g) {
        return A.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, I, g);
    }
    jointLimitsMax(I, g) {
        return A.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, I, g);
    }
    constructor(){
        const I = A.rawmultibodyjointset_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    createJoint(I, g, C, B) {
        K(I, AA);
        return A.rawmultibodyjointset_createJoint(this.__wbg_ptr, I.__wbg_ptr, g, C, B);
    }
    remove(I, g) {
        A.rawmultibodyjointset_remove(this.__wbg_ptr, I, g);
    }
    contains(I) {
        return 0 !== A.rawmultibodyjointset_contains(this.__wbg_ptr, I);
    }
    forEachJointHandle(g) {
        try {
            A.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
    forEachJointAttachedToRigidBody(g, C) {
        try {
            A.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, g, y(C));
        } finally{
            I[h++] = void 0;
        }
    }
}
const wA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawnarrowphase_free(I >>> 0));
class GA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(GA.prototype);
        return I.__wbg_ptr = A, wA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawnarrowphase_free(I);
    }
    constructor(){
        const I = A.rawnarrowphase_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    contact_pairs_with(I, g) {
        A.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, I, C(g));
    }
    contact_pair(I, g) {
        const C = A.rawnarrowphase_contact_pair(this.__wbg_ptr, I, g);
        return 0 === C ? void 0 : j.__wrap(C);
    }
    intersection_pairs_with(I, g) {
        A.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, I, C(g));
    }
    intersection_pair(I, g) {
        return 0 !== A.rawnarrowphase_intersection_pair(this.__wbg_ptr, I, g);
    }
}
const kA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawphysicspipeline_free(I >>> 0));
class KA {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawphysicspipeline_free(I);
    }
    constructor(){
        const I = A.rawphysicspipeline_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    step(I, g, C, B, Q, E, i, D, o, S) {
        K(I, xA), K(g, BA), K(C, EA), K(B, H), K(Q, GA), K(E, lA), K(i, d), K(D, gA), K(o, SA), K(S, p), A.rawphysicspipeline_step(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, E.__wbg_ptr, i.__wbg_ptr, D.__wbg_ptr, o.__wbg_ptr, S.__wbg_ptr);
    }
    stepWithEvents(I, g, B, Q, E, i, D, o, S, w, G, k, J, U) {
        K(I, xA), K(g, BA), K(B, EA), K(Q, H), K(E, GA), K(i, lA), K(D, d), K(o, gA), K(S, SA), K(w, p), K(G, _), A.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, E.__wbg_ptr, i.__wbg_ptr, D.__wbg_ptr, o.__wbg_ptr, S.__wbg_ptr, w.__wbg_ptr, G.__wbg_ptr, C(k), C(J), C(U));
    }
}
const JA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawpointcolliderprojection_free(I >>> 0));
class UA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(UA.prototype);
        return I.__wbg_ptr = A, JA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, JA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawpointcolliderprojection_free(I);
    }
    colliderHandle() {
        return A.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    point() {
        const I = A.rawpointcolliderprojection_point(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    isInside() {
        return 0 !== A.rawpointcolliderprojection_isInside(this.__wbg_ptr);
    }
    featureType() {
        return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawpointcolliderprojection_featureId(C, this.__wbg_ptr);
            var I = S()[C / 4 + 0], g = S()[C / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const hA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawpointprojection_free(I >>> 0));
class yA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(yA.prototype);
        return I.__wbg_ptr = A, hA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawpointprojection_free(I);
    }
    point() {
        const I = A.rawpointprojection_point(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    isInside() {
        return 0 !== A.rawpointprojection_isInside(this.__wbg_ptr);
    }
}
const NA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawquerypipeline_free(I >>> 0));
class MA {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, NA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawquerypipeline_free(I);
    }
    constructor(){
        const I = A.rawquerypipeline_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    update(I) {
        K(I, d), A.rawquerypipeline_update(this.__wbg_ptr, I.__wbg_ptr);
    }
    castRay(g, C, B, Q, i, D, o, S, w, G, k) {
        try {
            K(g, lA), K(C, d), K(B, xA), K(Q, xA);
            const J = A.rawquerypipeline_castRay(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i, D, o, !E(S), E(S) ? 0 : S, !E(w), E(w) ? 0 : w, !E(G), E(G) ? 0 : G, y(k));
            return 0 === J ? void 0 : aA.__wrap(J);
        } finally{
            I[h++] = void 0;
        }
    }
    castRayAndGetNormal(g, C, B, Q, i, D, o, S, w, G, k) {
        try {
            K(g, lA), K(C, d), K(B, xA), K(Q, xA);
            const J = A.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i, D, o, !E(S), E(S) ? 0 : S, !E(w), E(w) ? 0 : w, !E(G), E(G) ? 0 : G, y(k));
            return 0 === J ? void 0 : RA.__wrap(J);
        } finally{
            I[h++] = void 0;
        }
    }
    intersectionsWithRay(g, C, B, Q, i, D, o, S, w, G, k, J) {
        try {
            K(g, lA), K(C, d), K(B, xA), K(Q, xA), A.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i, D, y(o), S, !E(w), E(w) ? 0 : w, !E(G), E(G) ? 0 : G, !E(k), E(k) ? 0 : k, y(J));
        } finally{
            I[h++] = void 0, I[h++] = void 0;
        }
    }
    intersectionWithShape(g, C, B, Q, i, o, w, G, k, J) {
        try {
            const M = A.__wbindgen_add_to_stack_pointer(-16);
            K(g, lA), K(C, d), K(B, xA), K(Q, HA), K(i, dA), A.rawquerypipeline_intersectionWithShape(M, this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i.__wbg_ptr, o, !E(w), E(w) ? 0 : w, !E(G), E(G) ? 0 : G, !E(k), E(k) ? 0 : k, y(J));
            var U = S()[M / 4 + 0], N = D()[M / 8 + 1];
            return 0 === U ? void 0 : N;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16), I[h++] = void 0;
        }
    }
    projectPoint(g, C, B, Q, i, D, o, S, w) {
        try {
            K(g, lA), K(C, d), K(B, xA);
            const G = A.rawquerypipeline_projectPoint(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q, i, !E(D), E(D) ? 0 : D, !E(o), E(o) ? 0 : o, !E(S), E(S) ? 0 : S, y(w));
            return 0 === G ? void 0 : UA.__wrap(G);
        } finally{
            I[h++] = void 0;
        }
    }
    projectPointAndGetFeature(g, C, B, Q, i, D, o, S) {
        try {
            K(g, lA), K(C, d), K(B, xA);
            const w = A.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q, !E(i), E(i) ? 0 : i, !E(D), E(D) ? 0 : D, !E(o), E(o) ? 0 : o, y(S));
            return 0 === w ? void 0 : UA.__wrap(w);
        } finally{
            I[h++] = void 0;
        }
    }
    intersectionsWithPoint(g, C, B, Q, i, D, o, S, w) {
        try {
            K(g, lA), K(C, d), K(B, xA), A.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, y(Q), i, !E(D), E(D) ? 0 : D, !E(o), E(o) ? 0 : o, !E(S), E(S) ? 0 : S, y(w));
        } finally{
            I[h++] = void 0, I[h++] = void 0;
        }
    }
    castShape(g, C, B, Q, i, D, o, S, w, G, k, J, U, N) {
        try {
            K(g, lA), K(C, d), K(B, xA), K(Q, HA), K(i, xA), K(D, dA);
            const M = A.rawquerypipeline_castShape(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i.__wbg_ptr, D.__wbg_ptr, o, S, w, G, !E(k), E(k) ? 0 : k, !E(J), E(J) ? 0 : J, !E(U), E(U) ? 0 : U, y(N));
            return 0 === M ? void 0 : O.__wrap(M);
        } finally{
            I[h++] = void 0;
        }
    }
    intersectionsWithShape(g, C, B, Q, i, D, o, S, w, G, k) {
        try {
            K(g, lA), K(C, d), K(B, xA), K(Q, HA), K(i, dA), A.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, i.__wbg_ptr, y(D), o, !E(S), E(S) ? 0 : S, !E(w), E(w) ? 0 : w, !E(G), E(G) ? 0 : G, y(k));
        } finally{
            I[h++] = void 0, I[h++] = void 0;
        }
    }
    collidersWithAabbIntersectingAabb(g, C, B) {
        try {
            K(g, xA), K(C, xA), A.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, y(B));
        } finally{
            I[h++] = void 0;
        }
    }
}
const FA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawraycolliderhit_free(I >>> 0));
class aA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(aA.prototype);
        return I.__wbg_ptr = A, FA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, FA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawraycolliderhit_free(I);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    timeOfImpact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
}
const sA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawraycolliderintersection_free(I >>> 0));
class RA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(RA.prototype);
        return I.__wbg_ptr = A, sA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawraycolliderintersection_free(I);
    }
    colliderHandle() {
        return A.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    normal() {
        const I = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    time_of_impact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
        return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawpointcolliderprojection_featureId(C, this.__wbg_ptr);
            var I = S()[C / 4 + 0], g = S()[C / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const cA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawrayintersection_free(I >>> 0));
class qA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(qA.prototype);
        return I.__wbg_ptr = A, cA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawrayintersection_free(I);
    }
    normal() {
        const I = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    time_of_impact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
        return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
        try {
            const C = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawpointcolliderprojection_featureId(C, this.__wbg_ptr);
            var I = S()[C / 4 + 0], g = S()[C / 4 + 1];
            return 0 === I ? void 0 : g >>> 0;
        } finally{
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const YA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawrigidbodyset_free(I >>> 0));
class lA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(lA.prototype);
        return I.__wbg_ptr = A, YA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, YA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawrigidbodyset_free(I);
    }
    rbTranslation(I) {
        const g = A.rawrigidbodyset_rbTranslation(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbRotation(I) {
        const g = A.rawrigidbodyset_rbRotation(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    rbSleep(I) {
        A.rawrigidbodyset_rbSleep(this.__wbg_ptr, I);
    }
    rbIsSleeping(I) {
        return 0 !== A.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, I);
    }
    rbIsMoving(I) {
        return 0 !== A.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, I);
    }
    rbNextTranslation(I) {
        const g = A.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbNextRotation(I) {
        const g = A.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    rbSetTranslation(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, I, g, C, B, Q);
    }
    rbSetRotation(I, g, C, B, Q, E) {
        A.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, I, g, C, B, Q, E);
    }
    rbSetLinvel(I, g, C) {
        K(g, xA), A.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, I, g.__wbg_ptr, C);
    }
    rbSetAngvel(I, g, C) {
        K(g, xA), A.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, I, g.__wbg_ptr, C);
    }
    rbSetNextKinematicTranslation(I, g, C, B) {
        A.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, I, g, C, B);
    }
    rbSetNextKinematicRotation(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, I, g, C, B, Q);
    }
    rbRecomputeMassPropertiesFromColliders(I, g) {
        K(g, d), A.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, I, g.__wbg_ptr);
    }
    rbSetAdditionalMass(I, g, C) {
        A.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, I, g, C);
    }
    rbSetAdditionalMassProperties(I, g, C, B, Q, E) {
        K(C, xA), K(B, xA), K(Q, HA), A.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, I, g, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, E);
    }
    rbLinvel(I) {
        const g = A.rawrigidbodyset_rbLinvel(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbAngvel(I) {
        const g = A.rawrigidbodyset_rbAngvel(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbLockTranslations(I, g, C) {
        A.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, I, g, C);
    }
    rbSetEnabledTranslations(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, I, g, C, B, Q);
    }
    rbLockRotations(I, g, C) {
        A.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, I, g, C);
    }
    rbSetEnabledRotations(I, g, C, B, Q) {
        A.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, I, g, C, B, Q);
    }
    rbDominanceGroup(I) {
        return A.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, I);
    }
    rbSetDominanceGroup(I, g) {
        A.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, I, g);
    }
    rbEnableCcd(I, g) {
        A.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, I, g);
    }
    rbSetSoftCcdPrediction(I, g) {
        A.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, I, g);
    }
    rbMass(I) {
        return A.rawrigidbodyset_rbMass(this.__wbg_ptr, I);
    }
    rbInvMass(I) {
        return A.rawrigidbodyset_rbInvMass(this.__wbg_ptr, I);
    }
    rbEffectiveInvMass(I) {
        const g = A.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbLocalCom(I) {
        const g = A.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbWorldCom(I) {
        const g = A.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbInvPrincipalInertiaSqrt(I) {
        const g = A.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbPrincipalInertiaLocalFrame(I) {
        const g = A.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, I);
        return HA.__wrap(g);
    }
    rbPrincipalInertia(I) {
        const g = A.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbEffectiveWorldInvInertiaSqrt(I) {
        const g = A.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, I);
        return pA.__wrap(g);
    }
    rbEffectiveAngularInertia(I) {
        const g = A.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, I);
        return pA.__wrap(g);
    }
    rbWakeUp(I) {
        A.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, I);
    }
    rbIsCcdEnabled(I) {
        return 0 !== A.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, I);
    }
    rbSoftCcdPrediction(I) {
        return A.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, I);
    }
    rbNumColliders(I) {
        return A.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, I) >>> 0;
    }
    rbCollider(I, g) {
        return A.rawrigidbodyset_rbCollider(this.__wbg_ptr, I, g);
    }
    rbBodyType(I) {
        return A.rawrigidbodyset_rbBodyType(this.__wbg_ptr, I);
    }
    rbSetBodyType(I, g, C) {
        A.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, I, g, C);
    }
    rbIsFixed(I) {
        return 0 !== A.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, I);
    }
    rbIsKinematic(I) {
        return 0 !== A.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, I);
    }
    rbIsDynamic(I) {
        return 0 !== A.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, I);
    }
    rbLinearDamping(I) {
        return A.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, I);
    }
    rbAngularDamping(I) {
        return A.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, I);
    }
    rbSetLinearDamping(I, g) {
        A.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, I, g);
    }
    rbSetAngularDamping(I, g) {
        A.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, I, g);
    }
    rbSetEnabled(I, g) {
        A.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, I, g);
    }
    rbIsEnabled(I) {
        return 0 !== A.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, I);
    }
    rbGravityScale(I) {
        return A.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, I);
    }
    rbSetGravityScale(I, g, C) {
        A.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, I, g, C);
    }
    rbResetForces(I, g) {
        A.rawrigidbodyset_rbResetForces(this.__wbg_ptr, I, g);
    }
    rbResetTorques(I, g) {
        A.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, I, g);
    }
    rbAddForce(I, g, C) {
        K(g, xA), A.rawrigidbodyset_rbAddForce(this.__wbg_ptr, I, g.__wbg_ptr, C);
    }
    rbApplyImpulse(I, g, C) {
        K(g, xA), A.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, I, g.__wbg_ptr, C);
    }
    rbAddTorque(I, g, C) {
        K(g, xA), A.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, I, g.__wbg_ptr, C);
    }
    rbApplyTorqueImpulse(I, g, C) {
        K(g, xA), A.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, I, g.__wbg_ptr, C);
    }
    rbAddForceAtPoint(I, g, C, B) {
        K(g, xA), K(C, xA), A.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B);
    }
    rbApplyImpulseAtPoint(I, g, C, B) {
        K(g, xA), K(C, xA), A.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B);
    }
    rbAdditionalSolverIterations(I) {
        return A.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, I) >>> 0;
    }
    rbSetAdditionalSolverIterations(I, g) {
        A.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, I, g);
    }
    rbUserData(I) {
        return A.rawrigidbodyset_rbUserData(this.__wbg_ptr, I) >>> 0;
    }
    rbSetUserData(I, g) {
        A.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, I, g);
    }
    rbUserForce(I) {
        const g = A.rawrigidbodyset_rbUserForce(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    rbUserTorque(I) {
        const g = A.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, I);
        return xA.__wrap(g);
    }
    constructor(){
        const I = A.rawrigidbodyset_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    createRigidBody(I, g, C, B, Q, E, i, D, o, S, w, G, k, J, U, h, y, N, M, F, a, s, R, c, q, Y) {
        K(g, xA), K(C, HA), K(i, xA), K(D, xA), K(o, xA), K(S, xA), K(w, HA);
        return A.rawrigidbodyset_createRigidBody(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B, Q, E, i.__wbg_ptr, D.__wbg_ptr, o.__wbg_ptr, S.__wbg_ptr, w.__wbg_ptr, G, k, J, U, h, y, N, M, F, a, s, R, c, q, Y);
    }
    remove(I, g, C, B, Q) {
        K(g, EA), K(C, d), K(B, gA), K(Q, SA), A.rawrigidbodyset_remove(this.__wbg_ptr, I, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr);
    }
    len() {
        return A.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(I) {
        return 0 !== A.rawrigidbodyset_contains(this.__wbg_ptr, I);
    }
    forEachRigidBodyHandle(g) {
        try {
            A.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, y(g));
        } finally{
            I[h++] = void 0;
        }
    }
    propagateModifiedBodyPositionsToColliders(I) {
        K(I, d), A.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, I.__wbg_ptr);
    }
}
const LA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawrotation_free(I >>> 0));
class HA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(HA.prototype);
        return I.__wbg_ptr = A, LA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, LA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawrotation_free(I);
    }
    constructor(I, g, C, B){
        const Q = A.rawrotation_new(I, g, C, B);
        return this.__wbg_ptr = Q >>> 0, this;
    }
    static identity() {
        const I = A.rawrotation_identity();
        return HA.__wrap(I);
    }
    get x() {
        return A.rawrotation_x(this.__wbg_ptr);
    }
    get y() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get z() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
        return A.rawrotation_w(this.__wbg_ptr);
    }
}
const tA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawsdpmatrix3_free(I >>> 0));
class pA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(pA.prototype);
        return I.__wbg_ptr = A, tA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawsdpmatrix3_free(I);
    }
    elements() {
        return Q(A.rawsdpmatrix3_elements(this.__wbg_ptr));
    }
}
const eA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawserializationpipeline_free(I >>> 0));
class rA {
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawserializationpipeline_free(I);
    }
    constructor(){
        const I = A.rawserializationpipeline_new();
        return this.__wbg_ptr = I >>> 0, this;
    }
    serializeAll(I, g, C, B, E, i, D, o, S) {
        K(I, xA), K(g, BA), K(C, EA), K(B, H), K(E, GA), K(i, lA), K(D, d), K(o, gA), K(S, SA);
        return Q(A.rawserializationpipeline_serializeAll(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, E.__wbg_ptr, i.__wbg_ptr, D.__wbg_ptr, o.__wbg_ptr, S.__wbg_ptr));
    }
    deserializeAll(I) {
        const g = A.rawserializationpipeline_deserializeAll(this.__wbg_ptr, C(I));
        return 0 === g ? void 0 : P.__wrap(g);
    }
}
const nA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawshape_free(I >>> 0));
class dA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(dA.prototype);
        return I.__wbg_ptr = A, nA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshape_free(I);
    }
    static cuboid(I, g, C) {
        const B = A.rawshape_cuboid(I, g, C);
        return dA.__wrap(B);
    }
    static roundCuboid(I, g, C, B) {
        const Q = A.rawshape_roundCuboid(I, g, C, B);
        return dA.__wrap(Q);
    }
    static ball(I) {
        const g = A.rawshape_ball(I);
        return dA.__wrap(g);
    }
    static halfspace(I) {
        K(I, xA);
        const g = A.rawshape_halfspace(I.__wbg_ptr);
        return dA.__wrap(g);
    }
    static capsule(I, g) {
        const C = A.rawshape_capsule(I, g);
        return dA.__wrap(C);
    }
    static cylinder(I, g) {
        const C = A.rawshape_cylinder(I, g);
        return dA.__wrap(C);
    }
    static roundCylinder(I, g, C) {
        const B = A.rawshape_roundCylinder(I, g, C);
        return dA.__wrap(B);
    }
    static cone(I, g) {
        const C = A.rawshape_cone(I, g);
        return dA.__wrap(C);
    }
    static roundCone(I, g, C) {
        const B = A.rawshape_roundCone(I, g, C);
        return dA.__wrap(B);
    }
    static polyline(I, g) {
        const C = s(I, A.__wbindgen_malloc), B = a, Q = R(g, A.__wbindgen_malloc), E = a, i = A.rawshape_polyline(C, B, Q, E);
        return dA.__wrap(i);
    }
    static trimesh(I, g, C) {
        const B = s(I, A.__wbindgen_malloc), Q = a, E = R(g, A.__wbindgen_malloc), i = a, D = A.rawshape_trimesh(B, Q, E, i, C);
        return dA.__wrap(D);
    }
    static heightfield(I, g, C, B, Q) {
        const E = s(C, A.__wbindgen_malloc), i = a;
        K(B, xA);
        const D = A.rawshape_heightfield(I, g, E, i, B.__wbg_ptr, Q);
        return dA.__wrap(D);
    }
    static segment(I, g) {
        K(I, xA), K(g, xA);
        const C = A.rawshape_segment(I.__wbg_ptr, g.__wbg_ptr);
        return dA.__wrap(C);
    }
    static triangle(I, g, C) {
        K(I, xA), K(g, xA), K(C, xA);
        const B = A.rawshape_triangle(I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr);
        return dA.__wrap(B);
    }
    static roundTriangle(I, g, C, B) {
        K(I, xA), K(g, xA), K(C, xA);
        const Q = A.rawshape_roundTriangle(I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B);
        return dA.__wrap(Q);
    }
    static convexHull(I) {
        const g = s(I, A.__wbindgen_malloc), C = a, B = A.rawshape_convexHull(g, C);
        return 0 === B ? void 0 : dA.__wrap(B);
    }
    static roundConvexHull(I, g) {
        const C = s(I, A.__wbindgen_malloc), B = a, Q = A.rawshape_roundConvexHull(C, B, g);
        return 0 === Q ? void 0 : dA.__wrap(Q);
    }
    static convexMesh(I, g) {
        const C = s(I, A.__wbindgen_malloc), B = a, Q = R(g, A.__wbindgen_malloc), E = a, i = A.rawshape_convexMesh(C, B, Q, E);
        return 0 === i ? void 0 : dA.__wrap(i);
    }
    static roundConvexMesh(I, g, C) {
        const B = s(I, A.__wbindgen_malloc), Q = a, E = R(g, A.__wbindgen_malloc), i = a, D = A.rawshape_roundConvexMesh(B, Q, E, i, C);
        return 0 === D ? void 0 : dA.__wrap(D);
    }
    castShape(I, g, C, B, Q, E, i, D, o, S) {
        K(I, xA), K(g, HA), K(C, xA), K(B, dA), K(Q, xA), K(E, HA), K(i, xA);
        const w = A.rawshape_castShape(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, E.__wbg_ptr, i.__wbg_ptr, D, o, S);
        return 0 === w ? void 0 : OA.__wrap(w);
    }
    intersectsShape(I, g, C, B, Q) {
        K(I, xA), K(g, HA), K(C, dA), K(B, xA), K(Q, HA);
        return 0 !== A.rawshape_intersectsShape(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr);
    }
    contactShape(I, g, C, B, Q, E) {
        K(I, xA), K(g, HA), K(C, dA), K(B, xA), K(Q, HA);
        const i = A.rawshape_contactShape(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q.__wbg_ptr, E);
        return 0 === i ? void 0 : bA.__wrap(i);
    }
    containsPoint(I, g, C) {
        K(I, xA), K(g, HA), K(C, xA);
        return 0 !== A.rawshape_containsPoint(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr);
    }
    projectPoint(I, g, C, B) {
        K(I, xA), K(g, HA), K(C, xA);
        const Q = A.rawshape_projectPoint(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B);
        return yA.__wrap(Q);
    }
    intersectsRay(I, g, C, B, Q) {
        K(I, xA), K(g, HA), K(C, xA), K(B, xA);
        return 0 !== A.rawshape_intersectsRay(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q);
    }
    castRay(I, g, C, B, Q, E) {
        K(I, xA), K(g, HA), K(C, xA), K(B, xA);
        return A.rawshape_castRay(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q, E);
    }
    castRayAndGetNormal(I, g, C, B, Q, E) {
        K(I, xA), K(g, HA), K(C, xA), K(B, xA);
        const i = A.rawshape_castRayAndGetNormal(this.__wbg_ptr, I.__wbg_ptr, g.__wbg_ptr, C.__wbg_ptr, B.__wbg_ptr, Q, E);
        return 0 === i ? void 0 : qA.__wrap(i);
    }
}
const TA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawshapecasthit_free(I >>> 0));
class OA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(OA.prototype);
        return I.__wbg_ptr = A, TA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, TA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshapecasthit_free(I);
    }
    time_of_impact() {
        return A.rawrotation_x(this.__wbg_ptr);
    }
    witness1() {
        const I = A.rawshapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    witness2() {
        const I = A.rawcontactforceevent_total_force(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    normal1() {
        const I = A.rawshapecasthit_normal1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    normal2() {
        const I = A.rawshapecasthit_normal2(this.__wbg_ptr);
        return xA.__wrap(I);
    }
}
const ZA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawshapecontact_free(I >>> 0));
class bA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(bA.prototype);
        return I.__wbg_ptr = A, ZA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawshapecontact_free(I);
    }
    distance() {
        return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    point1() {
        const I = A.rawpointprojection_point(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    point2() {
        const I = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    normal1() {
        const I = A.rawcollidershapecasthit_witness2(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    normal2() {
        const I = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
        return xA.__wrap(I);
    }
}
const WA = "undefined" == typeof FinalizationRegistry ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((I)=>A.__wbg_rawvector_free(I >>> 0));
class xA {
    static __wrap(A) {
        A >>>= 0;
        const I = Object.create(xA.prototype);
        return I.__wbg_ptr = A, WA.register(I, I.__wbg_ptr, I), I;
    }
    __destroy_into_raw() {
        const A = this.__wbg_ptr;
        return this.__wbg_ptr = 0, WA.unregister(this), A;
    }
    free() {
        const I = this.__destroy_into_raw();
        A.__wbg_rawvector_free(I);
    }
    static zero() {
        const I = A.rawvector_zero();
        return xA.__wrap(I);
    }
    constructor(I, g, C){
        const B = A.rawvector_new(I, g, C);
        return this.__wbg_ptr = B >>> 0, this;
    }
    get x() {
        return A.rawrotation_x(this.__wbg_ptr);
    }
    set x(I) {
        A.rawvector_set_x(this.__wbg_ptr, I);
    }
    get y() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set y(I) {
        A.rawintegrationparameters_set_dt(this.__wbg_ptr, I);
    }
    get z() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    set z(I) {
        A.rawvector_set_z(this.__wbg_ptr, I);
    }
    xyz() {
        const I = A.rawvector_xyz(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    yxz() {
        const I = A.rawvector_yxz(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    zxy() {
        const I = A.rawvector_zxy(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    xzy() {
        const I = A.rawvector_xzy(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    yzx() {
        const I = A.rawvector_yzx(this.__wbg_ptr);
        return xA.__wrap(I);
    }
    zyx() {
        const I = A.rawvector_zyx(this.__wbg_ptr);
        return xA.__wrap(I);
    }
}
async function mA(I) {
    if (void 0 !== A) return A;
    void 0 === I && (I = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
    const g = function() {
        const I = {
            wbg: {}
        };
        return I.wbg.__wbindgen_number_new = function(A) {
            return C(A);
        }, I.wbg.__wbindgen_boolean_get = function(A) {
            const I = B(A);
            return "boolean" == typeof I ? I ? 1 : 0 : 2;
        }, I.wbg.__wbindgen_object_drop_ref = function(A) {
            Q(A);
        }, I.wbg.__wbindgen_number_get = function(A, I) {
            const g = B(I), C = "number" == typeof g ? g : void 0;
            D()[A / 8 + 1] = E(C) ? 0 : C, S()[A / 4 + 0] = !E(C);
        }, I.wbg.__wbindgen_is_function = function(A) {
            return "function" == typeof B(A);
        }, I.wbg.__wbg_rawraycolliderintersection_new = function(A) {
            return C(RA.__wrap(A));
        }, I.wbg.__wbg_rawcontactforceevent_new = function(A) {
            return C(b.__wrap(A));
        }, I.wbg.__wbg_call_b3ca7c6051f9bec1 = function() {
            return c(function(A, I, g) {
                return C(B(A).call(B(I), B(g)));
            }, arguments);
        }, I.wbg.__wbg_call_8e7cb608789c2528 = function() {
            return c(function(A, I, g, Q) {
                return C(B(A).call(B(I), B(g), B(Q)));
            }, arguments);
        }, I.wbg.__wbg_call_938992c832f74314 = function() {
            return c(function(A, I, g, Q, E) {
                return C(B(A).call(B(I), B(g), B(Q), B(E)));
            }, arguments);
        }, I.wbg.__wbg_bind_4d857b598695205e = function(A, I, g, Q) {
            return C(B(A).bind(B(I), B(g), B(Q)));
        }, I.wbg.__wbg_buffer_12d079cc21e14bdb = function(A) {
            return C(B(A).buffer);
        }, I.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function(A, I, g) {
            return C(new Uint8Array(B(A), I >>> 0, g >>> 0));
        }, I.wbg.__wbg_new_63b92bc8671ed464 = function(A) {
            return C(new Uint8Array(B(A)));
        }, I.wbg.__wbg_set_a47bac70306a19a7 = function(A, I, g) {
            B(A).set(B(I), g >>> 0);
        }, I.wbg.__wbg_length_c20a40f15020d68a = function(A) {
            return B(A).length;
        }, I.wbg.__wbg_newwithbyteoffsetandlength_4a659d079a1650e0 = function(A, I, g) {
            return C(new Float32Array(B(A), I >>> 0, g >>> 0));
        }, I.wbg.__wbg_set_bd975934d1b1fddb = function(A, I, g) {
            B(A).set(B(I), g >>> 0);
        }, I.wbg.__wbg_length_d25bbcbc3367f684 = function(A) {
            return B(A).length;
        }, I.wbg.__wbg_newwithlength_1e8b839a06de01c5 = function(A) {
            return C(new Float32Array(A >>> 0));
        }, I.wbg.__wbindgen_throw = function(A, I) {
            throw new Error(k(A, I));
        }, I.wbg.__wbindgen_memory = function() {
            return C(A.memory);
        }, I;
    }();
    ("string" == typeof I || "function" == typeof Request && I instanceof Request || "function" == typeof URL && I instanceof URL) && (I = fetch(I));
    const { instance: w, module: K } = await async function(A, I) {
        if ("function" == typeof Response && A instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming) try {
                return await WebAssembly.instantiateStreaming(A, I);
            } catch (I) {
                if ("application/wasm" == A.headers.get("Content-Type")) throw I;
                console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", I);
            }
            const g = await A.arrayBuffer();
            return await WebAssembly.instantiate(g, I);
        }
        {
            const g = await WebAssembly.instantiate(A, I);
            return g instanceof WebAssembly.Instance ? {
                instance: g,
                module: A
            } : g;
        }
    }(await I, g);
    return function(I, g) {
        return A = I.exports, mA.__wbindgen_wasm_module = g, J = null, i = null, o = null, M = null, G = null, A;
    }(w, K);
}
class jA {
    constructor(A, I, g){
        this.x = A, this.y = I, this.z = g;
    }
}
class fA {
    static new(A, I, g) {
        return new jA(A, I, g);
    }
    static intoRaw(A) {
        return new xA(A.x, A.y, A.z);
    }
    static zeros() {
        return fA.new(0, 0, 0);
    }
    static fromRaw(A) {
        if (!A) return null;
        let I = fA.new(A.x, A.y, A.z);
        return A.free(), I;
    }
    static copy(A, I) {
        A.x = I.x, A.y = I.y, A.z = I.z;
    }
}
class VA {
    constructor(A, I, g, C){
        this.x = A, this.y = I, this.z = g, this.w = C;
    }
}
class XA {
    static identity() {
        return new VA(0, 0, 0, 1);
    }
    static fromRaw(A) {
        if (!A) return null;
        let I = new VA(A.x, A.y, A.z, A.w);
        return A.free(), I;
    }
    static intoRaw(A) {
        return new HA(A.x, A.y, A.z, A.w);
    }
    static copy(A, I) {
        A.x = I.x, A.y = I.y, A.z = I.z, A.w = I.w;
    }
}
class PA {
    constructor(A){
        this.elements = A;
    }
    get m11() {
        return this.elements[0];
    }
    get m12() {
        return this.elements[1];
    }
    get m21() {
        return this.m12;
    }
    get m13() {
        return this.elements[2];
    }
    get m31() {
        return this.m13;
    }
    get m22() {
        return this.elements[3];
    }
    get m23() {
        return this.elements[4];
    }
    get m32() {
        return this.m23;
    }
    get m33() {
        return this.elements[5];
    }
}
class uA {
    static fromRaw(A) {
        const I = new PA(A.elements());
        return A.free(), I;
    }
}
var vA, zA, _A, $A, AI, II, gI, CI, BI, QI, EI, iI, DI, oI, SI;
!function(A) {
    A[A.Dynamic = 0] = "Dynamic", A[A.Fixed = 1] = "Fixed", A[A.KinematicPositionBased = 2] = "KinematicPositionBased", A[A.KinematicVelocityBased = 3] = "KinematicVelocityBased";
}(vA || (vA = {}));
class wI {
    constructor(A, I, g){
        this.rawSet = A, this.colliderSet = I, this.handle = g;
    }
    finalizeDeserialization(A) {
        this.colliderSet = A;
    }
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    lockTranslations(A, I) {
        return this.rawSet.rbLockTranslations(this.handle, A, I);
    }
    lockRotations(A, I) {
        return this.rawSet.rbLockRotations(this.handle, A, I);
    }
    setEnabledTranslations(A, I, g, C) {
        return this.rawSet.rbSetEnabledTranslations(this.handle, A, I, g, C);
    }
    restrictTranslations(A, I, g, C) {
        this.setEnabledTranslations(A, I, g, C);
    }
    setEnabledRotations(A, I, g, C) {
        return this.rawSet.rbSetEnabledRotations(this.handle, A, I, g, C);
    }
    restrictRotations(A, I, g, C) {
        this.setEnabledRotations(A, I, g, C);
    }
    dominanceGroup() {
        return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(A) {
        this.rawSet.rbSetDominanceGroup(this.handle, A);
    }
    additionalSolverIterations() {
        return this.rawSet.rbAdditionalSolverIterations(this.handle);
    }
    setAdditionalSolverIterations(A) {
        this.rawSet.rbSetAdditionalSolverIterations(this.handle, A);
    }
    enableCcd(A) {
        this.rawSet.rbEnableCcd(this.handle, A);
    }
    setSoftCcdPrediction(A) {
        this.rawSet.rbSetSoftCcdPrediction(this.handle, A);
    }
    softCcdPrediction() {
        return this.rawSet.rbSoftCcdPrediction(this.handle);
    }
    translation() {
        let A = this.rawSet.rbTranslation(this.handle);
        return fA.fromRaw(A);
    }
    rotation() {
        let A = this.rawSet.rbRotation(this.handle);
        return XA.fromRaw(A);
    }
    nextTranslation() {
        let A = this.rawSet.rbNextTranslation(this.handle);
        return fA.fromRaw(A);
    }
    nextRotation() {
        let A = this.rawSet.rbNextRotation(this.handle);
        return XA.fromRaw(A);
    }
    setTranslation(A, I) {
        this.rawSet.rbSetTranslation(this.handle, A.x, A.y, A.z, I);
    }
    setLinvel(A, I) {
        let g = fA.intoRaw(A);
        this.rawSet.rbSetLinvel(this.handle, g, I), g.free();
    }
    gravityScale() {
        return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(A, I) {
        this.rawSet.rbSetGravityScale(this.handle, A, I);
    }
    setRotation(A, I) {
        this.rawSet.rbSetRotation(this.handle, A.x, A.y, A.z, A.w, I);
    }
    setAngvel(A, I) {
        let g = fA.intoRaw(A);
        this.rawSet.rbSetAngvel(this.handle, g, I), g.free();
    }
    setNextKinematicTranslation(A) {
        this.rawSet.rbSetNextKinematicTranslation(this.handle, A.x, A.y, A.z);
    }
    setNextKinematicRotation(A) {
        this.rawSet.rbSetNextKinematicRotation(this.handle, A.x, A.y, A.z, A.w);
    }
    linvel() {
        return fA.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    angvel() {
        return fA.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
        return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
        return fA.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
        return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
        return fA.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
        return fA.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertiaSqrt() {
        return fA.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
        return fA.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
        return XA.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertiaSqrt() {
        return uA.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
    }
    effectiveAngularInertia() {
        return uA.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
    }
    sleep() {
        this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
        this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
        return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
        return this.rawSet.rbNumColliders(this.handle);
    }
    collider(A) {
        return this.colliderSet.get(this.rawSet.rbCollider(this.handle, A));
    }
    setEnabled(A) {
        this.rawSet.rbSetEnabled(this.handle, A);
    }
    isEnabled() {
        return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
        return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(A, I) {
        return this.rawSet.rbSetBodyType(this.handle, A, I);
    }
    isSleeping() {
        return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
        return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
        return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
        return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
        return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
        return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
        return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(A) {
        this.rawSet.rbSetLinearDamping(this.handle, A);
    }
    recomputeMassPropertiesFromColliders() {
        this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(A, I) {
        this.rawSet.rbSetAdditionalMass(this.handle, A, I);
    }
    setAdditionalMassProperties(A, I, g, C, B) {
        let Q = fA.intoRaw(I), E = fA.intoRaw(g), i = XA.intoRaw(C);
        this.rawSet.rbSetAdditionalMassProperties(this.handle, A, Q, E, i, B), Q.free(), E.free(), i.free();
    }
    setAngularDamping(A) {
        this.rawSet.rbSetAngularDamping(this.handle, A);
    }
    resetForces(A) {
        this.rawSet.rbResetForces(this.handle, A);
    }
    resetTorques(A) {
        this.rawSet.rbResetTorques(this.handle, A);
    }
    addForce(A, I) {
        const g = fA.intoRaw(A);
        this.rawSet.rbAddForce(this.handle, g, I), g.free();
    }
    applyImpulse(A, I) {
        const g = fA.intoRaw(A);
        this.rawSet.rbApplyImpulse(this.handle, g, I), g.free();
    }
    addTorque(A, I) {
        const g = fA.intoRaw(A);
        this.rawSet.rbAddTorque(this.handle, g, I), g.free();
    }
    applyTorqueImpulse(A, I) {
        const g = fA.intoRaw(A);
        this.rawSet.rbApplyTorqueImpulse(this.handle, g, I), g.free();
    }
    addForceAtPoint(A, I, g) {
        const C = fA.intoRaw(A), B = fA.intoRaw(I);
        this.rawSet.rbAddForceAtPoint(this.handle, C, B, g), C.free(), B.free();
    }
    applyImpulseAtPoint(A, I, g) {
        const C = fA.intoRaw(A), B = fA.intoRaw(I);
        this.rawSet.rbApplyImpulseAtPoint(this.handle, C, B, g), C.free(), B.free();
    }
    userForce() {
        return fA.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
        return fA.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
}
class GI {
    constructor(A){
        this.enabled = !0, this.status = A, this.translation = fA.zeros(), this.rotation = XA.identity(), this.gravityScale = 1, this.linvel = fA.zeros(), this.mass = 0, this.massOnly = !1, this.centerOfMass = fA.zeros(), this.translationsEnabledX = !0, this.translationsEnabledY = !0, this.angvel = fA.zeros(), this.principalAngularInertia = fA.zeros(), this.angularInertiaLocalFrame = XA.identity(), this.translationsEnabledZ = !0, this.rotationsEnabledX = !0, this.rotationsEnabledY = !0, this.rotationsEnabledZ = !0, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = !0, this.sleeping = !1, this.ccdEnabled = !1, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
        return new GI(vA.Dynamic);
    }
    static kinematicPositionBased() {
        return new GI(vA.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
        return new GI(vA.KinematicVelocityBased);
    }
    static fixed() {
        return new GI(vA.Fixed);
    }
    static newDynamic() {
        return new GI(vA.Dynamic);
    }
    static newKinematicPositionBased() {
        return new GI(vA.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
        return new GI(vA.KinematicVelocityBased);
    }
    static newStatic() {
        return new GI(vA.Fixed);
    }
    setDominanceGroup(A) {
        return this.dominanceGroup = A, this;
    }
    setAdditionalSolverIterations(A) {
        return this.additionalSolverIterations = A, this;
    }
    setEnabled(A) {
        return this.enabled = A, this;
    }
    setTranslation(A, I, g) {
        if ("number" != typeof A || "number" != typeof I || "number" != typeof g) throw TypeError("The translation components must be numbers.");
        return this.translation = {
            x: A,
            y: I,
            z: g
        }, this;
    }
    setRotation(A) {
        return XA.copy(this.rotation, A), this;
    }
    setGravityScale(A) {
        return this.gravityScale = A, this;
    }
    setAdditionalMass(A) {
        return this.mass = A, this.massOnly = !0, this;
    }
    setLinvel(A, I, g) {
        if ("number" != typeof A || "number" != typeof I || "number" != typeof g) throw TypeError("The linvel components must be numbers.");
        return this.linvel = {
            x: A,
            y: I,
            z: g
        }, this;
    }
    setAngvel(A) {
        return fA.copy(this.angvel, A), this;
    }
    setAdditionalMassProperties(A, I, g, C) {
        return this.mass = A, fA.copy(this.centerOfMass, I), fA.copy(this.principalAngularInertia, g), XA.copy(this.angularInertiaLocalFrame, C), this.massOnly = !1, this;
    }
    enabledTranslations(A, I, g) {
        return this.translationsEnabledX = A, this.translationsEnabledY = I, this.translationsEnabledZ = g, this;
    }
    restrictTranslations(A, I, g) {
        return this.enabledTranslations(A, I, g);
    }
    lockTranslations() {
        return this.enabledTranslations(!1, !1, !1);
    }
    enabledRotations(A, I, g) {
        return this.rotationsEnabledX = A, this.rotationsEnabledY = I, this.rotationsEnabledZ = g, this;
    }
    restrictRotations(A, I, g) {
        return this.enabledRotations(A, I, g);
    }
    lockRotations() {
        return this.restrictRotations(!1, !1, !1);
    }
    setLinearDamping(A) {
        return this.linearDamping = A, this;
    }
    setAngularDamping(A) {
        return this.angularDamping = A, this;
    }
    setCanSleep(A) {
        return this.canSleep = A, this;
    }
    setSleeping(A) {
        return this.sleeping = A, this;
    }
    setCcdEnabled(A) {
        return this.ccdEnabled = A, this;
    }
    setSoftCcdPrediction(A) {
        return this.softCcdPrediction = A, this;
    }
    setUserData(A) {
        return this.userData = A, this;
    }
}
class kI {
    constructor(){
        this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array, this.size = 0;
    }
    set(A, I) {
        let g = this.index(A);
        for(; this.data.length <= g;)this.data.push(null);
        null == this.data[g] && (this.size += 1), this.data[g] = I;
    }
    len() {
        return this.size;
    }
    delete(A) {
        let I = this.index(A);
        I < this.data.length && (null != this.data[I] && (this.size -= 1), this.data[I] = null);
    }
    clear() {
        this.data = new Array;
    }
    get(A) {
        let I = this.index(A);
        return I < this.data.length ? this.data[I] : null;
    }
    forEach(A) {
        for (const I of this.data)null != I && A(I);
    }
    getAll() {
        return this.data.filter((A)=>null != A);
    }
    index(A) {
        return this.fconv[0] = A, this.uconv[0];
    }
}
class KI {
    constructor(A){
        this.raw = A || new lA, this.map = new kI, A && A.forEachRigidBodyHandle((I)=>{
            this.map.set(I, new wI(A, null, I));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    finalizeDeserialization(A) {
        this.map.forEach((I)=>I.finalizeDeserialization(A));
    }
    createRigidBody(A, I) {
        let g = fA.intoRaw(I.translation), C = XA.intoRaw(I.rotation), B = fA.intoRaw(I.linvel), Q = fA.intoRaw(I.centerOfMass), E = fA.intoRaw(I.angvel), i = fA.intoRaw(I.principalAngularInertia), D = XA.intoRaw(I.angularInertiaLocalFrame), o = this.raw.createRigidBody(I.enabled, g, C, I.gravityScale, I.mass, I.massOnly, Q, B, E, i, D, I.translationsEnabledX, I.translationsEnabledY, I.translationsEnabledZ, I.rotationsEnabledX, I.rotationsEnabledY, I.rotationsEnabledZ, I.linearDamping, I.angularDamping, I.status, I.canSleep, I.sleeping, I.softCcdPrediction, I.ccdEnabled, I.dominanceGroup, I.additionalSolverIterations);
        g.free(), C.free(), B.free(), Q.free(), E.free(), i.free(), D.free();
        const S = new wI(this.raw, A, o);
        return S.userData = I.userData, this.map.set(o, S), S;
    }
    remove(A, I, g, C, B) {
        for(let I = 0; I < this.raw.rbNumColliders(A); I += 1)g.unmap(this.raw.rbCollider(A, I));
        C.forEachJointHandleAttachedToRigidBody(A, (A)=>C.unmap(A)), B.forEachJointHandleAttachedToRigidBody(A, (A)=>B.unmap(A)), this.raw.remove(A, I.raw, g.raw, C.raw, B.raw), this.map.delete(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    get(A) {
        return this.map.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    forEachActiveRigidBody(A, I) {
        A.forEachActiveRigidBodyHandle((A)=>{
            I(this.get(A));
        });
    }
    getAll() {
        return this.map.getAll();
    }
}
class JI {
    constructor(A){
        this.raw = A || new BA;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
        return this.raw.dt;
    }
    get contact_erp() {
        return this.raw.contact_erp;
    }
    get lengthUnit() {
        return this.raw.lengthUnit;
    }
    get normalizedAllowedLinearError() {
        return this.raw.normalizedAllowedLinearError;
    }
    get normalizedPredictionDistance() {
        return this.raw.normalizedPredictionDistance;
    }
    get numSolverIterations() {
        return this.raw.numSolverIterations;
    }
    get numAdditionalFrictionIterations() {
        return this.raw.numAdditionalFrictionIterations;
    }
    get numInternalPgsIterations() {
        return this.raw.numInternalPgsIterations;
    }
    get minIslandSize() {
        return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
        return this.raw.maxCcdSubsteps;
    }
    set dt(A) {
        this.raw.dt = A;
    }
    set contact_natural_frequency(A) {
        this.raw.contact_natural_frequency = A;
    }
    set lengthUnit(A) {
        this.raw.lengthUnit = A;
    }
    set normalizedAllowedLinearError(A) {
        this.raw.normalizedAllowedLinearError = A;
    }
    set normalizedPredictionDistance(A) {
        this.raw.normalizedPredictionDistance = A;
    }
    set numSolverIterations(A) {
        this.raw.numSolverIterations = A;
    }
    set numAdditionalFrictionIterations(A) {
        this.raw.numAdditionalFrictionIterations = A;
    }
    set numInternalPgsIterations(A) {
        this.raw.numInternalPgsIterations = A;
    }
    set minIslandSize(A) {
        this.raw.minIslandSize = A;
    }
    set maxCcdSubsteps(A) {
        this.raw.maxCcdSubsteps = A;
    }
    switchToStandardPgsSolver() {
        this.raw.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
        this.raw.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
        this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
}
!function(A) {
    A[A.Revolute = 0] = "Revolute", A[A.Fixed = 1] = "Fixed", A[A.Prismatic = 2] = "Prismatic", A[A.Rope = 3] = "Rope", A[A.Spring = 4] = "Spring", A[A.Spherical = 5] = "Spherical", A[A.Generic = 6] = "Generic";
}(zA || (zA = {})), function(A) {
    A[A.AccelerationBased = 0] = "AccelerationBased", A[A.ForceBased = 1] = "ForceBased";
}(_A || (_A = {})), function(A) {
    A[A.LinX = 1] = "LinX", A[A.LinY = 2] = "LinY", A[A.LinZ = 4] = "LinZ", A[A.AngX = 8] = "AngX", A[A.AngY = 16] = "AngY", A[A.AngZ = 32] = "AngZ";
}($A || ($A = {}));
class UI {
    constructor(A, I, g){
        this.rawSet = A, this.bodySet = I, this.handle = g;
    }
    static newTyped(A, I, g) {
        switch(A.jointType(g)){
            case Y.Revolute:
                return new aI(A, I, g);
            case Y.Prismatic:
                return new FI(A, I, g);
            case Y.Fixed:
                return new yI(A, I, g);
            case Y.Spring:
                return new MI(A, I, g);
            case Y.Rope:
                return new NI(A, I, g);
            case Y.Spherical:
                return new RI(A, I, g);
            case Y.Generic:
                return new sI(A, I, g);
            default:
                return new UI(A, I, g);
        }
    }
    finalizeDeserialization(A) {
        this.bodySet = A;
    }
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    body1() {
        return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
        return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
        return this.rawSet.jointType(this.handle);
    }
    frameX1() {
        return XA.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
        return XA.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
        return fA.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
        return fA.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(A) {
        const I = fA.intoRaw(A);
        this.rawSet.jointSetAnchor1(this.handle, I), I.free();
    }
    setAnchor2(A) {
        const I = fA.intoRaw(A);
        this.rawSet.jointSetAnchor2(this.handle, I), I.free();
    }
    setContactsEnabled(A) {
        this.rawSet.jointSetContactsEnabled(this.handle, A);
    }
    contactsEnabled() {
        return this.rawSet.jointContactsEnabled(this.handle);
    }
}
class hI extends UI {
    limitsEnabled() {
        return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
        return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
        return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(A, I) {
        this.rawSet.jointSetLimits(this.handle, this.rawAxis(), A, I);
    }
    configureMotorModel(A) {
        this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), A);
    }
    configureMotorVelocity(A, I) {
        this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), A, I);
    }
    configureMotorPosition(A, I, g) {
        this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), A, I, g);
    }
    configureMotor(A, I, g, C) {
        this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), A, I, g, C);
    }
}
class yI extends UI {
}
class NI extends UI {
}
class MI extends UI {
}
class FI extends hI {
    rawAxis() {
        return q.LinX;
    }
}
class aI extends hI {
    rawAxis() {
        return q.AngX;
    }
}
class sI extends UI {
}
class RI extends UI {
}
class cI {
    constructor(){}
    static fixed(A, I, g, C) {
        let B = new cI;
        return B.anchor1 = A, B.anchor2 = g, B.frame1 = I, B.frame2 = C, B.jointType = zA.Fixed, B;
    }
    static spring(A, I, g, C, B) {
        let Q = new cI;
        return Q.anchor1 = C, Q.anchor2 = B, Q.length = A, Q.stiffness = I, Q.damping = g, Q.jointType = zA.Spring, Q;
    }
    static rope(A, I, g) {
        let C = new cI;
        return C.anchor1 = I, C.anchor2 = g, C.length = A, C.jointType = zA.Rope, C;
    }
    static generic(A, I, g, C) {
        let B = new cI;
        return B.anchor1 = A, B.anchor2 = I, B.axis = g, B.axesMask = C, B.jointType = zA.Generic, B;
    }
    static spherical(A, I) {
        let g = new cI;
        return g.anchor1 = A, g.anchor2 = I, g.jointType = zA.Spherical, g;
    }
    static prismatic(A, I, g) {
        let C = new cI;
        return C.anchor1 = A, C.anchor2 = I, C.axis = g, C.jointType = zA.Prismatic, C;
    }
    static revolute(A, I, g) {
        let C = new cI;
        return C.anchor1 = A, C.anchor2 = I, C.axis = g, C.jointType = zA.Revolute, C;
    }
    intoRaw() {
        let A, I, g = fA.intoRaw(this.anchor1), C = fA.intoRaw(this.anchor2), B = !1, Q = 0, E = 0;
        switch(this.jointType){
            case zA.Fixed:
                let i = XA.intoRaw(this.frame1), D = XA.intoRaw(this.frame2);
                I = AA.fixed(g, i, C, D), i.free(), D.free();
                break;
            case zA.Spring:
                I = AA.spring(this.length, this.stiffness, this.damping, g, C);
                break;
            case zA.Rope:
                I = AA.rope(this.length, g, C);
                break;
            case zA.Prismatic:
                A = fA.intoRaw(this.axis), this.limitsEnabled && (B = !0, Q = this.limits[0], E = this.limits[1]), I = AA.prismatic(g, C, A, B, Q, E), A.free();
                break;
            case zA.Generic:
                A = fA.intoRaw(this.axis);
                let o = this.axesMask;
                I = AA.generic(g, C, A, o);
                break;
            case zA.Spherical:
                I = AA.spherical(g, C);
                break;
            case zA.Revolute:
                A = fA.intoRaw(this.axis), I = AA.revolute(g, C, A), A.free();
        }
        return g.free(), C.free(), I;
    }
}
class qI {
    constructor(A){
        this.raw = A || new gA, this.map = new kI, A && A.forEachJointHandle((I)=>{
            this.map.set(I, UI.newTyped(A, null, I));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    finalizeDeserialization(A) {
        this.map.forEach((I)=>I.finalizeDeserialization(A));
    }
    createJoint(A, I, g, C, B) {
        const Q = I.intoRaw(), E = this.raw.createJoint(Q, g, C, B);
        Q.free();
        let i = UI.newTyped(this.raw, A, E);
        return this.map.set(E, i), i;
    }
    remove(A, I) {
        this.raw.remove(A, I), this.unmap(A);
    }
    forEachJointHandleAttachedToRigidBody(A, I) {
        this.raw.forEachJointAttachedToRigidBody(A, I);
    }
    unmap(A) {
        this.map.delete(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    get(A) {
        return this.map.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    getAll() {
        return this.map.getAll();
    }
}
class YI {
    constructor(A, I){
        this.rawSet = A, this.handle = I;
    }
    static newTyped(A, I) {
        switch(A.jointType(I)){
            case Y.Revolute:
                return new tI(A, I);
            case Y.Prismatic:
                return new HI(A, I);
            case Y.Fixed:
                return new LI(A, I);
            case Y.Spherical:
                return new pI(A, I);
            default:
                return new YI(A, I);
        }
    }
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(A) {
        this.rawSet.jointSetContactsEnabled(this.handle, A);
    }
    contactsEnabled() {
        return this.rawSet.jointContactsEnabled(this.handle);
    }
}
class lI extends YI {
}
class LI extends YI {
}
class HI extends lI {
    rawAxis() {
        return q.LinX;
    }
}
class tI extends lI {
    rawAxis() {
        return q.AngX;
    }
}
class pI extends YI {
}
class eI {
    constructor(A){
        this.raw = A || new SA, this.map = new kI, A && A.forEachJointHandle((A)=>{
            this.map.set(A, YI.newTyped(this.raw, A));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    createJoint(A, I, g, C) {
        const B = A.intoRaw(), Q = this.raw.createJoint(B, I, g, C);
        B.free();
        let E = YI.newTyped(this.raw, Q);
        return this.map.set(Q, E), E;
    }
    remove(A, I) {
        this.raw.remove(A, I), this.map.delete(A);
    }
    unmap(A) {
        this.map.delete(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    get(A) {
        return this.map.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    forEachJointHandleAttachedToRigidBody(A, I) {
        this.raw.forEachJointAttachedToRigidBody(A, I);
    }
    getAll() {
        return this.map.getAll();
    }
}
!function(A) {
    A[A.Average = 0] = "Average", A[A.Min = 1] = "Min", A[A.Multiply = 2] = "Multiply", A[A.Max = 3] = "Max";
}(AI || (AI = {}));
class rI {
    constructor(A){
        this.raw = A || new p;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
}
class nI {
    constructor(A){
        this.raw = A || new EA;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    forEachActiveRigidBodyHandle(A) {
        this.raw.forEachActiveRigidBodyHandle(A);
    }
}
class dI {
    constructor(A){
        this.raw = A || new H;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
}
class TI {
    constructor(A){
        this.raw = A || new GA, this.tempManifold = new OI(null);
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    contactPairsWith(A, I) {
        this.raw.contact_pairs_with(A, I);
    }
    intersectionPairsWith(A, I) {
        this.raw.intersection_pairs_with(A, I);
    }
    contactPair(A, I, g) {
        const C = this.raw.contact_pair(A, I);
        if (C) {
            const I = C.collider1() != A;
            let B;
            for(B = 0; B < C.numContactManifolds(); ++B)this.tempManifold.raw = C.contactManifold(B), this.tempManifold.raw && g(this.tempManifold, I), this.tempManifold.free();
            C.free();
        }
    }
    intersectionPair(A, I) {
        return this.raw.intersection_pair(A, I);
    }
}
class OI {
    constructor(A){
        this.raw = A;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    normal() {
        return fA.fromRaw(this.raw.normal());
    }
    localNormal1() {
        return fA.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
        return fA.fromRaw(this.raw.local_n2());
    }
    subshape1() {
        return this.raw.subshape1();
    }
    subshape2() {
        return this.raw.subshape2();
    }
    numContacts() {
        return this.raw.num_contacts();
    }
    localContactPoint1(A) {
        return fA.fromRaw(this.raw.contact_local_p1(A));
    }
    localContactPoint2(A) {
        return fA.fromRaw(this.raw.contact_local_p2(A));
    }
    contactDist(A) {
        return this.raw.contact_dist(A);
    }
    contactFid1(A) {
        return this.raw.contact_fid1(A);
    }
    contactFid2(A) {
        return this.raw.contact_fid2(A);
    }
    contactImpulse(A) {
        return this.raw.contact_impulse(A);
    }
    contactTangentImpulseX(A) {
        return this.raw.contact_tangent_impulse_x(A);
    }
    contactTangentImpulseY(A) {
        return this.raw.contact_tangent_impulse_y(A);
    }
    numSolverContacts() {
        return this.raw.num_solver_contacts();
    }
    solverContactPoint(A) {
        return fA.fromRaw(this.raw.solver_contact_point(A));
    }
    solverContactDist(A) {
        return this.raw.solver_contact_dist(A);
    }
    solverContactFriction(A) {
        return this.raw.solver_contact_friction(A);
    }
    solverContactRestitution(A) {
        return this.raw.solver_contact_restitution(A);
    }
    solverContactTangentVelocity(A) {
        return fA.fromRaw(this.raw.solver_contact_tangent_velocity(A));
    }
}
class ZI {
    constructor(A, I, g, C, B){
        this.distance = A, this.point1 = I, this.point2 = g, this.normal1 = C, this.normal2 = B;
    }
    static fromRaw(A) {
        if (!A) return null;
        const I = new ZI(A.distance(), fA.fromRaw(A.point1()), fA.fromRaw(A.point2()), fA.fromRaw(A.normal1()), fA.fromRaw(A.normal2()));
        return A.free(), I;
    }
}
!function(A) {
    A[A.Vertex = 0] = "Vertex", A[A.Edge = 1] = "Edge", A[A.Face = 2] = "Face", A[A.Unknown = 3] = "Unknown";
}(II || (II = {}));
class bI {
    constructor(A, I){
        this.point = A, this.isInside = I;
    }
    static fromRaw(A) {
        if (!A) return null;
        const I = new bI(fA.fromRaw(A.point()), A.isInside());
        return A.free(), I;
    }
}
class WI {
    constructor(A, I, g, C, B){
        this.featureType = II.Unknown, this.featureId = void 0, this.collider = A, this.point = I, this.isInside = g, void 0 !== B && (this.featureId = B), void 0 !== C && (this.featureType = C);
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new WI(A.get(I.colliderHandle()), fA.fromRaw(I.point()), I.isInside(), I.featureType(), I.featureId());
        return I.free(), g;
    }
}
class xI {
    constructor(A, I){
        this.origin = A, this.dir = I;
    }
    pointAt(A) {
        return {
            x: this.origin.x + this.dir.x * A,
            y: this.origin.y + this.dir.y * A,
            z: this.origin.z + this.dir.z * A
        };
    }
}
class mI {
    constructor(A, I, g, C){
        this.featureType = II.Unknown, this.featureId = void 0, this.timeOfImpact = A, this.normal = I, void 0 !== C && (this.featureId = C), void 0 !== g && (this.featureType = g);
    }
    static fromRaw(A) {
        if (!A) return null;
        const I = new mI(A.time_of_impact(), fA.fromRaw(A.normal()), A.featureType(), A.featureId());
        return A.free(), I;
    }
}
class jI {
    constructor(A, I, g, C, B){
        this.featureType = II.Unknown, this.featureId = void 0, this.collider = A, this.timeOfImpact = I, this.normal = g, void 0 !== B && (this.featureId = B), void 0 !== C && (this.featureType = C);
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new jI(A.get(I.colliderHandle()), I.time_of_impact(), fA.fromRaw(I.normal()), I.featureType(), I.featureId());
        return I.free(), g;
    }
}
class fI {
    constructor(A, I){
        this.collider = A, this.timeOfImpact = I;
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new fI(A.get(I.colliderHandle()), I.timeOfImpact());
        return I.free(), g;
    }
}
class VI {
    constructor(A, I, g, C, B){
        this.time_of_impact = A, this.witness1 = I, this.witness2 = g, this.normal1 = C, this.normal2 = B;
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new VI(I.time_of_impact(), fA.fromRaw(I.witness1()), fA.fromRaw(I.witness2()), fA.fromRaw(I.normal1()), fA.fromRaw(I.normal2()));
        return I.free(), g;
    }
}
class XI extends VI {
    constructor(A, I, g, C, B, Q){
        super(I, g, C, B, Q), this.collider = A;
    }
    static fromRaw(A, I) {
        if (!I) return null;
        const g = new XI(A.get(I.colliderHandle()), I.time_of_impact(), fA.fromRaw(I.witness1()), fA.fromRaw(I.witness2()), fA.fromRaw(I.normal1()), fA.fromRaw(I.normal2()));
        return I.free(), g;
    }
}
class PI {
    static fromRaw(A, I) {
        const g = A.coShapeType(I);
        let C, B, Q, E, i, D, o;
        switch(g){
            case l.Ball:
                return new uI(A.coRadius(I));
            case l.Cuboid:
                return C = A.coHalfExtents(I), new zI(C.x, C.y, C.z);
            case l.RoundCuboid:
                return C = A.coHalfExtents(I), B = A.coRoundRadius(I), new _I(C.x, C.y, C.z, B);
            case l.Capsule:
                return i = A.coHalfHeight(I), D = A.coRadius(I), new $I(i, D);
            case l.Segment:
                return Q = A.coVertices(I), new Ag(fA.new(Q[0], Q[1], Q[2]), fA.new(Q[3], Q[4], Q[5]));
            case l.Polyline:
                return Q = A.coVertices(I), E = A.coIndices(I), new Cg(Q, E);
            case l.Triangle:
                return Q = A.coVertices(I), new Ig(fA.new(Q[0], Q[1], Q[2]), fA.new(Q[3], Q[4], Q[5]), fA.new(Q[6], Q[7], Q[8]));
            case l.RoundTriangle:
                return Q = A.coVertices(I), B = A.coRoundRadius(I), new gg(fA.new(Q[0], Q[1], Q[2]), fA.new(Q[3], Q[4], Q[5]), fA.new(Q[6], Q[7], Q[8]), B);
            case l.HalfSpace:
                return o = fA.fromRaw(A.coHalfspaceNormal(I)), new vI(o);
            case l.TriMesh:
                Q = A.coVertices(I), E = A.coIndices(I);
                const S = A.coTriMeshFlags(I);
                return new Bg(Q, E, S);
            case l.HeightField:
                const w = A.coHeightfieldScale(I), G = A.coHeightfieldHeights(I), k = A.coHeightfieldNRows(I), K = A.coHeightfieldNCols(I), J = A.coHeightFieldFlags(I);
                return new ig(k, K, G, w, J);
            case l.ConvexPolyhedron:
                return Q = A.coVertices(I), E = A.coIndices(I), new Qg(Q, E);
            case l.RoundConvexPolyhedron:
                return Q = A.coVertices(I), E = A.coIndices(I), B = A.coRoundRadius(I), new Eg(Q, E, B);
            case l.Cylinder:
                return i = A.coHalfHeight(I), D = A.coRadius(I), new Dg(i, D);
            case l.RoundCylinder:
                return i = A.coHalfHeight(I), D = A.coRadius(I), B = A.coRoundRadius(I), new og(i, D, B);
            case l.Cone:
                return i = A.coHalfHeight(I), D = A.coRadius(I), new Sg(i, D);
            case l.RoundCone:
                return i = A.coHalfHeight(I), D = A.coRadius(I), B = A.coRoundRadius(I), new wg(i, D, B);
            default:
                throw new Error("unknown shape type: " + g);
        }
    }
    castShape(A, I, g, C, B, Q, E, i, D, o) {
        let S = fA.intoRaw(A), w = XA.intoRaw(I), G = fA.intoRaw(g), k = fA.intoRaw(B), K = XA.intoRaw(Q), J = fA.intoRaw(E), U = this.intoRaw(), h = C.intoRaw(), y = VI.fromRaw(null, U.castShape(S, w, G, h, k, K, J, i, D, o));
        return S.free(), w.free(), G.free(), k.free(), K.free(), J.free(), U.free(), h.free(), y;
    }
    intersectsShape(A, I, g, C, B) {
        let Q = fA.intoRaw(A), E = XA.intoRaw(I), i = fA.intoRaw(C), D = XA.intoRaw(B), o = this.intoRaw(), S = g.intoRaw(), w = o.intersectsShape(Q, E, S, i, D);
        return Q.free(), E.free(), i.free(), D.free(), o.free(), S.free(), w;
    }
    contactShape(A, I, g, C, B, Q) {
        let E = fA.intoRaw(A), i = XA.intoRaw(I), D = fA.intoRaw(C), o = XA.intoRaw(B), S = this.intoRaw(), w = g.intoRaw(), G = ZI.fromRaw(S.contactShape(E, i, w, D, o, Q));
        return E.free(), i.free(), D.free(), o.free(), S.free(), w.free(), G;
    }
    containsPoint(A, I, g) {
        let C = fA.intoRaw(A), B = XA.intoRaw(I), Q = fA.intoRaw(g), E = this.intoRaw(), i = E.containsPoint(C, B, Q);
        return C.free(), B.free(), Q.free(), E.free(), i;
    }
    projectPoint(A, I, g, C) {
        let B = fA.intoRaw(A), Q = XA.intoRaw(I), E = fA.intoRaw(g), i = this.intoRaw(), D = bI.fromRaw(i.projectPoint(B, Q, E, C));
        return B.free(), Q.free(), E.free(), i.free(), D;
    }
    intersectsRay(A, I, g, C) {
        let B = fA.intoRaw(I), Q = XA.intoRaw(g), E = fA.intoRaw(A.origin), i = fA.intoRaw(A.dir), D = this.intoRaw(), o = D.intersectsRay(B, Q, E, i, C);
        return B.free(), Q.free(), E.free(), i.free(), D.free(), o;
    }
    castRay(A, I, g, C, B) {
        let Q = fA.intoRaw(I), E = XA.intoRaw(g), i = fA.intoRaw(A.origin), D = fA.intoRaw(A.dir), o = this.intoRaw(), S = o.castRay(Q, E, i, D, C, B);
        return Q.free(), E.free(), i.free(), D.free(), o.free(), S;
    }
    castRayAndGetNormal(A, I, g, C, B) {
        let Q = fA.intoRaw(I), E = XA.intoRaw(g), i = fA.intoRaw(A.origin), D = fA.intoRaw(A.dir), o = this.intoRaw(), S = mI.fromRaw(o.castRayAndGetNormal(Q, E, i, D, C, B));
        return Q.free(), E.free(), i.free(), D.free(), o.free(), S;
    }
}
!function(A) {
    A[A.Ball = 0] = "Ball", A[A.Cuboid = 1] = "Cuboid", A[A.Capsule = 2] = "Capsule", A[A.Segment = 3] = "Segment", A[A.Polyline = 4] = "Polyline", A[A.Triangle = 5] = "Triangle", A[A.TriMesh = 6] = "TriMesh", A[A.HeightField = 7] = "HeightField", A[A.ConvexPolyhedron = 9] = "ConvexPolyhedron", A[A.Cylinder = 10] = "Cylinder", A[A.Cone = 11] = "Cone", A[A.RoundCuboid = 12] = "RoundCuboid", A[A.RoundTriangle = 13] = "RoundTriangle", A[A.RoundCylinder = 14] = "RoundCylinder", A[A.RoundCone = 15] = "RoundCone", A[A.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", A[A.HalfSpace = 17] = "HalfSpace";
}(gI || (gI = {})), function(A) {
    A[A.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
}(CI || (CI = {})), function(A) {
    A[A.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", A[A.ORIENTED = 8] = "ORIENTED", A[A.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", A[A.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", A[A.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", A[A.FIX_INTERNAL_EDGES = 152] = "FIX_INTERNAL_EDGES";
}(BI || (BI = {}));
class uI extends PI {
    constructor(A){
        super(), this.type = gI.Ball, this.radius = A;
    }
    intoRaw() {
        return dA.ball(this.radius);
    }
}
class vI extends PI {
    constructor(A){
        super(), this.type = gI.HalfSpace, this.normal = A;
    }
    intoRaw() {
        let A = fA.intoRaw(this.normal), I = dA.halfspace(A);
        return A.free(), I;
    }
}
class zI extends PI {
    constructor(A, I, g){
        super(), this.type = gI.Cuboid, this.halfExtents = fA.new(A, I, g);
    }
    intoRaw() {
        return dA.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
}
class _I extends PI {
    constructor(A, I, g, C){
        super(), this.type = gI.RoundCuboid, this.halfExtents = fA.new(A, I, g), this.borderRadius = C;
    }
    intoRaw() {
        return dA.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
}
class $I extends PI {
    constructor(A, I){
        super(), this.type = gI.Capsule, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return dA.capsule(this.halfHeight, this.radius);
    }
}
class Ag extends PI {
    constructor(A, I){
        super(), this.type = gI.Segment, this.a = A, this.b = I;
    }
    intoRaw() {
        let A = fA.intoRaw(this.a), I = fA.intoRaw(this.b), g = dA.segment(A, I);
        return A.free(), I.free(), g;
    }
}
class Ig extends PI {
    constructor(A, I, g){
        super(), this.type = gI.Triangle, this.a = A, this.b = I, this.c = g;
    }
    intoRaw() {
        let A = fA.intoRaw(this.a), I = fA.intoRaw(this.b), g = fA.intoRaw(this.c), C = dA.triangle(A, I, g);
        return A.free(), I.free(), g.free(), C;
    }
}
class gg extends PI {
    constructor(A, I, g, C){
        super(), this.type = gI.RoundTriangle, this.a = A, this.b = I, this.c = g, this.borderRadius = C;
    }
    intoRaw() {
        let A = fA.intoRaw(this.a), I = fA.intoRaw(this.b), g = fA.intoRaw(this.c), C = dA.roundTriangle(A, I, g, this.borderRadius);
        return A.free(), I.free(), g.free(), C;
    }
}
class Cg extends PI {
    constructor(A, I){
        super(), this.type = gI.Polyline, this.vertices = A, this.indices = null != I ? I : new Uint32Array(0);
    }
    intoRaw() {
        return dA.polyline(this.vertices, this.indices);
    }
}
class Bg extends PI {
    constructor(A, I, g){
        super(), this.type = gI.TriMesh, this.vertices = A, this.indices = I, this.flags = g;
    }
    intoRaw() {
        return dA.trimesh(this.vertices, this.indices, this.flags);
    }
}
class Qg extends PI {
    constructor(A, I){
        super(), this.type = gI.ConvexPolyhedron, this.vertices = A, this.indices = I;
    }
    intoRaw() {
        return this.indices ? dA.convexMesh(this.vertices, this.indices) : dA.convexHull(this.vertices);
    }
}
class Eg extends PI {
    constructor(A, I, g){
        super(), this.type = gI.RoundConvexPolyhedron, this.vertices = A, this.indices = I, this.borderRadius = g;
    }
    intoRaw() {
        return this.indices ? dA.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : dA.roundConvexHull(this.vertices, this.borderRadius);
    }
}
class ig extends PI {
    constructor(A, I, g, C, B){
        super(), this.type = gI.HeightField, this.nrows = A, this.ncols = I, this.heights = g, this.scale = C, this.flags = B;
    }
    intoRaw() {
        let A = fA.intoRaw(this.scale), I = dA.heightfield(this.nrows, this.ncols, this.heights, A, this.flags);
        return A.free(), I;
    }
}
class Dg extends PI {
    constructor(A, I){
        super(), this.type = gI.Cylinder, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return dA.cylinder(this.halfHeight, this.radius);
    }
}
class og extends PI {
    constructor(A, I, g){
        super(), this.type = gI.RoundCylinder, this.borderRadius = g, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return dA.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
}
class Sg extends PI {
    constructor(A, I){
        super(), this.type = gI.Cone, this.halfHeight = A, this.radius = I;
    }
    intoRaw() {
        return dA.cone(this.halfHeight, this.radius);
    }
}
class wg extends PI {
    constructor(A, I, g){
        super(), this.type = gI.RoundCone, this.halfHeight = A, this.radius = I, this.borderRadius = g;
    }
    intoRaw() {
        return dA.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
}
class Gg {
    constructor(A){
        this.raw = A || new KA;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    step(A, I, g, C, B, Q, E, i, D, o, S, w) {
        let G = fA.intoRaw(A);
        S ? this.raw.stepWithEvents(G, I.raw, g.raw, C.raw, B.raw, Q.raw, E.raw, i.raw, D.raw, o.raw, S.raw, w, w ? w.filterContactPair : null, w ? w.filterIntersectionPair : null) : this.raw.step(G, I.raw, g.raw, C.raw, B.raw, Q.raw, E.raw, i.raw, D.raw, o.raw), G.free();
    }
}
!function(A) {
    A[A.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", A[A.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", A[A.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", A[A.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", A[A.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", A[A.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", A[A.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", A[A.ONLY_FIXED = 6] = "ONLY_FIXED";
}(QI || (QI = {}));
class kg {
    constructor(A){
        this.raw = A || new MA;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    update(A) {
        this.raw.update(A.raw);
    }
    castRay(A, I, g, C, B, Q, E, i, D, o) {
        let S = fA.intoRaw(g.origin), w = fA.intoRaw(g.dir), G = fI.fromRaw(I, this.raw.castRay(A.raw, I.raw, S, w, C, B, Q, E, i, D, o));
        return S.free(), w.free(), G;
    }
    castRayAndGetNormal(A, I, g, C, B, Q, E, i, D, o) {
        let S = fA.intoRaw(g.origin), w = fA.intoRaw(g.dir), G = jI.fromRaw(I, this.raw.castRayAndGetNormal(A.raw, I.raw, S, w, C, B, Q, E, i, D, o));
        return S.free(), w.free(), G;
    }
    intersectionsWithRay(A, I, g, C, B, Q, E, i, D, o, S) {
        let w = fA.intoRaw(g.origin), G = fA.intoRaw(g.dir);
        this.raw.intersectionsWithRay(A.raw, I.raw, w, G, C, B, (A)=>Q(jI.fromRaw(I, A)), E, i, D, o, S), w.free(), G.free();
    }
    intersectionWithShape(A, I, g, C, B, Q, E, i, D, o) {
        let S = fA.intoRaw(g), w = XA.intoRaw(C), G = B.intoRaw(), k = this.raw.intersectionWithShape(A.raw, I.raw, S, w, G, Q, E, i, D, o);
        return S.free(), w.free(), G.free(), k;
    }
    projectPoint(A, I, g, C, B, Q, E, i, D) {
        let o = fA.intoRaw(g), S = WI.fromRaw(I, this.raw.projectPoint(A.raw, I.raw, o, C, B, Q, E, i, D));
        return o.free(), S;
    }
    projectPointAndGetFeature(A, I, g, C, B, Q, E, i) {
        let D = fA.intoRaw(g), o = WI.fromRaw(I, this.raw.projectPointAndGetFeature(A.raw, I.raw, D, C, B, Q, E, i));
        return D.free(), o;
    }
    intersectionsWithPoint(A, I, g, C, B, Q, E, i, D) {
        let o = fA.intoRaw(g);
        this.raw.intersectionsWithPoint(A.raw, I.raw, o, C, B, Q, E, i, D), o.free();
    }
    castShape(A, I, g, C, B, Q, E, i, D, o, S, w, G, k) {
        let K = fA.intoRaw(g), J = XA.intoRaw(C), U = fA.intoRaw(B), h = Q.intoRaw(), y = XI.fromRaw(I, this.raw.castShape(A.raw, I.raw, K, J, U, h, E, i, D, o, S, w, G, k));
        return K.free(), J.free(), U.free(), h.free(), y;
    }
    intersectionsWithShape(A, I, g, C, B, Q, E, i, D, o, S) {
        let w = fA.intoRaw(g), G = XA.intoRaw(C), k = B.intoRaw();
        this.raw.intersectionsWithShape(A.raw, I.raw, w, G, k, Q, E, i, D, o, S), w.free(), G.free(), k.free();
    }
    collidersWithAabbIntersectingAabb(A, I, g) {
        let C = fA.intoRaw(A), B = fA.intoRaw(I);
        this.raw.collidersWithAabbIntersectingAabb(C, B, g), C.free(), B.free();
    }
}
class Kg {
    constructor(A){
        this.raw = A || new rA;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    serializeAll(A, I, g, C, B, Q, E, i, D) {
        let o = fA.intoRaw(A);
        const S = this.raw.serializeAll(o, I.raw, g.raw, C.raw, B.raw, Q.raw, E.raw, i.raw, D.raw);
        return o.free(), S;
    }
    deserializeAll(A) {
        return Mg.fromRaw(this.raw.deserializeAll(A));
    }
}
class Jg {
    constructor(A, I){
        this.vertices = A, this.colors = I;
    }
}
class Ug {
    constructor(A){
        this.raw = A || new V;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    render(A, I, g, C, B) {
        this.raw.render(A.raw, I.raw, g.raw, C.raw, B.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
}
class hg {
}
class yg {
    constructor(A, I, g, C, B){
        this.params = I, this.bodies = g, this.colliders = C, this.queries = B, this.raw = new DA(A), this.rawCharacterCollision = new r, this._applyImpulsesToDynamicBodies = !1, this._characterMass = null;
    }
    free() {
        this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
        return this.raw.up();
    }
    setUp(A) {
        let I = fA.intoRaw(A);
        return this.raw.setUp(I);
    }
    applyImpulsesToDynamicBodies() {
        return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(A) {
        this._applyImpulsesToDynamicBodies = A;
    }
    characterMass() {
        return this._characterMass;
    }
    setCharacterMass(A) {
        this._characterMass = A;
    }
    offset() {
        return this.raw.offset();
    }
    setOffset(A) {
        this.raw.setOffset(A);
    }
    normalNudgeFactor() {
        return this.raw.normalNudgeFactor();
    }
    setNormalNudgeFactor(A) {
        this.raw.setNormalNudgeFactor(A);
    }
    slideEnabled() {
        return this.raw.slideEnabled();
    }
    setSlideEnabled(A) {
        this.raw.setSlideEnabled(A);
    }
    autostepMaxHeight() {
        return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
        return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
        return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
        return this.raw.autostepEnabled();
    }
    enableAutostep(A, I, g) {
        this.raw.enableAutostep(A, I, g);
    }
    disableAutostep() {
        return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
        return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(A) {
        this.raw.setMaxSlopeClimbAngle(A);
    }
    minSlopeSlideAngle() {
        return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(A) {
        this.raw.setMinSlopeSlideAngle(A);
    }
    snapToGroundDistance() {
        return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(A) {
        this.raw.enableSnapToGround(A);
    }
    disableSnapToGround() {
        this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
        return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(A, I, g, C, B) {
        let Q = fA.intoRaw(I);
        this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, A.handle, Q, this._applyImpulsesToDynamicBodies, this._characterMass, g, C, this.colliders.castClosure(B)), Q.free();
    }
    computedMovement() {
        return fA.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
        return this.raw.computedGrounded();
    }
    numComputedCollisions() {
        return this.raw.numComputedCollisions();
    }
    computedCollision(A, I) {
        if (this.raw.computedCollision(A, this.rawCharacterCollision)) {
            let A = this.rawCharacterCollision;
            return (I = null != I ? I : new hg).translationDeltaApplied = fA.fromRaw(A.translationDeltaApplied()), I.translationDeltaRemaining = fA.fromRaw(A.translationDeltaRemaining()), I.toi = A.toi(), I.witness1 = fA.fromRaw(A.worldWitness1()), I.witness2 = fA.fromRaw(A.worldWitness2()), I.normal1 = fA.fromRaw(A.worldNormal1()), I.normal2 = fA.fromRaw(A.worldNormal2()), I.collider = this.colliders.get(A.handle()), I;
        }
        return null;
    }
}
class Ng {
    constructor(A, I, g, C){
        this.raw = new v(A.handle), this.bodies = I, this.colliders = g, this.queries = C, this._chassis = A;
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    updateVehicle(A, I, g, C) {
        this.raw.update_vehicle(A, this.bodies.raw, this.colliders.raw, this.queries.raw, I, g, this.colliders.castClosure(C));
    }
    currentVehicleSpeed() {
        return this.raw.current_vehicle_speed();
    }
    chassis() {
        return this._chassis;
    }
    get indexUpAxis() {
        return this.raw.index_up_axis();
    }
    set indexUpAxis(A) {
        this.raw.set_index_up_axis(A);
    }
    get indexForwardAxis() {
        return this.raw.index_forward_axis();
    }
    set setIndexForwardAxis(A) {
        this.raw.set_index_forward_axis(A);
    }
    addWheel(A, I, g, C, B) {
        let Q = fA.intoRaw(A), E = fA.intoRaw(I), i = fA.intoRaw(g);
        this.raw.add_wheel(Q, E, i, C, B), Q.free(), E.free(), i.free();
    }
    numWheels() {
        return this.raw.num_wheels();
    }
    wheelChassisConnectionPointCs(A) {
        return fA.fromRaw(this.raw.wheel_chassis_connection_point_cs(A));
    }
    setWheelChassisConnectionPointCs(A, I) {
        let g = fA.intoRaw(I);
        this.raw.set_wheel_chassis_connection_point_cs(A, g), g.free();
    }
    wheelSuspensionRestLength(A) {
        return this.raw.wheel_suspension_rest_length(A);
    }
    setWheelSuspensionRestLength(A, I) {
        this.raw.set_wheel_suspension_rest_length(A, I);
    }
    wheelMaxSuspensionTravel(A) {
        return this.raw.wheel_max_suspension_travel(A);
    }
    setWheelMaxSuspensionTravel(A, I) {
        this.raw.set_wheel_max_suspension_travel(A, I);
    }
    wheelRadius(A) {
        return this.raw.wheel_radius(A);
    }
    setWheelRadius(A, I) {
        this.raw.set_wheel_radius(A, I);
    }
    wheelSuspensionStiffness(A) {
        return this.raw.wheel_suspension_stiffness(A);
    }
    setWheelSuspensionStiffness(A, I) {
        this.raw.set_wheel_suspension_stiffness(A, I);
    }
    wheelSuspensionCompression(A) {
        return this.raw.wheel_suspension_compression(A);
    }
    setWheelSuspensionCompression(A, I) {
        this.raw.set_wheel_suspension_compression(A, I);
    }
    wheelSuspensionRelaxation(A) {
        return this.raw.wheel_suspension_relaxation(A);
    }
    setWheelSuspensionRelaxation(A, I) {
        this.raw.set_wheel_suspension_relaxation(A, I);
    }
    wheelMaxSuspensionForce(A) {
        return this.raw.wheel_max_suspension_force(A);
    }
    setWheelMaxSuspensionForce(A, I) {
        this.raw.set_wheel_max_suspension_force(A, I);
    }
    wheelBrake(A) {
        return this.raw.wheel_brake(A);
    }
    setWheelBrake(A, I) {
        this.raw.set_wheel_brake(A, I);
    }
    wheelSteering(A) {
        return this.raw.wheel_steering(A);
    }
    setWheelSteering(A, I) {
        this.raw.set_wheel_steering(A, I);
    }
    wheelEngineForce(A) {
        return this.raw.wheel_engine_force(A);
    }
    setWheelEngineForce(A, I) {
        this.raw.set_wheel_engine_force(A, I);
    }
    wheelDirectionCs(A) {
        return fA.fromRaw(this.raw.wheel_direction_cs(A));
    }
    setWheelDirectionCs(A, I) {
        let g = fA.intoRaw(I);
        this.raw.set_wheel_direction_cs(A, g), g.free();
    }
    wheelAxleCs(A) {
        return fA.fromRaw(this.raw.wheel_axle_cs(A));
    }
    setWheelAxleCs(A, I) {
        let g = fA.intoRaw(I);
        this.raw.set_wheel_axle_cs(A, g), g.free();
    }
    wheelFrictionSlip(A) {
        return this.raw.wheel_friction_slip(A);
    }
    setWheelFrictionSlip(A, I) {
        this.raw.set_wheel_friction_slip(A, I);
    }
    wheelSideFrictionStiffness(A) {
        return this.raw.wheel_side_friction_stiffness(A);
    }
    setWheelSideFrictionStiffness(A, I) {
        this.raw.set_wheel_side_friction_stiffness(A, I);
    }
    wheelRotation(A) {
        return this.raw.wheel_rotation(A);
    }
    wheelForwardImpulse(A) {
        return this.raw.wheel_forward_impulse(A);
    }
    wheelSideImpulse(A) {
        return this.raw.wheel_side_impulse(A);
    }
    wheelSuspensionForce(A) {
        return this.raw.wheel_suspension_force(A);
    }
    wheelContactNormal(A) {
        return fA.fromRaw(this.raw.wheel_contact_normal_ws(A));
    }
    wheelContactPoint(A) {
        return fA.fromRaw(this.raw.wheel_contact_point_ws(A));
    }
    wheelSuspensionLength(A) {
        return this.raw.wheel_suspension_length(A);
    }
    wheelHardPoint(A) {
        return fA.fromRaw(this.raw.wheel_hard_point_ws(A));
    }
    wheelIsInContact(A) {
        return this.raw.wheel_is_in_contact(A);
    }
    wheelGroundObject(A) {
        return this.colliders.get(this.raw.wheel_ground_object(A));
    }
}
class Mg {
    constructor(A, I, g, C, B, Q, E, i, D, o, S, w, G, k){
        this.gravity = A, this.integrationParameters = new JI(I), this.islands = new nI(g), this.broadPhase = new dI(C), this.narrowPhase = new TI(B), this.bodies = new KI(Q), this.colliders = new cg(E), this.impulseJoints = new qI(i), this.multibodyJoints = new eI(D), this.ccdSolver = new rI(o), this.queryPipeline = new kg(S), this.physicsPipeline = new Gg(w), this.serializationPipeline = new Kg(G), this.debugRenderPipeline = new Ug(k), this.characterControllers = new Set, this.vehicleControllers = new Set, this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    free() {
        this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((A)=>A.free()), this.vehicleControllers.forEach((A)=>A.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.vehicleControllers = void 0;
    }
    static fromRaw(A) {
        return A ? new Mg(fA.fromRaw(A.takeGravity()), A.takeIntegrationParameters(), A.takeIslandManager(), A.takeBroadPhase(), A.takeNarrowPhase(), A.takeBodies(), A.takeColliders(), A.takeImpulseJoints(), A.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
        return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(A) {
        return (new Kg).deserializeAll(A);
    }
    debugRender() {
        return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new Jg(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(A, I) {
        this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, A, I), this.queryPipeline.update(this.colliders);
    }
    propagateModifiedBodyPositionsToColliders() {
        this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    updateSceneQueries() {
        this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.colliders);
    }
    get timestep() {
        return this.integrationParameters.dt;
    }
    set timestep(A) {
        this.integrationParameters.dt = A;
    }
    get lengthUnit() {
        return this.integrationParameters.lengthUnit;
    }
    set lengthUnit(A) {
        this.integrationParameters.lengthUnit = A;
    }
    get numSolverIterations() {
        return this.integrationParameters.numSolverIterations;
    }
    set numSolverIterations(A) {
        this.integrationParameters.numSolverIterations = A;
    }
    get numAdditionalFrictionIterations() {
        return this.integrationParameters.numAdditionalFrictionIterations;
    }
    set numAdditionalFrictionIterations(A) {
        this.integrationParameters.numAdditionalFrictionIterations = A;
    }
    get numInternalPgsIterations() {
        return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(A) {
        this.integrationParameters.numInternalPgsIterations = A;
    }
    switchToStandardPgsSolver() {
        this.integrationParameters.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
        this.integrationParameters.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
        this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
    createRigidBody(A) {
        return this.bodies.createRigidBody(this.colliders, A);
    }
    createCharacterController(A) {
        let I = new yg(A, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
        return this.characterControllers.add(I), I;
    }
    removeCharacterController(A) {
        this.characterControllers.delete(A), A.free();
    }
    createVehicleController(A) {
        let I = new Ng(A, this.bodies, this.colliders, this.queryPipeline);
        return this.vehicleControllers.add(I), I;
    }
    removeVehicleController(A) {
        this.vehicleControllers.delete(A), A.free();
    }
    createCollider(A, I) {
        let g = I ? I.handle : void 0;
        return this.colliders.createCollider(this.bodies, A, g);
    }
    createImpulseJoint(A, I, g, C) {
        return this.impulseJoints.createJoint(this.bodies, A, I.handle, g.handle, C);
    }
    createMultibodyJoint(A, I, g, C) {
        return this.multibodyJoints.createJoint(A, I.handle, g.handle, C);
    }
    getRigidBody(A) {
        return this.bodies.get(A);
    }
    getCollider(A) {
        return this.colliders.get(A);
    }
    getImpulseJoint(A) {
        return this.impulseJoints.get(A);
    }
    getMultibodyJoint(A) {
        return this.multibodyJoints.get(A);
    }
    removeRigidBody(A) {
        this.bodies && this.bodies.remove(A.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(A, I) {
        this.colliders && this.colliders.remove(A.handle, this.islands, this.bodies, I);
    }
    removeImpulseJoint(A, I) {
        this.impulseJoints && this.impulseJoints.remove(A.handle, I);
    }
    removeMultibodyJoint(A, I) {
        this.impulseJoints && this.multibodyJoints.remove(A.handle, I);
    }
    forEachCollider(A) {
        this.colliders.forEach(A);
    }
    forEachRigidBody(A) {
        this.bodies.forEach(A);
    }
    forEachActiveRigidBody(A) {
        this.bodies.forEachActiveRigidBody(this.islands, A);
    }
    castRay(A, I, g, C, B, Q, E, i) {
        return this.queryPipeline.castRay(this.bodies, this.colliders, A, I, g, C, B, Q ? Q.handle : null, E ? E.handle : null, this.colliders.castClosure(i));
    }
    castRayAndGetNormal(A, I, g, C, B, Q, E, i) {
        return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, A, I, g, C, B, Q ? Q.handle : null, E ? E.handle : null, this.colliders.castClosure(i));
    }
    intersectionsWithRay(A, I, g, C, B, Q, E, i, D) {
        this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, A, I, g, C, B, Q, E ? E.handle : null, i ? i.handle : null, this.colliders.castClosure(D));
    }
    intersectionWithShape(A, I, g, C, B, Q, E, i) {
        let D = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, A, I, g, C, B, Q ? Q.handle : null, E ? E.handle : null, this.colliders.castClosure(i));
        return null != D ? this.colliders.get(D) : null;
    }
    projectPoint(A, I, g, C, B, Q, E) {
        return this.queryPipeline.projectPoint(this.bodies, this.colliders, A, I, g, C, B ? B.handle : null, Q ? Q.handle : null, this.colliders.castClosure(E));
    }
    projectPointAndGetFeature(A, I, g, C, B, Q) {
        return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, A, I, g, C ? C.handle : null, B ? B.handle : null, this.colliders.castClosure(Q));
    }
    intersectionsWithPoint(A, I, g, C, B, Q, E) {
        this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, A, this.colliders.castClosure(I), g, C, B ? B.handle : null, Q ? Q.handle : null, this.colliders.castClosure(E));
    }
    castShape(A, I, g, C, B, Q, E, i, D, o, S, w) {
        return this.queryPipeline.castShape(this.bodies, this.colliders, A, I, g, C, B, Q, E, i, D, o ? o.handle : null, S ? S.handle : null, this.colliders.castClosure(w));
    }
    intersectionsWithShape(A, I, g, C, B, Q, E, i, D) {
        this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, A, I, g, this.colliders.castClosure(C), B, Q, E ? E.handle : null, i ? i.handle : null, this.colliders.castClosure(D));
    }
    collidersWithAabbIntersectingAabb(A, I, g) {
        this.queryPipeline.collidersWithAabbIntersectingAabb(A, I, this.colliders.castClosure(g));
    }
    contactPairsWith(A, I) {
        this.narrowPhase.contactPairsWith(A.handle, this.colliders.castClosure(I));
    }
    intersectionPairsWith(A, I) {
        this.narrowPhase.intersectionPairsWith(A.handle, this.colliders.castClosure(I));
    }
    contactPair(A, I, g) {
        this.narrowPhase.contactPair(A.handle, I.handle, g);
    }
    intersectionPair(A, I) {
        return this.narrowPhase.intersectionPair(A.handle, I.handle);
    }
}
!function(A) {
    A[A.NONE = 0] = "NONE", A[A.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", A[A.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
}(EI || (EI = {}));
class Fg {
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
        return this.raw.collider1();
    }
    collider2() {
        return this.raw.collider2();
    }
    totalForce() {
        return fA.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
        return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
        return fA.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
        return this.raw.max_force_magnitude();
    }
}
class ag {
    constructor(A, I){
        this.raw = I || new _(A);
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(A) {
        this.raw.drainCollisionEvents(A);
    }
    drainContactForceEvents(A) {
        let I = new Fg;
        this.raw.drainContactForceEvents((g)=>{
            I.raw = g, A(I), I.free();
        });
    }
    clear() {
        this.raw.clear();
    }
}
!function(A) {
    A[A.NONE = 0] = "NONE", A[A.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", A[A.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
}(iI || (iI = {})), function(A) {
    A[A.EMPTY = 0] = "EMPTY", A[A.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
}(DI || (DI = {})), function(A) {
    A[A.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", A[A.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", A[A.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", A[A.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", A[A.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", A[A.FIXED_FIXED = 32] = "FIXED_FIXED", A[A.DEFAULT = 15] = "DEFAULT", A[A.ALL = 60943] = "ALL";
}(oI || (oI = {}));
class sg {
    constructor(A, I, g, C){
        this.colliderSet = A, this.handle = I, this._parent = g, this._shape = C;
    }
    finalizeDeserialization(A) {
        null != this.handle && (this._parent = A.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
        this._shape || (this._shape = PI.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
        return this.ensureShapeIsCached(), this._shape;
    }
    isValid() {
        return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
        return fA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    rotation() {
        return XA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    isSensor() {
        return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(A) {
        this.colliderSet.raw.coSetSensor(this.handle, A);
    }
    setShape(A) {
        let I = A.intoRaw();
        this.colliderSet.raw.coSetShape(this.handle, I), I.free(), this._shape = A;
    }
    setEnabled(A) {
        this.colliderSet.raw.coSetEnabled(this.handle, A);
    }
    isEnabled() {
        return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(A) {
        this.colliderSet.raw.coSetRestitution(this.handle, A);
    }
    setFriction(A) {
        this.colliderSet.raw.coSetFriction(this.handle, A);
    }
    frictionCombineRule() {
        return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(A) {
        this.colliderSet.raw.coSetFrictionCombineRule(this.handle, A);
    }
    restitutionCombineRule() {
        return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(A) {
        this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, A);
    }
    setCollisionGroups(A) {
        this.colliderSet.raw.coSetCollisionGroups(this.handle, A);
    }
    setSolverGroups(A) {
        this.colliderSet.raw.coSetSolverGroups(this.handle, A);
    }
    contactSkin() {
        return this.colliderSet.raw.coContactSkin(this.handle);
    }
    setContactSkin(A) {
        return this.colliderSet.raw.coSetContactSkin(this.handle, A);
    }
    activeHooks() {
        return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(A) {
        this.colliderSet.raw.coSetActiveHooks(this.handle, A);
    }
    activeEvents() {
        return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(A) {
        this.colliderSet.raw.coSetActiveEvents(this.handle, A);
    }
    activeCollisionTypes() {
        return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(A) {
        return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, A);
    }
    contactForceEventThreshold() {
        return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(A) {
        this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, A);
    }
    setDensity(A) {
        this.colliderSet.raw.coSetDensity(this.handle, A);
    }
    setMass(A) {
        this.colliderSet.raw.coSetMass(this.handle, A);
    }
    setMassProperties(A, I, g, C) {
        let B = fA.intoRaw(I), Q = fA.intoRaw(g), E = XA.intoRaw(C);
        this.colliderSet.raw.coSetMassProperties(this.handle, A, B, Q, E), B.free(), Q.free(), E.free();
    }
    setTranslation(A) {
        this.colliderSet.raw.coSetTranslation(this.handle, A.x, A.y, A.z);
    }
    setTranslationWrtParent(A) {
        this.colliderSet.raw.coSetTranslationWrtParent(this.handle, A.x, A.y, A.z);
    }
    setRotation(A) {
        this.colliderSet.raw.coSetRotation(this.handle, A.x, A.y, A.z, A.w);
    }
    setRotationWrtParent(A) {
        this.colliderSet.raw.coSetRotationWrtParent(this.handle, A.x, A.y, A.z, A.w);
    }
    shapeType() {
        return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
        return fA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(A) {
        const I = fA.intoRaw(A);
        this.colliderSet.raw.coSetHalfExtents(this.handle, I);
    }
    radius() {
        return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(A) {
        this.colliderSet.raw.coSetRadius(this.handle, A);
    }
    roundRadius() {
        return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(A) {
        this.colliderSet.raw.coSetRoundRadius(this.handle, A);
    }
    halfHeight() {
        return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(A) {
        this.colliderSet.raw.coSetHalfHeight(this.handle, A);
    }
    vertices() {
        return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
        return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
        return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
        let A = this.colliderSet.raw.coHeightfieldScale(this.handle);
        return fA.fromRaw(A);
    }
    heightfieldNRows() {
        return this.colliderSet.raw.coHeightfieldNRows(this.handle);
    }
    heightfieldNCols() {
        return this.colliderSet.raw.coHeightfieldNCols(this.handle);
    }
    parent() {
        return this._parent;
    }
    friction() {
        return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
        return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
        return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
        return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
        return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
        return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
        return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(A) {
        let I = fA.intoRaw(A), g = this.colliderSet.raw.coContainsPoint(this.handle, I);
        return I.free(), g;
    }
    projectPoint(A, I) {
        let g = fA.intoRaw(A), C = bI.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, g, I));
        return g.free(), C;
    }
    intersectsRay(A, I) {
        let g = fA.intoRaw(A.origin), C = fA.intoRaw(A.dir), B = this.colliderSet.raw.coIntersectsRay(this.handle, g, C, I);
        return g.free(), C.free(), B;
    }
    castShape(A, I, g, C, B, Q, E, i) {
        let D = fA.intoRaw(A), o = fA.intoRaw(g), S = XA.intoRaw(C), w = fA.intoRaw(B), G = I.intoRaw(), k = VI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, D, G, o, S, w, Q, E, i));
        return D.free(), o.free(), S.free(), w.free(), G.free(), k;
    }
    castCollider(A, I, g, C, B, Q) {
        let E = fA.intoRaw(A), i = fA.intoRaw(g), D = XI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, E, I.handle, i, C, B, Q));
        return E.free(), i.free(), D;
    }
    intersectsShape(A, I, g) {
        let C = fA.intoRaw(I), B = XA.intoRaw(g), Q = A.intoRaw(), E = this.colliderSet.raw.coIntersectsShape(this.handle, Q, C, B);
        return C.free(), B.free(), Q.free(), E;
    }
    contactShape(A, I, g, C) {
        let B = fA.intoRaw(I), Q = XA.intoRaw(g), E = A.intoRaw(), i = ZI.fromRaw(this.colliderSet.raw.coContactShape(this.handle, E, B, Q, C));
        return B.free(), Q.free(), E.free(), i;
    }
    contactCollider(A, I) {
        return ZI.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, A.handle, I));
    }
    castRay(A, I, g) {
        let C = fA.intoRaw(A.origin), B = fA.intoRaw(A.dir), Q = this.colliderSet.raw.coCastRay(this.handle, C, B, I, g);
        return C.free(), B.free(), Q;
    }
    castRayAndGetNormal(A, I, g) {
        let C = fA.intoRaw(A.origin), B = fA.intoRaw(A.dir), Q = mI.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, C, B, I, g));
        return C.free(), B.free(), Q;
    }
}
!function(A) {
    A[A.Density = 0] = "Density", A[A.Mass = 1] = "Mass", A[A.MassProps = 2] = "MassProps";
}(SI || (SI = {}));
class Rg {
    constructor(A){
        this.enabled = !0, this.shape = A, this.massPropsMode = SI.Density, this.density = 1, this.friction = .5, this.restitution = 0, this.rotation = XA.identity(), this.translation = fA.zeros(), this.isSensor = !1, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = AI.Average, this.restitutionCombineRule = AI.Average, this.activeCollisionTypes = oI.DEFAULT, this.activeEvents = EI.NONE, this.activeHooks = iI.NONE, this.mass = 0, this.centerOfMass = fA.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = fA.zeros(), this.angularInertiaLocalFrame = XA.identity();
    }
    static ball(A) {
        const I = new uI(A);
        return new Rg(I);
    }
    static capsule(A, I) {
        const g = new $I(A, I);
        return new Rg(g);
    }
    static segment(A, I) {
        const g = new Ag(A, I);
        return new Rg(g);
    }
    static triangle(A, I, g) {
        const C = new Ig(A, I, g);
        return new Rg(C);
    }
    static roundTriangle(A, I, g, C) {
        const B = new gg(A, I, g, C);
        return new Rg(B);
    }
    static polyline(A, I) {
        const g = new Cg(A, I);
        return new Rg(g);
    }
    static trimesh(A, I, g) {
        const C = new Bg(A, I, g);
        return new Rg(C);
    }
    static cuboid(A, I, g) {
        const C = new zI(A, I, g);
        return new Rg(C);
    }
    static roundCuboid(A, I, g, C) {
        const B = new _I(A, I, g, C);
        return new Rg(B);
    }
    static heightfield(A, I, g, C, B) {
        const Q = new ig(A, I, g, C, B);
        return new Rg(Q);
    }
    static cylinder(A, I) {
        const g = new Dg(A, I);
        return new Rg(g);
    }
    static roundCylinder(A, I, g) {
        const C = new og(A, I, g);
        return new Rg(C);
    }
    static cone(A, I) {
        const g = new Sg(A, I);
        return new Rg(g);
    }
    static roundCone(A, I, g) {
        const C = new wg(A, I, g);
        return new Rg(C);
    }
    static convexHull(A) {
        const I = new Qg(A, null);
        return new Rg(I);
    }
    static convexMesh(A, I) {
        const g = new Qg(A, I);
        return new Rg(g);
    }
    static roundConvexHull(A, I) {
        const g = new Eg(A, null, I);
        return new Rg(g);
    }
    static roundConvexMesh(A, I, g) {
        const C = new Eg(A, I, g);
        return new Rg(C);
    }
    setTranslation(A, I, g) {
        if ("number" != typeof A || "number" != typeof I || "number" != typeof g) throw TypeError("The translation components must be numbers.");
        return this.translation = {
            x: A,
            y: I,
            z: g
        }, this;
    }
    setRotation(A) {
        return XA.copy(this.rotation, A), this;
    }
    setSensor(A) {
        return this.isSensor = A, this;
    }
    setEnabled(A) {
        return this.enabled = A, this;
    }
    setContactSkin(A) {
        return this.contactSkin = A, this;
    }
    setDensity(A) {
        return this.massPropsMode = SI.Density, this.density = A, this;
    }
    setMass(A) {
        return this.massPropsMode = SI.Mass, this.mass = A, this;
    }
    setMassProperties(A, I, g, C) {
        return this.massPropsMode = SI.MassProps, this.mass = A, fA.copy(this.centerOfMass, I), fA.copy(this.principalAngularInertia, g), XA.copy(this.angularInertiaLocalFrame, C), this;
    }
    setRestitution(A) {
        return this.restitution = A, this;
    }
    setFriction(A) {
        return this.friction = A, this;
    }
    setFrictionCombineRule(A) {
        return this.frictionCombineRule = A, this;
    }
    setRestitutionCombineRule(A) {
        return this.restitutionCombineRule = A, this;
    }
    setCollisionGroups(A) {
        return this.collisionGroups = A, this;
    }
    setSolverGroups(A) {
        return this.solverGroups = A, this;
    }
    setActiveHooks(A) {
        return this.activeHooks = A, this;
    }
    setActiveEvents(A) {
        return this.activeEvents = A, this;
    }
    setActiveCollisionTypes(A) {
        return this.activeCollisionTypes = A, this;
    }
    setContactForceEventThreshold(A) {
        return this.contactForceEventThreshold = A, this;
    }
}
class cg {
    constructor(A){
        this.raw = A || new d, this.map = new kI, A && A.forEachColliderHandle((A)=>{
            this.map.set(A, new sg(this, A, null));
        });
    }
    free() {
        this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    castClosure(A) {
        return (I)=>A ? A(this.get(I)) : void 0;
    }
    finalizeDeserialization(A) {
        this.map.forEach((I)=>I.finalizeDeserialization(A));
    }
    createCollider(A, I, g) {
        let C = null != g && null != g;
        if (C && isNaN(g)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
        let B = I.shape.intoRaw(), Q = fA.intoRaw(I.translation), E = XA.intoRaw(I.rotation), i = fA.intoRaw(I.centerOfMass), D = fA.intoRaw(I.principalAngularInertia), o = XA.intoRaw(I.angularInertiaLocalFrame), S = this.raw.createCollider(I.enabled, B, Q, E, I.massPropsMode, I.mass, i, D, o, I.density, I.friction, I.restitution, I.frictionCombineRule, I.restitutionCombineRule, I.isSensor, I.collisionGroups, I.solverGroups, I.activeCollisionTypes, I.activeHooks, I.activeEvents, I.contactForceEventThreshold, I.contactSkin, C, C ? g : 0, A.raw);
        B.free(), Q.free(), E.free(), i.free(), D.free(), o.free();
        let w = C ? A.get(g) : null, G = new sg(this, S, w, I.shape);
        return this.map.set(S, G), G;
    }
    remove(A, I, g, C) {
        this.raw.remove(A, I.raw, g.raw, C), this.unmap(A);
    }
    unmap(A) {
        this.map.delete(A);
    }
    get(A) {
        return this.map.get(A);
    }
    len() {
        return this.map.len();
    }
    contains(A) {
        return null != this.get(A);
    }
    forEach(A) {
        this.map.forEach(A);
    }
    getAll() {
        return this.map.getAll();
    }
}
function qg(A, I, g, C) {
    return new (g || (g = Promise))(function(B, Q) {
        function E(A) {
            try {
                D(C.next(A));
            } catch (A) {
                Q(A);
            }
        }
        function i(A) {
            try {
                D(C.throw(A));
            } catch (A) {
                Q(A);
            }
        }
        function D(A) {
            var I;
            A.done ? B(A.value) : (I = A.value, I instanceof g ? I : new g(function(A) {
                A(I);
            })).then(E, i);
        }
        D((C = C.apply(A, I || [])).next());
    });
}
for(var Yg = {
    byteLength: function(A) {
        var I = rg(A), g = I[0], C = I[1];
        return 3 * (g + C) / 4 - C;
    },
    toByteArray: function(A) {
        var I, g, C = rg(A), B = C[0], Q = C[1], E = new Hg(function(A, I, g) {
            return 3 * (I + g) / 4 - g;
        }(0, B, Q)), i = 0, D = Q > 0 ? B - 4 : B;
        for(g = 0; g < D; g += 4)I = Lg[A.charCodeAt(g)] << 18 | Lg[A.charCodeAt(g + 1)] << 12 | Lg[A.charCodeAt(g + 2)] << 6 | Lg[A.charCodeAt(g + 3)], E[i++] = I >> 16 & 255, E[i++] = I >> 8 & 255, E[i++] = 255 & I;
        2 === Q && (I = Lg[A.charCodeAt(g)] << 2 | Lg[A.charCodeAt(g + 1)] >> 4, E[i++] = 255 & I);
        1 === Q && (I = Lg[A.charCodeAt(g)] << 10 | Lg[A.charCodeAt(g + 1)] << 4 | Lg[A.charCodeAt(g + 2)] >> 2, E[i++] = I >> 8 & 255, E[i++] = 255 & I);
        return E;
    },
    fromByteArray: function(A) {
        for(var I, g = A.length, C = g % 3, B = [], Q = 16383, E = 0, i = g - C; E < i; E += Q)B.push(ng(A, E, E + Q > i ? i : E + Q));
        1 === C ? (I = A[g - 1], B.push(lg[I >> 2] + lg[I << 4 & 63] + "==")) : 2 === C && (I = (A[g - 2] << 8) + A[g - 1], B.push(lg[I >> 10] + lg[I >> 4 & 63] + lg[I << 2 & 63] + "="));
        return B.join("");
    }
}, lg = [], Lg = [], Hg = "undefined" != typeof Uint8Array ? Uint8Array : Array, tg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pg = 0, eg = tg.length; pg < eg; ++pg)lg[pg] = tg[pg], Lg[tg.charCodeAt(pg)] = pg;
function rg(A) {
    var I = A.length;
    if (I % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var g = A.indexOf("=");
    return -1 === g && (g = I), [
        g,
        g === I ? 0 : 4 - g % 4
    ];
}
function ng(A, I, g) {
    for(var C, B, Q = [], E = I; E < g; E += 3)C = (A[E] << 16 & 16711680) + (A[E + 1] << 8 & 65280) + (255 & A[E + 2]), Q.push(lg[(B = C) >> 18 & 63] + lg[B >> 12 & 63] + lg[B >> 6 & 63] + lg[63 & B]);
    return Q.join("");
}
function dg() {
    return qg(this, void 0, void 0, function*() {
    });
}
function Tg() {
    return function() {
        let I, g;
        try {
            const Q = A.__wbindgen_add_to_stack_pointer(-16);
            A.version(Q);
            var C = S()[Q / 4 + 0], B = S()[Q / 4 + 1];
            return I = C, g = B, k(C, B);
        } finally{
            A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_free(I, g, 1);
        }
    }();
}
Lg["-".charCodeAt(0)] = 62, Lg["_".charCodeAt(0)] = 63;
var Og = Object.freeze({
    __proto__: null,
    version: Tg,
    Vector3: jA,
    VectorOps: fA,
    Quaternion: VA,
    RotationOps: XA,
    SdpMatrix3: PA,
    SdpMatrix3Ops: uA,
    get RigidBodyType () {
        return vA;
    },
    RigidBody: wI,
    RigidBodyDesc: GI,
    RigidBodySet: KI,
    IntegrationParameters: JI,
    get JointType () {
        return zA;
    },
    get MotorModel () {
        return _A;
    },
    get JointAxesMask () {
        return $A;
    },
    ImpulseJoint: UI,
    UnitImpulseJoint: hI,
    FixedImpulseJoint: yI,
    RopeImpulseJoint: NI,
    SpringImpulseJoint: MI,
    PrismaticImpulseJoint: FI,
    RevoluteImpulseJoint: aI,
    GenericImpulseJoint: sI,
    SphericalImpulseJoint: RI,
    JointData: cI,
    ImpulseJointSet: qI,
    MultibodyJoint: YI,
    UnitMultibodyJoint: lI,
    FixedMultibodyJoint: LI,
    PrismaticMultibodyJoint: HI,
    RevoluteMultibodyJoint: tI,
    SphericalMultibodyJoint: pI,
    MultibodyJointSet: eI,
    get CoefficientCombineRule () {
        return AI;
    },
    CCDSolver: rI,
    IslandManager: nI,
    BroadPhase: dI,
    NarrowPhase: TI,
    TempContactManifold: OI,
    Shape: PI,
    get ShapeType () {
        return gI;
    },
    get HeightFieldFlags () {
        return CI;
    },
    get TriMeshFlags () {
        return BI;
    },
    Ball: uI,
    HalfSpace: vI,
    Cuboid: zI,
    RoundCuboid: _I,
    Capsule: $I,
    Segment: Ag,
    Triangle: Ig,
    RoundTriangle: gg,
    Polyline: Cg,
    TriMesh: Bg,
    ConvexPolyhedron: Qg,
    RoundConvexPolyhedron: Eg,
    Heightfield: ig,
    Cylinder: Dg,
    RoundCylinder: og,
    Cone: Sg,
    RoundCone: wg,
    get ActiveCollisionTypes () {
        return oI;
    },
    Collider: sg,
    get MassPropsMode () {
        return SI;
    },
    ColliderDesc: Rg,
    ColliderSet: cg,
    get FeatureType () {
        return II;
    },
    Ray: xI,
    RayIntersection: mI,
    RayColliderIntersection: jI,
    RayColliderHit: fI,
    PointProjection: bI,
    PointColliderProjection: WI,
    ShapeCastHit: VI,
    ColliderShapeCastHit: XI,
    ShapeContact: ZI,
    World: Mg,
    PhysicsPipeline: Gg,
    SerializationPipeline: Kg,
    get ActiveEvents () {
        return EI;
    },
    TempContactForceEvent: Fg,
    EventQueue: ag,
    get ActiveHooks () {
        return iI;
    },
    get SolverFlags () {
        return DI;
    },
    DebugRenderBuffers: Jg,
    DebugRenderPipeline: Ug,
    get QueryFilterFlags () {
        return QI;
    },
    QueryPipeline: kg,
    init: dg,
    CharacterCollision: hg,
    KinematicCharacterController: yg,
    DynamicRayCastVehicleController: Ng
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFF9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Entity", ()=>Entity);
parcelHelpers.export(exports, "RenderableEntity", ()=>RenderableEntity);
var _three = require("three");
let _id = -1;
class Entity {
    constructor(scene, entityType){
        this.id = ++_id;
        this.scene = scene;
        this.entityType = entityType;
    }
    addToScene(scene) {
        if (!this.geometry) throw "No geometry exists to add to the scene in 'addToScene()'!!";
        if (!this.geometry && !scene) throw "No scene supplied to add to the scene in 'addToScene()'!!";
        this.scene.add(this.geometry || scene);
        return this;
    }
    removeFromScene() {
        if (!this.geometry) throw "No geometry exist to remove to the scene in 'removeFromScene()'!!";
        this.scene.remove(this.geometry);
    }
    update(delta) {
        throw `update() method not defined for ${this.id}`;
    }
}
class RenderableEntity extends Entity {
    constructor(scene, world, geometry, entityType, rigidBody){
        super(scene, entityType);
        this.geometry = geometry;
        this.world = world;
        this.rigidBody = rigidBody;
    }
    update() {
        let temp = this.rigidBody.translation();
        this.geometry.position.set(temp.x, temp.y, temp.z);
        temp = this.rigidBody.rotation();
        this.geometry.quaternion.copy(new (0, _three.Quaternion)(temp.x, temp.y, temp.z));
        return this;
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7mqRv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OrbitControls", ()=>OrbitControls);
var _three = require("three");
// OrbitControls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move
const _changeEvent = {
    type: "change"
};
const _startEvent = {
    type: "start"
};
const _endEvent = {
    type: "end"
};
const _ray = new (0, _three.Ray)();
const _plane = new (0, _three.Plane)();
const TILT_LIMIT = Math.cos(70 * (0, _three.MathUtils).DEG2RAD);
class OrbitControls extends (0, _three.EventDispatcher) {
    constructor(object, domElement){
        super();
        this.object = object;
        this.domElement = domElement;
        this.domElement.style.touchAction = "none"; // disable touch scroll
        // Set to false to disable this control
        this.enabled = true;
        // "target" sets the location of focus, where the object orbits around
        this.target = new (0, _three.Vector3)();
        // Sets the 3D cursor (similar to Blender), from which the maxTargetRadius takes effect
        this.cursor = new (0, _three.Vector3)();
        // How far you can dolly in and out ( PerspectiveCamera only )
        this.minDistance = 0;
        this.maxDistance = Infinity;
        // How far you can zoom in and out ( OrthographicCamera only )
        this.minZoom = 0;
        this.maxZoom = Infinity;
        // Limit camera target within a spherical area around the cursor
        this.minTargetRadius = 0;
        this.maxTargetRadius = Infinity;
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians
        // How far you can orbit horizontally, upper and lower limits.
        // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
        this.minAzimuthAngle = -Infinity; // radians
        this.maxAzimuthAngle = Infinity; // radians
        // Set to true to enable damping (inertia)
        // If damping is enabled, you must call controls.update() in your animation loop
        this.enableDamping = false;
        this.dampingFactor = 0.05;
        // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
        // Set to false to disable zooming
        this.enableZoom = true;
        this.zoomSpeed = 1.0;
        // Set to false to disable rotating
        this.enableRotate = true;
        this.rotateSpeed = 1.0;
        // Set to false to disable panning
        this.enablePan = true;
        this.panSpeed = 1.0;
        this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
        this.keyPanSpeed = 7.0; // pixels moved per arrow key push
        this.zoomToCursor = false;
        // Set to true to automatically rotate around the target
        // If auto-rotate is enabled, you must call controls.update() in your animation loop
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60
        // The four arrow keys
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        };
        // Mouse buttons
        this.mouseButtons = {
            LEFT: (0, _three.MOUSE).ROTATE,
            MIDDLE: (0, _three.MOUSE).DOLLY,
            RIGHT: (0, _three.MOUSE).PAN
        };
        // Touch fingers
        this.touches = {
            ONE: (0, _three.TOUCH).ROTATE,
            TWO: (0, _three.TOUCH).DOLLY_PAN
        };
        // for reset
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.zoom0 = this.object.zoom;
        // the target DOM element for key events
        this._domElementKeyEvents = null;
        //
        // public methods
        //
        this.getPolarAngle = function() {
            return spherical.phi;
        };
        this.getAzimuthalAngle = function() {
            return spherical.theta;
        };
        this.getDistance = function() {
            return this.object.position.distanceTo(this.target);
        };
        this.listenToKeyEvents = function(domElement) {
            domElement.addEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = domElement;
        };
        this.stopListenToKeyEvents = function() {
            this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = null;
        };
        this.saveState = function() {
            scope.target0.copy(scope.target);
            scope.position0.copy(scope.object.position);
            scope.zoom0 = scope.object.zoom;
        };
        this.reset = function() {
            scope.target.copy(scope.target0);
            scope.object.position.copy(scope.position0);
            scope.object.zoom = scope.zoom0;
            scope.object.updateProjectionMatrix();
            scope.dispatchEvent(_changeEvent);
            scope.update();
            state = STATE.NONE;
        };
        // this method is exposed, but perhaps it would be better if we can make it private...
        this.update = function() {
            const offset = new (0, _three.Vector3)();
            // so camera.up is the orbit axis
            const quat = new (0, _three.Quaternion)().setFromUnitVectors(object.up, new (0, _three.Vector3)(0, 1, 0));
            const quatInverse = quat.clone().invert();
            const lastPosition = new (0, _three.Vector3)();
            const lastQuaternion = new (0, _three.Quaternion)();
            const lastTargetPosition = new (0, _three.Vector3)();
            const twoPI = 2 * Math.PI;
            return function update(deltaTime = null) {
                const position = scope.object.position;
                offset.copy(position).sub(scope.target);
                // rotate offset to "y-axis-is-up" space
                offset.applyQuaternion(quat);
                // angle from z-axis around y-axis
                spherical.setFromVector3(offset);
                if (scope.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle(deltaTime));
                if (scope.enableDamping) {
                    spherical.theta += sphericalDelta.theta * scope.dampingFactor;
                    spherical.phi += sphericalDelta.phi * scope.dampingFactor;
                } else {
                    spherical.theta += sphericalDelta.theta;
                    spherical.phi += sphericalDelta.phi;
                }
                // restrict theta to be between desired limits
                let min = scope.minAzimuthAngle;
                let max = scope.maxAzimuthAngle;
                if (isFinite(min) && isFinite(max)) {
                    if (min < -Math.PI) min += twoPI;
                    else if (min > Math.PI) min -= twoPI;
                    if (max < -Math.PI) max += twoPI;
                    else if (max > Math.PI) max -= twoPI;
                    if (min <= max) spherical.theta = Math.max(min, Math.min(max, spherical.theta));
                    else spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
                }
                // restrict phi to be between desired limits
                spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
                spherical.makeSafe();
                // move target to panned location
                if (scope.enableDamping === true) scope.target.addScaledVector(panOffset, scope.dampingFactor);
                else scope.target.add(panOffset);
                // Limit the target distance from the cursor to create a sphere around the center of interest
                scope.target.sub(scope.cursor);
                scope.target.clampLength(scope.minTargetRadius, scope.maxTargetRadius);
                scope.target.add(scope.cursor);
                // adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
                // we adjust zoom later in these cases
                if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) spherical.radius = clampDistance(spherical.radius);
                else spherical.radius = clampDistance(spherical.radius * scale);
                offset.setFromSpherical(spherical);
                // rotate offset back to "camera-up-vector-is-up" space
                offset.applyQuaternion(quatInverse);
                position.copy(scope.target).add(offset);
                scope.object.lookAt(scope.target);
                if (scope.enableDamping === true) {
                    sphericalDelta.theta *= 1 - scope.dampingFactor;
                    sphericalDelta.phi *= 1 - scope.dampingFactor;
                    panOffset.multiplyScalar(1 - scope.dampingFactor);
                } else {
                    sphericalDelta.set(0, 0, 0);
                    panOffset.set(0, 0, 0);
                }
                // adjust camera position
                let zoomChanged = false;
                if (scope.zoomToCursor && performCursorZoom) {
                    let newRadius = null;
                    if (scope.object.isPerspectiveCamera) {
                        // move the camera down the pointer ray
                        // this method avoids floating point error
                        const prevRadius = offset.length();
                        newRadius = clampDistance(prevRadius * scale);
                        const radiusDelta = prevRadius - newRadius;
                        scope.object.position.addScaledVector(dollyDirection, radiusDelta);
                        scope.object.updateMatrixWorld();
                    } else if (scope.object.isOrthographicCamera) {
                        // adjust the ortho camera position based on zoom changes
                        const mouseBefore = new (0, _three.Vector3)(mouse.x, mouse.y, 0);
                        mouseBefore.unproject(scope.object);
                        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                        scope.object.updateProjectionMatrix();
                        zoomChanged = true;
                        const mouseAfter = new (0, _three.Vector3)(mouse.x, mouse.y, 0);
                        mouseAfter.unproject(scope.object);
                        scope.object.position.sub(mouseAfter).add(mouseBefore);
                        scope.object.updateMatrixWorld();
                        newRadius = offset.length();
                    } else {
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
                        scope.zoomToCursor = false;
                    }
                    // handle the placement of the target
                    if (newRadius !== null) {
                        if (this.screenSpacePanning) // position the orbit target in front of the new camera position
                        scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
                        else {
                            // get the ray and translation plane to compute target
                            _ray.origin.copy(scope.object.position);
                            _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
                            // if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
                            // extremely large values
                            if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) object.lookAt(scope.target);
                            else {
                                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                                _ray.intersectPlane(_plane, scope.target);
                            }
                        }
                    }
                } else if (scope.object.isOrthographicCamera) {
                    scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                    scope.object.updateProjectionMatrix();
                    zoomChanged = true;
                }
                scale = 1;
                performCursorZoom = false;
                // update condition is:
                // min(camera displacement, camera rotation in radians)^2 > EPS
                // using small-angle approximation cos(x/2) = 1 - x^2 / 8
                if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
                    scope.dispatchEvent(_changeEvent);
                    lastPosition.copy(scope.object.position);
                    lastQuaternion.copy(scope.object.quaternion);
                    lastTargetPosition.copy(scope.target);
                    return true;
                }
                return false;
            };
        }();
        this.dispose = function() {
            scope.domElement.removeEventListener("contextmenu", onContextMenu);
            scope.domElement.removeEventListener("pointerdown", onPointerDown);
            scope.domElement.removeEventListener("pointercancel", onPointerUp);
            scope.domElement.removeEventListener("wheel", onMouseWheel);
            scope.domElement.removeEventListener("pointermove", onPointerMove);
            scope.domElement.removeEventListener("pointerup", onPointerUp);
            if (scope._domElementKeyEvents !== null) {
                scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
                scope._domElementKeyEvents = null;
            }
        //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
        };
        //
        // internals
        //
        const scope = this;
        const STATE = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let state = STATE.NONE;
        const EPS = 0.000001;
        // current position in spherical coordinates
        const spherical = new (0, _three.Spherical)();
        const sphericalDelta = new (0, _three.Spherical)();
        let scale = 1;
        const panOffset = new (0, _three.Vector3)();
        const rotateStart = new (0, _three.Vector2)();
        const rotateEnd = new (0, _three.Vector2)();
        const rotateDelta = new (0, _three.Vector2)();
        const panStart = new (0, _three.Vector2)();
        const panEnd = new (0, _three.Vector2)();
        const panDelta = new (0, _three.Vector2)();
        const dollyStart = new (0, _three.Vector2)();
        const dollyEnd = new (0, _three.Vector2)();
        const dollyDelta = new (0, _three.Vector2)();
        const dollyDirection = new (0, _three.Vector3)();
        const mouse = new (0, _three.Vector2)();
        let performCursorZoom = false;
        const pointers = [];
        const pointerPositions = {};
        let controlActive = false;
        function getAutoRotationAngle(deltaTime) {
            if (deltaTime !== null) return 2 * Math.PI / 60 * scope.autoRotateSpeed * deltaTime;
            else return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
        }
        function getZoomScale(delta) {
            const normalizedDelta = Math.abs(delta * 0.01);
            return Math.pow(0.95, scope.zoomSpeed * normalizedDelta);
        }
        function rotateLeft(angle) {
            sphericalDelta.theta -= angle;
        }
        function rotateUp(angle) {
            sphericalDelta.phi -= angle;
        }
        const panLeft = function() {
            const v = new (0, _three.Vector3)();
            return function panLeft(distance, objectMatrix) {
                v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
                v.multiplyScalar(-distance);
                panOffset.add(v);
            };
        }();
        const panUp = function() {
            const v = new (0, _three.Vector3)();
            return function panUp(distance, objectMatrix) {
                if (scope.screenSpacePanning === true) v.setFromMatrixColumn(objectMatrix, 1);
                else {
                    v.setFromMatrixColumn(objectMatrix, 0);
                    v.crossVectors(scope.object.up, v);
                }
                v.multiplyScalar(distance);
                panOffset.add(v);
            };
        }();
        // deltaX and deltaY are in pixels; right and down are positive
        const pan = function() {
            const offset = new (0, _three.Vector3)();
            return function pan(deltaX, deltaY) {
                const element = scope.domElement;
                if (scope.object.isPerspectiveCamera) {
                    // perspective
                    const position = scope.object.position;
                    offset.copy(position).sub(scope.target);
                    let targetDistance = offset.length();
                    // half of the fov is center to top of screen
                    targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
                    // we use only clientHeight here so aspect ratio does not distort speed
                    panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
                    panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
                } else if (scope.object.isOrthographicCamera) {
                    // orthographic
                    panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
                    panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
                } else {
                    // camera neither orthographic nor perspective
                    console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
                    scope.enablePan = false;
                }
            };
        }();
        function dollyOut(dollyScale) {
            if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) scale /= dollyScale;
            else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function dollyIn(dollyScale) {
            if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) scale *= dollyScale;
            else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function updateZoomParameters(x, y) {
            if (!scope.zoomToCursor) return;
            performCursorZoom = true;
            const rect = scope.domElement.getBoundingClientRect();
            const dx = x - rect.left;
            const dy = y - rect.top;
            const w = rect.width;
            const h = rect.height;
            mouse.x = dx / w * 2 - 1;
            mouse.y = -(dy / h) * 2 + 1;
            dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
        }
        function clampDistance(dist) {
            return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
        }
        //
        // event callbacks - update the object state
        //
        function handleMouseDownRotate(event) {
            rotateStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownDolly(event) {
            updateZoomParameters(event.clientX, event.clientX);
            dollyStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownPan(event) {
            panStart.set(event.clientX, event.clientY);
        }
        function handleMouseMoveRotate(event) {
            rotateEnd.set(event.clientX, event.clientY);
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height
            rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            rotateStart.copy(rotateEnd);
            scope.update();
        }
        function handleMouseMoveDolly(event) {
            dollyEnd.set(event.clientX, event.clientY);
            dollyDelta.subVectors(dollyEnd, dollyStart);
            if (dollyDelta.y > 0) dollyOut(getZoomScale(dollyDelta.y));
            else if (dollyDelta.y < 0) dollyIn(getZoomScale(dollyDelta.y));
            dollyStart.copy(dollyEnd);
            scope.update();
        }
        function handleMouseMovePan(event) {
            panEnd.set(event.clientX, event.clientY);
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
            scope.update();
        }
        function handleMouseWheel(event) {
            updateZoomParameters(event.clientX, event.clientY);
            if (event.deltaY < 0) dollyIn(getZoomScale(event.deltaY));
            else if (event.deltaY > 0) dollyOut(getZoomScale(event.deltaY));
            scope.update();
        }
        function handleKeyDown(event) {
            let needsUpdate = false;
            switch(event.code){
                case scope.keys.UP:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(0, scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.BOTTOM:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(0, -scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.LEFT:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
                case scope.keys.RIGHT:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(-scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
            }
            if (needsUpdate) {
                // prevent the browser from scrolling on cursor keys
                event.preventDefault();
                scope.update();
            }
        }
        function handleTouchStartRotate(event) {
            if (pointers.length === 1) rotateStart.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                rotateStart.set(x, y);
            }
        }
        function handleTouchStartPan(event) {
            if (pointers.length === 1) panStart.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                panStart.set(x, y);
            }
        }
        function handleTouchStartDolly(event) {
            const position = getSecondPointerPosition(event);
            const dx = event.pageX - position.x;
            const dy = event.pageY - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyStart.set(0, distance);
        }
        function handleTouchStartDollyPan(event) {
            if (scope.enableZoom) handleTouchStartDolly(event);
            if (scope.enablePan) handleTouchStartPan(event);
        }
        function handleTouchStartDollyRotate(event) {
            if (scope.enableZoom) handleTouchStartDolly(event);
            if (scope.enableRotate) handleTouchStartRotate(event);
        }
        function handleTouchMoveRotate(event) {
            if (pointers.length == 1) rotateEnd.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                rotateEnd.set(x, y);
            }
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height
            rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            rotateStart.copy(rotateEnd);
        }
        function handleTouchMovePan(event) {
            if (pointers.length === 1) panEnd.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                panEnd.set(x, y);
            }
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
        }
        function handleTouchMoveDolly(event) {
            const position = getSecondPointerPosition(event);
            const dx = event.pageX - position.x;
            const dy = event.pageY - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyEnd.set(0, distance);
            dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
            dollyOut(dollyDelta.y);
            dollyStart.copy(dollyEnd);
            const centerX = (event.pageX + position.x) * 0.5;
            const centerY = (event.pageY + position.y) * 0.5;
            updateZoomParameters(centerX, centerY);
        }
        function handleTouchMoveDollyPan(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enablePan) handleTouchMovePan(event);
        }
        function handleTouchMoveDollyRotate(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enableRotate) handleTouchMoveRotate(event);
        }
        //
        // event handlers - FSM: listen for events and reset state
        //
        function onPointerDown(event) {
            if (scope.enabled === false) return;
            if (pointers.length === 0) {
                scope.domElement.setPointerCapture(event.pointerId);
                scope.domElement.addEventListener("pointermove", onPointerMove);
                scope.domElement.addEventListener("pointerup", onPointerUp);
            }
            //
            addPointer(event);
            if (event.pointerType === "touch") onTouchStart(event);
            else onMouseDown(event);
        }
        function onPointerMove(event) {
            if (scope.enabled === false) return;
            if (event.pointerType === "touch") onTouchMove(event);
            else onMouseMove(event);
        }
        function onPointerUp(event) {
            removePointer(event);
            if (pointers.length === 0) {
                scope.domElement.releasePointerCapture(event.pointerId);
                scope.domElement.removeEventListener("pointermove", onPointerMove);
                scope.domElement.removeEventListener("pointerup", onPointerUp);
            }
            scope.dispatchEvent(_endEvent);
            state = STATE.NONE;
        }
        function onMouseDown(event) {
            let mouseAction;
            switch(event.button){
                case 0:
                    mouseAction = scope.mouseButtons.LEFT;
                    break;
                case 1:
                    mouseAction = scope.mouseButtons.MIDDLE;
                    break;
                case 2:
                    mouseAction = scope.mouseButtons.RIGHT;
                    break;
                default:
                    mouseAction = -1;
            }
            switch(mouseAction){
                case (0, _three.MOUSE).DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseDownDolly(event);
                    state = STATE.DOLLY;
                    break;
                case (0, _three.MOUSE).ROTATE:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    } else {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    }
                    break;
                case (0, _three.MOUSE).PAN:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    } else {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) scope.dispatchEvent(_startEvent);
        }
        function onMouseMove(event) {
            switch(state){
                case STATE.ROTATE:
                    if (scope.enableRotate === false) return;
                    handleMouseMoveRotate(event);
                    break;
                case STATE.DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (scope.enablePan === false) return;
                    handleMouseMovePan(event);
                    break;
            }
        }
        function onMouseWheel(event) {
            if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;
            event.preventDefault();
            scope.dispatchEvent(_startEvent);
            handleMouseWheel(customWheelEvent(event));
            scope.dispatchEvent(_endEvent);
        }
        function customWheelEvent(event) {
            const mode = event.deltaMode;
            // minimal wheel event altered to meet delta-zoom demand
            const newEvent = {
                clientX: event.clientX,
                clientY: event.clientY,
                deltaY: event.deltaY
            };
            switch(mode){
                case 1:
                    newEvent.deltaY *= 16;
                    break;
                case 2:
                    newEvent.deltaY *= 100;
                    break;
            }
            // detect if event was triggered by pinching
            if (event.ctrlKey && !controlActive) newEvent.deltaY *= 10;
            return newEvent;
        }
        function interceptControlDown(event) {
            if (event.key === "Control") {
                controlActive = true;
                document.addEventListener("keyup", interceptControlUp, {
                    passive: true,
                    capture: true
                });
            }
        }
        function interceptControlUp(event) {
            if (event.key === "Control") {
                controlActive = false;
                document.removeEventListener("keyup", interceptControlUp, {
                    passive: true,
                    capture: true
                });
            }
        }
        function onKeyDown(event) {
            if (scope.enabled === false || scope.enablePan === false) return;
            handleKeyDown(event);
        }
        function onTouchStart(event) {
            trackPointer(event);
            switch(pointers.length){
                case 1:
                    switch(scope.touches.ONE){
                        case (0, _three.TOUCH).ROTATE:
                            if (scope.enableRotate === false) return;
                            handleTouchStartRotate(event);
                            state = STATE.TOUCH_ROTATE;
                            break;
                        case (0, _three.TOUCH).PAN:
                            if (scope.enablePan === false) return;
                            handleTouchStartPan(event);
                            state = STATE.TOUCH_PAN;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                case 2:
                    switch(scope.touches.TWO){
                        case (0, _three.TOUCH).DOLLY_PAN:
                            if (scope.enableZoom === false && scope.enablePan === false) return;
                            handleTouchStartDollyPan(event);
                            state = STATE.TOUCH_DOLLY_PAN;
                            break;
                        case (0, _three.TOUCH).DOLLY_ROTATE:
                            if (scope.enableZoom === false && scope.enableRotate === false) return;
                            handleTouchStartDollyRotate(event);
                            state = STATE.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) scope.dispatchEvent(_startEvent);
        }
        function onTouchMove(event) {
            trackPointer(event);
            switch(state){
                case STATE.TOUCH_ROTATE:
                    if (scope.enableRotate === false) return;
                    handleTouchMoveRotate(event);
                    scope.update();
                    break;
                case STATE.TOUCH_PAN:
                    if (scope.enablePan === false) return;
                    handleTouchMovePan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_PAN:
                    if (scope.enableZoom === false && scope.enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_ROTATE:
                    if (scope.enableZoom === false && scope.enableRotate === false) return;
                    handleTouchMoveDollyRotate(event);
                    scope.update();
                    break;
                default:
                    state = STATE.NONE;
            }
        }
        function onContextMenu(event) {
            if (scope.enabled === false) return;
            event.preventDefault();
        }
        function addPointer(event) {
            pointers.push(event.pointerId);
        }
        function removePointer(event) {
            delete pointerPositions[event.pointerId];
            for(let i = 0; i < pointers.length; i++)if (pointers[i] == event.pointerId) {
                pointers.splice(i, 1);
                return;
            }
        }
        function trackPointer(event) {
            let position = pointerPositions[event.pointerId];
            if (position === undefined) {
                position = new (0, _three.Vector2)();
                pointerPositions[event.pointerId] = position;
            }
            position.set(event.pageX, event.pageY);
        }
        function getSecondPointerPosition(event) {
            const pointerId = event.pointerId === pointers[0] ? pointers[1] : pointers[0];
            return pointerPositions[pointerId];
        }
        //
        scope.domElement.addEventListener("contextmenu", onContextMenu);
        scope.domElement.addEventListener("pointerdown", onPointerDown);
        scope.domElement.addEventListener("pointercancel", onPointerUp);
        scope.domElement.addEventListener("wheel", onMouseWheel, {
            passive: false
        });
        document.addEventListener("keydown", interceptControlDown, {
            passive: true,
            capture: true
        });
        // force an update at start
        this.update();
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lFSQu"], null, "parcelRequire03bf")

//# sourceMappingURL=basic-car.923260f4.js.map