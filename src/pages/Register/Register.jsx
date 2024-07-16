import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(!pin === 5){
        //     return setMessage("Pin should be 5 Digit")
        // }

        try {
            await register({ name, pin, mobileNumber, email });
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div className="mt-3 pt-10 pb-10 dark:bg-black">
            <div className="w-full font-forum shadow-lg mx-auto max-w-md p-8 space-y-3 rounded-none bg-base-100 dark:bg-black text-gray-100">
                <h1 className="text-2xl font-bold text-center text-black dark:text-white">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 text-lg">
                        <label className="block text-black font-medium text-xl dark:text-white">Full Name</label>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" required />
                    </div>

                    <div className="space-y-1 text-lg">
                        <label className="block text-black font-medium text-xl dark:text-white">Email Address</label>
                        <input type="text" placeholder="5-digit PIN" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" required />
                    </div>

                    <div className="space-y-1 text-lg">
                        <label className="block text-black font-medium text-xl dark:text-white">Image URL</label>
                        <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" required />
                    </div>

                    <div className="relative space-y-1 text-lg">
                        <label className="block text-black font-medium text-xl dark:text-white">Password</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" required />
                    </div>

                    <button type="submit" className="block w-full p-3 text-center rounded-sm bg-[#FF720F] text-white text-lg">Register</button>
                </form>
                {message && <p className='text-black'>{message}</p>}
                <p className="text-lg font-normal text-center sm:px-6 text-black dark:text-white">Already have an account?
                    <Link to='login' className="underline ml-2 font-semibold text-[#FF720F]">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
