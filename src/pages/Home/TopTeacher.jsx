
import MyContainer from "../../components/MyContainer";
import SectionTitle from "../../components/SectionTitle";
import TeacherCard from "../../components/TeacherCard";
import useGetTeacherClass from "../../hooks/useGetTeacherClass";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";



const TopTeacher = () => {
    const { data: teachers, isLoading } = useGetTeacherClass('teachers', 6)


    return (
        <div className="mb-20">
            {
                isLoading ? <Spinner></Spinner>
                    :
                    <MyContainer>
                        <SectionTitle tittle="Great Teachers For Amazing Journey" subTittle="Top Teachers"></SectionTitle>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                            {
                                teachers.map(teacher => <TeacherCard
                                    key={teacher._id}
                                    teacher={teacher}
                                ></TeacherCard>)
                            }
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <Link to='/teachers'><button className="btn btn-secondary text-center">See More</button></Link>
                        </div>
                    </MyContainer>
            }

        </div>
    );
};

export default TopTeacher;