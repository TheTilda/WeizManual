import React from 'react';

const GOLD = '#B7A171';
const DARK = '#231F20';

const files = [
  { name: 'Omni Barista C1P', path: 'C1P.pdf', size: '8,6 МБ' },
];

function App() {
  return (
    <div style={{
      minHeight: '100vh', background: '#f6f3ee', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: DARK,
    }}>
      <div className="container" style={{
        background: '#fff', margin: '32px 16px 0 16px', padding: '36px 20px 24px 20px', borderRadius: 18, boxShadow: '0 2px 12px rgba(35,31,32,0.07)', maxWidth: 420, width: '100%', boxSizing: 'border-box'
      }}>
        <img src="weiz-logo.png" alt="WEIZ" style={{ display: 'block', height: 44, margin: '0 auto 22px auto' }} />
        <div style={{ width: 48, height: 3, background: GOLD, borderRadius: 2, margin: '0 auto 22px auto' }} />
        <h1 style={{ fontSize: '1.7em', margin: '0 0 0.4em 0', color: DARK, textAlign: 'center', fontWeight: 600 }}>Руководство по эксплуатации</h1>
        <p style={{ textAlign: 'center', color: '#6b6563', margin: '0 0 1.8em 0', fontSize: '1.02em', lineHeight: 1.45 }}>
          Выберите вашу кофемашину, чтобы открыть или скачать инструкцию.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5em 0' }}>
          {files.map(file => (
            <li key={file.path}>
              <a
                className="file-link"
                href={file.path}
                download
                style={{
                  display: 'flex', alignItems: 'center', background: '#f6f3ee', border: `1.5px solid ${GOLD}`, borderRadius: 12, marginBottom: 14, padding: '16px 18px', textDecoration: 'none', color: DARK, fontSize: '1.1em', fontWeight: 500, transition: 'background 0.18s, color 0.18s'
                }}
                onMouseOver={e => (e.currentTarget.style.background = GOLD, e.currentTarget.style.color = '#fff')}
                onMouseOut={e => (e.currentTarget.style.background = '#f6f3ee', e.currentTarget.style.color = DARK)}
              >
                <span style={{ display: 'inline-block', marginRight: 14, fontSize: '1.4em', flexShrink: 0 }}>📄</span>
                <span style={{ flex: 1 }}>{file.name}</span>
                <span style={{ fontSize: '0.78em', opacity: 0.6, flexShrink: 0 }}>PDF · {file.size}</span>
              </a>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: 'center', color: '#8a8482', fontSize: '0.92em', margin: '0 0 1.4em 0' }}>
          Если вы открыли страницу по QR-коду — просто нажмите на нужную модель.
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.88em', margin: 0, lineHeight: 1.7 }}>
          <a href="https://weiz.ru" style={{ color: GOLD, textDecoration: 'none' }}>weiz.ru</a>
          <span style={{ color: '#ccc', margin: '0 8px' }}>·</span>
          <a href="https://vk.com/weizoff" style={{ color: GOLD, textDecoration: 'none' }}>ВКонтакте</a>
          <span style={{ color: '#ccc', margin: '0 8px' }}>·</span>
          <a href="mailto:hi@weiz.ru" style={{ color: GOLD, textDecoration: 'none' }}>hi@weiz.ru</a>
        </p>
      </div>
      <p style={{ color: '#a8a19b', fontSize: '0.8em', margin: '18px 0 24px 0' }}>Кофейня дома. Каждый день.</p>
      <style>{`
        body { margin: 0; }
        @media (max-width: 600px) {
          .container {
            margin: 0 !important;
            border-radius: 0 !important;
            min-height: calc(100vh - 60px) !important;
            box-shadow: none !important;
            padding: 28px 16px 18px 16px !important;
            max-width: 100vw !important;
          }
          h1 {
            font-size: 1.35em !important;
          }
          .file-link {
            font-size: 1em !important;
            padding: 14px 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
