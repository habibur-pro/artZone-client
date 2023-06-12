import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const UpDateModal = ({ updateClassId }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const handleCancle = event => {
        event.preventDefault()
    }
    const onSubmit = data => console.log(data)
    return (
        <div>

            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
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
                    <div className="mb-3">
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
                    <input type='submit' className="btn btn-secondary" />
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={handleCancle} className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default UpDateModal;