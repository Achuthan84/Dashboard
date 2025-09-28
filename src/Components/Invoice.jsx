import React from 'react';
import { assets, INVOICES } from '../assets/assets';

const StatusChip = ({ status }) => {
    let bg, color;
    if (status === 'Paid') {
        bg = 'var(--color-STATUS_PAID_BG)';
        color = 'var(--color-TEXT_PRIMARY)';
    } else {
        bg = 'var(--color-STATUS_UNPAID_BG)';
        color = 'var(--color-ORANGE_HIGHLIGHT)';
    }

    return (
        <span className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: bg, color }}> {status}</span>
    );
};

export default function App() {
    return (
        <div
            className="p-6 rounded-xl shadow-lg w-full max-w-6xl mx-auto font-sans"
            style={{ backgroundColor: 'var(--color-bgcolor)', color: 'var(--color-TEXT_PRIMARY)' }}
        >
            <div className="flex justify-between text-white items-center mb-5">
                <div className="flex flex-col">
                    <h1
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-TEXT_PRIMARY)' }}
                    >
                        Invoices
                    </h1>
                    <p
                        className="text-sm mt-0.5"
                        style={{ color: 'var(--color-TEXT_SECONDARY)' }}
                    >
                        3,251 invoices
                    </p>
                </div>
                <div
                    className="flex items-center space-x-4 text-sm"
                    style={{ color: 'var(--color-TEXT_SECONDARY)' }}
                >
                    <img src={assets.adjust} className="w-6" alt="adjust" />
                    <h1 className="flex gap-2">
                        <img src={assets.report} className="w-5" alt="report" /> Report
                    </h1>
                </div>
            </div>
            <div className="overflow-x-auto text-white rounded-xl">
                <table className="min-w-full text-left text-sm whitespace-nowrap border-collapse">
                    <thead
                        style={{ color: 'var(--color-TEXT_SECONDARY)' }}
                        className="border-b border-gray-700/50"
                    >
                        <tr>
                            <th className="py-3 px-4 font-normal">Customer name</th>
                            <th className="py-3 px-4 font-normal hidden sm:table-cell">Date</th>
                            <th className="py-3 px-4 font-normal">Amount</th>
                            <th className="py-3 px-4 font-normal hidden lg:table-cell">
                                Product ID
                            </th>
                            <th className="py-3 px-4 font-normal">Status</th>
                            <th className="py-3 px-4 font-normal">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {INVOICES.map((invoice) => (
                            <tr
                                key={invoice.id}
                                className="border-b border-gray-700/50 transition-colors"
                                style={{
                                    color: 'var(--color-TEXT_PRIMARY)',
                                }}
                                onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    'var(--color-BG_HOVER)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = 'transparent')
                                }
                            >
                                <td className="py-3 px-4">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={invoice.user}
                                            className="w-8 h-8 rounded-full object-cover"
                                            alt="user"
                                        />
                                        <span className="font-medium">{invoice.customer.name}</span>
                                    </div>
                                </td>
                                <td
                                    className="py-3 px-4 hidden sm:table-cell"
                                    style={{ color: 'var(--color-TEXT_SECONDARY)' }}
                                >
                                    {invoice.date}
                                </td>
                                <td className="py-3 px-4 font-medium">${invoice.amount}</td>
                                <td
                                    className="py-3 px-4 hidden lg:table-cell"
                                    style={{ color: 'var(--color-TEXT_SECONDARY)' }}
                                >
                                    {invoice.productId}
                                </td>
                                <td className="py-3 px-4">
                                    <StatusChip status={invoice.status} />
                                </td>
                                <td className="py-3 px-4">
                                    <button className="text-sm font-medium transition-colors px-2 py-1 rounded-md" style={{ color: 'var(--color-TEXT_SECONDARY)' }}> More </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
