import { children, createContext, useState } from "react";
import { BudgetProvider } from "./BudgetContext";

const UIContext = createContext();

function UIContextProvider({ children }) {
  const [updateBudgetOpen, setUpdateBudgetOpen] = useState(false);
  const [addCategoryOpen, setAddCategoryOpen] = useState(false);
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  function toggleUpdateBudgetOpen() {
    setUpdateBudgetOpen((cur) => !cur);
  }
  function toggleAddCategoryOpen() {
    setAddCategoryOpen((cur) => !cur);
  }
  function toggleAddExpenseOpen() {
    setAddExpenseOpen((cur) => !cur);
  }

  return (
    <UIContext.Provider
      value={{
        updateBudgetOpen,
        addCategoryOpen,
        addExpenseOpen,
        toggleAddCategoryOpen,
        toggleAddExpenseOpen,
        toggleUpdateBudgetOpen,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export { UIContextProvider, UIContext };
