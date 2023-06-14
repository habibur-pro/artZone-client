import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ tittle, subTittle }) => {
    return (
        <div className="text-center">
            <Fade cascade damping={0.1} className="text-primary font-serif text-2xl mb-3">
                {subTittle}
            </Fade>
            <h1 className="text-4xl text-secondary font-bold">{tittle}</h1>
        </div>

    );
};

export default SectionTitle;