import React, { useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api'

const Detail = () => {
  //   const [video, setVideo] = useState({})
  const { id } = useParams()
  const apiKey = 'AIzaSyDbN61f777fY1kbaXkCRQiFHfsZ22gOQrU'
  const parameters = 'part=id,snippet'

  // const fetchVideos = () => {
  api
    .get(`/videos?id=${id}&${parameters}&key=${apiKey}`)
    .then((r) => console.log(r))
  // }

  return <div>Detail</div>
}

export default Detail
