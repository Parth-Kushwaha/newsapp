import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        console.log("const from news comp");
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ed368439ccef49609ae709e6d14d17cc&page=1&pageSize=21";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }
    HandleNext =async()=>{
      console.log("next")
      if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){}
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ed368439ccef49609ae709e6d14d17cc&page=${this.state.page +1}&pageSize=21`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: this.state.page +1,
        })
      }
    }
    HandlePrev=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ed368439ccef49609ae709e6d14d17cc&page=${this.state.page -1}&pageSize=21`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page -1,
    })
  }
    render() {
      return (
        <div className='container my-2'>
          <h2>OUR TOP HEADLINES</h2>
          <div className="row my-3">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem  title={element.title? element.title.slice(0,50): ""} description={element.description? element.description.slice(0,85) : ""} imageUrl={!element.urlToImage? "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png":element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.HandlePrev} type="button" className="btn btn-dark">&larr; Previous</button>
          <button onClick={this.HandleNext} type="button" className="btn btn-dark">Next &rarr;</button>
          </div>
          
        </div>
      )
  }
}
