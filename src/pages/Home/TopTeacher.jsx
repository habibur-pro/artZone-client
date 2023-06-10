
import MyContainer from "../../components/MyContainer";
import SectionTitle from "../../components/SectionTitle";
import TeacherCard from "../../components/TeacherCard";
import useGetTeacherClass from "../../hooks/useGetTeacherClass";
import Spinner from "../../components/Spinner";



const TopTeacher = () => {
    const { data: teachers, isLoading } = useGetTeacherClass('teachers', 6)

    // const [teachers, setTeachers] = useState([])
    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_BASE_URL}/teachers?limit=6`)
    //         .then(res => setTeachers(res.data))

    // }, [])
    // console.log("teachers", teachers)
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
                    </MyContainer>
            }

        </div>
    );
};

export default TopTeacher;