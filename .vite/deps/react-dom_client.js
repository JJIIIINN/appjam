import {
  require_react_dom
} from "./chunk-3DPST5YI.js";
import "./chunk-KKOTAFNU.js";
import {
  __commonJS
} from "./chunk-WOOG5QLI.js";

// .yarn/__virtual__/react-dom-virtual-7ba9c4ebe1/0/cache/react-dom-npm-18.3.1-a805663f38-3f4b73a3aa.zip/node_modules/react-dom/client.js
var require_client = __commonJS({
  ".yarn/__virtual__/react-dom-virtual-7ba9c4ebe1/0/cache/react-dom-npm-18.3.1-a805663f38-3f4b73a3aa.zip/node_modules/react-dom/client.js"(exports) {
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});
export default require_client();
//# sourceMappingURL=react-dom_client.js.map
