import { useContext, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/capitalise";
import { BudgetContext } from "../../contexts/BudgetContext";

function Categories() {
  const { budget, categories, expenses } = useContext(BudgetContext);
  return (
    <div className="p-4 -span-2 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700  ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
            Categories
          </h2>
        </div>
      </div>
      {/* End Header */}
      <div className="max-h-80 overflow-scroll rounded-lg">
        <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700 ">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Catagory
              </th>

              <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Category Budget
              </th>
              <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Total Expense
              </th>
              <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Useage
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {categories.map((cat, i) => {
              const totalExpense = expenses
                .filter((exp) => exp.category === cat.name)
                .reduce((a, b) => a + b.cost, 0);
              const progress = totalExpense / +cat.allocation;

              return (
                <tr key={i}>
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-800 dark:text-white">
                    {capitalizeFirstLetter(cat.name)}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-800 dark:text-white">
                    {cat.allocation}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-800 dark:text-white flex justify-center">
                    {totalExpense}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                      <div
                        style={{ width: `${progress * 100}%` }}
                        className={` bg-blue-500 h-1.5`}
                      ></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;
