import Movie from "../models/Movie";
import MovieDAO from "./MovieDAO";
import database from "../database/database";

export default class LocalDbMovieDAO implements MovieDAO {
    insert(title: string, description: string, year: number): Movie{
        const movie = new Movie(title, description, year);
        database.push(movie);
        return movie;
    }
    getByTitle(title: string): Movie | undefined{
        return database.find((movie: Movie) => movie.title == title);
    }
    // getByYear(year: number): Movie{

    // }
    // insertCast(cast: Actor[]): Movie{

    // }
}