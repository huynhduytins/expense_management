import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "./../UI/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("year");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.items;

  if (filteredYear !== "year") {
    filteredExpenses = props.items.filter(
      (el) => el.date.getFullYear().toString() === filteredYear
    );
  }

  let expenseChart = <ExpenseChart expenses={filteredExpenses} />;

  if (filteredYear === "year") {
    expenseChart = "";
  }

  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseChart}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
