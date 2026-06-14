/* site-content.jsx — All page sections with real content from Gracie's site */

/* ─── HERO ─── */
function HeroSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };
  const px = mobile ? 20 : 56;
  return (
    <section style={{ padding: `${mobile ? 60 : 100}px ${px}px ${mobile ? 48 : 80}px`, textAlign: 'center', background: C.white }}>
      <img src={window.__resources?.logo || "MelcieLogo.png"}
        alt="Melcie Massage" style={{ height: mobile ? 144 : 200, borderRadius: 6, marginBottom: mobile ? 28 : 40 }} />
      <h1 style={{ ...heading, fontSize: mobile ? 32 : 56, fontWeight: 400, lineHeight: 1.15, margin: '0 auto 24px', maxWidth: 800, textWrap: 'balance' }}>
        Revitalize &amp; Become Whole
      </h1>
      <p style={{ fontSize: mobile ? 15 : 17, lineHeight: 1.8, color: C.textLight, maxWidth: 620, margin: '0 auto 12px' }}>
        Here, at Melcie Massage, we believe in giving you the best work to help you achieve a pain-free life. We listen to you to create a customized session that caters to you and your body's needs.
      </p>
      <p style={{ fontSize: mobile ? 15 : 17, lineHeight: 1.8, color: C.text, maxWidth: 620, margin: '0 auto 36px', fontWeight: 500 }}>
        Walk out feeling Taller, Straighter, &amp; Better!
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <a href="https://melciemassage.schedulista.com/" target="_blank" rel="noopener" style={{
          display: 'inline-block', background: C.green, color: '#fff', padding: '14px 36px',
          borderRadius: 4, fontSize: 15, fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
          fontFamily: F.body, transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = C.greenDark}
          onMouseLeave={e => e.target.style.background = C.green}
        >Schedule Your Appointment</a>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };
  const px = mobile ? 20 : 56;
  return (
    <section id="about" style={{ padding: `${mobile ? 48 : 80}px ${px}px`, background: C.light, scrollMarginTop: 80 }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 64, alignItems: 'start' }}>
        <img src="uploads/gracie-photo.png" alt="Gracie performing massage therapy"
          style={{ width: '100%', height: mobile ? 300 : 580, objectFit: 'cover', borderRadius: 8 }} />
        <div>
          <SectionLabel>About the Practitioner</SectionLabel>
          <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: '0 0 24px', lineHeight: 1.35 }}>
            Gricelda "Gracie" Padron
          </h2>

          <h4 style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.green, margin: '0 0 10px',
            letterSpacing: '0.06em', textTransform: 'uppercase' }}>Education Background</h4>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: C.textLight, marginBottom: 24 }}>
            I attended Austin Schools of Massage and received my massage license in 2007. In the 10+ years as a massage therapist, I endlessly take educational classes in modalities and techniques (i.e. Deep Tissue, TMJ disorder, Thai Foot Massage, Soft Tissue Manipulation, and much more) to ensure I have the knowledge and skills necessary to achieve the relief my clients seek. I am your Corrective specialist!
          </p>

          <h4 style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.green, margin: '0 0 10px',
            letterSpacing: '0.06em', textTransform: 'uppercase' }}>Why I Do What I Do</h4>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: C.textLight, marginBottom: 24 }}>
            I LOVE MY CAREER! I get to help clients find their path to feeling more balanced and revitalized every single time. Through my work, I aim to yield a Mental escape, for a moment of Tranquility, to alleviating any Acute to Chronic Pain. I put myself in your shoes to ensure I give your body the detail work it wants!
          </p>

          <h4 style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.green, margin: '0 0 10px',
            letterSpacing: '0.06em', textTransform: 'uppercase' }}>My Hobbies</h4>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: C.textLight, marginBottom: 0 }}>
            I am a dancer, explorer, athlete, runner — heck, I would do it all! I know what it is like to have sore muscles and sudden aches that come out of nowhere. Hence, that has taught me to listen to my body better to not cause or further an injury. I do so much because I believe that by being active and listening to my body, I can take care of others.
          </p>
        </div>
      </div>
      <BookNowButton />
    </section>
  );
}

/* ─── SERVICES & RATES ─── */
function ServicesSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  const pricing = [
    { duration: '60 min', desc: 'Customized Massage', price: 80, firstTime: 70, url: 'https://www.schedulista.com/schedule/melciemassage/choose_time?provider_id=1073747439&service_id=1073764780' },
    { duration: '90 min', desc: 'Customized Massage', price: 110, firstTime: 100, url: 'https://www.schedulista.com/schedule/melciemassage/choose_time?provider_id=1073747439&service_id=1073764781' },
    { duration: '120 min', desc: 'Customized Massage', price: 140, firstTime: 130, url: 'https://www.schedulista.com/schedule/melciemassage/choose_time?provider_id=1073747439&service_id=1073764782' },
  ];

  return (
    <section id="services" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, scrollMarginTop: 80 }}>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <SectionLabel>What We Offer</SectionLabel>
        <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: '0 0 12px' }}>Services &amp; Rates</h2>
        <p style={{ fontSize: 16, color: C.textLight, fontFamily: F.body, fontStyle: 'italic', margin: '0 0 48px' }}>
          Investing in massage is an investment in your health.
        </p>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto 40px' }}>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textLight, textAlign: 'center', marginBottom: 36 }}>
          Our goal is to give you the best quality work to get you to a better you. With our Corrective work, we can help you alleviate any acute to chronic pain.
        </p>

        {pricing.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr auto auto', gap: mobile ? 12 : 24,
              alignItems: mobile ? 'flex-start' : 'center', padding: mobile ? '20px' : '24px 32px',
              background: C.white, border: `1px solid ${C.border}`, borderRadius: 8,
              marginBottom: 12, transition: 'border-color 0.2s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.green}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
            >
              <div>
                <h3 style={{ ...heading, fontSize: 20, fontWeight: 400, margin: '0 0 4px' }}>{p.duration}</h3>
                <p style={{ fontSize: 14, color: C.gray, margin: 0, fontFamily: F.body }}>{p.desc}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ ...heading, fontSize: 24, fontWeight: 400 }}>${p.price}</span>
              </div>
              <div style={{
                background: C.greenLight, padding: '6px 14px', borderRadius: 20,
                fontSize: 12, color: C.green, fontWeight: 500, fontFamily: F.body, whiteSpace: 'nowrap',
              }}>
                First visit ${p.firstTime}
              </div>
            </div>
          </a>
        ))}

        <p style={{ fontSize: 13, color: C.gray, textAlign: 'center', marginTop: 20, fontFamily: F.body }}>
          Payment accepted: Cash, Checks, and Credit Cards
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href="https://melciemassage.schedulista.com/" target="_blank" rel="noopener" style={{
          display: 'inline-block', background: C.green, color: '#fff', padding: '14px 36px',
          borderRadius: 4, fontSize: 15, fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
          fontFamily: F.body, transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = C.greenDark}
          onMouseLeave={e => e.target.style.background = C.green}
        >Book Now</a>
      </div>
    </section>
  );
}

/* ─── BENEFITS ─── */
function BenefitsSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  const stressBenefits = [
    'Decreased anxiety', 'Enhanced sleep quality', 'Greater energy',
    'Improved concentration', 'Increased circulation', 'Reduced fatigue',
  ];

  const healthBenefits = [
    'Alleviate low-back pain and improve range of motion',
    'Assist with shorter, easier labor for expectant mothers',
    'Ease medication dependence',
    'Enhance immunity by stimulating lymph flow',
    'Exercise and stretch weak, tight, or atrophied muscles',
    'Help athletes prepare for, and recover from, strenuous workouts',
    'Increase joint flexibility',
    'Lessen depression and anxiety',
    'Promote tissue regeneration, reducing scar tissue and stretch marks',
    'Improve circulation — pump oxygen and nutrients into tissues',
    'Reduce postsurgery adhesions and swelling',
    'Reduce spasms and cramping',
    'Relax and soften injured, tired, and overused muscles',
    'Release endorphins — the body\'s natural painkiller',
    'Relieve migraine pain',
  ];

  return (
    <section id="benefits" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, background: C.light, scrollMarginTop: 80 }}>
      <div style={{ textAlign: 'center', marginBottom: mobile ? 32 : 48 }}>
        <SectionLabel>Why Massage</SectionLabel>
        <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: '0 0 16px' }}>Benefits of Massage</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textLight, maxWidth: 640, margin: '0 auto' }}>
          Experts estimate that upwards of ninety percent of disease is stress-related. And perhaps nothing ages us faster, internally and externally, than high stress. Massage is an effective tool for managing this stress.
        </p>
      </div>

      {/* Stress benefits grid */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 16, marginBottom: 48, maxWidth: 800, margin: '0 auto 48px' }}>
        {stressBenefits.map((b, i) => (
          <div key={i} style={{
            background: C.white, padding: '20px 24px', borderRadius: 8,
            display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${C.border}`,
          }}>
            <span style={{ color: C.green, fontSize: 14, flexShrink: 0 }}>✦</span>
            <span style={{ fontSize: 14, color: C.text, fontFamily: F.body }}>{b}</span>
          </div>
        ))}
      </div>

      {/* Health benefits */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h3 style={{ ...heading, fontSize: 22, fontWeight: 400, marginBottom: 20, textAlign: 'center' }}>
          Massage can also help address:
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: '10px 32px' }}>
          {healthBenefits.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '6px 0' }}>
              <span style={{ color: C.green, fontSize: 10, flexShrink: 0, marginTop: 4 }}>●</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: C.textLight, fontFamily: F.body }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
      <BookNowButton />
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const testimonials = [
    { text: "Absolutely highly recommend Gracie, extremely gifted massage therapist with an outstanding knowledge of the human body, always takes care of me fixing me every single time I get a session with her… simply the best therapist I've ever had!", author: 'Carles Z.' },
    { text: "Gracie isn't just a masseuse — she's a true healer. She goes above and beyond, not only providing excellent massages but also showing genuine care for her clients.", author: 'Client Review' },
    { text: "Gracie is a healer. Without even saying where my issue is, she can find it and take care of it. Making her a regular part of my fitness regime has made all the difference in my life!", author: 'Client Review' },
  ];

  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, background: C.green, textAlign: 'center' }}>
      <SectionLabel><span style={{ color: 'rgba(255,255,255,0.5)' }}>What Clients Say</span></SectionLabel>
      <div style={{ maxWidth: 640, margin: '0 auto', minHeight: mobile ? 200 : 160, position: 'relative' }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            opacity: i === active ? 1 : 0,
            position: i === active ? 'relative' : 'absolute',
            top: 0, left: 0, right: 0, transition: 'opacity 0.6s',
          }}>
            <p style={{ fontFamily: F.heading, fontSize: mobile ? 18 : 22, fontWeight: 400, fontStyle: 'italic',
              lineHeight: 1.65, color: '#fff', margin: '0 0 20px' }}>"{t.text}"</p>
            <p style={{ fontFamily: F.body, fontSize: 13, color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>— {t.author}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 28 }}>
        {testimonials.map((_, i) => (
          <div key={i} onClick={() => setActive(i)} style={{
            width: 8, height: 8, borderRadius: '50%', cursor: 'pointer',
            background: i === active ? '#fff' : 'rgba(255,255,255,0.3)', transition: 'background 0.3s',
          }}></div>
        ))}
      </div>
    </section>
  );
}

/* ─── HOURS & SCHEDULING ─── */
function HoursSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  const policies = [
    { title: 'Cancellation Policy', text: '12 hour advance notice is required when canceling an appointment. This allows the opportunity for someone else to schedule an appointment. If you are unable to give us 12 hours advance notice you will be charged the full amount of your appointment. This amount must be paid prior to your next scheduled appointment.' },
    { title: 'Late Arrivals', text: 'Appointment times are as scheduled and cannot extend beyond the stated time to accommodate late arrivals. Please be on time to your appointment.' },
    { title: 'Sickness', text: 'Massage/bodywork is not appropriate care for infectious or contagious illness. Please cancel your appointment as soon as you are aware of an infectious or contagious condition.' },
    { title: 'No-Shows', text: 'Anyone who either forgets or consciously chooses to forgo their appointment will be considered a "no-show" and charged for their missed appointment. This amount must be paid prior to your next scheduled appointment.' },
  ];

  return (
    <section id="hours" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, scrollMarginTop: 80 }}>
      <div style={{ textAlign: 'center', marginBottom: mobile ? 32 : 48 }}>
        <SectionLabel>Plan Your Visit</SectionLabel>
        <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: '0 0 12px' }}>Hours &amp; Scheduling</h2>
        <p style={{ fontSize: 16, color: C.green, fontWeight: 500, fontFamily: F.body }}>
          Available by Appointment Only
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 48, maxWidth: 960, margin: '0 auto' }}>
        {/* Booking info */}
        <div>
          <div style={{
            background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: '36px', marginBottom: 24,
          }}>
            <h4 style={{ fontFamily: F.body, fontSize: 15, fontWeight: 500, color: C.text, margin: '0 0 16px' }}>
              Book Your Appointment
            </h4>
            <a href="https://melciemassage.schedulista.com/" target="_blank" rel="noopener" style={{
              display: 'block', background: C.green, color: '#fff', padding: '14px',
              borderRadius: 4, fontSize: 15, fontWeight: 500, textAlign: 'center',
              textDecoration: 'none', fontFamily: F.body, marginBottom: 20,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.target.style.background = C.greenDark}
              onMouseLeave={e => e.target.style.background = C.green}
            >Schedule Online</a>
            <div style={{ fontSize: 14, color: C.textLight, fontFamily: F.body, lineHeight: 1.8 }}>
              <p style={{ margin: '0 0 8px' }}><strong>Call/Text:</strong> <PhoneLink /></p>
              <p style={{ margin: 0 }}><strong>Email:</strong> <EmailLink /></p>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div>
          {policies.map((p, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h4 style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.text, margin: '0 0 6px' }}>{p.title}</h4>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: C.gray, margin: 0, fontFamily: F.body }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── OUTCALL PROTOCOL ─── */
function OutcallSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  const protocols = [
    'I will communicate with you beforehand to ask questions about recent fever, COVID-19 symptoms, and possible known contacts who have been diagnosed with COVID in the past 14 days, for both the client and anyone else in the household.',
    'On the day of appointment, the client will prepare the room in which the service will occur ahead of time. Preparation includes cleaning and sanitizing all surfaces with EPA-approved products, including tables, chairs, light switches, and doorknobs. Open a window and, if available, place a fan pointed outward.',
    'When I arrive at your home, I\'ll wait in my vehicle until you text or call me to come in.',
    'Before approaching the door, I will put on my mask and apron which I will wear the entire time.',
    'I will greet you at the door and use a no-touch thermal temperature screening to confirm that you don\'t have a fever.',
    'If you feel ill on the day of your session, there is no penalty for canceling your appointment. Massage is not advised if you have any symptoms of illness.',
    'Please use a face mask during the time I am there and during massage.',
    'I will ask you to sign an informed consent form acknowledging the risks involved with close contact during COVID-19.',
  ];

  return (
    <section id="outcall" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, background: C.light, scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <SectionLabel>Outcall Services</SectionLabel>
          <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: '0 0 16px' }}>Outcall Protocol</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: C.textLight }}>
            My commitment to your safety and health remains the same. Below are the protocols we follow for outcall appointments.
          </p>
        </div>
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: mobile ? '20px' : '36px' }}>
          {protocols.map((p, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start',
              padding: '14px 0',
              borderBottom: i < protocols.length - 1 ? `1px solid ${C.light}` : 'none',
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', background: C.greenLight,
                color: C.green, fontSize: 12, fontWeight: 600, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                fontFamily: F.body,
              }}>{i + 1}</span>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.textLight, margin: 0, fontFamily: F.body }}>{p}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: C.textLight, marginTop: 24, textAlign: 'center' }}>
          To make an outcall appointment, please call or text <strong>{getPhone()}</strong>. Thank you for being my client! I value your trust and loyalty.
        </p>
        <BookNowButton />
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  const faqs = [
    { q: 'Where will my massage or bodywork session take place?', a: 'Your massage or bodywork session will take place in a warm, comfortable, quiet room. Soft music may be played to help you relax. You will lie on a table especially designed for your comfort.' },
    { q: 'Must I be completely undressed?', a: 'Most massage and bodywork techniques are traditionally performed with the client unclothed; however, it is entirely up to you what you want to wear. You should undress to your level of comfort. You will be properly draped during the entire session.' },
    { q: 'Will the practitioner be present when I disrobe?', a: 'The practitioner will leave the room while you undress, relax onto the table, and cover yourself with a clean sheet or towel.' },
    { q: 'Will I be covered during the session?', a: 'You will be properly draped at all times to keep you warm and comfortable. Only the area being worked on will be exposed.' },
    { q: 'What parts of my body will be massaged?', a: 'A typical full-body session will include work on your back, arms, legs, feet, hands, head, neck, and shoulders.' },
    { q: 'What will the massage or bodywork feel like?', a: 'A relaxing Swedish massage is often a baseline for clients. Your session may start with broad, flowing strokes that will help calm your nervous system and relax exterior muscle tension. As your body becomes relaxed, pressure will gradually be increased to relax specific areas and relieve areas of muscular tension. You should communicate immediately if you feel any discomfort so that another approach may be taken.' },
    { q: 'Are there different kinds of massage and bodywork?', a: 'There are numerous types of massage and bodywork; various techniques utilize different strokes, including basic rubbing strokes, rocking movement, posture and movement re-education, application of pressure to specific points, and more. We can discuss which methods may be most appropriate for you.' },
    { q: 'What should I do during the massage or bodywork session?', a: 'Make yourself comfortable. The practitioner will either gently move you or tell you what is needed throughout the session. Many people close their eyes and completely relax, communicating if/when they need more or less pressure. Feel free to ask any questions during your session.' },
    { q: 'How will I feel after the massage or bodywork session?', a: 'Most people feel very relaxed. Some experience freedom from long-term aches and pains developed from tension or repetitive activity. After an initial period of feeling slowed down, people often experience increased energy, heightened awareness, and greater productivity which can last for days.' },
    { q: 'Are there any medical conditions that would make massage inadvisable?', a: 'Yes. That\'s why it\'s imperative that, before you begin your session, the practitioner asks general health questions. It is very important that you inform the practitioner of any health problems or medications you are taking. If you are under a doctor\'s care, it is strongly advised that you receive a written recommendation for massage prior to any session.' },
  ];

  return (
    <section id="faq" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 740, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: mobile ? 32 : 48 }}>
          <SectionLabel>Common Questions</SectionLabel>
          <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: 0 }}>Frequently Asked Questions</h2>
        </div>
        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        <BookNowButton />
      </div>
    </section>
  );
}

/* ─── VIDEOS ─── */
function VideosSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  const videos = [
    { title: 'I Helped SomeBody', id: 'Uw72SWRkXCY' },
    { title: 'What to Expect from a Massage Session', id: 'zX_MkCbx98w' },
    { title: 'Massage: A Perfect Gift', id: 'DjbVYlnRA3Y' },
  ];

  return (
    <section id="videos" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, background: C.light, scrollMarginTop: 80 }}>
      <div style={{ textAlign: 'center', marginBottom: mobile ? 32 : 48 }}>
        <SectionLabel>Learn More</SectionLabel>
        <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: 0 }}>Videos</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
        {videos.map((v, i) => (
          <div key={i}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 8, overflow: 'hidden', background: '#000' }}>
              <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
            <p style={{ fontFamily: F.body, fontSize: 14, color: C.text, marginTop: 12, fontWeight: 500 }}>{v.title}</p>
          </div>
        ))}
      </div>
      <BookNowButton />
    </section>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  const C = SiteColors, F = SiteFonts;
  const mobile = useIsMobile();
  const heading = { fontFamily: F.heading, color: C.text };

  return (
    <section id="contact" style={{ padding: `${mobile ? 48 : 80}px ${mobile ? 20 : 56}px`, scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 style={{ ...heading, fontSize: mobile ? 28 : 36, fontWeight: 400, margin: '0 0 24px', lineHeight: 1.35 }}>
            Contact Information
          </h2>
        </div>
        <div style={{ fontSize: 15, lineHeight: 2, color: C.textLight, fontFamily: F.body, marginBottom: 24, textAlign: 'center' }}>
          <p style={{ margin: '0 0 4px', fontWeight: 500, color: C.text }}>Located Inside Adagio Spa</p>
          <p style={{ margin: 0 }}>7801 N Lamar Blvd Suite D73</p>
          <p style={{ margin: '0 0 16px' }}>Austin, TX 78752</p>
          <p style={{ margin: 0 }}><strong>Phone:</strong> <PhoneLink /></p>
          <p style={{ margin: '0 0 16px' }}><strong>Email:</strong> <EmailLink /></p>
          <p style={{ margin: 0, color: C.green, fontWeight: 500 }}>Now Available for Outcalls</p>
        </div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 8, overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.0!2d-97.7124366!3d30.34524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca41f8648ac5%3A0xb09d998a6bf21a3e!2sMelcie%20Massage!5e0!3m2!1sen!2sus!4v1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Melcie Massage location — Adagio Spa, Austin TX"></iframe>
        </div>
        <BookNowButton />
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection, AboutSection, ServicesSection, BenefitsSection, TestimonialsSection, HoursSection, OutcallSection, FAQSection, VideosSection, ContactSection });
