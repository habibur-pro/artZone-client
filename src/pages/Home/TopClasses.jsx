
import SectionTitle from "../../components/SectionTitle";
import MyContainer from "../../components/MyContainer";
import ClassCard from "../../components/ClassCard";
import useGetTeacherClass from "../../hooks/useGetTeacherClass";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const TopClasses = () => {
    const { data: classes, isLoading } = useGetTeacherClass('classes', 6)

    return (
        <div className="my-20">
            {
                isLoading ? <Spinner></Spinner>
                    :
                    <MyContainer>
                        <SectionTitle tittle='Choose The Best Class For You' subTittle="Top Classes" ></SectionTitle>
                        {/* <h3>{classes.length}</h3> */}
                        <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-16">
                            {
                                classes.map(classItem => <ClassCard
                                    singleClass={classItem}
                                    key={classItem._id}
                                ></ClassCard>)
                            }
                        </div>
                        <div className="flex justify-center items-center mt-7">
                            <Link to='/classes'><button className="btn btn-secondary text-center">See More</button></Link>
                        </div>
                    </MyContainer>

            }

        </div>
    );
};

export default TopClasses;