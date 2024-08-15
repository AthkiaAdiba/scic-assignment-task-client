import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const { login } = useContext(AuthContext);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await login({ email, pin });
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div className="mt-3 pt-10 pb-10 dark:bg-black">
            <div className="w-full font-forum shadow-lg mx-auto max-w-md p-8 space-y-3 rounded-none bg-base-100 dark:bg-black text-gray-100">
                <h1 className="text-2xl font-bold text-center text-black dark:text-white">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 text-lg">
                        <label className="block text-black font-medium text-xl dark:text-white">Email</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" required />
                    </div>

                    <div className="space-y-1 text-lg">
                        <label className="block text-black font-medium text-xl dark:text-white">Pin</label>
                        <input type="password" placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" required />
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm bg-[#FF720F] text-white text-lg">Login</button>
                </form>
                <p className="text-lg font-normal text-center sm:px-6 text-black dark:text-white">Already have an account?
                    <Link to='/registration' className="underline ml-2 font-semibold text-[#FF720F]">Registration</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;