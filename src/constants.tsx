export const imgFormats = ["jpg", "jpeg", "gif", "png", "jiff", "webp"]

export const videoFormats = ["mp4", "webm", "mpeg", "mov", "mkv", "avi"]


export const isImg = (fileUrl: String) => {
    return imgFormats.some((e) => fileUrl.endsWith(e))
}

export const isVideo = (fileUrl: String) => {
    return videoFormats.some((e) => fileUrl.endsWith(e))
}