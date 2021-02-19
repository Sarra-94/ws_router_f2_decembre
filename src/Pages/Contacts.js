import React, { useState } from "react";
import ContactCard from "../Components/ContactCard/ContactCard";
import { contacts } from "../constants/data";
const Contacts = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {" "}
      {contacts.map((el) => (
        <ContactCard contact={el} key={el.id} />
      ))}
    </div>
  );
};

export default Contacts;
