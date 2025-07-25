import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormContainer from "../Form/FormContainer";
import FormInput from "../Form/FormInput";
import { handleRegister } from "@/utils/action";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/Context/UserContext";
const Register = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (user || storedUser) {
      navigate("/task", { replace: true });
    }
  }, [user, navigate]);
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sign up</CardTitle>
            <CardDescription>
              Enter your details below to signup to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormContainer onSubmit={(e) => handleRegister(e, navigate)}>
              <FormInput
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                label="First Name"
              />
              <FormInput
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                label="Last Name"
              />
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                label="Email"
              />
              <FormInput
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                label="Password"
              />
              <Button>Sign Up</Button>
            </FormContainer>
            <div className="mt-4 text-center text-sm">
               Have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
