import photo from '/Fardin.jpg';

const BigName = () => {
  return (
    <div className='mt-12 relative'>
      <div className='text-slate-400 text-center font-mono'>
        CRAFTING WEBSITES SINCE 2022
      </div>

      <div className='relative'>
        {/* Wrapper for positioning */}
        <div className='text-center text-[#e5ff3d] font-bebas font-bold text-[300px] leading-none mt-10 relative'>
          <div className='relative'>
            <span className='block'>FARDIN</span>
            <span className='block'>KHAN</span>
            {/* Image overlay */}
            <img
              className='h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border '
              src={photo}
              alt="Fardin"
            />
          </div>
        </div>
      </div>

      <div className='text-black text-center mt-16'>
        <button className='bg-[#e5ff3d]  px-6 py-4 rounded-full'> Download CV</button>
       </div>

       <div className=' flex justify-center my-16'> 
        <h1 className=' w-[30%] text-center text-gray-300 font-mono'>
        I’m Fardin Khan - a creative website developer turning ideas into stunning, functional websites. Whether it’s sleek designs or robust functionality, I’m all about crafting digital experiences that wow !
        </h1>
        </div>
    </div>
  );
};

export default BigName;
