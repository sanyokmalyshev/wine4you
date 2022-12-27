export type Product = {
  id : number,
  brand : string,
  country : string,
  price : number,
  title : string,
  inStock : boolean,
  name : string,
  wineStyle : {
    id : number,
    nameStyle : string
  },
  wineType : string,
  wineTaste : {
    id : number,
    nameTaste : string
  },
  event : {
    id : number,
    nameEvent : string
  },
  capacity : number,
  images : string[],
  description : string
}