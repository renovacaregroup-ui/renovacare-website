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
            <h2 className="text-xl font-medium text-[var(--text-dark)]">1. Welcome to RenovaCare</h2>
            <p>Thank you for choosing RenovaCare Clinic & Wellness Centre (&ldquo;RenovaCare&rdquo;). By accessing our services or visiting our website at www.renovacare.my, you acknowledge and accept these Terms & Conditions. These terms are intended to create a clear and comfortable experience for all patients and visitors.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">2. Our Services</h2>
            <p>RenovaCare provides integrative healthcare, wellness, and recovery support services, which may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>General medical consultation and preventive health screening</li>
              <li>Cancer recovery support programmes</li>
              <li>Immune support and IV nutrient therapies</li>
              <li>Advanced regenerative and cellular therapies, including Stem Cell and NK Cell programmes</li>
              <li>Wellness, recovery, and rejuvenation support</li>
            </ul>
            <p>All services are provided by qualified healthcare professionals and are carefully tailored based on individual health needs and medical suitability.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">3. Medical Information &amp; Care Approach</h2>
            <p>At RenovaCare, we focus on supportive and integrative wellness care aimed at enhancing overall wellbeing, recovery, and quality of life.</p>
            <p>Our programmes are designed to complement ongoing medical care and should not be considered a substitute for specialist treatment, diagnosis, or emergency medical services. We encourage patients to continue regular follow-ups with their primary doctors and healthcare specialists.</p>
            <p>As each individual&rsquo;s condition and response may differ, treatment experiences and results can vary from person to person. All therapies and programmes are recommended based on professional medical assessment and suitability.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">4. Appointments &amp; Scheduling</h2>
            <p>Appointments may be arranged through our online booking platform at app.renovacare.my/booking, WhatsApp, or phone.</p>
            <p>To help us provide a smooth experience for all patients:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We kindly encourage punctual arrival for appointments</li>
              <li>In some situations, late arrival may shorten the available consultation time</li>
              <li>Occasionally, appointments may need to be adjusted or rescheduled due to unforeseen circumstances</li>
            </ul>
            <p>For cancellation or rescheduling details, please refer to our Refund Policy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">5. Payment Information</h2>
            <p>Payment is usually made at the time services are provided unless alternative arrangements have been agreed upon in advance.</p>
            <p>We currently accept:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cash</li>
              <li>Credit or debit cards</li>
              <li>Online bank transfers</li>
            </ul>
            <p>Programme packages may be paid in full or according to a mutually agreed payment arrangement prior to commencement.</p>
            <p>While we strive to maintain consistent pricing, service fees may occasionally be updated. Any confirmed bookings or approved quotations will continue to honour the agreed pricing.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">6. Patient Cooperation</h2>
            <p>To support safe and personalised care, we kindly ask patients to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete health information</li>
              <li>Inform our team of any changes in medical condition, medications, or allergies</li>
              <li>Follow the recommended care and post-treatment guidance provided by our healthcare team</li>
              <li>Maintain a respectful and comfortable environment during clinic visits</li>
            </ul>
            <p>Your cooperation allows us to provide a safer and better experience for everyone.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">7. Website &amp; Content Usage</h2>
            <p>All materials and content available on the RenovaCare website, including text, images, branding, logos, and design elements, are owned by RenovaCare Clinic &amp; Wellness Centre unless otherwise stated.</p>
            <p>We kindly ask that any reproduction or distribution of our materials be done only with prior written permission.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">8. Limitation of Responsibility</h2>
            <p>RenovaCare is committed to delivering professional healthcare and wellness support with care and integrity. However, as with all medical and wellness services, individual outcomes may vary.</p>
            <p>To the extent permitted under applicable laws, RenovaCare will not be responsible for indirect or unforeseen losses arising from the use of our services or website. Where applicable, any responsibility shall be limited to the amount paid for the specific service involved.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">9. Applicable Law</h2>
            <p>These Terms &amp; Conditions are governed in accordance with the laws of Malaysia. Any matters arising in relation to our services shall be handled under the jurisdiction of the courts of Malaysia.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">10. Updates to These Terms</h2>
            <p>From time to time, RenovaCare may update these Terms &amp; Conditions to reflect service improvements, operational updates, or regulatory requirements.</p>
            <p>Any revised version will be published on this page together with the updated effective date. Continued use of our services after updates are published indicates acceptance of the revised terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">11. Contact Us</h2>
            <p>If you have any questions or require further clarification regarding these Terms &amp; Conditions, our team will be happy to assist you.</p>
            <div className="bg-[var(--cream)] rounded-xl p-4 mt-2">
              <p><strong>RenovaCare Clinic &amp; Wellness Centre</strong></p>
              <p>Website: www.renovacare.my</p>
              <p>Booking: app.renovacare.my/booking</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
