import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Here you would typically send the file to your server or AI model
      console.log('File uploaded:', file.name);
      // Add your prediction logic here
      alert('Cancer prediction: [Your prediction result here]');
    } else {
      alert('Please select a file first');
    }
  };

  return (
    <div className="upload-page">
      <h1>Upload Medical Image</h1>
      <p>Upload your MRI or CT scan for cancer detection</p>
      <form onSubmit={handleSubmit}>
        <div className="file-input-container">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            id="file-input"
          />
          <label htmlFor="file-input" className="file-input-label">
            {file ? file.name : 'Choose file'}
          </label>
        </div>
        <button type="submit" className="predict-button">
          Predict Cancer
        </button>
      </form>
    </div>
  );
};

export default UploadPage;