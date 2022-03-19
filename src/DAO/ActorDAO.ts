import Actor from "../models/Actor";


export default interface ActorDAO{
    insert(name: String, gender: String, birthdate: String): Actor;
    getByName(name: String): Actor;
}