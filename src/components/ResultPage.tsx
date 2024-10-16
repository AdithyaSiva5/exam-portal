import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface ResultCardProps {
    totalQuestions: number;
    correctAnswers: number;
    timeSpent: number;
}

export default function ResultCard({ totalQuestions, correctAnswers, timeSpent }: ResultCardProps) {
    const data = [
        { name: 'ACCA', value: 25 },
        { name: 'CMA USA', value: 16 },
        { name: 'CS', value: 16 },
        { name: 'CA', value: 22.5 },
        { name: 'CMA IND', value: 21.5 },
    ]

    const COLORS = ['#FF8042', '#FFA07A', '#FFBB28', '#FF6347', '#FFD700']

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-4xl p-4">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                    Your results based on your answers:
                </h1>
                <Card className="w-full bg-white dark:bg-gray-800">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700 dark:text-gray-300">You are most suitable for</CardTitle>
                        <CardDescription className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            Association of Chartered Certified Accountant (<span className="text-orange-500">ACCA</span>)
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Association of Chartered Certified Accountants are professionals who are responsible for the financial
                                    management of companies, financial reporting, auditing, taxation, and other financial aspects of the business. They
                                    have a global recognition and are highly sought after in the finance industry for their expertise. Join this elite group and
                                    make a global impact.
                                </p>
                                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                                    Total Questions Attempted: {totalQuestions}<br />
                                    Correct Answers: {correctAnswers}
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={100}
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
            </div>
        </div>
    )
}