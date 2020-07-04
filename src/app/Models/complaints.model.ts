export class Complaint{
    constructor(
      public _id: string,
      public date: string,
      public content: string,
      public complainerName: string,
      public complainerEmail: string){}
}
