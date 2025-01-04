const BasicInfoBox = () => {
    return (
        <div className="text-black h-[calc(1.5/5*100vh)] w-2/3 flex items-center justify-center rounded-xl px-0 shadow-lg">
            {/* Basic Info Card */}
            <div className="p-4 w-full flex flex-col">
                <h2 className="text-xl mb-4 ">Basic Information</h2>
                <h3 className="mb-2">Name</h3>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-4/5 mb-4 bg-gray-200 rounded-xl py-2 px-4 text-black"
                />
            </div>
        </div>
    );
};

export default BasicInfoBox;