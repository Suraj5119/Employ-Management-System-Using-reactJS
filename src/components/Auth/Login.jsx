import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2  border-blue-800 rounded-xl p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-blue-800 py-2 px-6 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-blue-800 py-2 px-6 rounded-full text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-4"
            type="password"
            placeholder="Enter password"
          />
          <button
            required
            className="border-none bg-blue-800 py-2 px-24 rounded-full text-xl  outline-none bg-transparent placeholder:text-white mt-5"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
