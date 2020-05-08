import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import NoteComposer from '../NoteComposer'

afterEach(cleanup)

it('can submit note and reset composer', () => {
    const submitSpy = jest.fn()
    const { getByTestId } = render(<NoteComposer onCreateNote={submitSpy} />)

    expect(getByTestId('composer-input')).toBeDefined()
    expect(getByTestId('submit-button')).toBeDefined()

    fireEvent.change(getByTestId('composer-input'), { target: { value: 'Test Text' } })
    expect(getByTestId('composer-input')).toBeDefined()
    expect(getByTestId('composer-input').value).toBe('Test Text')

    fireEvent.click(getByTestId('submit-button'))
    expect(getByTestId('composer-input')).toBeDefined()
    expect(getByTestId('composer-input').value).toBe('')
    expect(submitSpy).toHaveBeenCalledWith('Test Text')
})
