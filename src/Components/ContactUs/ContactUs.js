import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import styled from "styled-components";

import { useState } from "react";
const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");

  const COLLEGES = [
    "Bangalore Institute of Technology, Bangalore",
    "Dayananda Sagar Academy of Technology and Management, Bangalore",
    "Sir M. Viveswaraya Institute of Technology, Bangalore",
    "J.S.S. Academy of Technical Education, Bangalore",
    "C.M.R. Institute of Technology, Bangalore",
    "Acharya Institute of Technology, Bangalore",
    "New Horizon College of Engineering, Bangalore",
    "M.V. Jayaram College of Engineering, Bangalore",
    "SJB Institute of Technology, Bangalore",
    "R.N.S. Institute of Technology, Bangalore",
    "Sri Sairam College of Engineering, Bangalore",
    "Sri Venkateshwara College of Engineering, Bangalore",
    "The Oxford College of Engineering, Bangalore",
    "Vivekananda Institute of Technology, Bangalore",
    "B.T.L. Institute of Technology and Management, Bangalore",
    "Sri Revana Siddeshwara Institute of Technology, Bangalore",
    "B.N.M. Institute of Technology, Bangalore",
    "Sapthagiri College of Engineering, Bangalore",
    "Sai Vidya Institute of Technology, Bangalore",
    "Reva Institute of Technology and Management, Bangalore",
    "City Engineering College, Bangalore",
    "Kammavari Sangha Institute of Technology, Bangalore",
    "HKBK College of Engineering, Bangalore",
    "Bheemanna Khandre Institute of Technology, Bhalki",
    "Adichunchanagiri Institute of Technology, Chikmagalur",
    "Shri pillappa college of engineering Bangalore",
    "Vemana Institute of Technology, Bangalore",
    "AMC Institutions, Bangalore",
    "East Point College of Engineering and Technology, Bangalore",
    "Atria Institute of Technology, Bangalore",
    "K.N.S. Institute of Technology, Bangalore",
    "Don Bosco Institute of Technology, Bangalore",
    "Global Academy of Technology, Bangalore",
    "East West Institute of Technology, Bangalore",
    "Yellamma Dasappa Institute of Technology, Bangalore",
    "Sri Krishna Institute of Technology, Bangalore",
    "Sambhram Institute of Technology, Bangalore",
    "Sri Jagadguru Chandrasekaranathaswamiji Institute of Technology, Chickballapur",
    "Alpha College of Engineering, Bangalore",
    "A.P.S. College of Engineering, Bangalore",
    "Cambridge Institute of Technology, Bangalore",
    "Jnanavikasa Institute of Technology, Bangalore",
    "Amrutha Institute of Engineering and Management, Bangalore",
    "East Point College of Engineering for Women, Bangalore",
    "Brindavan College of Engineering, Bangalore",
    "R.R. Institute of Technology, Bangalore",
    "Islamia Institute of Technology, Bangalore",
    "ADARSHA Institute of Technology, Bangalore",
    "Bangalore College of Engineering and Technology, Bangalore",
    "Dr. Sri Sri Sri Shivakumara Mahaswamiji College of Engineering, Bangalore",
    "P.N.S. Women's Institute of Technology, Bangalore",
    "A.C.S. College of Engineering, Bangalore",
    "Vijaya Vittala Institute of Technology, Bangalore",
    "Gopalan College of Engineering and Management, Bangalore",
    "S.C.T. Institute of Technology, Bangalore",
    "Rajiv Gandhi Institute of Technology, Bangalore",
    "M.S. Engineering College, Bangalore",
    "Basava Academy of Engineering, Bangalore",
    "Nadgir Institute of Engineering and Technology, Bangalore",
    "Impact College of Engineering and Applied Sciences, Bangalore",
    "GSS Institute of Technology, Bangalore",
    "RajaRajeswari College of Engineering, Bangalore",
    "T John Institute of Technology, Bangalore",
    "Auden Technology and Management Academy, Bangalore",
    "S.E.A. College of Engineering and Technology, Bangalore",
    "K.L.E. Institute of Technology, Hubballi",
    "A.G.M. Rural Engineering College, Hubli",
    "H.M.S. Institute of Technology, Tumkur",
    "Shridevi Institute of Engineering and Technology, Tumkur",
    "Akshaya Institute of Technology, Tumkur",
    "Ghousia College of Engineering, Ramnagar",
    "S.J.C. Institute of Technology, Chickballapur",
    "Sha-shib College of Engineering, Chikballapur",
    "R.L. Jalappa Institute of Technology, Doddballapur",
    "Dr. T. Thimmaiah Institute of Technology, Kolar Gold Fields",
    "C. Byre Gowda Institute of Technology, Kolar",
    "Kalpatharu Institute of Technology, Tiptur",
    "Sri Basaveshwara Institute of Technology, Tiptur",
    "B.G.S. Institute of Technology, Mandya",
    "Tontadarya College of Engineering, Gadag",
    "Smt. Kamala and Sri. Venkappa Magadi College of Engineering and Technology, Gadag",
    "Maratha Mandal Engineering College, Belgaum",
    "K.L.E. Society College of Engineering and Technology, Belgaum",
    "S.G. Balekundri Institute of Technology, Belgaum",
    "Shaikh College of Engineering and Technology, Belgaum",
    "Angadi Institute of Technology and Management, Belgaum",
    "Jain College of Engineering, Belgaum",
    "KLE's College of Engineering and Technology, Chikkodi",
    "R.T.E. Society Rural Engineering College, Hulkoti",
    "Sri Taralabalu Jagadguru Institute of Technology, Ranebennur",
    "Anjuman Institute of Technology and Management, Bhatkal",
    "B.L.D.E.A's V.P. Dr. P.G. Halakatti College of Engineering and Technology, Bijapur",
    "SECAB Institute of Engineering & Technology, Bijapur",
    "Hirasugar Institute of Technology, Nidasoshi",
    "Khaja Banda Nawaz College of Engineering, Gulbarga",
    "K.C.T. Engineering College, Gulbarga",
    "Appa Institute of Engineering and Technology, Gulbarga",
    "Godutai Engineering College for Women, Gulbarga",
    "Guru Nanak Dev Engineering College, Bidar",
    "Rao Bahadur Y. Mahabaleswarappa Engineering College, Bellary",
    "Basaveshwar College of Engineering, Bagalkot",
    "B.M.S. College of Engineering, Bangalore",
    "B.M.S. Institute of Technology, Bangalore",
    "Dr.Ambedkar Institute of Technology, Bangalore",
    "Dayananda Sagar College of Engineering, Bangalore",
    "K.L.S. Gogte Institute of Technology, Belgaum",
    "M.S. Ramaiah Institute of Technology, Bangalore",
    "Malnad College of Engineering, Hassan",
    "N.M.A.M. Institute of Technology, Nitte",
    "Nagarjuna College of Engineering and Technology, Bengaluru",
    "National Institute of Engineering, Mysore",
    "Nitte Meenakshi Institute of Technology, Bangalore",
    "PDA College of Engineering, Kalaburagi",
    "PES College of Engineering, Mandya",
    "R.V. College of Engineering, Bangalore",
    "RV Institute of Technology and Management, Bangalore",
    "Siddaganga Institute of Technology, Tumkur",
    "Sri Siddhartha Institute of Technology, Tumkur",
    "Global Academy of Technology, Bangalore",
    "Dr. Ambedkar Institute of Technology, Bangalore"
  ].sort()

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
          alert("We Received Your Message.")
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
                    <form class="row g-3 needs-validation" id="contact-us" onSubmit={handleSubmit}>
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
                          {COLLEGES.map(name =>{
                            return (<option value={name}>
                              {name}
                            </option>);
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
