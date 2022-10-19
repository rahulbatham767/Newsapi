import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { source, title, description, imageurl, newsurl, author, time } = this.props;
    return (

      <>
      <div className="my-3">
        <div className="card">
        <div style={{
    display: 'flex',
    justifyContent: 'end',
    position:'absolute',
    right:0
    }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>

          </div>
          </div>
      
          <img src={!imageurl ? "https://image.cnbcfm.com/api/v1/image/107134729-1665751352674-gettyimages-1349325190-img_7046-edit.jpeg?v=1665967779&w=1920&h=1080" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small>By {author} updated {new Date(time).toGMTString()}</small></p>

            <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More...</a>
          </div>
          </div>
         </>
    )
  }
}

export default NewsItem;