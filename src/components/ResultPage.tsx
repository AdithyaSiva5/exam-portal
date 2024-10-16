'use client'

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
        { name: 'CMA USA', value: 16.7 },
        { name: 'CS', value: 16 },
        { name: 'CA', value: 22.5 },
        { name: 'CMA IND', value: 21.5 },
    ]

    const COLORS = ['#FF8042', '#FFA07A', '#FFBB28', '#FF6347', '#FFD700']

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">
                    Your results based on your answers:
                </h1>
            </div>
            <Card className="w-full max-w-3xl   bg-white">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-700">You are most suitable for</CardTitle>
                    <CardDescription className="text-2xl font-bold text-gray-800">
                        Association of Chartered Certified Accountant (<span className="text-orange-500">ACCA</span>)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
                            <p className="text-sm text-gray-600 mb-4">
                                Association of Chartered Certified Accountants are professionals who are responsible for the financial
                                management of companies, financial reporting, auditing, taxation, and other financial aspects of the business. They
                                have a global recognition and are highly sought after in the finance industry for their expertise. Join this elite group and
                                make a global impact.<br /><br />

                                <b>Total Questions Attempted: {totalQuestions}<br />
                                    Correct Answers :  {correctAnswers}</b>
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <Button variant="default" className="bg-black text-white rounded-full hover:bg-gray-800">View course details</Button>
                                <Button variant="outline" className="rounded-full">Consult Assistant</Button>
                                <Button variant="outline" className="rounded-full">Copy URL</Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
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
                </CardContent>
            </Card>
        </div>
    )
}
