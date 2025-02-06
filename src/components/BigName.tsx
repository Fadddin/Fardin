import photo from '/Fardin.jpg';

const BigName = () => {
  const handleDownloadCV = () => {
    // Replace this URL with the link to your CV file
    const cvLink = 'https://drive.google.com/file/d/1CBIxiAgDVV0Imj7wIJu7mTQTwDRkNBJ2/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = cvLink;
    link.download = 'Fardin_Khan_CV.pdf';
    link.click();
  };

  return (
    <div className="mt-12 relative">
      <div className="text-slate-400 text-center font-mono">
        CRAFTING WEBSITES SINCE 2022
      </div>

      <div className="relative">
        {/* Wrapper for positioning */}
        <div className="text-center text-[#e5ff3d] font-bebas font-bold text-[10rem] lg:text-[300px] leading-none mt-10 relative">
          <div className="relative">
            <span className="block">FARDIN</span>
            <span className="block">KHAN</span>
            {/* Image overlay */}
            <img
              className="h-42 lg:h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border"
              src={photo}
              alt="Fardin"
            />
          </div>
        </div>
      </div>

      <div className="text-black text-center mt-16">
        <button
          onClick={handleDownloadCV}
          className="bg-[#e5ff3d] px-6 py-4 rounded-full text-black font-bold relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-orange-400 to-yellow-300 blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></span>
          <span className="relative z-10 font-mono">DOWNLOAD CV</span>
        </button>
      </div>

      <div className="flex justify-center my-16">
        <h1 className="w-[70%] lg:w-[30%] text-center text-gray-300 font-mono">
          I’m Fardin Khan - a creative website developer turning ideas into stunning, functional
          websites. Whether it’s sleek designs or robust functionality, I’m all about crafting
          digital experiences that wow!
        </h1>
      </div>
    </div>
  );
};

export default BigName;
