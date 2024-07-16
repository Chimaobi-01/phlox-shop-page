// Checkout.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShareProduct from '../../components/ShareProduct';
import Header from '../../components/Header';
import cartLogo from '../../assets/cart.svg'
import { useCart } from '../../services/CartContext';


const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const { cart } = useCart();
    const totalPrice = cart.reduce((prev, curr) =>{
        let quantity = curr.quantity
        let price = curr.current_price[0].NGN[0] ?? curr.current_price

        return prev + (quantity * price)
    },0)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form data
        if (Object.values(formData).some((field) => field === '')) {
            toast.error('Please fill in all fields');
            return;
        }

        // Process the payment (this is where you'd integrate with a payment processor)
        toast.success('Payment successful!');

        // Reset the form
        setFormData({
            name: '',
            email: '',
            address: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
        });
    };

    return (
        <section className="font-Montserrat section-padding min-h-[calc(100vh-200px)] flex flex-col gap-6 xl:pt-10">
            <Header />

            <div className="container mx-auto flex flex-wrap-reverse gap-10 sm:gap-0 sm:flex-nowrap">
                <form onSubmit={handleSubmit} className='flex-[50%] flex justify-center'>
                    <div className='md:w-5/6 flex-col gap-10 flex'>
                        <fieldset className='flex-col gap-2.5 flex'>
                            <legend className='font-medium leading-8 capitalize mb-4'>billing details</legend>
                            <label className='flex-col flex'>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='flex-col flex'>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='flex-col flex'>
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </label>
                        </fieldset>
                        <fieldset className='flex-col gap-2.5 flex'>
                            <legend className='font-medium leading-8 capitalize mb-4'>payment method</legend>
                            <label className='flex-col flex'>
                                Card Number:
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                />
                            </label>
                            <div className=''>
                                <label className=' flex-col flex'>
                                    Expiry Date:
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label className=' flex-col flex'>
                                    CVV:
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className='flex-col gap-3 flex'>
                                <label className=' text-sm'>
                                    <input type="checkbox" className=' me-2' />
                                    By clicking the button you agree to the <span className="underline">Terms and Conditions</span>
                                </label>
                                <button className='py-4 rounded bg-green-400 text-white font-medium capitalize'
                                    type="submit">Place Order</button>
                            </div>
                        </fieldset>
                    </div>
                </form>

                <div className="cart-summary flex-[50%] flex justify-center">
                    <article className='w-full sm:w-5/6 border border-gray-400 rounded h-max'>
                        <div className='p-4'>
                            <h5 className='font-semibold capitalize flex items-center gap-3 mb-4'>
                                <img src={cartLogo} alt="" />
                                cart summary
                            </h5>
                            <ul>
                                {
                                    cart.map(item => (
                                        <li key={item.id} className='flex items-center justify-between pb-3 border-b border-gray-200 gap-4'>
                                            <div className='flex-col flex gap-2'>
                                                <h6 className='font-semibold capitalize'><span className='font-bold text-lg'>{item.quantity} x</span> {item.name}</h6>
                                                <p className='text-gray-500 text-sm line-clamp-4'>{item.description}</p>
                                            </div>
                                            <span>{
                                            `${(item.quantity * (item.current_price[0].NGN[0] ?? item.current_price)).toLocaleString()}`
                                            }</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <footer className='border-t border-gray-200 p-4'>
                            <p className='text-right'>sub total: <span className='font-semibold'>NGN{totalPrice.toLocaleString()}</span></p>
                        </footer>
                    </article>
                </div>
            </div>
            <ToastContainer />

        </section>
    );
};

export default Checkout;
