import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, descreption, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-3' >
                <div className="card" style={{ justifyContent: 'space-around' }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {source} </span>

                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown Author"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <p>{descreption}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>

                    </div>

                </div>


            </div>
        )
    }
}

export default NewsItem
