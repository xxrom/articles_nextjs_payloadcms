"use client";
import { useEffect, useState } from "react";

const getData = () => fetch("http://192.168.77.17:6066/api/articles/");

export const Articles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const g = async () => {
      const d = await getData().then((res) => res.json());

      console.log("res", d);

      setData(d.docs);
    };

    g();
  }, []);
  console.log("data", data);

  return (
    <div>
      <div>Articles</div>
      {data?.map(({ id }) => (
        <div>
          <div>{id}</div>
        </div>
      ))}
    </div>
  );
};
