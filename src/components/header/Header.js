import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../../store/asyncAction/fetch'
import InputContext from '../../context'
import background from '../../background.jpg'
import { Link } from 'react-router-dom'

export default function Header() {
    // states
    const { userInput, setUserInput, currentPage,
        setCurrentPage, selectValue, setSelectValue, sortingBy, setSortingBy } = useContext(InputContext)

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const dispatch = useDispatch()

    const handleSearch = () => {
        setCurrentPage(1)
        dispatch(fetchBooks(userInput, currentPage, selectValue, sortingBy))
    }

    const selectChange = (e) => {
        setSelectValue(e.target.value)
    }

    const sortingChange = (e) => {
        setSortingBy(e.target.value)
    }
    return (
        <div className="header text-center p-4" style={{ backgroundImage: "url(" + background + ")" }}>
            <div className="logo m-4 text-light ">
                <Link to='/' style={{ color:'#FFF'}}><p className='h1'>Search Books</p></Link>
            </div>
            <div className="input-group text-center mb-4 w-50 mx-auto">
                <input
                    value={userInput}
                    type="search"
                    className="form-control col-xs-3"
                    placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={handleChange}
                />
                <button
                    type="button"
                    className="btn-secondary "
                    onClick={handleSearch}
                >
                    search
                </button>
            </div>
            <div className='mb-4'>

                <span className='text-light mx-3'>Categories
                    <select value={selectValue} onChange={selectChange}>
                        <option value="">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="Poetry">Poetry</option>
                    </select>
                </span>

                <span className='text-light mx-3'>Sorting by
                    <select value={sortingBy} onChange={sortingChange}>
                        <option value="relevance">Relevance </option>
                        <option value="newest">Newest</option>
                    </select>
                </span>
            </div>
        </div >
    )
}
