import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import React, { useState } from 'react'


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear error for the corresponding field
    });

  };

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log('Form submitted:', formData);
      alert("Your information has sent successfully");
      setFormData({
        name: '',
        email: '',
        phone: '',
      });

    } else {
      setErrors(errors);
    }
  };
  return (
    <div className='flex flex-col sm:gap-8 md:flex-row md:justify-between md:px-8 md:items-center md:pb-[25px] '>
      <div className="px-[12px] py-[40px] ">
        <div className="flex flex-col gap-5  xs:gap-[30px] sm:gap-[42px] md:gap-[25px]  ">
          <div className="leading-[20px]  flex flex-col items-center justify-center md:items-start ">
            <h1 className="font-extrabold text-[#576250] baskervville tracking-tight text-[25px] xs:text-[35px] sm:text-[40px] md:text-[35px]     md:leading-[40px] lg:text-[40px] lg:tracking-normal xl:text-[50px]  xl:leading-[50px] ">Contact Office</h1>
            <h1 className="text-[#B8C1B2] text-[13px] xs:text-[16px] xs:leading-[35px] sm:text-[18px] sm:leading-[48px] literata  md:text-[15px]  md:leading-[19px] xl:text-[20px] xl:leading-[30px]  ">we are excited to get planning!</h1>
          </div>


          
          <div className="flex flex-col  justify-center items-center gap-2  md:items-start ">
            <h1 className="font-extrabold text-[#576250] poppins-regular tracking-tight xs:text-[20px] sm:text-[22px] md:text-[18px] lg:text-[22px] xl:text-[28px] ">Contact information</h1>

            <form onSubmit={handleSubmit}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-5 sm:gap-6 md:gap-[10px]">
                <div className="flex flex-col leading-[20px]  "  >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="px-[25px] py-[5px] xs:w-[300px] xs:py-[10px] sm:w-[350px] md:w-[338px] md:py-[8px] lg:w-[400px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] bg-white border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
                  />
                  {errors.name && <span className="text-red-500 tracking-tight text-[12px]  poppins-regular px-[8px]" > *{errors.name}</span>}
                </div>

                <div className="flex flex-col leading-[20px] " >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-[25px] py-[5px] xs:w-[300px] xs:py-[10px] sm:w-[350px] md:w-[338px] md:py-[8px] lg:w-[400px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
                  />
                  {errors.email && <span className="text-red-500 tracking-tight text-[12px] poppins-regular px-[8px]" >{errors.email}</span>}
                </div>

                <div className="flex flex-col leading-[20px] ">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="px-[25px] py-[5px] xs:w-[300px] xs:py-[10px] sm:w-[350px] md:w-[338px] md:py-[8px] lg:w-[400px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
                  />
                  {errors.phone && <span className="text-red-500 tracking-tight text-[12px] poppins-regular px-[8px]" >{errors.phone}</span>}
                </div>

              </div>

              <button type="submit"
                className=" px-[25px] py-[5px] rounded-[8px] xs:w-[300px] xs:py-[10px] sm:w-[350px]  lg:font-bold  lg:tracking-wider xl:w-[500px]  2xl:w-[160px]  md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px]  text-white scope-one-regular tracking-wide text-center flex  items-center justify-center"
              
              >Send</button>
            </form>

          </div>
        </div>
      </div>




{/* map section */}
      <div className="gap-5 flex flex-col">
        <div className="px-2 flex flex-col gap-3 items-center  justify-center  md:items-start ">
          <div className="flex flex-col gap-2 xs:gap-5 items-center  justify-center md:items-start md:justify-center ">
            <div className="items-center  justify-center flex flex-col md:items-start">
              <h1 className="poppins-regular text-[#576250] xs:text-[23px] sm:text-[25px] md:text-[20px] lg:text-[18px] ">Head office</h1>
              <h1 className="text-[#90998B] text-[13px] poppins-regular xs:text-[15px] xs:leading-[10px] sm:text-[17px] md:w-[200px] md:leading-[25px] md:text-[15px] lg:text-[13px] lg:leading-[15px] ">Via Roma, 12320121 Milano (MI)Italy</h1>
            </div>

            <div className="leading-[15px] md:flex md:flex-col md:items-start ">
              <h1 className="text-[#90998B] text-[13px] xs:text-[13px] leading-[18px]  sm:text-[15px] sm:leading-[22px]  poppins-regular md:text-[14  px] lg:text-[13px] lg:leading-[15px]  ">Phone: +39 (0)322 221211</h1>
              <h1 className="text-[#90998B] text-[13px] xs:text-[13px] leading-[18px]  sm:text-[15px] sm:leading-[22px]  poppins-regular md:text-[14  px] lg:text-[13px] lg:leading-[15px]  ">Mobile: +39 328 2211212</h1>
            </div>
          </div>

          <div className="">
            <h1 className="poppins-regular text-[#576250] md:leading-[29px]">Follow us</h1>
            <div className="flex flex-row items-center gap-2">
              <FaFacebook className="text-[#90998B] font-extrabold  md:text-[19px] " />
              <FaInstagram className="text-[#90998B] font-extrabold md:text-[19px] " />
              <FaTwitter className="text-[#90998B] font-extrabold   md:text-[19px] " />
            </div>  

          </div>
        </div>




        <div className="bg-opacity-80 md:order-first pt-7">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706402.7532223384!2d7.874835480678192!3d44.491863075323316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c26f293e3163%3A0xff5d82c1f7db9ca8!2sVia%20Roma%2C%20123%2C%2020090%20Cesano%20Boscone%20MI%2C%20Italy!5e0!3m2!1sen!2sin!4v1713330328987!5m2!1sen!2sin"
            width="600" height="450" style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full md:w-[340px] md:h-[350px] md:pr-[10px] md:rounded-md lg:w-[500px] lg:h-[400px] mlg:rounded-md  opacity-4"
          >
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
