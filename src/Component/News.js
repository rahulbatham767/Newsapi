import React, {useEffect, useState} from 'react'

import Newsitem from './NewsItem.js';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [key, setKey] = useState('461bd02a7e024989818ab8d269153ad0');
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

if(articles.code==='rateLimited'){
    setKey('99df3c23f1dc46b68f3a0d9971bfd1eb');
}

    const updateNews = async ()=> {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${key}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        
        props.setprogress(10);
        let data = await fetch(url);
        props.setprogress(30);
        let parsedData = await data.json()
        props.setprogress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setprogress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)==='Technology'?'HOME':capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${key}&page=${page+1}&pageSize=${props.pageSize}`;


        setPage(page+1) 
        let data = await fetch(url);
        props.setprogress(40);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        props.setprogress(70);
        setTotalResults(parsedData.totalResults)
        props.setprogress(100);
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News