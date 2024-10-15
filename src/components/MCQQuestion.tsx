"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Flag, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface MCQQuestionProps {
    questionNumber: number;
    question: string;
    options: Array<{ id: string; option: string }>;
    onNextQuestion: () => void;
    onPreviousQuestion: () => void;
    onFlagQuestion: () => void;
    isFlagged: boolean;
    onSubmit: () => void;
    totalQuestions: number;
    selectedOption: string | null;
    onAnswerSelect: (optionId: string | null) => void;
    timeRemaining: string;
}

export default function MCQQuestion({
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
    const handleClearAnswer = () => {
        onAnswerSelect(null);
    };

    return (
        <div className="flex-1 p-4 md:p-6 bg-white dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold dark:text-white">MCQ- {questionNumber.toString().padStart(2, '0')}</h2>
                <span className="text-sm font-medium dark:text-gray-300">Time: {timeRemaining}</span>
            </div>
            <div className="mb-6">
                <p className="text-lg font-medium dark:text-gray-200">{question}</p>
            </div>
            <RadioGroup value={selectedOption || ""} onValueChange={onAnswerSelect}>
                {options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 mb-4">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label htmlFor={option.id} className="dark:text-gray-300">{option.option}</Label>
                    </div>
                ))}
            </RadioGroup>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
                {questionNumber === totalQuestions ? (
                    <Button variant="default" className="w-full md:w-auto order-3 md:order-1" onClick={onSubmit}>
                        Submit Exam
                    </Button>
                ) : (
                    <Button variant="outline" className="w-full md:w-auto order-3 md:order-1" onClick={onSubmit}>
                        End and Submit
                    </Button>
                )}
                <div className="flex space-x-4 order-2">
                    <Button variant="outline" size="icon" onClick={onPreviousQuestion} disabled={questionNumber === 1}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={onFlagQuestion}
                        className={isFlagged ? "bg-yellow-200 dark:bg-yellow-700" : ""}
                    >
                        <Flag className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleClearAnswer} disabled={!selectedOption}>
                        <X className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={onNextQuestion} disabled={questionNumber === totalQuestions}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}