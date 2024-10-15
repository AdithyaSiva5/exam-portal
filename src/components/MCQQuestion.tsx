"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface MCQQuestionProps {
    questionNumber: number
    question: string
    options: string[]
    timeRemaining: string
}

export default function MCQQuestion({ questionNumber, question, options, timeRemaining }: MCQQuestionProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    return (
        <div className="flex-1 p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">MCQ- {questionNumber.toString().padStart(2, '0')}</h2>
                <span className="text-lg font-medium">{timeRemaining}</span>
            </div>
            <div className="mb-8">
                <p className="text-lg font-medium">{question}</p>
            </div>
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-4">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                ))}
            </RadioGroup>
            <div className="flex justify-between mt-8">
                <Button variant="outline">Previous</Button>
                <Button variant="outline">Flag</Button>
                <Button>Next</Button>
            </div>
            <Button className="w-full mt-4" variant="destructive">End and Submit</Button>
        </div>
    )
}