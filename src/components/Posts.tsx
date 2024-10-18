import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import AddPost from "./AddPost";

export interface Post {
    id: number,
    title: string,
    body: string
}

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
}

const addPost = async (newPost: Post) => {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    return data;
};


const Posts: React.FC = () => {
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })
    const { isPending: isSaving, mutateAsync: addNewPost } = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        }
    })

    if (isLoading || isSaving) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
        <AddPost isSaving={isLoading || isSaving} onUpdate={addNewPost} />
        <ul>
            {data?.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </>
    );
}
export default Posts;