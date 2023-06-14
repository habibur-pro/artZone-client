
import MyContainer from "../components/MyContainer";
import PageHeader from "../components/PageHeader";
import TeacherCard from "../components/TeacherCard";
import useGetTeacherClass from "../hooks/useGetTeacherClass";
import Spinner from "../components/Spinner";


const Teachers = () => {
    const { data: allTeacher, isLoading } = useGetTeacherClass('teachers')



    return (
        <div className="">
            {
                isLoading ? <Spinner />
                    :
                    <>
                        <PageHeader heading='Teachers'></PageHeader>
                        <MyContainer>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
                                {
                                    allTeacher.map(teacher => <TeacherCard
                                        key={teacher._id}
                                        teacher={teacher}
                                    ></TeacherCard>)
                                }
                            </div>

                        </MyContainer>
                    </>
            }

        </div>
    );
};

export default Teachers;