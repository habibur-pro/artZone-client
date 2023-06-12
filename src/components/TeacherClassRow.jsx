



const TeacherClassRow = ({ singleClass, refetch, setUpdateClass }) => {


    const { name, image, seats, price, status, enroled, _id } = singleClass || {}
    const handleModal = (singleClass) => {
        const modal = window.my_modal_1
        modal.showModal()
        setUpdateClass(singleClass)
    }
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
                <button onClick={() => handleModal(singleClass)} className='btn btn-xs btn-secondary'>Update</button>

            </td>

        </tr>



    );
};

export default TeacherClassRow;