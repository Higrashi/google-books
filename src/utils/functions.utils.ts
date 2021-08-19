export const configureUrl = (query:string, category:string = 'all', sorting:string = 'relevance', startAt:number = 0) => {
    if(category === 'all'){
        category = 'art+biography+computers+history+medical+poetry'
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${category}&orderBy=${sorting}&startIndex=${startAt}&maxResults=30&key=AIzaSyBK4jEdhF1BVg5IolsDUQSXZsUWVEzKzOs`
    console.log('This is url',url)
    return url
}

export const configureVolumeUrl = (volumeId:string) => {
    let url = `https://www.googleapis.com/books/v1/volumes/${volumeId}?key=AIzaSyBK4jEdhF1BVg5IolsDUQSXZsUWVEzKzOs`
    return url
}



