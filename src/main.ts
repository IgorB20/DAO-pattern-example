import MovieDAO from "./DAO/MovieDAO";
import database from "./database/database";


export default function main(movieDAO: MovieDAO){
    movieDAO.insert("Star Wars Episode VI", "Best movie on the world", 1994);
    console.log(database);
    const movieSearch = movieDAO.getByTitle("Star Wars Episode I");
    console.log("resultado da pesquisa ===>");
    console.log(movieSearch);
}


