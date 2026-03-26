import React from "react";
import toast from "react-hot-toast";
import {motion} from "motion/react"
const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "89e55c5f-3578-4721-8d70-97fedc97cea2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Thank you for Your Submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong ❌");
    }
  };
  return (
    <motion.div
     initial={{opacity:0,x:30}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:0.6,delay:0.9}}
      viewport={{once:true}}
    >
      <div className="w-120  max-sm:w-full max-sm:mt-10  max-w-2xl bg-gray-800 p-10 rounded-2xl ">
        <form onSubmit={onSubmit}>
          {/* Input Fields */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-950 border border-gray-400 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#ff6b35]"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your phone no."
              className="w-full p-4 rounded-lg bg-gray-950 border border-gray-400 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#ff6b35]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-950 border border-gray-400 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#ff6b35]"
              required
            />
            <div className="flex gap-10 items-center ">
              <span className="text-gray-400 ">Select Your Plan</span>
              <select
                className="w-50 p-4 rounded-lg bg-gray-950 border border-gray-400 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#ff6b35]"
                name="plan"
                required
              >
                <option value="">Select Amount</option>
                <option value="300">₹300</option>
                <option value="500">₹500</option>
                <option value="700">₹700</option>
              </select>
            </div>

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-950 border border-gray-400 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#ff6b35] resize-none"
              required 
            />

            {/* Button */}
            <button
              type="submit"
              className="w-fit px-8 py-3 rounded-full bg-[#ff6b35] text-white font-semibold tracking-wide  hover:scale-105 transition duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
