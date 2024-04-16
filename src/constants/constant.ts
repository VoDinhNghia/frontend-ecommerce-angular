import * as dotenv from "dotenv";
dotenv.config();

export const routeList = {
  home: '',
  login: 'login',
  service: 'service',
  tutorial: 'tutorial',
  contact: 'contact',
};

export const localStorageItem = {
  user: 'user',
  cart: 'cart'
}

export const API_URL = process.env['BACKEND_URL']

export const userRoles = {
  SUPPER_ADMIN: "SUPPER_ADMIN",
  USER: "USER"
}
