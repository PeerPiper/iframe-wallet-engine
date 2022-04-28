import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import css from "rollup-plugin-css-only"

import sveltePreprocess from "svelte-preprocess"
import typescript from "@rollup/plugin-typescript"
import { wasm } from "@rollup/plugin-wasm"
import json from "@rollup/plugin-json"
import inlineSvg from "rollup-plugin-inline-svg"

import pkg from "./package.json"

const inlineDynamicImports = true

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
    .replace(/^\w/, (m) => m.toUpperCase())
    .replace(/-\w/g, (m) => m[1].toUpperCase())

const production = !process.env.ROLLUP_WATCH

function serve() {
    let server

    function toExit() {
        if (server) server.kill(0)
    }

    return {
        writeBundle() {
            if (server) return
            server = require("child_process").spawn(
                "npm",
                ["run", "start", "--", "--dev"],
                {
                    stdio: ["ignore", "inherit", "inherit"],
                    shell: true,
                }
            )

            process.on("SIGTERM", toExit)
            process.on("exit", toExit)
        },
    }
}

export default [
    {
        input: "src/index.js",
        output: [
            { file: pkg.module, format: "es", inlineDynamicImports },
            { file: pkg.main, format: "umd", name, inlineDynamicImports },
        ],
        plugins: [
            json(),
            inlineSvg({}),
            typescript({
                sourceMap: !production,
            }),
            wasm(),
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production,
                },
                preprocess: sveltePreprocess({
                    sourceMap: !production,
                }),
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: "bundle.css" }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ["svelte"],
            }),
            commonjs(),

            // If we're building for production , minify
            // production && terser(),
        ],
        watch: {
            clearScreen: false,
        },
    },
]
