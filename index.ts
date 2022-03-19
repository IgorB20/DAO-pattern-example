
import LocalDbMovieDAO from "./src/DAO/LocalDbMovieDAO";
import main from "./src/main";


const localDbMovieDAO = new LocalDbMovieDAO();


main(localDbMovieDAO);

