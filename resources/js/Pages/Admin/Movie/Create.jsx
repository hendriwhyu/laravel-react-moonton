import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <div className="mb-4"></div>
            <form onSubmit={submit} encType="multipart/form-data">
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    han
                    handleChange={handleOnChange}
                    placeholder="Enter the name of movie"
                    isError={errors.name}
                />
                <InputError message={errors.name} />
                <InputLabel forInput="category" value="Category" />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the category of movie"
                    isError={errors.category}
                />
                <InputError message={errors.category} />
                <InputLabel forInput="video_url" value="Video Url" />
                <TextInput
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the video url of movie"
                    isError={errors.video_url}
                />
                <InputError message={errors.video_url} />
                <InputLabel forInput="thumbnail" value="Thumbnail" />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the thumbnail of movie"
                    isError={errors.thumbnail}
                />
                <InputError message={errors.thumbnail} />
                <InputLabel forInput="rating" value="Rating" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the rating of movie"
                    isError={errors.rating}
                />
                <InputError message={errors.thumbnail} />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
