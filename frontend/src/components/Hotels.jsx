import Axios from "axios";
import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";
import "../App.css";

export const Hotels = () => {
  const { INPUT, setINPUT } = useContext(AppContext);
  const { data, isLoading } = useQuery({
    queryKey: ["NAME"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `${import.meta.env.VITE_API_URL}&s=${INPUT}`
        );
        // console.log(response.data.Search);
        return response.data.Search;
      } catch (error) {
        // console.error("Error:", error);
        throw error;
      }
    },
  });

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="pt-80">
            <progress className="progress  w-90"></progress>
          </div>
        ) : (
          <div className=" relative mt-14 mx-4 sm:mx-10 lg:mx-20 xl:mx-32 2xl:mx-48 pb-12 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4">
              {data?.map((movie, key) => (
                <Card movie={movie} key={key} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
