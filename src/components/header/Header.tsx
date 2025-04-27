"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-4 ">
        <a href="/dashboard">Dashboard</a>
        <ul className="flex gap-8">
          <li>
            <a href="/all-ethicity">All Ethnicities</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            
            <Button
              type="button"
              className="w-full "
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
