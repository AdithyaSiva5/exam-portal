"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Overview() {
    const [selectedQuestion, setSelectedQuestion] = useState(1)
    const totalQuestions = 20

    return (
        <div className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold dark:text-white">Overview</h2>
                <span className="text-sm font-medium dark:text-gray-300">00:59:58</span>
            </div>
            <div className="grid grid-cols-8 md:grid-cols-5 gap-2">
                {[...Array(totalQuestions)].map((_, index) => (
                    <Button
                        key={index}
                        variant={selectedQuestion === index + 1 ? "default" : "outline"}
                        className="w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm"
                        onClick={() => setSelectedQuestion(index + 1)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
        </div>
    )
}