import React from 'react'
import { render, cleanup } from 'react-testing-library'

import SearchHeader from '../SearchHeader'

afterEach(cleanup)

it('renders pinned toggle and search', () => {
    const { getByTestId } = render(<SearchHeader />)

    expect(getByTestId('pinned-toggle')).toBeDefined()
    expect(getByTestId('search-input')).toBeDefined()
})
