"use client";
import React from 'react';
import { Button } from "@/components/ui/button";

interface OverviewProps {
    totalQuestions: number;
    currentQuestion: number;
    flaggedQuestions: Set<string>;
    onQuestionSelect: (index: number) => void;
    userAnswers: Record<string, string>;
    questions: Array<{ id: string }>;
    viewedQuestions: Set<string>;
}

export default function Overview({
    totalQuestions,
    currentQuestion,
    flaggedQuestions,
    onQuestionSelect,
    userAnswers,
    questions,
    viewedQuestions
}: OverviewProps) {
    return (
        <div className="w-full bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 md:border-b-0 md:border-r">
            <div className="mb-4">
                <h2 className="text-xl font-semibold dark:text-white">Overview</h2>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {questions.map((question, index) => {
                    const isFlagged = flaggedQuestions.has(question.id);
                    const isAttempted = userAnswers.hasOwnProperty(question.id);
                    const isViewed = viewedQuestions.has(question.id);
                    const isCurrentQuestion = currentQuestion === index + 1;

                    let buttonClass = 'w-10 h-10 text-sm ';
                    if (isCurrentQuestion) {
                        buttonClass += 'bg-blue-500 text-white ';
                    } else if (isFlagged) {
                        buttonClass += 'bg-yellow-200 dark:bg-yellow-700 ';
                    } else if (isAttempted) {
                        buttonClass += 'bg-green-200 dark:bg-green-700 ';
                    } else if (isViewed) {
                        buttonClass += 'bg-purple-200 dark:bg-purple-700 ';
                    } else {
                        buttonClass += 'bg-gray-200 dark:bg-gray-600 ';
                    }

                    return (
                        <Button
                            key={question.id}
                            variant="outline"
                            className={buttonClass}
                            onClick={() => onQuestionSelect(index)}
                        >
                            {index + 1}
                        </Button>
                    );
                })}
            </div>
            {/* <div className="mt-4 text-sm">
                <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 mr-2"></div>
                    <span className="dark:text-gray-300">Not viewed</span>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-purple-200 dark:bg-purple-700 mr-2"></div>
                    <span className="dark:text-gray-300">Viewed</span>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-green-200 dark:bg-green-700 mr-2"></div>
                    <span className="dark:text-gray-300">Attempted</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-200 dark:bg-yellow-700 mr-2"></div>
                    <span className="dark:text-gray-300">Flagged</span>
                </div>
            </div> */}
        </div>
    );
}