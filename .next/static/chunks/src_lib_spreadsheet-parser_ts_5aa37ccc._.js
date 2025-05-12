(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_lib_spreadsheet-parser_ts_5aa37ccc._.js", {

"[project]/src/lib/spreadsheet-parser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseSpreadsheetFile": (()=>parseSpreadsheetFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
const parseSpreadsheetFile = (file)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = (event)=>{
            try {
                const arrayBuffer = event.target?.result;
                if (!arrayBuffer) {
                    reject(new Error("Failed to read file."));
                    return;
                }
                const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"])(arrayBuffer, {
                    type: 'array'
                });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                // For rawData (array of arrays)
                const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                    header: 1,
                    defval: ""
                });
                // For parsedData (array of objects) and headers
                const jsonData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                    defval: ""
                });
                let headers = [];
                if (rawData.length > 0) {
                    headers = rawData[0].map(String); // First row as headers
                } else if (jsonData.length > 0) {
                    headers = Object.keys(jsonData[0]);
                }
                const parsedData = jsonData.map((row)=>{
                    const newRow = {};
                    for (const header of headers){
                        newRow[header] = row[header] !== undefined ? row[header] : "";
                    }
                    return newRow;
                });
                resolve({
                    rawData,
                    parsedData,
                    headers
                });
            } catch (error) {
                console.error("Error parsing spreadsheet:", error);
                reject(new Error("Error parsing spreadsheet file. Please ensure it's a valid CSV or XLSX file."));
            }
        };
        reader.onerror = (error)=>{
            console.error("FileReader error:", error);
            reject(new Error("Error reading file."));
        };
        if (file.name.endsWith('.csv') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
            reader.readAsArrayBuffer(file);
        } else {
            reject(new Error("Unsupported file type. Please upload a CSV or XLSX file."));
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_lib_spreadsheet-parser_ts_5aa37ccc._.js.map