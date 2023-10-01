

const Hero = () => {
  return (
    <section id="home" className="flex  md:flex-row flex-col sm:py-16 py-6 fadeup  ">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            Welcome to NFCS<br/> Educational  Website<br className="" />{" "}
            <span className="text-gradient"> <span className="font-bold"></span></span>{" "}
          </h1>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5 ">
         We are so glad your here to explore the exciting world of education. We are here to help you learn and grow, so lets get started!
        </p>
      </div>

      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative animate-trans-right`}>
        <img src="/hero.jpg" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
