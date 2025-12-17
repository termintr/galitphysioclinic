import { useEffect } from 'react'

interface PrivacyPolicyProps {
  isOpen: boolean
  onClose: () => void
}

function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
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
        aria-labelledby="privacy-title"
        style={{
          backgroundColor: '#fff',
          color: '#333',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          textAlign: 'right',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          position: 'relative',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}
      >
        <button
          onClick={onClose}
          aria-label="סגור מדיניות פרטיות"
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
        
        <h3 id="privacy-title" style={{ marginBottom: '15px', fontSize: '1.3rem', color: '#6b46c1' }}>
          מדיניות פרטיות
        </h3>
        
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '15px' }}>
          עודכן לאחרונה: דצמבר 2025
        </p>

        <p>
          גלית ריכטר - פיזיותרפיה ("האתר", "אנחנו") מכבדת את פרטיות המשתמשים באתר galitrichter.com. 
          מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>מידע שאנו אוספים</h4>
        
        <p><strong>מידע שנמסר על ידך:</strong></p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>שם מלא - בעת מילוי טופס יצירת קשר</li>
          <li>כתובת אימייל - לצורך מענה לפנייתך</li>
          <li>תוכן ההודעה - הפנייה שלך אלינו</li>
        </ul>

        <p style={{ marginTop: '15px' }}><strong>מידע שנאסף אוטומטית:</strong></p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>נתוני גלישה אנונימיים באמצעות Google Analytics (כתובת IP אנונימית, דפים שנצפו, זמן שהייה)</li>
          <li>סוג הדפדפן והמכשיר</li>
        </ul>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>שימוש במידע</h4>
        <p>המידע שנאסף משמש אותנו אך ורק למטרות הבאות:</p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>מענה לפניות ובקשות ליצירת קשר</li>
          <li>שיפור חוויית המשתמש באתר</li>
          <li>ניתוח סטטיסטי של השימוש באתר</li>
        </ul>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>שירותי צד שלישי</h4>
        <p>האתר משתמש בשירותים הבאים:</p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li><strong>Google Analytics</strong> - לניתוח סטטיסטי של תנועת הגולשים</li>
          <li><strong>EmailJS</strong> - לשליחת טופס יצירת הקשר</li>
          <li><strong>Google Maps</strong> - להצגת מיקום הקליניקה</li>
          <li><strong>Google Fonts</strong> - לטעינת גופנים</li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          שירותים אלו עשויים לאסוף מידע בהתאם למדיניות הפרטיות שלהם.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>עוגיות (Cookies)</h4>
        <p>
          האתר משתמש בעוגיות של Google Analytics לצורך ניתוח סטטיסטי. 
          ניתן לחסום עוגיות דרך הגדרות הדפדפן שלך.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>אבטחת מידע</h4>
        <p>
          אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע שלך. 
          יחד עם זאת, אין באפשרותנו להבטיח אבטחה מוחלטת של מידע המועבר באינטרנט.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>שמירת מידע</h4>
        <p>
          פניות שמתקבלות דרך טופס יצירת הקשר נשמרות בתיבת האימייל שלנו לצורך מעקב ומענה בלבד.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>זכויותיך</h4>
        <p>הנך רשאי/ת לפנות אלינו בכל עת על מנת:</p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>לבקש מידע על הנתונים שנאספו אודותיך</li>
          <li>לבקש תיקון או מחיקה של מידע</li>
          <li>לבקש הפסקת שימוש במידע</li>
        </ul>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>יצירת קשר</h4>
        <p>לשאלות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:</p>
        <p style={{ marginTop: '5px' }}>
          טלפון: <a href="tel:+972526598076" style={{ color: '#6b46c1' }}>052-6598076</a>
          <br />
          אימייל: <a href="mailto:galitush1@gmail.com" style={{ color: '#6b46c1' }}>galitush1@gmail.com</a>
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>שינויים במדיניות</h4>
        <p>
          אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. 
          שינויים מהותיים יפורסמו באתר.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy

