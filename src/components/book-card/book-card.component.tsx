import React from 'react'
import noImage from '../../assets/no-image.png'
import './book-card.styles.css'

interface BookCardProps {
    book: {
        volumeInfo: {
            imageLinks: {thumbnail: ''},
            title: '',
            authors: [],
            categories: ['']
        }
    }
}

const BookCard: React.FC<BookCardProps> = ({book}) => {
    
    return (
        <div className='book-card'>
            <div className='card-img-container'>
                {
                    book.volumeInfo.imageLinks ?
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover" /> :
                    <img src={noImage} alt="no-cover" />
                }
           
            </div>
            <h5>{book.volumeInfo.title}</h5>
            <p>{book.volumeInfo.authors ?
               book.volumeInfo.authors: null}</p>
            
            {book.volumeInfo.categories? 
           <p>Category: {book.volumeInfo.categories[0]}</p>: null}
            
            <div></div>
           
        </div>
    )
}

export default BookCard