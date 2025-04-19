
import React from 'react'
import ReactDOM from 'react-dom/client'
import RawArtistPortfolio from './src/RawArtistPortfolio.jsx'
import PhotoGallery from './src/photo-gallery.jsx'
import VideoGallery from './src/video-gallery.jsx'

const path = window.location.pathname
let Component = RawArtistPortfolio
if (path.includes('photo-gallery')) Component = PhotoGallery
if (path.includes('video-gallery')) Component = VideoGallery

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
)
