import { Navigate } from "react-router";
import { useIsAdmin } from "../api/auth";

type Props = {
  children?: React.ReactNode;
};

export const AuthRoute: React.FC<Props> = (props) => {
  const { isAdmin } = useIsAdmin();

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
};
