import { FadeIn } from "../components/animations";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-light text-[var(--text-dark)] mb-8">
            Refund <span className="text-[var(--primary-gold)]">Policy</span>
          </h1>
        </FadeIn>

        <div className="prose prose-sm max-w-none text-[var(--text-muted)] space-y-6">
          <p className="text-sm text-[var(--text-light)]">Last updated: May 2026</p>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">1. General Policy</h2>
            <p>RenovaCare Clinic & Wellness Centre is committed to providing quality healthcare services. We understand that circumstances may require cancellations or changes to your appointments or purchased programmes. This policy outlines our refund terms and conditions.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">2. Consultation Fees</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultation fees are non-refundable once the consultation has taken place.</li>
              <li>If you cancel your appointment at least 24 hours before the scheduled time, no charge will be applied.</li>
              <li>Cancellations made less than 24 hours before the appointment may incur a cancellation fee.</li>
              <li>No-shows without prior notice will be charged the full consultation fee.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">3. Treatment & Therapy Programmes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Programme packages (e.g., IV therapy, recovery programmes) are non-refundable once treatment has commenced.</li>
              <li>If you wish to cancel a programme before the first session, a refund may be issued minus an administrative fee of 10% of the total programme cost.</li>
              <li>Partially completed programmes are not eligible for refund on remaining sessions.</li>
              <li>Programme packages are non-transferable to other individuals unless approved by management.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">4. Advanced Therapies (Stem Cell / NK Cell)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Due to the specialised nature of cellular therapies, all payments for Stem Cell and NK Cell therapies are non-refundable once the preparation process has begun.</li>
              <li>Cancellations prior to cell preparation may be eligible for a partial refund, subject to assessment.</li>
              <li>Any refund for advanced therapies will be evaluated on a case-by-case basis by our medical team.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">5. Health Screening Packages</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Health screening packages can be rescheduled at no additional cost with at least 48 hours notice.</li>
              <li>Refund requests for unused health screening packages will be processed minus a 15% administrative fee.</li>
              <li>No refunds will be issued after the screening has been conducted.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">6. Refund Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All refund requests must be submitted in writing via email to <a href="mailto:enquiry@renovacare.my" className="text-[var(--primary-gold)] hover:underline">enquiry@renovacare.my</a>.</li>
              <li>Approved refunds will be processed within 14 business days.</li>
              <li>Refunds will be credited back to the original payment method.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">7. Exceptions</h2>
            <p>RenovaCare reserves the right to make exceptions to this policy on a case-by-case basis, particularly in circumstances involving medical emergencies or unforeseen events. Please speak with our team if you have special circumstances.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[var(--text-dark)]">8. Contact Us</h2>
            <p>For any questions regarding this refund policy, please reach out to us:</p>
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
