import { useContext, useState } from "react";
import SidebarBtn from "./SidebarBtn";
import { UIContext } from "../../contexts/UIContext";

function Sidebar() {
  const {
    toggleUpdateBudgetOpen,
    toggleAddCategoryOpen,
    toggleAddExpenseOpen,
  } = useContext(UIContext);
  return (
    <div
      id="application-sidebar"
      className="w-[260px]
fixed inset-y-0 start-0 z-[60]
bg-white border-e border-gray-200
lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
dark:bg-neutral-800 dark:border-neutral-700
"
    >
      <div className="px-8 pt-4">
        {/* Logo */}
        <a
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 dark:text-slate-100"
          href="../templates/admin/index.html"
          aria-label="Expensive"
        >
          <h1>Expensive</h1>
        </a>
        {/* End Logo */}
      </div>
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open=""
      >
        <ul className="space-y-1.5">
          <SidebarBtn onClick={toggleUpdateBudgetOpen}>
            Update Budget
          </SidebarBtn>
          <SidebarBtn onClick={toggleAddCategoryOpen}>Add Category</SidebarBtn>

          <SidebarBtn onClick={toggleAddExpenseOpen}>Add Expense</SidebarBtn>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
