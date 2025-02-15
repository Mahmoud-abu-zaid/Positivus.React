import Header from "./components/Header";
import Hero from "./components/Hero-section";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const logIn = true;
  if (logIn) {
    return (
      <>
        <Header />
        <Hero />
        <Services />
        <Cases />
        <Team />
        <ContactUs />
        <Footer />
      </>
    );
  } else {
    return <span>please login to wepsite </span>;
  }
}
export default App;
