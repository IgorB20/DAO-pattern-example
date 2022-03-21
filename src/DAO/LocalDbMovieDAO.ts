import Movie from "../models/Movie";
import MovieDAO from "./MovieDAO";
import database from "../database/database";
import Actor from "../models/Actor";

export default class LocalDbMovieDAO implements MovieDAO {
    insert(title: string, description: string, year: number, cast: Actor[] = []): Movie{
        const movie = new Movie(title, description, year, cast);
        database.push(movie);
        return movie;
    }
    getByTitle(title: string): Movie | undefined{
        return database.find((movie: Movie) => movie.title == title);
    }
}