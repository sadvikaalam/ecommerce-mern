import { 
  deleteProductFailure, 
  deleteProductStart, 
  deleteProductSuccess, 
  getProductFailure, 
  getProductStart, 
  getProductSuccess } from "./productRedux";
import { userRequest, publicRequest } from "./requestMethod";
import { loginSuccess, loginStart, loginFailure } from "./userRedux";

export const login = async ( dispatch , user ) => { 
  dispatch(loginStart());
  try{
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  }catch(err){ 
    dispatch(loginFailure());
  }
}

export const getProducts = async ( dispatch ) => { 
  dispatch(getProductStart());
  try{
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  }catch(err){ 
    dispatch(getProductFailure());
  }
}

export const deleteProduct = async (id, dispatch ) => { 
  dispatch(deleteProductStart());
  try{
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  }catch(err){ 
    dispatch(deleteProductFailure());
  }
}