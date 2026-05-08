import { FadeIn } from "../components/animations";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-8">
            Privacy <span className="text-[var(--primary-gold)]">Policy</span>
          </h1>
        </FadeIn>

        <div className="prose prose-sm max-w-none text-[var(--text-muted)] space-y-6">
          <p className="text-sm text-[var(--text-light)]">Last updated: May 2026</p>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">1. Introduction</h2>
            <p>RenovaCare Clinic & Wellness Centre (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.renovacare.my) or use our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, phone number, email address, date of birth, and identification details when you register or book an appointment.</li>
              <li><strong>Medical Information:</strong> Health history, treatment records, consultation notes, and related medical data necessary for providing our services.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and pages visited.</li>
              <li><strong>Communication Data:</strong> Records of correspondence when you contact us via WhatsApp, email, or phone.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage medical consultations, treatments, and wellness programmes.</li>
              <li>To schedule and manage appointments.</li>
              <li>To communicate with you regarding your health, appointments, and services.</li>
              <li>To process payments and manage billing.</li>
              <li>To improve our services and website experience.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">4. Data Protection</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Medical records are stored securely and access is restricted to authorised healthcare professionals only.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">5. Data Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Healthcare partners and laboratories for the purpose of treatment and diagnostics.</li>
              <li>Legal authorities when required by law.</li>
              <li>Service providers who assist in operating our website and services, under strict confidentiality agreements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">6. Your Rights</h2>
            <p>Under the Personal Data Protection Act 2010 (PDPA) of Malaysia, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data held by us.</li>
              <li>Correct any inaccurate or incomplete personal data.</li>
              <li>Withdraw consent for processing your data.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">7. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or your personal data, please contact us:</p>
            <div className="bg-[var(--cream)] rounded-xl p-4 mt-2">
              <p><strong>RenovaCare Clinic & Wellness Centre</strong></p>
              <p>No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor</p>
              <p>Phone: <a href="tel:+60129397686" className="text-[var(--primary-gold)] hover:underline">+6012-939 7686</a></p>
              <p>Email: <a href="mailto:enquiry@renovacare.my" className="text-[var(--primary-gold)] hover:underline">enquiry@renovacare.my</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
