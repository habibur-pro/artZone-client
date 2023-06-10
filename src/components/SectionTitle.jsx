
const SectionTitle = ({ tittle, subTittle }) => {
    return (
        <div className="text-center">
            <h3 className="text-primary font-serif text-2xl mb-3">{subTittle}</h3>
            <h1 className="text-4xl text-secondary font-bold">{tittle}</h1>
        </div>
    );
};

export default SectionTitle;