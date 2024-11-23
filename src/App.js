import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import FilterExpenses from "./components/FilterExpense";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Chart from "./components/Chart";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [filter, setFilter] = useState({ category: "All" });

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="header">
        <h1>Expense Tracker</h1>
        <p>Manage your expenses effectively</p>
      </div>
      <div className="main-container">
        <div className="form-container">
          <AddExpense addExpense={addExpense} />
          <ExpenseList
            expenses={expenses}
            filter={filter}
            deleteExpense={deleteExpense}
          />
        </div>
        <div className="chart-container">
          <FilterExpenses setFilter={setFilter} />
          <Chart expenses={expenses} />
        </div>
      </div>
    </>
  );
};

export default App;
