export type ProductData = {
  id: number,
  quantity: number,
};

export interface FinalPostData {
  itemRequestDtos: ProductData[],
  deliveryPrice: number,
  discount: number,
  totalPrice: number,
  totalAmount: number,
  email: string,
  shipping: string,
  payment: string,
  dontCallMeBack: boolean,
  buyAsGift: boolean,
  addressRequestDto: { city: string, street: string, apartment: string },
  postalOffice: string,
  wine4youShop: string
}
