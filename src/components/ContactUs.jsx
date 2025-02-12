function ContactUs() {
  return (
    <main>
      <section id="Contat US">
        <div className="container">
          <div className="mt-20 flex  justify-center items-center">
            <h2 className="mr-10 bg-[#b9ff66] p-[3px] rounded-md text-2xl">Contact Us</h2>
            <p>
              Connect with Us: Let's Discuss Your <br />
              Digital Marketing Needs
            </p>
          </div>
          <div className="flex justify-center p-5 ">
            <form className=" bg-[#f3f3f3] w-[80%] p-5  rounded-lg">
              <div className="flex">
                <div>
                  <input type="radio" name="Us" />
                  <label className="mr-3">Say Hi</label>
                </div>
                <div>
                  <input type="radio" name="Us" />
                  <label> Get a Quote</label>
                </div>
              </div>
              <div>
                <label className="block mb-2 mt-2">Name</label>
                <input type="text" name="" id="" placeholder="Enter Your Name" className="w-[100%] rounded-lg p-2 border-black  border-[1px]" />
              </div>
              <div>
                <label className="block mb-2 mt-2">Email</label>
                <input type="email" name="" id="" placeholder="Enter Your Email" className="w-[100%] rounded-lg p-2  border-black  border-[1px]" />
              </div>
              <div>
                <label className="block mb-2 mt-2">Message</label>
                <textarea name="" id="" cols="20" rows="5" className="w-[100%]  rounded-lg p-2  border-black  border-[1px]"></textarea>
              </div>
              <div>
                <input type="submit" value="Send Message" className="w-[100%]  rounded-lg p-2 mb-1 mt-1 bg-[#191a23] text-white" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ContactUs;
