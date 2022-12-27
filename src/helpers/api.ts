import { Product } from '../types/Product';
import axios from 'axios';

const API_URL
  = 'https://wine4you.herokuapp.com/api/v1/';

export async function getPromotionsChampagne(): Promise<Product[]> {
  return axios.get(API_URL + 'promotions/champagnes')
    .then(response => response.data)
}

export async function getPromotionsWines(): Promise<Product[]> {
  return axios.get(API_URL + 'promotions/wines')
    .then(response => response.data)
}
