import Actor from "../models/Actor";
import Movie from "../models/Movie";


export default interface MovieDAO{
    insert(title: string, description: string, year: number, cast?: Actor[]): Movie;
    getByTitle(title: string): Movie | undefined;
}