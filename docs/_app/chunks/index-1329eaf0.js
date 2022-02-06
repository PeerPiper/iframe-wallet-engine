var A = Object.freeze({ __proto__: null, get concatBuffers() {
  return T;
}, get b64UrlToString() {
  return m;
}, get bufferToString() {
  return X;
}, get stringToBuffer() {
  return l;
}, get stringToB64Url() {
  return b;
}, get b64UrlToBuffer() {
  return z;
}, get bufferTob64() {
  return V;
}, get bufferTob64Url() {
  return r;
}, get b64UrlEncode() {
  return u;
}, get b64UrlDecode() {
  return v;
}, get getSignatureData() {
  return _;
}, get setSignature() {
  return $;
}, get Tag() {
  return BA;
}, get default() {
  return QA;
}, get Transaction() {
  return gA;
}, get winstonToAr() {
  return IA;
}, get arToWinston() {
  return EA;
} }), B = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Q(A2) {
  var B2 = { exports: {} };
  return A2(B2, B2.exports), B2.exports;
}
var g, I, E, C, D, w = Q(function(A2, Q2) {
  !function(A3) {
    let Q3;
    const g2 = new Array(32).fill(void 0);
    function I2(A4) {
      return g2[A4];
    }
    g2.push(void 0, null, true, false);
    let E2 = g2.length;
    function C2(A4) {
      A4 < 36 || (g2[A4] = E2, E2 = A4);
    }
    function D2(A4) {
      const B2 = I2(A4);
      return C2(A4), B2;
    }
    let w2 = 0, i2 = null;
    function G2() {
      return i2 !== null && i2.buffer === Q3.memory.buffer || (i2 = new Uint8Array(Q3.memory.buffer)), i2;
    }
    let o2 = new TextEncoder("utf-8");
    const M2 = typeof o2.encodeInto == "function" ? function(A4, B2) {
      return o2.encodeInto(A4, B2);
    } : function(A4, B2) {
      const Q4 = o2.encode(A4);
      return B2.set(Q4), { read: A4.length, written: Q4.length };
    };
    function F2(A4, B2, Q4) {
      if (Q4 === void 0) {
        const Q5 = o2.encode(A4), g4 = B2(Q5.length);
        return G2().subarray(g4, g4 + Q5.length).set(Q5), w2 = Q5.length, g4;
      }
      let g3 = A4.length, I3 = B2(g3);
      const E3 = G2();
      let C3 = 0;
      for (; C3 < g3; C3++) {
        const B3 = A4.charCodeAt(C3);
        if (B3 > 127)
          break;
        E3[I3 + C3] = B3;
      }
      if (C3 !== g3) {
        C3 !== 0 && (A4 = A4.slice(C3)), I3 = Q4(I3, g3, g3 = C3 + 3 * A4.length);
        const B3 = G2().subarray(I3 + C3, I3 + g3);
        C3 += M2(A4, B3).written;
      }
      return w2 = C3, I3;
    }
    function N2(A4) {
      return A4 == null;
    }
    let k2 = null;
    function c2() {
      return k2 !== null && k2.buffer === Q3.memory.buffer || (k2 = new Int32Array(Q3.memory.buffer)), k2;
    }
    let Y2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    function R2(A4, B2) {
      return Y2.decode(G2().subarray(A4, A4 + B2));
    }
    function J2(A4) {
      E2 === g2.length && g2.push(g2.length + 1);
      const B2 = E2;
      return E2 = g2[B2], g2[B2] = A4, B2;
    }
    Y2.decode();
    let h2 = null;
    function H2() {
      return h2 !== null && h2.buffer === Q3.memory.buffer || (h2 = new Float64Array(Q3.memory.buffer)), h2;
    }
    function a2(A4) {
      const B2 = typeof A4;
      if (B2 == "number" || B2 == "boolean" || A4 == null)
        return `${A4}`;
      if (B2 == "string")
        return `"${A4}"`;
      if (B2 == "symbol") {
        const B3 = A4.description;
        return B3 == null ? "Symbol" : `Symbol(${B3})`;
      }
      if (B2 == "function") {
        const B3 = A4.name;
        return typeof B3 == "string" && B3.length > 0 ? `Function(${B3})` : "Function";
      }
      if (Array.isArray(A4)) {
        const B3 = A4.length;
        let Q5 = "[";
        B3 > 0 && (Q5 += a2(A4[0]));
        for (let g4 = 1; g4 < B3; g4++)
          Q5 += ", " + a2(A4[g4]);
        return Q5 += "]", Q5;
      }
      const Q4 = /\[object ([^\]]+)\]/.exec(toString.call(A4));
      let g3;
      if (!(Q4.length > 1))
        return toString.call(A4);
      if (g3 = Q4[1], g3 == "Object")
        try {
          return "Object(" + JSON.stringify(A4) + ")";
        } catch (A5) {
          return "Object";
        }
      return A4 instanceof Error ? `${A4.name}: ${A4.message}
${A4.stack}` : g3;
    }
    function y2() {
      return D2(Q3.generate_mnemonic());
    }
    function s2(A4) {
      var B2 = Q3.seed_to_proxcryptor(J2(A4));
      return t2.__wrap(B2);
    }
    function U2(A4) {
      var B2 = F2(A4, Q3.__wbindgen_malloc, Q3.__wbindgen_realloc), g3 = w2, I3 = Q3.mnemonic_to_proxcryptor(B2, g3);
      return t2.__wrap(I3);
    }
    function L2() {
      var A4 = Q3.generate_ed25519_keypair();
      return O2.__wrap(A4);
    }
    function K2(A4, B2) {
      const Q4 = B2(1 * A4.length);
      return G2().set(A4, Q4 / 1), w2 = A4.length, Q4;
    }
    function S2(A4, B2) {
      return G2().subarray(A4 / 1, A4 / 1 + B2);
    }
    function q2(A4, B2) {
      try {
        const i3 = Q3.__wbindgen_add_to_stack_pointer(-16);
        var g3 = K2(B2, Q3.__wbindgen_malloc), I3 = w2;
        Q3.sign(i3, J2(A4), g3, I3);
        var E3 = c2()[i3 / 4 + 0], C3 = c2()[i3 / 4 + 1], D3 = S2(E3, C3).slice();
        return Q3.__wbindgen_free(E3, 1 * C3), D3;
      } finally {
        Q3.__wbindgen_add_to_stack_pointer(16);
      }
    }
    function x2(A4, B2, g3) {
      return Q3.verify(J2(A4), J2(B2), J2(g3)) !== 0;
    }
    function d2(A4) {
      var B2 = Q3.generate_ed25519_keypair_from_seed(J2(A4));
      return O2.__wrap(B2);
    }
    function n2(A4, B2) {
      try {
        return A4.apply(this, B2);
      } catch (A5) {
        Q3.__wbindgen_exn_store(J2(A5));
      }
    }
    class t2 {
      static __wrap(A4) {
        const B2 = Object.create(t2.prototype);
        return B2.ptr = A4, B2;
      }
      __destroy_into_raw() {
        const A4 = this.ptr;
        return this.ptr = 0, A4;
      }
      free() {
        const A4 = this.__destroy_into_raw();
        Q3.__wbg_proxcryptor_free(A4);
      }
      static new(A4) {
        var B2 = Q3.proxcryptor_new(J2(A4));
        return t2.__wrap(B2);
      }
      public_key() {
        return D2(Q3.proxcryptor_public_key(this.ptr));
      }
      public_key_base58() {
        return D2(Q3.proxcryptor_public_key_base58(this.ptr));
      }
      public_key_jwk() {
        return D2(Q3.proxcryptor_public_key_jwk(this.ptr));
      }
      self_encrypt(A4, B2) {
        var g3 = K2(A4, Q3.__wbindgen_malloc), I3 = w2, E3 = F2(B2, Q3.__wbindgen_malloc, Q3.__wbindgen_realloc), C3 = w2;
        return D2(Q3.proxcryptor_self_encrypt(this.ptr, g3, I3, E3, C3));
      }
      self_decrypt(A4) {
        return D2(Q3.proxcryptor_self_decrypt(this.ptr, J2(A4)));
      }
      generate_re_key(A4, B2) {
        var g3 = F2(B2, Q3.__wbindgen_malloc, Q3.__wbindgen_realloc), I3 = w2;
        return D2(Q3.proxcryptor_generate_re_key(this.ptr, J2(A4), g3, I3));
      }
      static re_encrypt(A4, B2, g3) {
        return D2(Q3.proxcryptor_re_encrypt(J2(A4), J2(B2), J2(g3)));
      }
      re_decrypt(A4) {
        return D2(Q3.proxcryptor_re_decrypt(this.ptr, J2(A4)));
      }
      sign(A4) {
        try {
          const D3 = Q3.__wbindgen_add_to_stack_pointer(-16);
          var B2 = K2(A4, Q3.__wbindgen_malloc), g3 = w2;
          Q3.proxcryptor_sign(D3, this.ptr, B2, g3);
          var I3 = c2()[D3 / 4 + 0], E3 = c2()[D3 / 4 + 1], C3 = S2(I3, E3).slice();
          return Q3.__wbindgen_free(I3, 1 * E3), C3;
        } finally {
          Q3.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    class O2 {
      static __wrap(A4) {
        const B2 = Object.create(O2.prototype);
        return B2.ptr = A4, B2;
      }
      __destroy_into_raw() {
        const A4 = this.ptr;
        return this.ptr = 0, A4;
      }
      free() {
        const A4 = this.__destroy_into_raw();
        Q3.__wbg_simplekeypair_free(A4);
      }
      public() {
        return D2(Q3.simplekeypair_public(this.ptr));
      }
      secret() {
        return D2(Q3.simplekeypair_secret(this.ptr));
      }
    }
    async function p2(A4, B2) {
      if (typeof Response == "function" && A4 instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming == "function")
          try {
            return await WebAssembly.instantiateStreaming(A4, B2);
          } catch (B3) {
            if (A4.headers.get("Content-Type") == "application/wasm")
              throw B3;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", B3);
          }
        const Q4 = await A4.arrayBuffer();
        return await WebAssembly.instantiate(Q4, B2);
      }
      {
        const Q4 = await WebAssembly.instantiate(A4, B2);
        return Q4 instanceof WebAssembly.Instance ? { instance: Q4, module: A4 } : Q4;
      }
    }
    async function f2(A4) {
      A4 === void 0 && (A4 = new URL("index_bg.wasm", typeof document == "undefined" && typeof location == "undefined" ? new (function(A5) {
        throw new Error('Could not dynamically require "' + A5 + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
      }("url")).URL("file:" + __filename).href : typeof document == "undefined" ? location.href : document.currentScript && document.currentScript.src || new URL("index.js", document.baseURI).href));
      const g3 = { wbg: {} };
      g3.wbg.__wbindgen_object_drop_ref = function(A5) {
        D2(A5);
      }, g3.wbg.__wbg_log_2d3255d249750bce = function(A5, B2) {
        console.log(R2(A5, B2));
      }, g3.wbg.__wbindgen_string_get = function(A5, B2) {
        const g4 = I2(B2);
        var E4 = typeof g4 == "string" ? g4 : void 0, C4 = N2(E4) ? 0 : F2(E4, Q3.__wbindgen_malloc, Q3.__wbindgen_realloc), D3 = w2;
        c2()[A5 / 4 + 1] = D3, c2()[A5 / 4 + 0] = C4;
      }, g3.wbg.__wbindgen_is_object = function(A5) {
        const B2 = I2(A5);
        return typeof B2 == "object" && B2 !== null;
      }, g3.wbg.__wbindgen_json_parse = function(A5, B2) {
        return J2(JSON.parse(R2(A5, B2)));
      }, g3.wbg.__wbindgen_is_null = function(A5) {
        return I2(A5) === null;
      }, g3.wbg.__wbindgen_is_undefined = function(A5) {
        return I2(A5) === void 0;
      }, g3.wbg.__wbindgen_boolean_get = function(A5) {
        const B2 = I2(A5);
        return typeof B2 == "boolean" ? B2 ? 1 : 0 : 2;
      }, g3.wbg.__wbindgen_number_get = function(A5, B2) {
        const Q4 = I2(B2);
        var g4 = typeof Q4 == "number" ? Q4 : void 0;
        H2()[A5 / 8 + 1] = N2(g4) ? 0 : g4, c2()[A5 / 4 + 0] = !N2(g4);
      }, g3.wbg.__wbindgen_object_clone_ref = function(A5) {
        return J2(I2(A5));
      }, g3.wbg.__wbg_get_2d1407dba3452350 = function(A5, B2) {
        return J2(I2(A5)[D2(B2)]);
      }, g3.wbg.__wbg_getRandomValues_98117e9a7e993920 = function() {
        return n2(function(A5, B2) {
          I2(A5).getRandomValues(I2(B2));
        }, arguments);
      }, g3.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function() {
        return n2(function(A5, B2, Q4) {
          I2(A5).randomFillSync(S2(B2, Q4));
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
        return n2(function(A5, B2) {
          return J2(C3.require(R2(A5, B2)));
        }, arguments);
      }, g3.wbg.__wbg_crypto_98fc271021c7d2ad = function(A5) {
        return J2(I2(A5).crypto);
      }, g3.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function(A5) {
        return J2(I2(A5).msCrypto);
      }, g3.wbg.__wbindgen_is_function = function(A5) {
        return typeof I2(A5) == "function";
      }, g3.wbg.__wbg_newnoargs_be86524d73f67598 = function(A5, B2) {
        return J2(new Function(R2(A5, B2)));
      }, g3.wbg.__wbg_next_c4151d46d5fa7097 = function(A5) {
        return J2(I2(A5).next);
      }, g3.wbg.__wbg_next_7720502039b96d00 = function() {
        return n2(function(A5) {
          return J2(I2(A5).next());
        }, arguments);
      }, g3.wbg.__wbg_done_b06cf0578e89ff68 = function(A5) {
        return I2(A5).done;
      }, g3.wbg.__wbg_value_e74a542443d92451 = function(A5) {
        return J2(I2(A5).value);
      }, g3.wbg.__wbg_iterator_4fc4ce93e6b92958 = function() {
        return J2(Symbol.iterator);
      }, g3.wbg.__wbg_get_4d0f21c2f823742e = function() {
        return n2(function(A5, B2) {
          return J2(Reflect.get(I2(A5), I2(B2)));
        }, arguments);
      }, g3.wbg.__wbg_call_888d259a5fefc347 = function() {
        return n2(function(A5, B2) {
          return J2(I2(A5).call(I2(B2)));
        }, arguments);
      }, g3.wbg.__wbindgen_string_new = function(A5, B2) {
        return J2(R2(A5, B2));
      }, g3.wbg.__wbg_isArray_eb7ad55f2da67dde = function(A5) {
        return Array.isArray(I2(A5));
      }, g3.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function(A5) {
        return I2(A5) instanceof ArrayBuffer;
      }, g3.wbg.__wbg_values_364ae56c608e6824 = function(A5) {
        return J2(I2(A5).values());
      }, g3.wbg.__wbg_new_342a24ca698edd87 = function(A5, B2) {
        return J2(new Error(R2(A5, B2)));
      }, g3.wbg.__wbg_isSafeInteger_0dfc6d38b7184f06 = function(A5) {
        return Number.isSafeInteger(I2(A5));
      }, g3.wbg.__wbg_self_c6fbdfc2918d5e58 = function() {
        return n2(function() {
          return J2(self.self);
        }, arguments);
      }, g3.wbg.__wbg_window_baec038b5ab35c54 = function() {
        return n2(function() {
          return J2(window.window);
        }, arguments);
      }, g3.wbg.__wbg_globalThis_3f735a5746d41fbd = function() {
        return n2(function() {
          return J2(globalThis.globalThis);
        }, arguments);
      }, g3.wbg.__wbg_global_1bc0b39582740e95 = function() {
        return n2(function() {
          return J2(B.global);
        }, arguments);
      }, g3.wbg.__wbg_buffer_397eaa4d72ee94dd = function(A5) {
        return J2(I2(A5).buffer);
      }, g3.wbg.__wbg_new_a7ce447f15ff496f = function(A5) {
        return J2(new Uint8Array(I2(A5)));
      }, g3.wbg.__wbg_set_969ad0a60e51d320 = function(A5, B2, Q4) {
        I2(A5).set(I2(B2), Q4 >>> 0);
      }, g3.wbg.__wbg_length_1eb8fc608a0d4cdb = function(A5) {
        return I2(A5).length;
      }, g3.wbg.__wbg_instanceof_Uint8Array_08a1f3a179095e76 = function(A5) {
        return I2(A5) instanceof Uint8Array;
      }, g3.wbg.__wbg_newwithlength_929232475839a482 = function(A5) {
        return J2(new Uint8Array(A5 >>> 0));
      }, g3.wbg.__wbg_subarray_8b658422a224f479 = function(A5, B2, Q4) {
        return J2(I2(A5).subarray(B2 >>> 0, Q4 >>> 0));
      }, g3.wbg.__wbindgen_debug_string = function(A5, B2) {
        var g4 = F2(a2(I2(B2)), Q3.__wbindgen_malloc, Q3.__wbindgen_realloc), E4 = w2;
        c2()[A5 / 4 + 1] = E4, c2()[A5 / 4 + 0] = g4;
      }, g3.wbg.__wbindgen_throw = function(A5, B2) {
        throw new Error(R2(A5, B2));
      }, g3.wbg.__wbindgen_memory = function() {
        return J2(Q3.memory);
      }, (typeof A4 == "string" || typeof Request == "function" && A4 instanceof Request || typeof URL == "function" && A4 instanceof URL) && (A4 = fetch(A4));
      const { instance: E3, module: C3 } = await p2(await A4, g3);
      return Q3 = E3.exports, f2.__wbindgen_wasm_module = C3, Q3;
    }
    var P2 = Object.freeze({ __proto__: null, generate_mnemonic: y2, seed_to_proxcryptor: s2, mnemonic_to_proxcryptor: U2, generate_ed25519_keypair: L2, sign: q2, verify: x2, generate_ed25519_keypair_from_seed: d2, Proxcryptor: t2, SimpleKeypair: O2, default: f2 });
    const W2 = [62, 0, 0, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 0, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    function e2(A4) {
      return W2[A4 - 43];
    }
    function Z2(A4) {
      let B2, Q4 = A4.endsWith("==") ? 2 : A4.endsWith("=") ? 1 : 0, g3 = A4.length, I3 = new Uint8Array(g3 / 4 * 3);
      for (let Q5 = 0, E3 = 0; Q5 < g3; Q5 += 4, E3 += 3)
        B2 = e2(A4.charCodeAt(Q5)) << 18 | e2(A4.charCodeAt(Q5 + 1)) << 12 | e2(A4.charCodeAt(Q5 + 2)) << 6 | e2(A4.charCodeAt(Q5 + 3)), I3[E3] = B2 >> 16, I3[E3 + 1] = B2 >> 8 & 255, I3[E3 + 2] = 255 & B2;
      return I3.subarray(0, I3.length - Q4);
    }
    var T2 = async () => (await f2(j2), P2);
    const m2 = async () => T2();
    A3.getWallet = m2, Object.defineProperty(A3, "__esModule", { value: true });
  }(Q2);
});
!function(A2) {
  A2.Call = "call", A2.Reply = "reply", A2.Syn = "syn", A2.SynAck = "synAck", A2.Ack = "ack";
}(g || (g = {})), function(A2) {
  A2.Fulfilled = "fulfilled", A2.Rejected = "rejected";
}(I || (I = {})), function(A2) {
  A2.ConnectionDestroyed = "ConnectionDestroyed", A2.ConnectionTimeout = "ConnectionTimeout", A2.NoIframeSrc = "NoIframeSrc";
}(E || (E = {})), function(A2) {
  A2.DataCloneError = "DataCloneError";
}(C || (C = {})), function(A2) {
  A2.Message = "message";
}(D || (D = {}));
const i = ({ name: A2, message: B2, stack: Q2 }) => ({ name: A2, message: B2, stack: Q2 });
let G = 0;
var o = () => ++G;
const M = (A2) => A2 ? A2.split(".") : [], F = (A2, B2, Q2) => {
  const g2 = M(B2);
  return g2.reduce((A3, B3, I2) => (A3[B3] === void 0 && (A3[B3] = {}), I2 === g2.length - 1 && (A3[B3] = Q2), A3[B3]), A2), A2;
}, N = (A2, B2) => {
  const Q2 = {};
  return Object.keys(A2).forEach((g2) => {
    const I2 = A2[g2], E2 = ((A3, B3) => {
      const Q3 = M(B3 || "");
      return Q3.push(A3), ((A4) => A4.join("."))(Q3);
    })(g2, B2);
    typeof I2 == "object" && Object.assign(Q2, N(I2, E2)), typeof I2 == "function" && (Q2[E2] = I2);
  }), Q2;
};
var k = (A2, B2, Q2, C2, w2) => {
  const { localName: i2, local: G2, remote: M2, originForSending: N2, originForReceiving: k2 } = B2;
  let c2 = false;
  w2(`${i2}: Connecting call sender`);
  const Y2 = (A3) => (...B3) => {
    let Q3;
    w2(`${i2}: Sending ${A3}() call`);
    try {
      M2.closed && (Q3 = true);
    } catch (A4) {
      Q3 = true;
    }
    if (Q3 && C2(), c2) {
      const B4 = new Error(`Unable to send ${A3}() call due to destroyed connection`);
      throw B4.code = E.ConnectionDestroyed, B4;
    }
    return new Promise((Q4, E2) => {
      const C3 = o(), F2 = (B4) => {
        if (B4.source !== M2 || B4.data.penpal !== g.Reply || B4.data.id !== C3)
          return;
        if (k2 !== "*" && B4.origin !== k2)
          return void w2(`${i2} received message from origin ${B4.origin} which did not match expected origin ${k2}`);
        const o2 = B4.data;
        w2(`${i2}: Received ${A3}() reply`), G2.removeEventListener(D.Message, F2);
        let N3 = o2.returnValue;
        o2.returnValueIsError && (N3 = ((A4) => {
          const B5 = new Error();
          return Object.keys(A4).forEach((Q5) => B5[Q5] = A4[Q5]), B5;
        })(N3)), (o2.resolution === I.Fulfilled ? Q4 : E2)(N3);
      };
      G2.addEventListener(D.Message, F2);
      const c3 = { penpal: g.Call, id: C3, methodName: A3, args: B3 };
      M2.postMessage(c3, N2);
    });
  }, R2 = Q2.reduce((A3, B3) => (A3[B3] = Y2(B3), A3), {});
  return Object.assign(A2, ((A3) => {
    const B3 = {};
    for (const Q3 in A3)
      F(B3, Q3, A3[Q3]);
    return B3;
  })(R2)), () => {
    c2 = true;
  };
}, c = (A2, B2, Q2, E2) => {
  const { destroy: w2, onDestroy: G2 } = Q2;
  return (Q3) => {
    if (!(A2 instanceof RegExp ? A2.test(Q3.origin) : A2 === "*" || A2 === Q3.origin))
      return void E2(`Child: Handshake - Received SYN-ACK from origin ${Q3.origin} which did not match expected origin ${A2}`);
    E2("Child: Handshake - Received SYN-ACK, responding with ACK");
    const o2 = Q3.origin === "null" ? "*" : Q3.origin, M2 = { penpal: g.Ack, methodNames: Object.keys(B2) };
    window.parent.postMessage(M2, o2);
    const F2 = { localName: "Child", local: window, remote: window.parent, originForSending: o2, originForReceiving: Q3.origin }, N2 = ((A3, B3, Q4) => {
      const { localName: E3, local: w3, remote: G3, originForSending: o3, originForReceiving: M3 } = A3;
      let F3 = false;
      const N3 = (A4) => {
        if (A4.source !== G3 || A4.data.penpal !== g.Call)
          return;
        if (M3 !== "*" && A4.origin !== M3)
          return void Q4(`${E3} received message from origin ${A4.origin} which did not match expected origin ${M3}`);
        const D2 = A4.data, { methodName: w4, args: N4, id: k2 } = D2;
        Q4(`${E3}: Received ${w4}() call`);
        const c3 = (A5) => (B4) => {
          if (Q4(`${E3}: Sending ${w4}() reply`), F3)
            return void Q4(`${E3}: Unable to send ${w4}() reply due to destroyed connection`);
          const D3 = { penpal: g.Reply, id: k2, resolution: A5, returnValue: B4 };
          A5 === I.Rejected && B4 instanceof Error && (D3.returnValue = i(B4), D3.returnValueIsError = true);
          try {
            G3.postMessage(D3, o3);
          } catch (A6) {
            if (A6.name === C.DataCloneError) {
              const B5 = { penpal: g.Reply, id: k2, resolution: I.Rejected, returnValue: i(A6), returnValueIsError: true };
              G3.postMessage(B5, o3);
            }
            throw A6;
          }
        };
        new Promise((A5) => A5(B3[w4].apply(B3, N4))).then(c3(I.Fulfilled), c3(I.Rejected));
      };
      return w3.addEventListener(D.Message, N3), () => {
        F3 = true, w3.removeEventListener(D.Message, N3);
      };
    })(F2, B2, E2);
    G2(N2);
    const c2 = {}, Y2 = k(c2, F2, Q3.data.methodNames, w2, E2);
    return G2(Y2), c2;
  };
};
var Y = (A2 = {}) => {
  const { parentOrigin: B2 = "*", methods: Q2 = {}, timeout: I2, debug: C2 = false } = A2, w2 = ((A3) => (...B3) => {
    A3 && console.log("[Penpal]", ...B3);
  })(C2), i2 = ((A3, B3) => {
    const Q3 = [];
    let g2 = false;
    return { destroy(I3) {
      g2 || (g2 = true, B3(`${A3}: Destroying connection`), Q3.forEach((A4) => {
        A4(I3);
      }));
    }, onDestroy(A4) {
      g2 ? A4() : Q3.push(A4);
    } };
  })("Child", w2), { destroy: G2, onDestroy: o2 } = i2, M2 = N(Q2), F2 = c(B2, M2, i2, w2), k2 = new Promise((A3, Q3) => {
    const C3 = ((A4, B3) => {
      let Q4;
      return A4 !== void 0 && (Q4 = window.setTimeout(() => {
        const Q5 = new Error(`Connection timed out after ${A4}ms`);
        Q5.code = E.ConnectionTimeout, B3(Q5);
      }, A4)), () => {
        clearTimeout(Q4);
      };
    })(I2, G2), i3 = (B3) => {
      if ((() => {
        try {
          clearTimeout();
        } catch (A4) {
          return false;
        }
        return true;
      })() && B3.source === parent && B3.data && B3.data.penpal === g.SynAck) {
        const Q4 = F2(B3);
        Q4 && (window.removeEventListener(D.Message, i3), C3(), A3(Q4));
      }
    };
    window.addEventListener(D.Message, i3), (() => {
      w2("Child: Handshake - Sending SYN");
      const A4 = { penpal: g.Syn }, Q4 = B2 instanceof RegExp ? "*" : B2;
      window.parent.postMessage(A4, Q4);
    })(), o2((A4) => {
      window.removeEventListener(D.Message, i3), A4 && Q3(A4);
    });
  });
  return { promise: k2, destroy() {
    G2();
  } };
}, R = function(A2, B2) {
  return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A3, B3) {
    A3.__proto__ = B3;
  } || function(A3, B3) {
    for (var Q2 in B3)
      Object.prototype.hasOwnProperty.call(B3, Q2) && (A3[Q2] = B3[Q2]);
  }, R(A2, B2);
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
function J(A2, B2) {
  if (typeof B2 != "function" && B2 !== null)
    throw new TypeError("Class extends value " + String(B2) + " is not a constructor or null");
  function Q2() {
    this.constructor = A2;
  }
  R(A2, B2), A2.prototype = B2 === null ? Object.create(B2) : (Q2.prototype = B2.prototype, new Q2());
}
var h = function() {
  return h = Object.assign || function(A2) {
    for (var B2, Q2 = 1, g2 = arguments.length; Q2 < g2; Q2++)
      for (var I2 in B2 = arguments[Q2])
        Object.prototype.hasOwnProperty.call(B2, I2) && (A2[I2] = B2[I2]);
    return A2;
  }, h.apply(this, arguments);
};
function H(A2, B2, Q2, g2) {
  return new (Q2 || (Q2 = Promise))(function(I2, E2) {
    function C2(A3) {
      try {
        w2(g2.next(A3));
      } catch (A4) {
        E2(A4);
      }
    }
    function D2(A3) {
      try {
        w2(g2.throw(A3));
      } catch (A4) {
        E2(A4);
      }
    }
    function w2(A3) {
      var B3;
      A3.done ? I2(A3.value) : (B3 = A3.value, B3 instanceof Q2 ? B3 : new Q2(function(A4) {
        A4(B3);
      })).then(C2, D2);
    }
    w2((g2 = g2.apply(A2, B2 || [])).next());
  });
}
function a(A2, B2) {
  var Q2, g2, I2, E2, C2 = { label: 0, sent: function() {
    if (1 & I2[0])
      throw I2[1];
    return I2[1];
  }, trys: [], ops: [] };
  return E2 = { next: D2(0), throw: D2(1), return: D2(2) }, typeof Symbol == "function" && (E2[Symbol.iterator] = function() {
    return this;
  }), E2;
  function D2(E3) {
    return function(D3) {
      return function(E4) {
        if (Q2)
          throw new TypeError("Generator is already executing.");
        for (; C2; )
          try {
            if (Q2 = 1, g2 && (I2 = 2 & E4[0] ? g2.return : E4[0] ? g2.throw || ((I2 = g2.return) && I2.call(g2), 0) : g2.next) && !(I2 = I2.call(g2, E4[1])).done)
              return I2;
            switch (g2 = 0, I2 && (E4 = [2 & E4[0], I2.value]), E4[0]) {
              case 0:
              case 1:
                I2 = E4;
                break;
              case 4:
                return C2.label++, { value: E4[1], done: false };
              case 5:
                C2.label++, g2 = E4[1], E4 = [0];
                continue;
              case 7:
                E4 = C2.ops.pop(), C2.trys.pop();
                continue;
              default:
                if (!(I2 = C2.trys, (I2 = I2.length > 0 && I2[I2.length - 1]) || E4[0] !== 6 && E4[0] !== 2)) {
                  C2 = 0;
                  continue;
                }
                if (E4[0] === 3 && (!I2 || E4[1] > I2[0] && E4[1] < I2[3])) {
                  C2.label = E4[1];
                  break;
                }
                if (E4[0] === 6 && C2.label < I2[1]) {
                  C2.label = I2[1], I2 = E4;
                  break;
                }
                if (I2 && C2.label < I2[2]) {
                  C2.label = I2[2], C2.ops.push(E4);
                  break;
                }
                I2[2] && C2.ops.pop(), C2.trys.pop();
                continue;
            }
            E4 = B2.call(A2, C2);
          } catch (A3) {
            E4 = [6, A3], g2 = 0;
          } finally {
            Q2 = I2 = 0;
          }
        if (5 & E4[0])
          throw E4[1];
        return { value: E4[0] ? E4[1] : void 0, done: true };
      }([E3, D3]);
    };
  }
}
function y(A2, B2, Q2) {
  if (Q2 || arguments.length === 2)
    for (var g2, I2 = 0, E2 = B2.length; I2 < E2; I2++)
      !g2 && I2 in B2 || (g2 || (g2 = Array.prototype.slice.call(B2, 0, I2)), g2[I2] = B2[I2]);
  return A2.concat(g2 || Array.prototype.slice.call(B2));
}
var s, U = new Map(), L = new Map();
function K() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      switch (A2.label) {
        case 0:
          return s ? [3, 2] : [4, s];
        case 1:
          A2.sent(), A2.label = 2;
        case 2:
          return [2];
      }
    });
  });
}
!function() {
  H(this, void 0, void 0, function() {
    var A2;
    return a(this, function(B2) {
      switch (B2.label) {
        case 0:
          return [typeof document].includes("undefined") ? [2] : [4, w.getWallet()];
        case 1:
          return A2 = B2.sent(), s = A2, [2];
      }
    });
  });
}();
var S, q = {}, x = Object.freeze({ __proto__: null, DEFAULT_PROXCRYPTOR_NAME: "DEFAULT_PROXCRYPTOR_NAME", pre: U, keys: L, DEFAULT_NAME: "Master Key", get wallet() {
  return s;
}, assertWallet: K, setConfig: function(A2, B2) {
  q[A2] = B2;
}, getConfig: function() {
  return q;
}, generateMnemonic: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      switch (A2.label) {
        case 0:
          return [4, K()];
        case 1:
          return A2.sent(), [2, s.generate_mnemonic()];
      }
    });
  });
}, loadMnemonicInProxcryptor: function(A2, B2) {
  return B2 === void 0 && (B2 = "Master Key"), H(this, void 0, void 0, function() {
    var Q2;
    return a(this, function(g2) {
      switch (g2.label) {
        case 0:
          return [4, K()];
        case 1:
          return g2.sent(), Q2 = s.mnemonic_to_proxcryptor(A2), U.set(B2, Q2), [2, B2];
      }
    });
  });
}, getLoadedKeys: function() {
  console.log("Getting loaded keys!!");
  var A2 = [];
  return console.log({ pre: U }), U.forEach(function(B2, Q2) {
    A2.push({ name: Q2, publicKey: B2.public_key(), publicKeyJWK: B2.public_key_jwk(), publicKeyBase58: B2.public_key_base58() });
  }), A2;
} }), d = new TextDecoder(), n = { selfEncrypt: function(A2, B2, Q2) {
  return Q2 === void 0 && (Q2 = "Master Key"), U && Q2 && U.get(Q2) ? U.get(Q2).self_encrypt(A2, B2) : new Error("No proxy encryptor available for this name.");
}, selfDecrypt: function(A2, B2) {
  if (B2 === void 0 && (B2 = "Master Key"), window.confirm("Authorize site to decrypt ".concat(d.decode(new Uint8Array(A2.tag)), "?")))
    return U.get(B2).self_decrypt(A2);
}, generateReKey: function(A2, B2, Q2) {
  return Q2 === void 0 && (Q2 = "Master Key"), U && Q2 && U.get(Q2) ? U.get(Q2).generate_re_key(A2, B2) : new Error("No proxy encryptor available for this name.");
}, reEncrypt: function(A2, B2, Q2) {
  return U && pre_name && U.get(pre_name) ? U.get(pre_name).re_encrypt(A2, B2, Q2) : new Error("No proxy encryptor available for this name.");
}, reDecrypt: function(A2, B2) {
  if (B2 === void 0 && (B2 = "Master Key"), !(U && B2 && U.get(B2)))
    return new Error("No proxy encryptor available for this name.");
  var Q2 = U.get(B2).re_decrypt(A2);
  return new TextDecoder().decode(new Uint8Array(Q2));
}, getPublicKey: function(A2) {
  return A2 === void 0 && (A2 = "Master Key"), U && A2 && U.get(A2) ? U.get(A2).public_key() : new Error("No proxy encryptor available for name ".concat(A2, "."));
} }, t = { setWasmWallet: function(A2, B2) {
  S = A2;
}, generateKeypair: function() {
  if (!assertReady())
    return new Error("Wallet not connected or initialized. Run connect() and await initialize() first.");
  var A2 = S.generate_ed25519_keypair();
  return { publicKey: A2.public(), secretKey: A2.secret() };
}, sign: function(A2, B2) {
  return B2 === void 0 && (B2 = { pre_name: "Master Key", dataLayout: {} }), H(void 0, void 0, void 0, function() {
    return a(this, function(Q2) {
      switch (Q2.label) {
        case 0:
          return [4, K()];
        case 1:
          return Q2.sent(), U && B2.pre_name && U.get(B2.pre_name) ? window.confirm("Sign message?") ? [2, U.get(B2.pre_name).sign(new Uint8Array(A2))] : [2] : [2, new Error("No signer available.")];
      }
    });
  });
}, verify: function(A2, B2, Q2, g2) {
  return s.verify(new Uint8Array(A2), new Uint8Array(B2), new Uint8Array(Q2));
} }, O = B && B.__extends || function() {
  var A2 = function(B2, Q2) {
    return A2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A3, B3) {
      A3.__proto__ = B3;
    } || function(A3, B3) {
      for (var Q3 in B3)
        B3.hasOwnProperty(Q3) && (A3[Q3] = B3[Q3]);
    }, A2(B2, Q2);
  };
  return function(B2, Q2) {
    function g2() {
      this.constructor = B2;
    }
    A2(B2, Q2), B2.prototype = Q2 === null ? Object.create(Q2) : (g2.prototype = Q2.prototype, new g2());
  };
}(), p = function() {
  function A2(A3) {
    A3 === void 0 && (A3 = "="), this._paddingCharacter = A3;
  }
  return A2.prototype.encodedLength = function(A3) {
    return this._paddingCharacter ? (A3 + 2) / 3 * 4 | 0 : (8 * A3 + 5) / 6 | 0;
  }, A2.prototype.encode = function(A3) {
    for (var B2 = "", Q2 = 0; Q2 < A3.length - 2; Q2 += 3) {
      var g2 = A3[Q2] << 16 | A3[Q2 + 1] << 8 | A3[Q2 + 2];
      B2 += this._encodeByte(g2 >>> 18 & 63), B2 += this._encodeByte(g2 >>> 12 & 63), B2 += this._encodeByte(g2 >>> 6 & 63), B2 += this._encodeByte(g2 >>> 0 & 63);
    }
    var I2 = A3.length - Q2;
    if (I2 > 0) {
      g2 = A3[Q2] << 16 | (I2 === 2 ? A3[Q2 + 1] << 8 : 0);
      B2 += this._encodeByte(g2 >>> 18 & 63), B2 += this._encodeByte(g2 >>> 12 & 63), B2 += I2 === 2 ? this._encodeByte(g2 >>> 6 & 63) : this._paddingCharacter || "", B2 += this._paddingCharacter || "";
    }
    return B2;
  }, A2.prototype.maxDecodedLength = function(A3) {
    return this._paddingCharacter ? A3 / 4 * 3 | 0 : (6 * A3 + 7) / 8 | 0;
  }, A2.prototype.decodedLength = function(A3) {
    return this.maxDecodedLength(A3.length - this._getPaddingLength(A3));
  }, A2.prototype.decode = function(A3) {
    if (A3.length === 0)
      return new Uint8Array(0);
    for (var B2 = this._getPaddingLength(A3), Q2 = A3.length - B2, g2 = new Uint8Array(this.maxDecodedLength(Q2)), I2 = 0, E2 = 0, C2 = 0, D2 = 0, w2 = 0, i2 = 0, G2 = 0; E2 < Q2 - 4; E2 += 4)
      D2 = this._decodeChar(A3.charCodeAt(E2 + 0)), w2 = this._decodeChar(A3.charCodeAt(E2 + 1)), i2 = this._decodeChar(A3.charCodeAt(E2 + 2)), G2 = this._decodeChar(A3.charCodeAt(E2 + 3)), g2[I2++] = D2 << 2 | w2 >>> 4, g2[I2++] = w2 << 4 | i2 >>> 2, g2[I2++] = i2 << 6 | G2, C2 |= 256 & D2, C2 |= 256 & w2, C2 |= 256 & i2, C2 |= 256 & G2;
    if (E2 < Q2 - 1 && (D2 = this._decodeChar(A3.charCodeAt(E2)), w2 = this._decodeChar(A3.charCodeAt(E2 + 1)), g2[I2++] = D2 << 2 | w2 >>> 4, C2 |= 256 & D2, C2 |= 256 & w2), E2 < Q2 - 2 && (i2 = this._decodeChar(A3.charCodeAt(E2 + 2)), g2[I2++] = w2 << 4 | i2 >>> 2, C2 |= 256 & i2), E2 < Q2 - 3 && (G2 = this._decodeChar(A3.charCodeAt(E2 + 3)), g2[I2++] = i2 << 6 | G2, C2 |= 256 & G2), C2 !== 0)
      throw new Error("Base64Coder: incorrect characters for decoding");
    return g2;
  }, A2.prototype._encodeByte = function(A3) {
    var B2 = A3;
    return B2 += 65, B2 += 25 - A3 >>> 8 & 6, B2 += 51 - A3 >>> 8 & -75, B2 += 61 - A3 >>> 8 & -15, B2 += 62 - A3 >>> 8 & 3, String.fromCharCode(B2);
  }, A2.prototype._decodeChar = function(A3) {
    var B2 = 256;
    return B2 += (42 - A3 & A3 - 44) >>> 8 & -256 + A3 - 43 + 62, B2 += (46 - A3 & A3 - 48) >>> 8 & -256 + A3 - 47 + 63, B2 += (47 - A3 & A3 - 58) >>> 8 & -256 + A3 - 48 + 52, B2 += (64 - A3 & A3 - 91) >>> 8 & -256 + A3 - 65 + 0, B2 += (96 - A3 & A3 - 123) >>> 8 & -256 + A3 - 97 + 26;
  }, A2.prototype._getPaddingLength = function(A3) {
    var B2 = 0;
    if (this._paddingCharacter) {
      for (var Q2 = A3.length - 1; Q2 >= 0 && A3[Q2] === this._paddingCharacter; Q2--)
        B2++;
      if (A3.length < 4 || B2 > 2)
        throw new Error("Base64Coder: incorrect padding");
    }
    return B2;
  }, A2;
}(), f = new p();
var P = function(A2) {
  return f.encode(A2);
};
var W = function(A2) {
  return f.decode(A2);
};
function e(B2) {
  return H(this, void 0, void 0, function() {
    var Q2, g2, I2, E2, C2, D2, w2, i2;
    return a(this, function(G2) {
      switch (G2.label) {
        case 0:
          return Array.isArray(B2) ? (Q2 = T([l("list"), l(B2.length.toString())]), g2 = Z, I2 = [B2], [4, crypto.subtle.digest("SHA-384", Q2)]) : [3, 3];
        case 1:
          return [4, g2.apply(void 0, I2.concat([G2.sent()]))];
        case 2:
        case 6:
          return [2, G2.sent()];
        case 3:
          return E2 = T([l("blob"), l(B2.byteLength.toString())]), w2 = (D2 = A).concatBuffers, [4, crypto.subtle.digest("SHA-384", E2)];
        case 4:
          return i2 = [G2.sent()], [4, crypto.subtle.digest("SHA-384", B2)];
        case 5:
          return C2 = w2.apply(D2, [i2.concat([G2.sent()])]), [4, crypto.subtle.digest("SHA-384", C2)];
      }
    });
  });
}
function Z(B2, Q2) {
  return H(this, void 0, void 0, function() {
    var g2, I2, E2, C2, D2;
    return a(this, function(w2) {
      switch (w2.label) {
        case 0:
          return B2.length < 1 ? [2, Q2] : (E2 = (I2 = A).concatBuffers, C2 = [Q2], [4, e(B2[0])]);
        case 1:
          return g2 = E2.apply(I2, [C2.concat([w2.sent()])]), [4, crypto.subtle.digest("SHA-384", g2)];
        case 2:
          return D2 = w2.sent(), [4, Z(B2.slice(1), D2)];
        case 3:
          return [2, w2.sent()];
      }
    });
  });
}
new (function(A2) {
  function B2() {
    return A2 !== null && A2.apply(this, arguments) || this;
  }
  return O(B2, A2), B2.prototype._encodeByte = function(A3) {
    var B3 = A3;
    return B3 += 65, B3 += 25 - A3 >>> 8 & 6, B3 += 51 - A3 >>> 8 & -75, B3 += 61 - A3 >>> 8 & -13, B3 += 62 - A3 >>> 8 & 49, String.fromCharCode(B3);
  }, B2.prototype._decodeChar = function(A3) {
    var B3 = 256;
    return B3 += (44 - A3 & A3 - 46) >>> 8 & -256 + A3 - 45 + 62, B3 += (94 - A3 & A3 - 96) >>> 8 & -256 + A3 - 95 + 63, B3 += (47 - A3 & A3 - 58) >>> 8 & -256 + A3 - 48 + 52, B3 += (64 - A3 & A3 - 91) >>> 8 & -256 + A3 - 65 + 0, B3 += (96 - A3 & A3 - 123) >>> 8 & -256 + A3 - 97 + 26;
  }, B2;
}(p))();
var j = Q(function(A2) {
  !function(B2) {
    var Q2, g2 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, I2 = Math.ceil, E2 = Math.floor, C2 = "[BigNumber Error] ", D2 = C2 + "Number primitive has more than 15 significant digits: ", w2 = 1e14, i2 = 14, G2 = 9007199254740991, o2 = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], M2 = 1e7, F2 = 1e9;
    function N2(A3) {
      var B3 = 0 | A3;
      return A3 > 0 || A3 === B3 ? B3 : B3 - 1;
    }
    function k2(A3) {
      for (var B3, Q3, g3 = 1, I3 = A3.length, E3 = A3[0] + ""; g3 < I3; ) {
        for (B3 = A3[g3++] + "", Q3 = i2 - B3.length; Q3--; B3 = "0" + B3)
          ;
        E3 += B3;
      }
      for (I3 = E3.length; E3.charCodeAt(--I3) === 48; )
        ;
      return E3.slice(0, I3 + 1 || 1);
    }
    function c2(A3, B3) {
      var Q3, g3, I3 = A3.c, E3 = B3.c, C3 = A3.s, D3 = B3.s, w3 = A3.e, i3 = B3.e;
      if (!C3 || !D3)
        return null;
      if (Q3 = I3 && !I3[0], g3 = E3 && !E3[0], Q3 || g3)
        return Q3 ? g3 ? 0 : -D3 : C3;
      if (C3 != D3)
        return C3;
      if (Q3 = C3 < 0, g3 = w3 == i3, !I3 || !E3)
        return g3 ? 0 : !I3 ^ Q3 ? 1 : -1;
      if (!g3)
        return w3 > i3 ^ Q3 ? 1 : -1;
      for (D3 = (w3 = I3.length) < (i3 = E3.length) ? w3 : i3, C3 = 0; C3 < D3; C3++)
        if (I3[C3] != E3[C3])
          return I3[C3] > E3[C3] ^ Q3 ? 1 : -1;
      return w3 == i3 ? 0 : w3 > i3 ^ Q3 ? 1 : -1;
    }
    function Y2(A3, B3, Q3, g3) {
      if (A3 < B3 || A3 > Q3 || A3 !== E2(A3))
        throw Error(C2 + (g3 || "Argument") + (typeof A3 == "number" ? A3 < B3 || A3 > Q3 ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(A3));
    }
    function R2(A3) {
      var B3 = A3.c.length - 1;
      return N2(A3.e / i2) == B3 && A3.c[B3] % 2 != 0;
    }
    function J2(A3, B3) {
      return (A3.length > 1 ? A3.charAt(0) + "." + A3.slice(1) : A3) + (B3 < 0 ? "e" : "e+") + B3;
    }
    function h2(A3, B3, Q3) {
      var g3, I3;
      if (B3 < 0) {
        for (I3 = Q3 + "."; ++B3; I3 += Q3)
          ;
        A3 = I3 + A3;
      } else if (++B3 > (g3 = A3.length)) {
        for (I3 = Q3, B3 -= g3; --B3; I3 += Q3)
          ;
        A3 += I3;
      } else
        B3 < g3 && (A3 = A3.slice(0, B3) + "." + A3.slice(B3));
      return A3;
    }
    Q2 = function A3(B3) {
      var Q3, H2, a2, y2, s2, U2, L2, K2, S2, q2, x2 = X2.prototype = { constructor: X2, toString: null, valueOf: null }, d2 = new X2(1), n2 = 20, t2 = 4, O2 = -7, p2 = 21, f2 = -1e7, P2 = 1e7, W2 = false, e2 = 1, Z2 = 0, j2 = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: "\xA0", suffix: "" }, T2 = "0123456789abcdefghijklmnopqrstuvwxyz", m2 = true;
      function X2(A4, B4) {
        var Q4, I3, C3, w3, o3, M3, F3, N3, k3 = this;
        if (!(k3 instanceof X2))
          return new X2(A4, B4);
        if (B4 == null) {
          if (A4 && A4._isBigNumber === true)
            return k3.s = A4.s, void (!A4.c || A4.e > P2 ? k3.c = k3.e = null : A4.e < f2 ? k3.c = [k3.e = 0] : (k3.e = A4.e, k3.c = A4.c.slice()));
          if ((M3 = typeof A4 == "number") && 0 * A4 == 0) {
            if (k3.s = 1 / A4 < 0 ? (A4 = -A4, -1) : 1, A4 === ~~A4) {
              for (w3 = 0, o3 = A4; o3 >= 10; o3 /= 10, w3++)
                ;
              return void (w3 > P2 ? k3.c = k3.e = null : (k3.e = w3, k3.c = [A4]));
            }
            N3 = String(A4);
          } else {
            if (!g2.test(N3 = String(A4)))
              return a2(k3, N3, M3);
            k3.s = N3.charCodeAt(0) == 45 ? (N3 = N3.slice(1), -1) : 1;
          }
          (w3 = N3.indexOf(".")) > -1 && (N3 = N3.replace(".", "")), (o3 = N3.search(/e/i)) > 0 ? (w3 < 0 && (w3 = o3), w3 += +N3.slice(o3 + 1), N3 = N3.substring(0, o3)) : w3 < 0 && (w3 = N3.length);
        } else {
          if (Y2(B4, 2, T2.length, "Base"), B4 == 10 && m2)
            return V2(k3 = new X2(A4), n2 + k3.e + 1, t2);
          if (N3 = String(A4), M3 = typeof A4 == "number") {
            if (0 * A4 != 0)
              return a2(k3, N3, M3, B4);
            if (k3.s = 1 / A4 < 0 ? (N3 = N3.slice(1), -1) : 1, X2.DEBUG && N3.replace(/^0\.0*|\./, "").length > 15)
              throw Error(D2 + A4);
          } else
            k3.s = N3.charCodeAt(0) === 45 ? (N3 = N3.slice(1), -1) : 1;
          for (Q4 = T2.slice(0, B4), w3 = o3 = 0, F3 = N3.length; o3 < F3; o3++)
            if (Q4.indexOf(I3 = N3.charAt(o3)) < 0) {
              if (I3 == ".") {
                if (o3 > w3) {
                  w3 = F3;
                  continue;
                }
              } else if (!C3 && (N3 == N3.toUpperCase() && (N3 = N3.toLowerCase()) || N3 == N3.toLowerCase() && (N3 = N3.toUpperCase()))) {
                C3 = true, o3 = -1, w3 = 0;
                continue;
              }
              return a2(k3, String(A4), M3, B4);
            }
          M3 = false, (w3 = (N3 = H2(N3, B4, 10, k3.s)).indexOf(".")) > -1 ? N3 = N3.replace(".", "") : w3 = N3.length;
        }
        for (o3 = 0; N3.charCodeAt(o3) === 48; o3++)
          ;
        for (F3 = N3.length; N3.charCodeAt(--F3) === 48; )
          ;
        if (N3 = N3.slice(o3, ++F3)) {
          if (F3 -= o3, M3 && X2.DEBUG && F3 > 15 && (A4 > G2 || A4 !== E2(A4)))
            throw Error(D2 + k3.s * A4);
          if ((w3 = w3 - o3 - 1) > P2)
            k3.c = k3.e = null;
          else if (w3 < f2)
            k3.c = [k3.e = 0];
          else {
            if (k3.e = w3, k3.c = [], o3 = (w3 + 1) % i2, w3 < 0 && (o3 += i2), o3 < F3) {
              for (o3 && k3.c.push(+N3.slice(0, o3)), F3 -= i2; o3 < F3; )
                k3.c.push(+N3.slice(o3, o3 += i2));
              o3 = i2 - (N3 = N3.slice(o3)).length;
            } else
              o3 -= F3;
            for (; o3--; N3 += "0")
              ;
            k3.c.push(+N3);
          }
        } else
          k3.c = [k3.e = 0];
      }
      function l2(A4, B4, Q4, g3) {
        var I3, E3, C3, D3, w3;
        if (Q4 == null ? Q4 = t2 : Y2(Q4, 0, 8), !A4.c)
          return A4.toString();
        if (I3 = A4.c[0], C3 = A4.e, B4 == null)
          w3 = k2(A4.c), w3 = g3 == 1 || g3 == 2 && (C3 <= O2 || C3 >= p2) ? J2(w3, C3) : h2(w3, C3, "0");
        else if (E3 = (A4 = V2(new X2(A4), B4, Q4)).e, D3 = (w3 = k2(A4.c)).length, g3 == 1 || g3 == 2 && (B4 <= E3 || E3 <= O2)) {
          for (; D3 < B4; w3 += "0", D3++)
            ;
          w3 = J2(w3, E3);
        } else if (B4 -= C3, w3 = h2(w3, E3, "0"), E3 + 1 > D3) {
          if (--B4 > 0)
            for (w3 += "."; B4--; w3 += "0")
              ;
        } else if ((B4 += E3 - D3) > 0)
          for (E3 + 1 == D3 && (w3 += "."); B4--; w3 += "0")
            ;
        return A4.s < 0 && I3 ? "-" + w3 : w3;
      }
      function b2(A4, B4) {
        for (var Q4, g3 = 1, I3 = new X2(A4[0]); g3 < A4.length; g3++) {
          if (!(Q4 = new X2(A4[g3])).s) {
            I3 = Q4;
            break;
          }
          B4.call(I3, Q4) && (I3 = Q4);
        }
        return I3;
      }
      function z2(A4, B4, Q4) {
        for (var g3 = 1, I3 = B4.length; !B4[--I3]; B4.pop())
          ;
        for (I3 = B4[0]; I3 >= 10; I3 /= 10, g3++)
          ;
        return (Q4 = g3 + Q4 * i2 - 1) > P2 ? A4.c = A4.e = null : Q4 < f2 ? A4.c = [A4.e = 0] : (A4.e = Q4, A4.c = B4), A4;
      }
      function V2(A4, B4, Q4, g3) {
        var C3, D3, G3, M3, F3, N3, k3, c3 = A4.c, Y3 = o2;
        if (c3) {
          A: {
            for (C3 = 1, M3 = c3[0]; M3 >= 10; M3 /= 10, C3++)
              ;
            if ((D3 = B4 - C3) < 0)
              D3 += i2, G3 = B4, k3 = (F3 = c3[N3 = 0]) / Y3[C3 - G3 - 1] % 10 | 0;
            else if ((N3 = I2((D3 + 1) / i2)) >= c3.length) {
              if (!g3)
                break A;
              for (; c3.length <= N3; c3.push(0))
                ;
              F3 = k3 = 0, C3 = 1, G3 = (D3 %= i2) - i2 + 1;
            } else {
              for (F3 = M3 = c3[N3], C3 = 1; M3 >= 10; M3 /= 10, C3++)
                ;
              k3 = (G3 = (D3 %= i2) - i2 + C3) < 0 ? 0 : F3 / Y3[C3 - G3 - 1] % 10 | 0;
            }
            if (g3 = g3 || B4 < 0 || c3[N3 + 1] != null || (G3 < 0 ? F3 : F3 % Y3[C3 - G3 - 1]), g3 = Q4 < 4 ? (k3 || g3) && (Q4 == 0 || Q4 == (A4.s < 0 ? 3 : 2)) : k3 > 5 || k3 == 5 && (Q4 == 4 || g3 || Q4 == 6 && (D3 > 0 ? G3 > 0 ? F3 / Y3[C3 - G3] : 0 : c3[N3 - 1]) % 10 & 1 || Q4 == (A4.s < 0 ? 8 : 7)), B4 < 1 || !c3[0])
              return c3.length = 0, g3 ? (B4 -= A4.e + 1, c3[0] = Y3[(i2 - B4 % i2) % i2], A4.e = -B4 || 0) : c3[0] = A4.e = 0, A4;
            if (D3 == 0 ? (c3.length = N3, M3 = 1, N3--) : (c3.length = N3 + 1, M3 = Y3[i2 - D3], c3[N3] = G3 > 0 ? E2(F3 / Y3[C3 - G3] % Y3[G3]) * M3 : 0), g3)
              for (; ; ) {
                if (N3 == 0) {
                  for (D3 = 1, G3 = c3[0]; G3 >= 10; G3 /= 10, D3++)
                    ;
                  for (G3 = c3[0] += M3, M3 = 1; G3 >= 10; G3 /= 10, M3++)
                    ;
                  D3 != M3 && (A4.e++, c3[0] == w2 && (c3[0] = 1));
                  break;
                }
                if (c3[N3] += M3, c3[N3] != w2)
                  break;
                c3[N3--] = 0, M3 = 1;
              }
            for (D3 = c3.length; c3[--D3] === 0; c3.pop())
              ;
          }
          A4.e > P2 ? A4.c = A4.e = null : A4.e < f2 && (A4.c = [A4.e = 0]);
        }
        return A4;
      }
      function r2(A4) {
        var B4, Q4 = A4.e;
        return Q4 === null ? A4.toString() : (B4 = k2(A4.c), B4 = Q4 <= O2 || Q4 >= p2 ? J2(B4, Q4) : h2(B4, Q4, "0"), A4.s < 0 ? "-" + B4 : B4);
      }
      return X2.clone = A3, X2.ROUND_UP = 0, X2.ROUND_DOWN = 1, X2.ROUND_CEIL = 2, X2.ROUND_FLOOR = 3, X2.ROUND_HALF_UP = 4, X2.ROUND_HALF_DOWN = 5, X2.ROUND_HALF_EVEN = 6, X2.ROUND_HALF_CEIL = 7, X2.ROUND_HALF_FLOOR = 8, X2.EUCLID = 9, X2.config = X2.set = function(A4) {
        var B4, Q4;
        if (A4 != null) {
          if (typeof A4 != "object")
            throw Error(C2 + "Object expected: " + A4);
          if (A4.hasOwnProperty(B4 = "DECIMAL_PLACES") && (Y2(Q4 = A4[B4], 0, F2, B4), n2 = Q4), A4.hasOwnProperty(B4 = "ROUNDING_MODE") && (Y2(Q4 = A4[B4], 0, 8, B4), t2 = Q4), A4.hasOwnProperty(B4 = "EXPONENTIAL_AT") && ((Q4 = A4[B4]) && Q4.pop ? (Y2(Q4[0], -F2, 0, B4), Y2(Q4[1], 0, F2, B4), O2 = Q4[0], p2 = Q4[1]) : (Y2(Q4, -F2, F2, B4), O2 = -(p2 = Q4 < 0 ? -Q4 : Q4))), A4.hasOwnProperty(B4 = "RANGE"))
            if ((Q4 = A4[B4]) && Q4.pop)
              Y2(Q4[0], -F2, -1, B4), Y2(Q4[1], 1, F2, B4), f2 = Q4[0], P2 = Q4[1];
            else {
              if (Y2(Q4, -F2, F2, B4), !Q4)
                throw Error(C2 + B4 + " cannot be zero: " + Q4);
              f2 = -(P2 = Q4 < 0 ? -Q4 : Q4);
            }
          if (A4.hasOwnProperty(B4 = "CRYPTO")) {
            if ((Q4 = A4[B4]) !== !!Q4)
              throw Error(C2 + B4 + " not true or false: " + Q4);
            if (Q4) {
              if (typeof crypto == "undefined" || !crypto || !crypto.getRandomValues && !crypto.randomBytes)
                throw W2 = !Q4, Error(C2 + "crypto unavailable");
              W2 = Q4;
            } else
              W2 = Q4;
          }
          if (A4.hasOwnProperty(B4 = "MODULO_MODE") && (Y2(Q4 = A4[B4], 0, 9, B4), e2 = Q4), A4.hasOwnProperty(B4 = "POW_PRECISION") && (Y2(Q4 = A4[B4], 0, F2, B4), Z2 = Q4), A4.hasOwnProperty(B4 = "FORMAT")) {
            if (typeof (Q4 = A4[B4]) != "object")
              throw Error(C2 + B4 + " not an object: " + Q4);
            j2 = Q4;
          }
          if (A4.hasOwnProperty(B4 = "ALPHABET")) {
            if (typeof (Q4 = A4[B4]) != "string" || /^.?$|[+\-.\s]|(.).*\1/.test(Q4))
              throw Error(C2 + B4 + " invalid: " + Q4);
            m2 = Q4.slice(0, 10) == "0123456789", T2 = Q4;
          }
        }
        return { DECIMAL_PLACES: n2, ROUNDING_MODE: t2, EXPONENTIAL_AT: [O2, p2], RANGE: [f2, P2], CRYPTO: W2, MODULO_MODE: e2, POW_PRECISION: Z2, FORMAT: j2, ALPHABET: T2 };
      }, X2.isBigNumber = function(A4) {
        if (!A4 || A4._isBigNumber !== true)
          return false;
        if (!X2.DEBUG)
          return true;
        var B4, Q4, g3 = A4.c, I3 = A4.e, D3 = A4.s;
        A:
          if ({}.toString.call(g3) == "[object Array]") {
            if ((D3 === 1 || D3 === -1) && I3 >= -F2 && I3 <= F2 && I3 === E2(I3)) {
              if (g3[0] === 0) {
                if (I3 === 0 && g3.length === 1)
                  return true;
                break A;
              }
              if ((B4 = (I3 + 1) % i2) < 1 && (B4 += i2), String(g3[0]).length == B4) {
                for (B4 = 0; B4 < g3.length; B4++)
                  if ((Q4 = g3[B4]) < 0 || Q4 >= w2 || Q4 !== E2(Q4))
                    break A;
                if (Q4 !== 0)
                  return true;
              }
            }
          } else if (g3 === null && I3 === null && (D3 === null || D3 === 1 || D3 === -1))
            return true;
        throw Error(C2 + "Invalid BigNumber: " + A4);
      }, X2.maximum = X2.max = function() {
        return b2(arguments, x2.lt);
      }, X2.minimum = X2.min = function() {
        return b2(arguments, x2.gt);
      }, X2.random = (y2 = 9007199254740992, s2 = Math.random() * y2 & 2097151 ? function() {
        return E2(Math.random() * y2);
      } : function() {
        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
      }, function(A4) {
        var B4, Q4, g3, D3, w3, G3 = 0, M3 = [], N3 = new X2(d2);
        if (A4 == null ? A4 = n2 : Y2(A4, 0, F2), D3 = I2(A4 / i2), W2)
          if (crypto.getRandomValues) {
            for (B4 = crypto.getRandomValues(new Uint32Array(D3 *= 2)); G3 < D3; )
              (w3 = 131072 * B4[G3] + (B4[G3 + 1] >>> 11)) >= 9e15 ? (Q4 = crypto.getRandomValues(new Uint32Array(2)), B4[G3] = Q4[0], B4[G3 + 1] = Q4[1]) : (M3.push(w3 % 1e14), G3 += 2);
            G3 = D3 / 2;
          } else {
            if (!crypto.randomBytes)
              throw W2 = false, Error(C2 + "crypto unavailable");
            for (B4 = crypto.randomBytes(D3 *= 7); G3 < D3; )
              (w3 = 281474976710656 * (31 & B4[G3]) + 1099511627776 * B4[G3 + 1] + 4294967296 * B4[G3 + 2] + 16777216 * B4[G3 + 3] + (B4[G3 + 4] << 16) + (B4[G3 + 5] << 8) + B4[G3 + 6]) >= 9e15 ? crypto.randomBytes(7).copy(B4, G3) : (M3.push(w3 % 1e14), G3 += 7);
            G3 = D3 / 7;
          }
        if (!W2)
          for (; G3 < D3; )
            (w3 = s2()) < 9e15 && (M3[G3++] = w3 % 1e14);
        for (D3 = M3[--G3], A4 %= i2, D3 && A4 && (w3 = o2[i2 - A4], M3[G3] = E2(D3 / w3) * w3); M3[G3] === 0; M3.pop(), G3--)
          ;
        if (G3 < 0)
          M3 = [g3 = 0];
        else {
          for (g3 = -1; M3[0] === 0; M3.splice(0, 1), g3 -= i2)
            ;
          for (G3 = 1, w3 = M3[0]; w3 >= 10; w3 /= 10, G3++)
            ;
          G3 < i2 && (g3 -= i2 - G3);
        }
        return N3.e = g3, N3.c = M3, N3;
      }), X2.sum = function() {
        for (var A4 = 1, B4 = arguments, Q4 = new X2(B4[0]); A4 < B4.length; )
          Q4 = Q4.plus(B4[A4++]);
        return Q4;
      }, H2 = function() {
        var A4 = "0123456789";
        function B4(A5, B5, Q4, g3) {
          for (var I3, E3, C3 = [0], D3 = 0, w3 = A5.length; D3 < w3; ) {
            for (E3 = C3.length; E3--; C3[E3] *= B5)
              ;
            for (C3[0] += g3.indexOf(A5.charAt(D3++)), I3 = 0; I3 < C3.length; I3++)
              C3[I3] > Q4 - 1 && (C3[I3 + 1] == null && (C3[I3 + 1] = 0), C3[I3 + 1] += C3[I3] / Q4 | 0, C3[I3] %= Q4);
          }
          return C3.reverse();
        }
        return function(g3, I3, E3, C3, D3) {
          var w3, i3, G3, o3, M3, F3, N3, c3, Y3 = g3.indexOf("."), R3 = n2, J3 = t2;
          for (Y3 >= 0 && (o3 = Z2, Z2 = 0, g3 = g3.replace(".", ""), F3 = (c3 = new X2(I3)).pow(g3.length - Y3), Z2 = o3, c3.c = B4(h2(k2(F3.c), F3.e, "0"), 10, E3, A4), c3.e = c3.c.length), G3 = o3 = (N3 = B4(g3, I3, E3, D3 ? (w3 = T2, A4) : (w3 = A4, T2))).length; N3[--o3] == 0; N3.pop())
            ;
          if (!N3[0])
            return w3.charAt(0);
          if (Y3 < 0 ? --G3 : (F3.c = N3, F3.e = G3, F3.s = C3, N3 = (F3 = Q3(F3, c3, R3, J3, E3)).c, M3 = F3.r, G3 = F3.e), Y3 = N3[i3 = G3 + R3 + 1], o3 = E3 / 2, M3 = M3 || i3 < 0 || N3[i3 + 1] != null, M3 = J3 < 4 ? (Y3 != null || M3) && (J3 == 0 || J3 == (F3.s < 0 ? 3 : 2)) : Y3 > o3 || Y3 == o3 && (J3 == 4 || M3 || J3 == 6 && 1 & N3[i3 - 1] || J3 == (F3.s < 0 ? 8 : 7)), i3 < 1 || !N3[0])
            g3 = M3 ? h2(w3.charAt(1), -R3, w3.charAt(0)) : w3.charAt(0);
          else {
            if (N3.length = i3, M3)
              for (--E3; ++N3[--i3] > E3; )
                N3[i3] = 0, i3 || (++G3, N3 = [1].concat(N3));
            for (o3 = N3.length; !N3[--o3]; )
              ;
            for (Y3 = 0, g3 = ""; Y3 <= o3; g3 += w3.charAt(N3[Y3++]))
              ;
            g3 = h2(g3, G3, w3.charAt(0));
          }
          return g3;
        };
      }(), Q3 = function() {
        function A4(A5, B5, Q5) {
          var g3, I3, E3, C3, D3 = 0, w3 = A5.length, i3 = B5 % M2, G3 = B5 / M2 | 0;
          for (A5 = A5.slice(); w3--; )
            D3 = ((I3 = i3 * (E3 = A5[w3] % M2) + (g3 = G3 * E3 + (C3 = A5[w3] / M2 | 0) * i3) % M2 * M2 + D3) / Q5 | 0) + (g3 / M2 | 0) + G3 * C3, A5[w3] = I3 % Q5;
          return D3 && (A5 = [D3].concat(A5)), A5;
        }
        function B4(A5, B5, Q5, g3) {
          var I3, E3;
          if (Q5 != g3)
            E3 = Q5 > g3 ? 1 : -1;
          else
            for (I3 = E3 = 0; I3 < Q5; I3++)
              if (A5[I3] != B5[I3]) {
                E3 = A5[I3] > B5[I3] ? 1 : -1;
                break;
              }
          return E3;
        }
        function Q4(A5, B5, Q5, g3) {
          for (var I3 = 0; Q5--; )
            A5[Q5] -= I3, I3 = A5[Q5] < B5[Q5] ? 1 : 0, A5[Q5] = I3 * g3 + A5[Q5] - B5[Q5];
          for (; !A5[0] && A5.length > 1; A5.splice(0, 1))
            ;
        }
        return function(g3, I3, C3, D3, G3) {
          var o3, M3, F3, k3, c3, Y3, R3, J3, h3, H3, a3, y3, s3, U3, L3, K3, S3, q3 = g3.s == I3.s ? 1 : -1, x3 = g3.c, d3 = I3.c;
          if (!(x3 && x3[0] && d3 && d3[0]))
            return new X2(g3.s && I3.s && (x3 ? !d3 || x3[0] != d3[0] : d3) ? x3 && x3[0] == 0 || !d3 ? 0 * q3 : q3 / 0 : NaN);
          for (h3 = (J3 = new X2(q3)).c = [], q3 = C3 + (M3 = g3.e - I3.e) + 1, G3 || (G3 = w2, M3 = N2(g3.e / i2) - N2(I3.e / i2), q3 = q3 / i2 | 0), F3 = 0; d3[F3] == (x3[F3] || 0); F3++)
            ;
          if (d3[F3] > (x3[F3] || 0) && M3--, q3 < 0)
            h3.push(1), k3 = true;
          else {
            for (U3 = x3.length, K3 = d3.length, F3 = 0, q3 += 2, (c3 = E2(G3 / (d3[0] + 1))) > 1 && (d3 = A4(d3, c3, G3), x3 = A4(x3, c3, G3), K3 = d3.length, U3 = x3.length), s3 = K3, a3 = (H3 = x3.slice(0, K3)).length; a3 < K3; H3[a3++] = 0)
              ;
            S3 = d3.slice(), S3 = [0].concat(S3), L3 = d3[0], d3[1] >= G3 / 2 && L3++;
            do {
              if (c3 = 0, (o3 = B4(d3, H3, K3, a3)) < 0) {
                if (y3 = H3[0], K3 != a3 && (y3 = y3 * G3 + (H3[1] || 0)), (c3 = E2(y3 / L3)) > 1)
                  for (c3 >= G3 && (c3 = G3 - 1), R3 = (Y3 = A4(d3, c3, G3)).length, a3 = H3.length; B4(Y3, H3, R3, a3) == 1; )
                    c3--, Q4(Y3, K3 < R3 ? S3 : d3, R3, G3), R3 = Y3.length, o3 = 1;
                else
                  c3 == 0 && (o3 = c3 = 1), R3 = (Y3 = d3.slice()).length;
                if (R3 < a3 && (Y3 = [0].concat(Y3)), Q4(H3, Y3, a3, G3), a3 = H3.length, o3 == -1)
                  for (; B4(d3, H3, K3, a3) < 1; )
                    c3++, Q4(H3, K3 < a3 ? S3 : d3, a3, G3), a3 = H3.length;
              } else
                o3 === 0 && (c3++, H3 = [0]);
              h3[F3++] = c3, H3[0] ? H3[a3++] = x3[s3] || 0 : (H3 = [x3[s3]], a3 = 1);
            } while ((s3++ < U3 || H3[0] != null) && q3--);
            k3 = H3[0] != null, h3[0] || h3.splice(0, 1);
          }
          if (G3 == w2) {
            for (F3 = 1, q3 = h3[0]; q3 >= 10; q3 /= 10, F3++)
              ;
            V2(J3, C3 + (J3.e = F3 + M3 * i2 - 1) + 1, D3, k3);
          } else
            J3.e = M3, J3.r = +k3;
          return J3;
        };
      }(), U2 = /^(-?)0([xbo])(?=\w[\w.]*$)/i, L2 = /^([^.]+)\.$/, K2 = /^\.([^.]+)$/, S2 = /^-?(Infinity|NaN)$/, q2 = /^\s*\+(?=[\w.])|^\s+|\s+$/g, a2 = function(A4, B4, Q4, g3) {
        var I3, E3 = Q4 ? B4 : B4.replace(q2, "");
        if (S2.test(E3))
          A4.s = isNaN(E3) ? null : E3 < 0 ? -1 : 1;
        else {
          if (!Q4 && (E3 = E3.replace(U2, function(A5, B5, Q5) {
            return I3 = (Q5 = Q5.toLowerCase()) == "x" ? 16 : Q5 == "b" ? 2 : 8, g3 && g3 != I3 ? A5 : B5;
          }), g3 && (I3 = g3, E3 = E3.replace(L2, "$1").replace(K2, "0.$1")), B4 != E3))
            return new X2(E3, I3);
          if (X2.DEBUG)
            throw Error(C2 + "Not a" + (g3 ? " base " + g3 : "") + " number: " + B4);
          A4.s = null;
        }
        A4.c = A4.e = null;
      }, x2.absoluteValue = x2.abs = function() {
        var A4 = new X2(this);
        return A4.s < 0 && (A4.s = 1), A4;
      }, x2.comparedTo = function(A4, B4) {
        return c2(this, new X2(A4, B4));
      }, x2.decimalPlaces = x2.dp = function(A4, B4) {
        var Q4, g3, I3, E3 = this;
        if (A4 != null)
          return Y2(A4, 0, F2), B4 == null ? B4 = t2 : Y2(B4, 0, 8), V2(new X2(E3), A4 + E3.e + 1, B4);
        if (!(Q4 = E3.c))
          return null;
        if (g3 = ((I3 = Q4.length - 1) - N2(this.e / i2)) * i2, I3 = Q4[I3])
          for (; I3 % 10 == 0; I3 /= 10, g3--)
            ;
        return g3 < 0 && (g3 = 0), g3;
      }, x2.dividedBy = x2.div = function(A4, B4) {
        return Q3(this, new X2(A4, B4), n2, t2);
      }, x2.dividedToIntegerBy = x2.idiv = function(A4, B4) {
        return Q3(this, new X2(A4, B4), 0, 1);
      }, x2.exponentiatedBy = x2.pow = function(A4, B4) {
        var Q4, g3, D3, w3, G3, o3, M3, F3, N3 = this;
        if ((A4 = new X2(A4)).c && !A4.isInteger())
          throw Error(C2 + "Exponent not an integer: " + r2(A4));
        if (B4 != null && (B4 = new X2(B4)), G3 = A4.e > 14, !N3.c || !N3.c[0] || N3.c[0] == 1 && !N3.e && N3.c.length == 1 || !A4.c || !A4.c[0])
          return F3 = new X2(Math.pow(+r2(N3), G3 ? 2 - R2(A4) : +r2(A4))), B4 ? F3.mod(B4) : F3;
        if (o3 = A4.s < 0, B4) {
          if (B4.c ? !B4.c[0] : !B4.s)
            return new X2(NaN);
          (g3 = !o3 && N3.isInteger() && B4.isInteger()) && (N3 = N3.mod(B4));
        } else {
          if (A4.e > 9 && (N3.e > 0 || N3.e < -1 || (N3.e == 0 ? N3.c[0] > 1 || G3 && N3.c[1] >= 24e7 : N3.c[0] < 8e13 || G3 && N3.c[0] <= 9999975e7)))
            return w3 = N3.s < 0 && R2(A4) ? -0 : 0, N3.e > -1 && (w3 = 1 / w3), new X2(o3 ? 1 / w3 : w3);
          Z2 && (w3 = I2(Z2 / i2 + 2));
        }
        for (G3 ? (Q4 = new X2(0.5), o3 && (A4.s = 1), M3 = R2(A4)) : M3 = (D3 = Math.abs(+r2(A4))) % 2, F3 = new X2(d2); ; ) {
          if (M3) {
            if (!(F3 = F3.times(N3)).c)
              break;
            w3 ? F3.c.length > w3 && (F3.c.length = w3) : g3 && (F3 = F3.mod(B4));
          }
          if (D3) {
            if ((D3 = E2(D3 / 2)) === 0)
              break;
            M3 = D3 % 2;
          } else if (V2(A4 = A4.times(Q4), A4.e + 1, 1), A4.e > 14)
            M3 = R2(A4);
          else {
            if ((D3 = +r2(A4)) === 0)
              break;
            M3 = D3 % 2;
          }
          N3 = N3.times(N3), w3 ? N3.c && N3.c.length > w3 && (N3.c.length = w3) : g3 && (N3 = N3.mod(B4));
        }
        return g3 ? F3 : (o3 && (F3 = d2.div(F3)), B4 ? F3.mod(B4) : w3 ? V2(F3, Z2, t2, void 0) : F3);
      }, x2.integerValue = function(A4) {
        var B4 = new X2(this);
        return A4 == null ? A4 = t2 : Y2(A4, 0, 8), V2(B4, B4.e + 1, A4);
      }, x2.isEqualTo = x2.eq = function(A4, B4) {
        return c2(this, new X2(A4, B4)) === 0;
      }, x2.isFinite = function() {
        return !!this.c;
      }, x2.isGreaterThan = x2.gt = function(A4, B4) {
        return c2(this, new X2(A4, B4)) > 0;
      }, x2.isGreaterThanOrEqualTo = x2.gte = function(A4, B4) {
        return (B4 = c2(this, new X2(A4, B4))) === 1 || B4 === 0;
      }, x2.isInteger = function() {
        return !!this.c && N2(this.e / i2) > this.c.length - 2;
      }, x2.isLessThan = x2.lt = function(A4, B4) {
        return c2(this, new X2(A4, B4)) < 0;
      }, x2.isLessThanOrEqualTo = x2.lte = function(A4, B4) {
        return (B4 = c2(this, new X2(A4, B4))) === -1 || B4 === 0;
      }, x2.isNaN = function() {
        return !this.s;
      }, x2.isNegative = function() {
        return this.s < 0;
      }, x2.isPositive = function() {
        return this.s > 0;
      }, x2.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, x2.minus = function(A4, B4) {
        var Q4, g3, I3, E3, C3 = this, D3 = C3.s;
        if (B4 = (A4 = new X2(A4, B4)).s, !D3 || !B4)
          return new X2(NaN);
        if (D3 != B4)
          return A4.s = -B4, C3.plus(A4);
        var G3 = C3.e / i2, o3 = A4.e / i2, M3 = C3.c, F3 = A4.c;
        if (!G3 || !o3) {
          if (!M3 || !F3)
            return M3 ? (A4.s = -B4, A4) : new X2(F3 ? C3 : NaN);
          if (!M3[0] || !F3[0])
            return F3[0] ? (A4.s = -B4, A4) : new X2(M3[0] ? C3 : t2 == 3 ? -0 : 0);
        }
        if (G3 = N2(G3), o3 = N2(o3), M3 = M3.slice(), D3 = G3 - o3) {
          for ((E3 = D3 < 0) ? (D3 = -D3, I3 = M3) : (o3 = G3, I3 = F3), I3.reverse(), B4 = D3; B4--; I3.push(0))
            ;
          I3.reverse();
        } else
          for (g3 = (E3 = (D3 = M3.length) < (B4 = F3.length)) ? D3 : B4, D3 = B4 = 0; B4 < g3; B4++)
            if (M3[B4] != F3[B4]) {
              E3 = M3[B4] < F3[B4];
              break;
            }
        if (E3 && (I3 = M3, M3 = F3, F3 = I3, A4.s = -A4.s), (B4 = (g3 = F3.length) - (Q4 = M3.length)) > 0)
          for (; B4--; M3[Q4++] = 0)
            ;
        for (B4 = w2 - 1; g3 > D3; ) {
          if (M3[--g3] < F3[g3]) {
            for (Q4 = g3; Q4 && !M3[--Q4]; M3[Q4] = B4)
              ;
            --M3[Q4], M3[g3] += w2;
          }
          M3[g3] -= F3[g3];
        }
        for (; M3[0] == 0; M3.splice(0, 1), --o3)
          ;
        return M3[0] ? z2(A4, M3, o3) : (A4.s = t2 == 3 ? -1 : 1, A4.c = [A4.e = 0], A4);
      }, x2.modulo = x2.mod = function(A4, B4) {
        var g3, I3, E3 = this;
        return A4 = new X2(A4, B4), !E3.c || !A4.s || A4.c && !A4.c[0] ? new X2(NaN) : !A4.c || E3.c && !E3.c[0] ? new X2(E3) : (e2 == 9 ? (I3 = A4.s, A4.s = 1, g3 = Q3(E3, A4, 0, 3), A4.s = I3, g3.s *= I3) : g3 = Q3(E3, A4, 0, e2), (A4 = E3.minus(g3.times(A4))).c[0] || e2 != 1 || (A4.s = E3.s), A4);
      }, x2.multipliedBy = x2.times = function(A4, B4) {
        var Q4, g3, I3, E3, C3, D3, G3, o3, F3, k3, c3, Y3, R3, J3, h3, H3 = this, a3 = H3.c, y3 = (A4 = new X2(A4, B4)).c;
        if (!(a3 && y3 && a3[0] && y3[0]))
          return !H3.s || !A4.s || a3 && !a3[0] && !y3 || y3 && !y3[0] && !a3 ? A4.c = A4.e = A4.s = null : (A4.s *= H3.s, a3 && y3 ? (A4.c = [0], A4.e = 0) : A4.c = A4.e = null), A4;
        for (g3 = N2(H3.e / i2) + N2(A4.e / i2), A4.s *= H3.s, (G3 = a3.length) < (k3 = y3.length) && (R3 = a3, a3 = y3, y3 = R3, I3 = G3, G3 = k3, k3 = I3), I3 = G3 + k3, R3 = []; I3--; R3.push(0))
          ;
        for (J3 = w2, h3 = M2, I3 = k3; --I3 >= 0; ) {
          for (Q4 = 0, c3 = y3[I3] % h3, Y3 = y3[I3] / h3 | 0, E3 = I3 + (C3 = G3); E3 > I3; )
            Q4 = ((o3 = c3 * (o3 = a3[--C3] % h3) + (D3 = Y3 * o3 + (F3 = a3[C3] / h3 | 0) * c3) % h3 * h3 + R3[E3] + Q4) / J3 | 0) + (D3 / h3 | 0) + Y3 * F3, R3[E3--] = o3 % J3;
          R3[E3] = Q4;
        }
        return Q4 ? ++g3 : R3.splice(0, 1), z2(A4, R3, g3);
      }, x2.negated = function() {
        var A4 = new X2(this);
        return A4.s = -A4.s || null, A4;
      }, x2.plus = function(A4, B4) {
        var Q4, g3 = this, I3 = g3.s;
        if (B4 = (A4 = new X2(A4, B4)).s, !I3 || !B4)
          return new X2(NaN);
        if (I3 != B4)
          return A4.s = -B4, g3.minus(A4);
        var E3 = g3.e / i2, C3 = A4.e / i2, D3 = g3.c, G3 = A4.c;
        if (!E3 || !C3) {
          if (!D3 || !G3)
            return new X2(I3 / 0);
          if (!D3[0] || !G3[0])
            return G3[0] ? A4 : new X2(D3[0] ? g3 : 0 * I3);
        }
        if (E3 = N2(E3), C3 = N2(C3), D3 = D3.slice(), I3 = E3 - C3) {
          for (I3 > 0 ? (C3 = E3, Q4 = G3) : (I3 = -I3, Q4 = D3), Q4.reverse(); I3--; Q4.push(0))
            ;
          Q4.reverse();
        }
        for ((I3 = D3.length) - (B4 = G3.length) < 0 && (Q4 = G3, G3 = D3, D3 = Q4, B4 = I3), I3 = 0; B4; )
          I3 = (D3[--B4] = D3[B4] + G3[B4] + I3) / w2 | 0, D3[B4] = w2 === D3[B4] ? 0 : D3[B4] % w2;
        return I3 && (D3 = [I3].concat(D3), ++C3), z2(A4, D3, C3);
      }, x2.precision = x2.sd = function(A4, B4) {
        var Q4, g3, I3, E3 = this;
        if (A4 != null && A4 !== !!A4)
          return Y2(A4, 1, F2), B4 == null ? B4 = t2 : Y2(B4, 0, 8), V2(new X2(E3), A4, B4);
        if (!(Q4 = E3.c))
          return null;
        if (g3 = (I3 = Q4.length - 1) * i2 + 1, I3 = Q4[I3]) {
          for (; I3 % 10 == 0; I3 /= 10, g3--)
            ;
          for (I3 = Q4[0]; I3 >= 10; I3 /= 10, g3++)
            ;
        }
        return A4 && E3.e + 1 > g3 && (g3 = E3.e + 1), g3;
      }, x2.shiftedBy = function(A4) {
        return Y2(A4, -9007199254740991, G2), this.times("1e" + A4);
      }, x2.squareRoot = x2.sqrt = function() {
        var A4, B4, g3, I3, E3, C3 = this, D3 = C3.c, w3 = C3.s, i3 = C3.e, G3 = n2 + 4, o3 = new X2("0.5");
        if (w3 !== 1 || !D3 || !D3[0])
          return new X2(!w3 || w3 < 0 && (!D3 || D3[0]) ? NaN : D3 ? C3 : 1 / 0);
        if ((w3 = Math.sqrt(+r2(C3))) == 0 || w3 == 1 / 0 ? (((B4 = k2(D3)).length + i3) % 2 == 0 && (B4 += "0"), w3 = Math.sqrt(+B4), i3 = N2((i3 + 1) / 2) - (i3 < 0 || i3 % 2), g3 = new X2(B4 = w3 == 1 / 0 ? "5e" + i3 : (B4 = w3.toExponential()).slice(0, B4.indexOf("e") + 1) + i3)) : g3 = new X2(w3 + ""), g3.c[0]) {
          for ((w3 = (i3 = g3.e) + G3) < 3 && (w3 = 0); ; )
            if (E3 = g3, g3 = o3.times(E3.plus(Q3(C3, E3, G3, 1))), k2(E3.c).slice(0, w3) === (B4 = k2(g3.c)).slice(0, w3)) {
              if (g3.e < i3 && --w3, (B4 = B4.slice(w3 - 3, w3 + 1)) != "9999" && (I3 || B4 != "4999")) {
                +B4 && (+B4.slice(1) || B4.charAt(0) != "5") || (V2(g3, g3.e + n2 + 2, 1), A4 = !g3.times(g3).eq(C3));
                break;
              }
              if (!I3 && (V2(E3, E3.e + n2 + 2, 0), E3.times(E3).eq(C3))) {
                g3 = E3;
                break;
              }
              G3 += 4, w3 += 4, I3 = 1;
            }
        }
        return V2(g3, g3.e + n2 + 1, t2, A4);
      }, x2.toExponential = function(A4, B4) {
        return A4 != null && (Y2(A4, 0, F2), A4++), l2(this, A4, B4, 1);
      }, x2.toFixed = function(A4, B4) {
        return A4 != null && (Y2(A4, 0, F2), A4 = A4 + this.e + 1), l2(this, A4, B4);
      }, x2.toFormat = function(A4, B4, Q4) {
        var g3, I3 = this;
        if (Q4 == null)
          A4 != null && B4 && typeof B4 == "object" ? (Q4 = B4, B4 = null) : A4 && typeof A4 == "object" ? (Q4 = A4, A4 = B4 = null) : Q4 = j2;
        else if (typeof Q4 != "object")
          throw Error(C2 + "Argument not an object: " + Q4);
        if (g3 = I3.toFixed(A4, B4), I3.c) {
          var E3, D3 = g3.split("."), w3 = +Q4.groupSize, i3 = +Q4.secondaryGroupSize, G3 = Q4.groupSeparator || "", o3 = D3[0], M3 = D3[1], F3 = I3.s < 0, N3 = F3 ? o3.slice(1) : o3, k3 = N3.length;
          if (i3 && (E3 = w3, w3 = i3, i3 = E3, k3 -= E3), w3 > 0 && k3 > 0) {
            for (E3 = k3 % w3 || w3, o3 = N3.substr(0, E3); E3 < k3; E3 += w3)
              o3 += G3 + N3.substr(E3, w3);
            i3 > 0 && (o3 += G3 + N3.slice(E3)), F3 && (o3 = "-" + o3);
          }
          g3 = M3 ? o3 + (Q4.decimalSeparator || "") + ((i3 = +Q4.fractionGroupSize) ? M3.replace(new RegExp("\\d{" + i3 + "}\\B", "g"), "$&" + (Q4.fractionGroupSeparator || "")) : M3) : o3;
        }
        return (Q4.prefix || "") + g3 + (Q4.suffix || "");
      }, x2.toFraction = function(A4) {
        var B4, g3, I3, E3, D3, w3, G3, M3, F3, N3, c3, Y3, R3 = this, J3 = R3.c;
        if (A4 != null && (!(G3 = new X2(A4)).isInteger() && (G3.c || G3.s !== 1) || G3.lt(d2)))
          throw Error(C2 + "Argument " + (G3.isInteger() ? "out of range: " : "not an integer: ") + r2(G3));
        if (!J3)
          return new X2(R3);
        for (B4 = new X2(d2), F3 = g3 = new X2(d2), I3 = M3 = new X2(d2), Y3 = k2(J3), D3 = B4.e = Y3.length - R3.e - 1, B4.c[0] = o2[(w3 = D3 % i2) < 0 ? i2 + w3 : w3], A4 = !A4 || G3.comparedTo(B4) > 0 ? D3 > 0 ? B4 : F3 : G3, w3 = P2, P2 = 1 / 0, G3 = new X2(Y3), M3.c[0] = 0; N3 = Q3(G3, B4, 0, 1), (E3 = g3.plus(N3.times(I3))).comparedTo(A4) != 1; )
          g3 = I3, I3 = E3, F3 = M3.plus(N3.times(E3 = F3)), M3 = E3, B4 = G3.minus(N3.times(E3 = B4)), G3 = E3;
        return E3 = Q3(A4.minus(g3), I3, 0, 1), M3 = M3.plus(E3.times(F3)), g3 = g3.plus(E3.times(I3)), M3.s = F3.s = R3.s, c3 = Q3(F3, I3, D3 *= 2, t2).minus(R3).abs().comparedTo(Q3(M3, g3, D3, t2).minus(R3).abs()) < 1 ? [F3, I3] : [M3, g3], P2 = w3, c3;
      }, x2.toNumber = function() {
        return +r2(this);
      }, x2.toPrecision = function(A4, B4) {
        return A4 != null && Y2(A4, 1, F2), l2(this, A4, B4, 2);
      }, x2.toString = function(A4) {
        var B4, Q4 = this, g3 = Q4.s, I3 = Q4.e;
        return I3 === null ? g3 ? (B4 = "Infinity", g3 < 0 && (B4 = "-" + B4)) : B4 = "NaN" : (A4 == null ? B4 = I3 <= O2 || I3 >= p2 ? J2(k2(Q4.c), I3) : h2(k2(Q4.c), I3, "0") : A4 === 10 && m2 ? B4 = h2(k2((Q4 = V2(new X2(Q4), n2 + I3 + 1, t2)).c), Q4.e, "0") : (Y2(A4, 2, T2.length, "Base"), B4 = H2(h2(k2(Q4.c), I3, "0"), 10, A4, g3, true)), g3 < 0 && Q4.c[0] && (B4 = "-" + B4)), B4;
      }, x2.valueOf = x2.toJSON = function() {
        return r2(this);
      }, x2._isBigNumber = true, B3 != null && X2.set(B3), X2;
    }(), Q2.default = Q2.BigNumber = Q2, A2.exports ? A2.exports = Q2 : (B2 || (B2 = typeof self != "undefined" && self ? self : window), B2.BigNumber = Q2);
  }(B);
});
function T(A2) {
  for (var B2 = 0, Q2 = 0; Q2 < A2.length; Q2++)
    B2 += A2[Q2].byteLength;
  var g2 = new Uint8Array(B2), I2 = 0;
  g2.set(new Uint8Array(A2[0]), I2), I2 += A2[0].byteLength;
  for (Q2 = 1; Q2 < A2.length; Q2++)
    g2.set(new Uint8Array(A2[Q2]), I2), I2 += A2[Q2].byteLength;
  return g2;
}
function m(A2) {
  var B2 = z(A2);
  return typeof TextDecoder == "undefined" ? new (require("util")).TextDecoder("utf-8", { fatal: true }).decode(B2) : new TextDecoder("utf-8", { fatal: true }).decode(B2);
}
function X(A2) {
  return typeof TextDecoder == "undefined" ? new (require("util")).TextDecoder("utf-8", { fatal: true }).decode(A2) : new TextDecoder("utf-8", { fatal: true }).decode(A2);
}
function l(A2) {
  return typeof TextEncoder == "undefined" ? new (require("util")).TextEncoder().encode(A2) : new TextEncoder().encode(A2);
}
function b(A2) {
  return r(l(A2));
}
function z(A2) {
  return new Uint8Array(W(v(A2)));
}
function V(A2) {
  return P(new Uint8Array(A2));
}
function r(A2) {
  return u(V(A2));
}
function u(A2) {
  return A2.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
function v(A2) {
  var B2;
  return B2 = (A2 = A2.replace(/\-/g, "+").replace(/\_/g, "/")).length % 4 == 0 ? 0 : 4 - A2.length % 4, A2.concat("=".repeat(B2));
}
function _(A2) {
  return H(this, void 0, void 0, function() {
    var B2, Q2;
    return a(this, function(g2) {
      switch (g2.label) {
        case 0:
          switch (A2 = new gA(A2), A2.format) {
            case 1:
              return [3, 1];
            case 2:
              return [3, 2];
          }
          return [3, 6];
        case 1:
          return B2 = A2.tags.reduce(function(A3, B3) {
            return T([A3, B3.get("name", { decode: true, string: false }), B3.get("value", { decode: true, string: false })]);
          }, new Uint8Array()), [2, T([A2.get("owner", { decode: true, string: false }), A2.get("target", { decode: true, string: false }), A2.get("data", { decode: true, string: false }), l(A2.quantity), l(A2.reward), A2.get("last_tx", { decode: true, string: false }), B2])];
        case 2:
          return A2.data_root ? [3, 4] : [4, A2.prepareChunks(A2.data)];
        case 3:
          g2.sent(), g2.label = 4;
        case 4:
          return Q2 = A2.tags.map(function(A3) {
            return [A3.get("name", { decode: true, string: false }), A3.get("value", { decode: true, string: false })];
          }), [4, e([l(A2.format.toString()), A2.get("owner", { decode: true, string: false }), A2.get("target", { decode: true, string: false }), l(A2.quantity), l(A2.reward), A2.get("last_tx", { decode: true, string: false }), Q2, l(A2.data_size), A2.get("data_root", { decode: true, string: false })])];
        case 5:
          return [2, g2.sent()];
        case 6:
          throw new Error("Unexpected transaction format: ".concat(A2.format));
      }
    });
  });
}
function $(A2, B2) {
  var Q2 = B2.id, g2 = B2.owner, I2 = B2.reward, E2 = B2.tags, C2 = B2.signature;
  return A2.id = Q2, A2.owner = g2, I2 && (A2.reward = I2), E2 && (A2.tags = E2), A2.signature = C2, A2;
}
var AA = function() {
  function A2() {
  }
  return A2.prototype.get = function(A3, B2) {
    if (!Object.getOwnPropertyNames(this).includes(A3))
      throw new Error('Field "'.concat(A3, '" is not a property of the Arweave Transaction class.'));
    return this[A3] instanceof Uint8Array ? B2 && B2.decode && B2.string ? X(this[A3]) : B2 && B2.decode && !B2.string ? this[A3] : r(this[A3]) : B2 && B2.decode == 1 ? B2 && B2.string ? m(this[A3]) : z(this[A3]) : this[A3];
  }, A2;
}(), BA = function(A2) {
  function B2(B3, Q2, g2) {
    var I2 = A2.call(this) || this;
    return I2.name = B3, I2.value = Q2, I2;
  }
  return J(B2, A2), B2;
}(AA), QA = {}, gA = function(A2) {
  function B2(B3) {
    B3 === void 0 && (B3 = {});
    var Q2 = A2.call(this) || this;
    return Q2.format = 2, Q2.id = "", Q2.last_tx = "", Q2.owner = "", Q2.tags = [], Q2.target = "", Q2.quantity = "0", Q2.data_size = "0", Q2.data = new Uint8Array(), Q2.data_root = "", Q2.reward = "0", Q2.signature = "", Object.assign(Q2, B3), typeof Q2.data == "string" && (Q2.data = ArweaveUtils.b64UrlToBuffer(Q2.data)), B3.tags && (Q2.tags = B3.tags.map(function(A3) {
      return new BA(A3.name, A3.value);
    })), Q2;
  }
  return J(B2, A2), B2.prototype.addTag = function(A3, B3) {
    this.tags.push(new BA(ArweaveUtils.stringToB64Url(A3), ArweaveUtils.stringToB64Url(B3)));
  }, B2.prototype.toJSON = function() {
    return { format: this.format, id: this.id, last_tx: this.last_tx, owner: this.owner, tags: this.tags, target: this.target, quantity: this.quantity, data: ArweaveUtils.bufferTob64Url(this.data), data_size: this.data_size, data_root: this.data_root, data_tree: this.data_tree, reward: this.reward, signature: this.signature };
  }, B2.prototype.setOwner = function(A3) {
    this.owner = A3;
  }, B2.prototype.setSignature = function(A3) {
    var B3 = A3.id, Q2 = A3.owner, g2 = A3.reward, I2 = A3.tags, E2 = A3.signature;
    this.id = B3, this.owner = Q2, g2 && (this.reward = g2), I2 && (this.tags = I2), this.signature = E2;
  }, B2.prototype.prepareChunks = function(A3) {
    return H(this, void 0, void 0, function() {
      var B3;
      return a(this, function(Q2) {
        switch (Q2.label) {
          case 0:
            return !this.chunks && A3.byteLength > 0 ? (B3 = this, [4, generateTransactionChunks(A3)]) : [3, 2];
          case 1:
            B3.chunks = Q2.sent(), this.data_root = ArweaveUtils.bufferTob64Url(this.chunks.data_root), Q2.label = 2;
          case 2:
            return this.chunks || A3.byteLength !== 0 || (this.chunks = { chunks: [], data_root: new Uint8Array(), proofs: [] }, this.data_root = ""), [2];
        }
      });
    });
  }, B2.prototype.getChunk = function(A3, B3) {
    if (!this.chunks)
      throw new Error("Chunks have not been prepared");
    var Q2 = this.chunks.proofs[A3], g2 = this.chunks.chunks[A3];
    return { data_root: this.data_root, data_size: this.data_size, data_path: ArweaveUtils.bufferTob64Url(Q2.proof), offset: Q2.offset.toString(), chunk: ArweaveUtils.bufferTob64Url(B3.slice(g2.minByteRange, g2.maxByteRange)) };
  }, B2.prototype.getSignatureData = function() {
    return H(this, void 0, void 0, function() {
      var A3, B3;
      return a(this, function(Q2) {
        switch (Q2.label) {
          case 0:
            switch (this.format) {
              case 1:
                return [3, 1];
              case 2:
                return [3, 2];
            }
            return [3, 6];
          case 1:
            return A3 = this.tags.reduce(function(A4, B4) {
              return ArweaveUtils.concatBuffers([A4, B4.get("name", { decode: true, string: false }), B4.get("value", { decode: true, string: false })]);
            }, new Uint8Array()), [2, ArweaveUtils.concatBuffers([this.get("owner", { decode: true, string: false }), this.get("target", { decode: true, string: false }), this.get("data", { decode: true, string: false }), ArweaveUtils.stringToBuffer(this.quantity), ArweaveUtils.stringToBuffer(this.reward), this.get("last_tx", { decode: true, string: false }), A3])];
          case 2:
            return this.data_root ? [3, 4] : [4, this.prepareChunks(this.data)];
          case 3:
            Q2.sent(), Q2.label = 4;
          case 4:
            return B3 = this.tags.map(function(A4) {
              return [A4.get("name", { decode: true, string: false }), A4.get("value", { decode: true, string: false })];
            }), [4, e([ArweaveUtils.stringToBuffer(this.format.toString()), this.get("owner", { decode: true, string: false }), this.get("target", { decode: true, string: false }), ArweaveUtils.stringToBuffer(this.quantity), ArweaveUtils.stringToBuffer(this.reward), this.get("last_tx", { decode: true, string: false }), B3, ArweaveUtils.stringToBuffer(this.data_size), this.get("data_root", { decode: true, string: false })])];
          case 5:
            return [2, Q2.sent()];
          case 6:
            throw new Error("Unexpected transaction format: ".concat(this.format));
        }
      });
    });
  }, B2;
}(AA);
function IA(A2, B2) {
  var Q2 = B2 === void 0 ? {} : B2, g2 = Q2.formatted, I2 = g2 !== void 0 && g2, E2 = Q2.decimals, C2 = E2 === void 0 ? 12 : E2;
  Q2.trim;
  var D2 = CA(A2, C2).shiftedBy(-12);
  return I2 ? D2.toFormat(C2) : D2.toFixed(C2);
}
function EA(A2, B2) {
  var Q2 = (B2 === void 0 ? {} : B2).formatted, g2 = Q2 !== void 0 && Q2, I2 = CA(A2).shiftedBy(12);
  return g2 ? I2.toFormat() : I2.toFixed(0);
}
function CA(A2, B2) {
  return B2 === void 0 && (B2 = 12), wA(A2, B2);
}
var DA, wA = function(A2, B2) {
  var Q2;
  try {
    Q2 = j.clone({ DECIMAL_PLACES: B2 });
  } catch (A3) {
    console.warn("Caught big num issues, try default", A3), Q2 = j.default.clone({ DECIMAL_PLACES: B2 });
  }
  return new Q2(A2);
}, iA = function(A2) {
  return H(void 0, void 0, void 0, function() {
    return a(this, function(B2) {
      return [2, crypto.subtle.importKey("jwk", A2, { name: "RSA-PSS", hash: { name: "SHA-256" } }, false, ["sign"])];
    });
  });
}, GA = function(A2, B2, Q2) {
  return (Q2 === void 0 ? {} : Q2).saltLength, H(void 0, void 0, void 0, function() {
    var Q3, g2, I2, E2;
    return a(this, function(C2) {
      switch (C2.label) {
        case 0:
          return I2 = (g2 = crypto.subtle).sign, E2 = [{ name: "RSA-PSS", saltLength: 32 }], [4, iA(A2)];
        case 1:
          return [4, I2.apply(g2, E2.concat([C2.sent(), B2]))];
        case 2:
          return Q3 = C2.sent(), [2, new Uint8Array(Q3)];
      }
    });
  });
};
function oA(B2) {
  return H(this, void 0, void 0, function() {
    var Q2, g2;
    return a(this, function(I2) {
      switch (I2.label) {
        case 0:
          return g2 = (Q2 = A).bufferTob64Url, [4, crypto.subtle.digest("SHA-256", z(B2))];
        case 1:
          return [2, g2.apply(Q2, [I2.sent()])];
      }
    });
  });
}
var MA = { generateJWK: function() {
  return H(void 0, void 0, void 0, function() {
    var A2;
    return a(this, function(B2) {
      switch (B2.label) {
        case 0:
          return [4, H(void 0, void 0, void 0, function() {
            var A3, B3, Q2;
            return a(this, function(g2) {
              switch (g2.label) {
                case 0:
                  return [4, crypto.subtle.generateKey({ name: "RSA-PSS", modulusLength: 4096, publicExponent: new Uint8Array([1, 0, 1]), hash: { name: "SHA-256" } }, true, ["sign"])];
                case 1:
                  return A3 = g2.sent(), [4, crypto.subtle.exportKey("jwk", A3.privateKey)];
                case 2:
                  return [4, oA((B3 = g2.sent()).n)];
                case 3:
                  return Q2 = g2.sent(), [2, { kty: B3.kty, e: B3.e, n: B3.n, d: B3.d, p: B3.p, q: B3.q, dp: B3.dp, dq: B3.dq, qi: B3.qi, kid: Q2 }];
              }
            });
          })];
        case 1:
          return [4, oA((A2 = B2.sent()).n)];
        case 2:
          return B2.sent(), [2, A2];
      }
    });
  });
}, connect: function(A2, B2) {
  return H(this, void 0, void 0, function() {
    return a(this, function(B3) {
      return DA = A2, [2, true];
    });
  });
}, disconnect: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      return [2, true];
    });
  });
}, getActiveAddress: function() {
  return H(this, void 0, void 0, function() {
    var A2, B2;
    return a(this, function(Q2) {
      switch (Q2.label) {
        case 0:
          return Q2.trys.push([0, 2, , 3]), get(keypairs).forEach(function(B3, Q3, g2) {
            B3.kty == "RSA" && (A2 = B3);
          }), [4, oA(A2.n)];
        case 1:
          return [2, Q2.sent()];
        case 2:
          throw B2 = Q2.sent(), new Error(B2);
        case 3:
          return [2];
      }
    });
  });
}, getActivePublicKey: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      return [2];
    });
  });
}, getAllAddresses: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      return [2];
    });
  });
}, getWalletNames: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      return [2];
    });
  });
}, addToken: function(A2) {
  return H(this, void 0, void 0, function() {
    return a(this, function(A3) {
      return [2];
    });
  });
}, sign: function(A2) {
  return H(this, void 0, void 0, function() {
    var B2, Q2, g2, I2 = this;
    return a(this, function(E2) {
      switch (E2.label) {
        case 0:
          return [4, config.confirm("arweaveWalletAPI.sign", A2)];
        case 1:
          return E2.sent() ? [4, MA.getActiveAddress()] : [2, false];
        case 2:
          return B2 = E2.sent(), g2 = get(keypairs), [4, Promise.all(y([], g2, true).map(function(A3) {
            A3[0];
            var g3 = A3[1];
            return H(I2, void 0, void 0, function() {
              return a(this, function(A4) {
                switch (A4.label) {
                  case 0:
                    return (g3 == null ? void 0 : g3.kty) !== "RSA" ? [3, 2] : [4, oA(g3.n)];
                  case 1:
                    A4.sent() == B2 && (Q2 = g3), A4.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }))];
        case 3:
          return E2.sent(), [4, GA(Q2, A2.dataToSign)];
        case 4:
          return [2, E2.sent()];
      }
    });
  });
}, getPermissions: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      return [2, DA];
    });
  });
}, getArweaveConfig: function() {
  return H(this, void 0, void 0, function() {
    return a(this, function(A2) {
      return [2];
    });
  });
}, encrypt: function(A2, B2) {
  return H(this, void 0, void 0, function() {
    return a(this, function(A3) {
      return [2];
    });
  });
}, decrypt: function(A2, B2) {
  return H(this, void 0, void 0, function() {
    return a(this, function(A3) {
      return [2];
    });
  });
}, signature: function(A2, B2) {
  return H(this, void 0, void 0, function() {
    return a(this, function(A3) {
      return [2];
    });
  });
}, noop: function() {
  return true;
} };
new TextDecoder();
var FA = {}, NA = { ed25519: t, arweaveWalletAPI: MA, proxcryptor: n, connect: function(A2) {
  return H(void 0, void 0, void 0, function() {
    var B2;
    return a(this, function(Q2) {
      if (((B2 = FA).confirm, false) === "function")
        ;
      try {
        if (!(sessionStorage.getItem("STAY_CONNECTED") == "true" || B2.confirm("connect", { origin: A2 })))
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
const kA = { OPENED_SIGNAL: "OPENED", KEYS_SYNC: "KEYS_SYNC", WINDOW_SYNC: "WINDOW_SYNC", SAVED_KEYS: "__SAVED_KEY", CLOSING: "CLOSING" };
var cA = function() {
  function A2() {
  }
  return A2.prototype.init = function() {
    return H(this, void 0, void 0, function() {
      return a(this, function(A3) {
        switch (A3.label) {
          case 0:
            return [4, Y({ methods: h(h({}, NA), { multiply: function(A4, B2) {
              return A4 * B2;
            }, divide: function(A4, B2) {
              return new Promise(function(Q2) {
                setTimeout(function() {
                  Q2(A4 / B2);
                }, 1e3);
              });
            } }) }).promise];
          case 1:
            return [2, A3.sent()];
        }
      });
    });
  }, A2;
}();
export { kA as CONSTANTS, cA as Connection, NA as handlers, x as internals };
//# sourceMappingURL=index-1329eaf0.js.map