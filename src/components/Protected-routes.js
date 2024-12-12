import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ any, alreadyLogged }) => {
  if (!alreadyLogged) {
    return <Navigate to="/Login/" />;
  }
  return any;
};

export default ProtectedRoute;
