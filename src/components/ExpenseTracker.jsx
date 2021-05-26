import React, { useState } from "react";
// react-bootstrap library import
import { Button } from "react-bootstrap";
// component import
import TransactionHistory from "./TransactionHistory";

const ExpenseTracker = () => {
  /**state to manage inputValue and balance */
  const [inputValue, setInputValue] = useState();
  const [balance, setBalance] = useState(0);
  /**state to hold transaction history and manage transaction table*/
  const [transactionHist, setTransactionHist] = useState([]);
  const [showTransactionHistoryTable, setShowTransactionHistoryTable] = useState(false);
  /**state to manage empty field validation error */
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  /**add and remove handler */
  const handleOperations = (operationName) => {
      console.log('inputValue', inputValue)
      if(inputValue === undefined ||  inputValue === ''){
          setShowEmptyFieldError(true);
          return false;
      }
      setShowEmptyFieldError(false);
    (operationName === "Add")
      ? setBalance(parseInt(balance) + parseInt(inputValue))
      : setBalance(balance - inputValue);
    let expenseArray = [...transactionHist];
    expenseArray.push({
      timeStamp: new Date().toISOString(),
      amount: inputValue,
      operation: operationName,
    });
    setTransactionHist(expenseArray);
    setShowTransactionHistoryTable(true);
  };

  return (
    <div className="col-md-6 offset-3 margin-t">
    <div className="card">
      <h5 className="margin-tb text-center">Balance : {balance} </h5>
      <div className="margin-auto">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="number"
        className="form-control"
        placeholder="Enter expense..."
      />
      <div className="validation-alert">
      {showEmptyFieldError && "Please enter expense Value"}
      </div>
      </div>
      <div className="margin-tb text-center">
        <Button variant="primary" onClick={() => handleOperations("Add")}>
          Add
        </Button>&nbsp;&nbsp;
        <Button variant="primary" onClick={() => handleOperations("Remove")}>
          Remove
        </Button>
      </div>
      </div>
      {showTransactionHistoryTable && <TransactionHistory transactionHist={transactionHist} />}
    </div>
  );
};

export default ExpenseTracker;
