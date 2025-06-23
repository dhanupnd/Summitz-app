import { Link } from 'react-router-dom';

const PromotedTrip = () => {
    return (
        <section className='w-full mb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-auto lg:grid-rows-5 w-full min-h-screen lg:h-dvh gap-5 bg-[url(https://i.pinimg.com/736x/f5/02/4e/f5024eed93239bb1eec548448470b117.jpg)] bg-cover bg-center p-4 sm:p-6 lg:p-0'>
                
                {/* Teks Header */}
                <div className='col-span-1 lg:col-start-1 lg:col-end-3 flex items-center justify-center'>
                    <h1 className='pt-8 sm:pt-12 lg:pt-16 text-center font-poppins-semibold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white text-shadow-lg px-4'>
                        Jelajahi Gunung Argopuro!
                    </h1>
                </div>

                {/* Garis horizontal */}
                <div className='col-span-1 lg:col-start-1 lg:col-end-3 relative'>
                    <div className='absolute left-1/2 -translate-x-1/2 top-1/2 w-3/4 rounded-2xl sm:w-2/3 lg:w-3/4 h-0.5 sm:h-1 bg-white'></div>
                </div>

                {/* Konten Teks */}
                <div className='col-span-1 lg:col-start-1 lg:col-end-2 pt-5 px-4 sm:px-8 lg:pl-16 xl:pl-32 lg:pr-8 lg:row-span-3 order-2 lg:order-none'>
                    <p className='text-start text-sm sm:text-base lg:text-lg font-medium lg:font-semibold text-white leading-relaxed'>
                        Gunung Argopuro di Jawa Timur menyuguhkan keindahan alam yang memanjakan mata, 
                        mulai dari Danau Taman Hidup yang tenang, padang savana yang membentang luas, 
                        hingga ragam vegetasi dari hutan tropis hingga semak pegunungan, menjadikannya salah satu jalur pendakian terindah di Indonesia. 
                        Suasananya pun terasa tenang dan alami, cocok bagi pecinta petualangan dan ketenangan.
                    </p>    

                    <div className='w-full sm:w-40 lg:w-32 h-10 sm:h-12 bg-white rounded-full mt-6 sm:mt-7 hover:bg-[#D9D9D9] transition-colors'>
                        <Link to="/trips/12" className='block w-full h-full'>
                            <p className='px-4 py-2.5 sm:py-3 lg:py-auto text-black text-center text-sm sm:text-base font-poppins-semibold'>
                                Lihat detail
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Gambar */}
                <div className='col-span-1 lg:col-start-2 lg:col-end-3 lg:row-span-3 px-4 sm:px-8 lg:pr-16 xl:pr-32 order-1 lg:order-none'>
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-end w-full'>
                        {/* Gambar 1 */}
                        <div className='flex-1 sm:flex-none'>
                            <img 
                                src="https://i.pinimg.com/736x/01/3b/ae/013bae9c705fcad7d85be533aed0b38a.jpg" 
                                alt="Gunung Argopuro view 1" 
                                className='w-full sm:w-40 md:w-48 lg:w-52 h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-2xl border-2 border-white shadow-lg hover:shadow-xl transition-shadow'
                            />
                        </div>

                        {/* Gambar 2 */}
                        <div className='flex-1 sm:flex-none'>
                            <img 
                                src="https://i.pinimg.com/736x/d0/27/d3/d027d3296f77ad49d757aa06c2d986e7.jpg" 
                                alt="Gunung Argopuro" 
                                className='w-full sm:w-40 md:w-48 lg:w-52 h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-2xl border-2 border-white shadow-lg hover:shadow-xl transition-shadow'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromotedTrip;