function VideoPlayer({ videoSrc }) {
    if (!videoSrc) {
      return <p>Loading video...</p>; // Handle missing video source
    }
  
    return (
      <video controls width="800">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  
  export default VideoPlayer;
  