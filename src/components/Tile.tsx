import { useEffect, useState } from "react";


interface TileProps {
    row: number,
    column: number,
    parentFileUrl: string
    onClickHandler: () => void
}


function Tile({row,column,parentFileUrl, onClickHandler}:TileProps) {
  const [fileUrl, setFileUrl] = useState(parentFileUrl)

  useEffect(() => {
    setFileUrl(parentFileUrl);
  }, [fileUrl,parentFileUrl]);
  
  let tileContent;
  if(fileUrl.endsWith("mp4")){
    tileContent = <video style={{height: "100%", maxWidth: "100%"}} muted autoPlay><source src={fileUrl} /></video>
  } else {
    tileContent = <img style={{height: "100%", maxWidth: "100%"}} src={fileUrl} />
  }

  return (<div key={"tile-"+fileUrl+"-"+row+column} style={{height: "100%", maxWidth: "100%"}} onClick={onClickHandler}>{tileContent}</div>)

}

export default Tile