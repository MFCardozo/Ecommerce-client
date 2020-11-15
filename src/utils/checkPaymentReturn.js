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

    //in case fail the checkout
    if (!response) {
      PaymentStatus = "Unexpected error happens,try later";
    }
    PaymentStatus = response.data;
  } catch (error) {
    console.error(error);
  }
  return PaymentStatus;
};
