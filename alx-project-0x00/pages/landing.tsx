import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button title="Small Rounded-sm" className="text-xs py-1 px-2 rounded-sm" />
          <Button title="Medium Rounded-md" className="text-base py-2 px-4 rounded-md" />
          <Button title="Large rounded-lg" className="text-lg py-3 px-6 rounded-full" />
        </div>
      </div>
      <Card />
    </div>
  );
};
export default Landing;