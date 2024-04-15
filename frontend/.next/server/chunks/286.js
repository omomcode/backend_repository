exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 4456:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 50543:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59110))

/***/ }),

/***/ 8661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaypalForm_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25388);
/* harmony import */ var _PaypalForm_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PaypalForm_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70649);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54997);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92897);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const PaymentForm = ()=>{
    function showAlert() {
        alert("This is an alert message!");
    }
    const returnClientId = ()=>{
        if (process.env.NEXT_PAYPAL_CLIENT_ID) return process.env.NEXT_PAYPAL_CLIENT_ID;
        else return "test";
    };
    // @ts-ignore
    const initialOptions = {
        clientId: "AbR_8aOj6sjAO4uVgpF6i1W2wAPRNKTFJYvvlClX0zoeKGo0iJUuxeISqQ41OH6t8ahL7egPESU-ELEm",
        currency: "EUR",
        intent: "capture",
        "enable-funding": "paylater,venmo",
        "data-sdk-integration-source": "integrationbuilder_ac"
    };
    const { products } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.products);
    // @ts-ignore
    // useEffect(  async () => {
    //     getDat();
    //
    //
    // }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
            // const result = await convertFromEURtoRSD(12.349047375);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    });
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // const [data, setData] = useState();
    const [cartData, setCartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products.map((product)=>({
            id: product.id.toString(),
            quantity: product.quantity?.toString()
        })));
    function Message(props) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: props.content
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "paymentprocess",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__.PayPalScriptProvider, {
                options: initialOptions,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__.PayPalButtons, {
                    className: "paypalButton",
                    style: {
                        shape: "rect",
                        //color:'blue' change the default color of the buttons
                        layout: "vertical"
                    },
                    createOrder: async ()=>{
                        try {
                            const url = "http://127.0.0.1:1337" + "/omcommerce/payment/orders";
                            const response = await axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.post(url, {
                                cart: cartData,
                                country_code: "RS"
                            }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                            const orderData = response.data;
                            //     // use the "body" param to optionally pass additional order information
                            //     // like product ids and quantities
                            //     body: JSON.stringify({
                            //         cart: [
                            //             {
                            //                 id: '1',
                            //                 quantity: '1',
                            //             },
                            //         country_code : "RS"
                            //         ],
                            //     }),
                            // });
                            //
                            // const orderData = await response.json();
                            if (orderData.id) {
                                return orderData.id;
                            } else {
                                const errorDetail = orderData?.details?.[0];
                                const errorMessage = errorDetail ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})` : JSON.stringify(orderData);
                                throw new Error(errorMessage);
                            }
                        } catch (error) {
                            console.error(error);
                            setMessage(`Could not initiate PayPal Checkout...${error}`);
                        }
                    },
                    onApprove: async (data, actions)=>{
                        try {
                            // const response = await fetch(
                            const response = await axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.post("http://127.0.0.1:1337" + `/omcommerce/payment/capture`, {
                                orderID: data.orderID
                            });
                            const orderData = await response.data;
                            // Three cases to handle:
                            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                            //   (2) Other non-recoverable errors -> Show a failure message
                            //   (3) Successful transaction -> Show confirmation or thank you message
                            const errorDetail = orderData?.details?.[0];
                            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                                return actions.restart();
                            } else if (errorDetail) {
                                // (2) Other non-recoverable errors -> Show a failure message
                                throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                            } else {
                                // (3) Successful transaction -> Show confirmation or thank you message
                                // Or go to another URL:  actions.redirect('thank_you.html');
                                const transaction = orderData.purchase_units[0].payments.captures[0];
                                setMessage(`Transaction ${transaction.status}: ${transaction.id}`);
                                console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
                            }
                        } catch (error) {
                            console.error(error);
                            setMessage(`Sorry, your transaction could not be processed...${error}`);
                        }
                    }
                })
            }),
            message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "alert-message",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Message, {
                    content: message
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentForm);


/***/ }),

/***/ 51400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   cl: () => (/* binding */ removeItem),
/* harmony export */   s9: () => (/* binding */ resetCart)
/* harmony export */ });
/* unused harmony exports cartSlice, addToCart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    products: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const item = state.products.find((item)=>item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeItem: (state, action)=>{
            state.products = state.products.filter((item)=>item.id !== action.payload);
        },
        resetCart: (state)=>{
            state.products = [];
        }
    }
});
const { addToCart, removeItem, resetCart } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 92897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector)
/* harmony export */ });
/* unused harmony export useAppDispatch */
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>useDispatch();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 59110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./node_modules/next-redux-wrapper/lib/index.js
var lib = __webpack_require__(59556);
// EXTERNAL MODULE: ./src/redux/cartReducer.ts
var cartReducer = __webpack_require__(51400);
;// CONCATENATED MODULE: ./src/redux/store.ts


 // Update the import path
// Define your rootReducer by combining reducers
const rootReducer = (0,redux_toolkit_cjs_production_min.combineReducers)({
    products: cartReducer/* default */.ZP
});
const makeStore = ()=>(0,redux_toolkit_cjs_production_min.configureStore)({
        reducer: rootReducer
    });
const store = makeStore();
// Create an action to handle server-side rendering with next-redux-wrapper
const hydrate = ()=>({
        type: HYDRATE,
        payload: store.getState()
    });
const wrapper = (0,lib.createWrapper)(makeStore, {
    debug: true
});

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@paypal/react-paypal-js/index.js
var react_paypal_js = __webpack_require__(70649);
;// CONCATENATED MODULE: ./src/redux/provider.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 



function Providers({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_paypal_js.PayPalScriptProvider, {
        deferLoading: true,
        options: {
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_redux_lib.Provider, {
            store: store,
            children: children
        })
    });
}


/***/ }),

/***/ 62591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Amatic_SC","arguments":[{"weight":["400","700"],"subsets":["latin"],"display":"swap"}],"variableName":"amatic"}
var layout_tsx_import_Amatic_SC_arguments_weight_400_700_subsets_latin_display_swap_variableName_amatic_ = __webpack_require__(78790);
var layout_tsx_import_Amatic_SC_arguments_weight_400_700_subsets_latin_display_swap_variableName_amatic_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Amatic_SC_arguments_weight_400_700_subsets_latin_display_swap_variableName_amatic_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/redux/provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/alex/Desktop/backend_repository/frontend/src/redux/provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(55906);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(45723);
;// CONCATENATED MODULE: ./src/app/layout.tsx






fontawesome_svg_core/* config */.vc.autoAddCss = false;


fontawesome_svg_core/* library */.vI.add(free_solid_svg_icons/* fas */.mRB);
const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (layout_tsx_import_Amatic_SC_arguments_weight_400_700_subsets_latin_display_swap_variableName_amatic_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "app",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ }),

/***/ 25388:
/***/ (() => {



/***/ })

};
;