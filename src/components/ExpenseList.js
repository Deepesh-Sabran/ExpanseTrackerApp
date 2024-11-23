import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, filter, deleteExpense }) => {
  const filteredExpenses = expenses.filter((expense) => {
    return filter.category === "All" || expense.category === filter.category;
  });

  return (
    <div className="expense_list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
