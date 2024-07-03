import { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "../../contexts/UIContext";
import AppContent from "./AppContent";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SumaryDisplay from "./SumaryDisplay";
import BudgetUseage from "./BudgetUseage";
import Categories from "./Categories";
import ExpensesTable from "./ExpensesTable";
import Modal from "../../components/Modal";
import UpdateBudgetForm from "./UpdateBudgetForm";
import AddCategoryForm from "./AddCategoryForm";
import AddExpenseForm from "./AddExpenseForm";

function AppLayout() {
  const {
    updateBudgetOpen,
    addCategoryOpen,
    addExpenseOpen,
    isDark,
    setIsDark,
  } = useContext(UIContext);

  const isMounted = useRef(false);

  useEffect(
    function () {
      if (!isMounted.current) {
        const theme = localStorage.theme || "light";
        isMounted.current = true;

        setIsDark(() => theme === "dark");
      } else {
        if (isDark) {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
        }
      }
    },
    [isDark]
  );

  return (
    <div className="relative">
      {updateBudgetOpen && (
        <Modal>
          <UpdateBudgetForm />
        </Modal>
      )}
      {addCategoryOpen && (
        <Modal>
          <AddCategoryForm />
        </Modal>
      )}
      {addExpenseOpen && (
        <Modal>
          <AddExpenseForm />
        </Modal>
      )}
      <Header />
      <Sidebar />
      <AppContent>
        <SumaryDisplay />
        <BudgetUseage />
        <Categories />
        <ExpensesTable />
      </AppContent>
    </div>
  );
}

export default AppLayout;
