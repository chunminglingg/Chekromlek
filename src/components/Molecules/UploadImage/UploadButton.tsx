import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

function UploadButton() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('Error uploading file');
        }
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
    <label htmlFor="fileUpload" className="inline-flex items-center gap-2 cursor-pointer">
    <Image src="/img.svg" alt="img" width={24} height={24} />
              <p>Attachement</p>
    </label>
    <input id="fileUpload" type="file" onChange={handleFileChange} className="hidden" />
    <button onClick={handleUpload}></button>
  </div>
  );
}

export default UploadButton;
