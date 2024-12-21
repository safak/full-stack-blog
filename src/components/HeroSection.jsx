const HeroSection = () => {
    return (
        <div className="bg-black text-white h-[calc(4.5/5*100vh)] w-full flex items-center justify-center rounded-xl px-0">
                {/* Hero Section */}

                <div className="p-4 relative z-10 w-full text-center flex flex-col items-center justify-content">
                    {/*--------------Add the Search icon---------------------------------------------*/}
                    <input type="text" placeholder="Search for a swap" className="w-4/5 rounded-xl py-2 px-4 text-black"/>
                    <button className="mt-4 px-5 py-2 rounded-2xl text-xl bg-blue-800 text-white-100">Start Swap</button>
                </div>
            </div>
    );
};

export default HeroSection

