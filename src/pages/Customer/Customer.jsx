import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddIcon from '@material-ui/icons/Add';

import "./Customer.css";
import CustomerDataTable from "../../components/CustomerDataTable/CustomerDataTable";

const Customer = () => {
  return (
    <div className="customer">
      <div className="customerHeading">
        <h2>Customer</h2>
        <div className="customerActions">
          <button className="filterBtn">
            {" "}
            <FilterListIcon className="customerIcon"/> Filter
          </button>
          <button> <AddIcon className="customerIcon" /> Import</button>
          <button className="exportBtn">Export</button>
          <button className="addCustomerBtn"><AddIcon className="customerIcon" /> Add Customer</button>
        </div>
      </div>
      <div className="customerDataTable">
          <CustomerDataTable />
      </div>
    </div>
  );
};

export default Customer;
