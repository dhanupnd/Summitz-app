import { Link } from "react-router-dom";

const BestTrips = () => {
    return(
        <section>
            <Link to="/trips/sumbing">
                <div className="w-70 h-110 bg-amber-50 rounded-2xl overflow-hidden drop-shadow-xl">
                    <section className="bg-[url(https://i.pinimg.com/736x/2a/b5/50/2ab550be3f72a5b28971b6e17aaa6feb.jpg)] bg-cover w-70 h-70 rounded-2xl"></section>
                    <section>
                        <p className="text-start text-black mx-3 mt-3 mb-1">Gunung Sumbing</p>
                        <p className="text-start font-light text-black mx-3">Kota Temanggung</p>
                        <p className="text-start text-black text-lg mx-3 mt-14">IDR 750.000</p>
                    </section>
                </div>
            </Link>
        </section>
    )
}

export default BestTrips;