import Actor from "./Actor";


export default class Movie{
    public title: string;
    public description: string;
    public year: number;
    public cast?: Actor[];

    constructor(title: string, description:string, year: number, cast: Actor[] = []){
        this.title = title;
        this.description = description;
        this.year = year;
        this.cast = cast;
    }
}