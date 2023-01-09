export interface FinalPostData {
  cart: {
    products: {
      id: string,
      quantity: number,
      product: {
        id : number,
        brand : string,
        country : string,
        price : number,
        title : string,
        inStock : boolean,
        name : string,
        wineStyleName: string,
        wineTypeName: string,
        wineTasteName: string,
        eventName: string,
        capacity : number,
        imageIds : string[],
        description : string
      },
    }[];
    deliveryPrice: number,
    discount: number,
    totalPrice: number,
    totalAmount: number,
  },
  data: {
    name: string,
    lastName: string,
    phoneNumber: number,
    email: string,
    dontCallMeBack: boolean,
    buyAsGift: boolean,
    shipping: string,
    payment: string,
    comment: string,
    address: {
      courierAddress?: {
        city: string,
        street: string,
        house: string,
      },
      postalOffice?: string,
      wine4youShop?: string,
    },
  }
}