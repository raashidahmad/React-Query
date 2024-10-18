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
        <form onSubmit={handleSubmit(submitPost)}>
            <input {...register('id', { required: true })} type="number" />
            {errors?.id && <p>Id is required</p>}

            <input {...register('title', { required: true })} type="text" maxLength={fieldProps.title.maxLength} />
            {errors?.id && <p>Title is required</p>}

            <input {...register('body', { required: true })} type="text" maxLength={fieldProps.body.maxLength} />
            {errors?.id && <p>Body is required</p>}

            <button 
                type="submit"
                disabled={isSaving}
            >Add Post</button>

        </form>
    );
}
export default AddPost;