import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navtwo = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex">
        <Button className="mr-6 p-4 bg-pink-400 mt-2">
          <Link to="/Share">Share</Link>
        </Button>
        <Button className="mr-6 p-5 bg-pink-400 mt-2">
          <Link to="/Rent">Rent</Link>
        </Button>
      </div>
      <div className="z-10 p-4 flex">
        <Link className="pr-4" to="/Welcome">Welcome</Link>
        <Link className="pr-4" to="/Safety">Safety</Link>
        <Link className="pr-4" to="/Adventure">Adventure</Link>
        <Link className="pr-4" to="/Community">Community</Link>
      </div>
    </div>
  );
};
