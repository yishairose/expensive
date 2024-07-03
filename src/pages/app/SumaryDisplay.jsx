import { Card, Metric, Text } from "@tremor/react";
import { useContext, useState } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";

function SumaryDisplay() {
  const { budget, totalExpense } = useContext(BudgetContext);

  return (
    <>
      {/* Grid */}
      <div className="col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="indigo"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Budget
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {budget}
          </p>
        </Card>
        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="red"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Expenses
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {totalExpense}
          </p>
        </Card>
        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="yellow"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Ballance
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {budget - totalExpense}
          </p>
        </Card>
      </div>
      {/* End Grid */}
    </>
  );
}

export default SumaryDisplay;
