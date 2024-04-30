"use strict";
(() => {
var exports = {};
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 96661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/capture/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./src/utility/payment/paymentHelper.ts
var paymentHelper = __webpack_require__(30122);
;// CONCATENATED MODULE: ./src/app/api/capture/route.ts

async function POST(req, res) {
    const data = await req.json();
    const orderID = data.orderID;
    try {
        const response = await (0,paymentHelper/* capturePayment */.D)(orderID);
        return new Response(JSON.stringify(response));
    } catch (error) {
        console.error("Failed to create order:", error);
        return new Response(JSON.stringify({
            error: "Failed to capture order."
        }));
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcapture%2Froute&name=app%2Fapi%2Fcapture%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcapture%2Froute.ts&appDir=C%3A%5CUsers%5CSimparanekromeno%5CDesktop%5Cwindows%20test%5Cbackend_repository%5Cfrontend%5Csrc%5Capp&appPaths=%2Fapi%2Fcapture%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/capture/route",
        pathname: "/api/capture",
        filename: "route",
        bundlePath: "app/api/capture/route"
    },
    resolvedPagePath: "C:\\Users\\Simparanekromeno\\Desktop\\windows test\\backend_repository\\frontend\\src\\app\\api\\capture\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/capture/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,122], () => (__webpack_exec__(96661)));
module.exports = __webpack_exports__;

})();