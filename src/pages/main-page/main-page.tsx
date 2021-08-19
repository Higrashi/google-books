import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import SearchPanel from '../../components/search-panel/search-panel.component'
import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import {setCurrentBooks} from '../../redux/current-books/current-books.actions'
import {configureUrl} from '../../utils/functions.utils'
import BookCard from '../../components/book-card/book-card.component'
import {ReactComponent as SpinnerIcon} from '../../assets/spinner.svg'
import './main-page.styles.css'

const MainPage = () => {

    const [spinnerActive, setSpinnerActive ] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const books = useAppSelector((state) => state.books.currentBooks )
    const query = useAppSelector((state) => state.query.currentQuery)
    const dispatch = useAppDispatch()
    
    const loadMore = () => {
        setSpinnerActive(true)
        const url = configureUrl(
                query.query,
                query.category,
                query.sorting,
                books.length -1)
        
        fetch(url).then((res) => {
            return res.json()
        }).then((data) =>{
            let newBooks = []
            if(data.items[0]) {
               newBooks = data.items
               setSpinnerActive(false)
               dispatch(setCurrentBooks(books.concat(newBooks))) 
            }
        })
    }

    return (
        <div className='main-page'>
            <SearchPanel
            activateSpinner={setSpinnerActive}
            setTotalCount={setTotalCount}
            />
            <div className='total-count-container'>
               Found: {totalCount} books 
                
                
            </div>
            <div className="cards-container">
            {
                 books ? books.map((book:any) => {
                     return <Link to={`/${book.id}`}
                            style={{textDecoration: 'none',
                            color: 'black'}}>
                            <BookCard book={book} />
                         </Link> 
                 }) : null 
             }           
            </div>

            {
                spinnerActive ?
                <SpinnerIcon className='spinner' />
                : null
            }
           
             {books[0] ?
                <button onClick={loadMore}>Load More</button>:
                null 
            }
        </div>
        
    )
}

export default MainPage