"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(title, description, year, cast = []) {
        this.title = title;
        this.description = description;
        this.year = year;
        this.cast = cast;
    }
}
exports.default = Movie;
