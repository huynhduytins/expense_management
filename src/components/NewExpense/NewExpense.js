import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const addExpenseHandler = () => {
    setIsEditing((prev) => {
      return !prev;
    });
  };

  let formEdit = <button onClick={addExpenseHandler}>Add New Expense</button>;

  if (isEditing) {
    formEdit = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={addExpenseHandler}
      />
    );
  }

  return <div className="new-expense">{formEdit}</div>;
};

export default NewExpense;
