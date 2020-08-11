import useForm from "../utils/useForm";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const RegisterForm = () => {
  const [values, setValues, handleChange] = useForm();
  const router = useRouter();

  const register = (e) => {
    e.preventDefault();
    axios.post("/api/users/register", values).then((res) => {
      Cookies.set("token", res.data.token);
      router.push("/");
    });
  };

  return (
    <form onSubmit={register} className="flex justify-center flex-col p-12">
      First name
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={values ? values.firstName : ""}
        className="border-2 border-black"
      />
      <br />
      Last Name
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={values ? values.lastName : ""}
        className="border-2 border-black"
      />
      <br />
      Email
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={values ? values.email : ""}
        className="border-2 border-black"
      />
      <br />
      Password
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={values ? values.password : ""}
        className="border-2 border-black"
      />
      <br />
      Profile Image
      <input
        type="url"
        name="profileImage"
        onChange={handleChange}
        value={values ? values.profileImage : ""}
        className="border-2 border-black"
      />
      <br />
      <input type="submit" value="Register" className="border-2 border-black" />
    </form>
  );
};

export default RegisterForm;
