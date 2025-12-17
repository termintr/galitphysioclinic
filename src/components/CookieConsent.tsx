import { useState, useEffect } from 'react'

const CONSENT_KEY = 'cookie_consent'

export type ConsentStatus = 'accepted' | 'declined' | 'pending'

export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending'
  const stored = localStorage.getItem(CONSENT_KEY)
  if (stored === 'accepted' || stored === 'declined') return stored
  return 'pending'
}

export function setConsentStatus(status: 'accepted' | 'declined') {
  localStorage.setItem(CONSENT_KEY, status)
}

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void
}

function CookieConsent({ onConsent }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const status = getConsentStatus()
    if (status === 'pending') {
      setIsVisible(true)
    } else {
      // If already consented, trigger the callback
      onConsent(status === 'accepted')
    }
  }, [onConsent])

  const handleAccept = () => {
    setConsentStatus('accepted')
    setIsVisible(false)
    onConsent(true)
  }

  const handleDecline = () => {
    setConsentStatus('declined')
    setIsVisible(false)
    onConsent(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="הודעת עוגיות"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(51, 51, 51, 0.95)',
        color: '#fff',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        zIndex: 9999,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
        fontSize: '0.95rem'
      }}
    >
      <span style={{ textAlign: 'center' }}>
        🍪 אתר זה משתמש בעוגיות לניתוח סטטיסטי ושיפור החוויה.
      </span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleAccept}
          style={{
            backgroundColor: '#6b46c1',
            color: '#fff',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}
        >
          אישור
        </button>
        <button
          onClick={handleDecline}
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            padding: '8px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}
        >
          דחייה
        </button>
      </div>
    </div>
  )
}

export default CookieConsent

