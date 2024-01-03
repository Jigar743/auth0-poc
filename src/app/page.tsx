"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function HomePage() {
  const Router = useRouter();

  useEffect(() => {
    (async () => {
      await fetch("/api/protected")
        .then((response) => response.json())
        .then((data) => console.log({ data }))
        .catch((err) => console.log(err));
      // for this api call you will get 401 => for user not authorized
    })();
  }, []);

  return (
    <>
      <button
        className="px-6 py-2 bg-slate-300 rounded-md"
        onClick={() => Router.push("/api/auth/login")}
      >
        Login
      </button>
      <button
        className="px-6 py-2 bg-slate-300 rounded-md"
        onClick={() => Router.push("/api/auth/signup")}
      >
        Signup
      </button>
    </>
  );
}

export default HomePage;
