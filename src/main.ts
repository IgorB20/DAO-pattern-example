import MovieDAO from "./DAO/MovieDAO";
import database from "./database/database";
import Actor from "./models/Actor";


export default function main(movieDAO: MovieDAO){
    const cast: Actor[] = [];

    cast.push(new Actor("Mark Hamill", "M"));
    cast.push(new Actor("Carrie Fisher", "F"));

    movieDAO.insert(
        "Star Wars Episode VI",
        "Luke Skywalker e seus amigos viajam para Tatooine e salvam seu amigo Han Solo do lorde do crime Jabba o Hutt.",
        1983,
        cast
    );

    console.log(database);  
    console.log(database[0].cast);
    // const movieSearch = movieDAO.getByTitle("Star Wars Episode I");
    // console.log("resultado da pesquisa ===>");
    // console.log(movieSearch);
}


