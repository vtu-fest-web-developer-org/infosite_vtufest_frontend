import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import styled from "styled-components";

import { useState } from "react";
const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      city,
      state,
      message,
    });

    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setState("");
    setMessage("");
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
                <div class="card text-start">
                  <div class="card-body">
                    <h5 class="card-title fs-2 fw-bold mb-3 lightblue">
                      Feel free to contact us!
                    </h5>
                    <form class="row g-3 needs-validation">
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Full name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          value={email}
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
                          onChange={(e) => setPhone(e.target.value)}
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
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
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
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">
                            Dadar and Nagar Haveli
                          </option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
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
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Mention your query!"
                          required
                        />
                      </div>
                      <div class="col-12 mt-5">
                        <LoginButton onClick={handleSubmit}>
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
                                rel="noreferrer"
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
                                rel="noreferrer"
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
