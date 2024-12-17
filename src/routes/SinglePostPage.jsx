import { Link } from "react-router-dom"
import Image from "../components/Image"
import Comments from './../components/Comment';
import PostMenuActions from './../components/PostMenuActions';
import Search from './../components/Search';

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* detail */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Title
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">Creator</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Category</Link>
                        <span>Datetime</span>
                    </div>
                    <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis repellat exercitationem tempora, odio ex alias debitis, velit maiores, totam suscipit atque saepe distinctio a ipsa molestias temporibus rerum ut.</p>
                </div>

                <div className="hidden lg:block w-2/5">
                    <Image src="" w="600" className="rounded-2xl" />
                </div>

            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-12 justify-between">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
                        fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
                        dolorem, dolores eligendi amet perferendis illum repellat nam quam
                        facilis veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
                        exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
                        Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Libero fuga modi amet error aliquid
                        eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
                    </p>
                </div>
                {/* menu */}
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">

                            <Image
                                src=""
                                className="w-12 h-12 rounded-full object-cover"
                                w="48"
                                h="48"
                            />

                            <Link className="text-blue-800">Creator</Link>
                        </div>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg" />
                            </Link>
                            <Link>
                                <Image src="instagram.svg" />
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions post="" />
                    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link className="underline" to="/">
                            Web Design
                        </Link>
                        <Link className="underline" to="/">
                            Development
                        </Link>
                        <Link className="underline" to="/">
                            Databases
                        </Link>
                        <Link className="underline" to="/">
                            Search Engines
                        </Link>
                        <Link className="underline" to="/">
                            Marketing
                        </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                </div>
            </div>
            <Comments postId="" />
        </div>
    )
}

export default SinglePostPage