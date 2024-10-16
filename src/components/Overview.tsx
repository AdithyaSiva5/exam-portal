import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OverviewProps {
    totalQuestions: number;
    currentQuestion: number;
    flaggedQuestions: Set<string>;
    onQuestionSelect: (index: number) => void;
    userAnswers: Record<string, string>;
    questions: Array<{ id: string }>;
    viewedQuestions: Set<string>;
    timeRemaining: string;
}

export default function Overview({
    totalQuestions,
    currentQuestion,
    flaggedQuestions,
    onQuestionSelect,
    userAnswers,
    questions,
    viewedQuestions,
    timeRemaining
}: OverviewProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleQuestions, setVisibleQuestions] = useState(5);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setVisibleQuestions(questions.length);
        } else if (!isExpanded) {
            setVisibleQuestions(5);
        }
    }, [isMobile, isExpanded, questions.length]);

    const handleExpandToggle = () => {
        if (isExpanded) {
            setVisibleQuestions(5);
        } else {
            setVisibleQuestions(questions.length);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm h-full flex flex-col rounded-lg md:rounded-none">
            <div className="p-4 flex justify-between items-center">
                <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Overview</h2>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 md:hidden">{timeRemaining}</span>
            </div>

            <div className="flex-grow overflow-y-auto">
                <div className="p-2 grid grid-cols-5 gap-1 md:grid-cols-4 md:gap-2 md:p-4">
                    {questions.slice(0, visibleQuestions).map((question, index) => {
                        const isFlagged = flaggedQuestions.has(question.id);
                        const isAttempted = userAnswers.hasOwnProperty(question.id);
                        const isViewed = viewedQuestions.has(question.id);
                        const isCurrentQuestion = currentQuestion === index + 1;

                        let buttonClass = 'w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium border-2 ';
                        if (isCurrentQuestion) {
                            buttonClass += 'border-orange-500 text-orange-500';
                        } else if (isFlagged) {
                            buttonClass += 'bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 border-transparent';
                        } else if (isAttempted) {
                            buttonClass += 'bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 border-transparent';
                        } else if (isViewed) {
                            buttonClass += 'bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 border-transparent';
                        } else {
                            buttonClass += 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 border-transparent';
                        }

                        return (
                            <button
                                key={question.id}
                                className={buttonClass}
                                onClick={() => onQuestionSelect(index)}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
                </div>
            </div>

            {isMobile && questions.length > 5 && (
                <div className="p-2">
                    <button
                        className="flex items-center justify-center w-full text-sm font-medium text-gray-600 dark:text-gray-400"
                        onClick={handleExpandToggle}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                Show More
                            </>
                        )}
                    </button>
                </div>
            )}

            {(!isMobile || isExpanded) && (
                <div className="p-2 md:p-4">
                    <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-200 dark:bg-green-700 mr-1 md:mr-2"></div>
                            <span>Answered</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-200 dark:bg-purple-700 mr-1 md:mr-2"></div>
                            <span>Viewed</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-200 dark:bg-yellow-700 mr-1 md:mr-2"></div>
                            <span>Flagged</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-orange-500 mr-1 md:mr-2"></div>
                            <span>Current</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}