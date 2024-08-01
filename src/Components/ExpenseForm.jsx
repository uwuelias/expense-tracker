import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { type, name, date, amount: parseFloat(amount) };
    addExpense(newExpense);
    setType("");
    setName("");
    setDate("");
    setAmount("");
  };

  return (
    <div className="input">
      <h3>Add A New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-pair">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option disabled value=""></option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>
          </div>
          <div className="input-pair">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-pair">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input-pair">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
