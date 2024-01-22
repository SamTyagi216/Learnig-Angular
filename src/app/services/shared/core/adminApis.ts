import { constant } from "./constant";

export class adminApis{  
  public static loginUrl = constant.baseUrl + 'users/loginUser';   
  public static addCounselURL = constant.baseUrl + 'counsel/createCounsel';
  public static manageCounselURL = constant.baseUrl + 'users/fetchUsers';

  public static createOrder = constant.baseUrl + "payment/paymentDetails/createOrder"
  public static fetchCounselPaymentDetails = constant.baseUrl + "payment/paymentDetails/fetchCounselPaymentDetails"
  public static capturePaymentDetails = constant.baseUrl + "payment/paymentDetails/capturePaymentDetails"
  public static fetchPaymentOptions = constant.baseUrl + "payment/paymentOptions/fetchPaymentOptions"
}