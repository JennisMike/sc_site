import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import Google Fonts (Poppins)
const fontLink = document.createElement('link')
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

function Root() {
  useEffect(() => {
    // Animation for zoom-on-scroll
    const mockup = document.querySelector('.zoom-on-scroll')
    function handleScroll() {
      if (!mockup) return
      const rect = mockup.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        mockup.classList.add('zoomed')
      } else {
        mockup.classList.remove('zoomed')
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
