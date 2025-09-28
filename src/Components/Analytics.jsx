import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreVertical } from 'lucide-react';

const AnalyticalAICard = () => {
    const [darkMode] = useState(true);

    const analyticalData = [
        { day: 1, value: 15000 },
        { day: 5, value: 25000 },
        { day: 10, value: 45000 },
        { day: 15, value: 30000 },
        { day: 20, value: 35000 },
        { day: 25, value: 40000 },
        { day: 30, value: 45000 }
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={`p-3 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Day: {label}</p>
                    <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Value: {(payload[0].value / 1000).toFixed(1)}k</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={`rounded-xl p-6 ${darkMode ? 'bg-bgcolor' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="font-semibold text-base md:text-lg text-white">Analytical AI</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>September 2023</p>
                </div>
                <button className="p-1 rounded-full hover:bg-gray-700 transition-colors">
                    <MoreVertical size={16} className="text-gray-400" />
                </button>
            </div>

            <div className="h-70">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticalData}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={darkMode ? "#374151" : "#E5E7EB"}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="day"
                            tick={{ fill: darkMode ? "#9CA3AF" : "#4B5563" }}
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 35]}
                            ticks={[1, 5, 10, 15, 20, 25, 30]}
                        />
                        <YAxis
                            tick={{ fill: darkMode ? "#9CA3AF" : "#4B5563" }}
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 60000]}
                            ticks={[0, 15000, 30000, 45000, 60000]}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{
                                stroke: '#60A5FA',
                                strokeWidth: 2,
                                strokeDasharray: '3 3'
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#60A5FA"
                            strokeWidth={2}
                            dot={{
                                fill: "#60A5FA",
                                stroke: darkMode ? "#1F2937" : "#FFFFFF",
                                strokeWidth: 2,
                                r: 4
                            }}
                            activeDot={{
                                r: 6,
                                stroke: darkMode ? "#1F2937" : "#FFFFFF",
                                strokeWidth: 2
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticalAICard;