import React from 'react'
import moment from 'moment'
import './document.scss'
const Document = ({data}) => {
    return (
        <div className='documentContainer'>
            <h2>{data.title}</h2>
            <span dangerouslySetInnerHTML={{ __html: data.notes}} />
            <p className='smallText'>{moment(data.createdDate.toDate()).calendar()}</p>
        </div>
    )
}

export default Document
