import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  console.log("********use fetch called *************");

  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    console.log("HOOOK use EFFECT ********** ");

    const fetchUserData = async () => {
      axios
        .get(url)
        .then((response) => {
          setFetchData(response.data);
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
          console.log("error", error);

          setIsLoading(false);
          setFetchError(error.message);
        });
    };

    fetchUserData();
  }, [url]);

  return {
    isLoading,
    fetchData,
    fetchError,
  };
};
