import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/abhi-navz")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(data);
//         setData(res);
//       });
//   }, []);



  return (
    <>
      <div className="flex flex-col items-center bg-gray-200 shadow-lg">
        <img
          className="mt-8 rounded-full"
          src={data.avatar_url}
          alt="git-profile-pic"
          width={300}
        />
        <div className="text-center bg-slate-300 px-3 py-4 rounded-lg mx-3 text-red-500 text-xl w-2/3  m-10 shadow-lg">
          <p className="p-1">
            Name: <span className="text-gray-800 ">{data.name}</span>
          </p>
          <span className="text-gray-800 underlin">{data.bio}</span>
          <p className="p-1">
            Username: <span className="text-gray-800 ">{data.login}</span>
          </p>
          <p className="p-1">
            Followers: <span className="text-gray-800 ">{data.followers}</span>
          </p>
          <p className="p-1"></p>
          <p className="p-1">
            No of Repos:{" "}
            <span className="text-gray-800 ">{data.public_repos}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/abhi-navz");

  return response.json();
};
