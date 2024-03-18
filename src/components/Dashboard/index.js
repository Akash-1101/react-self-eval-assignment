import { Component } from "react";
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { AreaChart, Area } from 'recharts';
import CustomizedLabel from "../CustomizedLabel"
import CustomizedTooltip from "../CustomizedTooltip"
import "./index.css"

const data = [
        { year: 'Week1', value: 400},
        { year: 'Week2', value: 200 },
        { year: 'Week3', value: 300 },
        { year: 'Week4', value: 100 },
];
const data1 = [
    { name: 'Basic Tees', value: 55 },
    { name: 'Custom Short Pants', value: 31 },
    { name: 'Super Hoodies', value: 14 },
  ];
  const data2 = [
    { date: '2023-01', value: 1000 },
    { date: '2023-02', value: 500 },
    { date: '2023-03', value: 1200 },
    { date: '2023-04', value: 800 },
    { date: '2023-05', value: 1500 },
  ];
  
class Dashboard extends Component{
    render(){
        return (
            <div className="main-container">
                <div className="left-side-bar-container">
                    <h1>Board.</h1>
                    <div className="sidebar-container2">
                        <div>
                            <div className="dashboard-icon-container">
                                <img className="dashboard-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710772310/dashboard_icon_1_dim00w.png"/>
                                <p>Dashboard</p>
                            </div>
                            <div className="dashboard-icon-container">
                                <img className="dashboard-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710772408/Vector_6_wpxiyz.png"/>
                                <p>Transactions</p>
                            </div>
                            <div className="dashboard-icon-container">
                                <img className="dashboard-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710772570/schedule_icon_gpmjcc.png"/>
                                <p>Schedules</p>
                            </div>
                            <div className="dashboard-icon-container">
                                <img className="dashboard-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710772657/user_icon_wfrz2r.png"/>
                                <p>Users</p>
                            </div>
                            <div className="dashboard-icon-container">
                                <img className="dashboard-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710772693/setting_icon_n58ulp.png"/>
                                <p>Settings</p>
                            </div>

                        </div>
                        <div>
                            <p>Help</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <div className="main-con1">
                        <h1>Dashboard</h1>
                        <div className="main-con3">
                            <div className="main-con2">
                                <input className="searchInputEl" placeholder="Search..." type="search"/>
                                <img className="dashboard-img" src="https://tse1.mm.bing.net/th?id=OIP._RTO9yp1xH5aQA0vS7fpHAHaHW&pid=Api&rs=1&c=1&qlt=95&w=121&h=120"/>
                            </div>
                            <img className="dashboard-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710769453/Vector_5_zrzgci.png"/>
                            <img  className="dashboard-img" src="https://tse1.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122"/>
                        </div>

                    </div>
                    <div className="ak-1">
                        <div className="totalRevCon">
                            <img className="rev-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710768864/Vector_1_g77hqe.png"/>
                            <p className="p1">Total Revenues</p>
                            <p className="p1">$2,129,430</p>
                        </div>
                        <div className=" totalRevCon totaltransaction">
                        <img className="rev-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710769248/Vector_2_geuspv.png"/>
                            <p className="p1">Total Transactions</p>
                            <p className="p1">1,520</p>
                        </div>
                        <div className="totalRevCon totalLikes">
                        <img className="rev-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710769355/Vector_3_fyp2ry.png"/>
                            <p className="p1">Total Likes</p>
                            <p className="p1">9,721</p>
                        </div>
                        <div className="totalRevCon totalUser">
                        <img className="rev-img" src="https://res.cloudinary.com/donspddar/image/upload/v1710769406/Vector_4_qnxnja.png"/>
                            <p className="p1" >Total Users</p>
                            <p className="p1">892</p>
                        </div>
                    </div>
                    <div className="activies-container">
                        <h1>Activities</h1>
                        <p>May - June 2021</p>
                        <LineChart width={1000} height={150} data={data}>
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </div>
                    <div className="bottom-container">
                        <div className="btn-containers">
                        <h2>Top Products (May-June)</h2>
                        <PieChart width={600} height={300}>
                            <Pie
                            data={data1}
                            dataKey="value" // Key specifying the value for each slice
                            cx={300} // Center coordinates of the pie chart
                            cy={150}
                            outerRadius={100} // Radius of the pie chart
                            fill="#8884d8" // Pie chart fill color (adjustable)
                            label // Enable pie chart slice labels
                            >
                            {({ data }) => ( // Render customized labels for each slice
                                <Tooltip content={<CustomizedLabel data={data1} />} />
                            )}
                            </Pie>
                            <Legend /> // Enable chart legend
                        </PieChart>
                        </div>
                        <div className="btn-containers">
                            <h2 className="todayheading">Today’s schedule</h2>
                            <div className="btm-c2-1">
                               <p>Meeting with suppliers from Kuta Bali</p> 
                               <p> 14.00-15.00</p>
                                <p>at Sunset Road, Kuta, Bali </p>
                            </div>
                            <div className="btm-c2-2">
                            <p>Check operation at Giga Factory 1</p>
                            <p>18.00-20.00</p>
                            <p>at Central Jakarta </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard