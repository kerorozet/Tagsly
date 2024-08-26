import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Tile from './Tile';


interface MediaGridProps {
    columns: number
    rows: number
    files: string[]
}


function MediaGrid({ columns, rows, files }: MediaGridProps) {
    const [gridFiles, setGridFiles] = useState([] as string[][])
    const [heightPercent, setHeightPercent] = useState("33.333%")

    const shuffleGrid = () => {
        const arr = [...Array(rows).keys()].map(() => {
            return [...Array(columns).keys()].map(() => {
                return files[(Math.floor(Math.random() * files.length))]
            })
        })

        setGridFiles(arr)
    }

    const handleKeyPress = (event:KeyboardEvent) => {
        if(event.code === "Space"){
            shuffleGrid();
        }
    };
    
    const onClickHandle  = (r:number,c:number) => {
        console.log("click")
        var temp = gridFiles
        temp[r][c] = files[(Math.floor(Math.random() * files.length))]
        setGridFiles(temp)
    }   ;

    useEffect(() => {
        setHeightPercent(100 / rows + "%")
        shuffleGrid()
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [])

    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            {gridFiles.length > 0 && [...Array(rows).keys()].map((r) => {
                return (
                    <Grid  key={"row" + r}container spacing={0} alignItems="stretch" sx={{ height: heightPercent, marginTop: "-2px" }} columns={100}>
                        {[...Array(columns).keys()].map((c) => {
                            console.log(gridFiles[r][c])
                            return (
                                <Grid xs={100 / columns} sx={{ width: "100%", height: "100%" }} key={"column" + r + "-" + c + "-" + gridFiles[r][c] }>
                                    <Tile key={"tile" + r + "-" + c + "-" + gridFiles[r][c]} parentFileUrl={gridFiles[r][c]} onClickHandler={() => onClickHandle(r,c)} row={r} column={c} />
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            })}
        </Box>
    )
}

export default MediaGrid
