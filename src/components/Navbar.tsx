import { useEffect, useState } from "react";
import { Menu } from "lucide-react"; // Lucide-react icon for menu

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  return (
    <div className="text-white px-4 py-4 flex items-center mt-4">
      {/* Menu Icon */}
      {/* <button className="text-white mr-4 focus:outline-none translate-x-6">
        <Menu className="h-8 w-8" />
      </button> */}

      {/* Centered Logo */}
      <div className="flex-1 flex justify-center">
        <h1 className="font-marker text-6xl">FK.</h1>
      </div>

      {/* Current Time and Date */}
      {/* <div className="text-right font-mono pr-3 text-sm lg:text-xl inline sm:none ">
       
        <p>{currentTime.toLocaleTimeString()}</p>
      </div> */}
    </div>
  );
};

export default Navbar;
