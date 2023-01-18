export type Inputs = {
  name: string,
  lastName: string,
  phoneNumber: number,
  email: string,
  dontCallMeBack: boolean,
  buyAsGift: boolean,
  shipping: string,
  payment: string,
  comment: string,
  addressRequestDto: {
    city: string,
    street: string,
    apartment: string,
  },
  postalOffice: string,
  wine4youShop: string,
};
