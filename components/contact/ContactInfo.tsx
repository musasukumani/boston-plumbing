function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brick)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-xl p-8 text-white" style={{ backgroundColor: 'var(--navy)' }}>
        <h3 className="font-display font-normal text-xl mb-6">Contact Information</h3>
        <ul className="space-y-5 text-sm">
          <li className="flex items-start gap-4">
            <span className="text-gray-400 mt-0.5 shrink-0"><MapPinIcon /></span>
            <div>
              <div className="font-semibold mb-0.5">Address</div>
              <div className="text-gray-400">47 Tremont St, Boston, MA 02108</div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-gray-400 mt-0.5 shrink-0"><PhoneIcon /></span>
            <div>
              <div className="font-semibold mb-0.5">Phone</div>
              <a href="tel:6175550192" className="text-brick hover:underline">(617) 555-0192</a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-gray-400 mt-0.5 shrink-0"><MailIcon /></span>
            <div>
              <div className="font-semibold mb-0.5">Email</div>
              <a href="mailto:info@bostonplumbing.com" className="text-brick hover:underline">
                info@bostonplumbing.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-gray-400 mt-0.5 shrink-0"><ClockIcon /></span>
            <div>
              <div className="font-semibold mb-0.5">Hours</div>
              <div className="text-gray-400 space-y-1">
                <div>Monâ€“Fri: 7:00am â€“ 8:00pm</div>
                <div>Saturday: 8:00am â€“ 6:00pm</div>
                <div>Sunday: Emergency Only</div>
              </div>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex items-center gap-3 bg-white/8 rounded-lg px-4 py-3">
          <ZapIcon />
          <span className="text-sm font-medium text-gray-300">Average response time: <span className="text-brick font-semibold">28 minutes</span></span>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-dark-border" style={{ height: 300 }}>
        <iframe
          title="Boston Plumbing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8!2d-71.0626!3d42.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709e70d3d2b1%3A0x1!2s47+Tremont+St%2C+Boston%2C+MA+02108!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
