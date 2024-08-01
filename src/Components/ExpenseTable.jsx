import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseTable = ({ expenses }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
