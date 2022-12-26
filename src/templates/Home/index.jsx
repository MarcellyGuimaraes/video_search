import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'

const Home = () => {
  const [videos, setVideos] = useState(null)
  const [search, setSearch] = useState('')
  const apiKey = 'AIzaSyDbN61f777fY1kbaXkCRQiFHfsZ22gOQrU'
  const parameters = 'part=id,snippet&maxResults=50&type=video'

  const handleSearch = () => {
    api
      .get(`/search?q=${search}&${parameters}&key=${apiKey}`)
      .then((r) => setVideos(r.data.items))
  }

  useEffect(() => {
    handleSearch()
  }, [])

  if (!videos) return null

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
      <div className="grid grid-cols-1 place-items-center gap-0 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {console.log(videos)}
        {search ? (
          videos.map((video) => (
            <div className="mb-6">
              <img src={video.snippet.thumbnails.high.url} alt="" />
              <p className="text-xl font-bold max-w-md overflow-hidden">
                {video.snippet.title}
              </p>
              <p className="text-sm text-gray-500">
                {video.snippet.channelTitle}
              </p>
              <p className="truncate max-w-md">{video.snippet.description}</p>
              <Link
                to={`/detail/${video.id.videoId}`}
                className="bg-red-600 p-2 mt-5 text-white rounded-md"
              >
                Ver Mais
              </Link>

              <br />
            </div>
          ))
        ) : (
          <p>Pesquise aqui seu vídeo</p>
        )}
      </div>
    </>
  )
}

export default Home
