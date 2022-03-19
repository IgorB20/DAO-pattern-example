"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database/database"));
function main(movieDAO) {
    movieDAO.insert("Star Wars Episode VI", "Best movie on the world", 1994);
    console.log(database_1.default);
    const movieSearch = movieDAO.getByTitle("Star Wars Episode I");
    console.log("resultado da pesquisa ===>");
    console.log(movieSearch);
}
exports.default = main;
