(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/diagnostic_lab/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/diagnostic_lab/components/ui/bento-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoGrid",
    ()=>BentoGrid,
    "BentoGridItem",
    ()=>BentoGridItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/lib/utils.ts [app-client] (ecmascript)");
;
;
const BentoGrid = ({ className, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Grid container
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BentoGrid;
const BentoGridItem = ({ className, title, description, header, icon })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Card layout
        "group/bento relative flex flex-col justify-between rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/90", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-40 overflow-hidden rounded-xl",
                children: header
            }, void 0, false, {
                fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-3 transition-transform duration-300 group-hover/bento:translate-x-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-neutral-800 dark:text-neutral-200",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-600 dark:text-neutral-400 leading-snug",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/diagnostic_lab/components/ui/bento-grid.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = BentoGridItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "BentoGrid");
__turbopack_context__.k.register(_c1, "BentoGridItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/diagnostic_lab/components/BentoDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoGridDemo",
    ()=>BentoGridDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$bento$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/components/ui/bento-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeartPause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeartPause$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconHeartPause.mjs [app-client] (ecmascript) <export default as IconHeartPause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconActivityHeartbeat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconActivityHeartbeat$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconActivityHeartbeat.mjs [app-client] (ecmascript) <export default as IconActivityHeartbeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStethoscope$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconStethoscope.mjs [app-client] (ecmascript) <export default as IconStethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRun$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconRun.mjs [app-client] (ecmascript) <export default as IconRun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDroplet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDroplet$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconDroplet.mjs [app-client] (ecmascript) <export default as IconDroplet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconScan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconScan$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconScan.mjs [app-client] (ecmascript) <export default as IconScan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClipboardCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClipboardCopy$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconClipboardCopy.mjs [app-client] (ecmascript) <export default as IconClipboardCopy>");
"use client";
;
;
;
function BentoGridDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-semibold text-center mb-10 text-gray-800",
                children: "Our Diagnostic Services"
            }, void 0, false, {
                fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$bento$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGrid"], {
                className: "max-w-6xl mx-auto px-6",
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$bento$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGridItem"], {
                        title: item.title,
                        description: item.description,
                        header: item.header,
                        icon: item.icon,
                        className: i === 3 || i === 6 ? "md:col-span-2" : "" /* Makes TMT and Delivery wider */ 
                    }, i, false, {
                        fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = BentoGridDemo;
// ✅ Bento data
const items = [
    {
        title: "Doctor Consultation",
        description: "Get personalized guidance and medical advice from qualified professionals for accurate diagnostics and treatment plans.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/consultation.jpeg",
            alt: "Doctor Consultation",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStethoscope$3e$__["IconStethoscope"], {
            className: "h-5 w-5 text-purple-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 55,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "ECG (Electrocardiogram)",
        description: "Quick and painless heart rhythm analysis to detect irregularities and monitor cardiovascular health.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/ecg.jpg",
            alt: "ECG test",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconActivityHeartbeat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconActivityHeartbeat$3e$__["IconActivityHeartbeat"], {
            className: "h-5 w-5 text-rose-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 68,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "ECHO (Echocardiogram)",
        description: "High-precision imaging of your heart using ultrasound to evaluate structure, motion, and blood flow.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/echo.webp",
            alt: "Echocardiogram test",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeartPause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeartPause$3e$__["IconHeartPause"], {
            className: "h-5 w-5 text-red-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Treadmill Test (TMT)",
        description: "Monitored exercise stress test to assess heart function and detect coronary artery blockages.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/tmt.jpeg",
            alt: "Treadmill Test",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRun$3e$__["IconRun"], {
            className: "h-5 w-5 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Blood Tests",
        description: "Comprehensive lab analysis for glucose, cholesterol, thyroid, and more — all done with hygienic, single-use kits.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/bt.webp",
            alt: "Blood Tests",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDroplet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDroplet$3e$__["IconDroplet"], {
            className: "h-5 w-5 text-sky-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Scans & Imaging",
        description: "State-of-the-art digital imaging services including X-rays, ultrasounds, and advanced radiological scans.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/scan.avif",
            alt: "Scans and Imaging",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconScan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconScan$3e$__["IconScan"], {
            className: "h-5 w-5 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Report Delivery & Records",
        description: "Get your reports delivered securely via WhatsApp or email — accessible 24×7 from anywhere.",
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/delivery.jpg",
            alt: "Report Delivery",
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClipboardCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClipboardCopy$3e$__["IconClipboardCopy"], {
            className: "h-5 w-5 text-fuchsia-500"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/BentoDemo.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
var _c;
__turbopack_context__.k.register(_c, "BentoGridDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/diagnostic_lab/components/ui/resizable-navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav,
    "MobileNavHeader",
    ()=>MobileNavHeader,
    "MobileNavMenu",
    ()=>MobileNavMenu,
    "MobileNavToggle",
    ()=>MobileNavToggle,
    "NavBody",
    ()=>NavBody,
    "NavItems",
    ()=>NavItems,
    "Navbar",
    ()=>Navbar,
    "NavbarLogo",
    ()=>NavbarLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript) <export default as IconMenu2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Navbar = ({ children, className })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", {
        "Navbar.useMotionValueEvent": (latest)=>{
            setVisible(latest > 60);
        }
    }["Navbar.useMotionValueEvent"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-0 top-4 z-50 w-full pointer-events-auto", className),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                visible
            }) : child)
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "IOaogBTTKShOUL9o36OP98ZzdBU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Navbar;
const NavBody = ({ children, className, visible })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            backdropFilter: visible ? "blur(12px)" : "none",
            backgroundColor: visible ? "rgba(255,255,255,0.85)" : "transparent",
            boxShadow: visible ? "0 8px 30px rgba(0,0,0,0.05), 0 0 0 1px rgba(135,206,250,0.15)" : "none",
            y: visible ? 8 : 0
        },
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 30
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full px-6 py-3 lg:flex", "border border-sky-100/60 dark:border-cyan-900/40 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-lg", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = NavBody;
const NavItems = ({ items, className, onItemClick })=>{
    _s1();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseLeave: ()=>setHovered(null),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-row items-center justify-center gap-6 text-base font-medium transition duration-200 text-gray-700 dark:text-gray-300", className),
        children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: item.link,
                onClick: onItemClick,
                onMouseEnter: ()=>setHovered(idx),
                className: "relative px-3 py-2 transition-all hover:text-sky-600 dark:hover:text-cyan-400",
                children: [
                    hovered === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layoutId: "hover-underline",
                        className: "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, idx, true, {
                fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(NavItems, "mEhKvegbaT+HE5gyL2KiZdVDWeQ=");
_c2 = NavItems;
const MobileNav = ({ children, className, visible })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            backdropFilter: visible ? "blur(12px)" : "none",
            backgroundColor: visible ? "rgba(255,255,255,0.8)" : "transparent",
            y: visible ? 8 : 0
        },
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 40
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-2 lg:hidden", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 120,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = MobileNav;
const MobileNavHeader = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-row items-center justify-between", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 137,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = MobileNavHeader;
const MobileNavMenu = ({ children, className, isOpen })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            transition: {
                duration: 0.3
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-16 left-0 w-full flex flex-col gap-4 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-t border-sky-100/50 dark:border-cyan-900/50 px-6 py-8 shadow-md", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 143,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = MobileNavMenu;
const MobileNavToggle = ({ isOpen, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "p-2 rounded-full hover:bg-sky-100/40 transition",
        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
            className: "text-sky-600 dark:text-cyan-400"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__["IconMenu2"], {
            className: "text-sky-600 dark:text-cyan-400"
        }, void 0, false, {
            fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 168,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = MobileNavToggle;
const NavbarLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#",
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/logo.jpeg",
                alt: "logo",
                width: 30,
                height: 30
            }, void 0, false, {
                fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
                lineNumber: 179,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold text-lg bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent",
                children: "Tathagat Labs"
            }, void 0, false, {
                fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
                lineNumber: 180,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/diagnostic_lab/components/ui/resizable-navbar.tsx",
        lineNumber: 178,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = NavbarLogo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Navbar");
__turbopack_context__.k.register(_c1, "NavBody");
__turbopack_context__.k.register(_c2, "NavItems");
__turbopack_context__.k.register(_c3, "MobileNav");
__turbopack_context__.k.register(_c4, "MobileNavHeader");
__turbopack_context__.k.register(_c5, "MobileNavMenu");
__turbopack_context__.k.register(_c6, "MobileNavToggle");
__turbopack_context__.k.register(_c7, "NavbarLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/diagnostic_lab/components/NavbarDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavbarDemo",
    ()=>NavbarDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/components/ui/resizable-navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NavbarDemo() {
    _s();
    const navItems = [
        {
            name: "Home",
            link: "#home"
        },
        {
            name: "Services",
            link: "#services"
        },
        {
            name: "About Us",
            link: "#about"
        },
        {
            name: "Testimonials",
            link: "#testimonials"
        }
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeLink, setActiveLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#home");
    // Detect section in view to highlight active link
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavbarDemo.useEffect": ()=>{
            const handleScroll = {
                "NavbarDemo.useEffect.handleScroll": ()=>{
                    const scrollPos = window.scrollY + 120;
                    for (const item of navItems){
                        const section = document.querySelector(item.link);
                        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                            setActiveLink(item.link);
                            break;
                        }
                    }
                }
            }["NavbarDemo.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "NavbarDemo.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["NavbarDemo.useEffect"];
        }
    }["NavbarDemo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-neutral-900/80 shadow-sm transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavBody"], {
                    className: "px-8 py-3 rounded-full border border-sky-100/60 dark:border-cyan-900/40 backdrop-blur-xl bg-white/80 dark:bg-neutral-950/70 shadow-[0_2px_20px_rgba(0,0,0,0.03)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarLogo"], {}, void 0, false, {
                            fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-8",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.link,
                                    onClick: ()=>setActiveLink(item.link),
                                    className: `relative text-base font-semibold transition-all duration-300 ${activeLink === item.link ? "text-sky-600 dark:text-cyan-400" : "text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-cyan-400"}`,
                                    children: [
                                        item.name,
                                        activeLink === item.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.link, true, {
                                    fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNav"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarLogo"], {}, void 0, false, {
                                    fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavToggle"], {
                                    isOpen: isMobileMenuOpen,
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
                                }, void 0, false, {
                                    fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$ui$2f$resizable$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavMenu"], {
                            isOpen: isMobileMenuOpen,
                            onClose: ()=>setIsMobileMenuOpen(false),
                            className: "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-t border-sky-100/60 dark:border-cyan-900/40",
                            children: navItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.link,
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    className: `w-full text-center py-3 text-lg font-semibold rounded-md transition-all duration-200 ${activeLink === item.link ? "text-sky-600 dark:text-cyan-400 bg-sky-50/60 dark:bg-cyan-950/30" : "text-gray-800 dark:text-gray-300 hover:text-sky-600 dark:hover:text-cyan-400"}`,
                                    children: item.name
                                }, `mobile-link-${idx}`, false, {
                                    fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/diagnostic_lab/components/NavbarDemo.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(NavbarDemo, "Hzmjtas9pvFS41yURJPA8sFJPM8=");
_c = NavbarDemo;
var _c;
__turbopack_context__.k.register(_c, "NavbarDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/diagnostic_lab/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$BentoDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/components/BentoDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$NavbarDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/components/NavbarDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/diagnostic_lab/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
// Reusable motion presets
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
// Brand constants
const theme = {
    accentGradient: "from-rose-600 to-red-500",
    glowLight: "bg-rose-200/25",
    glowDark: "bg-red-200/20",
    border: "border-rose-100 dark:border-red-900/40"
};
const coreValues = [
    "Customer Satisfaction",
    "Highest Quality Care",
    "Integrity",
    "Innovation",
    "Team Work"
];
const testimonials = [
    {
        name: "Vijay Prakash",
        response: "Very quick and old-age friendly lab. They guided me very patiently."
    },
    {
        name: "Lakshmi Narayan",
        response: "The home sample collection was smooth. Technician was polite and well trained."
    },
    {
        name: "Sushma Devi",
        response: "Reports were delivered on WhatsApp within a few hours. Very convenient for elders."
    }
];
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f9fcff] text-gray-900 dark:bg-neutral-950 dark:text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$NavbarDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarDemo"], {}, void 0, false, {
                fileName: "[project]/diagnostic_lab/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1
                        },
                        className: `absolute -top-24 -right-16 h-64 w-64 rounded-full ${theme.glowLight} blur-3xl`
                    }, void 0, false, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1.2,
                            delay: 0.1
                        },
                        className: `absolute top-40 -left-16 h-72 w-72 rounded-full ${theme.glowDark} blur-3xl`
                    }, void 0, false, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/diagnostic_lab/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "home",
                        className: "max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: stagger,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex-1 text-center lg:text-left space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: fadeUp,
                                        className: "inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow-sm mx-auto lg:mx-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "h-4 w-4 text-sky-600"
                                            }, void 0, false, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "NABL-grade accuracy • Elder-friendly service"
                                            }, void 0, false, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        variants: fadeUp,
                                        className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight",
                                        children: [
                                            "Diagnostics with",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-transparent bg-clip-text bg-gradient-to-r ${theme.accentGradient}`,
                                                children: "Heart & Precision"
                                            }, void 0, false, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: fadeUp,
                                        className: "text-lg text-gray-700/90 dark:text-gray-300 max-w-xl mx-auto lg:mx-0",
                                        children: "Bringing world-class diagnostic technology to your doorstep — fast, accurate, and filled with care."
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: fadeUp,
                                        className: "flex justify-center lg:justify-start gap-4 flex-wrap pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "https://wa.me/919900356000",
                                                target: "_blank",
                                                className: "group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                        className: "w-5 h-5 transition-transform group-hover:rotate-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Book Test",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "tel:+919900356000",
                                                className: "group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-sky-200 text-sky-700 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-5 h-5 transition-transform group-hover:-rotate-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Call Now"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                className: "flex-1 relative flex justify-center mt-10 lg:mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-[18rem] sm:w-[24rem] md:w-[26rem] h-[20rem] md:h-[26rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: "/ecg.jpg",
                                            alt: "ECG Diagnostics",
                                            className: "absolute top-0 left-0 w-36 sm:w-44 h-36 sm:h-44 rounded-xl object-cover shadow-lg",
                                            animate: {
                                                y: [
                                                    0,
                                                    -8,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: "/bt.webp",
                                            alt: "Blood Test",
                                            className: "absolute bottom-0 left-10 w-40 sm:w-48 h-40 sm:h-48 rounded-xl object-cover shadow-lg",
                                            animate: {
                                                y: [
                                                    0,
                                                    10,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: "/scan.avif",
                                            alt: "Scanning",
                                            className: "absolute top-10 right-0 w-36 sm:w-44 h-36 sm:h-44 rounded-xl object-cover shadow-lg",
                                            animate: {
                                                y: [
                                                    0,
                                                    -6,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-full bg-gradient-to-br from-sky-200/20 to-cyan-200/30 blur-3xl"
                                        }, void 0, false, {
                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/diagnostic_lab/app/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "services",
                        className: "max-w-6xl mx-auto px-5 sm:px-8 py-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$components$2f$BentoDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGridDemo"], {}, void 0, false, {
                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "relative max-w-7xl mx-auto px-5 sm:px-8 py-20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "absolute inset-0 -z-10 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-10 left-10 w-72 h-72 bg-rose-200/25 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-10 right-10 w-96 h-96 bg-red-200/25 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut"
                                },
                                viewport: {
                                    once: true
                                },
                                className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 text-center lg:text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-700 to-red-500 bg-clip-text text-transparent",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0",
                                                children: [
                                                    "At",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-rose-600 dark:text-rose-300",
                                                        children: "Tathagat Labs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 17
                                                    }, this),
                                                    ", we believe that compassionate care and medical precision go hand-in-hand. Our mission is to make diagnostics affordable, accessible, and anxiety-free for everyone — especially elders."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6",
                                        children: [
                                            [
                                                {
                                                    title: "Our Mission",
                                                    text: "To provide world-class diagnostic care with compassion, transparency, and affordability — ensuring every patient feels cared for.",
                                                    icon: "❤️"
                                                },
                                                {
                                                    title: "Our Vision",
                                                    text: "To become the region’s most trusted and patient-friendly diagnostic center, setting the gold standard in ethical healthcare.",
                                                    icon: "🌍"
                                                }
                                            ].map((info, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        y: -4,
                                                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "p-6 rounded-2xl bg-white/80 dark:bg-neutral-800/60 backdrop-blur-md border border-rose-100 dark:border-neutral-700 shadow-sm transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl",
                                                                    children: info.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-semibold text-gray-900 dark:text-gray-100",
                                                                    children: info.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                                            children: info.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                whileHover: {
                                                    y: -4,
                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                className: "p-6 rounded-2xl bg-white/80 dark:bg-neutral-800/60 backdrop-blur-md border border-rose-100 dark:border-neutral-700 shadow-sm sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: "⭐"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-semibold text-gray-900 dark:text-gray-100",
                                                                children: "Core Values"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300 mt-2",
                                                        children: coreValues.map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "inline-flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "h-2 w-2 rounded-full bg-rose-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    value
                                                                ]
                                                            }, value, true, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "testimonials",
                        className: "relative max-w-7xl mx-auto px-5 sm:px-8 py-20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "absolute inset-0 -z-10 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-10 left-0 w-96 h-96 bg-rose-300/25 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-10 right-0 w-72 h-72 bg-red-300/25 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-center text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-rose-700 to-red-500 bg-clip-text text-transparent",
                                        children: "What Patients Say"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
                                        children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].figure, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 16
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: i * 0.1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "relative group p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-rose-100 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl text-rose-400",
                                                                children: "“"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 21
                                                            }, this),
                                                            t.response,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl text-rose-400",
                                                                children: "”"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                        className: "text-right font-medium text-gray-800 dark:text-gray-400",
                                                        children: [
                                                            "— ",
                                                            t.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-rose-400/10 to-red-400/10 blur-xl -z-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, t.name, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-gray-600 dark:text-gray-400 mt-10 text-sm max-w-xl mx-auto",
                                        children: "Every story matters. At Tathagat Labs, patient trust and satisfaction drive our purpose."
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "location",
                        className: "relative max-w-7xl mx-auto px-5 sm:px-8 py-20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "absolute inset-0 -z-10 overflow-hidden pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-20 left-0 w-72 h-72 bg-rose-300/25 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-10 right-0 w-96 h-96 bg-red-300/25 blur-3xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeOut"
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "space-y-6 text-center lg:text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white",
                                                children: "Visit Our Center"
                                            }, void 0, false, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700/90 dark:text-gray-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0",
                                                children: [
                                                    "Our center is built for comfort, accuracy, and accessibility — right in the heart of ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Bengaluru"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 39
                                                    }, this),
                                                    ". We ensure smooth parking, wheelchair access, and stress-free visits."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-rose-700 dark:text-rose-300",
                                                        children: "📍 Tathagat Polyclinic & Diagnostics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "#123, Tathagat Diagnostics Lane, Bengaluru, Karnataka, India"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "⏰ ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Open Daily:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 21
                                                            }, this),
                                                            " 7:00 AM – 9:00 PM"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "📞",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "tel:+919900356000",
                                                                className: "hover:text-rose-600 transition",
                                                                children: "+91 99003 56000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center lg:justify-start gap-3 pt-4 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://goo.gl/maps/JgJY7c9VYQpQ9eV97",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "px-5 py-2 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all",
                                                        children: "Open in Google Maps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://wa.me/919900356000",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "px-5 py-2 rounded-xl border border-rose-400/60 text-rose-700 dark:text-rose-300 text-sm font-medium backdrop-blur-sm hover:bg-rose-50/30 dark:hover:bg-neutral-800/50 transition-all",
                                                        children: "WhatsApp Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeOut"
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-rose-100 dark:border-neutral-800 shadow-lg bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.1361398974555!2d77.5859426!3d13.063531599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1822109d089d%3A0x9494c2da962c21f7!2sTathagat%20Polyclinic%20And%20Diagnostics!5e1!3m2!1sen!2sin!4v1762942907900!5m2!1sen!2sin",
                                            width: "100%",
                                            height: "100%",
                                            style: {
                                                border: 0
                                            },
                                            allowFullScreen: true,
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            className: "absolute inset-0 w-full h-full rounded-2xl",
                                            title: "Tathagat Labs Location"
                                        }, void 0, false, {
                                            fileName: "[project]/diagnostic_lab/app/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "relative mt-20 bg-gradient-to-b from-white to-rose-50/40 dark:from-neutral-900 dark:to-neutral-950 border-t border-rose-100/40 dark:border-neutral-800/60 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-6 sm:px-10 py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/logo.jpeg",
                                                                alt: "Tathagat Labs Logo",
                                                                width: 36
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-semibold text-rose-700 dark:text-rose-300",
                                                                children: "Tathagat Labs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                                        children: "Transparent, affordable, and elder-friendly diagnostics. Trusted by thousands for accurate, compassionate care."
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold mb-3",
                                                        children: "Quick Links"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm",
                                                        children: [
                                                            "Home",
                                                            "Services",
                                                            "About Us",
                                                            "Testimonials"
                                                        ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `#${label.toLowerCase().replace(" ", "")}`,
                                                                    className: "hover:text-rose-600 transition",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, label, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold mb-3",
                                                        children: "Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        className: "inline h-4 w-4 text-rose-500 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "tel:+919900356000",
                                                                        children: "+91 99003 56000"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                        className: "inline h-4 w-4 text-red-500 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://wa.me/919900356000",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: "WhatsApp Us"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "info@tathagatlabs.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "#123, Tathagat Diagnostics Lane, ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 54
                                                                    }, this),
                                                                    " Bengaluru, India"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold mb-3",
                                                        children: "Visit Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                                        children: [
                                                            "Open daily from",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-gray-800 dark:text-gray-200",
                                                                children: "7:00 AM – 9:00 PM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://wa.me/919900356000",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Book a Test"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-rose-100/40 dark:border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "© ",
                                                    new Date().getFullYear(),
                                                    " Tathagat Labs. All rights reserved."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        children: "Privacy Policy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        children: "Terms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-10 -right-10 w-72 h-72 bg-rose-300/25 blur-3xl rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$diagnostic_lab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-10 -left-10 w-64 h-64 bg-red-200/25 blur-3xl rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/diagnostic_lab/app/page.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/diagnostic_lab/app/page.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/diagnostic_lab/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/diagnostic_lab/app/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=diagnostic_lab_76a06b56._.js.map