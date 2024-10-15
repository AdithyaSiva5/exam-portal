"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Flag, ChevronLeft, ChevronRight } from 'lucide-react'

interface MCQQuestionProps {
    questionNumber: number
    question: string
    options: string[]
}

export default function MCQQuestion({ questionNumber, question, options }: MCQQuestionProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    return (
        <div className="flex-1 p-4 md:p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">MCQ- {questionNumber.toString().padStart(2, '0')}</h2>
            <div className="mb-6">
                <p className="text-lg font-medium dark:text-gray-200">{question}</p>
            </div>
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-4">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="dark:text-gray-300">{option}</Label>
                    </div>
                ))}
            </RadioGroup>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
                <Button variant="outline" className="w-full md:w-auto order-3 md:order-1">
                    End and Submit
                </Button>
                <div className="flex space-x-4 order-2">
                    <Button variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Flag className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}