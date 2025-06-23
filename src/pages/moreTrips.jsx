import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MoreTrips = () => {
  return (
    <div className='w-screen bg-white'>
      <Navbar />

      <section className="pt-24">
        <div className="container w-11/12 mx-auto">
          <p className="text-black text-2xl font-bold mb-8">Pilih jadwal trip pendakian favoritmu!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-14 pb-10">
            <Card />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoreTrips;