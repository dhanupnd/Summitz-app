const WhyUs = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative py-4 sm:py-5">

      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 mt-3 sm:mt-5 rounded-full bg-[#D9D9D9] mx-auto"></div>

      {/* Title */}
      <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 lg:py-10 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl leading-tight sm:leading-normal">
        Mengapa kamu harus memilih kami sebagai sarana mendaki?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 justify-center items-start w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-64 xl:max-w-72 2xl:max-w-80 h-40 sm:h-44 md:h-52 lg:h-56 xl:h-64 2xl:h-72 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col bg-white mx-auto group">
          <img 
          src="/images/trusted.png" 
          alt="Terpercaya" 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 mx-auto mt-5 mb-3" 
          />
          <span className="text-black font-poppins-semibold text-sm sm:text-based md:text-lg lg:text-xl xl:text-2xl">Terpercaya</span>
          <p className="text-black text-xs sm:text-sm md:text-base lg:text-base mt-3 px-3">Amanah dalam menjaga hubungan dengan peserta</p>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-64 xl:max-w-72 2xl:max-w-80 h-40 sm:h-44 md:h-52 lg:h-56 xl:h-64 2xl:h-72 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col bg-white mx-auto group">
          <img 
          src="/images/cheap.png" 
          alt="Ekonomis" 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 mx-auto mt-5 mb-3" 
          />
          <span className="text-black font-poppins-semibold text-sm sm:text-based md:text-lg lg:text-xl xl:text-2xl">Ekonomis</span>
          <p className="text-black text-xs sm:text-sm md:text-base lg:text-base mt-3 px-3">Nikmati perjalanan menyenangkan tanpa menguras kantong</p>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-64 xl:max-w-72 2xl:max-w-80 h-40 sm:h-44 md:h-52 lg:h-56 xl:h-64 2xl:h-72 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col bg-white mx-auto group">
          <img 
          src="/images/professional.png" 
          alt="Profesional" 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 mx-auto mt-5 mb-3" 
          />
          <span className="text-black font-poppins-semibold text-sm sm:text-based md:text-lg lg:text-xl xl:text-2xl">Profesional</span>
          <p className="text-black text-xs sm:text-sm md:text-base lg:text-base mt-3 px-3">Tim yang berpengalaman, bersertifikasi serta terlatih</p>
        </div>

        {/* Card 4 - Berkesan */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-64 xl:max-w-72 2xl:max-w-80 h-40 sm:h-44 md:h-52 lg:h-56 xl:h-64 2xl:h-72 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col bg-white mx-auto group">
          <img 
          src="/images/memorable.png" 
          alt="Berkesan" 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 mx-auto mt-5 mb-3" 
          />
          <span className="text-black font-poppins-semibold text-sm sm:text-based md:text-lg lg:text-xl xl:text-2xl">Berkesan</span>
          <p className="text-black text-xs sm:text-sm md:text-base lg:text-base mt-3 px-3">Memberikan pengalaman yang takkan terlupakan</p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="w-8/12 sm:w-9/12 md:w-10/12 h-1 sm:h-1.5 rounded-full bg-[#D9D9D9] mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10"></div>
    </section>
  );
};

export default WhyUs;