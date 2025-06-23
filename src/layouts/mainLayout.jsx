import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const location = useLocation();

  // Daftar halaman yang tidak ingin menampilkan navbar
  const hideNavbarPaths = ['/login'];

  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;