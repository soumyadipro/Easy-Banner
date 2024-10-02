import React, { useState } from 'react';
import axios from 'axios';
import './UploadPage.css';

const ThemeGeneratorPage = () => {
  const [theme, setTheme] = useState('');
  const [showPromo, setShowPromo] = useState('no');
  const [promoText, setPromoText] = useState('');
  const [customColor, setCustomColor] = useState('no');
  const [primaryColors, setPrimaryColors] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageCount, setImageCount] = useState(1);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [imageFormat, setImageFormat] = useState('jpeg');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleShowPromoChange = (e) => {
    setShowPromo(e.target.value);
    if (e.target.value === 'no') {
      setPromoText('');
    }
  };

  const handlePromoTextChange = (e) => {
    setPromoText(e.target.value);
  };

  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
    if (e.target.value === 'no') {
      setPrimaryColors('');
    }
  };

  const handlePrimaryColorsChange = (e) => {
    setPrimaryColors(e.target.value);
  };

  const handleImageCountChange = (e) => {
    setImageCount(parseInt(e.target.value));
  };

  const handleAspectRatioChange = (e) => {
    setAspectRatio(e.target.value);
  };

  const handleImageFormatChange = (e) => {
    setImageFormat(e.target.value);
  };

  const generateImages = async () => {
    if (theme) {
      setLoading(true);
      setError(null);
      try {
        const promises = Array(imageCount).fill().map(() =>
          axios.get('https://us-central1-gai-ctooffice.cloudfunctions.net/intelligent-query-search/generate_banner', {
            params: {
              theme,
              show_promo: showPromo,
              promo_text: showPromo === 'yes' ? promoText : '',
              custom_color: customColor,
              primary_colors: customColor === 'yes' ? primaryColors : '',
              image_count: imageCount,
              aspect_ratio: aspectRatio,
              image_format: imageFormat,
            }
          })
        );

        const responses = await Promise.all(promises);
        const newImages = responses.map(response => response.data.image_urls);
        console.log("Generated Images:", newImages);
        setGeneratedImages(newImages);
        setHasGenerated(true);
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred during image generation. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please enter a theme');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImages();
  };

  const handleDownload = async (imageUrl, index) => {
    try {
      console.log('Image URL:', imageUrl); // Log the imageUrl for debugging

      // Check if imageUrl is an array and take the first item if so
      if (Array.isArray(imageUrl)) {
        imageUrl = imageUrl[0];
      }

      // Check if imageUrl is a string
      if (typeof imageUrl !== 'string') {
        throw new Error('Invalid image URL');
      }

      // Convert GitHub blob URL to raw content URL if necessary
      const rawUrl = imageUrl.includes('github.com') 
        ? imageUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob', '')
        : imageUrl;
      
      const response = await fetch(rawUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      
      // Extract file extension from the URL
      const fileExtension = rawUrl.split('.').pop().split('?')[0];
      link.download = `generated-image-${index + 1}.${fileExtension}`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert(`Failed to download image: ${error.message}. Please try again.`);
    }
  };

  return (
    <div className="theme-generator-page">
      <h1>Theme-Based Banner Generator</h1>
      <p>Enter a theme and generate customized Banner</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="theme">Theme:</label>
          <input
            type="text"
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            placeholder="e.g., Independence Day"
          />
        </div>
        <div className="radio-container">
          <label>Include promotional offers:</label>
          <div>
            <input
              type="radio"
              id="promo-yes"
              name="promo"
              value="yes"
              checked={showPromo === 'yes'}
              onChange={handleShowPromoChange}
            />
            <label htmlFor="promo-yes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="promo-no"
              name="promo"
              value="no"
              checked={showPromo === 'no'}
              onChange={handleShowPromoChange}
            />
            <label htmlFor="promo-no">No</label>
          </div>
        </div>
        {showPromo === 'yes' && (
          <div className="input-container">
            <label htmlFor="promo-text">Promotional Text:</label>
            <input
              type="text"
              id="promo-text"
              value={promoText}
              onChange={handlePromoTextChange}
              placeholder="Enter promotional text"
            />
          </div>
        )}
        <div className="radio-container">
          <label>Use custom colors:</label>
          <div>
            <input
              type="radio"
              id="colors-yes"
              name="colors"
              value="yes"
              checked={customColor === 'yes'}
              onChange={handleCustomColorChange}
            />
            <label htmlFor="colors-yes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="colors-no"
              name="colors"
              value="no"
              checked={customColor === 'no'}
              onChange={handleCustomColorChange}
            />
            <label htmlFor="colors-no">No</label>
          </div>
        </div>
        {customColor === 'yes' && (
          <div className="input-container">
            <label htmlFor="primary-colors">Primary Colors (comma-separated):</label>
            <input
              type="text"
              id="primary-colors"
              value={primaryColors}
              onChange={handlePrimaryColorsChange}
              placeholder="e.g., red, white, blue"
            />
          </div>
        )}
        {/* <div className="input-container">
          <label htmlFor="image-count">Number of Banners:</label>
          <select
            id="image-count"
            value={imageCount}
            onChange={handleImageCountChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div> */}
        <div className="input-container">
          <label htmlFor="aspect-ratio">Aspect Ratio:</label>
          <select
            id="aspect-ratio"
            value={aspectRatio}
            onChange={handleAspectRatioChange}
          >
            <option value="16:9">16:9</option>
            <option value="4:3">4:3</option>
            <option value="1:1">1:1</option>
            <option value="9:16">9:16</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="image-format">Image Format:</label>
          <select
            id="image-format"
            value={imageFormat}
            onChange={handleImageFormatChange}
          >
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
          </select>
        </div>
        <button type="submit" className="generate-button" disabled={loading}>
          {loading ? 'Generating...' : (hasGenerated ? 'Regenerate' : 'Generate') + ' Banners'}
        </button>
      </form>
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={generateImages}>Retry</button>
        </div>
      )}
      {generatedImages.length > 0 && (
        <div className="image-container">
          <h2>Generated Banners:</h2>
          {generatedImages.flat().map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Generated theme-based image ${index + 1}`} />
              <button onClick={() => handleDownload(image, index)} className="download-button">
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeGeneratorPage;