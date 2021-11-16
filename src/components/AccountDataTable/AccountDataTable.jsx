import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import ToggleButton from '../ToggleButton/ToggleButton.jsx'
import { accountData } from "../../dummyData/accountDummyData";
import "./AccountDataTable.css";

const AccountDataTable = () => {
  const [data, setData] = useState(accountData);
  const [toggled, setToggled] = useState(false)

  return (
    <TableContainer className="customerTable">
      <div className="invoicePart">
        <div className="toggleInvoice">
          <h3>Open Invoice</h3>
          <div  className="toggleBtn"><ToggleButton onChange={(e) => setToggled(e.target.checked)}/></div>
          <h3>Close Invoice</h3>
        </div>
        <div>
          <strong className="viewAll">View All</strong>
        </div>
      </div>
      <Table className="tableBorder">
        <TableHead className="tableHeading">
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Reference</TableCell>
            <TableCell className="tableCell">Source</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="tableRow">
              <TableCell className="tableCellName">{item.id}</TableCell>
              <TableCell className="tableCellName">{item.date}</TableCell>
              <TableCell className="tableCellName">{item.method}</TableCell>
              <TableCell className="tableCellName">{item.reference}</TableCell>
              <TableCell className="tableCellName">{item.source}</TableCell>
              <TableCell className="tableCellName">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountDataTable;
