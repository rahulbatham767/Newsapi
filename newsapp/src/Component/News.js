import React, { Component } from 'react'
import NewsItem from '../NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        console.log('this is a news constructor');
        document.title = `${this.capitalizeFirstLetter(this.props.category)}  News-Monkey`;


        this.state = {
            articles: [],
            loading:true,
            page: 1,
            totalResults:0,
            oldkey: '99df3c23f1dc46b68f3a0d9971bfd1eb',
            key: '461bd02a7e024989818ab8d269153ad0',

        }
    }

    async componentDidMount() {
        console.log('componentDidMount');

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=1&pagesize=${this.props.pagesize}`;

this.props.setprogress(10);

        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setprogress(30);
        let parseData = await data.json();
        this.props.setprogress(60);
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        })
        this.props.setprogress(100);
    }

   
    fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
       this.setState({loading: true});
       this.props.setprogress(30);
        let data = await fetch(url);
        let parseData = await data.json();
        this.props.setprogress(60);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            loading: false,
            page:this.state.page + 1,
            totalResults: parseData.totalResults,

        })
        this.props.setprogress(100);
    };


    render() {

        return (
            <>

                <h1 className='text-center'> NEWS MONKEY -TOP HEADLINE FROM {this.props.category.toUpperCase()}</h1>
                <hr />
               
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container mt-3">
                            <div className="row">
                                {this.state.articles.map((element,index) => {
                                    console.log(element.articles);
                                    return <div className="col-md-4" key={index}>
                                        <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author === null ? "Unknown" : element.author} time={element.publishedAt === null ? 'Unknown' : element.publishedAt} source={element.source.name} />
                                    </div>

                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
             
              

            </>
        )


    }
}

export default News;