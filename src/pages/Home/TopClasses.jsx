
import SectionTitle from "../../components/SectionTitle";
import MyContainer from "../../components/MyContainer";
import { useState } from "react";
import { useEffect } from "react";
// import { getClassess } from "../../api/class";
import ClassCard from "../../components/ClassCard";
import axios from "axios";
// import axios from "axios";


const TopClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/classes?limit=6`)
            .then(res => setClasses(res.data))

    }, [])
    console.log(classes)
    return (
        <div className="my-20">
            <MyContainer>
                <SectionTitle tittle='Choose The Best Class For You' subTittle="Top Classess" ></SectionTitle>
                {/* <h3>{classes.length}</h3> */}
                <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-16">
                    {
                        classes.map(classItem => <ClassCard
                            singleClass={classItem}
                            key={classItem._id}
                        ></ClassCard>)
                    }
                </div>
            </MyContainer>
        </div>
    );
};

export default TopClasses;