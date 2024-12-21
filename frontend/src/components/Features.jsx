const Features = () => {
    return(
        <div className="mt-12 flex flex-col gap-4 justify-content items-center">
            {/*Main title*/}
            <div className="flex flex-col justify-content items-center">
                <h1 className="text-2xl">The Skill Exchange Platform</h1>
                <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            {/*Feature row 1*/}
            <div className="mt-8 flex flex-row gap-8 px-10 justify-content items-center text-center">
                <div className="w-1/2">
                    <h2 className="text-xl">Feature 1</h2>
                    <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="w-1/2">
                    <h2 className="text-xl">Feature 2</h2>
                    <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {/*Feature row 2*/}
            <div className="mt-8 flex flex-row gap-8 px-10 justify-content items-center text-center">
                <div className="w-1/2">
                    <h2 className="text-xl">Feature 3</h2>
                    <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="w-1/2">
                    <h2 className="text-xl">Feature 4</h2>
                    <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Features