import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [error, setError] = useState('');
  const totalExpenses = expenses.reduce((total, item) => total += item.cost, 0);
  const minimumSpending = 0; // Define minimum spending threshold
  const max = 20000;
  const handleBudgetChange = (event) => {
    const value = event.target.value;
    if (!/^\d+$/.test(value)) {
      setError('Please enter a valid number.');
      return;
    }

    const parsedValue = parseInt(value);

    if (parsedValue > max) {
        alert(`Budget cannot exceed ${max}`);
        return;}


    if (parsedValue < minimumSpending + totalExpenses) {
      alert(`Budget cannot be less than £${minimumSpending + totalExpenses} due to minimum spending requirement.`);
      return;
    }

    setNewBudget(parsedValue);
    setError('');
  };

  return (
    <div className='alert alert-secondary'>
      {newBudget && <span>Budget: £{newBudget}</span>}
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
      {error && <span className='text-danger'>{error}</span>}
    </div>
  );
};

export default Budget;
