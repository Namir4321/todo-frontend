import { request } from "./Request";

export const handleLogin = async (e, login, navigate) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  try {
    const res = await request.post("/auth/login", data);
    // console.log(res);
    if (res.data) {
      console.log(login);
      login(res.data.user);
      navigate("/", { replace: true });
      console.log(res)
    } else {
      console.error("Invalid login response:", res.data);
    }
  } catch (err) {
    console.error("Login failed:", err);
  }
};

export const handleRegister = async (e,navigate) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  const res = await request.post("/auth/register", data);
  console.log(res);
   navigate("/", { replace: true });
};

