export class Book{
    constructor(
        public book_id : number,
        public title:string,
        public author:string,
        public genre:string,
        public isAvailable: boolean,
        public quantity: number
    ){}
}