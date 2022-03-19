"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalDbMovieDAO_1 = __importDefault(require("./src/DAO/LocalDbMovieDAO"));
const main_1 = __importDefault(require("./src/main"));
const localDbMovieDAO = new LocalDbMovieDAO_1.default();
(0, main_1.default)(localDbMovieDAO);
