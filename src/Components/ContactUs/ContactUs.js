import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
const ContactUs = (props) => {
  const fullNameRef = useRef("");
  const emailRef = useRef("");
  const phoneNoRef = useRef("");
  const messageRef = useRef("");
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    console.log({
      name: fullNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneNoRef.current.value,
      message: messageRef.current.value,
    });
  };
  return (
    <>
      <NavBar curPage="/contactus" />
      <div className="container ">
        <PageTitle title="Contact Us" />
        <div className="row mt-5">
          <div className="col-lg-6 mt-2 mb-3">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title fs-2 fw-bold mb-3 lightblue">
                      Feel free to contact us!
                    </h5>
                    <form class="row g-3 text-start">
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Full name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div class="col-12">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div class="col-12">
                        <label for="tel" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          class="form-control"
                          id="tel"
                          placeholder="9999999999"
                          required
                        />
                      </div>
                      <div class="col-6">
                        <label for="validationCustom03" class="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustom03"
                          placeholder="Bengaluru"
                          required
                        />
                      </div>
                      <div class="col-6">
                        <label for="validationCustom04" class="form-label">
                          State
                        </label>
                        <select
                          class="form-select"
                          id="validationCustom04"
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option>...</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid state.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="message" class="form-label">
                          Message
                        </label>
                        <textarea
                          type="message"
                          class="form-control"
                          id="message"
                          placeholder="Mention your query!"
                          required
                        />
                      </div>
                      <div class="col-12 mt-5">
                        <LoginButton onClick={handleMessageSubmit}>
                          <span>Submit</span>
                        </LoginButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-2 mb-3">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div class="card text-start">
                  <div class="card-body">
                    <h5 class="card-title fs-2 fw-bold mb-3 lightblue">
                      B.M.S. College of Engineering
                    </h5>
                    <div class="row g-3">
                      <div class="col-12">
                        <div className="row">
                          <div className="col-4 col-sm-2">
                            <p>Email:</p>
                          </div>
                          <div className="col-8 col-sm-10">
                            <p className="text-decoration-none">
                              <a
                                href="mailto:info@bmsce.ac.in"
                                className="text-decoration-none"
                                target={"_blank"}
                              >
                                info@bmsce.ac.in
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 col-sm-2">
                            <p>Phone:</p>
                          </div>
                          <div className="col-8 col-sm-10">
                            <p className="text-decoration-none">
                              <a
                                href="tel:+91-80-26614357"
                                className="text-decoration-none"
                                target={"_blank"}
                              >
                                +91-80-26614357
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 col-sm-2">
                            <p>Address:</p>
                          </div>
                          <div className="col-7">
                            <p className="text-decoration-none">
                              P.O. Box No.: 1908, Bull Temple Road, Bangalore -
                              560 019
                              <br /> Karnataka, India.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4814120554875!2d77.56333711451869!3d12.941017419050835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1653465729053!5m2!1sen!2sin"
                              allowfullscreen=""
                              width="100%"
                              height="350px"
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const LoginButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 8px;
  border: solid;
  border-width: 1px;
  border-color: #3469ff;
  background-color: #3469ff;
  border-radius: 10px;
  span {
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
  }
  &:hover {
    background-color: #eff2fb;
    border-color: #3469ff;
    span {
      color: #1c2c9b;
    }
  }
`;
export default ContactUs;
