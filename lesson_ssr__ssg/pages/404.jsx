import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="h-full md:w-1/2 flex md:flex-row flex-col justify-center mx-auto mt-10 items-center">
      <div className="w-1/2 h-56 flex justify-center items-center  md:border-r-[1px] md:mr-9">
        <h1 className="text-6xl font-light">404</h1>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-medium">Page Not Found</h1>
        <p className="text-secondary500 font-light my-5">
          We're sorry. This Page is unknown or does not exist the page you are
          looking for
        </p>
        <Link href="../">
          <button
            className="bg-blue-600 py-3 px-4 text-white rounded-lg"
            variant="contained"
          >
            Back To Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
