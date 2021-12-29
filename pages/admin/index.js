import { useEffect } from "react";
import { useRouter } from "next/router";
const Admin = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("isAuthentication", true)) {
      router.push("/auth");
    }
  });
  return <div>admin</div>;
};

export default Admin;
