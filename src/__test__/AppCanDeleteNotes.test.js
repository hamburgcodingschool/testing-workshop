import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import App from '../App'

it('can delete a note', () => {
    const { getByTestId, queryByTestId } = render(<App />)
    expect(getByTestId('composer-input')).toBeDefined()
    expect(getByTestId('submit-button')).toBeDefined()
    expect(queryByTestId('note-content')).toBeNull()

    fireEvent.change(getByTestId('composer-input'), { target: { value: 'Test Text' } })
    expect(getByTestId('composer-input').value).toBe('Test Text')

    fireEvent.click(getByTestId('submit-button'))
    expect(getByTestId('note-content').textContent).toBe('Test Text')
    expect(getByTestId('delete-note')).toBeDefined()

    fireEvent.click(getByTestId('delete-note'))
    expect(queryByTestId('note-content')).toBeNull()
})
