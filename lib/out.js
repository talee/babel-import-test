(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.a = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.imTheA = imTheA;
  function imTheA() {
    return 'The A';
  }

  exports.default = {
    imA() {
      return 'AAA';
    }
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'a.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('a.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.a);
    global.b = mod.exports;
  }
})(this, function (exports, _a) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _a2 = _interopRequireDefault(_a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log('B', _a2.default.imA() === 'AAA');

  exports.default = {
    imB: 'B'
  };
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['a.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('a.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.a);
    global.c = mod.exports;
  }
})(this, function (_a) {
  'use strict';

  function C() {
    // get rekt C FF
  }
  console.log('C', (0, _a.imTheA)() === 'The A');
});
