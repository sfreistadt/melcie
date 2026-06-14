/* Direction C — "Dark Luxe"
 * Moody, intimate dark palette with teal + bronze accents
 * Dramatic contrast, boutique spa feel
 * Fonts: Instrument Serif (headings) + Karla (body)
 */

const CColors = {
  bg: '#1E1B18',
  card: '#262320',
  text: '#F0E8DC',
  teal: '#5BC4BF',
  bronze: '#B8956A',
  muted: '#8A8078',
  rule: 'rgba(240,232,220,0.1)',
};

function CPlaceholder({ label, h = 400 }) {
  return (
    <div style={{
      width: '100%', height: h,
      background: `repeating-linear-gradient(45deg, #2a2622, #2a2622 10px, #302c28 10px, #302c28 20px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: 13, color: '#6a6358',
        background: 'rgba(0,0,0,0.4)', padding: '6px 14px', borderRadius: 4,
        textAlign: 'center', maxWidth: 300, lineHeight: 1.5,
      }}>{label}</span>
    </div>
  );
}

function DirectionC() {
  const heading = { fontFamily: "'Instrument Serif', serif", color: CColors.text };
  const body = { fontFamily: "'Karla', sans-serif", color: CColors.text };
  const labelStyle = {
    fontFamily: "'Karla', sans-serif", fontSize: 12, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: CColors.bronze, fontWeight: 500,
  };

  const services = [
    { name: 'Swedish Massage', desc: 'Flowing, restorative strokes to ease tension and restore deep calm.' },
    { name: 'Deep Tissue', desc: 'Targeted bodywork for chronic pain, muscle knots, and stubborn tension.' },
    { name: 'Corrective Therapy', desc: 'TMJ, postural correction, and soft tissue manipulation for lasting relief.' },
    { name: 'Outcall Services', desc: 'Professional therapeutic massage brought to you, in your space.' },
  ];

  return (
    <div style={{ ...body, width: '100%', background: CColors.bg, overflow: 'hidden' }}>
      {/* NAV */}
      <nav style={{
        padding: '28px 64px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', borderBottom: `1px solid ${CColors.rule}`,
      }}>
        <div style={{ ...heading, fontSize: 22, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Melcie Massage
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {['About', 'Services', 'Benefits', 'Hours', 'Contact'].map(item => (
            <span key={item} style={{ fontSize: 14, letterSpacing: '0.03em', color: CColors.muted, cursor: 'pointer' }}>
              {item}
            </span>
          ))}
          <span style={{
            border: `1px solid ${CColors.teal}`, color: CColors.teal,
            padding: '10px 24px', fontSize: 13, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer',
          }}>Book Now</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative' }}>
        <CPlaceholder label="moody hero image — warm lighting, treatment detail, candles/stones" h={560} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(30,27,24,0.95) 20%, rgba(30,27,24,0.3) 100%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
          padding: '0 64px 72px',
        }}>
          <p style={{ ...labelStyle, marginBottom: 20 }}>Austin, Texas · Est. 2007</p>
          <h1 style={{
            ...heading, fontSize: 76, fontStyle: 'italic', fontWeight: 400,
            lineHeight: 1.1, margin: '0 0 20px', textAlign: 'center',
          }}>
            Revitalize &amp;<br/>Become Whole
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.7, color: CColors.muted,
            maxWidth: 460, textAlign: 'center', margin: '0 0 36px',
          }}>
            Therapeutic massage by Gricelda "Gracie" Padron, LMT
          </p>
          <span style={{
            background: CColors.teal, color: CColors.bg, padding: '14px 36px',
            fontSize: 14, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
          }}>Book Your Session</span>
        </div>
      </section>

      {/* BRONZE DIVIDER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '48px 64px' }}>
        <div style={{ flex: 1, height: 1, background: CColors.bronze, opacity: 0.3 }}></div>
        <span style={{ color: CColors.bronze, fontSize: 18, opacity: 0.5 }}>✦</span>
        <div style={{ flex: 1, height: 1, background: CColors.bronze, opacity: 0.3 }}></div>
      </div>

      {/* ABOUT */}
      <section style={{
        padding: '40px 64px 80px', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
      }}>
        <div>
          <p style={{ ...labelStyle, marginBottom: 20 }}>About the Practitioner</p>
          <h2 style={{ ...heading, fontSize: 44, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.2, margin: '0 0 24px' }}>
            Meet Gracie
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: CColors.muted, marginBottom: 16 }}>
            Licensed since 2007 from Austin Schools of Massage. Over a decade of continuous education in Deep Tissue, TMJ disorder, Thai Foot Massage, Soft Tissue Manipulation, and corrective techniques.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: CColors.muted, marginBottom: 28 }}>
            "I love my career — I get to help clients find their path to feeling more balanced and revitalized every single time."
          </p>
          <span style={{
            color: CColors.teal, fontSize: 14, cursor: 'pointer',
            borderBottom: `1px solid ${CColors.teal}`, paddingBottom: 2,
          }}>Read more →</span>
        </div>
        <CPlaceholder label="portrait of Gracie — warm, inviting" h={480} />
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 64px', borderTop: `1px solid ${CColors.rule}` }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ ...labelStyle, marginBottom: 16 }}>Offerings</p>
          <h2 style={{ ...heading, fontSize: 44, fontStyle: 'italic', fontWeight: 400, margin: 0 }}>Services</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: CColors.card, padding: '40px 36px',
              borderLeft: `2px solid ${CColors.bronze}`,
            }}>
              <h3 style={{ ...heading, fontSize: 24, fontWeight: 400, margin: '0 0 12px' }}>{s.name}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: CColors.muted, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <span style={{
            color: CColors.teal, fontSize: 14, cursor: 'pointer',
            borderBottom: `1px solid ${CColors.teal}`, paddingBottom: 2,
          }}>View all services &amp; rates →</span>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{
        padding: '80px 64px', borderTop: `1px solid ${CColors.rule}`,
        textAlign: 'center',
      }}>
        <p style={{
          ...heading, fontSize: 36, fontStyle: 'italic', fontWeight: 400,
          lineHeight: 1.55, maxWidth: 680, margin: '0 auto 20px', opacity: 0.85,
        }}>
          "Gracie is a miracle worker. Can't say enough about her and the magical therapy she provides."
        </p>
        <p style={{ ...labelStyle, opacity: 0.5 }}>— Client Review</p>
      </section>

      {/* CTA */}
      <section style={{
        padding: '72px 64px', background: CColors.card, textAlign: 'center',
        borderTop: `1px solid ${CColors.rule}`, borderBottom: `1px solid ${CColors.rule}`,
      }}>
        <p style={{ ...labelStyle, marginBottom: 16 }}>Begin Your Journey</p>
        <h2 style={{ ...heading, fontSize: 40, fontStyle: 'italic', fontWeight: 400, margin: '0 0 16px' }}>
          Book Your Session
        </h2>
        <p style={{ fontSize: 15, color: CColors.muted, margin: '0 0 32px' }}>
          Inside Adagio Spa · North Lamar · Austin, TX
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <span style={{
            background: CColors.teal, color: CColors.bg, padding: '14px 32px',
            fontSize: 14, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
          }}>Schedule Online</span>
          <span style={{
            border: `1px solid ${CColors.muted}`, color: CColors.text, padding: '14px 32px',
            fontSize: 14, cursor: 'pointer', opacity: 0.7,
          }}>(512) 744-5796</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '44px 64px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', fontSize: 13, color: CColors.muted, opacity: 0.6,
      }}>
        <span>© Melcie Massage · 7801 N Lamar Blvd Suite D73, Austin TX 78752</span>
        <span>ABMP Member · LMT since 2007</span>
      </footer>
    </div>
  );
}

window.DirectionC = DirectionC;
