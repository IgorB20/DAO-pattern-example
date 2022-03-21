"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database/database"));
const Actor_1 = __importDefault(require("./models/Actor"));
function main(movieDAO) {
    const cast = [];
    cast.push(new Actor_1.default("Mark Hamill", "M"));
    cast.push(new Actor_1.default("Carrie Fisher", "F"));
    movieDAO.insert("Star Wars Episode VI", "Luke Skywalker e seus amigos viajam para Tatooine e salvam seu amigo Han Solo do lorde do crime Jabba o Hutt.", 1983, cast);
    console.log(database_1.default);
    console.log(database_1.default[0].cast);
    // const movieSearch = movieDAO.getByTitle("Star Wars Episode I");
    // console.log("resultado da pesquisa ===>");
    // console.log(movieSearch);
}
exports.default = main;
