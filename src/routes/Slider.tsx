import { useEffect, useState } from 'react'

import getFilesFromDirectories, { FileResult } from '../api/FileApi'
import MediaGrid from '../components/MediaGrid'


function Slider() {
  const [files, setFiles] = useState([] as string[])

  useEffect(() => {
    getFilesFromDirectories(["http://192.168.0.230:8080/", "http://192.168.0.230:8080/WindowsImageBackup/Options/Webm","http://192.168.0.230:8080/WindowsImageBackup/Options/Stuff%20to%20Sort"]).then((resp:FileResult[]) => {
      console.log(resp)
      setFiles(resp.flatMap(r => r.files))
    })
  }, [])

  return  files.length ? <MediaGrid files={files} columns={4} rows={3}/> : <div>Loading....</div>

}

export default Slider
