import OrderSummary from "@/components/checkout/order-summary";
import Steps from "@/components/checkout/steps";
import { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <div className="w-full relative">
        <Steps />
        
      </div>
      <div className="py-[20px] flex justify-between container-fluid sm:flex-col-reverse">
        {children}
        <OrderSummary/>
        </div>
    </Fragment>
  );
};

export default layout;
