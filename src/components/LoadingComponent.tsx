import React from 'react'

export default function LoadingComponent() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-orange-50">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
                <h2 className="mt-4 text-2xl font-semibold text-orange-800">Loading your exam...</h2>
                <p className="mt-2 text-orange-600">Please wait while we prepare your questions</p>
                <div className="mt-4 flex justify-center space-x-2">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className="w-3 h-3 rounded-full bg-orange-500 animate-bounce"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}