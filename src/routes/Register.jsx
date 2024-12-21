import { useNavigate } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  //const navigate = useNavigate();

  //const handleSignUpComplete = () => {
  //  navigate("/profile-setup"); // Redirect to profile setup
  //};

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
