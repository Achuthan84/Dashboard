import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MoreVertical } from 'lucide-react';

const Activity = () => {
    const [darkMode] = useState(true);

    const activityData = [
        { name: 'Transactions', value: 452, color: '#60A5FA' },
        { name: 'Payouts', value: 412, color: '#F59E0B' },
        { name: 'Sales', value: 715, color: '#10B981' },
        { name: 'Reports', value: 128, color: '#8B5CF6' }
    ];

    const COLORS = ['#60A5FA', '#F59E0B', '#10B981', '#8B5CF6'];

    return (
        <div className={`rounded-xl p-6 ${darkMode ? 'bg-bgcolor' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-base md:text-lg">Activity</h3>
                <button className="p-1 rounded-full hover:bg-gray-700 transition-colors">
                    <MoreVertical size={16} className="text-gray-400" />
                </button>
            </div>

            <div className="flex items-center justify-center h-70 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-2xl font-bold">+13%</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Since last week</div>
                    </div>
                </div>

                <PieChart width={200} height={200}>
                    <Pie
                        data={activityData}
                        cx={100}
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {activityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                {activityData.map((item, index) => (
                    <div key={item.name} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${COLORS[index % COLORS.length]}`}></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {item.name}
                            </div>
                            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activity;