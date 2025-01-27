
import { Menu } from 'lucide-react'; // Lucide-react icon for menu

const Navbar = () => {
  return (
    <div className=" text-white px-4 py-4 flex items-center mt-4">
      {/* Menu Icon */}
      <button className="text-white mr-4 focus:outline-none translate-x-6">
        <Menu className="h-8 w-8" />
      </button>

      {/* Centered Image */}
      <div className="flex-1 flex justify-center -translate-x-6">
        {/* <img 
          className="h-24 object-contain bg-blend-darken"
          src={sign} 
          alt="Sign" 
        /> */}
        <h1 className='font-marker text-6xl'>FK.</h1>
      </div>
    </div>
  );
};

export default Navbar;
