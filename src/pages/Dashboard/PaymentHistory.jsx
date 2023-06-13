import { useQuery } from "react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment/moment";


const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payment history', user?._id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment_history/${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="border-spacing-3 border-secondary border-b">


                        <th className="text-base">#</th>
                        <th className="text-base">Amount</th>
                        <th className="text-base">Trancaction Id</th>
                        <th className="text-base">Email</th>
                        <th className="text-base">Time</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map((payment, index) => <tr
                            key={payment._id}

                        >
                            <td>{index + 1}</td>
                            <td>${payment?.amount}</td>
                            <td>{payment?.trancustionId}</td>
                            <td>{payment?.email}</td>

                            <td>{moment(payment?.time).format('MMMM Do YYYY, h:mm a')}</td>

                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default PaymentHistory;