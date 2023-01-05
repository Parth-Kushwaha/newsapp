import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        console.log("const from news comp");
        this.state={
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ed368439ccef49609ae709e6d14d17cc";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})

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
          
        </div>
      )
  }
}
