"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function FakeApi() {
  const [fakeApiData, setFakeApiData] = useState<any[]>([]);

  const requestFakeApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setFakeApiData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex-col items-center p-7 rounded-2xl">
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="/home"
        >
          Voltar
        </Link>
        <br></br>
        <br></br>
        <button
          className="bg-green-500 p-2 inline-block text-white text-sm"
          onClick={(e) => requestFakeApi()}
        >
          Buscar dados Fake Api
        </button>
        <br></br>
        <br></br>
        <table>
          {!!fakeApiData &&
            fakeApiData.map((data: any) => (
              <tr>
                <td className="border border-slate-300">{data.name}</td>
                <td className="border border-slate-300 text-center">
                  {data.username}
                </td>
                <td className="border border-slate-300 text-center">
                  {data.email}
                </td>
                <td className="border border-slate-300 text-center">
                  {data.phone}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}
