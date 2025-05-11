import React, { ReactNode } from "react";
import UiProvider from "./UiProvider";
import OrderProvider from "./OrderProvider";
import UserProvider from "./UserProvider";

function ContextProvider({ children }: { children: ReactNode }) {
  return (
<div className="w-full overflow-x-hidden">
      
    <UserProvider>
      <OrderProvider>
        <UiProvider>
         {children}
        </UiProvider>
      </OrderProvider>
    </UserProvider>
    </div>
  );
}

export default ContextProvider;
