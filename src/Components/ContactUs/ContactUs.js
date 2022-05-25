import NavBar from "../NavBar/NavBar";
// import messageIcon from "../../Icons/message-right.svg";
// import sendIcon from "../../Icons/send-fill.svg";
import { useRef } from "react";
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
    }
    return (
        <>
            <NavBar curPage="/contactus" />
            <div className="container ">
                <div className="row gx-5 d-flex justify-content-around ">
                    <div className="col-5 shadow p-5 rounded" style={{ backgroundColor: "#b8ecff", backgroundImage: "linear-gradient(315deg, rgba(255,255,255,1) 0%, rgba(112,230,254,1) 100%)" }}>
                        <form className="d-flex flex-column align-items-start" onSubmit={handleMessageSubmit}>
                            <div className="w-100 d-flex justify-content-center align-items-center">
                                <h3 className="fw-bold">Contact Us</h3>
                                {/* <img src={messageIcon} width="30rem" style={{ margin: "10px" }}></img> */}
                            </div>
                            <label htmlFor="contact-us-name" className="form-label fs-5">Full Name</label>
                            <input type="text" className="form-control mb-3" id="contact-us-name" placeholder="John Doe" ref={fullNameRef}></input>

                            <label htmlFor="contact-us-email" className="form-label fs-5">Email</label>
                            <input type="text" className="form-control mb-3" id="contact-us-email" placeholder="name@example.com" ref={emailRef}></input>

                            <label htmlFor="contact-us-phone" className="form-label fs-5">Phone Number</label>
                            <input type="text" className="form-control mb-3" id="contact-us-phone" placeholder="+918888888888" ref={phoneNoRef}></input>

                            <label htmlFor="contact-us-message" className="form-label fs-5">Message</label>
                            <textarea type="text" className="form-control mb-3" id="contact-us-message" placeholder="Type your message here..." ref={messageRef} style={{ height: "7rem" }}></textarea>
                            <div className="w-100">
                                <button type="submit" className="btn btn-outline-primary btn-lg align-items-center">
                                    Send
                                    {/* <img src={sendIcon} style={{ margin: "0px 10px 0px 10px" }}></img> */}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-5 shadow p-3 bg-body rounded card">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4814120554875!2d77.56333711451869!3d12.941017419050835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1653465729053!5m2!1sen!2sin" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="card-body d-flex flex-column align-items-start">
                            <h5 className="card-title mb-3 fw-bold">BMS College of Engineering</h5>
                            <table>
                                <tr>
                                    <td className="text-start">Email: </td>
                                    <td className="text-start px-5">admin@bmsce.ac.in</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Phone: </td>
                                    <td className="text-start px-5">080 2662 2130</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Address: </td>
                                    <td className="text-start px-5">Bull Temple Rd, Basavanagudi, Bengaluru, Karnataka 560019</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
