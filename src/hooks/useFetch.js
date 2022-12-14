import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET", token) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData),
    });
  };


  
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async ( fetchOptions ) => {
      setIsPending(true);
      setError(null);

      try {
        const response = await fetch(url, {...fetchOptions, signal: controller.signal});
        // console.log(response);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setIsPending(false);
        setError(null);
        setData(json);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Error!");
        }
      }
    };

    if (method === "GET") {
      fetchData();
    }
    if(method === "POST" && options){
      fetchData(options);
    }
    if(method === "POST" && token){
      setOptions({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": "bearer "+ token,
        },
        body: JSON.stringify(postData),
      });
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { data, isPending, error, postData };
};