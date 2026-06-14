/* site-components.jsx — Shared components for Melcie Massage site
 * Exports: SiteColors, SiteFonts, Placeholder, SectionLabel, Nav, Footer, FAQItem
 */

const SiteColors = {
  green: '#2B6B4D',
  greenDark: '#1F5038',
  greenLight: '#EBF1ED',
  gold: '#C9A84C',
  text: '#2C2C2C',
  textLight: '#5A5856',
  gray: '#8A8680',
  bg: '#FAFAF8',
  light: '#F3F2EF',
  border: '#E5E3DF',
  white: '#FFFFFF',
};

const SiteFonts = {
  heading: "'Libre Baskerville', serif",
  body: "'Outfit', sans-serif",
};

/* ─── Placeholder ─── */
function Placeholder({ label, h = 400, style }) {
  return (
    <div style={{
      width: '100%', height: h,
      background: 'repeating-linear-gradient(45deg, #eceae6, #eceae6 10px, #f3f1ed 10px, #f3f1ed 20px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 4, ...style,
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: 13, color: '#999',
        background: 'rgba(255,255,255,0.85)', padding: '6px 14px', borderRadius: 4,
        textAlign: 'center', maxWidth: 280, lineHeight: 1.5,
      }}>{label}</span>
    </div>
  );
}

/* ─── Section label (uppercase green tag) ─── */
function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: SiteFonts.body, fontSize: 13, letterSpacing: '0.15em',
      textTransform: 'uppercase', color: SiteColors.green, fontWeight: 400,
      marginBottom: 14,
    }}>{children}</p>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Hours', id: 'hours' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Videos', id: 'videos' },
    { label: 'Contact', id: 'contact' },
  ];

  const navLinkStyle = {
    fontSize: 14, color: SiteColors.gray, cursor: 'pointer',
    transition: 'color 0.2s',
    fontFamily: SiteFonts.body,
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      padding: '0 56px', height: 72,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: SiteColors.white,
      borderBottom: `1px solid ${SiteColors.border}`,
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Left links */}
      <div style={{ display: 'flex', gap: 28, flex: 1 }}>
        {links.slice(0, 3).map(l => (
          <span key={l.id} onClick={() => scrollTo(l.id)}
            style={navLinkStyle}
            onMouseEnter={e => e.target.style.color = SiteColors.green}
            onMouseLeave={e => e.target.style.color = SiteColors.gray}
          >{l.label}</span>
        ))}
      </div>

      {/* Center logo */}
      <div style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={window.__resources?.logo || "uploads/Gemini_Generated_Image_lz6fo9lz6fo9lz6f.png"}
          alt="Melcie Massage" style={{ height: 44, display: 'block', borderRadius: 4 }} />
      </div>

      {/* Right links + CTA */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
        {links.slice(3).map(l => (
          <span key={l.id} onClick={() => scrollTo(l.id)}
            style={navLinkStyle}
            onMouseEnter={e => e.target.style.color = SiteColors.green}
            onMouseLeave={e => e.target.style.color = SiteColors.gray}
          >{l.label}</span>
        ))}
        <a href="https://melciemassage.schedulista.com/" target="_blank" rel="noopener" style={{
          background: SiteColors.green, color: '#fff', padding: '10px 24px',
          borderRadius: 4, fontSize: 13, fontWeight: 500, cursor: 'pointer',
          textDecoration: 'none', fontFamily: SiteFonts.body,
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = SiteColors.greenDark}
          onMouseLeave={e => e.target.style.background = SiteColors.green}
        >Book Now</a>
      </div>
    </nav>
  );
}

/* ─── FAQ Item (accordion) ─── */
function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      borderBottom: `1px solid ${SiteColors.border}`,
      padding: '20px 0', cursor: 'pointer',
    }} onClick={() => setOpen(!open)}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <h4 style={{
          fontFamily: SiteFonts.body, fontSize: 16, fontWeight: 500,
          color: SiteColors.text, margin: 0,
        }}>{q}</h4>
        <span style={{
          fontSize: 20, color: SiteColors.gray, transition: 'transform 0.3s',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          flexShrink: 0, marginLeft: 16,
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          fontFamily: SiteFonts.body, fontSize: 15, lineHeight: 1.75,
          color: SiteColors.gray, margin: '14px 0 0',
        }}>{a}</p>
      </div>
    </div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{
      padding: '56px 56px 40px', background: SiteColors.text,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48,
        marginBottom: 48, paddingBottom: 32,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        {/* Logo + tagline */}
        <div>
          <img src={window.__resources?.logo || "uploads/Gemini_Generated_Image_lz6fo9lz6fo9lz6f.png"}
            alt="Melcie Massage" style={{ height: 56, borderRadius: 4, marginBottom: 16, display: 'block' }} />
          <p style={{ fontFamily: SiteFonts.body, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
            Revitalize &amp; Become Whole
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontFamily: SiteFonts.body, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Quick Links</h4>
          {['About', 'Services', 'Benefits', 'Hours', 'FAQ', 'Contact'].map(item => (
            <p key={item} style={{
              fontFamily: SiteFonts.body, fontSize: 14, color: 'rgba(255,255,255,0.6)',
              margin: '0 0 10px', cursor: 'pointer',
            }}>{item}</p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: SiteFonts.body, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</h4>
          <p style={{ fontFamily: SiteFonts.body, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
            Inside Adagio Spa<br/>
            7801 N Lamar Blvd Suite D73<br/>
            Austin, TX 78752<br/><br/>
            (512) 744-5796<br/>
            melciemassage@gmail.com
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: SiteFonts.body, fontSize: 12, color: 'rgba(255,255,255,0.3)',
      }}>
        <span>© 2024 Melcie Massage. All rights reserved.</span>
        <span>ABMP Member · LMT since 2007</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteColors, SiteFonts, Placeholder, SectionLabel, Nav, Footer, FAQItem });
