"use client";
import React, { useState, useEffect } from 'react';
import Heading from '../components/Header';
import LeftSidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import MCQQuestion from '../components/MCQQuestion';
import ResultPage from '../components/ResultPage';
import { getQuestions } from '../utils/questionData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/NavBar';
interface Option {
    id: string;
    option: string;
}

interface Question {
    id: string;
    question: string;
    options: Option[];
    correctOptionId: string;
}

export default function ExamPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
    const [viewedQuestions, setViewedQuestions] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const [examSubmitted, setExamSubmitted] = useState(false);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [examStartTime, setExamStartTime] = useState<number | null>(null);
    const [timeRemaining, setTimeRemaining] = useState(3600);
    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const fetchedQuestions = await getQuestions();
                setQuestions(fetchedQuestions);
                setIsLoading(false);
                setExamStartTime(Date.now());
            } catch (error) {
                console.error('Error fetching questions:', error);
                setIsLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            setViewedQuestions(prev => new Set(prev).add(questions[currentQuestionIndex].id));
        }
    }, [currentQuestionIndex, questions]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleFlagQuestion = () => {
        setFlaggedQuestions((prevFlagged) => {
            const newFlagged = new Set(prevFlagged);
            const currentQuestionId = questions[currentQuestionIndex].id;
            if (newFlagged.has(currentQuestionId)) {
                newFlagged.delete(currentQuestionId);
            } else {
                newFlagged.add(currentQuestionId);
            }
            return newFlagged;
        });
    };

    const handleJumpToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setIsOverviewExpanded(false);
    };

    const handleAnswerSelect = (questionId: string, optionId: string | null) => {
        if (!optionId) return
        setUserAnswers(prev => ({ ...prev, [questionId]: optionId }));
    };

    const handleSubmit = () => {
        setExamSubmitted(true);
    };

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            {/* Navbar for all screen sizes */}
            <nav className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <Navbar />
            </nav>

            <div className="flex flex-1 overflow-hidden">
                {/* Desktop sidebar */}
                <div className="hidden lg:block">
                    <LeftSidebar />
                </div>

                <div className="flex flex-col flex-1 overflow-hidden">
                    {/* Desktop header */}
                    <div className="hidden lg:block">
                        <Heading />
                    </div>

                    <div className="flex flex-1 overflow-hidden">
                        <div className="flex-1 overflow-auto p-4">
                            <div className="max-w-4xl mx-auto">
                                {!examSubmitted && (
                                    <div className="lg:hidden mb-4">
                                        <button
                                            onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                                            className="flex items-center justify-between w-full p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                                        >
                                            <span>Overview</span>
                                            {isOverviewExpanded ? <ChevronUp /> : <ChevronDown />}
                                        </button>
                                    </div>
                                )}
                                <div className="flex flex-col lg:flex-row gap-4">
                                    {!examSubmitted && (
                                        <div className={`lg:w-1/3 ${isOverviewExpanded ? 'fixed inset-0 z-50 bg-white dark:bg-gray-800 p-4 overflow-auto' : 'hidden lg:block'}`}>
                                            <Overview
                                                totalQuestions={questions.length}
                                                currentQuestion={currentQuestionIndex + 1}
                                                flaggedQuestions={flaggedQuestions}
                                                onQuestionSelect={handleJumpToQuestion}
                                                userAnswers={userAnswers}
                                                questions={questions}
                                                viewedQuestions={viewedQuestions}
                                                timeRemaining={formatTime(timeRemaining)}
                                            />
                                            {isOverviewExpanded && (
                                                <button
                                                    onClick={() => setIsOverviewExpanded(false)}
                                                    className="mt-4 w-full p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
                                                >
                                                    Close Overview
                                                </button>
                                            )}
                                        </div>
                                    )}
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        {examSubmitted ? (
                                            <ResultPage
                                                totalQuestions={questions.length}
                                                correctAnswers={questions.reduce((count, question) =>
                                                    userAnswers[question.id] === question.correctOptionId ? count + 1 : count, 0)}
                                                timeSpent={examStartTime ? Math.floor((Date.now() - examStartTime) / 1000) : 0}
                                            />
                                        ) : (
                                            questions.length > 0 && (
                                                <MCQQuestion
                                                    question={questions[currentQuestionIndex].question}
                                                    options={questions[currentQuestionIndex].options}
                                                    onNextQuestion={handleNextQuestion}
                                                    onPreviousQuestion={handlePreviousQuestion}
                                                    onFlagQuestion={handleFlagQuestion}
                                                    isFlagged={flaggedQuestions.has(questions[currentQuestionIndex].id)}
                                                    questionNumber={currentQuestionIndex + 1}
                                                    onSubmit={handleSubmit}
                                                    totalQuestions={questions.length}
                                                    selectedOption={userAnswers[questions[currentQuestionIndex].id] || null}
                                                    onAnswerSelect={(optionId) => handleAnswerSelect(questions[currentQuestionIndex].id, optionId)}
                                                    timeRemaining={formatTime(timeRemaining)}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}