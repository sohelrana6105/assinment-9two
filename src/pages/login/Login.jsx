import React, { use, useRef, useState } from "react";
import { Authcontext } from "../../authProvider/Authcontext";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const navigation = useNavigate();
  const { signInUser, signInGoogleUser, resetPasseword } = use(Authcontext);

  const [errorMessege, setErrorMessege] = useState("");
  const [succesMessege, setSuccesMessege] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const loginHanlder = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

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

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        setSuccesMessege("User Login succesfully !");
        toast.success("User Login succesfully !");
        return navigation(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessege(error.message);
      });
  };

  const SignInGoogleHandler = () => {
    signInGoogleUser()
      .then((result) => {
        console.log(result);

        setSuccesMessege("Sign In with Google succesfully");
        toast.success("Sign In with Google succesfully");
        return navigation(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(setErrorMessege(error.message));
      });
  };

  const resetPassewordHanler = () => {
    const email = emailRef.current.value;
    resetPasseword(email)
      .then(() => {
        setSuccesMessege("Password eamil reset send");
        return toast.success("Password eamil reset send");
      })
      .catch((error) => {
        console.log(error);
        toast.error(setErrorMessege(error.message));
      });
  };
  return (
    <>
      <div className="hero bg-base-200 mt-5 bg-[url('/log-bg.avif')] py-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body bg-[#4ea1e6]">
              <h1 className=" text-2xl font-bold">Login now</h1>
              <form
                onSubmit={loginHanlder}
                className="form onSubmit={loginHanlder} space-y-3"
              >
                <label className="label text-white font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label text-white font-bold">Password</label>
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
                <div>
                  <a
                    onClick={resetPassewordHanler}
                    className="link link-hover font-bold"
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>

              <div
                onClick={SignInGoogleHandler}
                className="flex justify-center items-center gap-2 mt-3 border-2 bg-black  rounded-2xl "
              >
                <span>
                  <FcGoogle size={20} />
                </span>{" "}
                <span className="text-xl text-white mb-2">
                  Sign In With Google
                </span>
              </div>

              <p className="font-bold">
                You are New in this website ? please{" "}
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : "text-blue-400"
                  }
                >
                  <button className="btn btn-primary"> Register</button>
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

export default Login;
