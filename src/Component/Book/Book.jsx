import "./Book.css";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
const Book = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      location: "",
      email: "",
      password: "",
      phonenumber: "",
    },
  });

  let [users, setUsers] = useState([]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setUsers([...users, data]);
  };

  const submissionCompleted = () => {
    swal({
      title: "Booking",
      text: "You have Booked your trip successfully",
      icon: "success",
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setTimeout(() => {
        submissionCompleted();
      }, 800);
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="book">
      <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Book Your Trip</h1>
          <label htmlFor="fullname">Full Name</label>
          <input
            className="form_Input"
            {...register("fullname", {
              required: "Full Name is required",
              pattern: {
                value: /^[a-zA-Z\ \s]*$/,
                message: "Full Name must have more than 2 characters",
              },
            })}
            type="text"
            placeholder="Full Name"
          />
          <p className="errorMsg">{errors.fullname?.message}</p>
          <label htmlFor="location">Location</label>
          <input
            className="form_Input"
            {...register("location", {
              required: "Location is required",
              pattern: {
                value: /^[a-zA-Z\ \s]*$/,
                message: "Location must have more than 2 characters",
              },
            })}
            type="text"
            placeholder="Location to visit"
          />
          <p className="errorMsg">{errors.location?.message}</p>
          <label htmlFor="email">Email</label>
          <input
            className="form_Input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please Enter a valid Email",
              },
            })}
            type="text"
            placeholder="Email"
          />
          <p className="errorMsg">{errors.email?.message}</p>
          <label htmlFor="password">Date</label>

          <input
            className="form_Input"
            {...register("password", {
              required: "Date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/,
                message: `Enter a Valid date in mm/dd/yy format`,
              },
            })}
            type="text"
            placeholder="mm/dd/yy"
          />
          <p className="errorMsg">{errors.password?.message}</p>
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            className="form_Input"
            {...register("phonenumber", {
              required: "Phone Number is required",
              pattern: {
                value: /[6-9][0-9]{9}$/,
                message: "Phone Number must be of 10 digits",
              },
            })}
            type="text"
            placeholder="Phone Number"
          />
          <p className="errorMsg">{errors.phonenumber?.message}</p>
          <button type="submit">Book Now</button>
        </form>
    </div>
  );
};

export default Book;
