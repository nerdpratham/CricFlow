import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg p-8">
        
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white mb-2">
          Create your CricFlow account
        </h1>
        <p className="text-sm text-neutral-400 mb-6">
          Sign up to follow live scores and series
        </p>

        {/* Signup Form */}
        <form className="space-y-4">
          <InputField
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />

          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
          />

          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-semibold py-2 rounded transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-neutral-400 mt-6 text-center">
          Already have an account?{" "}
          <span className="text-emerald-500 hover:underline cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ label, type, placeholder }) => {
  return (
    <div>
      <label className="block text-sm text-neutral-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-neutral-950 border border-neutral-800 text-white px-3 py-2 rounded
                   focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
    </div>
  );
};

export default Signup;
