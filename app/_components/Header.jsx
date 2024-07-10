"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { PlusIcon } from "@radix-ui/react-icons";










import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-10 items-center">
        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />

        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            {" "}
            <li
              className={`'hover:text-primary font-medium text-sm cursor-pointer'  
        ${path == "/" && "text-primary"}`}
            >
              For Sale
            </li>
          </Link>

          <Link href={"/rent"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              For Rent
            </li>
          </Link>

          <Link href={"/agent"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>

      <div>
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            {" "}
            <li className="mt-2 hover:text-primary font-medium text-sm cursor-pointer">
              {/* <Badge>Indoor Maps</Badge> */}
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-2">
        {/* <Button className="flex gap-2">
          <PlusIcon className="h-5 w-5" /> Post an Ad
        </Button> */}

      {/* to display button if signed In */}
        {isSignedIn ? <UserButton /> : 
        <h1>Yo made it</h1>
        // <Button variant="outline">Login</Button>
        }
      </div>
    </div>
  );
}

export default Header;
