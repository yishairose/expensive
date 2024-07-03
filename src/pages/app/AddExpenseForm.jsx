import { useContext, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/capitalise";
import { BudgetContext } from "../../contexts/BudgetContext";
import { UIContext } from "../../contexts/UIContext";

function AddExpenseForm() {
  //   AddExpenseForm.propTypes = {
  //     expenses: PropTypes.array,
  //   };

  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("general");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  function createExpense() {
    const newExpense = {
      cost,
      description,
      date,
      category,
      notes,
    };
    if (!cost || !description || !date) {
      setError("Please fill in all fields!");
      return;
    }
    setExpenses([...expenses, newExpense]);
    toggleAddExpenseOpen();
  }
  function resetForm() {
    setCost("");
    setDescription("");
    setDate("");
    setCategory("general");
    setNotes("");
  }
  const { setExpenses, expenses, categories } = useContext(BudgetContext);
  const { toggleAddExpenseOpen } = useContext(UIContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createExpense();
        resetForm();
        toggleAddExpenseOpen();
      }}
      className="space-y-4"
    >
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div>
        <label className="sr-only" htmlFor="description">
          Description
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Description"
          type="text"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="date">
            Date
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Date"
            type="date"
            id="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="cost">
            Cost
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Cost"
            type="number"
            id="cost"
            value={cost}
            onChange={(e) => {
              setCost(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option defaultValue={"general"}>Choose a catageory</option>
        {categories.map((cat, i) => {
          return (
            <option value={cat.name}> {capitalizeFirstLetter(cat.name)}</option>
          );
        })}
      </select>

      <div>
        <label className="sr-only" htmlFor="message">
          Notes
        </label>

        <textarea
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Notes"
          rows="3"
          id="notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
      </div>

      <div className="sm:flex sm:items-center mt-3 ">
        <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
          Confirm
        </button>
        <button
          className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
          onClick={(e) => {
            e.preventDefault();
            toggleAddExpenseOpen();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddExpenseForm;
