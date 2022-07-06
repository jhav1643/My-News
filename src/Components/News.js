import React, { Component } from 'react'
import { Spinner } from './Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProp = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

        document.title = `MY News-${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async UpdateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=848dabf0a04f4aeca99cd3b15474993b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles })

        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.UpdateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=848dabf0a04f4aeca99cd3b15474993b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        })
    };

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.totalResults} loader={<Spinner />} >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (<div className="col-md-4" key={element.url} >
                                    <NewsItem title={element.title ? element.title : !""} descreption={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
