import React, { useContext, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

import Chart from "react-apexcharts";

import "./RightSide.css";

import { RiHome3Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const IndustryRight = () => {
  
    const [state, setState] = useState({
        options: {
          colors: ["#E91E63", "#FF9800"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        },
        series: [
          {
            name: "People Born",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "People Died",
            data: [3, 60, 35, 80, 49, 70, 20, 81],
          },
        ],
      });
    
      return (
        <div className="RightSide">
          {/* <div className="navIcons">
            <Link to="/indBoard">
              <RiHome3Line
                style={{ width: "28px", height: "28px", color: "var(--indblack)" }}
              />
            </Link>
            <Link to="/mentorfilter">
              <BsPencilSquare
                style={{ width: "24px", height: "24px", color: "var(--indblack)" }}
              />
            </Link>
    
            <Link onClick={() => signOut(auth)}>
              <FiLogOut
                onClick={() => signOut(auth)}
                style={{ width: "24px", height: "24px", color: "var(--indblack)" }}
              />
            </Link>
            <Link to="/loginDash">
              <AiOutlineMessage
                style={{ width: "24px", height: "24px", color: "var(--indblack)" }}
              />
            </Link>
          </div> */}
    
          {/* <div className="lineChart">
            <div className="substitute">Who want's to climb the mountain?</div>
    
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="270"
              height="300"
            />
          </div>
    
          <div className="pychart">
            <div className="substitute">Who's up for some pizza?</div>
            <PieChart width={300} height={250}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#fca61f"
                label
              />
    
              <Tooltip />
            </PieChart>
          </div> */}
        </div>
      );
    };


export default IndustryRight