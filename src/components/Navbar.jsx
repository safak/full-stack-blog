import { useState } from "react"


const Navbar = () => {

    return (
        <div className="flex">
            {/*Title*/}
            <div className="flex-1">
                <h1 className="text-2xl">SkillSwap</h1>
            </div>

            {/*This div contains the two main tabs.
            flex is used to make them align in a row
            gap of 5 px betweent the elements within the div
            --------CAN REMOVE LATER --------------
            padding on right and left sides of 5 px*/}

            <div className="flex gap-5 px-5">
                <a href="#" className="hover:underline">Search</a>
                <a href="#" className="hover:underline">Login</a>
            </div>

            {/*Mobile menu*/}
        </div>
        


    );
};

export default Navbar