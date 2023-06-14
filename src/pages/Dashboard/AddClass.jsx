
import useAuth from '../../hooks/useAuth'
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';



const AddClass = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()
    const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formData = new FormData();
    const onSubmit = data => {
        const imageFile = data.image[0]
        formData.append('image', imageFile);
        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {


                axiosSecure.post('/add_class', {
                    name: data.name,
                    image: image?.data?.display_url,
                    teacher_name: data.teacher_name,
                    teacher_email: data.teacher_email,
                    seats: parseInt(data.seats),
                    price: parseFloat(data.price),
                    enroled: 0,
                    status: 'pending'
                })
                    .then(res => {
                        if (res?.data?.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Added  Successfull ',
                                showConfirmButton: false,
                                timer: 1000
                            })
                            reset()
                            navigate('/dashboard/my_classes')
                        }
                    })
            }
            )
    };


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    {/* class name  */}
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Class Name"
                        type="text"
                        {...register("name", { required: 'Class Name is requred' })}

                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name?.message}</p>}

                    {/* image  */}
                </div>
                <div className="mb-3 border-gray-200 bg-white">
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Name"
                        type="file"
                        {...register("image", { required: "Image is required" })}
                    />
                    {errors.image && <p className="text-sm text-red-500">{errors.image?.message}</p>}
                    {/* teacher Name  */}
                </div>
                <div className="mb-3">
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Teacher Name"
                        type="text"
                        value={user?.displayName}
                        {...register("teacher_name")}
                        readOnly
                    />
                </div>

                {/* teacher email  */}
                <div className="mb-3">
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Teacher Email"
                        type="email"
                        value={user?.email}
                        {...register("teacher_email")}
                        readOnly

                    />
                </div>
                {/* Available seats  */}
                <div className="mb-3">
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Available Seats"
                        type="number"
                        {...register("seats", { required: "Available seat required" })}
                    />
                    {errors.seats && <p className="text-sm text-red-500">{errors.seats?.message}</p>}
                </div>
                {/* price  */}
                <div className="mb-3">
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Price"
                        type="number"
                        {...register("price", { required: "Price is required" })}
                    />
                    {errors.price && <p className="text-sm text-red-500">{errors.price?.message}</p>}
                </div>
                <input type='submit' value="Add Class" className="btn btn-secondary" />
            </form>
        </div>
    );
};

export default AddClass;