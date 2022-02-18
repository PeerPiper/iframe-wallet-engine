var A = Object.freeze({ __proto__: null, get concatBuffers() {
  return X;
}, get b64UrlToString() {
  return m;
}, get bufferToString() {
  return b;
}, get stringToBuffer() {
  return z;
}, get stringToB64Url() {
  return l;
}, get b64UrlToBuffer() {
  return V;
}, get bufferTob64() {
  return r;
}, get bufferTob64Url() {
  return T;
}, get b64UrlEncode() {
  return u;
}, get b64UrlDecode() {
  return j;
}, get getSignatureData() {
  return v;
}, get setSignature() {
  return _;
}, get Tag() {
  return AA;
}, get default() {
  return QA;
}, get Transaction() {
  return BA;
}, get winstonToAr() {
  return gA;
}, get arToWinston() {
  return IA;
} }), Q = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function B(A2) {
  var Q2 = { exports: {} };
  return A2(Q2, Q2.exports), Q2.exports;
}
var g, I, C, E, D, w = B(function(A2, B2) {
  !function(A3) {
    let B3;
    const g2 = new Array(32).fill(void 0);
    function I2(A4) {
      return g2[A4];
    }
    g2.push(void 0, null, true, false);
    let C2 = g2.length;
    function E2(A4) {
      A4 < 36 || (g2[A4] = C2, C2 = A4);
    }
    function D2(A4) {
      const Q2 = I2(A4);
      return E2(A4), Q2;
    }
    let w2 = 0, M2 = null;
    function i2() {
      return M2 !== null && M2.buffer === B3.memory.buffer || (M2 = new Uint8Array(B3.memory.buffer)), M2;
    }
    let o2 = new TextEncoder("utf-8");
    const G2 = typeof o2.encodeInto == "function" ? function(A4, Q2) {
      return o2.encodeInto(A4, Q2);
    } : function(A4, Q2) {
      const B4 = o2.encode(A4);
      return Q2.set(B4), { read: A4.length, written: B4.length };
    };
    function k2(A4, Q2, B4) {
      if (B4 === void 0) {
        const B5 = o2.encode(A4), g4 = Q2(B5.length);
        return i2().subarray(g4, g4 + B5.length).set(B5), w2 = B5.length, g4;
      }
      let g3 = A4.length, I3 = Q2(g3);
      const C3 = i2();
      let E3 = 0;
      for (; E3 < g3; E3++) {
        const Q3 = A4.charCodeAt(E3);
        if (Q3 > 127)
          break;
        C3[I3 + E3] = Q3;
      }
      if (E3 !== g3) {
        E3 !== 0 && (A4 = A4.slice(E3)), I3 = B4(I3, g3, g3 = E3 + 3 * A4.length);
        const Q3 = i2().subarray(I3 + E3, I3 + g3);
        E3 += G2(A4, Q3).written;
      }
      return w2 = E3, I3;
    }
    function F2(A4) {
      return A4 == null;
    }
    let N2 = null;
    function h2() {
      return N2 !== null && N2.buffer === B3.memory.buffer || (N2 = new Int32Array(B3.memory.buffer)), N2;
    }
    let c2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    function Y2(A4, Q2) {
      return c2.decode(i2().subarray(A4, A4 + Q2));
    }
    function J2(A4) {
      C2 === g2.length && g2.push(g2.length + 1);
      const Q2 = C2;
      return C2 = g2[Q2], g2[Q2] = A4, Q2;
    }
    c2.decode();
    let R2 = null;
    function a2() {
      return R2 !== null && R2.buffer === B3.memory.buffer || (R2 = new Float64Array(B3.memory.buffer)), R2;
    }
    function H2(A4) {
      const Q2 = typeof A4;
      if (Q2 == "number" || Q2 == "boolean" || A4 == null)
        return `${A4}`;
      if (Q2 == "string")
        return `"${A4}"`;
      if (Q2 == "symbol") {
        const Q3 = A4.description;
        return Q3 == null ? "Symbol" : `Symbol(${Q3})`;
      }
      if (Q2 == "function") {
        const Q3 = A4.name;
        return typeof Q3 == "string" && Q3.length > 0 ? `Function(${Q3})` : "Function";
      }
      if (Array.isArray(A4)) {
        const Q3 = A4.length;
        let B5 = "[";
        Q3 > 0 && (B5 += H2(A4[0]));
        for (let g4 = 1; g4 < Q3; g4++)
          B5 += ", " + H2(A4[g4]);
        return B5 += "]", B5;
      }
      const B4 = /\[object ([^\]]+)\]/.exec(toString.call(A4));
      let g3;
      if (!(B4.length > 1))
        return toString.call(A4);
      if (g3 = B4[1], g3 == "Object")
        try {
          return "Object(" + JSON.stringify(A4) + ")";
        } catch (A5) {
          return "Object";
        }
      return A4 instanceof Error ? `${A4.name}: ${A4.message}
${A4.stack}` : g3;
    }
    function s2() {
      return D2(B3.generate_mnemonic());
    }
    function L2(A4) {
      var Q2 = B3.seed_to_proxcryptor(J2(A4));
      return f2.__wrap(Q2);
    }
    function U2(A4) {
      var Q2 = k2(A4, B3.__wbindgen_malloc, B3.__wbindgen_realloc), g3 = w2, I3 = B3.mnemonic_to_proxcryptor(Q2, g3);
      return f2.__wrap(I3);
    }
    function y2() {
      var A4 = B3.generate_ed25519_keypair();
      return P2.__wrap(A4);
    }
    function K2(A4, Q2) {
      const B4 = Q2(1 * A4.length);
      return i2().set(A4, B4 / 1), w2 = A4.length, B4;
    }
    function S2(A4, Q2) {
      return i2().subarray(A4 / 1, A4 / 1 + Q2);
    }
    function q2(A4, Q2) {
      try {
        const M3 = B3.__wbindgen_add_to_stack_pointer(-16);
        var g3 = K2(Q2, B3.__wbindgen_malloc), I3 = w2;
        B3.sign(M3, J2(A4), g3, I3);
        var C3 = h2()[M3 / 4 + 0], E3 = h2()[M3 / 4 + 1], D3 = S2(C3, E3).slice();
        return B3.__wbindgen_free(C3, 1 * E3), D3;
      } finally {
        B3.__wbindgen_add_to_stack_pointer(16);
      }
    }
    function x2(A4, Q2, g3) {
      return B3.verify(J2(A4), J2(Q2), J2(g3)) !== 0;
    }
    function n2(A4) {
      var Q2 = B3.generate_ed25519_keypair_from_seed(J2(A4));
      return P2.__wrap(Q2);
    }
    function d2(A4, Q2, g3) {
      return D2(B3.re_encrypt(J2(A4), J2(Q2), J2(g3)));
    }
    function O2(A4, Q2) {
      try {
        return A4.apply(this, Q2);
      } catch (A5) {
        B3.__wbindgen_exn_store(J2(A5));
      }
    }
    class f2 {
      static __wrap(A4) {
        const Q2 = Object.create(f2.prototype);
        return Q2.ptr = A4, Q2;
      }
      __destroy_into_raw() {
        const A4 = this.ptr;
        return this.ptr = 0, A4;
      }
      free() {
        const A4 = this.__destroy_into_raw();
        B3.__wbg_proxcryptor_free(A4);
      }
      static new(A4) {
        var Q2 = B3.proxcryptor_new(J2(A4));
        return f2.__wrap(Q2);
      }
      public_key() {
        return D2(B3.proxcryptor_public_key(this.ptr));
      }
      public_key_base58() {
        return D2(B3.proxcryptor_public_key_base58(this.ptr));
      }
      public_key_jwk() {
        return D2(B3.proxcryptor_public_key_jwk(this.ptr));
      }
      self_encrypt(A4, Q2) {
        var g3 = K2(A4, B3.__wbindgen_malloc), I3 = w2, C3 = k2(Q2, B3.__wbindgen_malloc, B3.__wbindgen_realloc), E3 = w2;
        return D2(B3.proxcryptor_self_encrypt(this.ptr, g3, I3, C3, E3));
      }
      self_decrypt(A4) {
        return D2(B3.proxcryptor_self_decrypt(this.ptr, J2(A4)));
      }
      generate_re_key(A4, Q2) {
        var g3 = k2(Q2, B3.__wbindgen_malloc, B3.__wbindgen_realloc), I3 = w2;
        return D2(B3.proxcryptor_generate_re_key(this.ptr, J2(A4), g3, I3));
      }
      re_decrypt(A4) {
        return D2(B3.proxcryptor_re_decrypt(this.ptr, J2(A4)));
      }
      sign(A4) {
        try {
          const D3 = B3.__wbindgen_add_to_stack_pointer(-16);
          var Q2 = K2(A4, B3.__wbindgen_malloc), g3 = w2;
          B3.proxcryptor_sign(D3, this.ptr, Q2, g3);
          var I3 = h2()[D3 / 4 + 0], C3 = h2()[D3 / 4 + 1], E3 = S2(I3, C3).slice();
          return B3.__wbindgen_free(I3, 1 * C3), E3;
        } finally {
          B3.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    class P2 {
      static __wrap(A4) {
        const Q2 = Object.create(P2.prototype);
        return Q2.ptr = A4, Q2;
      }
      __destroy_into_raw() {
        const A4 = this.ptr;
        return this.ptr = 0, A4;
      }
      free() {
        const A4 = this.__destroy_into_raw();
        B3.__wbg_simplekeypair_free(A4);
      }
      public() {
        return D2(B3.simplekeypair_public(this.ptr));
      }
      secret() {
        return D2(B3.simplekeypair_secret(this.ptr));
      }
    }
    async function p2(A4, Q2) {
      if (typeof Response == "function" && A4 instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming == "function")
          try {
            return await WebAssembly.instantiateStreaming(A4, Q2);
          } catch (Q3) {
            if (A4.headers.get("Content-Type") == "application/wasm")
              throw Q3;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Q3);
          }
        const B4 = await A4.arrayBuffer();
        return await WebAssembly.instantiate(B4, Q2);
      }
      {
        const B4 = await WebAssembly.instantiate(A4, Q2);
        return B4 instanceof WebAssembly.Instance ? { instance: B4, module: A4 } : B4;
      }
    }
    async function t2(A4) {
      A4 === void 0 && (A4 = new URL("index_bg.wasm", typeof document == "undefined" && typeof location == "undefined" ? new (function(A5) {
        throw new Error('Could not dynamically require "' + A5 + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
      }("url")).URL("file:" + __filename).href : typeof document == "undefined" ? location.href : document.currentScript && document.currentScript.src || new URL("index.js", document.baseURI).href));
      const g3 = { wbg: {} };
      g3.wbg.__wbindgen_object_drop_ref = function(A5) {
        D2(A5);
      }, g3.wbg.__wbg_log_2d3255d249750bce = function(A5, Q2) {
        console.log(Y2(A5, Q2));
      }, g3.wbg.__wbindgen_string_get = function(A5, Q2) {
        const g4 = I2(Q2);
        var C4 = typeof g4 == "string" ? g4 : void 0, E4 = F2(C4) ? 0 : k2(C4, B3.__wbindgen_malloc, B3.__wbindgen_realloc), D3 = w2;
        h2()[A5 / 4 + 1] = D3, h2()[A5 / 4 + 0] = E4;
      }, g3.wbg.__wbindgen_is_object = function(A5) {
        const Q2 = I2(A5);
        return typeof Q2 == "object" && Q2 !== null;
      }, g3.wbg.__wbindgen_json_parse = function(A5, Q2) {
        return J2(JSON.parse(Y2(A5, Q2)));
      }, g3.wbg.__wbindgen_is_null = function(A5) {
        return I2(A5) === null;
      }, g3.wbg.__wbindgen_is_undefined = function(A5) {
        return I2(A5) === void 0;
      }, g3.wbg.__wbindgen_boolean_get = function(A5) {
        const Q2 = I2(A5);
        return typeof Q2 == "boolean" ? Q2 ? 1 : 0 : 2;
      }, g3.wbg.__wbindgen_number_get = function(A5, Q2) {
        const B4 = I2(Q2);
        var g4 = typeof B4 == "number" ? B4 : void 0;
        a2()[A5 / 8 + 1] = F2(g4) ? 0 : g4, h2()[A5 / 4 + 0] = !F2(g4);
      }, g3.wbg.__wbindgen_object_clone_ref = function(A5) {
        return J2(I2(A5));
      }, g3.wbg.__wbg_get_2d1407dba3452350 = function(A5, Q2) {
        return J2(I2(A5)[D2(Q2)]);
      }, g3.wbg.__wbg_getRandomValues_98117e9a7e993920 = function() {
        return O2(function(A5, Q2) {
          I2(A5).getRandomValues(I2(Q2));
        }, arguments);
      }, g3.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function() {
        return O2(function(A5, Q2, B4) {
          I2(A5).randomFillSync(S2(Q2, B4));
        }, arguments);
      }, g3.wbg.__wbg_process_2f24d6544ea7b200 = function(A5) {
        return J2(I2(A5).process);
      }, g3.wbg.__wbg_versions_6164651e75405d4a = function(A5) {
        return J2(I2(A5).versions);
      }, g3.wbg.__wbg_node_4b517d861cbcb3bc = function(A5) {
        return J2(I2(A5).node);
      }, g3.wbg.__wbindgen_is_string = function(A5) {
        return typeof I2(A5) == "string";
      }, g3.wbg.__wbg_modulerequire_3440a4bcf44437db = function() {
        return O2(function(A5, Q2) {
          return J2(E3.require(Y2(A5, Q2)));
        }, arguments);
      }, g3.wbg.__wbg_crypto_98fc271021c7d2ad = function(A5) {
        return J2(I2(A5).crypto);
      }, g3.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function(A5) {
        return J2(I2(A5).msCrypto);
      }, g3.wbg.__wbindgen_is_function = function(A5) {
        return typeof I2(A5) == "function";
      }, g3.wbg.__wbg_newnoargs_be86524d73f67598 = function(A5, Q2) {
        return J2(new Function(Y2(A5, Q2)));
      }, g3.wbg.__wbg_next_c4151d46d5fa7097 = function(A5) {
        return J2(I2(A5).next);
      }, g3.wbg.__wbg_next_7720502039b96d00 = function() {
        return O2(function(A5) {
          return J2(I2(A5).next());
        }, arguments);
      }, g3.wbg.__wbg_done_b06cf0578e89ff68 = function(A5) {
        return I2(A5).done;
      }, g3.wbg.__wbg_value_e74a542443d92451 = function(A5) {
        return J2(I2(A5).value);
      }, g3.wbg.__wbg_iterator_4fc4ce93e6b92958 = function() {
        return J2(Symbol.iterator);
      }, g3.wbg.__wbg_get_4d0f21c2f823742e = function() {
        return O2(function(A5, Q2) {
          return J2(Reflect.get(I2(A5), I2(Q2)));
        }, arguments);
      }, g3.wbg.__wbg_call_888d259a5fefc347 = function() {
        return O2(function(A5, Q2) {
          return J2(I2(A5).call(I2(Q2)));
        }, arguments);
      }, g3.wbg.__wbindgen_string_new = function(A5, Q2) {
        return J2(Y2(A5, Q2));
      }, g3.wbg.__wbg_isArray_eb7ad55f2da67dde = function(A5) {
        return Array.isArray(I2(A5));
      }, g3.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function(A5) {
        return I2(A5) instanceof ArrayBuffer;
      }, g3.wbg.__wbg_values_364ae56c608e6824 = function(A5) {
        return J2(I2(A5).values());
      }, g3.wbg.__wbg_new_342a24ca698edd87 = function(A5, Q2) {
        return J2(new Error(Y2(A5, Q2)));
      }, g3.wbg.__wbg_isSafeInteger_0dfc6d38b7184f06 = function(A5) {
        return Number.isSafeInteger(I2(A5));
      }, g3.wbg.__wbg_self_c6fbdfc2918d5e58 = function() {
        return O2(function() {
          return J2(self.self);
        }, arguments);
      }, g3.wbg.__wbg_window_baec038b5ab35c54 = function() {
        return O2(function() {
          return J2(window.window);
        }, arguments);
      }, g3.wbg.__wbg_globalThis_3f735a5746d41fbd = function() {
        return O2(function() {
          return J2(globalThis.globalThis);
        }, arguments);
      }, g3.wbg.__wbg_global_1bc0b39582740e95 = function() {
        return O2(function() {
          return J2(Q.global);
        }, arguments);
      }, g3.wbg.__wbg_buffer_397eaa4d72ee94dd = function(A5) {
        return J2(I2(A5).buffer);
      }, g3.wbg.__wbg_new_a7ce447f15ff496f = function(A5) {
        return J2(new Uint8Array(I2(A5)));
      }, g3.wbg.__wbg_set_969ad0a60e51d320 = function(A5, Q2, B4) {
        I2(A5).set(I2(Q2), B4 >>> 0);
      }, g3.wbg.__wbg_length_1eb8fc608a0d4cdb = function(A5) {
        return I2(A5).length;
      }, g3.wbg.__wbg_instanceof_Uint8Array_08a1f3a179095e76 = function(A5) {
        return I2(A5) instanceof Uint8Array;
      }, g3.wbg.__wbg_newwithlength_929232475839a482 = function(A5) {
        return J2(new Uint8Array(A5 >>> 0));
      }, g3.wbg.__wbg_subarray_8b658422a224f479 = function(A5, Q2, B4) {
        return J2(I2(A5).subarray(Q2 >>> 0, B4 >>> 0));
      }, g3.wbg.__wbindgen_debug_string = function(A5, Q2) {
        var g4 = k2(H2(I2(Q2)), B3.__wbindgen_malloc, B3.__wbindgen_realloc), C4 = w2;
        h2()[A5 / 4 + 1] = C4, h2()[A5 / 4 + 0] = g4;
      }, g3.wbg.__wbindgen_throw = function(A5, Q2) {
        throw new Error(Y2(A5, Q2));
      }, g3.wbg.__wbindgen_memory = function() {
        return J2(B3.memory);
      }, (typeof A4 == "string" || typeof Request == "function" && A4 instanceof Request || typeof URL == "function" && A4 instanceof URL) && (A4 = fetch(A4));
      const { instance: C3, module: E3 } = await p2(await A4, g3);
      return B3 = C3.exports, t2.__wbindgen_wasm_module = E3, B3;
    }
    var e2 = Object.freeze({ __proto__: null, generate_mnemonic: s2, seed_to_proxcryptor: L2, mnemonic_to_proxcryptor: U2, generate_ed25519_keypair: y2, sign: q2, verify: x2, generate_ed25519_keypair_from_seed: n2, re_encrypt: d2, Proxcryptor: f2, SimpleKeypair: P2, default: t2 });
    const W2 = [62, 0, 0, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 0, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    function Z2(A4) {
      return W2[A4 - 43];
    }
    function X2(A4) {
      let Q2, B4 = A4.endsWith("==") ? 2 : A4.endsWith("=") ? 1 : 0, g3 = A4.length, I3 = new Uint8Array(g3 / 4 * 3);
      for (let B5 = 0, C3 = 0; B5 < g3; B5 += 4, C3 += 3)
        Q2 = Z2(A4.charCodeAt(B5)) << 18 | Z2(A4.charCodeAt(B5 + 1)) << 12 | Z2(A4.charCodeAt(B5 + 2)) << 6 | Z2(A4.charCodeAt(B5 + 3)), I3[C3] = Q2 >> 16, I3[C3 + 1] = Q2 >> 8 & 255, I3[C3 + 2] = 255 & Q2;
      return I3.subarray(0, I3.length - B4);
    }
    var b2 = async () => (await t2(m2), e2);
    const z2 = async () => b2();
    A3.getWallet = z2, Object.defineProperty(A3, "__esModule", { value: true });
  }(B2);
});
!function(A2) {
  A2.Call = "call", A2.Reply = "reply", A2.Syn = "syn", A2.SynAck = "synAck", A2.Ack = "ack";
}(g || (g = {})), function(A2) {
  A2.Fulfilled = "fulfilled", A2.Rejected = "rejected";
}(I || (I = {})), function(A2) {
  A2.ConnectionDestroyed = "ConnectionDestroyed", A2.ConnectionTimeout = "ConnectionTimeout", A2.NoIframeSrc = "NoIframeSrc";
}(C || (C = {})), function(A2) {
  A2.DataCloneError = "DataCloneError";
}(E || (E = {})), function(A2) {
  A2.Message = "message";
}(D || (D = {}));
const M = ({ name: A2, message: Q2, stack: B2 }) => ({ name: A2, message: Q2, stack: B2 });
let i = 0;
var o = () => ++i;
const G = (A2) => A2 ? A2.split(".") : [], k = (A2, Q2, B2) => {
  const g2 = G(Q2);
  return g2.reduce((A3, Q3, I2) => (A3[Q3] === void 0 && (A3[Q3] = {}), I2 === g2.length - 1 && (A3[Q3] = B2), A3[Q3]), A2), A2;
}, F = (A2, Q2) => {
  const B2 = {};
  return Object.keys(A2).forEach((g2) => {
    const I2 = A2[g2], C2 = ((A3, Q3) => {
      const B3 = G(Q3 || "");
      return B3.push(A3), ((A4) => A4.join("."))(B3);
    })(g2, Q2);
    typeof I2 == "object" && Object.assign(B2, F(I2, C2)), typeof I2 == "function" && (B2[C2] = I2);
  }), B2;
};
var N = (A2, Q2, B2, E2, w2) => {
  const { localName: M2, local: i2, remote: G2, originForSending: F2, originForReceiving: N2 } = Q2;
  let h2 = false;
  w2(`${M2}: Connecting call sender`);
  const c2 = (A3) => (...Q3) => {
    let B3;
    w2(`${M2}: Sending ${A3}() call`);
    try {
      G2.closed && (B3 = true);
    } catch (A4) {
      B3 = true;
    }
    if (B3 && E2(), h2) {
      const Q4 = new Error(`Unable to send ${A3}() call due to destroyed connection`);
      throw Q4.code = C.ConnectionDestroyed, Q4;
    }
    return new Promise((B4, C2) => {
      const E3 = o(), k2 = (Q4) => {
        if (Q4.source !== G2 || Q4.data.penpal !== g.Reply || Q4.data.id !== E3)
          return;
        if (N2 !== "*" && Q4.origin !== N2)
          return void w2(`${M2} received message from origin ${Q4.origin} which did not match expected origin ${N2}`);
        const o2 = Q4.data;
        w2(`${M2}: Received ${A3}() reply`), i2.removeEventListener(D.Message, k2);
        let F3 = o2.returnValue;
        o2.returnValueIsError && (F3 = ((A4) => {
          const Q5 = new Error();
          return Object.keys(A4).forEach((B5) => Q5[B5] = A4[B5]), Q5;
        })(F3)), (o2.resolution === I.Fulfilled ? B4 : C2)(F3);
      };
      i2.addEventListener(D.Message, k2);
      const h3 = { penpal: g.Call, id: E3, methodName: A3, args: Q3 };
      G2.postMessage(h3, F2);
    });
  }, Y2 = B2.reduce((A3, Q3) => (A3[Q3] = c2(Q3), A3), {});
  return Object.assign(A2, ((A3) => {
    const Q3 = {};
    for (const B3 in A3)
      k(Q3, B3, A3[B3]);
    return Q3;
  })(Y2)), () => {
    h2 = true;
  };
}, h = (A2, Q2, B2, C2) => {
  const { destroy: w2, onDestroy: i2 } = B2;
  return (B3) => {
    if (!(A2 instanceof RegExp ? A2.test(B3.origin) : A2 === "*" || A2 === B3.origin))
      return void C2(`Child: Handshake - Received SYN-ACK from origin ${B3.origin} which did not match expected origin ${A2}`);
    C2("Child: Handshake - Received SYN-ACK, responding with ACK");
    const o2 = B3.origin === "null" ? "*" : B3.origin, G2 = { penpal: g.Ack, methodNames: Object.keys(Q2) };
    window.parent.postMessage(G2, o2);
    const k2 = { localName: "Child", local: window, remote: window.parent, originForSending: o2, originForReceiving: B3.origin }, F2 = ((A3, Q3, B4) => {
      const { localName: C3, local: w3, remote: i3, originForSending: o3, originForReceiving: G3 } = A3;
      let k3 = false;
      const F3 = (A4) => {
        if (A4.source !== i3 || A4.data.penpal !== g.Call)
          return;
        if (G3 !== "*" && A4.origin !== G3)
          return void B4(`${C3} received message from origin ${A4.origin} which did not match expected origin ${G3}`);
        const D2 = A4.data, { methodName: w4, args: F4, id: N2 } = D2;
        B4(`${C3}: Received ${w4}() call`);
        const h3 = (A5) => (Q4) => {
          if (B4(`${C3}: Sending ${w4}() reply`), k3)
            return void B4(`${C3}: Unable to send ${w4}() reply due to destroyed connection`);
          const D3 = { penpal: g.Reply, id: N2, resolution: A5, returnValue: Q4 };
          A5 === I.Rejected && Q4 instanceof Error && (D3.returnValue = M(Q4), D3.returnValueIsError = true);
          try {
            i3.postMessage(D3, o3);
          } catch (A6) {
            if (A6.name === E.DataCloneError) {
              const Q5 = { penpal: g.Reply, id: N2, resolution: I.Rejected, returnValue: M(A6), returnValueIsError: true };
              i3.postMessage(Q5, o3);
            }
            throw A6;
          }
        };
        new Promise((A5) => A5(Q3[w4].apply(Q3, F4))).then(h3(I.Fulfilled), h3(I.Rejected));
      };
      return w3.addEventListener(D.Message, F3), () => {
        k3 = true, w3.removeEventListener(D.Message, F3);
      };
    })(k2, Q2, C2);
    i2(F2);
    const h2 = {}, c2 = N(h2, k2, B3.data.methodNames, w2, C2);
    return i2(c2), h2;
  };
};
var c = (A2 = {}) => {
  const { parentOrigin: Q2 = "*", methods: B2 = {}, timeout: I2, debug: E2 = false } = A2, w2 = ((A3) => (...Q3) => {
    A3 && console.log("[Penpal]", ...Q3);
  })(E2), M2 = ((A3, Q3) => {
    const B3 = [];
    let g2 = false;
    return { destroy(I3) {
      g2 || (g2 = true, Q3(`${A3}: Destroying connection`), B3.forEach((A4) => {
        A4(I3);
      }));
    }, onDestroy(A4) {
      g2 ? A4() : B3.push(A4);
    } };
  })("Child", w2), { destroy: i2, onDestroy: o2 } = M2, G2 = F(B2), k2 = h(Q2, G2, M2, w2), N2 = new Promise((A3, B3) => {
    const E3 = ((A4, Q3) => {
      let B4;
      return A4 !== void 0 && (B4 = window.setTimeout(() => {
        const B5 = new Error(`Connection timed out after ${A4}ms`);
        B5.code = C.ConnectionTimeout, Q3(B5);
      }, A4)), () => {
        clearTimeout(B4);
      };
    })(I2, i2), M3 = (Q3) => {
      if ((() => {
        try {
          clearTimeout();
        } catch (A4) {
          return false;
        }
        return true;
      })() && Q3.source === parent && Q3.data && Q3.data.penpal === g.SynAck) {
        const B4 = k2(Q3);
        B4 && (window.removeEventListener(D.Message, M3), E3(), A3(B4));
      }
    };
    window.addEventListener(D.Message, M3), (() => {
      w2("Child: Handshake - Sending SYN");
      const A4 = { penpal: g.Syn }, B4 = Q2 instanceof RegExp ? "*" : Q2;
      window.parent.postMessage(A4, B4);
    })(), o2((A4) => {
      window.removeEventListener(D.Message, M3), A4 && B3(A4);
    });
  });
  return { promise: N2, destroy() {
    i2();
  } };
}, Y = function(A2, Q2) {
  return Y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A3, Q3) {
    A3.__proto__ = Q3;
  } || function(A3, Q3) {
    for (var B2 in Q3)
      Object.prototype.hasOwnProperty.call(Q3, B2) && (A3[B2] = Q3[B2]);
  }, Y(A2, Q2);
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function J(A2, Q2) {
  if (typeof Q2 != "function" && Q2 !== null)
    throw new TypeError("Class extends value " + String(Q2) + " is not a constructor or null");
  function B2() {
    this.constructor = A2;
  }
  Y(A2, Q2), A2.prototype = Q2 === null ? Object.create(Q2) : (B2.prototype = Q2.prototype, new B2());
}
var R = function() {
  return R = Object.assign || function(A2) {
    for (var Q2, B2 = 1, g2 = arguments.length; B2 < g2; B2++)
      for (var I2 in Q2 = arguments[B2])
        Object.prototype.hasOwnProperty.call(Q2, I2) && (A2[I2] = Q2[I2]);
    return A2;
  }, R.apply(this, arguments);
};
function a(A2, Q2, B2, g2) {
  return new (B2 || (B2 = Promise))(function(I2, C2) {
    function E2(A3) {
      try {
        w2(g2.next(A3));
      } catch (A4) {
        C2(A4);
      }
    }
    function D2(A3) {
      try {
        w2(g2.throw(A3));
      } catch (A4) {
        C2(A4);
      }
    }
    function w2(A3) {
      var Q3;
      A3.done ? I2(A3.value) : (Q3 = A3.value, Q3 instanceof B2 ? Q3 : new B2(function(A4) {
        A4(Q3);
      })).then(E2, D2);
    }
    w2((g2 = g2.apply(A2, Q2 || [])).next());
  });
}
function H(A2, Q2) {
  var B2, g2, I2, C2, E2 = { label: 0, sent: function() {
    if (1 & I2[0])
      throw I2[1];
    return I2[1];
  }, trys: [], ops: [] };
  return C2 = { next: D2(0), throw: D2(1), return: D2(2) }, typeof Symbol == "function" && (C2[Symbol.iterator] = function() {
    return this;
  }), C2;
  function D2(C3) {
    return function(D3) {
      return function(C4) {
        if (B2)
          throw new TypeError("Generator is already executing.");
        for (; E2; )
          try {
            if (B2 = 1, g2 && (I2 = 2 & C4[0] ? g2.return : C4[0] ? g2.throw || ((I2 = g2.return) && I2.call(g2), 0) : g2.next) && !(I2 = I2.call(g2, C4[1])).done)
              return I2;
            switch (g2 = 0, I2 && (C4 = [2 & C4[0], I2.value]), C4[0]) {
              case 0:
              case 1:
                I2 = C4;
                break;
              case 4:
                return E2.label++, { value: C4[1], done: false };
              case 5:
                E2.label++, g2 = C4[1], C4 = [0];
                continue;
              case 7:
                C4 = E2.ops.pop(), E2.trys.pop();
                continue;
              default:
                if (!(I2 = E2.trys, (I2 = I2.length > 0 && I2[I2.length - 1]) || C4[0] !== 6 && C4[0] !== 2)) {
                  E2 = 0;
                  continue;
                }
                if (C4[0] === 3 && (!I2 || C4[1] > I2[0] && C4[1] < I2[3])) {
                  E2.label = C4[1];
                  break;
                }
                if (C4[0] === 6 && E2.label < I2[1]) {
                  E2.label = I2[1], I2 = C4;
                  break;
                }
                if (I2 && E2.label < I2[2]) {
                  E2.label = I2[2], E2.ops.push(C4);
                  break;
                }
                I2[2] && E2.ops.pop(), E2.trys.pop();
                continue;
            }
            C4 = Q2.call(A2, E2);
          } catch (A3) {
            C4 = [6, A3], g2 = 0;
          } finally {
            B2 = I2 = 0;
          }
        if (5 & C4[0])
          throw C4[1];
        return { value: C4[0] ? C4[1] : void 0, done: true };
      }([C3, D3]);
    };
  }
}
function s(A2, Q2, B2) {
  if (B2 || arguments.length === 2)
    for (var g2, I2 = 0, C2 = Q2.length; I2 < C2; I2++)
      !g2 && I2 in Q2 || (g2 || (g2 = Array.prototype.slice.call(Q2, 0, I2)), g2[I2] = Q2[I2]);
  return A2.concat(g2 || Array.prototype.slice.call(Q2));
}
var L, U = new Map(), y = new Map();
function K() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      switch (A2.label) {
        case 0:
          return L ? [3, 2] : [4, L];
        case 1:
          A2.sent(), A2.label = 2;
        case 2:
          return [2];
      }
    });
  });
}
!function() {
  a(this, void 0, void 0, function() {
    var A2;
    return H(this, function(Q2) {
      switch (Q2.label) {
        case 0:
          return [typeof document].includes("undefined") ? [2] : [4, w.getWallet()];
        case 1:
          return A2 = Q2.sent(), L = A2, [2];
      }
    });
  });
}();
var S = {}, q = Object.freeze({ __proto__: null, DEFAULT_PROXCRYPTOR_NAME: "DEFAULT_PROXCRYPTOR_NAME", pre: U, keys: y, DEFAULT_NAME: "Master Key", get wallet() {
  return L;
}, assertWallet: K, setConfig: function(A2, Q2) {
  S[A2] = Q2;
}, getConfig: function() {
  return S;
}, generateMnemonic: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      switch (A2.label) {
        case 0:
          return [4, K()];
        case 1:
          return A2.sent(), [2, L.generate_mnemonic()];
      }
    });
  });
}, loadMnemonicInProxcryptor: function(A2, Q2) {
  return Q2 === void 0 && (Q2 = "Master Key"), a(this, void 0, void 0, function() {
    var B2;
    return H(this, function(g2) {
      switch (g2.label) {
        case 0:
          return [4, K()];
        case 1:
          return g2.sent(), B2 = L.mnemonic_to_proxcryptor(A2), U.set(Q2, B2), [2, Q2];
      }
    });
  });
}, getLoadedKeys: function() {
  var A2 = [];
  return U.forEach(function(Q2, B2) {
    A2.push({ name: B2, publicKey: Q2.public_key(), publicKeyJWK: Q2.public_key_jwk(), publicKeyBase58: Q2.public_key_base58() });
  }), A2;
} });
new TextDecoder();
var x, n = { selfEncrypt: function(A2, Q2, B2) {
  return B2 === void 0 && (B2 = "Master Key"), U && B2 && U.get(B2) ? U.get(B2).self_encrypt(A2, Q2) : new Error("No proxy encryptor available for this name.");
}, selfDecrypt: function(A2, Q2) {
  return Q2 === void 0 && (Q2 = "Master Key"), a(void 0, void 0, void 0, function() {
    var B2;
    return H(this, function(g2) {
      switch (g2.label) {
        case 0:
          return B2 = { tag: new Uint8Array(A2.tag) }, [4, kA().confirm("proxcryptor.selfDecrypt", B2)];
        case 1:
          return g2.sent() ? [2, U.get(Q2).self_decrypt(A2)] : [2, false];
      }
    });
  });
}, generateReKey: function(A2, Q2, B2) {
  return B2 === void 0 && (B2 = "Master Key"), U && B2 && U.get(B2) ? U.get(B2).generate_re_key(A2, Q2) : new Error("No proxy encryptor available for this name.");
}, reEncrypt: function(A2, Q2, B2) {
  return L ? L.re_encrypt(A2, Q2, B2) : new Error("No wallet encryptor available");
}, reDecrypt: function(A2, Q2) {
  if (Q2 === void 0 && (Q2 = "Master Key"), !(U && Q2 && U.get(Q2)))
    return new Error("No proxy encryptor available for this name.");
  var B2 = U.get(Q2).re_decrypt(A2);
  return new Uint8Array(B2);
}, getPublicKey: function(A2) {
  return A2 === void 0 && (A2 = "Master Key"), U && A2 && U.get(A2) ? U.get(A2).public_key() : new Error("No proxy encryptor available for name ".concat(A2, "."));
} }, d = { setWasmWallet: function(A2, Q2) {
  x = A2;
}, generateKeypair: function() {
  if (!assertReady())
    return new Error("Wallet not connected or initialized. Run connect() and await initialize() first.");
  var A2 = x.generate_ed25519_keypair();
  return { publicKey: A2.public(), secretKey: A2.secret() };
}, sign: function(A2, Q2) {
  return Q2 === void 0 && (Q2 = { pre_name: "Master Key", dataLayout: {} }), a(void 0, void 0, void 0, function() {
    var B2;
    return H(this, function(g2) {
      switch (g2.label) {
        case 0:
          return [4, K()];
        case 1:
          return g2.sent(), U && Q2.pre_name && U.get(Q2.pre_name) ? (B2 = A2, [4, kA().confirm("ed25519.sign", B2)]) : [2, new Error("No signer available.")];
        case 2:
          return g2.sent() ? [2, U.get(Q2.pre_name).sign(new Uint8Array(A2))] : [2, false];
      }
    });
  });
}, verify: function(A2, Q2, B2, g2) {
  return L.verify(new Uint8Array(A2), new Uint8Array(Q2), new Uint8Array(B2));
} }, O = Q && Q.__extends || function() {
  var A2 = function(Q2, B2) {
    return A2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A3, Q3) {
      A3.__proto__ = Q3;
    } || function(A3, Q3) {
      for (var B3 in Q3)
        Q3.hasOwnProperty(B3) && (A3[B3] = Q3[B3]);
    }, A2(Q2, B2);
  };
  return function(Q2, B2) {
    function g2() {
      this.constructor = Q2;
    }
    A2(Q2, B2), Q2.prototype = B2 === null ? Object.create(B2) : (g2.prototype = B2.prototype, new g2());
  };
}(), f = function() {
  function A2(A3) {
    A3 === void 0 && (A3 = "="), this._paddingCharacter = A3;
  }
  return A2.prototype.encodedLength = function(A3) {
    return this._paddingCharacter ? (A3 + 2) / 3 * 4 | 0 : (8 * A3 + 5) / 6 | 0;
  }, A2.prototype.encode = function(A3) {
    for (var Q2 = "", B2 = 0; B2 < A3.length - 2; B2 += 3) {
      var g2 = A3[B2] << 16 | A3[B2 + 1] << 8 | A3[B2 + 2];
      Q2 += this._encodeByte(g2 >>> 18 & 63), Q2 += this._encodeByte(g2 >>> 12 & 63), Q2 += this._encodeByte(g2 >>> 6 & 63), Q2 += this._encodeByte(g2 >>> 0 & 63);
    }
    var I2 = A3.length - B2;
    if (I2 > 0) {
      g2 = A3[B2] << 16 | (I2 === 2 ? A3[B2 + 1] << 8 : 0);
      Q2 += this._encodeByte(g2 >>> 18 & 63), Q2 += this._encodeByte(g2 >>> 12 & 63), Q2 += I2 === 2 ? this._encodeByte(g2 >>> 6 & 63) : this._paddingCharacter || "", Q2 += this._paddingCharacter || "";
    }
    return Q2;
  }, A2.prototype.maxDecodedLength = function(A3) {
    return this._paddingCharacter ? A3 / 4 * 3 | 0 : (6 * A3 + 7) / 8 | 0;
  }, A2.prototype.decodedLength = function(A3) {
    return this.maxDecodedLength(A3.length - this._getPaddingLength(A3));
  }, A2.prototype.decode = function(A3) {
    if (A3.length === 0)
      return new Uint8Array(0);
    for (var Q2 = this._getPaddingLength(A3), B2 = A3.length - Q2, g2 = new Uint8Array(this.maxDecodedLength(B2)), I2 = 0, C2 = 0, E2 = 0, D2 = 0, w2 = 0, M2 = 0, i2 = 0; C2 < B2 - 4; C2 += 4)
      D2 = this._decodeChar(A3.charCodeAt(C2 + 0)), w2 = this._decodeChar(A3.charCodeAt(C2 + 1)), M2 = this._decodeChar(A3.charCodeAt(C2 + 2)), i2 = this._decodeChar(A3.charCodeAt(C2 + 3)), g2[I2++] = D2 << 2 | w2 >>> 4, g2[I2++] = w2 << 4 | M2 >>> 2, g2[I2++] = M2 << 6 | i2, E2 |= 256 & D2, E2 |= 256 & w2, E2 |= 256 & M2, E2 |= 256 & i2;
    if (C2 < B2 - 1 && (D2 = this._decodeChar(A3.charCodeAt(C2)), w2 = this._decodeChar(A3.charCodeAt(C2 + 1)), g2[I2++] = D2 << 2 | w2 >>> 4, E2 |= 256 & D2, E2 |= 256 & w2), C2 < B2 - 2 && (M2 = this._decodeChar(A3.charCodeAt(C2 + 2)), g2[I2++] = w2 << 4 | M2 >>> 2, E2 |= 256 & M2), C2 < B2 - 3 && (i2 = this._decodeChar(A3.charCodeAt(C2 + 3)), g2[I2++] = M2 << 6 | i2, E2 |= 256 & i2), E2 !== 0)
      throw new Error("Base64Coder: incorrect characters for decoding");
    return g2;
  }, A2.prototype._encodeByte = function(A3) {
    var Q2 = A3;
    return Q2 += 65, Q2 += 25 - A3 >>> 8 & 6, Q2 += 51 - A3 >>> 8 & -75, Q2 += 61 - A3 >>> 8 & -15, Q2 += 62 - A3 >>> 8 & 3, String.fromCharCode(Q2);
  }, A2.prototype._decodeChar = function(A3) {
    var Q2 = 256;
    return Q2 += (42 - A3 & A3 - 44) >>> 8 & -256 + A3 - 43 + 62, Q2 += (46 - A3 & A3 - 48) >>> 8 & -256 + A3 - 47 + 63, Q2 += (47 - A3 & A3 - 58) >>> 8 & -256 + A3 - 48 + 52, Q2 += (64 - A3 & A3 - 91) >>> 8 & -256 + A3 - 65 + 0, Q2 += (96 - A3 & A3 - 123) >>> 8 & -256 + A3 - 97 + 26;
  }, A2.prototype._getPaddingLength = function(A3) {
    var Q2 = 0;
    if (this._paddingCharacter) {
      for (var B2 = A3.length - 1; B2 >= 0 && A3[B2] === this._paddingCharacter; B2--)
        Q2++;
      if (A3.length < 4 || Q2 > 2)
        throw new Error("Base64Coder: incorrect padding");
    }
    return Q2;
  }, A2;
}(), P = new f();
var p = function(A2) {
  return P.encode(A2);
};
var t = function(A2) {
  return P.decode(A2);
};
function e(Q2) {
  return a(this, void 0, void 0, function() {
    var B2, g2, I2, C2, E2, D2, w2, M2;
    return H(this, function(i2) {
      switch (i2.label) {
        case 0:
          return Array.isArray(Q2) ? (B2 = X([z("list"), z(Q2.length.toString())]), g2 = W, I2 = [Q2], [4, crypto.subtle.digest("SHA-384", B2)]) : [3, 3];
        case 1:
          return [4, g2.apply(void 0, I2.concat([i2.sent()]))];
        case 2:
        case 6:
          return [2, i2.sent()];
        case 3:
          return C2 = X([z("blob"), z(Q2.byteLength.toString())]), w2 = (D2 = A).concatBuffers, [4, crypto.subtle.digest("SHA-384", C2)];
        case 4:
          return M2 = [i2.sent()], [4, crypto.subtle.digest("SHA-384", Q2)];
        case 5:
          return E2 = w2.apply(D2, [M2.concat([i2.sent()])]), [4, crypto.subtle.digest("SHA-384", E2)];
      }
    });
  });
}
function W(Q2, B2) {
  return a(this, void 0, void 0, function() {
    var g2, I2, C2, E2, D2;
    return H(this, function(w2) {
      switch (w2.label) {
        case 0:
          return Q2.length < 1 ? [2, B2] : (C2 = (I2 = A).concatBuffers, E2 = [B2], [4, e(Q2[0])]);
        case 1:
          return g2 = C2.apply(I2, [E2.concat([w2.sent()])]), [4, crypto.subtle.digest("SHA-384", g2)];
        case 2:
          return D2 = w2.sent(), [4, W(Q2.slice(1), D2)];
        case 3:
          return [2, w2.sent()];
      }
    });
  });
}
new (function(A2) {
  function Q2() {
    return A2 !== null && A2.apply(this, arguments) || this;
  }
  return O(Q2, A2), Q2.prototype._encodeByte = function(A3) {
    var Q3 = A3;
    return Q3 += 65, Q3 += 25 - A3 >>> 8 & 6, Q3 += 51 - A3 >>> 8 & -75, Q3 += 61 - A3 >>> 8 & -13, Q3 += 62 - A3 >>> 8 & 49, String.fromCharCode(Q3);
  }, Q2.prototype._decodeChar = function(A3) {
    var Q3 = 256;
    return Q3 += (44 - A3 & A3 - 46) >>> 8 & -256 + A3 - 45 + 62, Q3 += (94 - A3 & A3 - 96) >>> 8 & -256 + A3 - 95 + 63, Q3 += (47 - A3 & A3 - 58) >>> 8 & -256 + A3 - 48 + 52, Q3 += (64 - A3 & A3 - 91) >>> 8 & -256 + A3 - 65 + 0, Q3 += (96 - A3 & A3 - 123) >>> 8 & -256 + A3 - 97 + 26;
  }, Q2;
}(f))();
var Z = B(function(A2) {
  !function(Q2) {
    var B2, g2 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, I2 = Math.ceil, C2 = Math.floor, E2 = "[BigNumber Error] ", D2 = E2 + "Number primitive has more than 15 significant digits: ", w2 = 1e14, M2 = 14, i2 = 9007199254740991, o2 = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], G2 = 1e7, k2 = 1e9;
    function F2(A3) {
      var Q3 = 0 | A3;
      return A3 > 0 || A3 === Q3 ? Q3 : Q3 - 1;
    }
    function N2(A3) {
      for (var Q3, B3, g3 = 1, I3 = A3.length, C3 = A3[0] + ""; g3 < I3; ) {
        for (Q3 = A3[g3++] + "", B3 = M2 - Q3.length; B3--; Q3 = "0" + Q3)
          ;
        C3 += Q3;
      }
      for (I3 = C3.length; C3.charCodeAt(--I3) === 48; )
        ;
      return C3.slice(0, I3 + 1 || 1);
    }
    function h2(A3, Q3) {
      var B3, g3, I3 = A3.c, C3 = Q3.c, E3 = A3.s, D3 = Q3.s, w3 = A3.e, M3 = Q3.e;
      if (!E3 || !D3)
        return null;
      if (B3 = I3 && !I3[0], g3 = C3 && !C3[0], B3 || g3)
        return B3 ? g3 ? 0 : -D3 : E3;
      if (E3 != D3)
        return E3;
      if (B3 = E3 < 0, g3 = w3 == M3, !I3 || !C3)
        return g3 ? 0 : !I3 ^ B3 ? 1 : -1;
      if (!g3)
        return w3 > M3 ^ B3 ? 1 : -1;
      for (D3 = (w3 = I3.length) < (M3 = C3.length) ? w3 : M3, E3 = 0; E3 < D3; E3++)
        if (I3[E3] != C3[E3])
          return I3[E3] > C3[E3] ^ B3 ? 1 : -1;
      return w3 == M3 ? 0 : w3 > M3 ^ B3 ? 1 : -1;
    }
    function c2(A3, Q3, B3, g3) {
      if (A3 < Q3 || A3 > B3 || A3 !== C2(A3))
        throw Error(E2 + (g3 || "Argument") + (typeof A3 == "number" ? A3 < Q3 || A3 > B3 ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(A3));
    }
    function Y2(A3) {
      var Q3 = A3.c.length - 1;
      return F2(A3.e / M2) == Q3 && A3.c[Q3] % 2 != 0;
    }
    function J2(A3, Q3) {
      return (A3.length > 1 ? A3.charAt(0) + "." + A3.slice(1) : A3) + (Q3 < 0 ? "e" : "e+") + Q3;
    }
    function R2(A3, Q3, B3) {
      var g3, I3;
      if (Q3 < 0) {
        for (I3 = B3 + "."; ++Q3; I3 += B3)
          ;
        A3 = I3 + A3;
      } else if (++Q3 > (g3 = A3.length)) {
        for (I3 = B3, Q3 -= g3; --Q3; I3 += B3)
          ;
        A3 += I3;
      } else
        Q3 < g3 && (A3 = A3.slice(0, Q3) + "." + A3.slice(Q3));
      return A3;
    }
    B2 = function A3(Q3) {
      var B3, a2, H2, s2, L2, U2, y2, K2, S2, q2, x2 = z2.prototype = { constructor: z2, toString: null, valueOf: null }, n2 = new z2(1), d2 = 20, O2 = 4, f2 = -7, P2 = 21, p2 = -1e7, t2 = 1e7, e2 = false, W2 = 1, Z2 = 0, X2 = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: "\xA0", suffix: "" }, m2 = "0123456789abcdefghijklmnopqrstuvwxyz", b2 = true;
      function z2(A4, Q4) {
        var B4, I3, E3, w3, o3, G3, k3, F3, N3 = this;
        if (!(N3 instanceof z2))
          return new z2(A4, Q4);
        if (Q4 == null) {
          if (A4 && A4._isBigNumber === true)
            return N3.s = A4.s, void (!A4.c || A4.e > t2 ? N3.c = N3.e = null : A4.e < p2 ? N3.c = [N3.e = 0] : (N3.e = A4.e, N3.c = A4.c.slice()));
          if ((G3 = typeof A4 == "number") && 0 * A4 == 0) {
            if (N3.s = 1 / A4 < 0 ? (A4 = -A4, -1) : 1, A4 === ~~A4) {
              for (w3 = 0, o3 = A4; o3 >= 10; o3 /= 10, w3++)
                ;
              return void (w3 > t2 ? N3.c = N3.e = null : (N3.e = w3, N3.c = [A4]));
            }
            F3 = String(A4);
          } else {
            if (!g2.test(F3 = String(A4)))
              return H2(N3, F3, G3);
            N3.s = F3.charCodeAt(0) == 45 ? (F3 = F3.slice(1), -1) : 1;
          }
          (w3 = F3.indexOf(".")) > -1 && (F3 = F3.replace(".", "")), (o3 = F3.search(/e/i)) > 0 ? (w3 < 0 && (w3 = o3), w3 += +F3.slice(o3 + 1), F3 = F3.substring(0, o3)) : w3 < 0 && (w3 = F3.length);
        } else {
          if (c2(Q4, 2, m2.length, "Base"), Q4 == 10 && b2)
            return T2(N3 = new z2(A4), d2 + N3.e + 1, O2);
          if (F3 = String(A4), G3 = typeof A4 == "number") {
            if (0 * A4 != 0)
              return H2(N3, F3, G3, Q4);
            if (N3.s = 1 / A4 < 0 ? (F3 = F3.slice(1), -1) : 1, z2.DEBUG && F3.replace(/^0\.0*|\./, "").length > 15)
              throw Error(D2 + A4);
          } else
            N3.s = F3.charCodeAt(0) === 45 ? (F3 = F3.slice(1), -1) : 1;
          for (B4 = m2.slice(0, Q4), w3 = o3 = 0, k3 = F3.length; o3 < k3; o3++)
            if (B4.indexOf(I3 = F3.charAt(o3)) < 0) {
              if (I3 == ".") {
                if (o3 > w3) {
                  w3 = k3;
                  continue;
                }
              } else if (!E3 && (F3 == F3.toUpperCase() && (F3 = F3.toLowerCase()) || F3 == F3.toLowerCase() && (F3 = F3.toUpperCase()))) {
                E3 = true, o3 = -1, w3 = 0;
                continue;
              }
              return H2(N3, String(A4), G3, Q4);
            }
          G3 = false, (w3 = (F3 = a2(F3, Q4, 10, N3.s)).indexOf(".")) > -1 ? F3 = F3.replace(".", "") : w3 = F3.length;
        }
        for (o3 = 0; F3.charCodeAt(o3) === 48; o3++)
          ;
        for (k3 = F3.length; F3.charCodeAt(--k3) === 48; )
          ;
        if (F3 = F3.slice(o3, ++k3)) {
          if (k3 -= o3, G3 && z2.DEBUG && k3 > 15 && (A4 > i2 || A4 !== C2(A4)))
            throw Error(D2 + N3.s * A4);
          if ((w3 = w3 - o3 - 1) > t2)
            N3.c = N3.e = null;
          else if (w3 < p2)
            N3.c = [N3.e = 0];
          else {
            if (N3.e = w3, N3.c = [], o3 = (w3 + 1) % M2, w3 < 0 && (o3 += M2), o3 < k3) {
              for (o3 && N3.c.push(+F3.slice(0, o3)), k3 -= M2; o3 < k3; )
                N3.c.push(+F3.slice(o3, o3 += M2));
              o3 = M2 - (F3 = F3.slice(o3)).length;
            } else
              o3 -= k3;
            for (; o3--; F3 += "0")
              ;
            N3.c.push(+F3);
          }
        } else
          N3.c = [N3.e = 0];
      }
      function l2(A4, Q4, B4, g3) {
        var I3, C3, E3, D3, w3;
        if (B4 == null ? B4 = O2 : c2(B4, 0, 8), !A4.c)
          return A4.toString();
        if (I3 = A4.c[0], E3 = A4.e, Q4 == null)
          w3 = N2(A4.c), w3 = g3 == 1 || g3 == 2 && (E3 <= f2 || E3 >= P2) ? J2(w3, E3) : R2(w3, E3, "0");
        else if (C3 = (A4 = T2(new z2(A4), Q4, B4)).e, D3 = (w3 = N2(A4.c)).length, g3 == 1 || g3 == 2 && (Q4 <= C3 || C3 <= f2)) {
          for (; D3 < Q4; w3 += "0", D3++)
            ;
          w3 = J2(w3, C3);
        } else if (Q4 -= E3, w3 = R2(w3, C3, "0"), C3 + 1 > D3) {
          if (--Q4 > 0)
            for (w3 += "."; Q4--; w3 += "0")
              ;
        } else if ((Q4 += C3 - D3) > 0)
          for (C3 + 1 == D3 && (w3 += "."); Q4--; w3 += "0")
            ;
        return A4.s < 0 && I3 ? "-" + w3 : w3;
      }
      function V2(A4, Q4) {
        for (var B4, g3 = 1, I3 = new z2(A4[0]); g3 < A4.length; g3++) {
          if (!(B4 = new z2(A4[g3])).s) {
            I3 = B4;
            break;
          }
          Q4.call(I3, B4) && (I3 = B4);
        }
        return I3;
      }
      function r2(A4, Q4, B4) {
        for (var g3 = 1, I3 = Q4.length; !Q4[--I3]; Q4.pop())
          ;
        for (I3 = Q4[0]; I3 >= 10; I3 /= 10, g3++)
          ;
        return (B4 = g3 + B4 * M2 - 1) > t2 ? A4.c = A4.e = null : B4 < p2 ? A4.c = [A4.e = 0] : (A4.e = B4, A4.c = Q4), A4;
      }
      function T2(A4, Q4, B4, g3) {
        var E3, D3, i3, G3, k3, F3, N3, h3 = A4.c, c3 = o2;
        if (h3) {
          A: {
            for (E3 = 1, G3 = h3[0]; G3 >= 10; G3 /= 10, E3++)
              ;
            if ((D3 = Q4 - E3) < 0)
              D3 += M2, i3 = Q4, N3 = (k3 = h3[F3 = 0]) / c3[E3 - i3 - 1] % 10 | 0;
            else if ((F3 = I2((D3 + 1) / M2)) >= h3.length) {
              if (!g3)
                break A;
              for (; h3.length <= F3; h3.push(0))
                ;
              k3 = N3 = 0, E3 = 1, i3 = (D3 %= M2) - M2 + 1;
            } else {
              for (k3 = G3 = h3[F3], E3 = 1; G3 >= 10; G3 /= 10, E3++)
                ;
              N3 = (i3 = (D3 %= M2) - M2 + E3) < 0 ? 0 : k3 / c3[E3 - i3 - 1] % 10 | 0;
            }
            if (g3 = g3 || Q4 < 0 || h3[F3 + 1] != null || (i3 < 0 ? k3 : k3 % c3[E3 - i3 - 1]), g3 = B4 < 4 ? (N3 || g3) && (B4 == 0 || B4 == (A4.s < 0 ? 3 : 2)) : N3 > 5 || N3 == 5 && (B4 == 4 || g3 || B4 == 6 && (D3 > 0 ? i3 > 0 ? k3 / c3[E3 - i3] : 0 : h3[F3 - 1]) % 10 & 1 || B4 == (A4.s < 0 ? 8 : 7)), Q4 < 1 || !h3[0])
              return h3.length = 0, g3 ? (Q4 -= A4.e + 1, h3[0] = c3[(M2 - Q4 % M2) % M2], A4.e = -Q4 || 0) : h3[0] = A4.e = 0, A4;
            if (D3 == 0 ? (h3.length = F3, G3 = 1, F3--) : (h3.length = F3 + 1, G3 = c3[M2 - D3], h3[F3] = i3 > 0 ? C2(k3 / c3[E3 - i3] % c3[i3]) * G3 : 0), g3)
              for (; ; ) {
                if (F3 == 0) {
                  for (D3 = 1, i3 = h3[0]; i3 >= 10; i3 /= 10, D3++)
                    ;
                  for (i3 = h3[0] += G3, G3 = 1; i3 >= 10; i3 /= 10, G3++)
                    ;
                  D3 != G3 && (A4.e++, h3[0] == w2 && (h3[0] = 1));
                  break;
                }
                if (h3[F3] += G3, h3[F3] != w2)
                  break;
                h3[F3--] = 0, G3 = 1;
              }
            for (D3 = h3.length; h3[--D3] === 0; h3.pop())
              ;
          }
          A4.e > t2 ? A4.c = A4.e = null : A4.e < p2 && (A4.c = [A4.e = 0]);
        }
        return A4;
      }
      function u2(A4) {
        var Q4, B4 = A4.e;
        return B4 === null ? A4.toString() : (Q4 = N2(A4.c), Q4 = B4 <= f2 || B4 >= P2 ? J2(Q4, B4) : R2(Q4, B4, "0"), A4.s < 0 ? "-" + Q4 : Q4);
      }
      return z2.clone = A3, z2.ROUND_UP = 0, z2.ROUND_DOWN = 1, z2.ROUND_CEIL = 2, z2.ROUND_FLOOR = 3, z2.ROUND_HALF_UP = 4, z2.ROUND_HALF_DOWN = 5, z2.ROUND_HALF_EVEN = 6, z2.ROUND_HALF_CEIL = 7, z2.ROUND_HALF_FLOOR = 8, z2.EUCLID = 9, z2.config = z2.set = function(A4) {
        var Q4, B4;
        if (A4 != null) {
          if (typeof A4 != "object")
            throw Error(E2 + "Object expected: " + A4);
          if (A4.hasOwnProperty(Q4 = "DECIMAL_PLACES") && (c2(B4 = A4[Q4], 0, k2, Q4), d2 = B4), A4.hasOwnProperty(Q4 = "ROUNDING_MODE") && (c2(B4 = A4[Q4], 0, 8, Q4), O2 = B4), A4.hasOwnProperty(Q4 = "EXPONENTIAL_AT") && ((B4 = A4[Q4]) && B4.pop ? (c2(B4[0], -k2, 0, Q4), c2(B4[1], 0, k2, Q4), f2 = B4[0], P2 = B4[1]) : (c2(B4, -k2, k2, Q4), f2 = -(P2 = B4 < 0 ? -B4 : B4))), A4.hasOwnProperty(Q4 = "RANGE"))
            if ((B4 = A4[Q4]) && B4.pop)
              c2(B4[0], -k2, -1, Q4), c2(B4[1], 1, k2, Q4), p2 = B4[0], t2 = B4[1];
            else {
              if (c2(B4, -k2, k2, Q4), !B4)
                throw Error(E2 + Q4 + " cannot be zero: " + B4);
              p2 = -(t2 = B4 < 0 ? -B4 : B4);
            }
          if (A4.hasOwnProperty(Q4 = "CRYPTO")) {
            if ((B4 = A4[Q4]) !== !!B4)
              throw Error(E2 + Q4 + " not true or false: " + B4);
            if (B4) {
              if (typeof crypto == "undefined" || !crypto || !crypto.getRandomValues && !crypto.randomBytes)
                throw e2 = !B4, Error(E2 + "crypto unavailable");
              e2 = B4;
            } else
              e2 = B4;
          }
          if (A4.hasOwnProperty(Q4 = "MODULO_MODE") && (c2(B4 = A4[Q4], 0, 9, Q4), W2 = B4), A4.hasOwnProperty(Q4 = "POW_PRECISION") && (c2(B4 = A4[Q4], 0, k2, Q4), Z2 = B4), A4.hasOwnProperty(Q4 = "FORMAT")) {
            if (typeof (B4 = A4[Q4]) != "object")
              throw Error(E2 + Q4 + " not an object: " + B4);
            X2 = B4;
          }
          if (A4.hasOwnProperty(Q4 = "ALPHABET")) {
            if (typeof (B4 = A4[Q4]) != "string" || /^.?$|[+\-.\s]|(.).*\1/.test(B4))
              throw Error(E2 + Q4 + " invalid: " + B4);
            b2 = B4.slice(0, 10) == "0123456789", m2 = B4;
          }
        }
        return { DECIMAL_PLACES: d2, ROUNDING_MODE: O2, EXPONENTIAL_AT: [f2, P2], RANGE: [p2, t2], CRYPTO: e2, MODULO_MODE: W2, POW_PRECISION: Z2, FORMAT: X2, ALPHABET: m2 };
      }, z2.isBigNumber = function(A4) {
        if (!A4 || A4._isBigNumber !== true)
          return false;
        if (!z2.DEBUG)
          return true;
        var Q4, B4, g3 = A4.c, I3 = A4.e, D3 = A4.s;
        A:
          if ({}.toString.call(g3) == "[object Array]") {
            if ((D3 === 1 || D3 === -1) && I3 >= -k2 && I3 <= k2 && I3 === C2(I3)) {
              if (g3[0] === 0) {
                if (I3 === 0 && g3.length === 1)
                  return true;
                break A;
              }
              if ((Q4 = (I3 + 1) % M2) < 1 && (Q4 += M2), String(g3[0]).length == Q4) {
                for (Q4 = 0; Q4 < g3.length; Q4++)
                  if ((B4 = g3[Q4]) < 0 || B4 >= w2 || B4 !== C2(B4))
                    break A;
                if (B4 !== 0)
                  return true;
              }
            }
          } else if (g3 === null && I3 === null && (D3 === null || D3 === 1 || D3 === -1))
            return true;
        throw Error(E2 + "Invalid BigNumber: " + A4);
      }, z2.maximum = z2.max = function() {
        return V2(arguments, x2.lt);
      }, z2.minimum = z2.min = function() {
        return V2(arguments, x2.gt);
      }, z2.random = (s2 = 9007199254740992, L2 = Math.random() * s2 & 2097151 ? function() {
        return C2(Math.random() * s2);
      } : function() {
        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
      }, function(A4) {
        var Q4, B4, g3, D3, w3, i3 = 0, G3 = [], F3 = new z2(n2);
        if (A4 == null ? A4 = d2 : c2(A4, 0, k2), D3 = I2(A4 / M2), e2)
          if (crypto.getRandomValues) {
            for (Q4 = crypto.getRandomValues(new Uint32Array(D3 *= 2)); i3 < D3; )
              (w3 = 131072 * Q4[i3] + (Q4[i3 + 1] >>> 11)) >= 9e15 ? (B4 = crypto.getRandomValues(new Uint32Array(2)), Q4[i3] = B4[0], Q4[i3 + 1] = B4[1]) : (G3.push(w3 % 1e14), i3 += 2);
            i3 = D3 / 2;
          } else {
            if (!crypto.randomBytes)
              throw e2 = false, Error(E2 + "crypto unavailable");
            for (Q4 = crypto.randomBytes(D3 *= 7); i3 < D3; )
              (w3 = 281474976710656 * (31 & Q4[i3]) + 1099511627776 * Q4[i3 + 1] + 4294967296 * Q4[i3 + 2] + 16777216 * Q4[i3 + 3] + (Q4[i3 + 4] << 16) + (Q4[i3 + 5] << 8) + Q4[i3 + 6]) >= 9e15 ? crypto.randomBytes(7).copy(Q4, i3) : (G3.push(w3 % 1e14), i3 += 7);
            i3 = D3 / 7;
          }
        if (!e2)
          for (; i3 < D3; )
            (w3 = L2()) < 9e15 && (G3[i3++] = w3 % 1e14);
        for (D3 = G3[--i3], A4 %= M2, D3 && A4 && (w3 = o2[M2 - A4], G3[i3] = C2(D3 / w3) * w3); G3[i3] === 0; G3.pop(), i3--)
          ;
        if (i3 < 0)
          G3 = [g3 = 0];
        else {
          for (g3 = -1; G3[0] === 0; G3.splice(0, 1), g3 -= M2)
            ;
          for (i3 = 1, w3 = G3[0]; w3 >= 10; w3 /= 10, i3++)
            ;
          i3 < M2 && (g3 -= M2 - i3);
        }
        return F3.e = g3, F3.c = G3, F3;
      }), z2.sum = function() {
        for (var A4 = 1, Q4 = arguments, B4 = new z2(Q4[0]); A4 < Q4.length; )
          B4 = B4.plus(Q4[A4++]);
        return B4;
      }, a2 = function() {
        var A4 = "0123456789";
        function Q4(A5, Q5, B4, g3) {
          for (var I3, C3, E3 = [0], D3 = 0, w3 = A5.length; D3 < w3; ) {
            for (C3 = E3.length; C3--; E3[C3] *= Q5)
              ;
            for (E3[0] += g3.indexOf(A5.charAt(D3++)), I3 = 0; I3 < E3.length; I3++)
              E3[I3] > B4 - 1 && (E3[I3 + 1] == null && (E3[I3 + 1] = 0), E3[I3 + 1] += E3[I3] / B4 | 0, E3[I3] %= B4);
          }
          return E3.reverse();
        }
        return function(g3, I3, C3, E3, D3) {
          var w3, M3, i3, o3, G3, k3, F3, h3, c3 = g3.indexOf("."), Y3 = d2, J3 = O2;
          for (c3 >= 0 && (o3 = Z2, Z2 = 0, g3 = g3.replace(".", ""), k3 = (h3 = new z2(I3)).pow(g3.length - c3), Z2 = o3, h3.c = Q4(R2(N2(k3.c), k3.e, "0"), 10, C3, A4), h3.e = h3.c.length), i3 = o3 = (F3 = Q4(g3, I3, C3, D3 ? (w3 = m2, A4) : (w3 = A4, m2))).length; F3[--o3] == 0; F3.pop())
            ;
          if (!F3[0])
            return w3.charAt(0);
          if (c3 < 0 ? --i3 : (k3.c = F3, k3.e = i3, k3.s = E3, F3 = (k3 = B3(k3, h3, Y3, J3, C3)).c, G3 = k3.r, i3 = k3.e), c3 = F3[M3 = i3 + Y3 + 1], o3 = C3 / 2, G3 = G3 || M3 < 0 || F3[M3 + 1] != null, G3 = J3 < 4 ? (c3 != null || G3) && (J3 == 0 || J3 == (k3.s < 0 ? 3 : 2)) : c3 > o3 || c3 == o3 && (J3 == 4 || G3 || J3 == 6 && 1 & F3[M3 - 1] || J3 == (k3.s < 0 ? 8 : 7)), M3 < 1 || !F3[0])
            g3 = G3 ? R2(w3.charAt(1), -Y3, w3.charAt(0)) : w3.charAt(0);
          else {
            if (F3.length = M3, G3)
              for (--C3; ++F3[--M3] > C3; )
                F3[M3] = 0, M3 || (++i3, F3 = [1].concat(F3));
            for (o3 = F3.length; !F3[--o3]; )
              ;
            for (c3 = 0, g3 = ""; c3 <= o3; g3 += w3.charAt(F3[c3++]))
              ;
            g3 = R2(g3, i3, w3.charAt(0));
          }
          return g3;
        };
      }(), B3 = function() {
        function A4(A5, Q5, B5) {
          var g3, I3, C3, E3, D3 = 0, w3 = A5.length, M3 = Q5 % G2, i3 = Q5 / G2 | 0;
          for (A5 = A5.slice(); w3--; )
            D3 = ((I3 = M3 * (C3 = A5[w3] % G2) + (g3 = i3 * C3 + (E3 = A5[w3] / G2 | 0) * M3) % G2 * G2 + D3) / B5 | 0) + (g3 / G2 | 0) + i3 * E3, A5[w3] = I3 % B5;
          return D3 && (A5 = [D3].concat(A5)), A5;
        }
        function Q4(A5, Q5, B5, g3) {
          var I3, C3;
          if (B5 != g3)
            C3 = B5 > g3 ? 1 : -1;
          else
            for (I3 = C3 = 0; I3 < B5; I3++)
              if (A5[I3] != Q5[I3]) {
                C3 = A5[I3] > Q5[I3] ? 1 : -1;
                break;
              }
          return C3;
        }
        function B4(A5, Q5, B5, g3) {
          for (var I3 = 0; B5--; )
            A5[B5] -= I3, I3 = A5[B5] < Q5[B5] ? 1 : 0, A5[B5] = I3 * g3 + A5[B5] - Q5[B5];
          for (; !A5[0] && A5.length > 1; A5.splice(0, 1))
            ;
        }
        return function(g3, I3, E3, D3, i3) {
          var o3, G3, k3, N3, h3, c3, Y3, J3, R3, a3, H3, s3, L3, U3, y3, K3, S3, q3 = g3.s == I3.s ? 1 : -1, x3 = g3.c, n3 = I3.c;
          if (!(x3 && x3[0] && n3 && n3[0]))
            return new z2(g3.s && I3.s && (x3 ? !n3 || x3[0] != n3[0] : n3) ? x3 && x3[0] == 0 || !n3 ? 0 * q3 : q3 / 0 : NaN);
          for (R3 = (J3 = new z2(q3)).c = [], q3 = E3 + (G3 = g3.e - I3.e) + 1, i3 || (i3 = w2, G3 = F2(g3.e / M2) - F2(I3.e / M2), q3 = q3 / M2 | 0), k3 = 0; n3[k3] == (x3[k3] || 0); k3++)
            ;
          if (n3[k3] > (x3[k3] || 0) && G3--, q3 < 0)
            R3.push(1), N3 = true;
          else {
            for (U3 = x3.length, K3 = n3.length, k3 = 0, q3 += 2, (h3 = C2(i3 / (n3[0] + 1))) > 1 && (n3 = A4(n3, h3, i3), x3 = A4(x3, h3, i3), K3 = n3.length, U3 = x3.length), L3 = K3, H3 = (a3 = x3.slice(0, K3)).length; H3 < K3; a3[H3++] = 0)
              ;
            S3 = n3.slice(), S3 = [0].concat(S3), y3 = n3[0], n3[1] >= i3 / 2 && y3++;
            do {
              if (h3 = 0, (o3 = Q4(n3, a3, K3, H3)) < 0) {
                if (s3 = a3[0], K3 != H3 && (s3 = s3 * i3 + (a3[1] || 0)), (h3 = C2(s3 / y3)) > 1)
                  for (h3 >= i3 && (h3 = i3 - 1), Y3 = (c3 = A4(n3, h3, i3)).length, H3 = a3.length; Q4(c3, a3, Y3, H3) == 1; )
                    h3--, B4(c3, K3 < Y3 ? S3 : n3, Y3, i3), Y3 = c3.length, o3 = 1;
                else
                  h3 == 0 && (o3 = h3 = 1), Y3 = (c3 = n3.slice()).length;
                if (Y3 < H3 && (c3 = [0].concat(c3)), B4(a3, c3, H3, i3), H3 = a3.length, o3 == -1)
                  for (; Q4(n3, a3, K3, H3) < 1; )
                    h3++, B4(a3, K3 < H3 ? S3 : n3, H3, i3), H3 = a3.length;
              } else
                o3 === 0 && (h3++, a3 = [0]);
              R3[k3++] = h3, a3[0] ? a3[H3++] = x3[L3] || 0 : (a3 = [x3[L3]], H3 = 1);
            } while ((L3++ < U3 || a3[0] != null) && q3--);
            N3 = a3[0] != null, R3[0] || R3.splice(0, 1);
          }
          if (i3 == w2) {
            for (k3 = 1, q3 = R3[0]; q3 >= 10; q3 /= 10, k3++)
              ;
            T2(J3, E3 + (J3.e = k3 + G3 * M2 - 1) + 1, D3, N3);
          } else
            J3.e = G3, J3.r = +N3;
          return J3;
        };
      }(), U2 = /^(-?)0([xbo])(?=\w[\w.]*$)/i, y2 = /^([^.]+)\.$/, K2 = /^\.([^.]+)$/, S2 = /^-?(Infinity|NaN)$/, q2 = /^\s*\+(?=[\w.])|^\s+|\s+$/g, H2 = function(A4, Q4, B4, g3) {
        var I3, C3 = B4 ? Q4 : Q4.replace(q2, "");
        if (S2.test(C3))
          A4.s = isNaN(C3) ? null : C3 < 0 ? -1 : 1;
        else {
          if (!B4 && (C3 = C3.replace(U2, function(A5, Q5, B5) {
            return I3 = (B5 = B5.toLowerCase()) == "x" ? 16 : B5 == "b" ? 2 : 8, g3 && g3 != I3 ? A5 : Q5;
          }), g3 && (I3 = g3, C3 = C3.replace(y2, "$1").replace(K2, "0.$1")), Q4 != C3))
            return new z2(C3, I3);
          if (z2.DEBUG)
            throw Error(E2 + "Not a" + (g3 ? " base " + g3 : "") + " number: " + Q4);
          A4.s = null;
        }
        A4.c = A4.e = null;
      }, x2.absoluteValue = x2.abs = function() {
        var A4 = new z2(this);
        return A4.s < 0 && (A4.s = 1), A4;
      }, x2.comparedTo = function(A4, Q4) {
        return h2(this, new z2(A4, Q4));
      }, x2.decimalPlaces = x2.dp = function(A4, Q4) {
        var B4, g3, I3, C3 = this;
        if (A4 != null)
          return c2(A4, 0, k2), Q4 == null ? Q4 = O2 : c2(Q4, 0, 8), T2(new z2(C3), A4 + C3.e + 1, Q4);
        if (!(B4 = C3.c))
          return null;
        if (g3 = ((I3 = B4.length - 1) - F2(this.e / M2)) * M2, I3 = B4[I3])
          for (; I3 % 10 == 0; I3 /= 10, g3--)
            ;
        return g3 < 0 && (g3 = 0), g3;
      }, x2.dividedBy = x2.div = function(A4, Q4) {
        return B3(this, new z2(A4, Q4), d2, O2);
      }, x2.dividedToIntegerBy = x2.idiv = function(A4, Q4) {
        return B3(this, new z2(A4, Q4), 0, 1);
      }, x2.exponentiatedBy = x2.pow = function(A4, Q4) {
        var B4, g3, D3, w3, i3, o3, G3, k3, F3 = this;
        if ((A4 = new z2(A4)).c && !A4.isInteger())
          throw Error(E2 + "Exponent not an integer: " + u2(A4));
        if (Q4 != null && (Q4 = new z2(Q4)), i3 = A4.e > 14, !F3.c || !F3.c[0] || F3.c[0] == 1 && !F3.e && F3.c.length == 1 || !A4.c || !A4.c[0])
          return k3 = new z2(Math.pow(+u2(F3), i3 ? 2 - Y2(A4) : +u2(A4))), Q4 ? k3.mod(Q4) : k3;
        if (o3 = A4.s < 0, Q4) {
          if (Q4.c ? !Q4.c[0] : !Q4.s)
            return new z2(NaN);
          (g3 = !o3 && F3.isInteger() && Q4.isInteger()) && (F3 = F3.mod(Q4));
        } else {
          if (A4.e > 9 && (F3.e > 0 || F3.e < -1 || (F3.e == 0 ? F3.c[0] > 1 || i3 && F3.c[1] >= 24e7 : F3.c[0] < 8e13 || i3 && F3.c[0] <= 9999975e7)))
            return w3 = F3.s < 0 && Y2(A4) ? -0 : 0, F3.e > -1 && (w3 = 1 / w3), new z2(o3 ? 1 / w3 : w3);
          Z2 && (w3 = I2(Z2 / M2 + 2));
        }
        for (i3 ? (B4 = new z2(0.5), o3 && (A4.s = 1), G3 = Y2(A4)) : G3 = (D3 = Math.abs(+u2(A4))) % 2, k3 = new z2(n2); ; ) {
          if (G3) {
            if (!(k3 = k3.times(F3)).c)
              break;
            w3 ? k3.c.length > w3 && (k3.c.length = w3) : g3 && (k3 = k3.mod(Q4));
          }
          if (D3) {
            if ((D3 = C2(D3 / 2)) === 0)
              break;
            G3 = D3 % 2;
          } else if (T2(A4 = A4.times(B4), A4.e + 1, 1), A4.e > 14)
            G3 = Y2(A4);
          else {
            if ((D3 = +u2(A4)) === 0)
              break;
            G3 = D3 % 2;
          }
          F3 = F3.times(F3), w3 ? F3.c && F3.c.length > w3 && (F3.c.length = w3) : g3 && (F3 = F3.mod(Q4));
        }
        return g3 ? k3 : (o3 && (k3 = n2.div(k3)), Q4 ? k3.mod(Q4) : w3 ? T2(k3, Z2, O2, void 0) : k3);
      }, x2.integerValue = function(A4) {
        var Q4 = new z2(this);
        return A4 == null ? A4 = O2 : c2(A4, 0, 8), T2(Q4, Q4.e + 1, A4);
      }, x2.isEqualTo = x2.eq = function(A4, Q4) {
        return h2(this, new z2(A4, Q4)) === 0;
      }, x2.isFinite = function() {
        return !!this.c;
      }, x2.isGreaterThan = x2.gt = function(A4, Q4) {
        return h2(this, new z2(A4, Q4)) > 0;
      }, x2.isGreaterThanOrEqualTo = x2.gte = function(A4, Q4) {
        return (Q4 = h2(this, new z2(A4, Q4))) === 1 || Q4 === 0;
      }, x2.isInteger = function() {
        return !!this.c && F2(this.e / M2) > this.c.length - 2;
      }, x2.isLessThan = x2.lt = function(A4, Q4) {
        return h2(this, new z2(A4, Q4)) < 0;
      }, x2.isLessThanOrEqualTo = x2.lte = function(A4, Q4) {
        return (Q4 = h2(this, new z2(A4, Q4))) === -1 || Q4 === 0;
      }, x2.isNaN = function() {
        return !this.s;
      }, x2.isNegative = function() {
        return this.s < 0;
      }, x2.isPositive = function() {
        return this.s > 0;
      }, x2.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, x2.minus = function(A4, Q4) {
        var B4, g3, I3, C3, E3 = this, D3 = E3.s;
        if (Q4 = (A4 = new z2(A4, Q4)).s, !D3 || !Q4)
          return new z2(NaN);
        if (D3 != Q4)
          return A4.s = -Q4, E3.plus(A4);
        var i3 = E3.e / M2, o3 = A4.e / M2, G3 = E3.c, k3 = A4.c;
        if (!i3 || !o3) {
          if (!G3 || !k3)
            return G3 ? (A4.s = -Q4, A4) : new z2(k3 ? E3 : NaN);
          if (!G3[0] || !k3[0])
            return k3[0] ? (A4.s = -Q4, A4) : new z2(G3[0] ? E3 : O2 == 3 ? -0 : 0);
        }
        if (i3 = F2(i3), o3 = F2(o3), G3 = G3.slice(), D3 = i3 - o3) {
          for ((C3 = D3 < 0) ? (D3 = -D3, I3 = G3) : (o3 = i3, I3 = k3), I3.reverse(), Q4 = D3; Q4--; I3.push(0))
            ;
          I3.reverse();
        } else
          for (g3 = (C3 = (D3 = G3.length) < (Q4 = k3.length)) ? D3 : Q4, D3 = Q4 = 0; Q4 < g3; Q4++)
            if (G3[Q4] != k3[Q4]) {
              C3 = G3[Q4] < k3[Q4];
              break;
            }
        if (C3 && (I3 = G3, G3 = k3, k3 = I3, A4.s = -A4.s), (Q4 = (g3 = k3.length) - (B4 = G3.length)) > 0)
          for (; Q4--; G3[B4++] = 0)
            ;
        for (Q4 = w2 - 1; g3 > D3; ) {
          if (G3[--g3] < k3[g3]) {
            for (B4 = g3; B4 && !G3[--B4]; G3[B4] = Q4)
              ;
            --G3[B4], G3[g3] += w2;
          }
          G3[g3] -= k3[g3];
        }
        for (; G3[0] == 0; G3.splice(0, 1), --o3)
          ;
        return G3[0] ? r2(A4, G3, o3) : (A4.s = O2 == 3 ? -1 : 1, A4.c = [A4.e = 0], A4);
      }, x2.modulo = x2.mod = function(A4, Q4) {
        var g3, I3, C3 = this;
        return A4 = new z2(A4, Q4), !C3.c || !A4.s || A4.c && !A4.c[0] ? new z2(NaN) : !A4.c || C3.c && !C3.c[0] ? new z2(C3) : (W2 == 9 ? (I3 = A4.s, A4.s = 1, g3 = B3(C3, A4, 0, 3), A4.s = I3, g3.s *= I3) : g3 = B3(C3, A4, 0, W2), (A4 = C3.minus(g3.times(A4))).c[0] || W2 != 1 || (A4.s = C3.s), A4);
      }, x2.multipliedBy = x2.times = function(A4, Q4) {
        var B4, g3, I3, C3, E3, D3, i3, o3, k3, N3, h3, c3, Y3, J3, R3, a3 = this, H3 = a3.c, s3 = (A4 = new z2(A4, Q4)).c;
        if (!(H3 && s3 && H3[0] && s3[0]))
          return !a3.s || !A4.s || H3 && !H3[0] && !s3 || s3 && !s3[0] && !H3 ? A4.c = A4.e = A4.s = null : (A4.s *= a3.s, H3 && s3 ? (A4.c = [0], A4.e = 0) : A4.c = A4.e = null), A4;
        for (g3 = F2(a3.e / M2) + F2(A4.e / M2), A4.s *= a3.s, (i3 = H3.length) < (N3 = s3.length) && (Y3 = H3, H3 = s3, s3 = Y3, I3 = i3, i3 = N3, N3 = I3), I3 = i3 + N3, Y3 = []; I3--; Y3.push(0))
          ;
        for (J3 = w2, R3 = G2, I3 = N3; --I3 >= 0; ) {
          for (B4 = 0, h3 = s3[I3] % R3, c3 = s3[I3] / R3 | 0, C3 = I3 + (E3 = i3); C3 > I3; )
            B4 = ((o3 = h3 * (o3 = H3[--E3] % R3) + (D3 = c3 * o3 + (k3 = H3[E3] / R3 | 0) * h3) % R3 * R3 + Y3[C3] + B4) / J3 | 0) + (D3 / R3 | 0) + c3 * k3, Y3[C3--] = o3 % J3;
          Y3[C3] = B4;
        }
        return B4 ? ++g3 : Y3.splice(0, 1), r2(A4, Y3, g3);
      }, x2.negated = function() {
        var A4 = new z2(this);
        return A4.s = -A4.s || null, A4;
      }, x2.plus = function(A4, Q4) {
        var B4, g3 = this, I3 = g3.s;
        if (Q4 = (A4 = new z2(A4, Q4)).s, !I3 || !Q4)
          return new z2(NaN);
        if (I3 != Q4)
          return A4.s = -Q4, g3.minus(A4);
        var C3 = g3.e / M2, E3 = A4.e / M2, D3 = g3.c, i3 = A4.c;
        if (!C3 || !E3) {
          if (!D3 || !i3)
            return new z2(I3 / 0);
          if (!D3[0] || !i3[0])
            return i3[0] ? A4 : new z2(D3[0] ? g3 : 0 * I3);
        }
        if (C3 = F2(C3), E3 = F2(E3), D3 = D3.slice(), I3 = C3 - E3) {
          for (I3 > 0 ? (E3 = C3, B4 = i3) : (I3 = -I3, B4 = D3), B4.reverse(); I3--; B4.push(0))
            ;
          B4.reverse();
        }
        for ((I3 = D3.length) - (Q4 = i3.length) < 0 && (B4 = i3, i3 = D3, D3 = B4, Q4 = I3), I3 = 0; Q4; )
          I3 = (D3[--Q4] = D3[Q4] + i3[Q4] + I3) / w2 | 0, D3[Q4] = w2 === D3[Q4] ? 0 : D3[Q4] % w2;
        return I3 && (D3 = [I3].concat(D3), ++E3), r2(A4, D3, E3);
      }, x2.precision = x2.sd = function(A4, Q4) {
        var B4, g3, I3, C3 = this;
        if (A4 != null && A4 !== !!A4)
          return c2(A4, 1, k2), Q4 == null ? Q4 = O2 : c2(Q4, 0, 8), T2(new z2(C3), A4, Q4);
        if (!(B4 = C3.c))
          return null;
        if (g3 = (I3 = B4.length - 1) * M2 + 1, I3 = B4[I3]) {
          for (; I3 % 10 == 0; I3 /= 10, g3--)
            ;
          for (I3 = B4[0]; I3 >= 10; I3 /= 10, g3++)
            ;
        }
        return A4 && C3.e + 1 > g3 && (g3 = C3.e + 1), g3;
      }, x2.shiftedBy = function(A4) {
        return c2(A4, -9007199254740991, i2), this.times("1e" + A4);
      }, x2.squareRoot = x2.sqrt = function() {
        var A4, Q4, g3, I3, C3, E3 = this, D3 = E3.c, w3 = E3.s, M3 = E3.e, i3 = d2 + 4, o3 = new z2("0.5");
        if (w3 !== 1 || !D3 || !D3[0])
          return new z2(!w3 || w3 < 0 && (!D3 || D3[0]) ? NaN : D3 ? E3 : 1 / 0);
        if ((w3 = Math.sqrt(+u2(E3))) == 0 || w3 == 1 / 0 ? (((Q4 = N2(D3)).length + M3) % 2 == 0 && (Q4 += "0"), w3 = Math.sqrt(+Q4), M3 = F2((M3 + 1) / 2) - (M3 < 0 || M3 % 2), g3 = new z2(Q4 = w3 == 1 / 0 ? "5e" + M3 : (Q4 = w3.toExponential()).slice(0, Q4.indexOf("e") + 1) + M3)) : g3 = new z2(w3 + ""), g3.c[0]) {
          for ((w3 = (M3 = g3.e) + i3) < 3 && (w3 = 0); ; )
            if (C3 = g3, g3 = o3.times(C3.plus(B3(E3, C3, i3, 1))), N2(C3.c).slice(0, w3) === (Q4 = N2(g3.c)).slice(0, w3)) {
              if (g3.e < M3 && --w3, (Q4 = Q4.slice(w3 - 3, w3 + 1)) != "9999" && (I3 || Q4 != "4999")) {
                +Q4 && (+Q4.slice(1) || Q4.charAt(0) != "5") || (T2(g3, g3.e + d2 + 2, 1), A4 = !g3.times(g3).eq(E3));
                break;
              }
              if (!I3 && (T2(C3, C3.e + d2 + 2, 0), C3.times(C3).eq(E3))) {
                g3 = C3;
                break;
              }
              i3 += 4, w3 += 4, I3 = 1;
            }
        }
        return T2(g3, g3.e + d2 + 1, O2, A4);
      }, x2.toExponential = function(A4, Q4) {
        return A4 != null && (c2(A4, 0, k2), A4++), l2(this, A4, Q4, 1);
      }, x2.toFixed = function(A4, Q4) {
        return A4 != null && (c2(A4, 0, k2), A4 = A4 + this.e + 1), l2(this, A4, Q4);
      }, x2.toFormat = function(A4, Q4, B4) {
        var g3, I3 = this;
        if (B4 == null)
          A4 != null && Q4 && typeof Q4 == "object" ? (B4 = Q4, Q4 = null) : A4 && typeof A4 == "object" ? (B4 = A4, A4 = Q4 = null) : B4 = X2;
        else if (typeof B4 != "object")
          throw Error(E2 + "Argument not an object: " + B4);
        if (g3 = I3.toFixed(A4, Q4), I3.c) {
          var C3, D3 = g3.split("."), w3 = +B4.groupSize, M3 = +B4.secondaryGroupSize, i3 = B4.groupSeparator || "", o3 = D3[0], G3 = D3[1], k3 = I3.s < 0, F3 = k3 ? o3.slice(1) : o3, N3 = F3.length;
          if (M3 && (C3 = w3, w3 = M3, M3 = C3, N3 -= C3), w3 > 0 && N3 > 0) {
            for (C3 = N3 % w3 || w3, o3 = F3.substr(0, C3); C3 < N3; C3 += w3)
              o3 += i3 + F3.substr(C3, w3);
            M3 > 0 && (o3 += i3 + F3.slice(C3)), k3 && (o3 = "-" + o3);
          }
          g3 = G3 ? o3 + (B4.decimalSeparator || "") + ((M3 = +B4.fractionGroupSize) ? G3.replace(new RegExp("\\d{" + M3 + "}\\B", "g"), "$&" + (B4.fractionGroupSeparator || "")) : G3) : o3;
        }
        return (B4.prefix || "") + g3 + (B4.suffix || "");
      }, x2.toFraction = function(A4) {
        var Q4, g3, I3, C3, D3, w3, i3, G3, k3, F3, h3, c3, Y3 = this, J3 = Y3.c;
        if (A4 != null && (!(i3 = new z2(A4)).isInteger() && (i3.c || i3.s !== 1) || i3.lt(n2)))
          throw Error(E2 + "Argument " + (i3.isInteger() ? "out of range: " : "not an integer: ") + u2(i3));
        if (!J3)
          return new z2(Y3);
        for (Q4 = new z2(n2), k3 = g3 = new z2(n2), I3 = G3 = new z2(n2), c3 = N2(J3), D3 = Q4.e = c3.length - Y3.e - 1, Q4.c[0] = o2[(w3 = D3 % M2) < 0 ? M2 + w3 : w3], A4 = !A4 || i3.comparedTo(Q4) > 0 ? D3 > 0 ? Q4 : k3 : i3, w3 = t2, t2 = 1 / 0, i3 = new z2(c3), G3.c[0] = 0; F3 = B3(i3, Q4, 0, 1), (C3 = g3.plus(F3.times(I3))).comparedTo(A4) != 1; )
          g3 = I3, I3 = C3, k3 = G3.plus(F3.times(C3 = k3)), G3 = C3, Q4 = i3.minus(F3.times(C3 = Q4)), i3 = C3;
        return C3 = B3(A4.minus(g3), I3, 0, 1), G3 = G3.plus(C3.times(k3)), g3 = g3.plus(C3.times(I3)), G3.s = k3.s = Y3.s, h3 = B3(k3, I3, D3 *= 2, O2).minus(Y3).abs().comparedTo(B3(G3, g3, D3, O2).minus(Y3).abs()) < 1 ? [k3, I3] : [G3, g3], t2 = w3, h3;
      }, x2.toNumber = function() {
        return +u2(this);
      }, x2.toPrecision = function(A4, Q4) {
        return A4 != null && c2(A4, 1, k2), l2(this, A4, Q4, 2);
      }, x2.toString = function(A4) {
        var Q4, B4 = this, g3 = B4.s, I3 = B4.e;
        return I3 === null ? g3 ? (Q4 = "Infinity", g3 < 0 && (Q4 = "-" + Q4)) : Q4 = "NaN" : (A4 == null ? Q4 = I3 <= f2 || I3 >= P2 ? J2(N2(B4.c), I3) : R2(N2(B4.c), I3, "0") : A4 === 10 && b2 ? Q4 = R2(N2((B4 = T2(new z2(B4), d2 + I3 + 1, O2)).c), B4.e, "0") : (c2(A4, 2, m2.length, "Base"), Q4 = a2(R2(N2(B4.c), I3, "0"), 10, A4, g3, true)), g3 < 0 && B4.c[0] && (Q4 = "-" + Q4)), Q4;
      }, x2.valueOf = x2.toJSON = function() {
        return u2(this);
      }, x2._isBigNumber = true, Q3 != null && z2.set(Q3), z2;
    }(), B2.default = B2.BigNumber = B2, A2.exports ? A2.exports = B2 : (Q2 || (Q2 = typeof self != "undefined" && self ? self : window), Q2.BigNumber = B2);
  }(Q);
});
function X(A2) {
  for (var Q2 = 0, B2 = 0; B2 < A2.length; B2++)
    Q2 += A2[B2].byteLength;
  var g2 = new Uint8Array(Q2), I2 = 0;
  g2.set(new Uint8Array(A2[0]), I2), I2 += A2[0].byteLength;
  for (B2 = 1; B2 < A2.length; B2++)
    g2.set(new Uint8Array(A2[B2]), I2), I2 += A2[B2].byteLength;
  return g2;
}
function m(A2) {
  var Q2 = V(A2);
  return typeof TextDecoder == "undefined" ? new (require("util")).TextDecoder("utf-8", { fatal: true }).decode(Q2) : new TextDecoder("utf-8", { fatal: true }).decode(Q2);
}
function b(A2) {
  return typeof TextDecoder == "undefined" ? new (require("util")).TextDecoder("utf-8", { fatal: true }).decode(A2) : new TextDecoder("utf-8", { fatal: true }).decode(A2);
}
function z(A2) {
  return typeof TextEncoder == "undefined" ? new (require("util")).TextEncoder().encode(A2) : new TextEncoder().encode(A2);
}
function l(A2) {
  return T(z(A2));
}
function V(A2) {
  return new Uint8Array(t(j(A2)));
}
function r(A2) {
  return p(new Uint8Array(A2));
}
function T(A2) {
  return u(r(A2));
}
function u(A2) {
  return A2.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
function j(A2) {
  var Q2;
  return Q2 = (A2 = A2.replace(/\-/g, "+").replace(/\_/g, "/")).length % 4 == 0 ? 0 : 4 - A2.length % 4, A2.concat("=".repeat(Q2));
}
function v(A2) {
  return a(this, void 0, void 0, function() {
    var Q2, B2;
    return H(this, function(g2) {
      switch (g2.label) {
        case 0:
          switch (A2 = new BA(A2), A2.format) {
            case 1:
              return [3, 1];
            case 2:
              return [3, 2];
          }
          return [3, 6];
        case 1:
          return Q2 = A2.tags.reduce(function(A3, Q3) {
            return X([A3, Q3.get("name", { decode: true, string: false }), Q3.get("value", { decode: true, string: false })]);
          }, new Uint8Array()), [2, X([A2.get("owner", { decode: true, string: false }), A2.get("target", { decode: true, string: false }), A2.get("data", { decode: true, string: false }), z(A2.quantity), z(A2.reward), A2.get("last_tx", { decode: true, string: false }), Q2])];
        case 2:
          return A2.data_root ? [3, 4] : [4, A2.prepareChunks(A2.data)];
        case 3:
          g2.sent(), g2.label = 4;
        case 4:
          return B2 = A2.tags.map(function(A3) {
            return [A3.get("name", { decode: true, string: false }), A3.get("value", { decode: true, string: false })];
          }), [4, e([z(A2.format.toString()), A2.get("owner", { decode: true, string: false }), A2.get("target", { decode: true, string: false }), z(A2.quantity), z(A2.reward), A2.get("last_tx", { decode: true, string: false }), B2, z(A2.data_size), A2.get("data_root", { decode: true, string: false })])];
        case 5:
          return [2, g2.sent()];
        case 6:
          throw new Error("Unexpected transaction format: ".concat(A2.format));
      }
    });
  });
}
function _(A2, Q2) {
  var B2 = Q2.id, g2 = Q2.owner, I2 = Q2.reward, C2 = Q2.tags, E2 = Q2.signature;
  return A2.id = B2, A2.owner = g2, I2 && (A2.reward = I2), C2 && (A2.tags = C2), A2.signature = E2, A2;
}
var $ = function() {
  function A2() {
  }
  return A2.prototype.get = function(A3, Q2) {
    if (!Object.getOwnPropertyNames(this).includes(A3))
      throw new Error('Field "'.concat(A3, '" is not a property of the Arweave Transaction class.'));
    return this[A3] instanceof Uint8Array ? Q2 && Q2.decode && Q2.string ? b(this[A3]) : Q2 && Q2.decode && !Q2.string ? this[A3] : T(this[A3]) : Q2 && Q2.decode == 1 ? Q2 && Q2.string ? m(this[A3]) : V(this[A3]) : this[A3];
  }, A2;
}(), AA = function(A2) {
  function Q2(Q3, B2, g2) {
    var I2 = A2.call(this) || this;
    return I2.name = Q3, I2.value = B2, I2;
  }
  return J(Q2, A2), Q2;
}($), QA = {}, BA = function(A2) {
  function Q2(Q3) {
    Q3 === void 0 && (Q3 = {});
    var B2 = A2.call(this) || this;
    return B2.format = 2, B2.id = "", B2.last_tx = "", B2.owner = "", B2.tags = [], B2.target = "", B2.quantity = "0", B2.data_size = "0", B2.data = new Uint8Array(), B2.data_root = "", B2.reward = "0", B2.signature = "", Object.assign(B2, Q3), typeof B2.data == "string" && (B2.data = ArweaveUtils.b64UrlToBuffer(B2.data)), Q3.tags && (B2.tags = Q3.tags.map(function(A3) {
      return new AA(A3.name, A3.value);
    })), B2;
  }
  return J(Q2, A2), Q2.prototype.addTag = function(A3, Q3) {
    this.tags.push(new AA(ArweaveUtils.stringToB64Url(A3), ArweaveUtils.stringToB64Url(Q3)));
  }, Q2.prototype.toJSON = function() {
    return { format: this.format, id: this.id, last_tx: this.last_tx, owner: this.owner, tags: this.tags, target: this.target, quantity: this.quantity, data: ArweaveUtils.bufferTob64Url(this.data), data_size: this.data_size, data_root: this.data_root, data_tree: this.data_tree, reward: this.reward, signature: this.signature };
  }, Q2.prototype.setOwner = function(A3) {
    this.owner = A3;
  }, Q2.prototype.setSignature = function(A3) {
    var Q3 = A3.id, B2 = A3.owner, g2 = A3.reward, I2 = A3.tags, C2 = A3.signature;
    this.id = Q3, this.owner = B2, g2 && (this.reward = g2), I2 && (this.tags = I2), this.signature = C2;
  }, Q2.prototype.prepareChunks = function(A3) {
    return a(this, void 0, void 0, function() {
      var Q3;
      return H(this, function(B2) {
        switch (B2.label) {
          case 0:
            return !this.chunks && A3.byteLength > 0 ? (Q3 = this, [4, generateTransactionChunks(A3)]) : [3, 2];
          case 1:
            Q3.chunks = B2.sent(), this.data_root = ArweaveUtils.bufferTob64Url(this.chunks.data_root), B2.label = 2;
          case 2:
            return this.chunks || A3.byteLength !== 0 || (this.chunks = { chunks: [], data_root: new Uint8Array(), proofs: [] }, this.data_root = ""), [2];
        }
      });
    });
  }, Q2.prototype.getChunk = function(A3, Q3) {
    if (!this.chunks)
      throw new Error("Chunks have not been prepared");
    var B2 = this.chunks.proofs[A3], g2 = this.chunks.chunks[A3];
    return { data_root: this.data_root, data_size: this.data_size, data_path: ArweaveUtils.bufferTob64Url(B2.proof), offset: B2.offset.toString(), chunk: ArweaveUtils.bufferTob64Url(Q3.slice(g2.minByteRange, g2.maxByteRange)) };
  }, Q2.prototype.getSignatureData = function() {
    return a(this, void 0, void 0, function() {
      var A3, Q3;
      return H(this, function(B2) {
        switch (B2.label) {
          case 0:
            switch (this.format) {
              case 1:
                return [3, 1];
              case 2:
                return [3, 2];
            }
            return [3, 6];
          case 1:
            return A3 = this.tags.reduce(function(A4, Q4) {
              return ArweaveUtils.concatBuffers([A4, Q4.get("name", { decode: true, string: false }), Q4.get("value", { decode: true, string: false })]);
            }, new Uint8Array()), [2, ArweaveUtils.concatBuffers([this.get("owner", { decode: true, string: false }), this.get("target", { decode: true, string: false }), this.get("data", { decode: true, string: false }), ArweaveUtils.stringToBuffer(this.quantity), ArweaveUtils.stringToBuffer(this.reward), this.get("last_tx", { decode: true, string: false }), A3])];
          case 2:
            return this.data_root ? [3, 4] : [4, this.prepareChunks(this.data)];
          case 3:
            B2.sent(), B2.label = 4;
          case 4:
            return Q3 = this.tags.map(function(A4) {
              return [A4.get("name", { decode: true, string: false }), A4.get("value", { decode: true, string: false })];
            }), [4, e([ArweaveUtils.stringToBuffer(this.format.toString()), this.get("owner", { decode: true, string: false }), this.get("target", { decode: true, string: false }), ArweaveUtils.stringToBuffer(this.quantity), ArweaveUtils.stringToBuffer(this.reward), this.get("last_tx", { decode: true, string: false }), Q3, ArweaveUtils.stringToBuffer(this.data_size), this.get("data_root", { decode: true, string: false })])];
          case 5:
            return [2, B2.sent()];
          case 6:
            throw new Error("Unexpected transaction format: ".concat(this.format));
        }
      });
    });
  }, Q2;
}($);
function gA(A2, Q2) {
  var B2 = Q2 === void 0 ? {} : Q2, g2 = B2.formatted, I2 = g2 !== void 0 && g2, C2 = B2.decimals, E2 = C2 === void 0 ? 12 : C2;
  B2.trim;
  var D2 = CA(A2, E2).shiftedBy(-12);
  return I2 ? D2.toFormat(E2) : D2.toFixed(E2);
}
function IA(A2, Q2) {
  var B2 = (Q2 === void 0 ? {} : Q2).formatted, g2 = B2 !== void 0 && B2, I2 = CA(A2).shiftedBy(12);
  return g2 ? I2.toFormat() : I2.toFixed(0);
}
function CA(A2, Q2) {
  return Q2 === void 0 && (Q2 = 12), DA(A2, Q2);
}
var EA, DA = function(A2, Q2) {
  var B2;
  try {
    B2 = Z.clone({ DECIMAL_PLACES: Q2 });
  } catch (A3) {
    console.warn("Caught big num issues, try default", A3), B2 = Z.default.clone({ DECIMAL_PLACES: Q2 });
  }
  return new B2(A2);
}, wA = function(A2) {
  return a(void 0, void 0, void 0, function() {
    return H(this, function(Q2) {
      return [2, crypto.subtle.importKey("jwk", A2, { name: "RSA-PSS", hash: { name: "SHA-256" } }, false, ["sign"])];
    });
  });
}, MA = function(A2, Q2, B2) {
  return (B2 === void 0 ? {} : B2).saltLength, a(void 0, void 0, void 0, function() {
    var B3, g2, I2, C2;
    return H(this, function(E2) {
      switch (E2.label) {
        case 0:
          return I2 = (g2 = crypto.subtle).sign, C2 = [{ name: "RSA-PSS", saltLength: 32 }], [4, wA(A2)];
        case 1:
          return [4, I2.apply(g2, C2.concat([E2.sent(), Q2]))];
        case 2:
          return B3 = E2.sent(), [2, new Uint8Array(B3)];
      }
    });
  });
};
function iA(Q2) {
  return a(this, void 0, void 0, function() {
    var B2, g2;
    return H(this, function(I2) {
      switch (I2.label) {
        case 0:
          return g2 = (B2 = A).bufferTob64Url, [4, crypto.subtle.digest("SHA-256", V(Q2))];
        case 1:
          return [2, g2.apply(B2, [I2.sent()])];
      }
    });
  });
}
var oA = { generateJWK: function() {
  return a(void 0, void 0, void 0, function() {
    var A2;
    return H(this, function(Q2) {
      switch (Q2.label) {
        case 0:
          return [4, a(void 0, void 0, void 0, function() {
            var A3, Q3, B2;
            return H(this, function(g2) {
              switch (g2.label) {
                case 0:
                  return [4, crypto.subtle.generateKey({ name: "RSA-PSS", modulusLength: 4096, publicExponent: new Uint8Array([1, 0, 1]), hash: { name: "SHA-256" } }, true, ["sign"])];
                case 1:
                  return A3 = g2.sent(), [4, crypto.subtle.exportKey("jwk", A3.privateKey)];
                case 2:
                  return [4, iA((Q3 = g2.sent()).n)];
                case 3:
                  return B2 = g2.sent(), [2, { kty: Q3.kty, e: Q3.e, n: Q3.n, d: Q3.d, p: Q3.p, q: Q3.q, dp: Q3.dp, dq: Q3.dq, qi: Q3.qi, kid: B2 }];
              }
            });
          })];
        case 1:
          return [4, iA((A2 = Q2.sent()).n)];
        case 2:
          return Q2.sent(), [2, A2];
      }
    });
  });
}, connect: function(A2, Q2) {
  return a(this, void 0, void 0, function() {
    return H(this, function(Q3) {
      return EA = A2, [2, true];
    });
  });
}, disconnect: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      return [2, true];
    });
  });
}, getActiveAddress: function() {
  return a(this, void 0, void 0, function() {
    var A2, Q2;
    return H(this, function(B2) {
      switch (B2.label) {
        case 0:
          return B2.trys.push([0, 2, , 3]), get(keypairs).forEach(function(Q3, B3, g2) {
            Q3.kty == "RSA" && (A2 = Q3);
          }), [4, iA(A2.n)];
        case 1:
          return [2, B2.sent()];
        case 2:
          throw Q2 = B2.sent(), new Error(Q2);
        case 3:
          return [2];
      }
    });
  });
}, getActivePublicKey: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      return [2];
    });
  });
}, getAllAddresses: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      return [2];
    });
  });
}, getWalletNames: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      return [2];
    });
  });
}, addToken: function(A2) {
  return a(this, void 0, void 0, function() {
    return H(this, function(A3) {
      return [2];
    });
  });
}, sign: function(A2) {
  return a(this, void 0, void 0, function() {
    var Q2, B2, g2, I2 = this;
    return H(this, function(C2) {
      switch (C2.label) {
        case 0:
          return [4, config.confirm("arweaveWalletAPI.sign", A2)];
        case 1:
          return C2.sent() ? [4, oA.getActiveAddress()] : [2, false];
        case 2:
          return Q2 = C2.sent(), g2 = get(keypairs), [4, Promise.all(s([], g2, true).map(function(A3) {
            A3[0];
            var g3 = A3[1];
            return a(I2, void 0, void 0, function() {
              return H(this, function(A4) {
                switch (A4.label) {
                  case 0:
                    return (g3 == null ? void 0 : g3.kty) !== "RSA" ? [3, 2] : [4, iA(g3.n)];
                  case 1:
                    A4.sent() == Q2 && (B2 = g3), A4.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }))];
        case 3:
          return C2.sent(), [4, MA(B2, A2.dataToSign)];
        case 4:
          return [2, C2.sent()];
      }
    });
  });
}, getPermissions: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      return [2, EA];
    });
  });
}, getArweaveConfig: function() {
  return a(this, void 0, void 0, function() {
    return H(this, function(A2) {
      return [2];
    });
  });
}, encrypt: function(A2, Q2) {
  return a(this, void 0, void 0, function() {
    return H(this, function(A3) {
      return [2];
    });
  });
}, decrypt: function(A2, Q2) {
  return a(this, void 0, void 0, function() {
    return H(this, function(A3) {
      return [2];
    });
  });
}, signature: function(A2, Q2) {
  return a(this, void 0, void 0, function() {
    return H(this, function(A3) {
      return [2];
    });
  });
}, noop: function() {
  return true;
} };
new TextDecoder();
var GA = {}, kA = function() {
  return GA;
}, FA = { setConfig: function(A2, Q2) {
  GA[A2] = Q2;
}, getConfig: kA, config: GA, ed25519: d, arweaveWalletAPI: oA, proxcryptor: n, connect: function(A2) {
  return a(void 0, void 0, void 0, function() {
    var Q2;
    return H(this, function(B2) {
      if (((Q2 = kA()).confirm, false) === "function")
        ;
      try {
        if (!(sessionStorage.getItem("STAY_CONNECTED") == "true" || Q2.confirm("connect", { origin: A2 })))
          return [2, new Error("User disallowed connection from origin ".concat(A2))];
        true;
      } catch (A3) {
      }
      return [2];
    });
  });
}, stayConnected: function() {
  window.sessionStorage.setItem("STAY_CONNECTED", "true");
}, getPublicKey: function(A2) {
  return A2 === void 0 && (A2 = "Master Key"), n.getPublicKey(A2);
} };
const NA = { OPENED_SIGNAL: "OPENED", KEYS_SYNC: "KEYS_SYNC", WINDOW_SYNC: "WINDOW_SYNC", SAVED_KEYS: "__SAVED_KEY", CLOSING: "CLOSING" };
var hA = function() {
  function A2() {
  }
  return A2.prototype.init = function(A3) {
    return a(this, void 0, void 0, function() {
      return H(this, function(Q2) {
        switch (Q2.label) {
          case 0:
            return [4, c({ methods: R(R({}, FA), A3) }).promise];
          case 1:
            return [2, Q2.sent()];
        }
      });
    });
  }, A2;
}();
export { NA as CONSTANTS, hA as Connection, FA as handlers, q as internals };
//# sourceMappingURL=index-b4992385.js.map