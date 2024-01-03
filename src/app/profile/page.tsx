"use client";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProfilePage() {
  const { user, isLoading } = useUser();
  const Router = useRouter();

  useEffect(() => {
    (async () => {
      await fetch("/api/protected")
        .then((response) => response.json())
        .then((data) => console.log({ data }))
        .catch((err) => console.log(err));
    })();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-2 w-[50%]">
      <span>{user?.email}</span>
      <span>{user?.name}</span>
      <Image
        className="rounded-full"
        alt="user_photo"
        src={user?.picture || ""}
        width={50}
        height={50}
      />
      <button
        className="px-6 py-2 bg-slate-300 rounded-md"
        onClick={() => Router.push("/api/auth/logout")}
      >
        Logout
      </button>
    </div>
  );
}

export default withPageAuthRequired(ProfilePage, { returnTo: "/" });
