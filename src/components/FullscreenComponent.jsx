import React from 'react'
import myFile from '../video/download.mp4';

const scCam = () => {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
      <video 
        width="100%" 
        height="100%" 
        autoPlay 
        
        loop
        style={{ objectFit: 'cover' }}
      >
        <source src={myFile} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  )
}

export default scCam
