import React from "react";
import { Table } from "react-bootstrap";

const TransactionHistory = ({ transactionHist }) => {
  return (
    <div className="margin-t">
      <h3>Transaction : </h3>
      <Table striped bordered hover variant="dark" className="margin-t">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Amount</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {transactionHist.map((trans) => {
              return(
                <tr>
                <td>{trans.timeStamp}</td>
                <td>{trans.amount}</td>
                <td>{trans.operation}</td>
              </tr>
              )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
