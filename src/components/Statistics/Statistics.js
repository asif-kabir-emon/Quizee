import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (
    <div className=" mt-28">
      <h1 className="text-xl text-center mb-5 ">
        Total Number of questions in quiz based on evey topic
      </h1>
      <div className="flex justify-center">
        <BarChart
          width={380}
          height={230}
          data={topics}
          barGap={5}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={40} fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
