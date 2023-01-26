import { Product } from '../types/Product';
import axios from 'axios';
import { FinalPostData } from 'types/finalPostData';

const API_URL
  = 'http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/';

export async function getPromotionsChampagne (): Promise<Product[]> {
  return await axios.get(API_URL + 'promotions/champagnes')
    .then(response => response.data);
}

export async function getPromotionsWines (): Promise<Product[]> {
  return await axios.get(API_URL + 'promotions/wines')
    .then(response => response.data);
}

export async function getWines (): Promise<Product[]> {
  return await axios.get(API_URL + 'wines')
    .then(response => response.data);
}

export async function getWine (id: number): Promise<Product> {
  return await axios.get(`${API_URL}wines/${id}`)
    .then(response => response.data);
}

export async function auth () {
  return await axios.post(`${API_URL}auth/sign-in`, {
    phoneOrEmail: '7860@gmail.com',
    password: '147147147'
  })
    .then(response => response.data);
}

export async function sendCart (data: FinalPostData, token: string) {
  return await axios.post(`${API_URL}carts`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.data);
}
