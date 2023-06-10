import ClassCard from "../components/ClassCard";
import MyContainer from "../components/MyContainer";
import PageHeader from "../components/PageHeader";
import Spinner from "../components/Spinner";
import useGetTeacherClass from "../hooks/useGetTeacherClass";


const Classes = () => {
    const { data: classes, isLoading } = useGetTeacherClass('classes')
    return (
        <div>
            {
                isLoading ? <Spinner></Spinner>
                    :
                    <>
                        <PageHeader heading="Our Classess"></PageHeader>
                        <MyContainer>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-20">
                                {
                                    classes.map(singleClass => <ClassCard
                                        key={singleClass._id}
                                        singleClass={singleClass}
                                    >

                                    </ClassCard>)
                                }
                            </div>
                        </MyContainer>
                    </>
            }
        </div>
    );
};

export default Classes;