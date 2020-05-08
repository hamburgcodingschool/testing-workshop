import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import DeleteAllButton from '../DeleteAllButton'

afterEach(cleanup)

it('calls handler after a confirmation click', () => {
    const deleteAllSpy = jest.fn()
    const { getByTestId } = render(<DeleteAllButton onClick={deleteAllSpy} />)

    expect(getByTestId('delete-all')).toBeDefined()

    fireEvent.click(getByTestId('delete-all'))
    expect(getByTestId('confirm-deletion')).toBeDefined()
    expect(getByTestId('cancel-deletion')).toBeDefined()

    fireEvent.click(getByTestId('confirm-deletion'))
    expect(deleteAllSpy).toHaveBeenCalledTimes(1)
    expect(getByTestId('delete-all')).toBeDefined()
})

it('can cancel deletion before calling handler', () => {
    const deleteAllSpy = jest.fn()
    const { getByTestId } = render(<DeleteAllButton onClick={deleteAllSpy} />)

    expect(getByTestId('delete-all')).toBeDefined()

    fireEvent.click(getByTestId('delete-all'))
    expect(getByTestId('cancel-deletion')).toBeDefined()
    expect(getByTestId('confirm-deletion')).toBeDefined()

    fireEvent.click(getByTestId('cancel-deletion'))
    expect(deleteAllSpy).not.toHaveBeenCalled()
    expect(getByTestId('delete-all')).toBeDefined()
})
