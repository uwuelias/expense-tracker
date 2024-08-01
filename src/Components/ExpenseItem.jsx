import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <tr className="item">
      <td>{expense.type}</td>
      <td>{expense.name}</td>
      <td>{expense.date}</td>
      <td>${expense.amount.toFixed(2)}</td>
    </tr>
  );
};

export default ExpenseItem;
