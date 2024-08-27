
export interface FileResult {
    directories: string[]
    files: string[]
    other: string[]
} 


const getFilesFromDirectories = async (dirs:string[], _recursive:boolean = false): Promise<FileResult[]> => {
    // fetch("http://192.168.0.230:8080/").then(async (response) => {
    //   const json = await response.json()
    //   return json.files
    // });
    
    const resultFiles: FileResult[] = await Promise.all(dirs.map(async url => {
        const resp = await fetch(url);
        const json = await resp.json()
        return json
      }));

    return resultFiles
}

export default getFilesFromDirectories