
const ProfileInfoBox = () => {
    
    return (
        <div className=" text-black h-[calc(3/5*100vh)] w-2/3 flex items-center justify-center rounded-xl px-0 shadow-lg">
            {/* Profile Info Card */}
            <div className="p-4 w-full flex flex-col">
                <h2 className="text-xl mb-4">Profile Information</h2>
                <h3 className="mb-2">Bio</h3>
                <textarea
                    type="text"
                    placeholder="Enter your bio"
                    className="w-4/5 mb-4  bg-gray-200 rounded-xl py-2 px-4 text-black"
                />
                <h3 className="mb-2">Profile Pic</h3>
                <input
                    type="file"
                    placeholder="Upload your photo"
                    className="w-4/5 mb-4  bg-gray-200 rounded-xl py-2 px-4 text-black"
                />
                <h3 className="mb-2">Age</h3>
                <input
                    type="number"
                    placeholder="Enter your age"
                    className="w-4/5 mb-4  bg-gray-200 rounded-xl py-2 px-4 text-black"
                />
                <h3 className="mb-2">Location</h3>
                <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-4/5 mb-4  bg-gray-200 rounded-xl py-2 px-4 text-black"
                />

            </div>
        </div>
    );

};

export default ProfileInfoBox
