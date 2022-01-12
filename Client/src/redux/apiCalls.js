import { publicRequest } from "../requestMethod";
import { loginSuccess, loginStart, loginFailure } from "./userRedux";

export { loginStart } from "./userRedux";

export const login = async ( dispatch , user ) => {
  dispatch(loginStart());
  try{
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  }catch(err){
    dispatch(loginFailure());
  }
}