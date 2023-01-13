import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date}= this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text">By: {!author? "Unknown": author} on {!date?"Unknown":new Date(date).toGMTString()}</p>
                <a href={newsUrl} target="_blank"className="btn btn-sm btn-dark">READ MORE</a>
            </div>
        </div>
      </div>
    )
  }
}
