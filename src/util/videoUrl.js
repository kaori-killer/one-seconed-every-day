const getAllowedVideoUrl = (e) => {
    const file = e.target.files[0];
    const allowedVideoUrl = URL.createObjectURL(file);
    return allowedVideoUrl;
}

export default getAllowedVideoUrl;