const Hero = () => {
    return (
        <div className="mt-20 container h-screen mx-auto pt-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between relative">
                <div className="w-1/2">
                    <h1 className="text-6xl font-semibold text-secondary leading-tight">Kenali Jenis Sampahmu untuk <span className="text-primary">Lingkungan yang lebih Bersih!</span></h1>
                    <div className="mt-6">
                        <a href="#detect" className="mt-6 bg-primary text-white px-6 py-3 rounded-md">Mulai Deteksi!</a>
                    </div>
                </div>
                <div className="max-w-1/2">
                    <img src="/hero-illustration.png" alt="" className="w-[500px]" />
                </div>
                <img src="/Grid layers.png" alt="" className="w-full h-screen absolute -z-10" />
            </div>
        </div>
    )
}

export default Hero