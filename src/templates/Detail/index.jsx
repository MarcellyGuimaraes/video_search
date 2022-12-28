import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import api from '../../api'
import { BackIcon, LikeIcon } from '../../icons'

const Detail = () => {
  const { id } = useParams()
  const [video, setVideo] = useState()
  const apiKey = 'AIzaSyDHbXxJy7o3QNfk19XCG49fpkWm_WswAlc'
  const parameters = 'part=statistics,snippet'

  useEffect(() => {
    api
      .get(`/videos?id=${id}&${parameters}&key=${apiKey}`)
      .then((r) => setVideo(r.data.items))
    localStorage.getItem('lastSearch')
  }, [])
  if (!video) return null

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 px-7 md:grid-cols-2 lg:mr-60">
        <div className="flex mb-12 justify-center">
          <Link className="border border-black h-fit mr-6" to="/home">
            <BackIcon />
          </Link>
          <h1 className="text-xl font-semibold">{video[0].snippet.title}</h1>
        </div>

        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            className="w-full h-96"
            src={`http://www.youtube.com/embed/${video[0].id}?autoplay=1`}
            frameBorder="0"
          />
          <div className="flex justify-between m-3">
            <h2 className="text-xl">{video[0].snippet.channelTitle}</h2>
            <strong className="flex">
              {video[0].statistics.likeCount}
              <LikeIcon />
            </strong>
          </div>

          <div className="m-3">
            <p className="text-slate-800 mb-3">
              {video[0].snippet.description}
            </p>
            <strong>{video[0].statistics.viewCount} Views</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
