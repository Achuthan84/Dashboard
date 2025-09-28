import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../assets/assets';

const SalesReport = () => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-600 shadow-lg">
                    <p className="text-gray-300 text-sm">{label}</p>
                    <p className="text-white font-semibold">
                        ${payload[0].value.toLocaleString()}
                    </p>
                </div>
            );
        }
        return null;
    };
    return (
        <div className="bg-bgcolor p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-xl font-semibold text-white">Sales Report</h1>
                    <div className="flex space-x-4 mt-2">
                        <span className="text-gray-400 text-sm">Earnings</span>
                        <span className="text-gray-300 text-sm">Payments</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-300 text-sm mr-2">Week</span>
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <div className="h-70">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={0}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#374151"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            stroke="#9CA3AF"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#9CA3AF"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                            domain={[0, 18000]}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(156, 163, 175, 0.2)' }} />
                        <Bar
                            dataKey="earnings"
                            radius={[4, 4, 0, 0]}
                            fill="#6B7280"
                            fillOpacity={0.8}
                            activeBar={{ fill: '#F97316', fillOpacity: 1 }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesReport;