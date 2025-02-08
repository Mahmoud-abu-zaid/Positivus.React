function Header() {
  return (
    <header>
      <div className="container p-5 bg-white" >
        <a href="index.html" class="flex items-center text-[30px]">
          Positivus
        </a>
        <nav className="absolute md:top-5 right-3">
          <ul className="lg:flex bg-white">
            <li className="p-2">
              <a href="./index.html">About us</a>
            </li>
            <li className="p-2">
              <a href="Services">Services</a>
            </li>
            <li className="p-2">
              <a href="Use Cases">Use Cases</a>
            </li>
            <li className="p-2">
              <a href="Pricing">Pricing</a>
            </li>
            <li className="p-2">
              <a href="Blog">Blog</a>
            </li>
            <li className="p-2 border rounded-lg">
              <a href="Request a quote">Request a quote</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
