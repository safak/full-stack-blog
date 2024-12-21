import { SignUp } from "@clerk/clerk-react";

const Register = () => {

  return (
    <div className="flex items-center justify-center mt-12">
      <SignUp 
        signInUrl="login" 
        redirectUrl="/profile-setup" // Redirect after signup

      />
    </div>
  );
};

export default Register;
