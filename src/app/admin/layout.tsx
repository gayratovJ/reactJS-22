"use client";

import { useAppSelector } from "@/redux/hooks";
import childrenType from "@/types/children";
import ROLES from "@/types/roles";
import { redirect } from "next/navigation";
import { Fragment, useEffect } from "react";

const AdminLayout = ({ children }: childrenType) => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated || ROLES.ADMIN !== role) {
      redirect("/login");
    }
  }, [isAuthenticated, role]);
  return (
    <Fragment>
      <header>Admin header</header>
      {children}
      <footer>Admin footer</footer>
    </Fragment>
  );
};

export default AdminLayout;
