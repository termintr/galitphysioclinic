import { useEffect } from 'react'

interface AccessibilityStatementProps {
  isOpen: boolean
  onClose: () => void
}

function AccessibilityStatement({ isOpen, onClose }: AccessibilityStatementProps) {
  // Handle Escape key to close dialog
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
        id="accessibility-statement"
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-title"
        style={{
          backgroundColor: '#fff',
          color: '#333',
          borderRadius: '12px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '80vh',
          position: 'relative',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <button
          onClick={onClose}
          aria-label="סגור הצהרת נגישות"
          className="modal-close-button"
        >
          ✕
        </button>
        
        <div style={{
          padding: '30px',
          overflowY: 'auto',
          textAlign: 'right',
          fontSize: '0.95rem',
          lineHeight: '1.7'
        }}>
        <h3 id="accessibility-title" style={{ marginBottom: '15px', fontSize: '1.3rem', color: '#6b46c1' }}>
          הצהרת נגישות
        </h3>
        <p>
          אתר זה מונגש בהתאם לתקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG 2.0 הבינלאומי.
        </p>

        <p style={{ marginTop: '15px' }}>
          <strong>עיצוב ומבנה האתר:</strong>
        </p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>האתר עוצב בצבעים ניגודיים המאפשרים שימוש מיטבי לכבדי ראייה ועיוורי צבעים</li>
          <li>מבנה היררכי ונכון לכותרות ותתי-כותרות</li>
          <li>קישורים ברורים המכילים הסבר לאן הם מקשרים</li>
          <li>שמירה על גודל פונט מינימלי</li>
          <li>האתר רספונסיבי ומותאם לגדלים שונים של מסך, כולל טלפונים ניידים וטאבלטים</li>
        </ul>

        <p style={{ marginTop: '15px' }}>
          <strong>אמצעי נגישות:</strong>
        </p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>התאמת גודל טקסט</li>
          <li>שינוי ניגודיות</li>
          <li>מצב שחור-לבן</li>
          <li>תאימות לקוראי מסך</li>
          <li>לאובייקטים גרפיים קיימת חלופה טקסטואלית (alt)</li>
        </ul>

        <p style={{ marginTop: '15px' }}>
          <strong>שליטה באמצעות מקלדת:</strong>
        </p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>ניתן לגלוש באתר באמצעות מקלדת בלבד</li>
          <li>לחיצה על Tab מעבירה בין הקישורים והאלמנטים השונים בעמוד</li>
          <li>לחיצה על Enter מפעילה את הקישור או הכפתור המסומן</li>
          <li>לחיצה על Escape סוגרת חלונות קופצים ותפריטים</li>
        </ul>

        <p style={{ marginTop: '15px' }}>
          <strong>טפסים:</strong>
        </p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>שדות טפסים מסומנים כראוי</li>
          <li>הודעות שגיאה מסופקות בצורה ברורה ומובנת</li>
        </ul>

        <p style={{ marginTop: '15px' }}>
          <strong>בטיחות:</strong>
        </p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>נמנענו משימוש בתוכן שעלול לגרום להתקפים או אי נוחות למשתמשים עם אפילפסיה רגישה לאור</li>
        </ul>

        <p style={{ marginTop: '15px' }}>
          <strong>מחויבות לשיפור מתמיד:</strong>
        </p>
        <p style={{ marginTop: '5px' }}>
          אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות. יתכן ויתגלו חלקים באתר שטרם הונגשו במלואם.
        </p>

        <p style={{ marginTop: '15px' }}>
          <strong>נתקלתם בבעיית נגישות?</strong> אנא פנו אלינו:
        </p>
        <p style={{ marginTop: '5px' }}>
          טלפון: <a href="tel:+972526598076" style={{ color: '#6b46c1' }}>052-6598076</a>
          <br />
          אימייל: <a href="mailto:galitush1@gmail.com" style={{ color: '#6b46c1' }}>galitush1@gmail.com</a>
        </p>
        <p style={{ marginTop: '15px', fontSize: '0.85rem', opacity: 0.7 }}>
          תאריך עדכון הצהרת הנגישות: דצמבר 2025
        </p>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityStatement

