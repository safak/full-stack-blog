const Review = () => {

    return (
        <div className="mt-12 shadow-lg w-80 h-40 rounded-2xl flex flex-col items-center justify-center">
            <div className="flex gap-1">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
            </div>
            <p className="text-xl">John D</p>
            <p className="text-gray-500">Review</p>
        </div>
    );
};

export default Review