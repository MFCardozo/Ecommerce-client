import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { checkPaymentReturn } from "../../utils/checkPaymentReturn";
import { PageLoader } from "../baseComponents/Loader.js";
export default function PayReturn() {
  //We get the query params to page payment
  const debtId = new URLSearchParams(useLocation().search).get("doc_id");

  const [paymentState, setPaymentState] = useState("");

  //depens on wheter its already pay, base on the debtId we show the title in page

  useEffect(() => {
    const responseHandler = async () => {
      const responseState = await checkPaymentReturn(debtId);

      setPaymentState(responseState);
    };
    responseHandler();
  }, [debtId]);

  return (
    <div className="container mt-5">
      {paymentState === "" ? (
        <PageLoader />
      ) : (
        <div className="row">
          <div className="mt-2 col-10 mx-auto text-center text-title">
            <h1>{paymentState}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
