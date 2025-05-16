"use client";
import { useState } from "react";
const RegisterComponent: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [nomorHp, setNomorHp] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPasword] = useState();

  return (
    <main>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="flex justify-around items-center w-full">
          <div className="bg-white border-1 p-6">
            <div className="flex justify-center items-center">
              <h1 className="font-bold">Register</h1>
            </div>
            <div className="my-10">
              <div className="border-2 rounded-lg mb-2">
                <input
                  type="text"
                  className="outline-none p-1"
                  placeholder="Email/Username"
                />
              </div>
              <div className="border-2 rounded-lg mt-2">
                <input
                  type="text"
                  className=" outline-none p-1"
                  placeholder="NomorHp"
                />
              </div>

              <div className="border-2 rounded-lg mt-2">
                <input
                  type="text"
                  className=" outline-none p-1"
                  placeholder="Username"
                />
              </div>

              <div className="border-2 rounded-lg mt-2">
                <input
                  type="text"
                  className=" outline-none p-1"
                  placeholder="Password"
                />
              </div>

              <div className="border-2 rounded-lg mt-2">
                <input
                  type="text"
                  className=" outline-none p-1"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex justify-end">
                <span className="text-end">Forgot Password</span>
              </div>
            </div>

            <div className="border-2 rounded-full bg-[#F68300] flex justify-center items-center p-2 ">
              <button className="text-black font-bold">Register</button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <h1>
                Don’t have account?
                <span className="text-[#F68300]">Sign In</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 ">
            <h1>Kanan</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterComponent;
