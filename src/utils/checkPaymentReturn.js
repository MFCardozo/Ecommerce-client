import { phoneDataApi } from "../apis/PhoneDataApi";

export const checkPaymentReturn = async (debtId) => {
  let PaymentStatus = "";
  if (!debtId) {
    PaymentStatus = "An unexpected error happens";
  }
  try {
    const response = await phoneDataApi.get(
      `/api/check-cart/check-debt-state.php/?debt-id=${debtId}`
    );
    console.log(response);

    //in case fail the checkout
    if (!response || response.data.error || !response.data.message) {
      PaymentStatus = "Unexpected error happens,try later";
    }
    PaymentStatus = response.data;
  } catch (error) {
    console.error(error);
  }
  return PaymentStatus;
};
