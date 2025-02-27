"use client";

import { MutatingDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
}
