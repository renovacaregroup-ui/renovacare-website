import { FadeIn } from "../components/animations";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-8">
            Terms & <span className="text-[var(--primary-gold)]">Conditions</span>
          </h1>
        </FadeIn>

        <div className="prose prose-sm max-w-none text-[var(--text-muted)] space-y-6">
          <p className="text-sm text-[var(--text-light)]">Last updated: May 2026</p>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">1. Acceptance of Terms</h2>
            <p>By accessing and using the services of RenovaCare Clinic & Wellness Centre (&ldquo;RenovaCare&rdquo;), including our website (www.renovacare.my), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">2. Services</h2>
            <p>RenovaCare provides integrative medical, wellness, and recovery support services including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>General medical consultation and preventive health screening.</li>
              <li>Cancer recovery support programmes.</li>
              <li>Immune support and IV nutrient therapies.</li>
              <li>Advanced regenerative and cellular therapies (Stem Cell, NK Cell).</li>
              <li>Wellness and rejuvenation programmes.</li>
            </ul>
            <p>All services are provided by qualified healthcare professionals and are subject to medical assessment and patient suitability.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">3. Medical Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>RenovaCare provides supportive and integrative wellness programmes designed to complement patient recovery.</li>
              <li>We do not replace oncology treatment, diagnosis, or specialist medical management.</li>
              <li>Patients are advised to continue follow-up with their primary medical specialists.</li>
              <li>Results may vary between individuals. No guarantees of specific outcomes are made.</li>
              <li>All therapies and programmes are subject to independent medical assessment.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">4. Appointments & Scheduling</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointments can be made through our online booking system (app.renovacare.my/booking), WhatsApp, or phone.</li>
              <li>Patients must arrive on time for scheduled appointments. Late arrivals may result in shortened consultation time.</li>
              <li>RenovaCare reserves the right to reschedule appointments due to unforeseen circumstances.</li>
              <li>Please refer to our Refund Policy for cancellation terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is due at the time of service unless prior arrangements have been made.</li>
              <li>We accept cash, credit/debit cards, and online bank transfers.</li>
              <li>Programme packages must be paid in full or according to the agreed payment plan before commencement.</li>
              <li>Prices are subject to change without prior notice. Existing confirmed bookings will honour the quoted price.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">6. Patient Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Patients must provide accurate and complete health information for safe treatment.</li>
              <li>Patients must inform us of any changes in health status, medications, or allergies.</li>
              <li>Patients must follow prescribed treatment plans and post-treatment care instructions.</li>
              <li>Patients must comply with clinic policies and guidelines during visits.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">7. Intellectual Property</h2>
            <p>All content on the RenovaCare website, including text, images, logos, and design elements, is the property of RenovaCare Clinic & Wellness Centre and is protected by intellectual property laws. Unauthorised reproduction or distribution is prohibited.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">8. Limitation of Liability</h2>
            <p>RenovaCare shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the specific service in question.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">9. Governing Law</h2>
            <p>These Terms & Conditions are governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">10. Changes to Terms</h2>
            <p>RenovaCare reserves the right to modify these Terms & Conditions at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the revised terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">11. Contact Us</h2>
            <p>For any questions regarding these Terms & Conditions, please contact us:</p>
            <div className="bg-[var(--cream)] rounded-xl p-4 mt-2">
              <p><strong>RenovaCare Clinic & Wellness Centre</strong></p>
              <p>No 2-G, Jalan Eco Santuari 8/1A, Eco Santuari, Telok Panglima Garang, 42500 Selangor</p>
              <p>Phone: +6012-939 7686</p>
              <p>Email: enquiry@renovacare.my</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
