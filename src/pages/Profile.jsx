const Profile = () => {
    return(
        <section className="w-screen h-screen bg-[url('/images/gunungRinjani.jpg')] bg-cover relative">
            <div className="absolute w-3/4 h-3/4 bg-black/50 rounded-2xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-full h-full grid grid-cols-2 relative justify-center items-center">
                    <img src="/images/user.png" alt="" className="w-1/3 mx-auto" />

                    <div className="flex flex-col gap-5 ">
                        <p className="text-white text-start text-xl font-medium">dhanupnd</p>
                        <p className="text-white text-start text-xl font-medium">dhanupandhowo29@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;