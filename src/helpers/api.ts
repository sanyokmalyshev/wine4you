import { Product } from '../types/Product';
import axios from 'axios';

const API_URL
  = 'http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/';

export async function getPromotionsChampagne(): Promise<Product[]> {
  return axios.get(API_URL + 'promotions/champagnes')
    .then(response => response.data)
}

export async function getPromotionsWines(): Promise<Product[]> {
  return axios.get(API_URL + 'promotions/wines')
    .then(response => response.data)
}

export async function getWines(): Promise<Product[]> {
  return axios.get(API_URL + 'wines')
    .then(response => response.data)
}

export async function getWine(id: number): Promise<Product> {
  return axios.get(API_URL + 'wines/' + id)
    .then(response => response.data)
}