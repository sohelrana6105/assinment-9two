import { use } from "react";
import { Authcontext } from "../authProvider/Authcontext";
import { Navigate, useLocation } from "react-router";

const Privateroutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = use(Authcontext);
  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default Privateroutes;
