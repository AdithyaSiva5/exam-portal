"use client";
import React, { useState, useEffect } from "react";
import Heading from "../components/Header";
import LeftSidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import MCQQuestion from "../components/MCQQuestion";
import ResultPage from "../components/ResultPage";
import { getQuestions } from "../utils/questionData";
import Navbar from "@/components/NavBar";
import LoadingComponent from "@/components/LoadingComponent";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    const [timeRemaining, setTimeRemaining] = useState(3600); // Example: 1 hour = 3600 seconds
    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

    // Fetch questions on component mount
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const fetchedQuestions = await getQuestions();
                setQuestions(fetchedQuestions);
                setIsLoading(false);
                setExamStartTime(Date.now());
            } catch (error) {
                console.error("Error fetching questions:", error);
                setIsLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    // Timer logic
    useEffect(() => {
        if (examSubmitted) return; // Stop the timer if the exam is submitted
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    handleSubmit(); // Auto-submit when time is up
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [examSubmitted]);

    // Mark question as viewed when the current question changes
    useEffect(() => {
        if (questions.length > 0) {
            setViewedQuestions((prev) => new Set(prev).add(questions[currentQuestionIndex].id));
        }
    }, [currentQuestionIndex, questions]);

    // Handle navigation
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

    // Handle flagging a question
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

    // Handle jump to a specific question from the overview
    const handleJumpToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setIsOverviewExpanded(false);
    };

    // Handle answer selection
    const handleAnswerSelect = (questionId: string, optionId: string | null) => {
        if (!optionId) return;
        setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    };

    // Handle exam submission
    const handleSubmit = () => {
        setExamSubmitted(true);
    };

    // Format time for display (MM:SS)
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            {isLoading ? (
                <LoadingComponent />
            ) : (
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
                                    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-4 h-full">
                                        {!examSubmitted && (
                                            <div className="lg:w-1/3 h-full">
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
                                            </div>
                                        )}
                                        <div className="lg:w-2/3 h-full">
                                            {examSubmitted ? (
                                                <ResultPage
                                                    totalQuestions={questions.length}
                                                    correctAnswers={questions.reduce(
                                                        (count, question) =>
                                                            userAnswers[question.id] === question.correctOptionId ? count + 1 : count,
                                                        0
                                                    )}
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
            )}
        </div>
    );
}
