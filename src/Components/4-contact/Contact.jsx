import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import ReactiveButton from "reactive-button";
import Lottie from "lottie-react";
import doneAnimation from "../../Animation/done.json";
import contactAnimation from "../../Animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrbbbkze");
  const [loaderButton, setLoaderButton] = useState("idle");
  const [errors, setErrors] = useState({ email: false, message: false });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById("mail").value;
    const message = document.getElementById("message").value;
    if (!email || !message) {
      setErrors({
        email: !email,
        message: !message,
      });
      return;
    }
    setLoaderButton("loading");
    setTimeout(() => {
      setLoaderButton("success");
    }, 2000);
    handleSubmit(e);
  };

  return (
    <section className="contact-us">
      <h1 className="title flex">
        <span className="icon-mail">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
        </span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={onSubmitHandler}>
          <div>
            <div className="flex">
              <label htmlFor="mail">Email Address:</label>
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Email Address"
                autoComplete="off"
                className={errors.email ? "error" : ""}
              />
            </div>
            {errors.email && (
              <span className="error-message">
                This field is required !
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </span>
            )}
          </div>
          <div>
            <div className="flex" style={{ marginTop: "1.6rem" }}>
              <label htmlFor="message">Your message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className={errors.message ? "error" : ""}
              />
            </div>
            {errors.message && (
              <span className="error-message">
                This field is required !
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </span>
            )}
          </div>
          <ReactiveButton
            style={{ margin: "1.6rem 0" }}
            type="submit"
            disabled={state.submitting}
            buttonState={loaderButton}
            idleText="Submit"
            loadingText="Loading"
            successText="Done"
            color="teal"
          />
          {state.succeeded && (
            <h3 className="success-message flex">
              <Lottie
                loop={false}
                style={{ height: 60, width: 60 }}
                animationData={doneAnimation}
              />
              Messgae Send Successfully
            </h3>
          )}
        </form>
        <div className="animation">
          <Lottie animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
