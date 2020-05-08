import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import App from '../App'

it('can filter notes by text', () => {
    const { getByTestId, queryByTestId, container } = render(<App />)

    expect(getByTestId('composer-input')).toBeDefined()
    expect(getByTestId('submit-button')).toBeDefined()
    expect(queryByTestId('note-content')).toBeNull()

    fireEvent.change(getByTestId('composer-input'), { target: { value: 'Test' } })
    fireEvent.click(getByTestId('submit-button'))
    fireEvent.change(getByTestId('composer-input'), { target: { value: 'Nothing' } })
    fireEvent.click(getByTestId('submit-button'))

    expect(container.querySelectorAll('.note').length).toBe(2)
    expect(getByTestId('search-input')).toBeDefined()

    fireEvent.change(getByTestId('search-input'), { target: { value: 'Test' } })
    expect(container.querySelectorAll('.note').length).toBe(1)
    expect(getByTestId('note-content').textContent).toBe('Test')
})
