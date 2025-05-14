import React from 'react'
import './video.css'
function video() {
  return (
    <>
    <div className="video-container">
    <video className="my-video" autoPlay muted loop controls>
        <source src="https://youtu.be/0xYbjnJdtp0?si=VeS1qq7VDaK3VVQf" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default video