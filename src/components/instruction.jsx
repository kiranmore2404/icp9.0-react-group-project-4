import React from "react";

const AccountManagement = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Track and Go - Account Management</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create Your Track and Go Account</h2>
        <p className="mb-4">
          Creating an account is the first step towards accessing all our features. Follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open the Track and Go website.</li>
          <li>Click on the profile icon at the top right of the page.</li>
          <li>Click on 'Create Account'.</li>
          <li>Fill in the required details and click on 'Sign Up'.</li>
          <li>Verify your email address and mobile number via the OTP sent.</li>
          <li>Your Track and Go account will be successfully created.</li>
        </ol>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recover Your Track and Go Login</h2>
        <p className="mb-4">Forgot your login details? No problem. Follow these steps to recover your account:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open the Track and Go website.</li>
          <li>Click on the profile icon at the top right of the page.</li>
          <li>Click on 'Forgot Password'.</li>
          <li>Enter your registered email address or mobile number and click on 'Recover Account'.</li>
          <li>Follow the instructions sent to your email or mobile to reset your password.</li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Register as a New User on Track and Go</h2>
        <p className="mb-4">Here's how new users can register on Track and Go:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open the Track and Go website.</li>
          <li>Click on the profile icon at the top right of the page.</li>
          <li>Click on 'Create Account'.</li>
          <li>Fill in the required details and click on 'Sign Up'.</li>
          <li>Verify your email address and mobile number via the OTP sent.</li>
          <li>Your Track and Go account will be successfully created.</li>
        </ol>
      </div>
    </div>
  );
};

export default AccountManagement;
