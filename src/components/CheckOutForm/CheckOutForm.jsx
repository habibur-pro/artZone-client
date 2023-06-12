import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckOutForm.css'
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import app from '../../firebase/firebase.config';
const CheckOutForm = ({ bookingData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [paymentError, setPaymentError] = useState('')
    console.log('after minus', bookingData.seats - 1)

    useEffect(() => {

        if (bookingData.price) {
            axiosSecure.post('/create_payment_intent', {
                price: bookingData?.price
            })
                .then(res => {
                    console.log(res.data)
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
            console.log('[error]', error);
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
            console.log('[confirmError]', confirmError);
            setPaymentError(confirmError.message)
        } else {
            console.log('[paymentIntent]', paymentIntent);
        }
        if (paymentIntent.status === 'succeeded') {
            // save payment history 
            const paymentInfo = {
                amount: paymentIntent?.amount / 100,
                trancustionId: paymentIntent?.id,
                email: user?.email,
                time: new Date()
            }
            axiosSecure.post('/payment_history', {
                ...paymentInfo
            }).then(res => console.log('payment history status', res.data))

            // update available seat 
            // console.log('minus', bookingData.seats - 1)
            const updatedSeat = bookingData.seats - 1;
            axiosSecure.patch(`/classes/${bookingData?._id}`, {
                seats: updatedSeat
            })
                .then(res => console.log('update seats', res.data))
                .catch(error => console.log('patch error', error))
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
                <button type="submit" disabled={!stripe}>
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