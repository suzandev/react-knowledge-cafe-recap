// import profileImg from "/images/profile.png";

const Navbar = () => {
  return (
    <div className="navbar border-b-2 border-slate-200">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl lg:text-4xl text-[#111] font-bold">
          Knowledge Cafe
        </h3>
      </div>
      <div className="flex-none">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-15 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="/images/profile.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
