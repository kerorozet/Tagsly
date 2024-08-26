



const getFilesFromDirectories = async (dirs:string[], _recursive:boolean = false) => {
    // fetch("http://192.168.0.230:8080/").then(async (response) => {
    //   const json = await response.json()
    //   return json.files
    // });
    

    const files: string[] = []

    const responses = await Promise.all(
        dirs.map(dir =>fetch(dir))
      );
    responses.forEach(async (response) => {
        const json = await response.json()
        files.concat(json.files)
    });
    
    return files
}

export default getFilesFromDirectories