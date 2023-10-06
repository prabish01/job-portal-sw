const Navbar = () => {
  return (
    <div className="Navbar flex justify-between align-middle items-center p-[3rem]">
      <div className="logoDiv ">
        <h3 className="logoPlaceholder text-sm text-orange-400">
          SpeedWings <br></br> Human Resources
        </h3>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-blue-500 hover:text-red">About us</li>
        <li className="menuList text-blue-500 hover:text-red">Our Recruitment Process</li>
        <li className="menuList text-blue-500 hover:text-red">Area Of Expertise v</li>
      </div>
    </div>
  );
};

export default Navbar;
