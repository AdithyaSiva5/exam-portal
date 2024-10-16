import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface ResultCardProps {
    totalQuestions: number;
    correctAnswers: number;
    timeSpent: number;
}

export default function ResultCard({ totalQuestions, correctAnswers, timeSpent }: ResultCardProps) {
    const [animationPercent, setAnimationPercent] = useState(0);

    const data = [
        { name: 'ACCA', value: 25 },
        { name: 'CMA USA', value: 16 },
        { name: 'CS', value: 16 },
        { name: 'CA', value: 22.5 },
        { name: 'CMA IND', value: 21.5 },
    ]

    const COLORS = ['#FF8042', '#FFA07A', '#FFBB28', '#FF6347', '#FFD700']

    useEffect(() => {
        const animationDuration = 1500;
        const intervalTime = 20;
        const steps = animationDuration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            setAnimationPercent(currentStep / steps);
            if (currentStep >= steps) {
                clearInterval(interval);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <Card className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader className="text-left">
                <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    You are most suitable for
                </CardDescription>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Association of Chartered Certified Accountant (<span className="text-orange-500">ACCA</span>)
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            ACCA professionals are responsible for financial management, reporting, auditing, and taxation. They have global recognition and are highly sought after in the finance industry.
                        </p>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                            Total Questions: {totalQuestions}<br />
                            Correct Answers: {correctAnswers}<br />
                            {/* Time Spent: {formatTime(timeSpent)} */}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    animationDuration={0}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80 * animationPercent}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="w-full text-center mt-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Button variant="default" className="bg-black text-white rounded-full hover:bg-gray-800">View course details</Button>
                        <Button variant="outline" className="rounded-full dark:text-gray-300 dark:border-gray-600">Consult Assistant</Button>
                        <Button variant="outline" className="rounded-full dark:text-gray-300 dark:border-gray-600">Copy URL</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}