import React, {useState } from 'react';
import Image from 'next/image';
import InputField from '../components/InputField'

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };

    return (
       <div className="flex h-screen">
    {/* Left side background section */}
    <div className="hidden md:flex flex-1 bg-login-background"></div>

    {/* Right side form section */}
    <div className="flex flex-1 flex-col bg-white pt-9 pr-10 md:w-1/2">
        <div className="w-full h-screen flex flex-col">
            {/* Logo Section */}
            <div className="flex justify-end">
                <Image
                    src="/images/logo.svg"
                    alt="Express Capital Financing Logo"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                />
            </div>

            {/* Form Container */}
            <div className="max-w-md w-full mx-auto flex flex-col justify-center h-full px-6 sm:px-0">
                <h1 className="font-inter font-extrabold text-4xl sm:text-5xl leading-[45px] sm:leading-[66px] tracking-tight text-primary">
                    Welcome to Express Capital Financing
                </h1>

                {/* Email Input */}
                <div className="mt-10">
                    <InputField
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="w-full py-2 font-inter font-semibold text-2xl leading-8 border-b border-[#121212] focus:outline-none focus:border-green-500 placeholder-secondary text-primary"
                        value={email}
                        onChange={handleEmailChange}
                        aria-label="Email Address"
                    />
                </div>

                {/* Password Input */}
                <div className="mt-6">
                    <InputField
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        className="w-full py-2 font-inter font-semibold text-2xl leading-8 border-b border-[#121212] focus:outline-none focus:border-green-500 placeholder-secondary text-primary"
                        value={password}
                        onChange={handlePasswordChange}
                        aria-label="Password"
                    />
                </div>

                {/* Sign Up Button */}
                <button
                    className="w-full sm:w-2/3 mt-8 bg-buttonprimary font-inter font-semibold text-lg leading-6 text-white py-4 rounded-full hover:bg-green-700 transition"
                    type="button"
                >
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</div>
    );
}
export default SignUp;
