"use client";
import Heading from '../components/Header'
import LeftSidebar from '../components/Sidebar'
import Overview from '../components/Overview'
import MCQQuestion from '../components/MCQQuestion'

export default function ExamPage() {
    const sampleQuestion = {
        questionNumber: 1,
        question: "Which tech giant was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University?",
        options: ["Microsoft", "Apple", "Google", "Facebook"],
    }

    return (
        <div className="flex flex-col h-screen dark:bg-gray-900">
            {/* Header */}
            <Heading />

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Left Sidebar (hidden on mobile) */}
                <div className="hidden md:block">
                    <LeftSidebar />
                </div>

                {/* Overview (top on mobile, left on desktop) */}
                <div className="md:hidden">
                    <Overview />
                </div>

                {/* Main exam content */}
                <div className="flex flex-col md:flex-row flex-1">
                    <div className="hidden md:block">
                        <Overview />
                    </div>
                    <MCQQuestion {...sampleQuestion} />
                </div>
            </div>
        </div>
    )
}