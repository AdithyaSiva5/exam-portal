import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import ExamPage from './page'
import '@testing-library/jest-dom'

// Mock the child components
jest.mock('../components/Header', () => () => <div data-testid="header">Header</div>)
jest.mock('../components/Sidebar', () => () => <div data-testid="sidebar">Sidebar</div>)
jest.mock('../components/Overview', () => ({ onQuestionSelect }) => (
    <div data-testid="overview">
        Overview
        <button onClick={() => onQuestionSelect(1)}>Select Question 2</button>
    </div>
))
jest.mock('../components/MCQQuestion', () => ({
    onNextQuestion,
    onPreviousQuestion,
    onFlagQuestion,
}) => (
    <div data-testid="mcq-question">
        MCQ Question
        <button onClick={onNextQuestion}>Next</button>
        <button onClick={onPreviousQuestion}>Previous</button>
        <button onClick={onFlagQuestion}>Flag</button>
    </div>
))

describe('ExamPage', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('renders all components', () => {
        render(<ExamPage />)
        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        expect(screen.getByTestId('overview')).toBeInTheDocument()
        expect(screen.getByTestId('mcq-question')).toBeInTheDocument()
    })

    it('navigates to the next question', () => {
        render(<ExamPage />)
        fireEvent.click(screen.getByText('Next'))
        expect(screen.getByTestId('mcq-question')).toBeInTheDocument()
    })

    it('navigates to the previous question', () => {
        render(<ExamPage />)
        fireEvent.click(screen.getByText('Next'))
        fireEvent.click(screen.getByText('Previous'))
        expect(screen.getByTestId('mcq-question')).toBeInTheDocument()
    })

    it('flags a question', () => {
        render(<ExamPage />)
        fireEvent.click(screen.getByText('Flag'))
        expect(screen.getByTestId('mcq-question')).toBeInTheDocument()
    })

    it('jumps to a specific question', () => {
        render(<ExamPage />)
        fireEvent.click(screen.getByText('Select Question 2'))
        expect(screen.getByTestId('mcq-question')).toBeInTheDocument()
    })

    it('updates the timer', () => {
        render(<ExamPage />)
        act(() => {
            jest.advanceTimersByTime(1000)
        })
        expect(screen.getByTestId('overview')).toBeInTheDocument()
    })
})