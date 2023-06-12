import { Link } from "react-router-dom";




const TeacherClassRow = ({ singleClass, refetch }) => {


    const { name, image, seats, price, status, enroled, _id } = singleClass || {}

    return (

        <tr className="">
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Class Image" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{seats}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>{enroled}</td>
            <td>
                <Link to={`/dashboard/update/${_id}`}>
                    <button className='btn btn-xs btn-secondary'>Update</button>
                </Link>

            </td>

        </tr>



    );
};

export default TeacherClassRow;