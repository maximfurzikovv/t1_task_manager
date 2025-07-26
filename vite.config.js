"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
var path_1 = __importDefault(require("path"));
exports.default = (0, vite_1.defineConfig)({
    base: '/',
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            '@app': path_1.default.resolve(__dirname, 'src/app'),
            '@pages': path_1.default.resolve(__dirname, 'src/pages'),
            '@features': path_1.default.resolve(__dirname, 'src/features'),
            '@entities': path_1.default.resolve(__dirname, 'src/entities'),
            '@shared': path_1.default.resolve(__dirname, 'src/shared'),
        }
    }
});
