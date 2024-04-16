import axios from 'axios'
import { localStorageItem } from '../constants/constant'
import { IpayLoadLogin, IuserInfo } from '../interfaces/login.interface'
import { API_URL } from '../constants/constant'

export const setUserInfoToLocalStorage = (user: IuserInfo) => {
  localStorage.setItem(localStorageItem.user, JSON.stringify(user))
}

export const getCurrentUser = () => {
  const user = localStorage.getItem(localStorageItem.user)
  return user ? JSON.parse(user) : null
}

export const setHeaderAxios = () => {
  const currentUser = getCurrentUser()
  const headers = {
    Authorization: `Bearer ${currentUser?.accessToken}`,
    'Content-Type': 'application/json'
  }
  return headers
}

export const setMultipartHeader = () => {
  const currentUser = getCurrentUser()
  const headers = {
    Authorization: `Bearer ${currentUser?.accessToken}`,
    'Content-Type': 'multipart/form-data'
  }
  return headers
}

export const login = async (payload: IpayLoadLogin) => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/login`, payload)
    setUserInfoToLocalStorage(res?.data?.data)
    return res?.data
  } catch (error: any) {
    return {
      message: error?.response?.data?.message
    }
  }
}

export const logOut = () => {
  localStorage.clear()
}
