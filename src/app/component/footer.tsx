const Footer = () => (
    <footer
      className={` py-8 relative `}
    >
      <div className="footer-gradient" />
      <div className={`mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
  
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white italics">
              CONSTANCE
            </h4>
            <p className="font-normal text-[14px] text-white opacity-100">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  