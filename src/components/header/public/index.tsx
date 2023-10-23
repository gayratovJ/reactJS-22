"use client";

import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";

const PublicHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router);
  console.log(pathName);

  return (
    <header className="flex justify-between" style={{
      
    }}>
      <div className="logo">
        <h1>E-commerce</h1>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </ul>
    </header>
  );
};

export default PublicHeader;
