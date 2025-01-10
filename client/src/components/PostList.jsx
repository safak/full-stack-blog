import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam, pageLimit, searchParams) => {
    const searchParamsObj = Object.fromEntries([...searchParams]);

    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params: {page: pageParam, limit: pageLimit, ...searchParamsObj},
    });

    return res.data;
}

const PostList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['posts', searchParams.toString()],
        queryFn: ({pageParam = 1, pageLimit = 10}) => fetchPosts(pageParam, pageLimit, searchParams),
        getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
    })

    if (isFetching) {
        return "Loading...";
    }

    if (error) {
        return "An error has occured" + error.message;
    }

    const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

    return (
        <InfiniteScroll
            dataLength={allPosts.length} 
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<h4>Loading more posts...</h4>}
            endMessage={
                <p>
                    <b>All posts loaded</b>
                </p>
            }
        >
            {allPosts.map(post => (
                <PostListItem key={post._id} post={post}/>
            ))}
        </InfiniteScroll>
    )
}

export default PostList;