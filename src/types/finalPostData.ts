import { CartItem } from './CartItem';

export interface FinalPostData {
  cart: {
    products: CartItem[];
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
