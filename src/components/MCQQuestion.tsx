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
        <div className="flex flex-col h-full bg-white dark:bg-gray-800 w-full overflow-hidden">
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                            MCQ <span className="text-red-500 ml-2">Q{questionNumber}</span>
                        </h2>
                        <div className="hidden md:flex items-center">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                {`${minutes}:${seconds}`}
                            </span>
                        </div>
                    </div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{question}</p>
                </div>
                <RadioGroup value={selectedOption || ""} onValueChange={onAnswerSelect} className="space-y-3">
                    {options.map((option, index) => (
                        <div key={option.id} className={`flex items-center space-x-3 p-3 rounded-lg ${selectedOption === option.id ? 'border-2 border-orange-500' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                            <RadioGroupItem value={option.id} id={option.id} className="hidden peer" />
                            <Label
                                htmlFor={option.id}
                                className="flex items-center w-full cursor-pointer peer-checked:font-semibold"
                            >
                                <span className={`flex items-center justify-center w-6 h-6 mr-3 border border-gray-300 rounded-full text-sm font-medium ${selectedOption === option.id ? 'bg-orange-500 text-white border-orange-500' : ''}`}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className="flex-grow text-sm text-gray-700 dark:text-gray-200">{option.option}</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-between items-center gap-2">
                    <Button variant="default" className="w-auto bg-black text-white hover:bg-gray-800 text-sm py-2 px-4" onClick={onSubmit}>
                        End and Submit
                    </Button>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={onPreviousQuestion} disabled={questionNumber === 1} className="bg-gray-100 dark:bg-gray-700 p-2">
                            <ChevronLeft className="h-4 w-4" />
                            <span className="hidden md:inline ml-1">Previous</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onFlagQuestion}
                            className={`bg-gray-100 dark:bg-gray-700 p-2 ${isFlagged ? "bg-yellow-200 dark:bg-yellow-700" : ""}`}
                        >
                            <Flag className="h-4 w-4 mr-1" />
                            <span>Flag</span>
                        </Button>
                        <Button variant="outline" size="sm" onClick={onNextQuestion} disabled={questionNumber === totalQuestions} className="bg-gray-100 dark:bg-gray-700 p-2">
                            <span className="hidden md:inline mr-1">Next</span>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}