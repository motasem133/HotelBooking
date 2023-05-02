export class User {
  token : any
//     constructor(
//         public username: string,
//         public id: string,
//         private _token: any,
//         private _tokenExpirationDate:Date
//     ) { }

//     get token() {
//         if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
//             return null;
//         }

//         return this._token;
// }

 deserialize(input: any) {
        Object.assign(this, input);

        return this;
      }

}
