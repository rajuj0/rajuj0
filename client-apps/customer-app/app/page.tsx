const heroCTA = [
  { label: 'Book a slot', primary: true },
  { label: 'See how it works', primary: false },
];

const serviceMenu = [
  { name: 'Haircut + Style', price: '₹499', duration: '35 mins', perk: 'Styled finish included' },
  { name: 'Fade & Beard Trim', price: '₹649', duration: '45 mins', perk: 'Hot towel + razor line-up' },
  { name: 'Beard Sculpt', price: '₹349', duration: '25 mins', perk: 'Oil treatment + massage' },
  { name: 'Kid’s Cut', price: '₹299', duration: '30 mins', perk: 'Friendly with restless kids' },
];

const featuredBarbers = [
  { name: 'Aman “Fade King”', rating: 4.9, badges: ['Skin fades', 'Line-ups'], slots: 'Next slot: 4:30 PM' },
  { name: 'Riya (Senior Stylist)', rating: 4.8, badges: ['Layered cuts', 'Hair spa'], slots: 'Next slot: 5:10 PM' },
  { name: 'Dev (Classic Cuts)', rating: 4.7, badges: ['Business cuts', 'Beard styling'], slots: 'Next slot: 5:45 PM' },
];

const bookingSteps = [
  'Pick your barber and service with live pricing',
  'Lock the slot with idempotent booking checks',
  'Pay via Razorpay — auto-applied coupons + receipts',
  'Confirmation shared on SMS/WhatsApp + email',
  'Arrive, get styled, leave the review after checkout',
];

const opsAssurances = [
  { title: 'Verified shops', copy: 'KYC, salon license, and tool hygiene checks before going live.' },
  { title: 'Reliable slots', copy: 'Atomic booking writes with DB locks and a retry-safe queue.' },
  { title: 'Fair reviews', copy: 'One review per completed booking. Fraud detection + freshness weighting.' },
  { title: 'Real humans', copy: 'Support hotline + in-app chat for no-shows, delays, and disputes.' },
];

const kpis = [
  { label: 'Payment success', value: '95%+', detail: 'Razorpay smart retries + webhooks' },
  { label: 'On-time starts', value: '90%+', detail: 'Buffer-aware scheduling + reminders' },
  { label: 'Repeat bookings', value: '30%+', detail: 'Loyalty credits + saved favorites' },
];

const faq = [
  { q: 'Do I need to call the salon?', a: 'No. Book, pay, and track the appointment in Barbertop. The salon sees it instantly.' },
  { q: 'What if the barber runs late?', a: 'We notify you, offer alternate slots, and protect your payment until service completion.' },
  { q: 'Can I choose who cuts my hair?', a: 'Yes. Every barber has public ratings, specialties, and live slots. Pick your favorite.' },
  { q: 'How do refunds work?', a: 'Instant Razorpay refunds for cancellations before the buffer window. Post-buffer via support review.' },
];

const partnerPerks = [
  'Salon dashboard for calendars, staff, and payouts',
  'Commission auto-handling with GST-compliant invoices',
  'No-show protection and automated waitlists',
  'Marketing boosts: top cards, seasonal campaigns, loyalty credits',
];

export default function Page() {
  return (
    <div className="page">
      <section className="hero">
        <div className="eyebrow">Barbertop · MVP now live</div>
        <h1 className="hero__title">Book your trusted barber in 3 taps.</h1>
        <p className="hero__tagline">
          Real-time availability, transparent ratings, and checkout built for Indian salons. Launch-ready web app with
          Razorpay, OTP login, and queue-backed notifications.
        </p>
        <div className="hero__cta">
          {heroCTA.map((item) => (
            <button key={item.label} className={`button ${item.primary ? '' : 'secondary'}`}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="hero__pills">
          <div className="pill">SSR Next.js 15 · React 18</div>
          <div className="pill">Razorpay + OTP login ready</div>
          <div className="pill">Queue-backed notifications</div>
        </div>
      </section>

      <section className="grid grid--2">
        <div className="card">
          <div className="section-label">Book right now</div>
          <div className="form">
            <label>
              <span>City</span>
              <select defaultValue="Bengaluru">
                <option>Bengaluru</option>
                <option>Mumbai</option>
                <option>Delhi NCR</option>
              </select>
            </label>
            <label>
              <span>Service</span>
              <select defaultValue="Haircut + Style">
                {serviceMenu.map((service) => (
                  <option key={service.name}>{service.name}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Date</span>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </label>
            <label>
              <span>Preferred time</span>
              <input type="time" defaultValue="16:30" />
            </label>
            <button className="button full">Check live slots</button>
            <p className="muted">We hold your slot for 5 minutes while you pay. Idempotent booking keys prevent double charges.</p>
          </div>
        </div>
        <div className="card">
          <div className="section-label">Featured barbers</div>
          <div className="list list--barbers">
            {featuredBarbers.map((barber) => (
              <div key={barber.name} className="barber">
                <div>
                  <div className="barber__name">{barber.name}</div>
                  <div className="barber__tags">
                    {barber.badges.map((badge) => (
                      <span key={badge} className="chip">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="barber__meta">
                  <div className="rating">★ {barber.rating}</div>
                  <div className="muted">{barber.slots}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="inline-metric">
            <div>
              <div className="metric__value">99.5% uptime</div>
              <div className="muted">API + queue monitored with circuit breakers</div>
            </div>
            <div>
              <div className="metric__value">&lt;200ms</div>
              <div className="muted">Median latency via caching + pooling</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Popular services with upfront pricing</div>
        <div className="grid grid--4">
          {serviceMenu.map((service) => (
            <div key={service.name} className="card card--service">
              <div className="card__title">{service.name}</div>
              <div className="price">{service.price}</div>
              <div className="muted">{service.duration}</div>
              <div className="muted">{service.perk}</div>
              <button className="button ghost">Book this</button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid--2">
        <div>
          <div className="section-title">How Barbertop keeps things smooth</div>
          <div className="list list--chips">
            {opsAssurances.map((item) => (
              <div key={item.title} className="pill pill--wide">
                <div className="pill__title">{item.title}</div>
                <div className="muted">{item.copy}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="section-label">Booking flow</div>
          <div className="timeline">
            {bookingSteps.map((step) => (
              <div key={step} className="timeline__step">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Built for salons and barbers</div>
        <div className="grid grid--2">
          <div className="card">
            <div className="card__title">Salon partners</div>
            <ul className="list">
              {partnerPerks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
            <button className="button secondary full">Request a demo</button>
          </div>
          <div className="card card--metrics">
            {kpis.map((metric) => (
              <div key={metric.label} className="metric">
                <div className="metric__value">{metric.value}</div>
                <div className="metric__label">{metric.label}</div>
                <div className="muted">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid--2">
        <div className="card">
          <div className="section-label">Customer love</div>
          <p className="quote">
            “Switched from walk-ins to Barbertop. Payments settle on time, and customers pick the right barber without
            crowding the waiting area.”
          </p>
          <div className="quote__meta">Rohit, Owner · Bandra West</div>
        </div>
        <div className="card">
          <div className="section-label">Support + SLAs</div>
          <ul className="list">
            <li>Live monitoring of gateway, queue, and workers</li>
            <li>Provider fallbacks for SMS/email</li>
            <li>Structured incident playbooks and on-call</li>
            <li>Audit logs for bookings, refunds, and reviews</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-title">FAQs</div>
        <div className="grid grid--2">
          {faq.map((item) => (
            <div key={item.q} className="card">
              <div className="card__title">{item.q}</div>
              <div className="muted">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <div className="section-label">Ready to launch Barbertop?</div>
          <h2 className="cta__title">MVP web app + API gateway + microservices starter</h2>
          <p className="muted">
            Deploy with Docker, plug in Razorpay keys, and go live in hours. Notifications, review rules, and booking
            safeguards already wired.
          </p>
        </div>
        <div className="cta__actions">
          <button className="button">Start demo environment</button>
          <button className="button secondary">Talk to the team</button>
        </div>
      </section>
    </div>
  );
}
