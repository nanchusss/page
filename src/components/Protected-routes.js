import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, alreadyLogged }) => {
  if (!alreadyLogged) {
    return <Navigate to="/Login/" />;
  }
  return children;
};

export default ProtectedRoute;
