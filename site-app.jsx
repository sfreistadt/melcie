/* site-app.jsx — Main app assembly */

function App() {
  return (
    <div style={{ fontFamily: SiteFonts.body, background: SiteColors.bg, minHeight: '100vh' }}>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <HoursSection />
      <OutcallSection />
      <FAQSection />
      <VideosSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
