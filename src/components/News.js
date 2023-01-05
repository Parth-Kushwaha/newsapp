import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
        [
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
                "id": "cnn",
                "name": "CNN"
              },
              "author": "Shania Shelton",
              "title": "Michigan Sen. Debbie Stabenow won't seek reelection in 2024 - CNN",
              "description": "Sen. Debbie Stabenow will not seek reelection in 2024, the longtime Michigan Democrat said Thursday, opening up a Senate seat in a key swing state.",
              "url": "https://www.cnn.com/2023/01/05/politics/debbie-stabenow-reelection/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230105092732-01-debbie-stabenow-file.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-01-05T15:49:00Z",
              "content": "Sen. Debbie Stabenow will not seek reelection in 2024, the longtime Michigan Democrat said Thursday, opening up a Senate seat in a key swing state.\r\nInspired by a new generation of leaders, I have de… [+1432 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Page Six"
              },
              "author": "Sara Nathan",
              "title": "King Charles made 'sadistic' jokes about Prince Harry's 'real' dad: memoir - Page Six",
              "description": "“He’d laugh and laugh, though it was a remarkably unfunny joke, given the rumor circulating just then that my actual father was one of Mummy’s former lovers: Major James Hewitt,&#…",
              "url": "https://pagesix.com/2023/01/05/king-charles-made-jokes-about-prince-harrys-real-dad/",
              "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/01/prince-harry-james-hewitt-prince-charles-diana.jpg?quality=75&strip=all&w=1200",
              "publishedAt": "2023-01-05T15:12:00Z",
              "content": "King Charles made “sadistic” jibes about Prince Harry’s “real” father, the prince reveals in his new memoir.\r\nHarry, 38, grew up amid public speculation that his true father was Princess Diana’s form… [+2317 chars]"
            },
            {
              "source": {
                "id": "cbs-news",
                "name": "CBS News"
              },
              "author": "Melissa Quinn, Kathryn Watson, Stefan Becket, Caroline Linton",
              "title": "House speaker election drags into third day as McCarthy searches for support - CBS News",
              "description": "The House adjourned until noon Thursday, with McCarthy saying there's been progress in talks with the Republicans opposing his bid for speaker.",
              "url": "https://www.cbsnews.com/live-updates/house-speaker-race-vote-kevin-mccarthy-watch-live-stream-today-2022-01-05/",
              "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/01/05/73c47750-b6e7-4bf7-9c52-acb1af97d2eb/thumbnail/1200x630g2/082058b01200cd31c9f872c7a9b82191/gettyimages-1246005167.jpg",
              "publishedAt": "2023-01-05T14:59:31Z",
              "content": "Speaking to reporters Thursday morning, moderate Republican Rep. Brian Fitzpatrick of Pennsylvania, an ally of McCarthy, confirmed two key changes McCarthy has offered the holdouts. \r\nThe first invol… [+2228 chars]"
            },
            {
              "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
              },
              "author": "Jonathan M. Gitlin",
              "title": "Here’s the electric car that Sony is going to build with Honda - Ars Technica",
              "description": "The new brand is called Afeela and goes on sale late 2025.",
              "url": "https://arstechnica.com/cars/2023/01/sonys-electric-car-plans-become-clearer-as-it-shows-off-prototype-at-ces/",
              "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/01/02_gallery-10-2400x1350-1-760x380.jpg",
              "publishedAt": "2023-01-05T14:44:16Z",
              "content": "Enlarge/ Sony's automotive ambitions crystallized at CES 2023 with the debut of Afeela, a new mobility brand being developed together with Honda.\r\n96 with 0 posters participating\r\nOne of the more int… [+5121 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Variety"
              },
              "author": "Zack Sharf",
              "title": "Jeremy Renner Posts Heartfelt Video Update After Snow Plow Accident: ‘A Not-Great ICU Day Turned Amazing Spa Day’ - Variety",
              "description": "Jeremy Renner has given fans another update from inside the hospital as he recovers from the snow plow accident that left him in critical condition. Over 24 hours after posting a selfie to social m…",
              "url": "https://variety.com/2023/film/news/jeremy-renner-hospital-video-update-snow-plow-accident-1235479614/",
              "urlToImage": "https://variety.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-05-at-9.35.23-AM.png?w=1000&h=563&crop=1",
              "publishedAt": "2023-01-05T14:40:00Z",
              "content": "Jeremy Renner has given fans another update from inside the hospital as he recovers from the snow plow accident that left him in critical condition. Over 24 hours after posting a selfie to social med… [+1604 chars]"
            },
            {
              "source": {
                "id": "cnn",
                "name": "CNN"
              },
              "author": "Elizabeth Wolfe, Jacob Lev",
              "title": "'I got him. We all got him.' Fellow NFLer details bedside hospital visit with Damar Hamlin as he remains in critical condition - CNN",
              "description": "As Buffalo Bills player Damar Hamlin remains in critical condition after suffering an in-game cardiac arrest, his childhood friend and fellow NFL player says there is \"no doubt in my mind\" Hamlin will recover.",
              "url": "https://www.cnn.com/2023/01/05/sport/damar-hamlin-collapse-bills-status-thursday/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230104204509-04-damar-hamlin-file.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2023-01-05T14:09:00Z",
              "content": "As Buffalo Bills player Damar Hamlin remains in critical condition after suffering an in-game cardiac arrest, his childhood friend and fellow NFL player says there is no doubt in my mind Hamlin will … [+5414 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": "Jeremy Fuster",
              "title": "‘Avatar 2’ Faces Its Next Challenge in Race to $2 Billion: the Post-Holiday Box Office - Yahoo Entertainment",
              "description": "With $1.48 billion and counting, \"The Way of Water\" looks to extend its box office legs deep into the new year",
              "url": "https://www.yahoo.com/entertainment/avatar-2-faces-next-challenge-140000540.html",
              "urlToImage": "https://media.zenfs.com/en/thewrap.com/fa817c65320cdd6f141f94b862c447d0",
              "publishedAt": "2023-01-05T14:00:00Z",
              "content": "Disney/20th Century’s “Avatar: The Way of Water” has passed “Top Gun: Maverick” to become the highest grossing release of 2022. This weekend, as the box office moves into the post-holiday period, we … [+3302 chars]"
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
            },
            {
              "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
              },
              "author": null,
              "title": "What We Know About the 'Kraken' Covid Variant XBB.1.5 and Why It's Causing Concern - Bloomberg",
              "description": null,
              "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=0013c476-8d1a-11ed-9e8c-4a586d764d58&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMS0wNS93aGF0LWlzLXRoZS1rcmFrZW4tY292aWQtdmFyaWFudC14YmItMS01LWFuZC13aHktaXQtcy1jYXVzaW5nLWNvbmNlcm4=",
              "urlToImage": null,
              "publishedAt": "2023-01-05T09:57:16Z",
              "content": "To continue, please click the box below to let us know you're not a robot."
            },
            {
              "source": {
                "id": null,
                "name": "The A.V. Club"
              },
              "author": "William Hughes",
              "title": "30 new Bachelor contestants, 30 new weird-ass contestant bios to fixate on - The A.V. Club",
              "description": "Dolphin noises, porcelain dolls, and all the other weird little tidbits from the 30 new contestants on The Bachelor season 27",
              "url": "https://www.avclub.com/30-new-bachelor-contestants-30-new-weird-ass-contestan-1849952050",
              "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/10b0523dda20ce327de9927ad988863e.png",
              "publishedAt": "2023-01-05T04:51:00Z",
              "content": "Few long-running reality shows adhere to their rhythms and rituals more tightly than ABCs Bachelor/Bachelorettefranchise. Every few months, like clockwork, a crop of 20-30 20-30-somethingsall with ve… [+6287 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Livemint"
              },
              "author": "Bloomberg",
              "title": "US economist has 100% record in predicting recessions. What he says for this year | Mint - Mint",
              "description": "Despite the yield curve being inverted for the ninth time since 1968, economist Campbell Harvey said it’s probably not a harbinger for a recession.",
              "url": "https://www.livemint.com/economy/us-economist-has-100-record-in-predicting-recessions-what-he-says-for-this-year-11672888245218.html",
              "urlToImage": "https://images.livemint.com/img/2023/01/05/600x338/US_recession_1672889429446_1672889429635_1672889429635.jpg",
              "publishedAt": "2023-01-05T03:38:14Z",
              "content": "Economist Campbell Harvey has had a winning track record since he showed in his dissertation at the University of Chicago decades ago that the shape of the bond yield curve was linked to the path of … [+4418 chars]"
            }
          ]
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
            <div className="col-md-4">
                <NewsItem title="myTitle" description="myDesc" imageUrl="https://www.reuters.com/resizer/KHFB-yHl4mPNHZYA3KY5darqaJE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D4LMDRAAPBJ7JGGJ3CFNGXOPC4.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="myTitle" description="myDesc"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="myTitle" description="myDesc"/>
            </div>
        </div>
      </div>
    )
  }
}
