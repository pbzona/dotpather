"use strict";
module.exports = dotpath;
function dotpath(str) {
    const parts = str.toString().split('.');
    const len = parts.length;
    return function parse(obj) {
        var testKey;
        for (var i = 0; i < len; ++i) {
            testKey = parts[i];
            if (!obj)
                return;
            obj = obj[testKey];
        }
        return obj;
    };
}
