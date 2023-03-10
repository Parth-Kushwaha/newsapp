import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    static defaultProps={
      country: "in",
      pageSize: 12,
      category: "general",
      totalResults: 0
    }

    static propTypes={
      country : PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }

    async updateNews(pageNo){
      this.props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.setState({
          articles: parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews()
    }
    HandleNext =async()=>{
      // console.log("next")
      // if(!this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
      // else{
      //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed368439ccef49609ae709e6d14d17cc&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading: true})
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({
      //     articles: parsedData.articles,
      //     page: this.state.page +1,
      //     loading: false
      //   })
      this.setState({
        page: this.state.page+1
      })
      this.updateNews()
      }
    HandlePrev=async()=>{
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed368439ccef49609ae709e6d14d17cc&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     articles: parsedData.articles,
    //     page: this.state.page -1,
    //     loading: false
    // })
      this.setState({
        page: this.state.page-1
      })
      this.updateNews()
    }

    fetchMoreData=async()=>{
      this.setState({page: this.state.page+1})
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed368439ccef49609ae709e6d14d17cc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles), 
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    capitalizeFirstLetter=(string)=>{
    return string[0].toUpperCase() + string.slice(1);
    }

    render() {
      return (
        <>
          <h2 className='text-center' style={{marginTop:'90px'}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row my-3">
              {this.state.articles.map((element,index)=>{
                  return <div className="col-md-4 my-3" key={index}>
                      <NewsItem  title={element.title? element.title.slice(0,50): ""} 
                      description={element.description? element.description.slice(0,85) : ""} 
                      source={element.source.name} 
                      author={element.author} 
                      date={element.publishedAt} 
                      imageUrl={!element.urlToImage? "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png":element.urlToImage} 
                      newsUrl={element.url}/>
                  </div>
              })}
            </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.HandlePrev} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.HandleNext} type="button" className="btn btn-dark">Next &rarr;</button>
          </div> */}
        </>
      )
  }
}
