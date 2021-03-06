"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../models/Movie"));
const database_1 = __importDefault(require("../database/database"));
class LocalDbMovieDAO {
    insert(title, description, year, cast = []) {
        const movie = new Movie_1.default(title, description, year, cast);
        database_1.default.push(movie);
        return movie;
    }
    getByTitle(title) {
        return database_1.default.find((movie) => movie.title == title);
    }
}
exports.default = LocalDbMovieDAO;
