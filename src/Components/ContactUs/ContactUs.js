import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import styled from "styled-components";
import colleges from "./colleges";

import { useState } from "react";
const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = {
      name: name,
      email: email,
      phone: phone,
      college: college,
      message: message,
    };
    console.log(data);
    fetch("https://nodebalancer.pratibhotsava.rocks/infosite/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json;
      })
      .then((json) => {
        console.log(json);
        alert("We Received Your Message.");
      });
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
    setMessage("");
  };
  return (
    <>
      <NavBar curPage="/contactus" />
      <div className="container ">
        <PageTitle title="Contact Us" />
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-5 mt-3">
            <div class="card text-start h-100">
              <div class="card-body">
                <h5 class="card-title fs-2 fw-bold mb-3 lightblue">
                  Feel free to contact us!
                </h5>
                <form
                  class="row g-3 needs-validation"
                  id="contact-us"
                  onSubmit={handleSubmit}
                >
                  <div class="col-12">
                    <label for="name" class="form-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      value={name}
                      pattern="[a-z A-Z]+"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      minLength={3}
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
                      value={email}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phone}
                      pattern="[0-9]{10}"
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div class="col-12">
                    <label for="validationCustom04" class="form-label">
                      College
                    </label>
                    <select
                      class="form-select"
                      id="college"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      required
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      {colleges.map((name) => {
                        return <option value={name}>{name}</option>;
                      })}
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
                      minLength={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention your query!"
                      required
                    />
                  </div>
                  <div class="col-12 mt-5">
                    <LoginButton type="submit">
                      <span>Submit</span>
                    </LoginButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 mt-3">
            <div class="card text-start h-100">
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
                            href="mailto:prathibhotsava@bmsce.ac.in"
                            className="text-decoration-none"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            prathibhotsava@bmsce.ac.in
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
                            href=""
                            className="text-decoration-none"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            +91 92421 87131 / +91 94484 29283
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
                          P.O. Box No.: 1908, Bull Temple Road, Bangalore - 560
                          019
                          <br /> Karnataka, India.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <iframe
                          className="maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4814120554875!2d77.56333711451869!3d12.941017419050835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1653465729053!5m2!1sen!2sin"
                          allowfullscreen=""
                          title="BMS College of Engineering"
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
