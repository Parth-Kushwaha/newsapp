import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
            {
              "source": {
                "id": "reuters",
                "name": "Reuters"
              },
              "author": null,
              "title": "Ukraine rejects Putin call for Christmas truce - Reuters",
              "description": "Ukraine spurned an offer from Russian President Vladimir Putin for a 36-hour ceasefire over Orthodox Christmas, saying there would be no truce until Russia withdraws its invading forces from occupied land.",
              "url": "https://www.reuters.com/world/europe/russia-blames-its-soldiers-mobile-phone-use-deadly-missile-strike-2023-01-03/",
              "urlToImage": "https://www.reuters.com/resizer/KHFB-yHl4mPNHZYA3KY5darqaJE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D4LMDRAAPBJ7JGGJ3CFNGXOPC4.jpg",
              "publishedAt": "2023-01-05T16:22:00Z",
              "content": "KYIV, Jan 5 (Reuters) - Ukraine spurned an offer from Russian President Vladimir Putin for a 36-hour ceasefire over Orthodox Christmas, saying there would be no truce until Russia withdraws its invad… [+3846 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "YouTube"
              },
              "author": null,
              "title": "2 shot early Thursday in Bailey's Crossroads | FOX 5 DC - FOX 5 Washington DC",
              "description": "President Joe Biden delivers remarks regarding border security from the White House Thursday. Earlier this week Biden said he intends to visit the U.S.-Mexic...",
              "url": "https://www.youtube.com/watch?v=xgZ-SxdImsA",
              "urlToImage": "https://i.ytimg.com/vi/xgZ-SxdImsA/maxresdefault_live.jpg",
              "publishedAt": "2023-01-05T16:15:33Z",
              "content": null
            },
            {
                "source": {
                  "id": null,
                  "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Keir Starmer embraces Brexit slogan with 'take back control' pledge - BBC",
                "description": "The Labour leader promises to transfer powers from Westminster and turn the slogan into a \"solution\".",
                "url": "https://www.bbc.com/news/uk-politics-64173370",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/169E0/production/_128204629_cb20ada6cc5310d7fa4460090c78956bdb8eb5e7.jpg",
                "publishedAt": "2023-01-05T13:42:10Z",
                "content": "Media caption, WATCH: 'Take Back Control' bill will turn slogan into solution, says Sir Keir Starmer\r\nSir Keir Starmer has promised a new \"take back control\" bill to transfer powers from Westminster … [+5370 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "KTLA Los Angeles"
                },
                "author": "Tony Kurzweil, Megan Telles",
                "title": "‘Bomb cyclone’ rains reach Southern California; Gov. declares state of emergency - KTLA Los Angeles",
                "description": "Southern California is getting hit Thursday from the most powerful showers being produced by a “bomb cyclone” that formed off the coast this week. The storm, which arrived Wednesday, is expected to bring 2 to 4 inches of rain to most areas with even higher to…",
                "url": "https://ktla.com/news/local-news/bomb-cyclone-rains-reach-southern-california-gov-declares-state-of-emergency/",
                "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/01/radar-jan-5.jpg?w=1280",
                "publishedAt": "2023-01-05T13:30:59Z",
                "content": "Southern California is getting hit Thursday from the most powerful showers being produced by a “bomb cyclone” that formed off the coast this week.\r\nThe storm, which arrived Wednesday, is expected to … [+2535 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "CNBC"
                },
                "author": "Jeff Cox",
                "title": "Private payroll growth surged by 235,000 in December, well above estimate, ADP reports - CNBC",
                "description": "Private payrolls rose by 235,000 for the month, well ahead of the 153,000 Dow Jones estimate.",
                "url": "https://www.cnbc.com/2023/01/05/adp-jobs-report-december-2022.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107160482-1670003528516-gettyimages-1446299363-dscf2618_916f8d02-ed6a-4687-ade4-f6c33c1b0aae.jpeg?v=1672924505&w=1920&h=1080",
                "publishedAt": "2023-01-05T13:15:05Z",
                "content": "The jobs market closed out 2022 on a high note, with companies adding far more positions than expected in December, payroll processing firm ADP reported Thursday.\r\nPrivate payrolls rose by 235,000 fo… [+2893 chars]"
              },
              {
                "source": {
                  "id": "engadget",
                  "name": "Engadget"
                },
                "author": "https://www.engadget.com/about/editors/mat-smith",
                "title": "The Morning After: A wireless 55-inch OLED TV that sticks to the wall - Engadget",
                "description": "The top news stories today: Displace’s wireless 55-inch OLED TV sticks to most surfaces, Tesla's Model Y might miss out on new EV tax credit rules, Louisiana residents will now need a government ID to access porn online..",
                "url": "https://www.engadget.com/the-morning-after-a-wireless-55-inch-oled-tv-that-sticks-to-most-walls-121557866.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-01/05c14b50-8c8b-11ed-b3bf-f60cde5d8f8e",
                "publishedAt": "2023-01-05T12:16:49Z",
                "content": "One of the fun things about CES is a completely different approach to established tech norms. Displaces 55-inch OLED TV not only runs on batteries and has a pop-out camera but also attaches itself wi… [+5165 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "YouTube"
                },
                "author": null,
                "title": "California Braces For More Rain After Severe Flooding | California Floods 2022 | English News LIVE - CNN-News18",
                "description": "California Braces For More Rain After Severe Flooding | California Floods 2022 | English News LIVEMore rainfall is expected this week in California, which is...",
                "url": "https://www.youtube.com/watch?v=XUS9q7XHaM0",
                "urlToImage": "https://i.ytimg.com/vi/XUS9q7XHaM0/maxresdefault_live.jpg",
                "publishedAt": "2023-01-05T12:09:47Z",
                "content": null
              },
              {
                "source": {
                  "id": null,
                  "name": "YouTube"
                },
                "author": null,
                "title": "Prince Harry Says Prince William Knocked Him To The Floor In Dispute | English News LIVE | News18 - CNN-News18",
                "description": "Prince Harry Says Prince William Knocked Him To The Floor In Dispute | English News LIVE | News18Britain's Prince Harry says in his much-awaited memoir that ...",
                "url": "https://www.youtube.com/watch?v=17wPPIeGjs0",
                "urlToImage": "https://i.ytimg.com/vi/17wPPIeGjs0/maxresdefault_live.jpg",
                "publishedAt": "2023-01-05T11:58:05Z",
                "content": null
              },
              {
                "source": {
                  "id": null,
                  "name": "YouTube"
                },
                "author": null,
                "title": "Pope Benedict Funeral Live Today | Pope Francis To Preside Over The Funeral | Vatican Live | News18 - CNN-News18",
                "description": "Pope Benedict Funeral Live Today | Pope Francis To Preside Over The Funeral | Vatican Live | News18The Pope Emeritus will be buried in the crypt beneath St P...",
                "url": "https://www.youtube.com/watch?v=_jit1y1y9RY",
                "urlToImage": "https://i.ytimg.com/vi/_jit1y1y9RY/maxresdefault.jpg",
                "publishedAt": "2023-01-05T11:30:48Z",
                "content": null
              },
              {
                "source": {
                  "id": null,
                  "name": "WFSB"
                },
                "author": "Jay Kenney,Marcy Jones",
                "title": "State rep. one of two killed in fiery wrong-way crash on Route 9 in Cromwell - Eyewitness News 3",
                "description": "Two drivers were killed in a wrong-way crash that happened on Route 9 in Cromwell Thursday morning.",
                "url": "https://www.wfsb.com/2023/01/05/rt9-southbound-cromwell-closed-due-2-vehicle-collision/",
                "urlToImage": "https://gray-wfsb-prod.cdn.arcpublishing.com/resizer/bFbYnR8jBMYfPcIvIPhJSFq6USU=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/OP6TX3XCC5FG3OMMX275S6Q6YU.jpg",
                "publishedAt": "2023-01-05T10:00:00Z",
                "content": "CROMWELL, CT (WFSB) - Two drivers were killed in a wrong-way crash that happened on Route 9 in Cromwell Thursday morning.\r\nOne of them, according to state lawkamers, was Middletown state Rep. Quentin… [+1835 chars]"
              }
          ]
    
    constructor(){
        super();
        console.log("const from news comp");
        this.state={
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-2'>
        <h2>OUR TOP HEADLINES</h2>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
             return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
                
        </div>
        
      </div>
    )
  }
}
