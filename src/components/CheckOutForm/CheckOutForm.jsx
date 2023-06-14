import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckOutForm.css'
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
const CheckOutForm = ({ bookingData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const naviage = useNavigate()
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [paymentError, setPaymentError] = useState('')


    useEffect(() => {

        if (bookingData.price) {
            axiosSecure.post('/create_payment_intent', {
                price: bookingData?.price
            })
                .then(res => {

                    setClientSecret(res.data?.client_secret)
                })
        }

    }, [bookingData.price, axiosSecure])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            setPaymentError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirmcard payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonimous',

                    },
                },
            },
        );
        if (confirmError) {

            setPaymentError(confirmError.message)
        } else {
            console.log('[paymentIntent]', paymentIntent);
        }
        if (paymentIntent.status === 'succeeded') {
            // save payment history 
            // update seats,
            //update enroled count
            // delete selected items
            // save to enloled class
            //  update teacher student count
            const paymentInfo = {
                payment_history: {
                    amount: paymentIntent?.amount / 100,
                    trancustionId: paymentIntent?.id,
                    email: user?.email,
                    time: new Date()
                },

                enroled_info: {
                    email: user?.email,
                    image: bookingData?.image,
                    classId: bookingData?.classId,
                    className: bookingData?.name,
                    price: bookingData?.price,
                    teacher_email: bookingData?.teacher_email,
                    teacher_name: bookingData?.teacher_name,
                    enroled_date: new Date(),
                    status: 'paid'
                },
                update_class: {
                    classId: bookingData?.classId,
                    seats: bookingData?.seats - 1,
                    enroled: bookingData?.enroled + 1,
                },
                selectedId: bookingData?._id,
            }
            axiosSecure.post('/payment', {
                ...paymentInfo
            }).then(res => {
                if (res?.data?.deletedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Enrole Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    naviage('/dashboard/my_enroled_class')
                }
            })
                .catch(error => setPaymentError(error.message))

            // update available seat 
            // console.log('minus', bookingData.seats - 1)

        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button id='btn-pay' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p className='text-red-500 text-'>{paymentError}</p>
            }
        </>
    );

};

export default CheckOutForm;