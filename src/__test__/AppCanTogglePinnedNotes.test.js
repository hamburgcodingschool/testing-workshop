import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import App from '../App'

it('can toggle showing pinned notes', () => {
    const { getByTestId, queryByTestId, container } = render(<App />)

    expect(getByTestId('composer-input')).toBeDefined()
    expect(getByTestId('submit-button')).toBeDefined()
    expect(queryByTestId('note-content')).toBeNull()

    fireEvent.change(getByTestId('composer-input'), { target: { value: 'Note 1' } })
    fireEvent.click(getByTestId('submit-button'))
    fireEvent.click(getByTestId('pin-note'))
    fireEvent.change(getByTestId('composer-input'), { target: { value: 'Note 2' } })
    fireEvent.click(getByTestId('submit-button'))

    expect(container.querySelectorAll('.note').length).toBe(2)
    expect(getByTestId('pinned-toggle')).toBeDefined()

    fireEvent.click(getByTestId('pinned-toggle'))
    expect(container.querySelectorAll('.note').length).toBe(1)
    expect(getByTestId('note-content').textContent).toBe('Note 1')

    fireEvent.click(getByTestId('pinned-toggle'))
    expect(container.querySelectorAll('.note').length).toBe(2)
})
