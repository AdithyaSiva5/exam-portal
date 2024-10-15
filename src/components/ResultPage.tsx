"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell } from 'recharts';

interface ResultPageProps {
    totalQuestions: number;
    correctAnswers: number;
    timeSpent: number;
}

export default function ResultPage({ totalQuestions, correctAnswers, timeSpent }: ResultPageProps) {
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes and ${remainingSeconds} seconds`;
    };

    const score = Math.round((correctAnswers / totalQuestions) * 100);

    // Calculate percentages for the pie chart
    const data = [
        { name: 'ACCA', value: score },
        { name: 'CMA USA', value: Math.max(0, Math.min(100 - score, 35)) },
        { name: 'CIA', value: Math.max(0, Math.min(100 - score - 35, 18)) },
        { name: 'CMA IND', value: Math.max(0, 100 - score - 35 - 18) },
    ];

    const COLORS = ['#FF8042', '#FFBB28', '#00C49F', '#0088FE'];

    return (
        <div className="flex-1 p-4 md:p-6 bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">Your results based on your answers:</h1>
                <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2 dark:text-white">You are most suitable for</h2>
                        <h3 className="text-2xl font-bold mb-4 dark:text-white">
                            Association of Chartered Certified Accountant (<span className="text-orange-500">ACCA</span>)
                        </h3>
                        <p className="text-sm dark:text-gray-300 mb-4">
                            Association of Chartered Certified Accountants are professionals who are responsible for the financial
                            management of companies, financial reporting, auditing, taxation, and other financial aspects of the business. They
                            play a crucial role in business decisions and are valued in the finance industry for their expertise. Join this elite group and
                            make a global impact.
                        </p>
                        <div className="flex space-x-2">
                            <Button variant="default">View course details</Button>
                            <Button variant="outline">Consult Assistant</Button>
                            <Button variant="outline">Copy URL</Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <PieChart width={200} height={200}>
                            <Pie
                                data={data}
                                cx={100}
                                cy={100}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
                <div className="mt-6 text-sm dark:text-gray-300">
                    <p>Total Questions: {totalQuestions}</p>
                    <p>Correct Answers: {correctAnswers}</p>
                    <p>Score: {score}%</p>
                    <p>Time Spent: {formatTime(timeSpent)}</p>
                </div>
            </div>
        </div>
    );
}