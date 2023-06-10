
import SectionTitle from "../../components/SectionTitle";
import MyContainer from "../../components/MyContainer";
import ClassCard from "../../components/ClassCard";
import useGetTeacherClass from "../../hooks/useGetTeacherClass";
import Spinner from "../../components/Spinner";



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
                    </MyContainer>
            }

        </div>
    );
};

export default TopClasses;