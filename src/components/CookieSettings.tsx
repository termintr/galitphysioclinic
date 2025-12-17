import { useState, useEffect } from 'react'
import { getConsentStatus, setConsentStatus } from './CookieConsent'
import { loadGoogleAnalytics } from '../utils/analytics'

interface CookieSettingsProps {
  isOpen: boolean
  onClose: () => void
}

function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const status = getConsentStatus()
      setAnalyticsEnabled(status === 'accepted')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleSave = () => {
    if (analyticsEnabled) {
      setConsentStatus('accepted')
      loadGoogleAnalytics()
    } else {
      setConsentStatus('declined')
      // Note: To fully disable GA after it was enabled, a page reload is needed
    }
    onClose()
    // Reload page to apply changes
    window.location.reload()
  }

  if (!isOpen) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        style={{
          backgroundColor: '#fff',
          color: '#333',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '450px',
          width: '100%',
          textAlign: 'right',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          position: 'relative',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="סגור הגדרות עוגיות"
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          }}
        >
          ✕
        </button>
        
        <h3 id="cookie-settings-title" style={{ marginBottom: '20px', fontSize: '1.3rem', color: '#6b46c1' }}>
          🍪 הגדרות עוגיות
        </h3>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            marginBottom: '10px'
          }}>
            <div>
              <strong>עוגיות הכרחיות</strong>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: '5px 0 0 0' }}>
                נדרשות לתפקוד האתר
              </p>
            </div>
            <span style={{ color: '#6b46c1', fontWeight: 'bold' }}>תמיד פעיל</span>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px'
          }}>
            <div>
              <strong>עוגיות אנליטיקה</strong>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: '5px 0 0 0' }}>
                Google Analytics - לשיפור חוויית המשתמש
              </p>
            </div>
            <label style={{ 
              position: 'relative', 
              display: 'inline-block', 
              width: '50px', 
              height: '26px' 
            }}>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: analyticsEnabled ? '#6b46c1' : '#ccc',
                transition: '0.3s',
                borderRadius: '26px'
              }}>
                <span style={{
                  position: 'absolute',
                  content: '',
                  height: '20px',
                  width: '20px',
                  left: analyticsEnabled ? '27px' : '3px',
                  bottom: '3px',
                  backgroundColor: 'white',
                  transition: '0.3s',
                  borderRadius: '50%'
                }} />
              </span>
            </label>
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '20px' }}>
          שינוי ההגדרות יגרום לרענון הדף.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            onClick={handleSave}
            style={{
              backgroundColor: '#6b46c1',
              color: '#fff',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            שמור העדפות
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              color: '#666',
              border: '1px solid #ccc',
              padding: '10px 30px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            ביטול
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieSettings

