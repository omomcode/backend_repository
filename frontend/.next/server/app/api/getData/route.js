(() => {
var exports = {};
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 13878:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 13878;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 77282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 44435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

// NAMESPACE OBJECT: ./src/app/api/getData/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/mysql2/promise.js
var promise = __webpack_require__(98294);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/getData/route.ts


async function GET(request) {
    const dbPool = promise.createPool({
        host: process.env.MYSQL_HOST,
        //port: (process.env.MYSQL_PORT) ? parseInt(process.env.MYSQL_PORT) : undefined,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    });
    try {
        const connection1 = await dbPool.getConnection();
        const query1 = "SELECT * FROM objects";
        const [objects] = await connection1.execute(query1);
        connection1.release();
        const connection2 = await dbPool.getConnection();
        const query2 = "SELECT * FROM layout";
        const [layout] = await connection2.execute(query2);
        connection2.release();
        const connection3 = await dbPool.getConnection();
        const query3 = "SELECT * FROM o_data";
        const [o_data] = await connection3.execute(query3);
        connection3.release();
        const connection4 = await dbPool.getConnection();
        const query4 = "SELECT * FROM logic";
        const [logic] = await connection4.execute(query4);
        connection4.release();
        const connection5 = await dbPool.getConnection();
        const query5 = "SELECT * FROM resolved_data";
        const [resolved_data] = await connection5.execute(query5);
        connection5.release();
        const connection6 = await dbPool.getConnection();
        const query6 = "SELECT * FROM data_types";
        const [data_types] = await connection6.execute(query6);
        connection6.release();
        const connection7 = await dbPool.getConnection();
        const query7 = "SELECT * FROM resolvable_tags";
        const [resolvable_tags] = await connection7.execute(query7);
        connection7.release();
        const connection8 = await dbPool.getConnection();
        const query8 = "SELECT * FROM tags";
        const [tags] = await connection8.execute(query8);
        connection8.release();
        return next_response/* default */.Z.json({
            objects,
            layout,
            o_data,
            logic,
            resolved_data,
            data_types,
            resolvable_tags,
            tags
        }, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return next_response/* default */.Z.json({
            error: error
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FgetData%2Froute&name=app%2Fapi%2FgetData%2Froute&pagePath=private-next-app-dir%2Fapi%2FgetData%2Froute.ts&appDir=%2Fhome%2Falex%2FDesktop%2Fbackend_repository%2Ffrontend%2Fsrc%2Fapp&appPaths=%2Fapi%2FgetData%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/getData/route",
        pathname: "/api/getData",
        filename: "route",
        bundlePath: "app/api/getData/route"
    },
    resolvedPagePath: "/home/alex/Desktop/backend_repository/frontend/src/app/api/getData/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/getData/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,368], () => (__webpack_exec__(44435)));
module.exports = __webpack_exports__;

})();