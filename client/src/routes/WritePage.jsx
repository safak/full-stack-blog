import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useUser, useAuth } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const WritePage = () => {
    const [cover, setCover] = useState("");
    const [img, setImg] = useState("");
    const [video, setVideo] = useState("");
    const [progress, setProgress] = useState(0);
    const [value, setValue] = useState("");
    const {isLoaded, isSignedIn} = useUser();
    const {getToken} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        img && setValue((prev) => prev + `<p><img src="${img.url}"/></p>`);
    }, [img]);

    useEffect(() => {
        video && setValue((prev) => prev + `<p><iframe className="ql-video" src="${video.url}"/></p>`);
    }, [video]);

    const mutation = useMutation({
        mutationFn: async (newPost) => {
            const token = await getToken();
            
            return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        },
        onSuccess: (res) => {
            toast.success("Post has been created");
            navigate(`/${res.data.slug}`);
        },
        onError: (err) => {
            toast.error(err.response.data);
        },
    })

    if (!isLoaded) {
        return <div className="">Loading...</div>
    }

    if (isLoaded && !isSignedIn) {
        return <div className="">You should sign in</div>
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            img:cover.filePath || "",
            title: formData.get("title"),
            category: formData.get("category"),
            desc: formData.get("desc"),
            content: value,
        }

        mutation.mutate(data);
    }

    return (
        <div className="mt-8 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
            <h1 className="text-xl font-light font-medium text-primary-text-color">Create a New Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
                <Upload type="image" setProgress={setProgress} setData={setCover}>
                    <button 
                        type="button"
                        className="w-max p-2 shadow-md rounded-xl text-sm text-primary-text-color bg-white"
                    >
                        Add a cover image
                    </button>
                </Upload>
                <input 
                    className="text-4xl font-semibold bg-transparent outline-none text-primary-text-color" 
                    type="text" 
                    placeholder="My Awesome Story"
                    name="title"
                />
                <div className="flex items-center gap-4">
                    <label className="text-sm text-primary-text-color" htmlFor="category">Choose a category:</label>
                    <select 
                        className="p-2 rounded-xl bg-white shadow-md" 
                        name="category" 
                        id="category"
                    >
                        <option value="">General</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="database">Database</option>
                        <option value="cloud-services">Cloud Services</option>
                        <option value="development-tools">Development Tools</option>
                    </select>
                </div>
                <textarea 
                    className="p-4 rounded-xl bg-white shadow-md" 
                    name="desc" 
                    placeholder="A Short Description"
                />
                <div className="flex flex-1">
                    <div className="flex flex-col gap-2 mr-2">
                        <Upload type="image" setProgress={setProgress} setData={setImg}>
                            Add Image
                        </Upload>
                        <Upload type="video" setProgress={setProgress} setData={setVideo}>
                            Add video
                        </Upload>
                    </div>
                    <ReactQuill 
                        theme="snow" 
                        className="flex-1 rounded-xl bg-white shadow-md"
                        value={value}
                        onChange={setValue}
                        readOnly={progress > 0 && progress < 100}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={mutation.isLoading || progress > 0 && progress < 100} 
                    className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {mutation.isLoading ? `Loading: ${progress}%` : "Send"}
                </button>
                {mutation.isError && <span>{mutation.error.message}</span>}
            </form>
        </div>
    )
}

export default WritePage;