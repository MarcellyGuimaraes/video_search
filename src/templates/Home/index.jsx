import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import data from '../../data.json'
import api from '../../api'

const Home = () => {
  const [videos, setVideos] = useState(null)
  const [search, setSearch] = useState('')
  const getItem = localStorage.getItem('lastSearch')
  const apiKey = 'AIzaSyDbN61f777fY1kbaXkCRQiFHfsZ22gOQrU'
  const parameters = 'part=id,snippet&maxResults=30&type=video'

  const handleSearch = () => {
    api
      .get(`/search?q=${search}&${parameters}&key=${apiKey}`)
      .then((r) => setVideos(r.data.items))
  }

  useEffect(() => {
    getItem
      ? api
          .get(`/search?q=${getItem}&${parameters}&key=${apiKey}`)
          .then((r) => setVideos(r.data.items))
      : handleSearch()
  }, [])

  const handleSave = () => {
    localStorage.setItem('lastSearch', search)
  }

  if (!videos) return null

  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="p-2 bg-slate-100 border m-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="rounded-md bg-red-600 p-2 text-white hover:bg-red-800"
          onClick={handleSearch}
        >
          Pesquisar
        </button>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:place-items-start lg:justify-items-center">
        {search || getItem ? (
          videos.map((video) => (
            <div className="mb-6 w-4/5" key={video.id.videoId}>
              <img
                src={video.snippet.thumbnails.high.url}
                className="w-full h-full"
                alt=""
              />
              <p className="text-xl font-bold max-w-md overflow-hidden">
                {video.snippet.title}
              </p>
              <p className="text-sm text-gray-500">
                {video.snippet.channelTitle}
              </p>
              <p className="truncate max-w-md mb-4">
                {video.snippet.description}
              </p>
              <Link
                to={`/detail/${video.id.videoId}`}
                onClick={handleSave}
                className="rounded-md bg-red-600 p-2 text-white hover:bg-red-800"
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
