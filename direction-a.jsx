/* Direction A — "Warm Earth"
 * Inspired by Gregory Colbert's Ashes and Snow
 * Sepia/umber palette, editorial serif typography, gallery-like pacing
 * Fonts: Cormorant Garamond (headings) + DM Sans (body)
 */

const AColors = {
  bg: '#F5EDE3',
  text: '#3D2B1F',
  teal: '#7BA39F',
  gold: '#C4A265',
  light: '#EDE5DA',
  rule: 'rgba(61,43,31,0.15)',
};

function APlaceholder({ label, h = 400 }) {
  return (
    <div style={{
      width: '100%', height: h,
      background: `repeating-linear-gradient(45deg, ${AColors.light}, ${AColors.light} 10px, ${AColors.bg} 10px, ${AColors.bg} 20px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: 13, color: '#8a7d6f',
        background: 'rgba(255,255,255,0.7)', padding: '6px 14px', borderRadius: 4,
        textAlign: 'center', maxWidth: 300, lineHeight: 1.5,
      }}>{label}</span>
    </div>
  );
}

function DirectionA() {
  const heading = { fontFamily: "'Cormorant Garamond', serif", color: AColors.text };
  const body = { fontFamily: "'DM Sans', sans-serif", color: AColors.text };
  const label = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: AColors.teal, fontWeight: 500,
  };

  const services = [
    { name: 'Swedish Massage', desc: 'A relaxing, full-body treatment to ease tension and restore calm.' },
    { name: 'Deep Tissue', desc: 'Targeted pressure to release chronic muscle tension and knots.' },
    { name: 'Corrective Therapy', desc: 'Specialized techniques for TMJ, postural imbalances, and injury recovery.' },
    { name: 'Outcall Services', desc: 'Professional therapeutic massage in the comfort of your home.' },
  ];

  return (
    <div style={{ ...body, width: '100%', background: AColors.bg, overflow: 'hidden' }}>
      {/* NAV */}
      <nav style={{
        padding: '28px 64px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', borderBottom: `1px solid ${AColors.rule}`,
      }}>
        <div style={{ ...heading, fontSize: 22, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Melcie Massage
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {['About', 'Services', 'Benefits', 'Hours', 'Contact'].map(item => (
            <span key={item} style={{ fontSize: 14, letterSpacing: '0.04em', opacity: 0.6, cursor: 'pointer' }}>{item}</span>
          ))}
          <span style={{
            background: AColors.teal, color: '#fff', padding: '10px 24px',
            fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
          }}>Book Now</span>
        </div>
      </nav>

      {/* HERO — type-forward */}
      <section style={{ padding: '120px 64px 60px', textAlign: 'center' }}>
        <p style={{ ...label, marginBottom: 28 }}>Austin, Texas</p>
        <h1 style={{
          ...heading, fontSize: 80, fontWeight: 400, lineHeight: 1.05,
          margin: '0 auto 28px', maxWidth: 800, textWrap: 'balance',
        }}>
          Revitalize &amp; Become Whole
        </h1>
        <p style={{
          fontSize: 18, lineHeight: 1.75, opacity: 0.55,
          maxWidth: 520, margin: '0 auto 48px',
        }}>
          Therapeutic massage by Gricelda "Gracie" Padron, LMT — helping Austin find balance and relief since 2007.
        </p>
        <div style={{ width: 1, height: 72, background: AColors.text, opacity: 0.15, margin: '0 auto' }}></div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ padding: '0 64px 100px' }}>
        <APlaceholder label="hero image — warm-toned studio interior or hands-on-table detail" h={520} />
      </section>

      {/* ABOUT */}
      <section style={{
        padding: '80px 64px', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        borderTop: `1px solid ${AColors.rule}`,
      }}>
        <div>
          <p style={{ ...label, marginBottom: 20 }}>About the Practitioner</p>
          <h2 style={{ ...heading, fontSize: 44, fontWeight: 400, lineHeight: 1.15, margin: '0 0 24px' }}>
            Meet Gracie
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, opacity: 0.6, marginBottom: 20 }}>
            I attended Austin Schools of Massage and received my license in 2007. In 10+ years as a massage therapist, I endlessly take educational classes in modalities and techniques — Deep Tissue, TMJ disorder, Thai Foot Massage, Soft Tissue Manipulation, and much more.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, opacity: 0.6 }}>
            I am your Corrective specialist. I get to help clients find their path to feeling more balanced and revitalized every single time.
          </p>
        </div>
        <APlaceholder label="portrait of Gracie — warm, approachable" h={480} />
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 64px', borderTop: `1px solid ${AColors.rule}` }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ ...label, marginBottom: 20 }}>What We Offer</p>
          <h2 style={{ ...heading, fontSize: 44, fontWeight: 400, margin: 0 }}>Services</h2>
        </div>
        {services.map((s, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
            padding: '36px 0', borderTop: `1px solid ${AColors.rule}`,
            alignItems: 'baseline',
          }}>
            <h3 style={{ ...heading, fontSize: 28, fontWeight: 400, margin: 0 }}>{s.name}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, opacity: 0.55, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </section>

      {/* TESTIMONIAL */}
      <section style={{
        padding: '100px 64px', borderTop: `1px solid ${AColors.rule}`, textAlign: 'center',
      }}>
        <p style={{
          ...heading, fontSize: 36, fontWeight: 400, fontStyle: 'italic',
          lineHeight: 1.5, maxWidth: 700, margin: '0 auto 24px', opacity: 0.8,
        }}>
          "Gracie is a healer. Without even saying where my issue is, she can find it and take care of it."
        </p>
        <p style={{ ...label, opacity: 0.5 }}>— Client Review</p>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 64px', background: AColors.light, textAlign: 'center',
      }}>
        <p style={{ ...label, marginBottom: 20 }}>Ready?</p>
        <h2 style={{ ...heading, fontSize: 44, fontWeight: 400, margin: '0 0 20px' }}>
          Book Your Session
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, opacity: 0.55, maxWidth: 440, margin: '0 auto 36px' }}>
          Located inside Adagio Spa on North Lamar. Schedule online or call to book.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <span style={{
            background: AColors.teal, color: '#fff', padding: '14px 32px',
            fontSize: 14, letterSpacing: '0.06em', cursor: 'pointer',
          }}>Schedule Online</span>
          <span style={{
            border: `1px solid ${AColors.text}`, padding: '14px 32px',
            fontSize: 14, letterSpacing: '0.06em', cursor: 'pointer', opacity: 0.6,
          }}>(512) 744-5796</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '48px 64px', borderTop: `1px solid ${AColors.rule}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 13, opacity: 0.45,
      }}>
        <span>© Melcie Massage · 7801 N Lamar Blvd Suite D73, Austin TX 78752</span>
        <span>ABMP Member · LMT since 2007</span>
      </footer>
    </div>
  );
}

window.DirectionA = DirectionA;
