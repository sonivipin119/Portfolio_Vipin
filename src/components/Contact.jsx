import background3 from "../assets/portfolio_background3.jpg";
import { useState } from "react";
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  return (
    <div style={{ backgroundImage: `url(${background3})` }}
      className="relative min-h-screen w-full items-center justify-center content-center mt-2 bg-cover bg-center bg-no-repeat">
      {!submitted ? (
        <div
          className="mt-10 mr-15 ml-15 mb-15 w-9/10 h-9/10 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-3xl  text-white">
          <div className="grid grid-cols-2 items-center justify-between">
            <div className="text-center ml-30">
              <h1 className="mb-6 text-5xl font-bold">CONTACT</h1>

              <p className="mx-auto mb-10 max-w-md text-[#999]">
                Feel free to get in touch with me for any opportunities,
                projects or collaborations.
              </p>

              <h3 className="text-xl font-semibold">Address</h3>
              <p className="mb-8 text-[#999]">Kanpur, Uttar Pradesh, India</p>

              <h3 className="text-xl font-semibold">Contact Number</h3>
              <p className="mb-8 text-[#999]">+91 XXXXX XXXXX</p>

              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-[#999]">sonivipin0109@gmail.com</p>
            </div>
            <div className="flex flex-col text-center text-white pl-0 ml-2 pb-10">
              <div className="mt-20 rounded-2xl  pt-10 pb-5 pl-25 pr-25 w-4/5 shadow-[0_0px_10px_rgba(255,255,255,0.3)] border border-[#303030]">
                <h2 className="mb-10 text-4xl font-semibold tracking-wider">
                  Contact Me
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className=" text-white flex flex-col"
                >
                  <input
                    type="text"
                    name="name"
                    className="mb-6 w-full border-b border-[#777] bg-transparent pb-2 text-white outline-none placeholder:text-[#999] focus:border-[#ff9301]"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="mb-6 w-full border-b border-[#777] bg-transparent pb-2 text-white outline-none placeholder:text-[#999] focus:border-[#ff9301]"
                    placeholder="Your Email"
                    required
                  />

                  <textarea
                    placeholder="Message"
                    name="message"
                    className="mb-6 w-full border-b border-[#777] bg-transparent pb-2 text-white outline-none placeholder:text-[#999] focus:border-[#ff9301] "
                    rows="5"
                  ></textarea>
                  <div className="items-center content-center">
                    <button
                      className="bg-[#333] px-10 py-3 w-40 text-white shadow-[0_5px_15px_rgba(0,0,0,0.8)]
            transition hover:bg-[#ff9301] rounded-sm font-bold tracking-wider"
                      type="submit"
                    >Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
       <div className="text-center justify-center text-white">
          <h2 className="text-4xl font-bold">
            Thank you!
            <br />
            I will contact you soon.
          </h2>
        </div>
      )}
    </div>
  );
}
export default Contact;
