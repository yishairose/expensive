import Chart from "./Chart";

function BudgetUseage({ expenses, categories }) {
  return (
    <div className="p-4 -span-2 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
            Budget Usage
          </h2>
          <Chart categories={categories} expenses={expenses} />
        </div>
      </div>
      {/* End Header */}
    </div>
  );
}

export default BudgetUseage;
