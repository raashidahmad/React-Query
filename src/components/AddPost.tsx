import { useForm } from "react-hook-form";
import { Post } from "./Posts"


interface AddPostProps {
    isSaving: boolean
    onUpdate: (data: Post) => void
}

const AddPost = ({ isSaving, onUpdate }: AddPostProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const fieldProps = {
        title: {
            name: 'title',
            maxLength: 20
        }, body: {
            name: 'title',
            maxLength: 20
        }
    }

    const submitPost = (data: any) => {
        onUpdate(data);
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submitPost)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        Id
                    </label>
                    <input
                        {...register('id', { required: true })}
                        type="number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Id" />
                    {errors?.id && <p>Id is required</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Title"
                        maxLength={fieldProps.title.maxLength} />
                    {errors?.title && <p>Title is required</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        Body
                    </label>
                    <input
                        {...register('body', { required: true })}
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Body"
                        maxLength={fieldProps.body.maxLength} />
                    {errors?.body && <p>Body is required</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit"
                        disabled={isSaving}>
                        {isSaving ? "Saving..." : "Add Post" }
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>

            </form>
        </div>
    );
}
export default AddPost;