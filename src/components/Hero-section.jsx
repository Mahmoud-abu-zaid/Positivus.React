
function Hero(){
  return(
<main>
  <section className="Hero">
        <div className="container flex justify-center items-center flex-wrap">
          <div className="md:w-%40">
          <h2 className="text-[60px] ">
            Navigating the <br />
            digital landscape <br />for success
          </h2>
          <p class="mt-4 mb-4">
            Our digital marketing agency helps businesses <br />
            grow and succeed online through a range of <br />
            services including SEO, PPC, social media marketing, <br />
            and content creation.
          </p>
          <a href="Book a consultation" className="p-3 bg-neutral-900 text-white rounded-lg ">Book a consultation</a>
        </div>
        <div>
          <img src= "/img/Illustration.png" alt="imge hero"/>
        </div>
        </div>
        </section>
</main>
  );
}
export default Hero;