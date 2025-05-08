import React, { use, useState } from "react";
import { Authcontext } from "../../authProvider/Authcontext";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile, user } = use(Authcontext);

  const [errorMessege, setErrorMessege] = useState("");
  const [succesMessege, setSuccesMessege] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const RegisterHanlder = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const UserPhotoUrl = e.target.inputurl.value;

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name, UserPhotoUrl);

    setErrorMessege("");
    setSuccesMessege("");

    if (!/\d/.test(password)) {
      return setErrorMessege("Must include at least one number.");
    }
    if (/[a-z]/.test(password) === false) {
      return setErrorMessege("Must include at least one lowercase letter.");
    }

    if (/[A-Z]/.test(password) === false) {
      return setErrorMessege("Must include at least one uppercase letter.");
    }

    if (password.length < 8) {
      return setErrorMessege("Must be at least 8 characters long.");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile(name, UserPhotoUrl)
          .then(() => {
            setSuccesMessege("User has created succesfully !");
            toast.success("User has created succesfully !");
          })
          .catch((error) => error.message);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessege(error.message);
      });
  };
  console.log(user);
  return (
    <>
      <div className="hero bg-base-200 mt-5 bg-[url('/reg-bg.webp')]">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body bg-[#2b5594]">
              <h1 className=" text-2xl font-bold text-white">Register now</h1>
              <form
                onSubmit={RegisterHanlder}
                className="form onSubmit={loginHanlder} space-y-3"
              >
                <label className="label text-white">User Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                />
                <label className="label text-white"> Upload Photo url</label>
                <input
                  type="url"
                  name="inputurl"
                  className="input"
                  placeholder="Photo Url"
                  required
                />

                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    type="button"
                    className="absolute top-[30%] right-[10%]"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </form>
              <p className="text-white">
                Already hav an account ? please{" "}
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : "text-blue-400"
                  }
                >
                  <button className="btn btn-primary"> Login</button>
                </NavLink>
              </p>
              {errorMessege && (
                <p className="text-red-500 font-bold"> {errorMessege} </p>
              )}
              {succesMessege && (
                <p className="text-green-500 ">{succesMessege} </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
