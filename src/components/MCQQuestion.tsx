'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Flag, ChevronLeft, ChevronRight } from 'lucide-react'

interface MCQQuestionProps {
    questionNumber: number
    question: string
    options: Array<{ id: string; option: string }>
    onNextQuestion: () => void
    onPreviousQuestion: () => void
    onFlagQuestion: () => void
    isFlagged: boolean
    onSubmit: () => void
    totalQuestions: number
    selectedOption: string | null
    onAnswerSelect: (optionId: string | null) => void
    timeRemaining: string
}

export default function Component({
    questionNumber,
    question,
    options,
    onNextQuestion,
    onPreviousQuestion,
    onFlagQuestion,
    isFlagged,
    onSubmit,
    totalQuestions,
    selectedOption,
    onAnswerSelect,
    timeRemaining
}: MCQQuestionProps) {
    const [minutes, seconds] = timeRemaining.split(':').map(num => num.padStart(2, '0'))

    return (
        <div className="flex flex-col h-[calc(100vh-94px)] bg-white dark:bg-gray-800 w-full max-w-[1000px] mx-auto overflow-hidden">
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                            MCQ <span className="text-red-500 ml-2">Q{questionNumber}</span>
                        </h2>
                        <div className="flex items-center">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                {`${minutes}:${seconds}`}
                            </span>
                        </div>
                    </div>
                    <p className="text-xl font-medium text-gray-800 dark:text-gray-100">{question}</p>
                </div>
                <RadioGroup value={selectedOption || ""} onValueChange={onAnswerSelect} className="space-y-4">
                    {options.map((option, index) => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <RadioGroupItem value={option.id} id={option.id} className="hidden peer" />
                            <Label
                                htmlFor={option.id}
                                className="flex items-center w-full cursor-pointer peer-checked:font-semibold"
                            >
                                <span className="flex items-center justify-center w-6 h-6 mr-3 border border-gray-300 rounded-full text-sm font-medium peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className="flex-grow text-gray-700 dark:text-gray-200">{option.option}</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="p-6  border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <Button variant="default" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800" onClick={onSubmit}>
                        End and Submit
                    </Button>
                    <div className="flex space-x-4">
                        <Button variant="outline" size="sm" onClick={onPreviousQuestion} disabled={questionNumber === 1} className="bg-gray-100 dark:bg-gray-700">
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            <span className="hidden sm:inline">Previous</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onFlagQuestion}
                            className={`bg-gray-100 dark:bg-gray-700 ${isFlagged ? "bg-yellow-200 dark:bg-yellow-700" : ""}`}
                        >
                            <Flag className="h-4 w-4 mr-2" />
                            <span>Flag</span>
                        </Button>
                        <Button variant="outline" size="sm" onClick={onNextQuestion} disabled={questionNumber === totalQuestions} className="bg-gray-100 dark:bg-gray-700">
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}