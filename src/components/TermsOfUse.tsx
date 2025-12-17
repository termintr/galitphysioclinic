import { useEffect } from 'react'

interface TermsOfUseProps {
  isOpen: boolean
  onClose: () => void
}

function TermsOfUse({ isOpen, onClose }: TermsOfUseProps) {
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
        aria-labelledby="terms-title"
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
          aria-label="סגור תנאי שימוש"
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
        
        <h3 id="terms-title" style={{ marginBottom: '15px', fontSize: '1.3rem', color: '#6b46c1' }}>
          תנאי שימוש
        </h3>
        
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '15px' }}>
          עודכן לאחרונה: דצמבר 2025
        </p>

        <p>
          תנאי שימוש אלו מהווים הסכם משפטי מחייב בין גלית ריכטר - פיזיותרפיה ("האתר", "אנחנו") 
          לבין המשתמשים באתר galitrichter.com ("משתמש", "אתה"). 
          השימוש באתר מעיד על הסכמתך לתנאים אלו.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>הגבלת גיל</h4>
        <p>
          השימוש באתר מיועד לבגירים מעל גיל 18 בלבד. 
          המשתמש מצהיר ומתחייב כי הינו בן 18 לפחות ובעל כשרות משפטית.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>המידע באתר אינו תחליף לייעוץ רפואי</h4>
        <p>
          <strong>חשוב:</strong> התוכן באתר מיועד לספק מידע אינפורמטיבי בלבד ואינו מהווה תחליף 
          לייעוץ רפואי, אבחון או טיפול מקצועי. 
        </p>
        <p style={{ marginTop: '10px' }}>
          כל מידע המוצג באתר, לרבות מידע אודות שירותי פיזיותרפיה, טכניקות טיפול ומצבים רפואיים, 
          נועד למטרות הסברה כלליות בלבד. אין להסתמך על מידע זה כתחליף להתייעצות עם איש מקצוע מוסמך.
        </p>
        <p style={{ marginTop: '10px' }}>
          לפני תחילת כל טיפול פיזיותרפי, יש להתייעץ עם רופא או פיזיותרפיסט מוסמך. 
          השימוש במידע באתר הינו באחריותך הבלעדית.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>שירותי האתר</h4>
        <p>האתר מספק מידע אודות:</p>
        <ul style={{ marginRight: '20px', marginTop: '8px' }}>
          <li>שירותי פיזיותרפיה המוצעים בקליניקה</li>
          <li>טכניקות טיפול בתחום רצפת האגן והשיקום הוסטיבולרי</li>
          <li>מידע מקצועי בתחומי הטיפול</li>
          <li>אפשרות ליצירת קשר וקביעת תורים</li>
        </ul>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>קניין רוחני</h4>
        <p>
          כל התכנים באתר, לרבות טקסטים, תמונות, לוגו ועיצוב, הינם קניינה הבלעדי של גלית ריכטר 
          או של בעלי הזכויות הרלוונטיים. אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי 
          בתכנים ללא אישור מראש ובכתב.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>הגבלת אחריות</h4>
        <p>
          האתר והתכנים המופיעים בו מסופקים "כמות שהם" (AS IS). 
          איננו מתחייבים לדיוק, שלמות או עדכניות המידע באתר.
        </p>
        <p style={{ marginTop: '10px' }}>
          לא נישא באחריות לכל נזק ישיר או עקיף הנובע מהשימוש באתר או מהסתמכות על המידע בו, 
          לרבות נזקים הנובעים מאי-זמינות האתר, שגיאות או השמטות בתוכן.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>קישורים לאתרים חיצוניים</h4>
        <p>
          האתר עשוי להכיל קישורים לאתרים חיצוניים. אין לנו שליטה על תוכן אתרים אלו 
          ואיננו אחראים לתוכנם או למדיניות הפרטיות שלהם.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>שינויים באתר ובתנאים</h4>
        <p>
          אנו שומרים לעצמנו את הזכות לשנות, לעדכן או להפסיק את פעילות האתר או חלקים ממנו 
          בכל עת וללא הודעה מוקדמת. כמו כן, אנו רשאים לעדכן תנאי שימוש אלו מעת לעת.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>דין וסמכות שיפוט</h4>
        <p>
          על תנאי שימוש אלו יחולו דיני מדינת ישראל בלבד. 
          סמכות השיפוט הבלעדית בכל עניין הנוגע לתנאים אלו תהיה לבתי המשפט המוסמכים במחוז המרכז.
        </p>

        <h4 style={{ marginTop: '20px', marginBottom: '10px', color: '#6b46c1' }}>יצירת קשר</h4>
        <p>לשאלות בנוגע לתנאי השימוש, ניתן לפנות אלינו:</p>
        <p style={{ marginTop: '5px' }}>
          טלפון: <a href="tel:+972526598076" style={{ color: '#6b46c1' }}>052-6598076</a>
          <br />
          אימייל: <a href="mailto:galitush1@gmail.com" style={{ color: '#6b46c1' }}>galitush1@gmail.com</a>
          <br />
          כתובת: עמק יזרעאל 14, קדימה
        </p>
      </div>
    </div>
  )
}

export default TermsOfUse

