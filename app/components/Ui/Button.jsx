import React from "react";

export default function Button({ item }) {
  return (
    <>
      <div>
        <button className="bg-[#FF851F] text-white py-2 px-4 rounded-full">
          {item}
        </button>
      </div>
    </>
  );
}
