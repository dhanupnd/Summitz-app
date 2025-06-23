import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  const teamMembers = [
    {
      name: "Muhammad Danil Aminuddin",
      role: "Back-End Developer",
      socials: [
        { platform: "tiktok", icon: "/images/tiktok.png", url: "https://www.tiktok.com/@orangbimbang" },
        { platform: "instagram", icon: "/images/instagram.png", url: "https://www.instagram.com/mhmmd.dniell_" },
        { platform: "x", icon: "/images/x.png", url: "" },
        { platform: "facebook", icon: "/images/facebook.png", url: "" },
      ],
      image: "/images/fotoGue.jpg",
      phone: "0812-2844-1716",
      favorite: "Gunung Rinjani",
    },
    {
      name: "Dhanu Pandhowo",
      role: "Front-End Developer",
      socials: [
        { platform: "tiktok", icon: "/images/tiktok.png", url: "https://www.tiktok.com/@ddhannuu" },
        { platform: "instagram", icon: "/images/instagram.png", url: "https://www.instagram.com/dhanupnd" },
        { platform: "x", icon: "/images/x.png", url: "" },
        { platform: "facebook", icon: "/images/facebook.png", url: "https://www.facebook.com/dhanu.pnd" },
      ],
      image: "/images/dhanu.jpg",
      phone: "0821-1465-0210",
      favorite: "Gunung Gede",
    },
    {
      name: "Gian Adianyah",
      role: "Back-End Developer",
      socials: [
        { platform: "tiktok", icon: "/images/tiktok.png", url: "" },
        { platform: "instagram", icon: "/images/instagram.png", url: "https://www.instagram.com/adiansyahgian" },
        { platform: "x", icon: "/images/x.png", url: "" },
        { platform: "facebook", icon: "/images/facebook.png", url: "" },
      ],
      image: "/images/fotoGue.jpg",
      phone: "0853-2675-3771",
      favorite: "Gunung Merbabu",
    },
    {
      name: "Fairuz Trideas Hilmy",
      role: "UI/UX Designer",
      socials: [
        { platform: "tiktok", icon: "/images/tiktok.png", url: "https://www.tiktok.com/@kq.py" },
        { platform: "instagram", icon: "/images/instagram.png", url: "https://www.instagram.com/fyrz.hilmy" },
        { platform: "x", icon: "/images/x.png", url: "https://x.com/illaltered" },
        { platform: "facebook", icon: "/images/facebook.png", url: "" },
      ],
      image: "/images/kipay.jpg",
      phone: "0813-8703-9503",
      favorite: "Taman Gelang",
    },
  ];

  return (
    <section className="w-screen bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-[url('/images/AboutGede.jpg')] bg-cover bg-center">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins-semibold text-shadow-lg text-center leading-tight">
          Our Love For Hiking
        </h1>
      </div>

      {/* Divider */}
      <div className="w-11/12 max-w-5xl h-0.5 sm:h-1 mt-6 sm:mt-8 rounded-full bg-gray-300 mx-auto"></div>

      <div className="flex flex-col gap-8 sm:gap-12 py-8 sm:py-12">
        {/* Tentang Kami Section */}
        <section className="w-11/12 max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex-1">
              <p className="text-black text-2xl sm:text-3xl font-poppins-semibold text-center mb-4">Tentang Kami</p>
              <div className="w-32 h-0.5 bg-black mx-auto mb-6"></div>
              <p className="text-black text-sm sm:text-base font-serif text-center md:text-left px-4 sm:px-8">
                Summitz merupakan aplikasi berbasis website yang menyediakan jasa open trip pendakian gunung di seluruh Indonesia.
                Kami menjamin pengalaman pendakian anda memiliki kesan yang tidak dapat dilupakan, mulai dari akses pembayaran yang terpercaya,
                harga yang ekonomis, hingga perjalanan yang aman serta nyaman dengan tim yang kompeten.
              </p>
            </div>
            <div className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto md:mx-0">
              <img src="/images/logo.png" alt="Summitz Logo" className="w-full h-full object-contain rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Kenali Tim Kami Section */}
        <section className="w-11/12 max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <img src="/images/Kami.jpg" alt="Team" className="w-full h-full object-contain rounded-2xl" />
            </div>
            <div className="flex-1">
              <p className="text-black text-2xl sm:text-3xl font-poppins-semibold text-center mb-4">
                Kenali Tim Kami
              </p>
              <div className="w-32 h-0.5 bg-black mx-auto mb-6"></div>
              <p className="text-black text-sm sm:text-base font-serif text-center md:text-left px-4 sm:px-8">
                Summitz berawal dari empat orang mahasiswa yang mendapatkan penugasan akhir dalam mata kuliah pengembangan perangkat lunak.
                Aplikasi ini tercipta dikarenakan di dalamnya terdapat mahasiswa yang cinta akan wisata pendakian gunung,
                yang kemudian idenya dituangkan ke dalam aplikasi berbasis website.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-11/12 h-0.5 sm:h-1 mt-8 sm:mt-10 rounded-full bg-gray-300 mx-auto"></div>

          {/* Team Members */}
          <div className="flex flex-col gap-8 mt-8 px-4 sm:px-6 md:px-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div
                  className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center px-4 sm:px-6 md:px-8`}
                >
                  <div
                    className={`flex-1 text-center ${index % 2 !== 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <p className="text-black text-lg sm:text-xl font-poppins-semibold">{member.name}</p>
                    <p className="text-black text-sm sm:text-base">{member.role}</p>
                    <div
                      className={`flex gap-3 ${index % 2 !== 0 ? "md:justify-end" : "md:justify-start"} justify-center mt-2`}
                    >
                      {member.socials.map((social, idx) => (
                        <a
                          href={social.url}
                          key={idx}
                          className="w-8 h-8"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s ${social.platform} profile`}
                        >
                          <img src={social.icon} alt={`${social.platform} icon`} className="w-full h-full object-contain" />
                        </a>
                      ))}
                    </div>
                    <p className="text-black text-sm sm:text-base mt-2">{member.phone}</p>
                    <p className="text-black text-sm sm:text-base">Favourite Mountain: {member.favorite}</p>
                  </div>
                  <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                {index < teamMembers.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-300 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Let's Explore Together Section */}
        <section className="w-full bg-blue-800 text-white py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins-semibold mb-4">Let's Explore Together</h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 px-4 sm:px-6">Carilah pengalaman dan degan kami</p>
          <Link to="/more-trip" className="w-44 h-10 bg-white hover:bg-gray-200 rounded-full justify-center items-center mt-7 mx-auto inline-block">
            <p className="text-black py-2 font-bold text-center">Lihat Trip</p>
          </Link>

        </section>
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  );
};

export default About;