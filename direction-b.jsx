/* Direction B — "Modern Minimal"
 * Inspired by Milk + Honey spa aesthetic
 * Clean white, brand teal accent, contemporary polish
 * Fonts: Libre Baskerville (headings) + Outfit (body)
 */

const BColors = {
  bg: '#FAFAF8',
  text: '#2C2C2C',
  teal: '#4BADA8',
  gray: '#8A8680',
  light: '#F3F2EF',
  border: '#E5E3DF',
  white: '#FFFFFF',
};

function BPlaceholder({ label, h = 400 }) {
  return (
    <div style={{
      width: '100%', height: h,
      background: `repeating-linear-gradient(45deg, #eceae6, #eceae6 10px, #f3f1ed 10px, #f3f1ed 20px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: 13, color: '#999',
        background: 'rgba(255,255,255,0.85)', padding: '6px 14px', borderRadius: 4,
        textAlign: 'center', maxWidth: 300, lineHeight: 1.5,
      }}>{label}</span>
    </div>
  );
}

function DirectionB() {
  const heading = { fontFamily: "'Libre Baskerville', serif", color: BColors.text };
  const body = { fontFamily: "'Outfit', sans-serif", color: BColors.text };
  const labelStyle = {
    fontFamily: "'Outfit', sans-serif", fontSize: 13, letterSpacing: '0.15em',
    textTransform: 'uppercase', color: BColors.teal, fontWeight: 400,
  };

  const services = [
    { name: 'Swedish Massage', desc: 'Flowing strokes to promote deep relaxation and restore body balance.', icon: '✦' },
    { name: 'Deep Tissue', desc: 'Focused pressure targeting chronic tension, knots, and muscle adhesions.', icon: '✦' },
    { name: 'Corrective Therapy', desc: 'Specialized treatment for TMJ, postural correction, and injury recovery.', icon: '✦' },
  ];

  return (
    <div style={{ ...body, width: '100%', background: BColors.bg, overflow: 'hidden' }}>
      {/* NAV */}
      <nav style={{
        padding: '24px 56px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', background: BColors.white,
        borderBottom: `1px solid ${BColors.border}`,
      }}>
        <div style={{ display: 'flex', gap: 36, fontSize: 14, color: BColors.gray }}>
          {['About', 'Services', 'Benefits'].map(item => (
            <span key={item} style={{ cursor: 'pointer' }}>{item}</span>
          ))}
        </div>
        <div style={{ ...heading, fontSize: 20, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center' }}>
          Melcie Massage
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center', fontSize: 14, color: BColors.gray }}>
          <span style={{ cursor: 'pointer' }}>Hours</span>
          <span style={{ cursor: 'pointer' }}>Contact</span>
          <span style={{
            background: BColors.teal, color: '#fff', padding: '10px 24px',
            borderRadius: 4, fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>Book Now</span>
        </div>
      </nav>

      {/* HERO — image-forward with overlay */}
      <section style={{ position: 'relative' }}>
        <BPlaceholder label="hero image — bright, modern spa interior or treatment room" h={600} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: 'rgba(250,250,248,0.7)',
        }}>
          <p style={{ ...labelStyle, marginBottom: 16 }}>Austin, Texas</p>
          <h1 style={{
            ...heading, fontSize: 64, fontWeight: 400, lineHeight: 1.15,
            margin: '0 0 20px', textAlign: 'center',
          }}>
            Revitalize &amp;<br/>Become Whole
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.7, color: BColors.gray,
            maxWidth: 480, textAlign: 'center', margin: '0 0 32px',
          }}>
            Therapeutic massage by Gricelda "Gracie" Padron, LMT — serving Austin since 2007.
          </p>
          <span style={{
            background: BColors.teal, color: '#fff', padding: '14px 36px',
            borderRadius: 4, fontSize: 15, fontWeight: 500, cursor: 'pointer',
          }}>Book an Appointment</span>
        </div>
      </section>

      {/* WELCOME */}
      <section style={{ padding: '80px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ ...labelStyle, marginBottom: 16 }}>Welcome</p>
          <h2 style={{ ...heading, fontSize: 36, fontWeight: 400, margin: '0 0 20px', lineHeight: 1.3 }}>
            Your path to healing starts here
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: BColors.gray }}>
            At Melcie Massage, every session is tailored to your body's needs. Whether you're seeking relief from chronic pain, recovering from injury, or simply need to unwind — you're in expert hands.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '0 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: BColors.white, border: `1px solid ${BColors.border}`,
              borderRadius: 8, padding: '48px 36px', textAlign: 'center',
            }}>
              <div style={{ color: BColors.teal, fontSize: 20, marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ ...heading, fontSize: 22, fontWeight: 400, margin: '0 0 14px' }}>{s.name}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: BColors.gray, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <span style={{
            fontSize: 14, color: BColors.teal, cursor: 'pointer',
            borderBottom: `1px solid ${BColors.teal}`, paddingBottom: 2,
          }}>View all services &amp; rates →</span>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        padding: '80px 56px', background: BColors.light,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <BPlaceholder label="portrait of Gracie" h={500} />
        <div>
          <p style={{ ...labelStyle, marginBottom: 16 }}>About the Practitioner</p>
          <h2 style={{ ...heading, fontSize: 36, fontWeight: 400, margin: '0 0 20px', lineHeight: 1.3 }}>
            Gricelda "Gracie" Padron
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: BColors.gray, marginBottom: 16 }}>
            Licensed since 2007, Gracie continuously expands her expertise in Deep Tissue, TMJ treatment, Thai Foot Massage, Soft Tissue Manipulation, and corrective techniques.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: BColors.gray, marginBottom: 24 }}>
            "I love my career — I get to help clients find their path to feeling more balanced and revitalized every single time."
          </p>
          <span style={{
            fontSize: 14, color: BColors.teal, cursor: 'pointer',
            borderBottom: `1px solid ${BColors.teal}`, paddingBottom: 2,
          }}>Learn more about Gracie →</span>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '80px 56px', textAlign: 'center' }}>
        <div style={{
          maxWidth: 600, margin: '0 auto', padding: '48px',
          borderTop: `2px solid ${BColors.teal}`, borderBottom: `2px solid ${BColors.teal}`,
        }}>
          <p style={{
            ...heading, fontSize: 24, fontWeight: 400, fontStyle: 'italic',
            lineHeight: 1.6, margin: '0 0 16px',
          }}>
            "Gracie isn't just a masseuse — she's a true healer. She goes above and beyond, showing genuine care for her clients."
          </p>
          <p style={{ fontSize: 13, color: BColors.gray, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            5-Star Review
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '72px 56px', background: BColors.teal, textAlign: 'center',
      }}>
        <h2 style={{ ...heading, fontSize: 36, fontWeight: 400, color: '#fff', margin: '0 0 16px' }}>
          Ready to feel your best?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', margin: '0 0 32px' }}>
          Book online or call to schedule your session today.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <span style={{
            background: '#fff', color: BColors.teal, padding: '14px 32px',
            borderRadius: 4, fontSize: 14, fontWeight: 500, cursor: 'pointer',
          }}>Schedule Online</span>
          <span style={{
            border: '1px solid rgba(255,255,255,0.5)', color: '#fff', padding: '14px 32px',
            borderRadius: 4, fontSize: 14, cursor: 'pointer',
          }}>(512) 744-5796</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '40px 56px', background: BColors.white,
        borderTop: `1px solid ${BColors.border}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 13, color: BColors.gray,
      }}>
        <span>© Melcie Massage · Inside Adagio Spa · 7801 N Lamar Blvd Suite D73</span>
        <span>ABMP Member · Austin, TX 78752</span>
      </footer>
    </div>
  );
}

window.DirectionB = DirectionB;
