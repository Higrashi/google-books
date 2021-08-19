import React,{useState,useEffect} from 'react'
import {RouteComponentProps, Link} from 'react-router-dom'
import {ReactComponent as ArrowIcon} from '../../assets/arrow.svg'
import {configureVolumeUrl} from '../../utils/functions.utils'
import {ReactComponent as SpinnnerIcon} from '../../assets/spinner.svg'
import noImage from '../../assets/no-image.png'
import './book-page.styles.css'

interface RouterProps { 
    id: string; 
}

interface TopicDetailProps extends RouteComponentProps<RouterProps> {
   
}



const BookPage:React.FC<TopicDetailProps> = ({match}) => {

    const [currentBook, setCurrentBook] = useState({
        volumeInfo: {
            imageLinks: {thumbnail: ''},
            title: '',
            authors: [],
            categories: [''],
            description: ''
        }
    })
    const [loadingDone, setLoadingDone] = useState(false)
    useEffect(() => {
        const url = configureVolumeUrl(match.params.id)
        fetch(url).then((res) => {
            return res.json()
        }).then((data) =>{
            
            setCurrentBook(data)
            setLoadingDone(true)
            
        }) 
    },[match.params.id])

    return (
        <div className='book-page'>

            {
               loadingDone ?
               null:
               <SpinnnerIcon
               style={{width:'100px',
               height: '100px',
               marginTop: '5%'     
               }} /> 
            }

            {
                loadingDone ?<> <div className="book-page-container main-img-container">
                <Link to="/"  className='return-link' >
                    <ArrowIcon style={{width: '30px', height: '30px'}} />
                    </Link>
                {
                    currentBook.volumeInfo.imageLinks ?
                    <img src={`${currentBook.volumeInfo.imageLinks.thumbnail}`} alt="" /> :
                    <img src={noImage} alt="no-cover" />
                }
            </div>
            <div className="book-page-container main-info">
               <p style={{color: 'lightgrey'}}>{currentBook.volumeInfo.categories}</p>
              
               <h3>{currentBook.volumeInfo.title}</h3>
              
               

            <p style={{color: 'lightgrey'}}>{
               currentBook.volumeInfo.authors ?
               currentBook.volumeInfo.authors.map(function(item:any)
               {return <span> {item} &nbsp; </span>}
              ) : null}</p>

               <div className='description-container'>
                   {currentBook.volumeInfo.description}
                   </div> 
            </div>
             </>: null
            }

        </div>
    )
}

export default BookPage