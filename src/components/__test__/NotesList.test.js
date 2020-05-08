import React from 'react'
import { render, cleanup } from '@testing-library/react'

import NotesList from '../NotesList'

afterEach(cleanup)

it('renders notes', () => {
    const { getByTestId } = render(
        <NotesList notes={[{ id: 1, text: 'Note 1', pinned: false }, { id: 2, text: 'Note 2', pinned: true }]} />
    )

    expect(getByTestId('1')).toBeDefined()
    expect(getByTestId('2')).toBeDefined()
})

it('renders empty screen', () => {
    const { getByTestId } = render(<NotesList notes={[]} />)

    expect(getByTestId('empty-illustration')).toBeDefined()
})
