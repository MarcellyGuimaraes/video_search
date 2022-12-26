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
    <div className="flex flex-col">
      <div>
        <Link to="/home">Voltar</Link>
        <h1>{video[0].snippet.title}</h1>
      </div>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
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
