import React from "react";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Avatar from "@material-ui/core/Avatar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { customerData } from "../../dummyData/dummyData";
import FormTab from '../../components/FormTab/FormTab.jsx'
import "./CustomerDetails.css";

const CustomerDetails = () => {
  const { customerId } = useParams();
  console.log(customerId);
  const customer = customerData.find(
    (customer) => customer.id === Number(customerId)
  );
  console.log(customer);
  const { id, name, date, totalAmount, remaining } = customer;
  return (
    <div className="customerDetails">
      <Grid container spacing={4}>
        <Grid item md={4} className="detailsLeft">
          <div className="customerDetailsHeading">
            <Link to="/">
              <ArrowBackIosIcon className="titleIcon" />
            </Link>
            <h2>Customer</h2>
          </div>
          <div className="customerContact">
            <Grid container spacing={6}>
              <Grid item md={2}>
                <Avatar className="customerAvatar">MD</Avatar>
              </Grid>
              <Grid item md={9} className="customerContactDetails">
                <div>
                  <h3>{name}</h3>
                  <small>{`CUST - ${id}`}</small>
                </div>
                <div className="contactList">
                  <div className="contact">
                    <PhoneIcon className="contactIcon" />
                    <h4>Call</h4>
                  </div>
                  <div className="contact mailContact">
                    <MailOutlineIcon className="contactIcon" />
                    <h4>Email</h4>
                  </div>
                  <div className="contact">
                    <ChatBubbleOutlineIcon className="contactIcon" />
                    <h4>Notes</h4>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="profileDetails">
            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                align="left"
                id="panel1a-header"
              >
                <div className="AccordionTitle">
                  <ExpandMoreIcon className="accordionIcon" />
                  <h3>Profile Detail</h3>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div className="accordionDetails">
                    <strong className="name">Owner</strong>
                    <h5 className="title">{name}</h5>
                  </div>
                  <div>
                    <strong className="name">Create Date</strong>
                    <h5 className="title">{date}</h5>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item md={8} className="right">
          <div className="customerDetailsRight">
            <div className="customerActionButtons">
              <button className="addCustomerBtn">
                <AddIcon className="customerIcon" /> Create New
              </button>
              <button className="actionBTN">
                Action
                <ExpandMoreIcon className="actionBTNIcon" />
              </button>
            </div>
            <div className="transaction">
              <h3 className="amount">Total Amount: <strong> {totalAmount}</strong></h3>
              <h3 className="amount">Remaining: <strong> {remaining}</strong></h3>
            </div>
          </div>
          <div className="multiTabs">
            <FormTab />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerDetails;
