"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Overview() {
    const [selectedQuestion, setSelectedQuestion] = useState(1)
    const totalQuestions = 20

    return (
        <div className="w-64 bg-white p-4 border-r">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-5 gap-2">
                {[...Array(totalQuestions)].map((_, index) => (
                    <Button
                        key={index}
                        variant={selectedQuestion === index + 1 ? "default" : "outline"}
                        className="w-10 h-10"
                        onClick={() => setSelectedQuestion(index + 1)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
        </div>
    )
}