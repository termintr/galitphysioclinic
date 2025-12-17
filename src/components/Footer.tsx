import { useState } from 'react'
import fullLogo from '../../public/assets/fulllogo.png'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'
import AccessibilityStatement from './AccessibilityStatement'
import CookieSettings from './CookieSettings'

function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showTermsOfUse, setShowTermsOfUse] = useState(false)
  const [showAccessibilityStatement, setShowAccessibilityStatement] = useState(false)
  const [showCookieSettings, setShowCookieSettings] = useState(false)

  const linkButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '0.9rem',
    padding: '4px 8px'
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={fullLogo} alt="גלית ריכטר לוגו" style={{ height: '140px', objectFit: 'contain' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: 0, marginBottom: 0, fontSize: '1rem', lineHeight: 1 }}>
          עמק יזרעאל 14, קדימה | 2025 ©
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
          <span><a href="mailto:galitush1@gmail.com">galitush1@gmail.com</a></span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
          <span><a href="tel:+972526598076">052-6598076</a></span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '5px', marginTop: '10px'}}>
          <button 
            onClick={() => setShowPrivacyPolicy(true)}
            style={linkButtonStyle}
          >
            מדיניות פרטיות
          </button>
          <span style={{ opacity: 0.5 }}>|</span>
          <button 
            onClick={() => setShowTermsOfUse(true)}
            style={linkButtonStyle}
          >
            תנאי שימוש
          </button>
          <span style={{ opacity: 0.5 }}>|</span>
          <button 
            onClick={() => setShowAccessibilityStatement(true)}
            style={linkButtonStyle}
          >
            הצהרת נגישות
          </button>
          <span style={{ opacity: 0.5 }}>|</span>
          <button 
            onClick={() => setShowCookieSettings(true)}
            style={linkButtonStyle}
          >
            הגדרות עוגיות
          </button>
        </div>
      </div>

      <PrivacyPolicy 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
      <TermsOfUse 
        isOpen={showTermsOfUse} 
        onClose={() => setShowTermsOfUse(false)} 
      />
      <AccessibilityStatement 
        isOpen={showAccessibilityStatement} 
        onClose={() => setShowAccessibilityStatement(false)} 
      />
      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
      />
    </footer>
  )
}

export default Footer 