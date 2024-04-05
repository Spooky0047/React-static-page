import reactLogo from "./react.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#21222A] py-4 px-5 flex items-center justify-between">
        <section className="flex items-center">
          <img src={reactLogo} alt="logo" className="mr-2"/>
          <h3 className="text-[#00d8ff] font-semibold text-xl">ReactFacts</h3>
        </section>
        <h4 className="text-white">React course-project 1</h4>
      </nav>
    </>
  );
};

export default Navbar;
