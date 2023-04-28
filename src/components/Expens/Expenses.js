import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}
export default Expenses;
