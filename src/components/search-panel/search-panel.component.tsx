import React,{useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {setCurrentBooks} from '../../redux/current-books/current-books.actions'
import {setCurrentQuery} from '../../redux/current-query/qurrent-query.actions'
import {configureUrl} from '../../utils/functions.utils'
import './search-panel.styles.css'

interface PanelProps {
    activateSpinner: Function;
    setTotalCount: Function;
}

const SearchPanel: React.FC<PanelProps> = ({activateSpinner, setTotalCount}) => {

    const dispatch = useAppDispatch()
    const query = useAppSelector(state => state.query.currentQuery)

    const [userQuery,setUserQuery] = useState({
        query: '',
        category: '',
        sorting: 'relevance'

    })

    const getData = () => {
        dispatch(setCurrentBooks([]))
        activateSpinner(true)
        let url = configureUrl(
            userQuery.query,
            userQuery.category,
            userQuery.sorting)
        
        fetch(url).then((res) => {
            return res.json()
        }).then((data) =>{
            if(data.items) {
                setTotalCount(data.totalItems)
                dispatch(setCurrentBooks(data.items))
            } else {
                setTotalCount(0)
            }
            activateSpinner(false)
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        
        setUserQuery((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        
        setUserQuery((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    dispatch(setCurrentQuery({
        ...query,
        ...userQuery
    }))
    
    getData()
    
    setUserQuery({
       ...userQuery,
        query: ''
    })
    
   }

    return (
        <div className='panel'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="query" id="query" value={userQuery.query} onChange={handleChange} />
                <div className='select-container'>
                    <select name='category' onChange={handleSelect}>
                        <option value="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>

                    <select name='sorting' onChange={handleSelect}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            <input type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SearchPanel