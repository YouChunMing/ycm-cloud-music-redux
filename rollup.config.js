import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json';

export default [
    // UMD Development
    {
        input: 'src/index.js',
        output: {
            file: "umd/ycm-cloud-music-redux.js",
            format: 'umd',
            name: 'YCMCloudMusicRedux',
            exports:'named',
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**' 
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    },
     // UMD Production
    {
        input: 'src/index.js',
        output: {
            file: "umd/ycm-cloud-music-redux.min.js",
            format: 'umd',
            name: 'YCMCloudMusicRedux',
            exports:'named',
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**' 
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            terser({
                compress: {
                  pure_getters: true,
                  unsafe: true,
                  unsafe_comps: true,
                  warnings: false
                }
            })
        ]
    },
    // CommonJS ES
    {
        input: 'src/index.js',
        output: [
            { file: pkg.main, format: 'cjs', exports:'named'},
            { file: pkg.module, format: 'esm' }
        ],
        external: (id) => {
            const specificList = ['redux', 'immutable', 'redux-immutable', 'redux-actions', 'reselect'];
            const specificPattern = new RegExp(`^(${specificList.join('|')})($|/)`);
            const externalPattern = new RegExp(`^core-js/modules`);
            return specificPattern.test(id) || externalPattern.test(id);
        },
        plugins: [
            commonjs(),
            babel({
                exclude: 'node_modules/**' 
            })
        ]
    }
]