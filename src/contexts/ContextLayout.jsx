import { Outlet } from "react-router-dom";
import { BudgetContext, BudgetProvider } from "./BudgetContext";
import { UIContextProvider } from "./UIContext";

function ContextLayout() {
  return (
    <UIContextProvider>
      <BudgetProvider>
        <Outlet />
      </BudgetProvider>
    </UIContextProvider>
  );
}

export default ContextLayout;
