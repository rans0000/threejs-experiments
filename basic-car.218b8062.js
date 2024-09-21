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
})({"julJB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8feae2ce218b8062";
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

},{}],"96B03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _rapier3DCompat = require("@dimforge/rapier3d-compat");
var _car = require("src/libs/car");
var _carDefault = parcelHelpers.interopDefault(_car);
var _entity = require("src/libs/entity");
var _debugRenderer = require("src/utils/debug-renderer");
var _debugRendererDefault = parcelHelpers.interopDefault(_debugRenderer);
var _utils = require("src/utils/utils");
var _three = require("three");
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _lilGuiModuleMin = require("three/examples/jsm/libs/lil-gui.module.min");
const entities = [];
let options = {
    showAxis: true
};
const config = {
    camera: "pointerLock",
    cameraPos: [
        0,
        0,
        4
    ],
    fov: 75,
    lightType: "directional"
};
// -----------------------------------------------------------
// -----------------------------------------------------------
(0, _rapier3DCompat.init)().then(async ()=>{
    // initialize the scene
    const keyMap = {};
    const { world, scene, camera, controls, renderer, pivot, stats } = (0, _utils.initBasicScene)(keyMap, config);
    // setup geometry and colliders
    await buildScene(entities, scene, world, pivot);
    // setup helpers
    const rapierDebugRenderer = new (0, _debugRendererDefault.default)(scene, world);
    const axisHelper = new (0, _three.AxesHelper)(3);
    options.showAxis && scene.add(axisHelper);
    // setup the loop
    const clock = new (0, _three.Clock)();
    let delta;
    // setup the controls
    const gui = new (0, _lilGuiModuleMin.GUI)();
    gui.add(rapierDebugRenderer, "enabled").name("Rapier Degug Renderer");
    gui.add(options, "showAxis").name("Show Axis").onChange((status)=>{
        status ? scene.add(axisHelper) : scene.remove(axisHelper);
    });
    function gameLoop() {
        delta = clock.getDelta();
        world.timestep = Math.min(delta, 0.1);
        world.step();
        for (const entity of entities)entity.update(world.timestep);
        controls instanceof (0, _orbitControls.OrbitControls) && controls.update();
        rapierDebugRenderer.update();
        renderer.render(scene, camera);
        stats.update();
        window.requestAnimationFrame(gameLoop);
    }
    window.requestAnimationFrame(gameLoop);
});
// -----------------------------------------------------------
// -----------------------------------------------------------
async function buildScene(entities, scene, world, pivot) {
    // setup the floor
    const floorMesh = new (0, _three.Mesh)(new (0, _three.BoxGeometry)(100, 1, 100), new (0, _three.MeshPhongMaterial)());
    floorMesh.receiveShadow = true;
    floorMesh.position.y = -1;
    const floorBody = world.createRigidBody((0, _rapier3DCompat.RigidBodyDesc).fixed().setTranslation(0, -1, 0));
    const floorShape = (0, _rapier3DCompat.ColliderDesc).cuboid(50, 0.5, 50);
    world.createCollider(floorShape, floorBody);
    const floor = new (0, _entity.RenderableEntity)(scene, world, floorMesh, "floor", floorBody);
    floor.addToScene();
    entities.push(floor);
    const car = new (0, _carDefault.default)(scene, world, "/models/sedan-sports.glb", pivot);
    await car.init([
        0,
        0,
        0
    ], new (0, _three.Vector3)(0.3, 0, -0.66), new (0, _three.Vector3)(0.3, 0, -0.66));
    entities.push(car);
} // -----------------------------------------------------------
 // -----------------------------------------------------------

},{"@dimforge/rapier3d-compat":"M5vdp","src/libs/car":"bCuex","src/libs/entity":"fFF9X","src/utils/debug-renderer":"aHSVc","src/utils/utils":"ea5wt","three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","three/examples/jsm/libs/lil-gui.module.min":"dUXFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCuex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rapier3DCompat = require("@dimforge/rapier3d-compat");
var _three = require("three");
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _entity = require("./entity");
class Car extends (0, _entity.Entity) {
    constructor(scene, world, path, pivot){
        super(scene, "car");
        this.followTarget = new (0, _three.Object3D)();
        this.v = new (0, _three.Vector3)();
        this.world = world;
        this.path = path;
        // setup initial values
        this.followTarget.position.set(0, 1, 0);
        this.pivot = pivot;
        this.updatables = [];
    }
    async init(position, frontWheelOffset, backWheelOffset) {
        await new (0, _gltfloader.GLTFLoader)().loadAsync(this.path).then((gltf)=>{
            // set up the mesh
            this.geometry = gltf.scene.getObjectByName("body");
            this.geometry.position.set(0, 0, 0);
            this.geometry.traverse((mesh)=>mesh.castShadow = true);
            this.geometry.add(this.followTarget);
            const wheelBLMesh = gltf.scene.getObjectByName("wheel-back-left");
            const wheelBRMesh = gltf.scene.getObjectByName("wheel-back-right");
            const wheelFLMesh = gltf.scene.getObjectByName("wheel-front-left");
            const wheelFRMesh = gltf.scene.getObjectByName("wheel-front-right");
            this.scene.add(this.geometry, wheelBLMesh, wheelBRMesh, wheelFLMesh, wheelFRMesh);
            // create rigid boadies for car, wheel and axle
            this.rigidBody = this.world.createRigidBody((0, _rapier3DCompat.RigidBodyDesc).dynamic().setTranslation(...position).setCanSleep(false));
            const wheelBLBody = this.world.createRigidBody((0, _rapier3DCompat.RigidBodyDesc).dynamic().setTranslation(backWheelOffset.x, backWheelOffset.y, backWheelOffset.z).setCanSleep(false));
            const wheelBRBody = this.world.createRigidBody((0, _rapier3DCompat.RigidBodyDesc).dynamic().setTranslation(-backWheelOffset.x, backWheelOffset.y, backWheelOffset.z).setCanSleep(false));
            const wheelFLBody = this.world.createRigidBody((0, _rapier3DCompat.RigidBodyDesc).dynamic().setTranslation(frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z).setCanSleep(false));
            const wheelFRBody = this.world.createRigidBody((0, _rapier3DCompat.RigidBodyDesc).dynamic().setTranslation(-frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z).setCanSleep(false));
            // create a convexhull from all meshes in the this.geometry group
            const v = new (0, _three.Vector3)();
            let positions = [];
            // ensure world matrix is up to date
            this.geometry.updateMatrixWorld(true);
            this.geometry.traverse((mesh)=>{
                if (mesh.type !== "Mesh") return;
                const posAttr = mesh.geometry.getAttribute("position");
                for(let i = 0, l = posAttr.count; i < l; i++){
                    v.fromBufferAttribute(posAttr, i);
                    v.applyMatrix4(mesh.parent.matrixWorld);
                    positions.push(...v);
                }
            });
            const wheelRadius = 0.3; //.3
            const whelHeight = 0.175; //.175
            // create shapes for carBody, wheelBodies and axelBodies
            const carShape = (0, _rapier3DCompat.ColliderDesc).convexMesh(new Float32Array(positions)).setMass(1).setRestitution(0.5).setFriction(3).setCollisionGroups(131073);
            const wheelBLShape = (0, _rapier3DCompat.ColliderDesc).cylinder(whelHeight, wheelRadius).setRotation(new (0, _three.Quaternion)().setFromAxisAngle(new (0, _three.Vector3)(0, 0, 1), -Math.PI / 2)).setTranslation(0.1, 0, 0).setRestitution(0.5).setFriction(2).setCollisionGroups(262145);
            const wheelBRShape = (0, _rapier3DCompat.ColliderDesc).cylinder(whelHeight, wheelRadius).setRotation(new (0, _three.Quaternion)().setFromAxisAngle(new (0, _three.Vector3)(0, 0, 1), Math.PI / 2)).setTranslation(-0.1, 0, 0).setRestitution(0.5).setFriction(2).setCollisionGroups(262145);
            const wheelFLShape = (0, _rapier3DCompat.ColliderDesc).cylinder(whelHeight, wheelRadius).setRotation(new (0, _three.Quaternion)().setFromAxisAngle(new (0, _three.Vector3)(0, 0, 1), Math.PI / 2)).setTranslation(0.1, 0, 0).setRestitution(0.5).setFriction(2.5).setCollisionGroups(262145);
            const wheelFRShape = (0, _rapier3DCompat.ColliderDesc).cylinder(whelHeight, wheelRadius).setRotation(new (0, _three.Quaternion)().setFromAxisAngle(new (0, _three.Vector3)(0, 0, 1), Math.PI / 2)).setTranslation(-0.1, 0, 0).setRestitution(0.5).setFriction(2.5).setCollisionGroups(262145);
            //joins wheels to car body
            this.world.createImpulseJoint((0, _rapier3DCompat.JointData).revolute(new (0, _three.Vector3)(backWheelOffset.x, backWheelOffset.y, backWheelOffset.z), new (0, _three.Vector3)(0, 0, 0), new (0, _three.Vector3)(-1, 0, 0)), this.rigidBody, wheelBLBody, true);
            this.world.createImpulseJoint((0, _rapier3DCompat.JointData).revolute(new (0, _three.Vector3)(-backWheelOffset.x, backWheelOffset.y, backWheelOffset.z), new (0, _three.Vector3)(0, 0, 0), new (0, _three.Vector3)(-1, 0, 0)), this.rigidBody, wheelBRBody, true);
            this.world.createImpulseJoint((0, _rapier3DCompat.JointData).revolute(new (0, _three.Vector3)(frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z), new (0, _three.Vector3)(0, 0, 0), new (0, _three.Vector3)(1, 0, 0)), this.rigidBody, wheelFLBody, true);
            this.world.createImpulseJoint((0, _rapier3DCompat.JointData).revolute(new (0, _three.Vector3)(-frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z), new (0, _three.Vector3)(0, 0, 0), new (0, _three.Vector3)(1, 0, 0)), this.rigidBody, wheelFRBody, true);
            // create world collider
            this.world.createCollider(carShape, this.rigidBody);
            this.world.createCollider(wheelBLShape, wheelBLBody);
            this.world.createCollider(wheelBRShape, wheelBRBody);
            this.world.createCollider(wheelFLShape, wheelFLBody);
            this.world.createCollider(wheelFRShape, wheelFRBody);
            // add to the updatable list
            this.updatables.push([
                this.geometry,
                this.rigidBody
            ]);
            this.updatables.push([
                wheelBLMesh,
                wheelBLBody
            ]);
            this.updatables.push([
                wheelBRMesh,
                wheelBRBody
            ]);
            this.updatables.push([
                wheelFLMesh,
                wheelFLBody
            ]);
            this.updatables.push([
                wheelFRMesh,
                wheelFRBody
            ]);
        });
    }
    update(delta) {
        // update camera
        this.followTarget.getWorldPosition(this.v);
        this.pivot && this.pivot.position.lerp(this.v, delta * 5);
        const length = this.updatables.length;
        for(let i = 0, n = length; i < n; i++){
            this.updatables[i][0].position.copy(this.updatables[i][1].translation());
            this.updatables[i][0].quaternion.copy(this.updatables[i][1].rotation());
        }
        return this;
    }
}
exports.default = Car;

},{"@dimforge/rapier3d-compat":"M5vdp","three":"ktPTu","three/examples/jsm/loaders/GLTFLoader":"dVRsF","./entity":"fFF9X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVRsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFLoader", ()=>GLTFLoader);
var _three = require("three");
var _bufferGeometryUtilsJs = require("../utils/BufferGeometryUtils.js");
class GLTFLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.dracoLoader = null;
        this.ktx2Loader = null;
        this.meshoptDecoder = null;
        this.pluginCallbacks = [];
        this.register(function(parser) {
            return new GLTFMaterialsClearcoatExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureBasisUExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureWebPExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureAVIFExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSheenExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsTransmissionExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsVolumeExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIorExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsEmissiveStrengthExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSpecularExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIridescenceExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsAnisotropyExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsBumpExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFLightsExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshoptCompression(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshGpuInstancing(parser);
        });
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        let resourcePath;
        if (this.resourcePath !== "") resourcePath = this.resourcePath;
        else if (this.path !== "") {
            // If a base path is set, resources will be relative paths from that plus the relative path of the gltf file
            // Example  path = 'https://my-cnd-server.com/', url = 'assets/models/model.gltf'
            // resourcePath = 'https://my-cnd-server.com/assets/models/'
            // referenced resource 'model.bin' will be loaded from 'https://my-cnd-server.com/assets/models/model.bin'
            // referenced resource '../textures/texture.png' will be loaded from 'https://my-cnd-server.com/assets/textures/texture.png'
            const relativeUrl = (0, _three.LoaderUtils).extractUrlBase(url);
            resourcePath = (0, _three.LoaderUtils).resolveURL(relativeUrl, this.path);
        } else resourcePath = (0, _three.LoaderUtils).extractUrlBase(url);
        // Tells the LoadingManager to track an extra item, which resolves after
        // the model is fully loaded. This means the count of items loaded will
        // be incorrect, but ensures manager.onLoad() does not fire early.
        this.manager.itemStart(url);
        const _onError = function(e) {
            if (onError) onError(e);
            else console.error(e);
            scope.manager.itemError(url);
            scope.manager.itemEnd(url);
        };
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setResponseType("arraybuffer");
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(data) {
            try {
                scope.parse(data, resourcePath, function(gltf) {
                    onLoad(gltf);
                    scope.manager.itemEnd(url);
                }, _onError);
            } catch (e) {
                _onError(e);
            }
        }, onProgress, _onError);
    }
    setDRACOLoader(dracoLoader) {
        this.dracoLoader = dracoLoader;
        return this;
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(ktx2Loader) {
        this.ktx2Loader = ktx2Loader;
        return this;
    }
    setMeshoptDecoder(meshoptDecoder) {
        this.meshoptDecoder = meshoptDecoder;
        return this;
    }
    register(callback) {
        if (this.pluginCallbacks.indexOf(callback) === -1) this.pluginCallbacks.push(callback);
        return this;
    }
    unregister(callback) {
        if (this.pluginCallbacks.indexOf(callback) !== -1) this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
        return this;
    }
    parse(data, path, onLoad, onError) {
        let json;
        const extensions = {};
        const plugins = {};
        const textDecoder = new TextDecoder();
        if (typeof data === "string") json = JSON.parse(data);
        else if (data instanceof ArrayBuffer) {
            const magic = textDecoder.decode(new Uint8Array(data, 0, 4));
            if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
                try {
                    extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
                } catch (error) {
                    if (onError) onError(error);
                    return;
                }
                json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
            } else json = JSON.parse(textDecoder.decode(data));
        } else json = data;
        if (json.asset === undefined || json.asset.version[0] < 2) {
            if (onError) onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return;
        }
        const parser = new GLTFParser(json, {
            path: path || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        parser.fileLoader.setRequestHeader(this.requestHeader);
        for(let i = 0; i < this.pluginCallbacks.length; i++){
            const plugin = this.pluginCallbacks[i](parser);
            if (!plugin.name) console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
            plugins[plugin.name] = plugin;
            // Workaround to avoid determining as unknown extension
            // in addUnknownExtensionsToUserData().
            // Remove this workaround if we move all the existing
            // extension handlers to plugin system
            extensions[plugin.name] = true;
        }
        if (json.extensionsUsed) for(let i = 0; i < json.extensionsUsed.length; ++i){
            const extensionName = json.extensionsUsed[i];
            const extensionsRequired = json.extensionsRequired || [];
            switch(extensionName){
                case EXTENSIONS.KHR_MATERIALS_UNLIT:
                    extensions[extensionName] = new GLTFMaterialsUnlitExtension();
                    break;
                case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
                    extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
                    break;
                case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
                    extensions[extensionName] = new GLTFTextureTransformExtension();
                    break;
                case EXTENSIONS.KHR_MESH_QUANTIZATION:
                    extensions[extensionName] = new GLTFMeshQuantizationExtension();
                    break;
                default:
                    if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === undefined) console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
            }
        }
        parser.setExtensions(extensions);
        parser.setPlugins(plugins);
        parser.parse(onLoad, onError);
    }
    parseAsync(data, path) {
        const scope = this;
        return new Promise(function(resolve, reject) {
            scope.parse(data, path, resolve, reject);
        });
    }
}
/* GLTFREGISTRY */ function GLTFRegistry() {
    let objects = {};
    return {
        get: function(key) {
            return objects[key];
        },
        add: function(key, object) {
            objects[key] = object;
        },
        remove: function(key) {
            delete objects[key];
        },
        removeAll: function() {
            objects = {};
        }
    };
}
/*********************************/ /********** EXTENSIONS ***********/ /*********************************/ const EXTENSIONS = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */ class GLTFLightsExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
        // Object3D instance caches
        this.cache = {
            refs: {},
            uses: {}
        };
    }
    _markDefs() {
        const parser = this.parser;
        const nodeDefs = this.parser.json.nodes || [];
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== undefined) parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
    }
    _loadLight(lightIndex) {
        const parser = this.parser;
        const cacheKey = "light:" + lightIndex;
        let dependency = parser.cache.get(cacheKey);
        if (dependency) return dependency;
        const json = parser.json;
        const extensions = json.extensions && json.extensions[this.name] || {};
        const lightDefs = extensions.lights || [];
        const lightDef = lightDefs[lightIndex];
        let lightNode;
        const color = new (0, _three.Color)(0xffffff);
        if (lightDef.color !== undefined) color.setRGB(lightDef.color[0], lightDef.color[1], lightDef.color[2], (0, _three.LinearSRGBColorSpace));
        const range = lightDef.range !== undefined ? lightDef.range : 0;
        switch(lightDef.type){
            case "directional":
                lightNode = new (0, _three.DirectionalLight)(color);
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            case "point":
                lightNode = new (0, _three.PointLight)(color);
                lightNode.distance = range;
                break;
            case "spot":
                lightNode = new (0, _three.SpotLight)(color);
                lightNode.distance = range;
                // Handle spotlight properties.
                lightDef.spot = lightDef.spot || {};
                lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
                lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
                lightNode.angle = lightDef.spot.outerConeAngle;
                lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
        }
        // Some lights (e.g. spot) default to a position other than the origin. Reset the position
        // here, because node-level parsing will only override position if explicitly specified.
        lightNode.position.set(0, 0, 0);
        lightNode.decay = 2;
        assignExtrasToUserData(lightNode, lightDef);
        if (lightDef.intensity !== undefined) lightNode.intensity = lightDef.intensity;
        lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
        dependency = Promise.resolve(lightNode);
        parser.cache.add(cacheKey, dependency);
        return dependency;
    }
    getDependency(type, index) {
        if (type !== "light") return;
        return this._loadLight(index);
    }
    createNodeAttachment(nodeIndex) {
        const self1 = this;
        const parser = this.parser;
        const json = parser.json;
        const nodeDef = json.nodes[nodeIndex];
        const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
        const lightIndex = lightDef.light;
        if (lightIndex === undefined) return null;
        return this._loadLight(lightIndex).then(function(light) {
            return parser._getNodeRef(self1.cache, lightIndex, light);
        });
    }
}
/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */ class GLTFMaterialsUnlitExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return 0, _three.MeshBasicMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
        const pending = [];
        materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
        materialParams.opacity = 1.0;
        const metallicRoughness = materialDef.pbrMetallicRoughness;
        if (metallicRoughness) {
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.setRGB(array[0], array[1], array[2], (0, _three.LinearSRGBColorSpace));
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, (0, _three.SRGBColorSpace)));
        }
        return Promise.all(pending);
    }
}
/**
 * Materials Emissive Strength Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
 */ class GLTFMaterialsEmissiveStrengthExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
        if (emissiveStrength !== undefined) materialParams.emissiveIntensity = emissiveStrength;
        return Promise.resolve();
    }
}
/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */ class GLTFMaterialsClearcoatExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.clearcoatFactor !== undefined) materialParams.clearcoat = extension.clearcoatFactor;
        if (extension.clearcoatTexture !== undefined) pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
        if (extension.clearcoatRoughnessFactor !== undefined) materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
        if (extension.clearcoatRoughnessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
        if (extension.clearcoatNormalTexture !== undefined) {
            pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
            if (extension.clearcoatNormalTexture.scale !== undefined) {
                const scale = extension.clearcoatNormalTexture.scale;
                materialParams.clearcoatNormalScale = new (0, _three.Vector2)(scale, scale);
            }
        }
        return Promise.all(pending);
    }
}
/**
 * Iridescence Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
 */ class GLTFMaterialsIridescenceExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.iridescenceFactor !== undefined) materialParams.iridescence = extension.iridescenceFactor;
        if (extension.iridescenceTexture !== undefined) pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
        if (extension.iridescenceIor !== undefined) materialParams.iridescenceIOR = extension.iridescenceIor;
        if (materialParams.iridescenceThicknessRange === undefined) materialParams.iridescenceThicknessRange = [
            100,
            400
        ];
        if (extension.iridescenceThicknessMinimum !== undefined) materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
        if (extension.iridescenceThicknessMaximum !== undefined) materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
        if (extension.iridescenceThicknessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
        return Promise.all(pending);
    }
}
/**
 * Sheen Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
 */ class GLTFMaterialsSheenExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        materialParams.sheenColor = new (0, _three.Color)(0, 0, 0);
        materialParams.sheenRoughness = 0;
        materialParams.sheen = 1;
        const extension = materialDef.extensions[this.name];
        if (extension.sheenColorFactor !== undefined) {
            const colorFactor = extension.sheenColorFactor;
            materialParams.sheenColor.setRGB(colorFactor[0], colorFactor[1], colorFactor[2], (0, _three.LinearSRGBColorSpace));
        }
        if (extension.sheenRoughnessFactor !== undefined) materialParams.sheenRoughness = extension.sheenRoughnessFactor;
        if (extension.sheenColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, (0, _three.SRGBColorSpace)));
        if (extension.sheenRoughnessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
        return Promise.all(pending);
    }
}
/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */ class GLTFMaterialsTransmissionExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.transmissionFactor !== undefined) materialParams.transmission = extension.transmissionFactor;
        if (extension.transmissionTexture !== undefined) pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
        return Promise.all(pending);
    }
}
/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */ class GLTFMaterialsVolumeExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;
        if (extension.thicknessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
        materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
        const colorArray = extension.attenuationColor || [
            1,
            1,
            1
        ];
        materialParams.attenuationColor = new (0, _three.Color)().setRGB(colorArray[0], colorArray[1], colorArray[2], (0, _three.LinearSRGBColorSpace));
        return Promise.all(pending);
    }
}
/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */ class GLTFMaterialsIorExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const extension = materialDef.extensions[this.name];
        materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;
        return Promise.resolve();
    }
}
/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */ class GLTFMaterialsSpecularExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;
        if (extension.specularTexture !== undefined) pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
        const colorArray = extension.specularColorFactor || [
            1,
            1,
            1
        ];
        materialParams.specularColor = new (0, _three.Color)().setRGB(colorArray[0], colorArray[1], colorArray[2], (0, _three.LinearSRGBColorSpace));
        if (extension.specularColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, (0, _three.SRGBColorSpace)));
        return Promise.all(pending);
    }
}
/**
 * Materials bump Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/EXT_materials_bump
 */ class GLTFMaterialsBumpExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.bumpScale = extension.bumpFactor !== undefined ? extension.bumpFactor : 1.0;
        if (extension.bumpTexture !== undefined) pending.push(parser.assignTexture(materialParams, "bumpMap", extension.bumpTexture));
        return Promise.all(pending);
    }
}
/**
 * Materials anisotropy Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_anisotropy
 */ class GLTFMaterialsAnisotropyExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.anisotropyStrength !== undefined) materialParams.anisotropy = extension.anisotropyStrength;
        if (extension.anisotropyRotation !== undefined) materialParams.anisotropyRotation = extension.anisotropyRotation;
        if (extension.anisotropyTexture !== undefined) pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
        return Promise.all(pending);
    }
}
/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */ class GLTFTextureBasisUExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[this.name]) return null;
        const extension = textureDef.extensions[this.name];
        const loader = parser.options.ktx2Loader;
        if (!loader) {
            if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            else // Assumes that the extension is optional and that a fallback texture is present
            return null;
        }
        return parser.loadTextureImage(textureIndex, extension.source, loader);
    }
}
/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */ class GLTFTextureWebPExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
        this.isSupported = null;
    }
    loadTexture(textureIndex) {
        const name = this.name;
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[name]) return null;
        const extension = textureDef.extensions[name];
        const source = json.images[extension.source];
        let loader = parser.textureLoader;
        if (source.uri) {
            const handler = parser.options.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.detectSupport().then(function(isSupported) {
            if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
            if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            // Fall back to PNG or JPEG.
            return parser.loadTexture(textureIndex);
        });
    }
    detectSupport() {
        if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
            const image = new Image();
            // Lossy test image. Support for lossy images doesn't guarantee support for all
            // WebP images, unfortunately.
            image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
            image.onload = image.onerror = function() {
                resolve(image.height === 1);
            };
        });
        return this.isSupported;
    }
}
/**
 * AVIF Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_avif
 */ class GLTFTextureAVIFExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
        this.isSupported = null;
    }
    loadTexture(textureIndex) {
        const name = this.name;
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[name]) return null;
        const extension = textureDef.extensions[name];
        const source = json.images[extension.source];
        let loader = parser.textureLoader;
        if (source.uri) {
            const handler = parser.options.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.detectSupport().then(function(isSupported) {
            if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
            if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
            // Fall back to PNG or JPEG.
            return parser.loadTexture(textureIndex);
        });
    }
    detectSupport() {
        if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
            const image = new Image();
            // Lossy test image.
            image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
            image.onload = image.onerror = function() {
                resolve(image.height === 1);
            };
        });
        return this.isSupported;
    }
}
/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */ class GLTFMeshoptCompression {
    constructor(parser){
        this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
        this.parser = parser;
    }
    loadBufferView(index) {
        const json = this.parser.json;
        const bufferView = json.bufferViews[index];
        if (bufferView.extensions && bufferView.extensions[this.name]) {
            const extensionDef = bufferView.extensions[this.name];
            const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
            const decoder = this.parser.options.meshoptDecoder;
            if (!decoder || !decoder.supported) {
                if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                else // Assumes that the extension is optional and that fallback buffer data is present
                return null;
            }
            return buffer.then(function(res) {
                const byteOffset = extensionDef.byteOffset || 0;
                const byteLength = extensionDef.byteLength || 0;
                const count = extensionDef.count;
                const stride = extensionDef.byteStride;
                const source = new Uint8Array(res, byteOffset, byteLength);
                if (decoder.decodeGltfBufferAsync) return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res) {
                    return res.buffer;
                });
                else // Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
                return decoder.ready.then(function() {
                    const result = new ArrayBuffer(count * stride);
                    decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
                    return result;
                });
            });
        } else return null;
    }
}
/**
 * GPU Instancing Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
 *
 */ class GLTFMeshGpuInstancing {
    constructor(parser){
        this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
        this.parser = parser;
    }
    createNodeMesh(nodeIndex) {
        const json = this.parser.json;
        const nodeDef = json.nodes[nodeIndex];
        if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === undefined) return null;
        const meshDef = json.meshes[nodeDef.mesh];
        // No Points or Lines + Instancing support yet
        for (const primitive of meshDef.primitives){
            if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== undefined) return null;
        }
        const extensionDef = nodeDef.extensions[this.name];
        const attributesDef = extensionDef.attributes;
        // @TODO: Can we support InstancedMesh + SkinnedMesh?
        const pending = [];
        const attributes = {};
        for(const key in attributesDef)pending.push(this.parser.getDependency("accessor", attributesDef[key]).then((accessor)=>{
            attributes[key] = accessor;
            return attributes[key];
        }));
        if (pending.length < 1) return null;
        pending.push(this.parser.createNodeMesh(nodeIndex));
        return Promise.all(pending).then((results)=>{
            const nodeObject = results.pop();
            const meshes = nodeObject.isGroup ? nodeObject.children : [
                nodeObject
            ];
            const count = results[0].count; // All attribute counts should be same
            const instancedMeshes = [];
            for (const mesh of meshes){
                // Temporal variables
                const m = new (0, _three.Matrix4)();
                const p = new (0, _three.Vector3)();
                const q = new (0, _three.Quaternion)();
                const s = new (0, _three.Vector3)(1, 1, 1);
                const instancedMesh = new (0, _three.InstancedMesh)(mesh.geometry, mesh.material, count);
                for(let i = 0; i < count; i++){
                    if (attributes.TRANSLATION) p.fromBufferAttribute(attributes.TRANSLATION, i);
                    if (attributes.ROTATION) q.fromBufferAttribute(attributes.ROTATION, i);
                    if (attributes.SCALE) s.fromBufferAttribute(attributes.SCALE, i);
                    instancedMesh.setMatrixAt(i, m.compose(p, q, s));
                }
                // Add instance attributes to the geometry, excluding TRS.
                for(const attributeName in attributes){
                    if (attributeName === "_COLOR_0") {
                        const attr = attributes[attributeName];
                        instancedMesh.instanceColor = new (0, _three.InstancedBufferAttribute)(attr.array, attr.itemSize, attr.normalized);
                    } else if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
                }
                // Just in case
                (0, _three.Object3D).prototype.copy.call(instancedMesh, mesh);
                this.parser.assignFinalMaterial(instancedMesh);
                instancedMeshes.push(instancedMesh);
            }
            if (nodeObject.isGroup) {
                nodeObject.clear();
                nodeObject.add(...instancedMeshes);
                return nodeObject;
            }
            return instancedMeshes[0];
        });
    }
}
/* BINARY EXTENSION */ const BINARY_EXTENSION_HEADER_MAGIC = "glTF";
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = {
    JSON: 0x4E4F534A,
    BIN: 0x004E4942
};
class GLTFBinaryExtension {
    constructor(data){
        this.name = EXTENSIONS.KHR_BINARY_GLTF;
        this.content = null;
        this.body = null;
        const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
        const textDecoder = new TextDecoder();
        this.header = {
            magic: textDecoder.decode(new Uint8Array(data.slice(0, 4))),
            version: headerView.getUint32(4, true),
            length: headerView.getUint32(8, true)
        };
        if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        else if (this.header.version < 2.0) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
        const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
        let chunkIndex = 0;
        while(chunkIndex < chunkContentsLength){
            const chunkLength = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            const chunkType = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
                const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
                this.content = textDecoder.decode(contentArray);
            } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
                const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
                this.body = data.slice(byteOffset, byteOffset + chunkLength);
            }
            // Clients must ignore chunks with unknown types.
            chunkIndex += chunkLength;
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}
/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */ class GLTFDracoMeshCompressionExtension {
    constructor(json, dracoLoader){
        if (!dracoLoader) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
        this.json = json;
        this.dracoLoader = dracoLoader;
        this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
        const json = this.json;
        const dracoLoader = this.dracoLoader;
        const bufferViewIndex = primitive.extensions[this.name].bufferView;
        const gltfAttributeMap = primitive.extensions[this.name].attributes;
        const threeAttributeMap = {};
        const attributeNormalizedMap = {};
        const attributeTypeMap = {};
        for(const attributeName in gltfAttributeMap){
            const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
            threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
        }
        for(const attributeName in primitive.attributes){
            const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
            if (gltfAttributeMap[attributeName] !== undefined) {
                const accessorDef = json.accessors[primitive.attributes[attributeName]];
                const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
                attributeTypeMap[threeAttributeName] = componentType.name;
                attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
            }
        }
        return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
            return new Promise(function(resolve, reject) {
                dracoLoader.decodeDracoFile(bufferView, function(geometry) {
                    for(const attributeName in geometry.attributes){
                        const attribute = geometry.attributes[attributeName];
                        const normalized = attributeNormalizedMap[attributeName];
                        if (normalized !== undefined) attribute.normalized = normalized;
                    }
                    resolve(geometry);
                }, threeAttributeMap, attributeTypeMap, (0, _three.LinearSRGBColorSpace), reject);
            });
        });
    }
}
/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */ class GLTFTextureTransformExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture, transform) {
        if ((transform.texCoord === undefined || transform.texCoord === texture.channel) && transform.offset === undefined && transform.rotation === undefined && transform.scale === undefined) // See https://github.com/mrdoob/three.js/issues/21819.
        return texture;
        texture = texture.clone();
        if (transform.texCoord !== undefined) texture.channel = transform.texCoord;
        if (transform.offset !== undefined) texture.offset.fromArray(transform.offset);
        if (transform.rotation !== undefined) texture.rotation = transform.rotation;
        if (transform.scale !== undefined) texture.repeat.fromArray(transform.scale);
        texture.needsUpdate = true;
        return texture;
    }
}
/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */ class GLTFMeshQuantizationExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
}
/*********************************/ /********** INTERPOLATION ********/ /*********************************/ // Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class GLTFCubicSplineInterpolant extends (0, _three.Interpolant) {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer){
        super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
        // Copies a sample value to the result buffer. See description of glTF
        // CUBICSPLINE values layout in interpolate_() function below.
        const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
        for(let i = 0; i !== valueSize; i++)result[i] = values[offset + i];
        return result;
    }
    interpolate_(i1, t0, t, t1) {
        const result = this.resultBuffer;
        const values = this.sampleValues;
        const stride = this.valueSize;
        const stride2 = stride * 2;
        const stride3 = stride * 3;
        const td = t1 - t0;
        const p = (t - t0) / td;
        const pp = p * p;
        const ppp = pp * p;
        const offset1 = i1 * stride3;
        const offset0 = offset1 - stride3;
        const s2 = -2 * ppp + 3 * pp;
        const s3 = ppp - pp;
        const s0 = 1 - s2;
        const s1 = s3 - pp + p;
        // Layout of keyframe output values for CUBICSPLINE animations:
        //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
        for(let i = 0; i !== stride; i++){
            const p0 = values[offset0 + i + stride]; // splineVertex_k
            const m0 = values[offset0 + i + stride2] * td; // outTangent_k * (t_k+1 - t_k)
            const p1 = values[offset1 + i + stride]; // splineVertex_k+1
            const m1 = values[offset1 + i] * td; // inTangent_k+1 * (t_k+1 - t_k)
            result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
        }
        return result;
    }
}
const _q = new (0, _three.Quaternion)();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t, t1) {
        const result = super.interpolate_(i1, t0, t, t1);
        _q.fromArray(result).normalize().toArray(result);
        return result;
    }
}
/*********************************/ /********** INTERNALS ************/ /*********************************/ /* CONSTANTS */ const WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
};
const WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
};
const WEBGL_FILTERS = {
    9728: (0, _three.NearestFilter),
    9729: (0, _three.LinearFilter),
    9984: (0, _three.NearestMipmapNearestFilter),
    9985: (0, _three.LinearMipmapNearestFilter),
    9986: (0, _three.NearestMipmapLinearFilter),
    9987: (0, _three.LinearMipmapLinearFilter)
};
const WEBGL_WRAPPINGS = {
    33071: (0, _three.ClampToEdgeWrapping),
    33648: (0, _three.MirroredRepeatWrapping),
    10497: (0, _three.RepeatWrapping)
};
const WEBGL_TYPE_SIZES = {
    "SCALAR": 1,
    "VEC2": 2,
    "VEC3": 3,
    "VEC4": 4,
    "MAT2": 4,
    "MAT3": 9,
    "MAT4": 16
};
const ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
};
const PATH_PROPERTIES = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
};
const INTERPOLATION = {
    CUBICSPLINE: undefined,
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: (0, _three.InterpolateLinear),
    STEP: (0, _three.InterpolateDiscrete)
};
const ALPHA_MODES = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
 */ function createDefaultMaterial(cache) {
    if (cache["DefaultMaterial"] === undefined) cache["DefaultMaterial"] = new (0, _three.MeshStandardMaterial)({
        color: 0xFFFFFF,
        emissive: 0x000000,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: (0, _three.FrontSide)
    });
    return cache["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    // Add unknown glTF extensions to an object's userData.
    for(const name in objectDef.extensions)if (knownExtensions[name] === undefined) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
}
/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */ function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== undefined) {
        if (typeof gltfDef.extras === "object") Object.assign(object.userData, gltfDef.extras);
        else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
    }
}
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addMorphTargets(geometry, targets, parser) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    let hasMorphColor = false;
    for(let i = 0, il = targets.length; i < il; i++){
        const target = targets[i];
        if (target.POSITION !== undefined) hasMorphPosition = true;
        if (target.NORMAL !== undefined) hasMorphNormal = true;
        if (target.COLOR_0 !== undefined) hasMorphColor = true;
        if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
    }
    if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    const pendingColorAccessors = [];
    for(let i = 0, il = targets.length; i < il; i++){
        const target = targets[i];
        if (hasMorphPosition) {
            const pendingAccessor = target.POSITION !== undefined ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
            pendingPositionAccessors.push(pendingAccessor);
        }
        if (hasMorphNormal) {
            const pendingAccessor = target.NORMAL !== undefined ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
            pendingNormalAccessors.push(pendingAccessor);
        }
        if (hasMorphColor) {
            const pendingAccessor = target.COLOR_0 !== undefined ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
            pendingColorAccessors.push(pendingAccessor);
        }
    }
    return Promise.all([
        Promise.all(pendingPositionAccessors),
        Promise.all(pendingNormalAccessors),
        Promise.all(pendingColorAccessors)
    ]).then(function(accessors) {
        const morphPositions = accessors[0];
        const morphNormals = accessors[1];
        const morphColors = accessors[2];
        if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
        if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
        if (hasMorphColor) geometry.morphAttributes.color = morphColors;
        geometry.morphTargetsRelative = true;
        return geometry;
    });
}
/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */ function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== undefined) for(let i = 0, il = meshDef.weights.length; i < il; i++)mesh.morphTargetInfluences[i] = meshDef.weights[i];
    // .extras has user-defined data, so check that .extras.targetNames is an array.
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
        const targetNames = meshDef.extras.targetNames;
        if (mesh.morphTargetInfluences.length === targetNames.length) {
            mesh.morphTargetDictionary = {};
            for(let i = 0, il = targetNames.length; i < il; i++)mesh.morphTargetDictionary[targetNames[i]] = i;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}
function createPrimitiveKey(primitiveDef) {
    let geometryKey;
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    if (dracoExtension) geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
    else geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
    if (primitiveDef.targets !== undefined) for(let i = 0, il = primitiveDef.targets.length; i < il; i++)geometryKey += ":" + createAttributesKey(primitiveDef.targets[i]);
    return geometryKey;
}
function createAttributesKey(attributes) {
    let attributesKey = "";
    const keys = Object.keys(attributes).sort();
    for(let i = 0, il = keys.length; i < il; i++)attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
    return attributesKey;
}
function getNormalizedComponentScale(constructor) {
    // Reference:
    // https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data
    switch(constructor){
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
}
function getImageURIMimeType(uri) {
    if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
    if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
    return "image/png";
}
const _identityMatrix = new (0, _three.Matrix4)();
/* GLTF PARSER */ class GLTFParser {
    constructor(json = {}, options = {}){
        this.json = json;
        this.extensions = {};
        this.plugins = {};
        this.options = options;
        // loader object cache
        this.cache = new GLTFRegistry();
        // associations between Three.js objects and glTF elements
        this.associations = new Map();
        // BufferGeometry caching
        this.primitiveCache = {};
        // Node cache
        this.nodeCache = {};
        // Object3D instance caches
        this.meshCache = {
            refs: {},
            uses: {}
        };
        this.cameraCache = {
            refs: {},
            uses: {}
        };
        this.lightCache = {
            refs: {},
            uses: {}
        };
        this.sourceCache = {};
        this.textureCache = {};
        // Track node names, to ensure no duplicates
        this.nodeNamesUsed = {};
        // Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
        // expensive work of uploading a texture to the GPU off the main thread.
        let isSafari = false;
        let isFirefox = false;
        let firefoxVersion = -1;
        if (typeof navigator !== "undefined") {
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
            isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
            firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
        }
        if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) this.textureLoader = new (0, _three.TextureLoader)(this.options.manager);
        else this.textureLoader = new (0, _three.ImageBitmapLoader)(this.options.manager);
        this.textureLoader.setCrossOrigin(this.options.crossOrigin);
        this.textureLoader.setRequestHeader(this.options.requestHeader);
        this.fileLoader = new (0, _three.FileLoader)(this.options.manager);
        this.fileLoader.setResponseType("arraybuffer");
        if (this.options.crossOrigin === "use-credentials") this.fileLoader.setWithCredentials(true);
    }
    setExtensions(extensions) {
        this.extensions = extensions;
    }
    setPlugins(plugins) {
        this.plugins = plugins;
    }
    parse(onLoad, onError) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        // Clear the loader cache
        this.cache.removeAll();
        this.nodeCache = {};
        // Mark the special nodes/meshes in json for efficient parse
        this._invokeAll(function(ext) {
            return ext._markDefs && ext._markDefs();
        });
        Promise.all(this._invokeAll(function(ext) {
            return ext.beforeRoot && ext.beforeRoot();
        })).then(function() {
            return Promise.all([
                parser.getDependencies("scene"),
                parser.getDependencies("animation"),
                parser.getDependencies("camera")
            ]);
        }).then(function(dependencies) {
            const result = {
                scene: dependencies[0][json.scene || 0],
                scenes: dependencies[0],
                animations: dependencies[1],
                cameras: dependencies[2],
                asset: json.asset,
                parser: parser,
                userData: {}
            };
            addUnknownExtensionsToUserData(extensions, result, json);
            assignExtrasToUserData(result, json);
            return Promise.all(parser._invokeAll(function(ext) {
                return ext.afterRoot && ext.afterRoot(result);
            })).then(function() {
                onLoad(result);
            });
        }).catch(onError);
    }
    /**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */ _markDefs() {
        const nodeDefs = this.json.nodes || [];
        const skinDefs = this.json.skins || [];
        const meshDefs = this.json.meshes || [];
        // Nothing in the node definition indicates whether it is a Bone or an
        // Object3D. Use the skins' joint references to mark bones.
        for(let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++){
            const joints = skinDefs[skinIndex].joints;
            for(let i = 0, il = joints.length; i < il; i++)nodeDefs[joints[i]].isBone = true;
        }
        // Iterate over all nodes, marking references to shared resources,
        // as well as skeleton joints.
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.mesh !== undefined) {
                this._addNodeRef(this.meshCache, nodeDef.mesh);
                // Nothing in the mesh definition indicates whether it is
                // a SkinnedMesh or Mesh. Use the node's mesh reference
                // to mark SkinnedMesh if node has skin.
                if (nodeDef.skin !== undefined) meshDefs[nodeDef.mesh].isSkinnedMesh = true;
            }
            if (nodeDef.camera !== undefined) this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
    }
    /**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */ _addNodeRef(cache, index) {
        if (index === undefined) return;
        if (cache.refs[index] === undefined) cache.refs[index] = cache.uses[index] = 0;
        cache.refs[index]++;
    }
    /** Returns a reference to a shared resource, cloning it if necessary. */ _getNodeRef(cache, index, object) {
        if (cache.refs[index] <= 1) return object;
        const ref = object.clone();
        // Propagates mappings to the cloned object, prevents mappings on the
        // original object from being lost.
        const updateMappings = (original, clone)=>{
            const mappings = this.associations.get(original);
            if (mappings != null) this.associations.set(clone, mappings);
            for (const [i, child] of original.children.entries())updateMappings(child, clone.children[i]);
        };
        updateMappings(object, ref);
        ref.name += "_instance_" + cache.uses[index]++;
        return ref;
    }
    _invokeOne(func) {
        const extensions = Object.values(this.plugins);
        extensions.push(this);
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) return result;
        }
        return null;
    }
    _invokeAll(func) {
        const extensions = Object.values(this.plugins);
        extensions.unshift(this);
        const pending = [];
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) pending.push(result);
        }
        return pending;
    }
    /**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */ getDependency(type, index) {
        const cacheKey = type + ":" + index;
        let dependency = this.cache.get(cacheKey);
        if (!dependency) {
            switch(type){
                case "scene":
                    dependency = this.loadScene(index);
                    break;
                case "node":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadNode && ext.loadNode(index);
                    });
                    break;
                case "mesh":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMesh && ext.loadMesh(index);
                    });
                    break;
                case "accessor":
                    dependency = this.loadAccessor(index);
                    break;
                case "bufferView":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadBufferView && ext.loadBufferView(index);
                    });
                    break;
                case "buffer":
                    dependency = this.loadBuffer(index);
                    break;
                case "material":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMaterial && ext.loadMaterial(index);
                    });
                    break;
                case "texture":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadTexture && ext.loadTexture(index);
                    });
                    break;
                case "skin":
                    dependency = this.loadSkin(index);
                    break;
                case "animation":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadAnimation && ext.loadAnimation(index);
                    });
                    break;
                case "camera":
                    dependency = this.loadCamera(index);
                    break;
                default:
                    dependency = this._invokeOne(function(ext) {
                        return ext != this && ext.getDependency && ext.getDependency(type, index);
                    });
                    if (!dependency) throw new Error("Unknown type: " + type);
                    break;
            }
            this.cache.add(cacheKey, dependency);
        }
        return dependency;
    }
    /**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */ getDependencies(type) {
        let dependencies = this.cache.get(type);
        if (!dependencies) {
            const parser = this;
            const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
            dependencies = Promise.all(defs.map(function(def, index) {
                return parser.getDependency(type, index);
            }));
            this.cache.add(type, dependencies);
        }
        return dependencies;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBuffer(bufferIndex) {
        const bufferDef = this.json.buffers[bufferIndex];
        const loader = this.fileLoader;
        if (bufferDef.type && bufferDef.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
        // If present, GLB container is required to be the first buffer.
        if (bufferDef.uri === undefined && bufferIndex === 0) return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
        const options = this.options;
        return new Promise(function(resolve, reject) {
            loader.load((0, _three.LoaderUtils).resolveURL(bufferDef.uri, options.path), resolve, undefined, function() {
                reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
            });
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBufferView(bufferViewIndex) {
        const bufferViewDef = this.json.bufferViews[bufferViewIndex];
        return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
            const byteLength = bufferViewDef.byteLength || 0;
            const byteOffset = bufferViewDef.byteOffset || 0;
            return buffer.slice(byteOffset, byteOffset + byteLength);
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */ loadAccessor(accessorIndex) {
        const parser = this;
        const json = this.json;
        const accessorDef = this.json.accessors[accessorIndex];
        if (accessorDef.bufferView === undefined && accessorDef.sparse === undefined) {
            const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
            const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
            const normalized = accessorDef.normalized === true;
            const array = new TypedArray(accessorDef.count * itemSize);
            return Promise.resolve(new (0, _three.BufferAttribute)(array, itemSize, normalized));
        }
        const pendingBufferViews = [];
        if (accessorDef.bufferView !== undefined) pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
        else pendingBufferViews.push(null);
        if (accessorDef.sparse !== undefined) {
            pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
            pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
        }
        return Promise.all(pendingBufferViews).then(function(bufferViews) {
            const bufferView = bufferViews[0];
            const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
            const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
            // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
            const elementBytes = TypedArray.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessorDef.byteOffset || 0;
            const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[accessorDef.bufferView].byteStride : undefined;
            const normalized = accessorDef.normalized === true;
            let array, bufferAttribute;
            // The buffer is not interleaved if the stride is the item size in bytes.
            if (byteStride && byteStride !== itemBytes) {
                // Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
                // This makes sure that IBA.count reflects accessor.count properly
                const ibSlice = Math.floor(byteOffset / byteStride);
                const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
                let ib = parser.cache.get(ibCacheKey);
                if (!ib) {
                    array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
                    // Integer parameters to IB/IBA are in array elements, not bytes.
                    ib = new (0, _three.InterleavedBuffer)(array, byteStride / elementBytes);
                    parser.cache.add(ibCacheKey, ib);
                }
                bufferAttribute = new (0, _three.InterleavedBufferAttribute)(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
            } else {
                if (bufferView === null) array = new TypedArray(accessorDef.count * itemSize);
                else array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
                bufferAttribute = new (0, _three.BufferAttribute)(array, itemSize, normalized);
            }
            // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
            if (accessorDef.sparse !== undefined) {
                const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
                const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
                const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
                const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
                const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
                const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
                if (bufferView !== null) // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
                bufferAttribute = new (0, _three.BufferAttribute)(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
                for(let i = 0, il = sparseIndices.length; i < il; i++){
                    const index = sparseIndices[i];
                    bufferAttribute.setX(index, sparseValues[i * itemSize]);
                    if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
                    if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
                    if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
                    if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return bufferAttribute;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture|null>}
	 */ loadTexture(textureIndex) {
        const json = this.json;
        const options = this.options;
        const textureDef = json.textures[textureIndex];
        const sourceIndex = textureDef.source;
        const sourceDef = json.images[sourceIndex];
        let loader = this.textureLoader;
        if (sourceDef.uri) {
            const handler = options.manager.getHandler(sourceDef.uri);
            if (handler !== null) loader = handler;
        }
        return this.loadTextureImage(textureIndex, sourceIndex, loader);
    }
    loadTextureImage(textureIndex, sourceIndex, loader) {
        const parser = this;
        const json = this.json;
        const textureDef = json.textures[textureIndex];
        const sourceDef = json.images[sourceIndex];
        const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
        if (this.textureCache[cacheKey]) // See https://github.com/mrdoob/three.js/issues/21559.
        return this.textureCache[cacheKey];
        const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
            texture.flipY = false;
            texture.name = textureDef.name || sourceDef.name || "";
            if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) texture.name = sourceDef.uri;
            const samplers = json.samplers || {};
            const sampler = samplers[textureDef.sampler] || {};
            texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || (0, _three.LinearFilter);
            texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || (0, _three.LinearMipmapLinearFilter);
            texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || (0, _three.RepeatWrapping);
            texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || (0, _three.RepeatWrapping);
            parser.associations.set(texture, {
                textures: textureIndex
            });
            return texture;
        }).catch(function() {
            return null;
        });
        this.textureCache[cacheKey] = promise;
        return promise;
    }
    loadImageSource(sourceIndex, loader) {
        const parser = this;
        const json = this.json;
        const options = this.options;
        if (this.sourceCache[sourceIndex] !== undefined) return this.sourceCache[sourceIndex].then((texture)=>texture.clone());
        const sourceDef = json.images[sourceIndex];
        const URL = self.URL || self.webkitURL;
        let sourceURI = sourceDef.uri || "";
        let isObjectURL = false;
        if (sourceDef.bufferView !== undefined) // Load binary image data from bufferView, if provided.
        sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
            isObjectURL = true;
            const blob = new Blob([
                bufferView
            ], {
                type: sourceDef.mimeType
            });
            sourceURI = URL.createObjectURL(blob);
            return sourceURI;
        });
        else if (sourceDef.uri === undefined) throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
        const promise = Promise.resolve(sourceURI).then(function(sourceURI) {
            return new Promise(function(resolve, reject) {
                let onLoad = resolve;
                if (loader.isImageBitmapLoader === true) onLoad = function(imageBitmap) {
                    const texture = new (0, _three.Texture)(imageBitmap);
                    texture.needsUpdate = true;
                    resolve(texture);
                };
                loader.load((0, _three.LoaderUtils).resolveURL(sourceURI, options.path), onLoad, undefined, reject);
            });
        }).then(function(texture) {
            // Clean up resources and configure Texture.
            if (isObjectURL === true) URL.revokeObjectURL(sourceURI);
            texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
            return texture;
        }).catch(function(error) {
            console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
            throw error;
        });
        this.sourceCache[sourceIndex] = promise;
        return promise;
    }
    /**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */ assignTexture(materialParams, mapName, mapDef, colorSpace) {
        const parser = this;
        return this.getDependency("texture", mapDef.index).then(function(texture) {
            if (!texture) return null;
            if (mapDef.texCoord !== undefined && mapDef.texCoord > 0) {
                texture = texture.clone();
                texture.channel = mapDef.texCoord;
            }
            if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
                const transform = mapDef.extensions !== undefined ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : undefined;
                if (transform) {
                    const gltfReference = parser.associations.get(texture);
                    texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
                    parser.associations.set(texture, gltfReference);
                }
            }
            if (colorSpace !== undefined) texture.colorSpace = colorSpace;
            materialParams[mapName] = texture;
            return texture;
        });
    }
    /**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */ assignFinalMaterial(mesh) {
        const geometry = mesh.geometry;
        let material = mesh.material;
        const useDerivativeTangents = geometry.attributes.tangent === undefined;
        const useVertexColors = geometry.attributes.color !== undefined;
        const useFlatShading = geometry.attributes.normal === undefined;
        if (mesh.isPoints) {
            const cacheKey = "PointsMaterial:" + material.uuid;
            let pointsMaterial = this.cache.get(cacheKey);
            if (!pointsMaterial) {
                pointsMaterial = new (0, _three.PointsMaterial)();
                (0, _three.Material).prototype.copy.call(pointsMaterial, material);
                pointsMaterial.color.copy(material.color);
                pointsMaterial.map = material.map;
                pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px
                this.cache.add(cacheKey, pointsMaterial);
            }
            material = pointsMaterial;
        } else if (mesh.isLine) {
            const cacheKey = "LineBasicMaterial:" + material.uuid;
            let lineMaterial = this.cache.get(cacheKey);
            if (!lineMaterial) {
                lineMaterial = new (0, _three.LineBasicMaterial)();
                (0, _three.Material).prototype.copy.call(lineMaterial, material);
                lineMaterial.color.copy(material.color);
                lineMaterial.map = material.map;
                this.cache.add(cacheKey, lineMaterial);
            }
            material = lineMaterial;
        }
        // Clone the material if it will be modified
        if (useDerivativeTangents || useVertexColors || useFlatShading) {
            let cacheKey = "ClonedMaterial:" + material.uuid + ":";
            if (useDerivativeTangents) cacheKey += "derivative-tangents:";
            if (useVertexColors) cacheKey += "vertex-colors:";
            if (useFlatShading) cacheKey += "flat-shading:";
            let cachedMaterial = this.cache.get(cacheKey);
            if (!cachedMaterial) {
                cachedMaterial = material.clone();
                if (useVertexColors) cachedMaterial.vertexColors = true;
                if (useFlatShading) cachedMaterial.flatShading = true;
                if (useDerivativeTangents) {
                    // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
                    if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
                    if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
                }
                this.cache.add(cacheKey, cachedMaterial);
                this.associations.set(cachedMaterial, this.associations.get(material));
            }
            material = cachedMaterial;
        }
        mesh.material = material;
    }
    getMaterialType() {
        return 0, _three.MeshStandardMaterial;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */ loadMaterial(materialIndex) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        const materialDef = json.materials[materialIndex];
        let materialType;
        const materialParams = {};
        const materialExtensions = materialDef.extensions || {};
        const pending = [];
        if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
            const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
            materialType = kmuExtension.getMaterialType();
            pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
        } else {
            // Specification:
            // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material
            const metallicRoughness = materialDef.pbrMetallicRoughness || {};
            materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
            materialParams.opacity = 1.0;
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.setRGB(array[0], array[1], array[2], (0, _three.LinearSRGBColorSpace));
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, (0, _three.SRGBColorSpace)));
            materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
            materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;
            if (metallicRoughness.metallicRoughnessTexture !== undefined) {
                pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
                pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
            }
            materialType = this._invokeOne(function(ext) {
                return ext.getMaterialType && ext.getMaterialType(materialIndex);
            });
            pending.push(Promise.all(this._invokeAll(function(ext) {
                return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
            })));
        }
        if (materialDef.doubleSided === true) materialParams.side = (0, _three.DoubleSide);
        const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
        if (alphaMode === ALPHA_MODES.BLEND) {
            materialParams.transparent = true;
            // See: https://github.com/mrdoob/three.js/issues/17706
            materialParams.depthWrite = false;
        } else {
            materialParams.transparent = false;
            if (alphaMode === ALPHA_MODES.MASK) materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;
        }
        if (materialDef.normalTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
            materialParams.normalScale = new (0, _three.Vector2)(1, 1);
            if (materialDef.normalTexture.scale !== undefined) {
                const scale = materialDef.normalTexture.scale;
                materialParams.normalScale.set(scale, scale);
            }
        }
        if (materialDef.occlusionTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
            if (materialDef.occlusionTexture.strength !== undefined) materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
        if (materialDef.emissiveFactor !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            const emissiveFactor = materialDef.emissiveFactor;
            materialParams.emissive = new (0, _three.Color)().setRGB(emissiveFactor[0], emissiveFactor[1], emissiveFactor[2], (0, _three.LinearSRGBColorSpace));
        }
        if (materialDef.emissiveTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, (0, _three.SRGBColorSpace)));
        return Promise.all(pending).then(function() {
            const material = new materialType(materialParams);
            if (materialDef.name) material.name = materialDef.name;
            assignExtrasToUserData(material, materialDef);
            parser.associations.set(material, {
                materials: materialIndex
            });
            if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
            return material;
        });
    }
    /** When Object3D instances are targeted by animation, they need unique names. */ createUniqueName(originalName) {
        const sanitizedName = (0, _three.PropertyBinding).sanitizeNodeName(originalName || "");
        if (sanitizedName in this.nodeNamesUsed) return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
        else {
            this.nodeNamesUsed[sanitizedName] = 0;
            return sanitizedName;
        }
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */ loadGeometries(primitives) {
        const parser = this;
        const extensions = this.extensions;
        const cache = this.primitiveCache;
        function createDracoPrimitive(primitive) {
            return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
                return addPrimitiveAttributes(geometry, primitive, parser);
            });
        }
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const primitive = primitives[i];
            const cacheKey = createPrimitiveKey(primitive);
            // See if we've already created this geometry
            const cached = cache[cacheKey];
            if (cached) // Use the cached geometry if it exists
            pending.push(cached.promise);
            else {
                let geometryPromise;
                if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) // Use DRACO geometry if available
                geometryPromise = createDracoPrimitive(primitive);
                else // Otherwise create a new geometry
                geometryPromise = addPrimitiveAttributes(new (0, _three.BufferGeometry)(), primitive, parser);
                // Cache this geometry
                cache[cacheKey] = {
                    primitive: primitive,
                    promise: geometryPromise
                };
                pending.push(geometryPromise);
            }
        }
        return Promise.all(pending);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */ loadMesh(meshIndex) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        const meshDef = json.meshes[meshIndex];
        const primitives = meshDef.primitives;
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const material = primitives[i].material === undefined ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
            pending.push(material);
        }
        pending.push(parser.loadGeometries(primitives));
        return Promise.all(pending).then(function(results) {
            const materials = results.slice(0, results.length - 1);
            const geometries = results[results.length - 1];
            const meshes = [];
            for(let i = 0, il = geometries.length; i < il; i++){
                const geometry = geometries[i];
                const primitive = primitives[i];
                // 1. create Mesh
                let mesh;
                const material = materials[i];
                if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === undefined) {
                    // .isSkinnedMesh isn't in glTF spec. See ._markDefs()
                    mesh = meshDef.isSkinnedMesh === true ? new (0, _three.SkinnedMesh)(geometry, material) : new (0, _three.Mesh)(geometry, material);
                    if (mesh.isSkinnedMesh === true) // normalize skin weights to fix malformed assets (see #15319)
                    mesh.normalizeSkinWeights();
                    if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) mesh.geometry = (0, _bufferGeometryUtilsJs.toTrianglesDrawMode)(mesh.geometry, (0, _three.TriangleStripDrawMode));
                    else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) mesh.geometry = (0, _bufferGeometryUtilsJs.toTrianglesDrawMode)(mesh.geometry, (0, _three.TriangleFanDrawMode));
                } else if (primitive.mode === WEBGL_CONSTANTS.LINES) mesh = new (0, _three.LineSegments)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) mesh = new (0, _three.Line)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) mesh = new (0, _three.LineLoop)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.POINTS) mesh = new (0, _three.Points)(geometry, material);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
                if (Object.keys(mesh.geometry.morphAttributes).length > 0) updateMorphTargets(mesh, meshDef);
                mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
                assignExtrasToUserData(mesh, meshDef);
                if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
                parser.assignFinalMaterial(mesh);
                meshes.push(mesh);
            }
            for(let i = 0, il = meshes.length; i < il; i++)parser.associations.set(meshes[i], {
                meshes: meshIndex,
                primitives: i
            });
            if (meshes.length === 1) {
                if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, meshes[0], meshDef);
                return meshes[0];
            }
            const group = new (0, _three.Group)();
            if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, group, meshDef);
            parser.associations.set(group, {
                meshes: meshIndex
            });
            for(let i = 0, il = meshes.length; i < il; i++)group.add(meshes[i]);
            return group;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */ loadCamera(cameraIndex) {
        let camera;
        const cameraDef = this.json.cameras[cameraIndex];
        const params = cameraDef[cameraDef.type];
        if (!params) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
        }
        if (cameraDef.type === "perspective") camera = new (0, _three.PerspectiveCamera)((0, _three.MathUtils).radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
        else if (cameraDef.type === "orthographic") camera = new (0, _three.OrthographicCamera)(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
        if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
        assignExtrasToUserData(camera, cameraDef);
        return Promise.resolve(camera);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Skeleton>}
	 */ loadSkin(skinIndex) {
        const skinDef = this.json.skins[skinIndex];
        const pending = [];
        for(let i = 0, il = skinDef.joints.length; i < il; i++)pending.push(this._loadNodeShallow(skinDef.joints[i]));
        if (skinDef.inverseBindMatrices !== undefined) pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
        else pending.push(null);
        return Promise.all(pending).then(function(results) {
            const inverseBindMatrices = results.pop();
            const jointNodes = results;
            // Note that bones (joint nodes) may or may not be in the
            // scene graph at this time.
            const bones = [];
            const boneInverses = [];
            for(let i = 0, il = jointNodes.length; i < il; i++){
                const jointNode = jointNodes[i];
                if (jointNode) {
                    bones.push(jointNode);
                    const mat = new (0, _three.Matrix4)();
                    if (inverseBindMatrices !== null) mat.fromArray(inverseBindMatrices.array, i * 16);
                    boneInverses.push(mat);
                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[i]);
            }
            return new (0, _three.Skeleton)(bones, boneInverses);
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */ loadAnimation(animationIndex) {
        const json = this.json;
        const parser = this;
        const animationDef = json.animations[animationIndex];
        const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
        const pendingNodes = [];
        const pendingInputAccessors = [];
        const pendingOutputAccessors = [];
        const pendingSamplers = [];
        const pendingTargets = [];
        for(let i = 0, il = animationDef.channels.length; i < il; i++){
            const channel = animationDef.channels[i];
            const sampler = animationDef.samplers[channel.sampler];
            const target = channel.target;
            const name = target.node;
            const input = animationDef.parameters !== undefined ? animationDef.parameters[sampler.input] : sampler.input;
            const output = animationDef.parameters !== undefined ? animationDef.parameters[sampler.output] : sampler.output;
            if (target.node === undefined) continue;
            pendingNodes.push(this.getDependency("node", name));
            pendingInputAccessors.push(this.getDependency("accessor", input));
            pendingOutputAccessors.push(this.getDependency("accessor", output));
            pendingSamplers.push(sampler);
            pendingTargets.push(target);
        }
        return Promise.all([
            Promise.all(pendingNodes),
            Promise.all(pendingInputAccessors),
            Promise.all(pendingOutputAccessors),
            Promise.all(pendingSamplers),
            Promise.all(pendingTargets)
        ]).then(function(dependencies) {
            const nodes = dependencies[0];
            const inputAccessors = dependencies[1];
            const outputAccessors = dependencies[2];
            const samplers = dependencies[3];
            const targets = dependencies[4];
            const tracks = [];
            for(let i = 0, il = nodes.length; i < il; i++){
                const node = nodes[i];
                const inputAccessor = inputAccessors[i];
                const outputAccessor = outputAccessors[i];
                const sampler = samplers[i];
                const target = targets[i];
                if (node === undefined) continue;
                if (node.updateMatrix) node.updateMatrix();
                const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
                if (createdTracks) for(let k = 0; k < createdTracks.length; k++)tracks.push(createdTracks[k]);
            }
            return new (0, _three.AnimationClip)(animationName, undefined, tracks);
        });
    }
    createNodeMesh(nodeIndex) {
        const json = this.json;
        const parser = this;
        const nodeDef = json.nodes[nodeIndex];
        if (nodeDef.mesh === undefined) return null;
        return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
            const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
            // if weights are provided on the node, override weights on the mesh.
            if (nodeDef.weights !== undefined) node.traverse(function(o) {
                if (!o.isMesh) return;
                for(let i = 0, il = nodeDef.weights.length; i < il; i++)o.morphTargetInfluences[i] = nodeDef.weights[i];
            });
            return node;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */ loadNode(nodeIndex) {
        const json = this.json;
        const parser = this;
        const nodeDef = json.nodes[nodeIndex];
        const nodePending = parser._loadNodeShallow(nodeIndex);
        const childPending = [];
        const childrenDef = nodeDef.children || [];
        for(let i = 0, il = childrenDef.length; i < il; i++)childPending.push(parser.getDependency("node", childrenDef[i]));
        const skeletonPending = nodeDef.skin === undefined ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
        return Promise.all([
            nodePending,
            Promise.all(childPending),
            skeletonPending
        ]).then(function(results) {
            const node = results[0];
            const children = results[1];
            const skeleton = results[2];
            if (skeleton !== null) // This full traverse should be fine because
            // child glTF nodes have not been added to this node yet.
            node.traverse(function(mesh) {
                if (!mesh.isSkinnedMesh) return;
                mesh.bind(skeleton, _identityMatrix);
            });
            for(let i = 0, il = children.length; i < il; i++)node.add(children[i]);
            return node;
        });
    }
    // ._loadNodeShallow() parses a single node.
    // skin and child nodes are created and added in .loadNode() (no '_' prefix).
    _loadNodeShallow(nodeIndex) {
        const json = this.json;
        const extensions = this.extensions;
        const parser = this;
        // This method is called from .loadNode() and .loadSkin().
        // Cache a node to avoid duplication.
        if (this.nodeCache[nodeIndex] !== undefined) return this.nodeCache[nodeIndex];
        const nodeDef = json.nodes[nodeIndex];
        // reserve node's name before its dependencies, so the root has the intended name.
        const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
        const pending = [];
        const meshPromise = parser._invokeOne(function(ext) {
            return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
        });
        if (meshPromise) pending.push(meshPromise);
        if (nodeDef.camera !== undefined) pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
            return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        }));
        parser._invokeAll(function(ext) {
            return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
        }).forEach(function(promise) {
            pending.push(promise);
        });
        this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
            let node;
            // .isBone isn't in glTF spec. See ._markDefs
            if (nodeDef.isBone === true) node = new (0, _three.Bone)();
            else if (objects.length > 1) node = new (0, _three.Group)();
            else if (objects.length === 1) node = objects[0];
            else node = new (0, _three.Object3D)();
            if (node !== objects[0]) for(let i = 0, il = objects.length; i < il; i++)node.add(objects[i]);
            if (nodeDef.name) {
                node.userData.name = nodeDef.name;
                node.name = nodeName;
            }
            assignExtrasToUserData(node, nodeDef);
            if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
            if (nodeDef.matrix !== undefined) {
                const matrix = new (0, _three.Matrix4)();
                matrix.fromArray(nodeDef.matrix);
                node.applyMatrix4(matrix);
            } else {
                if (nodeDef.translation !== undefined) node.position.fromArray(nodeDef.translation);
                if (nodeDef.rotation !== undefined) node.quaternion.fromArray(nodeDef.rotation);
                if (nodeDef.scale !== undefined) node.scale.fromArray(nodeDef.scale);
            }
            if (!parser.associations.has(node)) parser.associations.set(node, {});
            parser.associations.get(node).nodes = nodeIndex;
            return node;
        });
        return this.nodeCache[nodeIndex];
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */ loadScene(sceneIndex) {
        const extensions = this.extensions;
        const sceneDef = this.json.scenes[sceneIndex];
        const parser = this;
        // Loader returns Group, not Scene.
        // See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
        const scene = new (0, _three.Group)();
        if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
        assignExtrasToUserData(scene, sceneDef);
        if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
        const nodeIds = sceneDef.nodes || [];
        const pending = [];
        for(let i = 0, il = nodeIds.length; i < il; i++)pending.push(parser.getDependency("node", nodeIds[i]));
        return Promise.all(pending).then(function(nodes) {
            for(let i = 0, il = nodes.length; i < il; i++)scene.add(nodes[i]);
            // Removes dangling associations, associations that reference a node that
            // didn't make it into the scene.
            const reduceAssociations = (node)=>{
                const reducedAssociations = new Map();
                for (const [key, value] of parser.associations)if (key instanceof (0, _three.Material) || key instanceof (0, _three.Texture)) reducedAssociations.set(key, value);
                node.traverse((node)=>{
                    const mappings = parser.associations.get(node);
                    if (mappings != null) reducedAssociations.set(node, mappings);
                });
                return reducedAssociations;
            };
            parser.associations = reduceAssociations(scene);
            return scene;
        });
    }
    _createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
        const tracks = [];
        const targetName = node.name ? node.name : node.uuid;
        const targetNames = [];
        if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) node.traverse(function(object) {
            if (object.morphTargetInfluences) targetNames.push(object.name ? object.name : object.uuid);
        });
        else targetNames.push(targetName);
        let TypedKeyframeTrack;
        switch(PATH_PROPERTIES[target.path]){
            case PATH_PROPERTIES.weights:
                TypedKeyframeTrack = (0, _three.NumberKeyframeTrack);
                break;
            case PATH_PROPERTIES.rotation:
                TypedKeyframeTrack = (0, _three.QuaternionKeyframeTrack);
                break;
            case PATH_PROPERTIES.position:
            case PATH_PROPERTIES.scale:
                TypedKeyframeTrack = (0, _three.VectorKeyframeTrack);
                break;
            default:
                switch(outputAccessor.itemSize){
                    case 1:
                        TypedKeyframeTrack = (0, _three.NumberKeyframeTrack);
                        break;
                    case 2:
                    case 3:
                    default:
                        TypedKeyframeTrack = (0, _three.VectorKeyframeTrack);
                        break;
                }
                break;
        }
        const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : (0, _three.InterpolateLinear);
        const outputArray = this._getArrayFromAccessor(outputAccessor);
        for(let j = 0, jl = targetNames.length; j < jl; j++){
            const track = new TypedKeyframeTrack(targetNames[j] + "." + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation);
            // Override interpolation with custom factory method.
            if (sampler.interpolation === "CUBICSPLINE") this._createCubicSplineTrackInterpolant(track);
            tracks.push(track);
        }
        return tracks;
    }
    _getArrayFromAccessor(accessor) {
        let outputArray = accessor.array;
        if (accessor.normalized) {
            const scale = getNormalizedComponentScale(outputArray.constructor);
            const scaled = new Float32Array(outputArray.length);
            for(let j = 0, jl = outputArray.length; j < jl; j++)scaled[j] = outputArray[j] * scale;
            outputArray = scaled;
        }
        return outputArray;
    }
    _createCubicSplineTrackInterpolant(track) {
        track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
            // A CUBICSPLINE keyframe in glTF has three output values for each input value,
            // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
            // must be divided by three to get the interpolant's sampleSize argument.
            const interpolantType = this instanceof (0, _three.QuaternionKeyframeTrack) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
            return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
        };
        // Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
        track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */ function computeBounds(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const box = new (0, _three.Box3)();
    if (attributes.POSITION !== undefined) {
        const accessor = parser.json.accessors[attributes.POSITION];
        const min = accessor.min;
        const max = accessor.max;
        // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
        if (min !== undefined && max !== undefined) {
            box.set(new (0, _three.Vector3)(min[0], min[1], min[2]), new (0, _three.Vector3)(max[0], max[1], max[2]));
            if (accessor.normalized) {
                const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                box.min.multiplyScalar(boxScale);
                box.max.multiplyScalar(boxScale);
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return;
        }
    } else return;
    const targets = primitiveDef.targets;
    if (targets !== undefined) {
        const maxDisplacement = new (0, _three.Vector3)();
        const vector = new (0, _three.Vector3)();
        for(let i = 0, il = targets.length; i < il; i++){
            const target = targets[i];
            if (target.POSITION !== undefined) {
                const accessor = parser.json.accessors[target.POSITION];
                const min = accessor.min;
                const max = accessor.max;
                // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
                if (min !== undefined && max !== undefined) {
                    // we need to get max of absolute components because target weight is [-1,1]
                    vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
                    vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
                    vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
                    if (accessor.normalized) {
                        const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                        vector.multiplyScalar(boxScale);
                    }
                    // Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
                    // to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
                    // are used to implement key-frame animations and as such only two are active at a time - this results in very large
                    // boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
                    maxDisplacement.max(vector);
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            }
        }
        // As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
        box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new (0, _three.Sphere)();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
        return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
            geometry.setAttribute(attributeName, accessor);
        });
    }
    for(const gltfAttributeName in attributes){
        const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
        // Skip attributes already provided by e.g. Draco extension.
        if (threeAttributeName in geometry.attributes) continue;
        pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== undefined && !geometry.index) {
        const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor) {
            geometry.setIndex(accessor);
        });
        pending.push(accessor);
    }
    if ((0, _three.ColorManagement).workingColorSpace !== (0, _three.LinearSRGBColorSpace) && "COLOR_0" in attributes) console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${(0, _three.ColorManagement).workingColorSpace}" not supported.`);
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function() {
        return primitiveDef.targets !== undefined ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
}

},{"three":"ktPTu","../utils/BufferGeometryUtils.js":"5o7x9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5o7x9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {BufferAttribute}
 * @return {BufferAttribute}
 */ parcelHelpers.export(exports, "deepCloneAttribute", ()=>deepCloneAttribute);
// returns a new, non-interleaved version of the provided attribute
parcelHelpers.export(exports, "deinterleaveAttribute", ()=>deinterleaveAttribute);
// deinterleaves all attributes on the geometry
parcelHelpers.export(exports, "deinterleaveGeometry", ()=>deinterleaveGeometry);
parcelHelpers.export(exports, "computeMikkTSpaceTangents", ()=>computeMikkTSpaceTangents);
parcelHelpers.export(exports, "mergeGeometries", ()=>mergeGeometries);
parcelHelpers.export(exports, "mergeBufferGeometries", ()=>mergeBufferGeometries);
parcelHelpers.export(exports, "mergeAttributes", ()=>mergeAttributes);
parcelHelpers.export(exports, "mergeBufferAttributes", ()=>mergeBufferAttributes);
parcelHelpers.export(exports, "interleaveAttributes", ()=>interleaveAttributes);
parcelHelpers.export(exports, "estimateBytesUsed", ()=>estimateBytesUsed);
parcelHelpers.export(exports, "mergeVertices", ()=>mergeVertices);
parcelHelpers.export(exports, "toTrianglesDrawMode", ()=>toTrianglesDrawMode);
parcelHelpers.export(exports, "computeMorphedAttributes", ()=>computeMorphedAttributes);
parcelHelpers.export(exports, "mergeGroups", ()=>mergeGroups);
parcelHelpers.export(exports, "toCreasedNormals", ()=>toCreasedNormals);
var _three = require("three");
function computeMikkTSpaceTangents(geometry, MikkTSpace, negateSign = true) {
    if (!MikkTSpace || !MikkTSpace.isReady) throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");
    if (!geometry.hasAttribute("position") || !geometry.hasAttribute("normal") || !geometry.hasAttribute("uv")) throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');
    function getAttributeArray(attribute) {
        if (attribute.normalized || attribute.isInterleavedBufferAttribute) {
            const dstArray = new Float32Array(attribute.count * attribute.itemSize);
            for(let i = 0, j = 0; i < attribute.count; i++){
                dstArray[j++] = attribute.getX(i);
                dstArray[j++] = attribute.getY(i);
                if (attribute.itemSize > 2) dstArray[j++] = attribute.getZ(i);
            }
            return dstArray;
        }
        if (attribute.array instanceof Float32Array) return attribute.array;
        return new Float32Array(attribute.array);
    }
    // MikkTSpace algorithm requires non-indexed input.
    const _geometry = geometry.index ? geometry.toNonIndexed() : geometry;
    // Compute vertex tangents.
    const tangents = MikkTSpace.generateTangents(getAttributeArray(_geometry.attributes.position), getAttributeArray(_geometry.attributes.normal), getAttributeArray(_geometry.attributes.uv));
    // Texture coordinate convention of glTF differs from the apparent
    // default of the MikkTSpace library; .w component must be flipped.
    if (negateSign) for(let i = 3; i < tangents.length; i += 4)tangents[i] *= -1;
    //
    _geometry.setAttribute("tangent", new (0, _three.BufferAttribute)(tangents, 4));
    if (geometry !== _geometry) geometry.copy(_geometry);
    return geometry;
}
/**
 * @param  {Array<BufferGeometry>} geometries
 * @param  {Boolean} useGroups
 * @return {BufferGeometry}
 */ function mergeGeometries(geometries, useGroups = false) {
    const isIndexed = geometries[0].index !== null;
    const attributesUsed = new Set(Object.keys(geometries[0].attributes));
    const morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes));
    const attributes = {};
    const morphAttributes = {};
    const morphTargetsRelative = geometries[0].morphTargetsRelative;
    const mergedGeometry = new (0, _three.BufferGeometry)();
    let offset = 0;
    for(let i = 0; i < geometries.length; ++i){
        const geometry = geometries[i];
        let attributesCount = 0;
        // ensure that all geometries are indexed, or none
        if (isIndexed !== (geometry.index !== null)) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");
            return null;
        }
        // gather attributes, exit early if they're different
        for(const name in geometry.attributes){
            if (!attributesUsed.has(name)) {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.');
                return null;
            }
            if (attributes[name] === undefined) attributes[name] = [];
            attributes[name].push(geometry.attributes[name]);
            attributesCount++;
        }
        // ensure geometries have the same number of attributes
        if (attributesCount !== attributesUsed.size) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". Make sure all geometries have the same number of attributes.");
            return null;
        }
        // gather morph attributes, exit early if they're different
        if (morphTargetsRelative !== geometry.morphTargetsRelative) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". .morphTargetsRelative must be consistent throughout all geometries.");
            return null;
        }
        for(const name in geometry.morphAttributes){
            if (!morphAttributesUsed.has(name)) {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ".  .morphAttributes must be consistent throughout all geometries.");
                return null;
            }
            if (morphAttributes[name] === undefined) morphAttributes[name] = [];
            morphAttributes[name].push(geometry.morphAttributes[name]);
        }
        if (useGroups) {
            let count;
            if (isIndexed) count = geometry.index.count;
            else if (geometry.attributes.position !== undefined) count = geometry.attributes.position.count;
            else {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". The geometry must have either an index or a position attribute");
                return null;
            }
            mergedGeometry.addGroup(offset, count, i);
            offset += count;
        }
    }
    // merge indices
    if (isIndexed) {
        let indexOffset = 0;
        const mergedIndex = [];
        for(let i = 0; i < geometries.length; ++i){
            const index = geometries[i].index;
            for(let j = 0; j < index.count; ++j)mergedIndex.push(index.getX(j) + indexOffset);
            indexOffset += geometries[i].attributes.position.count;
        }
        mergedGeometry.setIndex(mergedIndex);
    }
    // merge attributes
    for(const name in attributes){
        const mergedAttribute = mergeAttributes(attributes[name]);
        if (!mergedAttribute) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + name + " attribute.");
            return null;
        }
        mergedGeometry.setAttribute(name, mergedAttribute);
    }
    // merge morph attributes
    for(const name in morphAttributes){
        const numMorphTargets = morphAttributes[name][0].length;
        if (numMorphTargets === 0) break;
        mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
        mergedGeometry.morphAttributes[name] = [];
        for(let i = 0; i < numMorphTargets; ++i){
            const morphAttributesToMerge = [];
            for(let j = 0; j < morphAttributes[name].length; ++j)morphAttributesToMerge.push(morphAttributes[name][j][i]);
            const mergedMorphAttribute = mergeAttributes(morphAttributesToMerge);
            if (!mergedMorphAttribute) {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + name + " morphAttribute.");
                return null;
            }
            mergedGeometry.morphAttributes[name].push(mergedMorphAttribute);
        }
    }
    return mergedGeometry;
}
/**
 * @param {Array<BufferAttribute>} attributes
 * @return {BufferAttribute}
 */ function mergeAttributes(attributes) {
    let TypedArray;
    let itemSize;
    let normalized;
    let gpuType = -1;
    let arrayLength = 0;
    for(let i = 0; i < attributes.length; ++i){
        const attribute = attributes[i];
        if (attribute.isInterleavedBufferAttribute) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.");
            return null;
        }
        if (TypedArray === undefined) TypedArray = attribute.array.constructor;
        if (TypedArray !== attribute.array.constructor) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.");
            return null;
        }
        if (itemSize === undefined) itemSize = attribute.itemSize;
        if (itemSize !== attribute.itemSize) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.");
            return null;
        }
        if (normalized === undefined) normalized = attribute.normalized;
        if (normalized !== attribute.normalized) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.");
            return null;
        }
        if (gpuType === -1) gpuType = attribute.gpuType;
        if (gpuType !== attribute.gpuType) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.");
            return null;
        }
        arrayLength += attribute.array.length;
    }
    const array = new TypedArray(arrayLength);
    let offset = 0;
    for(let i = 0; i < attributes.length; ++i){
        array.set(attributes[i].array, offset);
        offset += attributes[i].array.length;
    }
    const result = new (0, _three.BufferAttribute)(array, itemSize, normalized);
    if (gpuType !== undefined) result.gpuType = gpuType;
    return result;
}
function deepCloneAttribute(attribute) {
    if (attribute.isInstancedInterleavedBufferAttribute || attribute.isInterleavedBufferAttribute) return deinterleaveAttribute(attribute);
    if (attribute.isInstancedBufferAttribute) return new (0, _three.InstancedBufferAttribute)().copy(attribute);
    return new (0, _three.BufferAttribute)().copy(attribute);
}
/**
 * @param {Array<BufferAttribute>} attributes
 * @return {Array<InterleavedBufferAttribute>}
 */ function interleaveAttributes(attributes) {
    // Interleaves the provided attributes into an InterleavedBuffer and returns
    // a set of InterleavedBufferAttributes for each attribute
    let TypedArray;
    let arrayLength = 0;
    let stride = 0;
    // calculate the length and type of the interleavedBuffer
    for(let i = 0, l = attributes.length; i < l; ++i){
        const attribute = attributes[i];
        if (TypedArray === undefined) TypedArray = attribute.array.constructor;
        if (TypedArray !== attribute.array.constructor) {
            console.error("AttributeBuffers of different types cannot be interleaved");
            return null;
        }
        arrayLength += attribute.array.length;
        stride += attribute.itemSize;
    }
    // Create the set of buffer attributes
    const interleavedBuffer = new (0, _three.InterleavedBuffer)(new TypedArray(arrayLength), stride);
    let offset = 0;
    const res = [];
    const getters = [
        "getX",
        "getY",
        "getZ",
        "getW"
    ];
    const setters = [
        "setX",
        "setY",
        "setZ",
        "setW"
    ];
    for(let j = 0, l = attributes.length; j < l; j++){
        const attribute = attributes[j];
        const itemSize = attribute.itemSize;
        const count = attribute.count;
        const iba = new (0, _three.InterleavedBufferAttribute)(interleavedBuffer, itemSize, offset, attribute.normalized);
        res.push(iba);
        offset += itemSize;
        // Move the data for each attribute into the new interleavedBuffer
        // at the appropriate offset
        for(let c = 0; c < count; c++)for(let k = 0; k < itemSize; k++)iba[setters[k]](c, attribute[getters[k]](c));
    }
    return res;
}
function deinterleaveAttribute(attribute) {
    const cons = attribute.data.array.constructor;
    const count = attribute.count;
    const itemSize = attribute.itemSize;
    const normalized = attribute.normalized;
    const array = new cons(count * itemSize);
    let newAttribute;
    if (attribute.isInstancedInterleavedBufferAttribute) newAttribute = new (0, _three.InstancedBufferAttribute)(array, itemSize, normalized, attribute.meshPerAttribute);
    else newAttribute = new (0, _three.BufferAttribute)(array, itemSize, normalized);
    for(let i = 0; i < count; i++){
        newAttribute.setX(i, attribute.getX(i));
        if (itemSize >= 2) newAttribute.setY(i, attribute.getY(i));
        if (itemSize >= 3) newAttribute.setZ(i, attribute.getZ(i));
        if (itemSize >= 4) newAttribute.setW(i, attribute.getW(i));
    }
    return newAttribute;
}
function deinterleaveGeometry(geometry) {
    const attributes = geometry.attributes;
    const morphTargets = geometry.morphTargets;
    const attrMap = new Map();
    for(const key in attributes){
        const attr = attributes[key];
        if (attr.isInterleavedBufferAttribute) {
            if (!attrMap.has(attr)) attrMap.set(attr, deinterleaveAttribute(attr));
            attributes[key] = attrMap.get(attr);
        }
    }
    for(const key in morphTargets){
        const attr = morphTargets[key];
        if (attr.isInterleavedBufferAttribute) {
            if (!attrMap.has(attr)) attrMap.set(attr, deinterleaveAttribute(attr));
            morphTargets[key] = attrMap.get(attr);
        }
    }
}
/**
 * @param {BufferGeometry} geometry
 * @return {number}
 */ function estimateBytesUsed(geometry) {
    // Return the estimated memory used by this geometry in bytes
    // Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
    // for InterleavedBufferAttributes.
    let mem = 0;
    for(const name in geometry.attributes){
        const attr = geometry.getAttribute(name);
        mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;
    }
    const indices = geometry.getIndex();
    mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
    return mem;
}
/**
 * @param {BufferGeometry} geometry
 * @param {number} tolerance
 * @return {BufferGeometry}
 */ function mergeVertices(geometry, tolerance = 1e-4) {
    tolerance = Math.max(tolerance, Number.EPSILON);
    // Generate an index buffer if the geometry doesn't have one, or optimize it
    // if it's already available.
    const hashToIndex = {};
    const indices = geometry.getIndex();
    const positions = geometry.getAttribute("position");
    const vertexCount = indices ? indices.count : positions.count;
    // next value for triangle indices
    let nextIndex = 0;
    // attributes and new attribute arrays
    const attributeNames = Object.keys(geometry.attributes);
    const tmpAttributes = {};
    const tmpMorphAttributes = {};
    const newIndices = [];
    const getters = [
        "getX",
        "getY",
        "getZ",
        "getW"
    ];
    const setters = [
        "setX",
        "setY",
        "setZ",
        "setW"
    ];
    // Initialize the arrays, allocating space conservatively. Extra
    // space will be trimmed in the last step.
    for(let i = 0, l = attributeNames.length; i < l; i++){
        const name = attributeNames[i];
        const attr = geometry.attributes[name];
        tmpAttributes[name] = new (0, _three.BufferAttribute)(new attr.array.constructor(attr.count * attr.itemSize), attr.itemSize, attr.normalized);
        const morphAttr = geometry.morphAttributes[name];
        if (morphAttr) tmpMorphAttributes[name] = new (0, _three.BufferAttribute)(new morphAttr.array.constructor(morphAttr.count * morphAttr.itemSize), morphAttr.itemSize, morphAttr.normalized);
    }
    // convert the error tolerance to an amount of decimal places to truncate to
    const halfTolerance = tolerance * 0.5;
    const exponent = Math.log10(1 / tolerance);
    const hashMultiplier = Math.pow(10, exponent);
    const hashAdditive = halfTolerance * hashMultiplier;
    for(let i = 0; i < vertexCount; i++){
        const index = indices ? indices.getX(i) : i;
        // Generate a hash for the vertex attributes at the current index 'i'
        let hash = "";
        for(let j = 0, l = attributeNames.length; j < l; j++){
            const name = attributeNames[j];
            const attribute = geometry.getAttribute(name);
            const itemSize = attribute.itemSize;
            for(let k = 0; k < itemSize; k++)// double tilde truncates the decimal value
            hash += `${~~(attribute[getters[k]](index) * hashMultiplier + hashAdditive)},`;
        }
        // Add another reference to the vertex if it's already
        // used by another index
        if (hash in hashToIndex) newIndices.push(hashToIndex[hash]);
        else {
            // copy data to the new index in the temporary attributes
            for(let j = 0, l = attributeNames.length; j < l; j++){
                const name = attributeNames[j];
                const attribute = geometry.getAttribute(name);
                const morphAttr = geometry.morphAttributes[name];
                const itemSize = attribute.itemSize;
                const newarray = tmpAttributes[name];
                const newMorphArrays = tmpMorphAttributes[name];
                for(let k = 0; k < itemSize; k++){
                    const getterFunc = getters[k];
                    const setterFunc = setters[k];
                    newarray[setterFunc](nextIndex, attribute[getterFunc](index));
                    if (morphAttr) for(let m = 0, ml = morphAttr.length; m < ml; m++)newMorphArrays[m][setterFunc](nextIndex, morphAttr[m][getterFunc](index));
                }
            }
            hashToIndex[hash] = nextIndex;
            newIndices.push(nextIndex);
            nextIndex++;
        }
    }
    // generate result BufferGeometry
    const result = geometry.clone();
    for(const name in geometry.attributes){
        const tmpAttribute = tmpAttributes[name];
        result.setAttribute(name, new (0, _three.BufferAttribute)(tmpAttribute.array.slice(0, nextIndex * tmpAttribute.itemSize), tmpAttribute.itemSize, tmpAttribute.normalized));
        if (!(name in tmpMorphAttributes)) continue;
        for(let j = 0; j < tmpMorphAttributes[name].length; j++){
            const tmpMorphAttribute = tmpMorphAttributes[name][j];
            result.morphAttributes[name][j] = new (0, _three.BufferAttribute)(tmpMorphAttribute.array.slice(0, nextIndex * tmpMorphAttribute.itemSize), tmpMorphAttribute.itemSize, tmpMorphAttribute.normalized);
        }
    }
    // indices
    result.setIndex(newIndices);
    return result;
}
/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry}
 */ function toTrianglesDrawMode(geometry, drawMode) {
    if (drawMode === (0, _three.TrianglesDrawMode)) {
        console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
        return geometry;
    }
    if (drawMode === (0, _three.TriangleFanDrawMode) || drawMode === (0, _three.TriangleStripDrawMode)) {
        let index = geometry.getIndex();
        // generate index if not present
        if (index === null) {
            const indices = [];
            const position = geometry.getAttribute("position");
            if (position !== undefined) {
                for(let i = 0; i < position.count; i++)indices.push(i);
                geometry.setIndex(indices);
                index = geometry.getIndex();
            } else {
                console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
                return geometry;
            }
        }
        //
        const numberOfTriangles = index.count - 2;
        const newIndices = [];
        if (drawMode === (0, _three.TriangleFanDrawMode)) // gl.TRIANGLE_FAN
        for(let i = 1; i <= numberOfTriangles; i++){
            newIndices.push(index.getX(0));
            newIndices.push(index.getX(i));
            newIndices.push(index.getX(i + 1));
        }
        else {
            // gl.TRIANGLE_STRIP
            for(let i = 0; i < numberOfTriangles; i++)if (i % 2 === 0) {
                newIndices.push(index.getX(i));
                newIndices.push(index.getX(i + 1));
                newIndices.push(index.getX(i + 2));
            } else {
                newIndices.push(index.getX(i + 2));
                newIndices.push(index.getX(i + 1));
                newIndices.push(index.getX(i));
            }
        }
        if (newIndices.length / 3 !== numberOfTriangles) console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        // build final geometry
        const newGeometry = geometry.clone();
        newGeometry.setIndex(newIndices);
        newGeometry.clearGroups();
        return newGeometry;
    } else {
        console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
        return geometry;
    }
}
/**
 * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
 * Helpful for Raytracing or Decals.
 * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
 * @return {Object} An Object with original position/normal attributes and morphed ones.
 */ function computeMorphedAttributes(object) {
    const _vA = new (0, _three.Vector3)();
    const _vB = new (0, _three.Vector3)();
    const _vC = new (0, _three.Vector3)();
    const _tempA = new (0, _three.Vector3)();
    const _tempB = new (0, _three.Vector3)();
    const _tempC = new (0, _three.Vector3)();
    const _morphA = new (0, _three.Vector3)();
    const _morphB = new (0, _three.Vector3)();
    const _morphC = new (0, _three.Vector3)();
    function _calculateMorphedAttributeData(object, attribute, morphAttribute, morphTargetsRelative, a, b, c, modifiedAttributeArray) {
        _vA.fromBufferAttribute(attribute, a);
        _vB.fromBufferAttribute(attribute, b);
        _vC.fromBufferAttribute(attribute, c);
        const morphInfluences = object.morphTargetInfluences;
        if (morphAttribute && morphInfluences) {
            _morphA.set(0, 0, 0);
            _morphB.set(0, 0, 0);
            _morphC.set(0, 0, 0);
            for(let i = 0, il = morphAttribute.length; i < il; i++){
                const influence = morphInfluences[i];
                const morph = morphAttribute[i];
                if (influence === 0) continue;
                _tempA.fromBufferAttribute(morph, a);
                _tempB.fromBufferAttribute(morph, b);
                _tempC.fromBufferAttribute(morph, c);
                if (morphTargetsRelative) {
                    _morphA.addScaledVector(_tempA, influence);
                    _morphB.addScaledVector(_tempB, influence);
                    _morphC.addScaledVector(_tempC, influence);
                } else {
                    _morphA.addScaledVector(_tempA.sub(_vA), influence);
                    _morphB.addScaledVector(_tempB.sub(_vB), influence);
                    _morphC.addScaledVector(_tempC.sub(_vC), influence);
                }
            }
            _vA.add(_morphA);
            _vB.add(_morphB);
            _vC.add(_morphC);
        }
        if (object.isSkinnedMesh) {
            object.applyBoneTransform(a, _vA);
            object.applyBoneTransform(b, _vB);
            object.applyBoneTransform(c, _vC);
        }
        modifiedAttributeArray[a * 3 + 0] = _vA.x;
        modifiedAttributeArray[a * 3 + 1] = _vA.y;
        modifiedAttributeArray[a * 3 + 2] = _vA.z;
        modifiedAttributeArray[b * 3 + 0] = _vB.x;
        modifiedAttributeArray[b * 3 + 1] = _vB.y;
        modifiedAttributeArray[b * 3 + 2] = _vB.z;
        modifiedAttributeArray[c * 3 + 0] = _vC.x;
        modifiedAttributeArray[c * 3 + 1] = _vC.y;
        modifiedAttributeArray[c * 3 + 2] = _vC.z;
    }
    const geometry = object.geometry;
    const material = object.material;
    let a, b, c;
    const index = geometry.index;
    const positionAttribute = geometry.attributes.position;
    const morphPosition = geometry.morphAttributes.position;
    const morphTargetsRelative = geometry.morphTargetsRelative;
    const normalAttribute = geometry.attributes.normal;
    const morphNormal = geometry.morphAttributes.position;
    const groups = geometry.groups;
    const drawRange = geometry.drawRange;
    let i, j, il, jl;
    let group;
    let start, end;
    const modifiedPosition = new Float32Array(positionAttribute.count * positionAttribute.itemSize);
    const modifiedNormal = new Float32Array(normalAttribute.count * normalAttribute.itemSize);
    if (index !== null) {
        // indexed buffer geometry
        if (Array.isArray(material)) for(i = 0, il = groups.length; i < il; i++){
            group = groups[i];
            start = Math.max(group.start, drawRange.start);
            end = Math.min(group.start + group.count, drawRange.start + drawRange.count);
            for(j = start, jl = end; j < jl; j += 3){
                a = index.getX(j);
                b = index.getX(j + 1);
                c = index.getX(j + 2);
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
        else {
            start = Math.max(0, drawRange.start);
            end = Math.min(index.count, drawRange.start + drawRange.count);
            for(i = start, il = end; i < il; i += 3){
                a = index.getX(i);
                b = index.getX(i + 1);
                c = index.getX(i + 2);
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
    } else {
        // non-indexed buffer geometry
        if (Array.isArray(material)) for(i = 0, il = groups.length; i < il; i++){
            group = groups[i];
            start = Math.max(group.start, drawRange.start);
            end = Math.min(group.start + group.count, drawRange.start + drawRange.count);
            for(j = start, jl = end; j < jl; j += 3){
                a = j;
                b = j + 1;
                c = j + 2;
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
        else {
            start = Math.max(0, drawRange.start);
            end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
            for(i = start, il = end; i < il; i += 3){
                a = i;
                b = i + 1;
                c = i + 2;
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
    }
    const morphedPositionAttribute = new (0, _three.Float32BufferAttribute)(modifiedPosition, 3);
    const morphedNormalAttribute = new (0, _three.Float32BufferAttribute)(modifiedNormal, 3);
    return {
        positionAttribute: positionAttribute,
        normalAttribute: normalAttribute,
        morphedPositionAttribute: morphedPositionAttribute,
        morphedNormalAttribute: morphedNormalAttribute
    };
}
function mergeGroups(geometry) {
    if (geometry.groups.length === 0) {
        console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge.");
        return geometry;
    }
    let groups = geometry.groups;
    // sort groups by material index
    groups = groups.sort((a, b)=>{
        if (a.materialIndex !== b.materialIndex) return a.materialIndex - b.materialIndex;
        return a.start - b.start;
    });
    // create index for non-indexed geometries
    if (geometry.getIndex() === null) {
        const positionAttribute = geometry.getAttribute("position");
        const indices = [];
        for(let i = 0; i < positionAttribute.count; i += 3)indices.push(i, i + 1, i + 2);
        geometry.setIndex(indices);
    }
    // sort index
    const index = geometry.getIndex();
    const newIndices = [];
    for(let i = 0; i < groups.length; i++){
        const group = groups[i];
        const groupStart = group.start;
        const groupLength = groupStart + group.count;
        for(let j = groupStart; j < groupLength; j++)newIndices.push(index.getX(j));
    }
    geometry.dispose(); // Required to force buffer recreation
    geometry.setIndex(newIndices);
    // update groups indices
    let start = 0;
    for(let i = 0; i < groups.length; i++){
        const group = groups[i];
        group.start = start;
        start += group.count;
    }
    // merge groups
    let currentGroup = groups[0];
    geometry.groups = [
        currentGroup
    ];
    for(let i = 1; i < groups.length; i++){
        const group = groups[i];
        if (currentGroup.materialIndex === group.materialIndex) currentGroup.count += group.count;
        else {
            currentGroup = group;
            geometry.groups.push(currentGroup);
        }
    }
    return geometry;
}
/**
 * Modifies the supplied geometry if it is non-indexed, otherwise creates a new,
 * non-indexed geometry. Returns the geometry with smooth normals everywhere except
 * faces that meet at an angle greater than the crease angle.
 *
 * @param {BufferGeometry} geometry
 * @param {number} [creaseAngle]
 * @return {BufferGeometry}
 */ function toCreasedNormals(geometry, creaseAngle = Math.PI / 3 /* 60 degrees */ ) {
    const creaseDot = Math.cos(creaseAngle);
    const hashMultiplier = (1 + 1e-10) * 1e2;
    // reusable vectors
    const verts = [
        new (0, _three.Vector3)(),
        new (0, _three.Vector3)(),
        new (0, _three.Vector3)()
    ];
    const tempVec1 = new (0, _three.Vector3)();
    const tempVec2 = new (0, _three.Vector3)();
    const tempNorm = new (0, _three.Vector3)();
    const tempNorm2 = new (0, _three.Vector3)();
    // hashes a vector
    function hashVertex(v) {
        const x = ~~(v.x * hashMultiplier);
        const y = ~~(v.y * hashMultiplier);
        const z = ~~(v.z * hashMultiplier);
        return `${x},${y},${z}`;
    }
    // BufferGeometry.toNonIndexed() warns if the geometry is non-indexed
    // and returns the original geometry
    const resultGeometry = geometry.index ? geometry.toNonIndexed() : geometry;
    const posAttr = resultGeometry.attributes.position;
    const vertexMap = {};
    // find all the normals shared by commonly located vertices
    for(let i = 0, l = posAttr.count / 3; i < l; i++){
        const i3 = 3 * i;
        const a = verts[0].fromBufferAttribute(posAttr, i3 + 0);
        const b = verts[1].fromBufferAttribute(posAttr, i3 + 1);
        const c = verts[2].fromBufferAttribute(posAttr, i3 + 2);
        tempVec1.subVectors(c, b);
        tempVec2.subVectors(a, b);
        // add the normal to the map for all vertices
        const normal = new (0, _three.Vector3)().crossVectors(tempVec1, tempVec2).normalize();
        for(let n = 0; n < 3; n++){
            const vert = verts[n];
            const hash = hashVertex(vert);
            if (!(hash in vertexMap)) vertexMap[hash] = [];
            vertexMap[hash].push(normal);
        }
    }
    // average normals from all vertices that share a common location if they are within the
    // provided crease threshold
    const normalArray = new Float32Array(posAttr.count * 3);
    const normAttr = new (0, _three.BufferAttribute)(normalArray, 3, false);
    for(let i = 0, l = posAttr.count / 3; i < l; i++){
        // get the face normal for this vertex
        const i3 = 3 * i;
        const a = verts[0].fromBufferAttribute(posAttr, i3 + 0);
        const b = verts[1].fromBufferAttribute(posAttr, i3 + 1);
        const c = verts[2].fromBufferAttribute(posAttr, i3 + 2);
        tempVec1.subVectors(c, b);
        tempVec2.subVectors(a, b);
        tempNorm.crossVectors(tempVec1, tempVec2).normalize();
        // average all normals that meet the threshold and set the normal value
        for(let n = 0; n < 3; n++){
            const vert = verts[n];
            const hash = hashVertex(vert);
            const otherNormals = vertexMap[hash];
            tempNorm2.set(0, 0, 0);
            for(let k = 0, lk = otherNormals.length; k < lk; k++){
                const otherNorm = otherNormals[k];
                if (tempNorm.dot(otherNorm) > creaseDot) tempNorm2.add(otherNorm);
            }
            tempNorm2.normalize();
            normAttr.setXYZ(i3 + n, tempNorm2.x, tempNorm2.y, tempNorm2.z);
        }
    }
    resultGeometry.setAttribute("normal", normAttr);
    return resultGeometry;
}
function mergeBufferGeometries(geometries, useGroups = false) {
    console.warn("THREE.BufferGeometryUtils: mergeBufferGeometries() has been renamed to mergeGeometries()."); // @deprecated, r151
    return mergeGeometries(geometries, useGroups);
}
function mergeBufferAttributes(attributes) {
    console.warn("THREE.BufferGeometryUtils: mergeBufferAttributes() has been renamed to mergeAttributes()."); // @deprecated, r151
    return mergeAttributes(attributes);
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHSVc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
class RapierDebugRenderer {
    constructor(scene, world){
        this.enabled = true;
        this.world = world;
        this.mesh = new (0, _three.LineSegments)(new (0, _three.BufferGeometry)(), new (0, _three.LineBasicMaterial)({
            color: 0xffffff,
            vertexColors: true
        }));
        this.mesh.frustumCulled = false;
        scene.add(this.mesh);
    }
    update() {
        if (this.enabled) {
            const { vertices, colors } = this.world.debugRender();
            this.mesh.geometry.setAttribute("position", new (0, _three.BufferAttribute)(vertices, 3));
            this.mesh.geometry.setAttribute("color", new (0, _three.BufferAttribute)(colors, 4));
            this.mesh.visible = true;
        } else this.mesh.visible = false;
    }
}
exports.default = RapierDebugRenderer;

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ea5wt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateCollisionId", ()=>generateCollisionId);
parcelHelpers.export(exports, "initBasicScene", ()=>initBasicScene);
var _rapier3DCompat = require("@dimforge/rapier3d-compat");
var _three = require("three");
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _pointerLockControls = require("three/examples/jsm/controls/PointerLockControls");
var _statsModule = require("three/examples/jsm/libs/stats.module");
var _statsModuleDefault = parcelHelpers.interopDefault(_statsModule);
function createBitmask(indices) {
    let bitmask = 0;
    for (let index of indices)bitmask |= 1 << index;
    return bitmask.toString(2).padStart(16, "0");
}
function generateCollisionId(members, filters) {
    const memberId = createBitmask(members);
    const filterId = createBitmask(filters);
    return parseInt(memberId + filterId, 2);
}
function initBasicScene(keyMap = {}, _config) {
    const config = {
        camera: "orbit",
        cameraPos: [
            0,
            2,
            5
        ],
        fov: 50,
        lightType: "spot",
        ..._config
    };
    let pivot = null;
    // setup the scene
    const gravity = {
        x: 0,
        y: -9.81,
        z: 0
    };
    const world = new (0, _rapier3DCompat.World)(gravity);
    // setup threejs
    const scene = new (0, _three.Scene)();
    // setup the light
    let light;
    if (config.lightType === "spot") {
        light = new (0, _three.SpotLight)(undefined, Math.PI * 10);
        light.angle = Math.PI / 3;
        light.penumbra = 0.5;
    } else {
        light = new (0, _three.DirectionalLight)(0xffffff, 0.5);
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 1500;
    }
    light.shadow.blurSamples = 10;
    light.shadow.radius = 5;
    light.position.set(2.5, 5, 5);
    light.castShadow = true;
    scene.add(light);
    // setup the camera
    const camera = new (0, _three.PerspectiveCamera)(config.fov, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(...config.cameraPos);
    // setup renderer
    const renderer = new (0, _three.WebGLRenderer)({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = (0, _three.VSMShadowMap);
    document.body.appendChild(renderer.domElement);
    window.addEventListener("resize", ()=>{
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    // setup camera controls
    let controls;
    if (config.camera === "orbit") {
        controls = new (0, _orbitControls.OrbitControls)(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.target.y = 1;
    } else {
        controls = new (0, _pointerLockControls.PointerLockControls)(camera, renderer.domElement);
        document.addEventListener("click", ()=>{
            controls instanceof (0, _pointerLockControls.PointerLockControls) && controls.lock();
        }, false);
        // followcam
        pivot = new (0, _three.Object3D)();
        const yaw = new (0, _three.Object3D)();
        const pitch = new (0, _three.Object3D)();
        scene.add(pivot);
        pivot.add(yaw);
        yaw.add(pitch);
        pitch.add(camera);
        yaw.rotateY(0.6);
        function onDocumentMouseMove(e) {
            yaw.rotation.y -= e.movementX * 0.002;
            const v = pitch.rotation.x - e.movementY * 0.002;
            // limit range
            if (v > -1 && v < 0.1) pitch.rotation.x = v;
            pivot && camera.lookAt(pivot.position);
        }
        function onDocumentMouseWheel(e) {
            e.preventDefault();
            const v = camera.position.z + e.deltaY * 0.005;
            // limit range
            if (v >= 1 && v <= 10) camera.position.z = v;
        }
        const onDocumentKey = (e)=>{
            keyMap[e.code] = e.type === "keydown";
        };
        document.addEventListener("click", ()=>{
            renderer.domElement.requestPointerLock();
        });
        document.addEventListener("pointerlockchange", ()=>{
            if (document.pointerLockElement === renderer.domElement) {
                document.addEventListener("keydown", onDocumentKey);
                document.addEventListener("keyup", onDocumentKey);
                renderer.domElement.addEventListener("mousemove", onDocumentMouseMove);
                renderer.domElement.addEventListener("wheel", onDocumentMouseWheel);
            } else {
                document.removeEventListener("keydown", onDocumentKey);
                document.removeEventListener("keyup", onDocumentKey);
                renderer.domElement.removeEventListener("mousemove", onDocumentMouseMove);
                renderer.domElement.removeEventListener("wheel", onDocumentMouseWheel);
            }
        });
    }
    // setup stats
    const stats = new (0, _statsModuleDefault.default)();
    document.body.appendChild(stats.dom);
    return {
        world,
        scene,
        renderer,
        camera,
        controls,
        stats,
        pivot
    };
}

},{"@dimforge/rapier3d-compat":"M5vdp","three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","three/examples/jsm/controls/PointerLockControls":"fjBcw","three/examples/jsm/libs/stats.module":"6xUSB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjBcw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PointerLockControls", ()=>PointerLockControls);
var _three = require("three");
const _euler = new (0, _three.Euler)(0, 0, 0, "YXZ");
const _vector = new (0, _three.Vector3)();
const _changeEvent = {
    type: "change"
};
const _lockEvent = {
    type: "lock"
};
const _unlockEvent = {
    type: "unlock"
};
const _PI_2 = Math.PI / 2;
class PointerLockControls extends (0, _three.EventDispatcher) {
    constructor(camera, domElement){
        super();
        this.camera = camera;
        this.domElement = domElement;
        this.isLocked = false;
        // Set to constrain the pitch of the camera
        // Range is 0 to Math.PI radians
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians
        this.pointerSpeed = 1.0;
        this._onMouseMove = onMouseMove.bind(this);
        this._onPointerlockChange = onPointerlockChange.bind(this);
        this._onPointerlockError = onPointerlockError.bind(this);
        this.connect();
    }
    connect() {
        this.domElement.ownerDocument.addEventListener("mousemove", this._onMouseMove);
        this.domElement.ownerDocument.addEventListener("pointerlockchange", this._onPointerlockChange);
        this.domElement.ownerDocument.addEventListener("pointerlockerror", this._onPointerlockError);
    }
    disconnect() {
        this.domElement.ownerDocument.removeEventListener("mousemove", this._onMouseMove);
        this.domElement.ownerDocument.removeEventListener("pointerlockchange", this._onPointerlockChange);
        this.domElement.ownerDocument.removeEventListener("pointerlockerror", this._onPointerlockError);
    }
    dispose() {
        this.disconnect();
    }
    getObject() {
        return this.camera;
    }
    getDirection(v) {
        return v.set(0, 0, -1).applyQuaternion(this.camera.quaternion);
    }
    moveForward(distance) {
        // move forward parallel to the xz-plane
        // assumes camera.up is y-up
        const camera = this.camera;
        _vector.setFromMatrixColumn(camera.matrix, 0);
        _vector.crossVectors(camera.up, _vector);
        camera.position.addScaledVector(_vector, distance);
    }
    moveRight(distance) {
        const camera = this.camera;
        _vector.setFromMatrixColumn(camera.matrix, 0);
        camera.position.addScaledVector(_vector, distance);
    }
    lock() {
        this.domElement.requestPointerLock();
    }
    unlock() {
        this.domElement.ownerDocument.exitPointerLock();
    }
}
// event listeners
function onMouseMove(event) {
    if (this.isLocked === false) return;
    const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
    const camera = this.camera;
    _euler.setFromQuaternion(camera.quaternion);
    _euler.y -= movementX * 0.002 * this.pointerSpeed;
    _euler.x -= movementY * 0.002 * this.pointerSpeed;
    _euler.x = Math.max(_PI_2 - this.maxPolarAngle, Math.min(_PI_2 - this.minPolarAngle, _euler.x));
    camera.quaternion.setFromEuler(_euler);
    this.dispatchEvent(_changeEvent);
}
function onPointerlockChange() {
    if (this.domElement.ownerDocument.pointerLockElement === this.domElement) {
        this.dispatchEvent(_lockEvent);
        this.isLocked = true;
    } else {
        this.dispatchEvent(_unlockEvent);
        this.isLocked = false;
    }
}
function onPointerlockError() {
    console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xUSB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var Stats = function() {
    var mode = 0;
    var container = document.createElement("div");
    container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    container.addEventListener("click", function(event) {
        event.preventDefault();
        showPanel(++mode % container.children.length);
    }, false);
    //
    function addPanel(panel) {
        container.appendChild(panel.dom);
        return panel;
    }
    function showPanel(id) {
        for(var i = 0; i < container.children.length; i++)container.children[i].style.display = i === id ? "block" : "none";
        mode = id;
    }
    //
    var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
    var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
    showPanel(0);
    return {
        REVISION: 16,
        dom: container,
        addPanel: addPanel,
        showPanel: showPanel,
        begin: function() {
            beginTime = (performance || Date).now();
        },
        end: function() {
            frames++;
            var time = (performance || Date).now();
            msPanel.update(time - beginTime, 200);
            if (time >= prevTime + 1000) {
                fpsPanel.update(frames * 1000 / (time - prevTime), 100);
                prevTime = time;
                frames = 0;
                if (memPanel) {
                    var memory = performance.memory;
                    memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
                }
            }
            return time;
        },
        update: function() {
            beginTime = this.end();
        },
        // Backwards Compatibility
        domElement: container,
        setMode: showPanel
    };
};
Stats.Panel = function(name, fg, bg) {
    var min = Infinity, max = 0, round = Math.round;
    var PR = round(window.devicePixelRatio || 1);
    var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
    var canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.cssText = "width:80px;height:48px";
    var context = canvas.getContext("2d");
    context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
    context.textBaseline = "top";
    context.fillStyle = bg;
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = fg;
    context.fillText(name, TEXT_X, TEXT_Y);
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    context.fillStyle = bg;
    context.globalAlpha = 0.9;
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    return {
        dom: canvas,
        update: function(value, maxValue) {
            min = Math.min(min, value);
            max = Math.max(max, value);
            context.fillStyle = bg;
            context.globalAlpha = 1;
            context.fillRect(0, 0, WIDTH, GRAPH_Y);
            context.fillStyle = fg;
            context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
            context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
            context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
            context.fillStyle = bg;
            context.globalAlpha = 0.9;
            context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
        }
    };
};
exports.default = Stats;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUXFx":[function(require,module,exports) {
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BooleanController", ()=>i);
parcelHelpers.export(exports, "ColorController", ()=>a);
parcelHelpers.export(exports, "Controller", ()=>t);
parcelHelpers.export(exports, "FunctionController", ()=>h);
parcelHelpers.export(exports, "GUI", ()=>g);
parcelHelpers.export(exports, "NumberController", ()=>d);
parcelHelpers.export(exports, "OptionController", ()=>c);
parcelHelpers.export(exports, "StringController", ()=>u);
class t {
    constructor(i, e, s, n, l = "div"){
        this.parent = i, this.object = e, this.property = s, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(n), this.$name = document.createElement("div"), this.$name.classList.add("name"), t.nextNameID = t.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++t.nextNameID, this.$widget = document.createElement(l), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(s);
    }
    name(t) {
        return this._name = t, this.$name.innerHTML = t, this;
    }
    onChange(t) {
        return this._onChange = t, this;
    }
    _callOnChange() {
        this.parent._callOnChange(this), void 0 !== this._onChange && this._onChange.call(this, this.getValue()), this._changed = !0;
    }
    onFinishChange(t) {
        return this._onFinishChange = t, this;
    }
    _callOnFinishChange() {
        this._changed && (this.parent._callOnFinishChange(this), void 0 !== this._onFinishChange && this._onFinishChange.call(this, this.getValue())), this._changed = !1;
    }
    reset() {
        return this.setValue(this.initialValue), this._callOnFinishChange(), this;
    }
    enable(t = !0) {
        return this.disable(!t);
    }
    disable(t = !0) {
        return t === this._disabled || (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t)), this;
    }
    show(t = !0) {
        return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
    }
    hide() {
        return this.show(!1);
    }
    options(t) {
        const i = this.parent.add(this.object, this.property, t);
        return i.name(this._name), this.destroy(), i;
    }
    min(t) {
        return this;
    }
    max(t) {
        return this;
    }
    step(t) {
        return this;
    }
    decimals(t) {
        return this;
    }
    listen(t = !0) {
        return this._listening = t, void 0 !== this._listenCallbackID && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
    }
    _listenCallback() {
        this._listenCallbackID = requestAnimationFrame(this._listenCallback);
        const t = this.save();
        t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
    }
    getValue() {
        return this.object[this.property];
    }
    setValue(t) {
        return this.object[this.property] = t, this._callOnChange(), this.updateDisplay(), this;
    }
    updateDisplay() {
        return this;
    }
    load(t) {
        return this.setValue(t), this._callOnFinishChange(), this;
    }
    save() {
        return this.getValue();
    }
    destroy() {
        this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
    }
}
class i extends t {
    constructor(t, i, e){
        super(t, i, e, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", ()=>{
            this.setValue(this.$input.checked), this._callOnFinishChange();
        }), this.$disable = this.$input, this.updateDisplay();
    }
    updateDisplay() {
        return this.$input.checked = this.getValue(), this;
    }
}
function e(t) {
    let i, e;
    return (i = t.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = i[2] : (i = t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(i[1]).toString(16).padStart(2, 0) + parseInt(i[2]).toString(16).padStart(2, 0) + parseInt(i[3]).toString(16).padStart(2, 0) : (i = t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = i[1] + i[1] + i[2] + i[2] + i[3] + i[3]), !!e && "#" + e;
}
const s = {
    isPrimitive: !0,
    match: (t)=>"string" == typeof t,
    fromHexString: e,
    toHexString: e
}, n = {
    isPrimitive: !0,
    match: (t)=>"number" == typeof t,
    fromHexString: (t)=>parseInt(t.substring(1), 16),
    toHexString: (t)=>"#" + t.toString(16).padStart(6, 0)
}, l = {
    isPrimitive: !1,
    match: Array.isArray,
    fromHexString (t, i, e = 1) {
        const s = n.fromHexString(t);
        i[0] = (s >> 16 & 255) / 255 * e, i[1] = (s >> 8 & 255) / 255 * e, i[2] = (255 & s) / 255 * e;
    },
    toHexString: ([t, i, e], s = 1)=>n.toHexString(t * (s = 255 / s) << 16 ^ i * s << 8 ^ e * s << 0)
}, r = {
    isPrimitive: !1,
    match: (t)=>Object(t) === t,
    fromHexString (t, i, e = 1) {
        const s = n.fromHexString(t);
        i.r = (s >> 16 & 255) / 255 * e, i.g = (s >> 8 & 255) / 255 * e, i.b = (255 & s) / 255 * e;
    },
    toHexString: ({ r: t, g: i, b: e }, s = 1)=>n.toHexString(t * (s = 255 / s) << 16 ^ i * s << 8 ^ e * s << 0)
}, o = [
    s,
    n,
    l,
    r
];
class a extends t {
    constructor(t, i, s, n){
        var l;
        super(t, i, s, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (l = this.initialValue, o.find((t)=>t.match(l))), this._rgbScale = n, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", ()=>{
            this._setValueFromHexString(this.$input.value);
        }), this.$input.addEventListener("blur", ()=>{
            this._callOnFinishChange();
        }), this.$text.addEventListener("input", ()=>{
            const t = e(this.$text.value);
            t && this._setValueFromHexString(t);
        }), this.$text.addEventListener("focus", ()=>{
            this._textFocused = !0, this.$text.select();
        }), this.$text.addEventListener("blur", ()=>{
            this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange();
        }), this.$disable = this.$text, this.updateDisplay();
    }
    reset() {
        return this._setValueFromHexString(this._initialValueHexString), this;
    }
    _setValueFromHexString(t) {
        if (this._format.isPrimitive) {
            const i = this._format.fromHexString(t);
            this.setValue(i);
        } else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
    }
    save() {
        return this._format.toHexString(this.getValue(), this._rgbScale);
    }
    load(t) {
        return this._setValueFromHexString(t), this._callOnFinishChange(), this;
    }
    updateDisplay() {
        return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
    }
}
class h extends t {
    constructor(t, i, e){
        super(t, i, e, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (t)=>{
            t.preventDefault(), this.getValue().call(this.object);
        }), this.$button.addEventListener("touchstart", ()=>{}, {
            passive: !0
        }), this.$disable = this.$button;
    }
}
class d extends t {
    constructor(t, i, e, s, n, l){
        super(t, i, e, "number"), this._initInput(), this.min(s), this.max(n);
        const r = void 0 !== l;
        this.step(r ? l : this._getImplicitStep(), r), this.updateDisplay();
    }
    decimals(t) {
        return this._decimals = t, this.updateDisplay(), this;
    }
    min(t) {
        return this._min = t, this._onUpdateMinMax(), this;
    }
    max(t) {
        return this._max = t, this._onUpdateMinMax(), this;
    }
    step(t, i = !0) {
        return this._step = t, this._stepExplicit = i, this;
    }
    updateDisplay() {
        const t = this.getValue();
        if (this._hasSlider) {
            let i = (t - this._min) / (this._max - this._min);
            i = Math.max(0, Math.min(i, 1)), this.$fill.style.width = 100 * i + "%";
        }
        return this._inputFocused || (this.$input.value = void 0 === this._decimals ? t : t.toFixed(this._decimals)), this;
    }
    _initInput() {
        this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
        const t = (t)=>{
            const i = parseFloat(this.$input.value);
            isNaN(i) || (this._snapClampSetValue(i + t), this.$input.value = this.getValue());
        };
        let i, e, s, n, l, r = !1;
        const o = (t)=>{
            if (r) {
                const s = t.clientX - i, n = t.clientY - e;
                Math.abs(n) > 5 ? (t.preventDefault(), this.$input.blur(), r = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(s) > 5 && a();
            }
            if (!r) {
                const i = t.clientY - s;
                l -= i * this._step * this._arrowKeyMultiplier(t), n + l > this._max ? l = this._max - n : n + l < this._min && (l = this._min - n), this._snapClampSetValue(n + l);
            }
            s = t.clientY;
        }, a = ()=>{
            this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", a);
        };
        this.$input.addEventListener("input", ()=>{
            let t = parseFloat(this.$input.value);
            isNaN(t) || (this._stepExplicit && (t = this._snap(t)), this.setValue(this._clamp(t)));
        }), this.$input.addEventListener("keydown", (i)=>{
            "Enter" === i.code && this.$input.blur(), "ArrowUp" === i.code && (i.preventDefault(), t(this._step * this._arrowKeyMultiplier(i))), "ArrowDown" === i.code && (i.preventDefault(), t(this._step * this._arrowKeyMultiplier(i) * -1));
        }), this.$input.addEventListener("wheel", (i)=>{
            this._inputFocused && (i.preventDefault(), t(this._step * this._normalizeMouseWheel(i)));
        }, {
            passive: !1
        }), this.$input.addEventListener("mousedown", (t)=>{
            i = t.clientX, e = s = t.clientY, r = !0, n = this.getValue(), l = 0, window.addEventListener("mousemove", o), window.addEventListener("mouseup", a);
        }), this.$input.addEventListener("focus", ()=>{
            this._inputFocused = !0;
        }), this.$input.addEventListener("blur", ()=>{
            this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
        });
    }
    _initSlider() {
        this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
        const t = (t)=>{
            const i = this.$slider.getBoundingClientRect();
            let e = (s = t, n = i.left, l = i.right, r = this._min, o = this._max, (s - n) / (l - n) * (o - r) + r);
            var s, n, l, r, o;
            this._snapClampSetValue(e);
        }, i = (i)=>{
            t(i.clientX);
        }, e = ()=>{
            this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", e);
        };
        let s, n, l = !1;
        const r = (i)=>{
            i.preventDefault(), this._setDraggingStyle(!0), t(i.touches[0].clientX), l = !1;
        }, o = (i)=>{
            if (l) {
                const t = i.touches[0].clientX - s, e = i.touches[0].clientY - n;
                Math.abs(t) > Math.abs(e) ? r(i) : (window.removeEventListener("touchmove", o), window.removeEventListener("touchend", a));
            } else i.preventDefault(), t(i.touches[0].clientX);
        }, a = ()=>{
            this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", o), window.removeEventListener("touchend", a);
        }, h = this._callOnFinishChange.bind(this);
        let d;
        this.$slider.addEventListener("mousedown", (s)=>{
            this._setDraggingStyle(!0), t(s.clientX), window.addEventListener("mousemove", i), window.addEventListener("mouseup", e);
        }), this.$slider.addEventListener("touchstart", (t)=>{
            t.touches.length > 1 || (this._hasScrollBar ? (s = t.touches[0].clientX, n = t.touches[0].clientY, l = !0) : r(t), window.addEventListener("touchmove", o, {
                passive: !1
            }), window.addEventListener("touchend", a));
        }, {
            passive: !1
        }), this.$slider.addEventListener("wheel", (t)=>{
            if (Math.abs(t.deltaX) < Math.abs(t.deltaY) && this._hasScrollBar) return;
            t.preventDefault();
            const i = this._normalizeMouseWheel(t) * this._step;
            this._snapClampSetValue(this.getValue() + i), this.$input.value = this.getValue(), clearTimeout(d), d = setTimeout(h, 400);
        }, {
            passive: !1
        });
    }
    _setDraggingStyle(t, i = "horizontal") {
        this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle("lil-gui-" + i, t);
    }
    _getImplicitStep() {
        return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : .1;
    }
    _onUpdateMinMax() {
        !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
    }
    _normalizeMouseWheel(t) {
        let { deltaX: i, deltaY: e } = t;
        Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (i = 0, e = -t.wheelDelta / 120, e *= this._stepExplicit ? 1 : 10);
        return i + -e;
    }
    _arrowKeyMultiplier(t) {
        let i = this._stepExplicit ? 1 : 10;
        return t.shiftKey ? i *= 10 : t.altKey && (i /= 10), i;
    }
    _snap(t) {
        const i = Math.round(t / this._step) * this._step;
        return parseFloat(i.toPrecision(15));
    }
    _clamp(t) {
        return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
    }
    _snapClampSetValue(t) {
        this.setValue(this._clamp(this._snap(t)));
    }
    get _hasScrollBar() {
        const t = this.parent.root.$children;
        return t.scrollHeight > t.clientHeight;
    }
    get _hasMin() {
        return void 0 !== this._min;
    }
    get _hasMax() {
        return void 0 !== this._max;
    }
}
class c extends t {
    constructor(t, i, e, s){
        super(t, i, e, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(s) ? s : Object.values(s), this._names = Array.isArray(s) ? s : Object.keys(s), this._names.forEach((t)=>{
            const i = document.createElement("option");
            i.innerHTML = t, this.$select.appendChild(i);
        }), this.$select.addEventListener("change", ()=>{
            this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
        }), this.$select.addEventListener("focus", ()=>{
            this.$display.classList.add("focus");
        }), this.$select.addEventListener("blur", ()=>{
            this.$display.classList.remove("focus");
        }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
    }
    updateDisplay() {
        const t = this.getValue(), i = this._values.indexOf(t);
        return this.$select.selectedIndex = i, this.$display.innerHTML = -1 === i ? t : this._names[i], this;
    }
}
class u extends t {
    constructor(t, i, e){
        super(t, i, e, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", ()=>{
            this.setValue(this.$input.value);
        }), this.$input.addEventListener("keydown", (t)=>{
            "Enter" === t.code && this.$input.blur();
        }), this.$input.addEventListener("blur", ()=>{
            this._callOnFinishChange();
        }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
    }
    updateDisplay() {
        return this.$input.value = this.getValue(), this;
    }
}
let p = !1;
class g {
    constructor({ parent: t, autoPlace: i = void 0 === t, container: e, width: s, title: n = "Controls", injectStyles: l = !0, touchStyles: r = !0 } = {}){
        if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", ()=>this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (t)=>{
            "Enter" !== t.code && "Space" !== t.code || (t.preventDefault(), this.$title.click());
        }), this.$title.addEventListener("touchstart", ()=>{}, {
            passive: !0
        }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(n), r && this.domElement.classList.add("allow-touch-styles"), this.parent) return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
        this.domElement.classList.add("root"), !p && l && (!function(t) {
            const i = document.createElement("style");
            i.innerHTML = t;
            const e = document.querySelector("head link[rel=stylesheet], head style");
            e ? document.head.insertBefore(i, e) : document.head.appendChild(i);
        }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), p = !0), e ? e.appendChild(this.domElement) : i && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this.domElement.addEventListener("keydown", (t)=>t.stopPropagation()), this.domElement.addEventListener("keyup", (t)=>t.stopPropagation());
    }
    add(t, e, s, n, l) {
        if (Object(s) === s) return new c(this, t, e, s);
        const r = t[e];
        switch(typeof r){
            case "number":
                return new d(this, t, e, s, n, l);
            case "boolean":
                return new i(this, t, e);
            case "string":
                return new u(this, t, e);
            case "function":
                return new h(this, t, e);
        }
        console.error("gui.add failed\n	property:", e, "\n	object:", t, "\n	value:", r);
    }
    addColor(t, i, e = 1) {
        return new a(this, t, i, e);
    }
    addFolder(t) {
        return new g({
            parent: this,
            title: t
        });
    }
    load(t, i = !0) {
        return t.controllers && this.controllers.forEach((i)=>{
            i instanceof h || i._name in t.controllers && i.load(t.controllers[i._name]);
        }), i && t.folders && this.folders.forEach((i)=>{
            i._title in t.folders && i.load(t.folders[i._title]);
        }), this;
    }
    save(t = !0) {
        const i = {
            controllers: {},
            folders: {}
        };
        return this.controllers.forEach((t)=>{
            if (!(t instanceof h)) {
                if (t._name in i.controllers) throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);
                i.controllers[t._name] = t.save();
            }
        }), t && this.folders.forEach((t)=>{
            if (t._title in i.folders) throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);
            i.folders[t._title] = t.save();
        }), i;
    }
    open(t = !0) {
        return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
    }
    close() {
        return this.open(!1);
    }
    show(t = !0) {
        return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
    }
    hide() {
        return this.show(!1);
    }
    openAnimated(t = !0) {
        return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(()=>{
            const i = this.$children.clientHeight;
            this.$children.style.height = i + "px", this.domElement.classList.add("transition");
            const e = (t)=>{
                t.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", e));
            };
            this.$children.addEventListener("transitionend", e);
            const s = t ? this.$children.scrollHeight : 0;
            this.domElement.classList.toggle("closed", !t), requestAnimationFrame(()=>{
                this.$children.style.height = s + "px";
            });
        }), this;
    }
    title(t) {
        return this._title = t, this.$title.innerHTML = t, this;
    }
    reset(t = !0) {
        return (t ? this.controllersRecursive() : this.controllers).forEach((t)=>t.reset()), this;
    }
    onChange(t) {
        return this._onChange = t, this;
    }
    _callOnChange(t) {
        this.parent && this.parent._callOnChange(t), void 0 !== this._onChange && this._onChange.call(this, {
            object: t.object,
            property: t.property,
            value: t.getValue(),
            controller: t
        });
    }
    onFinishChange(t) {
        return this._onFinishChange = t, this;
    }
    _callOnFinishChange(t) {
        this.parent && this.parent._callOnFinishChange(t), void 0 !== this._onFinishChange && this._onFinishChange.call(this, {
            object: t.object,
            property: t.property,
            value: t.getValue(),
            controller: t
        });
    }
    destroy() {
        this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t)=>t.destroy());
    }
    controllersRecursive() {
        let t = Array.from(this.controllers);
        return this.folders.forEach((i)=>{
            t = t.concat(i.controllersRecursive());
        }), t;
    }
    foldersRecursive() {
        let t = Array.from(this.folders);
        return this.folders.forEach((i)=>{
            t = t.concat(i.foldersRecursive());
        }), t;
    }
}
exports.default = g;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["julJB","96B03"], "96B03", "parcelRequire03bf")

//# sourceMappingURL=basic-car.218b8062.js.map
