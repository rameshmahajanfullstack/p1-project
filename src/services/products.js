import request from './axiosConfig'

const { defaultRequest } = request

export const getProductsList = () => defaultRequest.get("/products")
