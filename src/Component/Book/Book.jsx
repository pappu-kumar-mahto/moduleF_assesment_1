import React from "react";
import "./Book.css";
import SignUpForm from './BookingSignup'
const Book = () => {
  return (
    <div className="book">
      <div className="bookingForm">
        <SignUpForm/>
      </div>
    </div>
  );
};

export default Book;
