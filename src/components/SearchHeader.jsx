import './SearchHeader.css'

import React from 'react'

const SearchHeader = ({ searchValue, onSearchValueChange, pinnedChecked, onPinnedChange }) => (
    <header className="search_header">
        <div className="search_header__title">
            <h1>Notes</h1>
        </div>
        <div className="search_header__form">
            <div className="search_header__search">
                <input
                    data-testid="search-input"
                    placeholder="Search"
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>

            <div className="search_header__toggle">
                <label>
                    {pinnedChecked ? 'Show all notes' : 'Show pinned notes only'}
                    <input
                        data-testid="pinned-toggle"
                        className="pinned_togle"
                        type="checkbox"
                        checked={pinnedChecked}
                        onChange={onPinnedChange}
                    />
                </label>
            </div>
        </div>
    </header>
)

export default SearchHeader
