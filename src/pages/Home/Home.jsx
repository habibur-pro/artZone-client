import useScrollTop from "../../hooks/useScrollTop";
import Banner from "./Banner";
import ExperienceBoard from "./ExperienceBoard";
import TopClasses from "./TopClasses";
import TopTeacher from "./TopTeacher";


const Home = () => {
    useScrollTop()
    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <TopTeacher></TopTeacher>
            <ExperienceBoard></ExperienceBoard>
        </div>
    );
};

export default Home;