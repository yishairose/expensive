import { createContext, useState, children } from "react";
import { Outlet } from "react-router-dom";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);

  function handleUpdateBudget(budget) {
    setBudget(budget);
  }

  function handleAddCategory(categoryObj) {
    setCategories((cur) => [...cur, categoryObj]);
  }

  const totalExpense = expenses.reduce((a, b) => {
    return a + b.cost;
  }, 0);
  return (
    <BudgetContext.Provider
      value={{
        budget,
        expenses,
        setExpenses,
        totalExpense,
        categories,
        handleAddCategory,
        handleUpdateBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
export { BudgetContext, BudgetProvider };
