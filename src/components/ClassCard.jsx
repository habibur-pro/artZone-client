

const ClassCard = ({ singleClass }) => {
    const { image, name, price, seats, rating, instructor, enroled } = singleClass || {}
    return (
        // <>
        //     <div className="card">
        //         <div className=" ">
        //             <img src={image} alt="" />
        //         </div>

        //         <h2 className=" text-center text-3xl font-bold mt-5  px-8">{name}</h2>
        //         <div className="title text-center text-gray-500 text-lg py-0 px-8">{instructor}</div>
        //         <div className="actions">
        //             <div className="follow-info px-0 py-1 flex">
        //                 <div className="w-1/2 text-center">
        //                     <div className="text-gray-500   flex flex-col text-center">
        //                         <p className="text-blue-500 font-bold text-3xl">{enroled}</p>
        //                         <p>Enroled</p>
        //                     </div>
        //                 </div>
        //                 <h2 className="w-1/2 text-center">
        //                     <p className="text-gray-500 hover:bg-gray-200 rounded-lg py-2 px-4">
        //                         <span className="text-blue-500 font-bold">{seats}</span>
        //                         <small>Available</small>
        //                     </p>
        //                 </h2>
        //             </div>
        //             <div className="follow-btn">
        //                 <button className="text-base font-bold bg-yellow-300 w-full border-none py-4 px-8 outline-none rounded-3xl hover:bg-yellow-400 transform transition-all duration-200">Follow</button>
        //             </div>
        //         </div>
        //         <div className="desc text-justify py-0 px-8">Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.</div>
        //     </div>


        // </>
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
                <button className="btn btn-secondary rounded-full w-full mt-5">Select</button>
            </div>
        </div>
    );
};

export default ClassCard;