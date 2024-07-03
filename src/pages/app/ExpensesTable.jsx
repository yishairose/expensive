import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";
import { UIContext } from "../../contexts/UIContext";

function ExpensesTable() {
  const { expenses } = useContext(BudgetContext);
  const { toggleAddExpenseOpen } = useContext(UIContext);
  return (
    <div className="flex flex-col col-span-2">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
            {/* Header */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                  Recent Expenses
                </h2>
              </div>
              <div>
                <div className="inline-flex gap-x-2">
                  <button
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAddExpenseOpen();
                    }}
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Add expense
                  </button>
                </div>
              </div>
            </div>
            {/* End Header */}
            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-800">
                <tr>
                  <th scope="col" className="ps-6 py-3 text-start"></th>
                  <th
                    scope="col"
                    className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                  >
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Cost
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Description
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Category
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Date
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-end" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {expenses.map((exp) => {
                  return (
                    <tr key={exp}>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 py-3"></div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                {exp.cost}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="h-px w-72 whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            {exp.description}
                          </span>
                          <span className="block text-sm text-gray-500 dark:text-neutral-500">
                            {exp.notes}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                            {exp.category}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500 dark:text-neutral-500">
                            {exp.date}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-1.5">
                          <button
                            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                            href="#"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* End Table */}
            {/* Footer */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  <span className="font-semibold text-gray-800 dark:text-neutral-200">
                    1
                  </span>{" "}
                  expense
                </p>
              </div>
              <div>
                <div className="inline-flex gap-x-2">
                  <button
                    type="button"
                    className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Prev
                  </button>
                  <button
                    type="button"
                    className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    Next
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesTable;
