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
import { handleLogin } from "@/utils/action";
import { useUser } from "@/Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (user || storedUser) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormContainer onSubmit={(e) => handleLogin(e, login, navigate)}>
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
              <Button>Login</Button>
            </FormContainer>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
