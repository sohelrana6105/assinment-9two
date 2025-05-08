import React, { use } from "react";
import { Authcontext } from "../../authProvider/Authcontext";

import { toast } from "react-toastify";

const UpdateUser = () => {
  const { user, updateUserProfile, setUser } = use(Authcontext);

  const UpdateUserHanler = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;

    if (name && url) {
      updateUserProfile(name, url)
        .then(() => {
          if ((name && url !== null) || "") {
            setUser({
              ...user,
              displayName: name,
              photoURL: url,
            });
          }

          toast.success("User Name and Url Updated sucessfully");
        })
        .catch((error) => console.log(error));
      return;
    }
    if (name) {
      updateUserProfile(name)
        .then(() => {
          if (name !== null || "") {
            setUser({
              ...user,
              displayName: name,
            });
          }

          console.log("User Name Updated sucessfully");
          toast.success("User Name Updated sucessfully");
        })
        .catch((error) => console.log(error));
      return;
    }
    if (url) {
      updateUserProfile(url)
        .then(() => {
          if (url !== null || "") {
            setUser({
              ...user,
              photoURL: url,
            });
          }

          toast.success("User  Url Updated sucessfully");
        })
        .catch((error) => console.log(error));
      return;
    }
  };
  return (
    <div>
      {user && (
        <p>
          {user.displayName} {user.email}
        </p>
      )}
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-4xl font-bold mb-6">Update User</h1>
              <form onSubmit={UpdateUserHanler}>
                <label className="label  text-xl font-bold ">Name </label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder=" User Update Name"
                />
                <label className="label text-xl font-bold">Photo Url</label>
                <input
                  type="url"
                  name="url"
                  className="input"
                  placeholder="Update User PhotoUrl"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      v
    </div>
  );
};

export default UpdateUser;
