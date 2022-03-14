import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../../store/asyncAction/fetch'
import InputContext from '../../context'
import background from '../../background.jpg'

export default function Header() {
    // states
    const { userInput, setUserInput } = useContext(InputContext)

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const dispatch = useDispatch()
    const handleClick = () => {
        let currentPage = 1
        dispatch(fetchBooks(userInput, currentPage))
    }
    return (
        <div className="header text-center p-4" style={{ backgroundImage: "url(" + background + ")" }}>
            <div className="logo m-4 text-light ">
                <p className='h1'>Google Books</p>
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
                    onClick={handleClick}
                >
                    search
                </button>
            </div>
            <div className='mb-4'>

                <span className='text-light mx-3'>Categories
                    <select>
                        <option defaultValue="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>
                </span>

                <span className='text-light mx-3'>Sorting by
                    <select>
                        <option value="relevance ">Relevance </option>
                        <option value="newest">Newest</option>
                    </select>
                </span>
            </div>
        </div >
    )
}