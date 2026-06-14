/* site-app.jsx — Main app assembly */

function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SiteFonts.body,
      background: SiteColors.bg,
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(HeroSection, null), /*#__PURE__*/React.createElement(AboutSection, null), /*#__PURE__*/React.createElement(ServicesSection, null), /*#__PURE__*/React.createElement(BenefitsSection, null), /*#__PURE__*/React.createElement(TestimonialsSection, null), /*#__PURE__*/React.createElement(HoursSection, null), /*#__PURE__*/React.createElement(OutcallSection, null), /*#__PURE__*/React.createElement(FAQSection, null), /*#__PURE__*/React.createElement(VideosSection, null), /*#__PURE__*/React.createElement(ContactSection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
