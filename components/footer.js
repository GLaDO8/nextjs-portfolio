import React from "react";

export default function Footer() {
  return <footer className="">
    <>
      <div className="mx-auto mx-w-lg text-center text-gray-600">
      © Copyright 2020
      </div>
      <div className="w-full lg:flex lg:items-center lg:w-auto hidden">
        <div className="lg:flex justify-center flex-1 items-center">
          <div className="text-gray-600 font-semibold p-2">META</div>
          <div className="text-gray-600 font-semibold p-2">SOURCE</div>
        </div>
      </div>
    </>
  </footer>;
}

