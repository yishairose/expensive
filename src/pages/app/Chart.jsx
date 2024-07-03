import { DonutChart, Legend } from "@tremor/react";
import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";

//Docs for chart - https://www.tremor.so/docs/visualizations/donut-chart

function Chart() {
  const { categories, expenses } = useContext(BudgetContext);
  const categoriesList = categories.map((cat) => {
    const totExpenses = expenses
      .filter((exp) => exp.category === cat.name)
      .reduce((a, b) => a + b.cost, 0);

    return { name: cat.name, totExpenses };
  });

  return (
    <>
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={categoriesList}
          category="totExpenses"
          index="name"
          colors={[
            "stone",
            "red",
            "orange",
            "zinc",
            "amber",
            "yellow",
            "lime",
            "green",
            "emerald",
            "teal",
            "cyan",
            "slate",
            "sky",
            "blue",
            "indigo",
            "violet",
            "gray",
            "purple",
            "fuchsia",
            "pink",
            "rose",
            "neutral",
          ]}
          className="w-40"
        />
        <Legend
          categories={categories.map((cat) => cat.name)}
          colors={[
            "stone",
            "red",
            "orange",
            "zinc",
            "amber",
            "yellow",
            "lime",
            "green",
            "emerald",
            "teal",
            "cyan",
            "slate",
            "sky",
            "blue",
            "indigo",
            "violet",
            "gray",
            "purple",
            "fuchsia",
            "pink",
            "rose",
            "neutral",
          ]}
          className="max-w-xs"
        />
      </div>
    </>
  );
}

export default Chart;
