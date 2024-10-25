import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";

const FetchComponent = () => {
  const [datas, setData] = useState<any>();

  // fetch method
  const fetchUserData = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/users"); // retrun JSON or XML
    data
      .then((res) => {
        console.log("res-1", res);
        console.log("res.json", res.json);
        return res.json(); // Convert response to JSON format
      })
      .then((data) => {
        console.log("data", data);
        setData(data);
      });
  };

  // async/await method
  const fetchUserAsyncAwaitData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("response", response);
      //   const data = response.json();
      const data = await response.json(); // we must use await for waiting convert response to json
      setData(data);
      console.log("data", data);
    } catch (err) {
      console.log("error", err);
    }
  };

  // using axios package
  const fetchUsersAxiosData = () => {
    // const response = axios.get("https://jsonplaceholder.typicode.com/users"); // return promise
    // console.log("response", response); //return promise only
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("response", res); //return promise only
      setData(res.data);
    });
  };

  //   useEffect(() => {
  // fetchUserData();
  // fetchUserAsyncAwaitData();
  // fetchUsersAxiosData();
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      setData("ragu");
    }, 4000);
  }, []);

  //cutom hook

  //   const { isLoading, fetchData, fetchError } = useFetch(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );

  const fetchQueryUserData = async () => {
    console.log("fetchQueryUserData called *************");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log("response called ^^^^^^^^^^^^^^^");

    return response.json(); // Return the parsed JSON
  };

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchQueryUserData,
    staleTime: 5000, // Time (in ms) before the data is considered stale
    refetchOnWindowFocus: true, // Refetches data when the window gains focus
  });

  return (
    <div>
      <h1>Fetch Experiments</h1>
      <h1>{isLoading && "Loading...."}</h1>

      {data &&
        data.map((data: any, index: number) => {
          return (
            <div key={index}>
              <p>
                name:<span>{data.name}</span>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default FetchComponent;
