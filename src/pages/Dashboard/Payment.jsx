import { useParams } from "react-router";


const Payment = () => {
    const { id } = useParams()

    return (
        <div>
            <h3>Payment</h3>
        </div>
    );
};

export default Payment;