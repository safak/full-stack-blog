import React from 'react';

const SkillInfoBox = () => {
    return (
        <div className=" text-black h-[calc(2.5/5*100vh)] w-2/3 flex items-center justify-center rounded-xl px-0 shadow-lg">
            {/* Skill Info Card */}
            <div className="p-4 w-full flex flex-col">
                <h2 className="text-xl mb-4">Skill Information</h2>
                <h3 className="mb-2">Skills You Can Teach</h3>
                <input
                    type="text"
                    placeholder="eg. Baking, French"
                    className="w-4/5 mb-4 bg-gray-200 rounded-xl py-2 px-4 text-black"
                />
                <h3 className="mb-2">SKills You Want To Learn</h3>
                <input
                    type="text"
                    placeholder="eg. Photography, Painting"
                    className="w-4/5 mb-4 bg-gray-200 rounded-xl py-2 px-4 text-black"
                />
                
            </div>
        </div>
    );
};

export default SkillInfoBox;
