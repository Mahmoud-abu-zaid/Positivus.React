function Footer() {
  return (
    <footer>
      <div className="container bg-[#191a23]  mr-8 ml-8 p-7 rounded-t-2xl">
        <div className="flex justify-between  text-white flex-wrap">
          <div>
            <a href="index.html" className="">
              <img className="inline-block" src="/img/Vector (1).png" alt="" />
              Positivus
            </a>
          </div>
          <nav>
            <ul className="flex">
              <li className="p-2 decoration-1 underline">
                <a href="AboutUs">About us</a>
              </li>
              <li className="p-2 decoration-1 underline">
                <a href="Services">Services</a>
              </li>
              <li className="p-2 decoration-1 underline">
                <a href="UseCases">Use Cases</a>
              </li>
              <li className="p-2 decoration-1 underline">
                <a href="Blog">Blog</a>
              </li>
              <li className="p-2 decoration-1 underline">
                <a href="Pricing">Pricing</a>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <img className="p-2" src="/img/Social icon.png" alt="" />
            <img className="p-2" src="/img/Social icon.png" alt="" />
            <img className="p-2" src="/img/Social icon.png" alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-4 ">
          <div className="text-white">
            <h4 className=" bg-[#b9ff66] w-[fit-content] p-[3px] rounded-md text-2xl text-black mb-2">Team</h4>
            <p>Email: info@positivus.com</p>
            <br />
            <p>Phone: 555-567-8901</p>
            <br />
            <p>
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="bg-[#292a32] flex items-center justify-center h-[130px]  rounded-lg p-4">
            <input type="email" name="" id="" placeholder="Enter Your Email" className="w-[250px] p-2 rounded-lg bg-[#292a32] border-2 border-white" />
            <input type="submit" value="Subscribe to news" className="bg-[#b9ff66] p-[10px] rounded-md ml-3" />
          </div>
        </div>
        <hr className="mt-3 mb-3"/>
        <div className="flex text-white">
          <p>© 2023 Positivus. All Rights Reserved.</p> <a href="/" className="decoration-1 underline ml-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
