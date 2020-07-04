export class User{
  constructor(
      public _id: string,
      public name: string,
      public type: string = 'faculty',
      public designation: string,
      public qualification: string,
      public salary: number,
      public experience: number,
      public contact: number,
      public email: string,
      public password: string,
      public studClass: number,
      public division: string
  ){}
}
