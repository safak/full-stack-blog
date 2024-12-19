import { Link } from "react-router-dom"
import Image from './Image';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Category</Link>
          <span className="text-gray-500">Date</span>
        </div>
        {/* title */}
        <Link
          to="#"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quo. Hic quam dicta perferendis sit, ab quibusdam omnis doloremque qui. Fugit velit tempore doloremque! Mollitia non iste aperiam maxime corrupti!</p>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Category</Link>
              <span className="text-gray-500 text-sm">Date</span>
            </div>
            {/* title */}
            <Link
              to="#"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque.
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae eos ipsum cum iusto quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem, voluptatem iusto vel labore enim?</p>
          </div>
        </div>

        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Category</Link>
              <span className="text-gray-500 text-sm">Datetime</span>
            </div>
            {/* title */}
            <Link
              to="#"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At numquam facilis inventore natus quasi, consectetur doloremque quisquam repellendus officia vel pariatur minima provident reprehenderit praesentium, corrupti, ab voluptas aspernatur voluptatem.
          </div>
        </div>

        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Category</Link>
              <span className="text-gray-500 text-sm">Date</span>
            </div>
            {/* title */}
            <Link
              to="#"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Link>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor hic sequi porro voluptatibus, ad minima illo fuga aliquid quia corporis in veniam animi, quasi delectus iure, at similique doloribus doloremque?
          </div>
        </div>
      </div>
    </div>


  )
}

export default FeaturedPosts