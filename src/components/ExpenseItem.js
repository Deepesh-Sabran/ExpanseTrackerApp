import React from "react";

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <span>{expense.name}</span>
      <span>₹{expense.amount.toFixed(2)}</span>
      <span>{expense.category}</span>
      <span>{new Date(expense.date).toLocaleDateString()}</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
