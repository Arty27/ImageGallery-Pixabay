import React from 'react'

const ImageCard = ({img}) => {
    const tags=img.tags.split(',')
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg items-center">
      <img src={img.webformatURL} className='w-full' alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-400 text-xl mb-1">Photo by {img.user}</div>
        <ul>
          <li>
            <strong>Views</strong>:{img.views}
          </li>
          <li>
            <strong>Downloads</strong>:{img.downloads}
          </li>
          <li>
            <strong>Likes</strong>:{img.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {
            tags.map((tag,index)=>(
                <span className='hashtags' key={index}>
                    #{tag}
                </span>
            ))
        }
        </div>
    </div>
    )
}
export default ImageCard;
