import React, { useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { customerData } from "../../dummyData/dummyData";
import Popper from "@material-ui/core/Popper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Pagination from "@material-ui/lab/Pagination";
import { useNavigate } from "react-router-dom";
import "./CustomerDataTable.css";

const CustomerDataTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const navigate = useNavigate();
  const handleSingleCustomer = (id) => {
    navigate(`customerDetails/${id}`);
  };

  return (
    <TableContainer className="customerTable">
      <Table>
        <TableHead className="tableHeading">
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email ID</TableCell>
            <TableCell className="tableCell">Mobile No</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerData.map((item) => (
            <TableRow key={item.id} className="tableRow">
              <TableCell
                className="tableCellName"
                onClick={() => handleSingleCustomer(item.id)}
              >
                {item.id}
              </TableCell>
              <TableCell className="tableCellName">{item.name}</TableCell>
              <TableCell className="tableCellName">{item.email}</TableCell>
              <TableCell className="tableCellName">{item.mobile}</TableCell>
              <TableCell className="tableCellName">{item.address}</TableCell>
              <TableCell className="tableCellName">
                <MoreVertIcon className="actionIcon" onClick={handleClick} />
                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <div className="actionPopper">
                    <div className="actionButton">
                      <EditIcon className="actionIcons" />
                      <span>Edit</span>
                    </div>
                    <div className="actionButtonTwo">
                      <DeleteIcon className="actionIcons" />
                      <span>Delete</span>
                    </div>
                    <div></div>
                  </div>
                </Popper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pagination">
        <strong>Showing result 1 to 10 of 20 records</strong>
        <Pagination count="4" variant="outlined" shape="rounded" />
      </div>
    </TableContainer>
  );
};

export default CustomerDataTable;
