import Heading from '../components/Header'
import LeftSidebar from '../components/Sidebar'
import Overview from '../components/Overview'
import MCQQuestion from '../components/MCQQuestion'

export default function ExamPage() {
    const sampleQuestion = {
        questionNumber: 1,
        question: "Which tech giant was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University?",
        options: ["Microsoft", "Apple", "Google", "IBM"],
        timeRemaining: "00:59:56"
    }

    return (
        <div className="flex h-screen">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Heading */}
                <Heading />

                {/* Main Content */}
                <main className="flex-1 flex bg-gray-50 overflow-hidden">
                    <Overview />
                    <MCQQuestion {...sampleQuestion} />
                </main>
            </div>
        </div>
    )
}