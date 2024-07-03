import { useContext, useState } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";
import { UIContext } from "../../contexts/UIContext";

function AddCategoryForm() {
  const [newCategory, setNewCategory] = useState("");
  const [budgetAllocation, setBudgetAllocation] = useState("");
  const [error, setError] = useState("");

  const { categories, handleAddCategory } = useContext(BudgetContext);

  const { toggleAddCategoryOpen } = useContext(UIContext);
  return (
    <form
      className="max-w-[18rem] mx-auto p-2 flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (newCategory === "") {
          setError("Please enter valid category name");
          return;
        }
        const duplicate = categories.find(
          (cat) => cat.name.toLowerCase() === newCategory.toLowerCase()
        );
        if (duplicate) {
          setError("A category with the same name already exists");
          return;
        }
        const newCatObj = {
          name: newCategory,
          allocation: Number(budgetAllocation),
        };
        handleAddCategory(newCatObj);
        setNewCategory("");
        toggleAddCategoryOpen();
      }}
    >
      <div className="relative mb-4 flex flex-wrap items-stretch">
        {error && (
          <div className="w-full text-white bg-red-500 mb-2 text-sm	">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
              <div className="flex">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
                </svg>

                <p className="mx-3">{error}</p>
              </div>

              <button
                className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  setError("");
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <label
          htmlFor="category"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          Enter Category
        </label>
        <input
          type="text"
          className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          value={newCategory}
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
        />
        <label
          htmlFor="category"
          className="block text-sm text-gray-500 dark:text-gray-300 mt-4"
        >
          Enter Budget Allocation
        </label>
        <input
          type="number"
          className="block  mt-2 w-6/12 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          value={budgetAllocation}
          onChange={(e) => {
            setBudgetAllocation(e.target.value);
          }}
        />
        <div className="sm:flex sm:items-center mt-3 ">
          <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            Confirm
          </button>
          <button
            className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
            onClick={(e) => {
              e.preventDefault();
              toggleAddCategoryOpen();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddCategoryForm;
