import React, { useState } from 'react'

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const selectedFileHandler = (event) => {
    console.log(event.target.files[0])
    setSelectedImage(event.target.files[0])
  }
  const uploadFileHandler = () => {

  }
  return (
    <div>
      <input type='file' onChange={selectedFileHandler}/>
    </div>
  )
}

export default UploadImage