import BannerImage from '../../assets/banner/banner.png'

export function Banner() {
    return (
        <section className="w-full p-4 sm:flex sm:justify-center">
            <div className="flex gap-5 relative rounded-lg bg-offWhite pt-4 pl-8% sm:pt-5 sm:text-center sm:justify-between w-full max-w-[800px]">
                <div className="flex flex-col justify-center sm:items-center">
                    <h1 className="text-3xl text-brown font-bold leading-8 mb-4">MEGA WINTER SALE</h1>
                    <h3 className="text-sm text-brown font-bold leading-none mb-2 sm:text-center">PARTS WITH UP TO</h3>
                    <h2 className="text-4xl sm:text-5xl text-pink font-bold mb-5 leading-10 sm:text-center">50% OFF</h2>
                    <div className="flex justify-center absolute -bottom-3 left-10">
                        <button className="transition duration-150 ease-out hover:ease-in bg-pink hover:bg-lightPink text-white rounded-md cursor-pointer py-2 px-6 text-xs font-semibold sm:w-52">SHOP NOW</button>
                    </div>
                </div>

                <div className="w-40 h-52 overflow-hidden sm:w-72 sm:h-64">
                    <img src={BannerImage} alt="Imagem do Banner" className="w-36 sm:w-64"/>
                </div>
            </div>
        </section>
    )
}