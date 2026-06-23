import { FriendContext } from "../../context/FriendContext";
import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie,
    Legend,
} from "recharts";


const ContactChart = () => {
    const { callList, massageList, videoList } = useContext(FriendContext);

    // shape your data into what recharts expects: array of objects
    const data = [
        { name: "Calls", count: callList?.length ?? 0, color: "#22c55e" },
        { name: "Messages", count: massageList?.length ?? 0, color: "#3b82f6" },
        { name: "Videos", count: videoList?.length ?? 0, color: "#a855f7" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#244D3F] mb-6">
                Contact Overview
            </h2>

            {/* BAR CHART */}
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barCategoryGap="40%">
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        allowDecimals={false}
                        tick={{ fontSize: 12, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        cursor={{ fill: "#f3f4f6" }}
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="bg-white border border-gray-100 shadow rounded-lg px-3 py-2 text-sm">
                                        <p className="font-semibold text-gray-700">
                                            {payload[0].payload.name}
                                        </p>
                                        <p className="text-gray-500">
                                            {payload[0].value} friends
                                        </p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                        {data.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ContactChart;