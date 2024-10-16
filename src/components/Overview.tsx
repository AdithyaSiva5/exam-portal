        'use client'

        import React, { useState } from 'react'
        import { Button } from "@/components/ui/button"
        import { ChevronDown, ChevronUp } from 'lucide-react'

        interface OverviewProps {
            totalQuestions: number
            currentQuestion: number
            flaggedQuestions: Set<string>
            onQuestionSelect: (index: number) => void
            userAnswers: Record<string, string>
            questions: Array<{ id: string }>
            viewedQuestions: Set<string>
            timeRemaining: string
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
            const [isExpanded, setIsExpanded] = useState(false)

            const toggleExpand = () => setIsExpanded(!isExpanded)

            return (
                <div className="w-full bg-white dark:bg-gray-800  shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Overview</h2>
                    </div>

                    {/* <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{timeRemaining}</div>
                    </div> */}

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            className="w-full flex justify-between items-center p-4 text-left"
                            onClick={toggleExpand}
                        >
                            <span className="text-lg font-semibold">Questions</span>
                            {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-5 w-5" />}
                        </Button>
                    </div>

                    <div className={`p-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                        <div className="grid grid-cols-7 gap-2 md:gap-4">
                            {questions.map((question, index) => {
                                const isFlagged = flaggedQuestions.has(question.id)
                                const isAttempted = userAnswers.hasOwnProperty(question.id)
                                const isViewed = viewedQuestions.has(question.id)
                                const isCurrentQuestion = currentQuestion === index + 1

                                let buttonClass = 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium '
                                if (isCurrentQuestion) {
                                    buttonClass += 'bg-white text-orange-500 border-2 border-orange-500'
                                } else if (isFlagged) {
                                    buttonClass += 'bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 '
                                } else if (isAttempted) {
                                    buttonClass += 'bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 '
                                } else if (isViewed) {
                                    buttonClass += 'bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 '
                                } else {
                                    buttonClass += 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 '
                                }

                                return (
                                    <Button
                                        key={question.id}
                                        variant="outline"
                                        className={buttonClass}
                                        onClick={() => {
                                            onQuestionSelect(index)
                                            setIsExpanded(false)
                                        }}
                                    >
                                        {index + 1}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-green-200 dark:bg-green-700 mr-2"></div>
                                <span>Completed</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></div>
                                <span>Viewed</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-yellow-200 dark:bg-yellow-700 mr-2"></div>
                                <span>Flagged</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                                <span>Current</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }