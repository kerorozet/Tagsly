import { useEffect, useState } from 'react'

import getFilesFromDirectories from '../api/FileApi'
import MediaGrid from '../components/MediaGrid'


function Slider() {
  const [files, setFiles] = useState([])

  useEffect(() => {
    getFilesFromDirectories(["http://192.168.0.230:8080/"]). then((resp) => {
      console.log(resp)
    })
    fetch("http://192.168.0.230:8080/").then(async (response) => {
      const json = await response.json()
      setFiles(json.files)
    });
  }, [])

  return  files.length ? <MediaGrid files={files} columns={4} rows={3}/> : <div>Loading....</div>

}

export default Slider
