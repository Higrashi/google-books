export const configureUrl = (query:string, category:string = 'all', sorting:string = 'relevance', startAt:number = 0) => {
    if(category === 'all'){
        category = 'art+biography+computers+history+medical+poetry'
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${category}&orderBy=${sorting}&startIndex=${startAt}&maxResults=30&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    console.log('This is url',url)
    return url
}

export const configureVolumeUrl = (volumeId:string) => {
    let url = `https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    return url
}



