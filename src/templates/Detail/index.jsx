import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import api from '../../api'

const Detail = () => {
  const { id } = useParams()
  const [video, setVideo] = useState()
  const apiKey = 'AIzaSyDHbXxJy7o3QNfk19XCG49fpkWm_WswAlc'
  const parameters = 'part=statistics,snippet'

  useEffect(() => {
    api
      .get(`/videos?id=${id}&${parameters}&key=${apiKey}`)
      .then((r) => setVideo(r.data.items))
  }, [])
  if (!video) return null

  return (
    <div className="mt-20 px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex">
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <h1>{video[0].snippet.title}</h1>
      </div>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          className="w-full h-full"
          src={`http://www.youtube.com/embed/${video[0].id}?autoplay=1`}
          frameBorder="0"
        />
        <h2>{video[0].snippet.channelTitle}</h2>
        <p>{video[0].snippet.description}</p>
        <strong>{video[0].statistics.viewCount} Views</strong>
        <br />
        <strong>{video[0].statistics.likeCount} Likes</strong>
      </div>
    </div>
  )
}

export default Detail
