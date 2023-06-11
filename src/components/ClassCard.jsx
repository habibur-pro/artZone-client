import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ClassCard = ({ singleClass }) => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const { image, name, price, seats, instructor, enroled, _id } = singleClass || {}

    const handleSelectClass = singleClass => {
        const selectItem = {
            name,
            image,
            price,
            clssId: _id,
            email: user?.email,
            instructor,
        }
        console.log(selectItem)


        axiosSecure.post('/select_classes', {
            ...selectItem
        })
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    return (

        <div className="card border relative">

            <img src={image} alt="" />
            <div className="p-5 py-8">
                <h3 className="text-3xl font-semibold text-center">{name}</h3>
                <p className="text-md text-center">{instructor}</p>
                <div className="flex justify-between my-3 w-3/4 mx-auto">
                    <div className="text-center ">
                        <p className="font-bold text-3xl text-warning">{enroled}</p>
                        <p className="text-lg text-slate-500">Enroled</p>
                    </div>
                    <div className="text-center ">
                        <p className="font-bold text-3xl text-warning">{seats}</p>
                        <p className="text-lg text-slate-500">Available</p>
                    </div>
                </div>
                <p className="absolute top-5 right-5 bg-secondary px-4 py-1 text-white  font-bold bg-opacity-90" >${price}</p>
                {
                    user ? <button onClick={() => handleSelectClass(singleClass)} className="btn btn-secondary rounded-full w-full mt-5">Select</button> :
                        <Link to='/login'> <button className="btn btn-secondary rounded-full w-full mt-5">Select</button></Link>
                }
            </div>
        </div>
    );
};

export default ClassCard;