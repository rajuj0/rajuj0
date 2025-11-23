const heroCTA = [
  { label: 'Find top barbers nearby', primary: true },
  { label: 'Onboard my salon', primary: false },
];

const platformPillars = [
  {
    title: 'Onboard salons fast',
    copy: 'KYC, license checks, and seat-level catalogues so every chair, tool, and price point is mapped before going live.',
  },
  {
    title: 'Catalogue-first services',
    copy: 'All services live in a searchable catalogue with durations, gender tags, bundles, and GST-ready pricing.',
  },
  {
    title: 'Barber & beautician profiles',
    copy: 'Skill tags, certifications, hygiene badges, preferred tools, and availability calendars for each staff member.',
  },
  {
    title: 'Customer-first discovery',
    copy: 'Search by salon or barber, sort by hygiene rating, distance, and reviews, and book instantly with live slot locks.',
  },
];

const featuredBarbers = [
  {
    name: 'Aman “Fade King” Singh',
    salon: 'Fade Theory · Indiranagar',
    rating: 4.9,
    hygiene: 4.8,
    badges: ['Skin fades', 'Line-ups'],
    slots: 'Next slot: 4:30 PM',
  },
  {
    name: 'Riya · Senior Stylist',
    salon: 'Luxe Layers · Bandra',
    rating: 4.8,
    hygiene: 4.9,
    badges: ['Layered cuts', 'Hair spa'],
    slots: 'Next slot: 5:10 PM',
  },
  {
    name: 'Dev · Classic Barber',
    salon: 'Old Town Cuts · Gurgaon',
    rating: 4.7,
    hygiene: 4.7,
    badges: ['Business cuts', 'Beard styling'],
    slots: 'Next slot: 5:45 PM',
  },
];

const bookingSteps = [
  'Pick a salon, barber, and service from the catalogue with upfront pricing.',
  'Reserve the slot; idempotent booking keys prevent double charges.',
  'Pay via Razorpay with automatic coupons, GST invoices, and receipts.',
  'Get confirmations plus hygiene tips via SMS/WhatsApp/email.',
  'Show up, get styled, and leave verified ratings for salon and barber.',
];

const onboardingSteps = [
  {
    title: 'List the salon',
    copy: 'Upload KYC, licenses, seat map, and tool inventory. Configure cities, localities, and walk-in buffers.',
  },
  {
    title: 'Publish catalogue',
    copy: 'Create services with durations, gender tags, bundles, add-ons, and GST-inclusive pricing.',
  },
  {
    title: 'Onboard staff',
    copy: 'Invite barbers and beauticians, add skill tags, hygiene badges, and sync their availability calendars.',
  },
  {
    title: 'Go live with discovery',
    copy: 'Enable search by salon or pro, surface hygiene ratings, and unlock offers for early repeat bookings.',
  },
];

const catalogueCategories = [
  {
    title: 'Hair care & styling',
    subtitle: 'Cuts, color, and treatments for every hair type.',
    items: [
      'Haircuts & styling for men, women, and kids',
      'Shampooing + conditioning with scalp massage',
      'Color services: highlights, lowlights, full color, corrections',
      'Chemical treatments: perming, relaxing, straightening, keratin/cysteine',
      'Event looks: updos, braids, blow-dries, bridal prep',
      'Hair + scalp repair: anti-dandruff, hair fall control, masks',
      'Extensions, wig installs, and barber services with beard care',
    ],
  },
  {
    title: 'Skin care',
    subtitle: 'Relaxation and corrective facials for every concern.',
    items: [
      'Basic, deluxe, anti-aging, hydration, and brightening facials',
      'Clean-ups, de-tan, and lightening bleaches',
      'Body polishing, scrubs, wraps, and tanning services',
      'Advanced care: chemical peels, microdermabrasion, dermaplaning, LED therapies',
    ],
  },
  {
    title: 'Hair removal',
    subtitle: 'Smooth results with multiple techniques.',
    items: [
      'Waxing for face, body, legs, underarms, and bikini',
      'Threading for brows, upper lip, and precision shaping',
      'Laser and electrolysis options from certified partners',
    ],
  },
  {
    title: 'Nail care',
    subtitle: 'Healthy hands and feet with artistic finishes.',
    items: [
      'Classic and spa manicures with gel polish options',
      'Pedicures with foot massages and targeted treatments',
      'Nail enhancements: acrylics, gel extensions, and custom nail art',
    ],
  },
  {
    title: 'Makeup & special events',
    subtitle: 'For parties, weddings, and every milestone.',
    items: [
      'Party, engagement, and bridal makeup with trials',
      'Lash extensions, lifts, and tints for defined eyes',
      'Brow tinting, shaping, and microblading',
      'Saree and lehenga draping by experienced artists',
    ],
  },
  {
    title: 'Wellness & spa',
    subtitle: 'Recover, relax, and prep for big days.',
    items: [
      'Massages: Swedish, deep tissue, aromatherapy, head + foot',
      'Body contouring with pre/post-care guidance',
      'Bridal and pre-bridal bundles across hair, skin, and nails',
    ],
  },
];

const searchFeatures = [
  'Search salons by name, area, or hygiene tier; or search barbers by specialty.',
  'Filter by distance, budget, hygiene score, gender tags, and availability.',
  'Preview full catalogues with duration, add-ons, and transparent pricing.',
  'See top barber lists inside each salon alongside wait times and slots.',
  'Compare nearby salons with live ratings, hygiene grades, and offers.',
];

const nearbySalons = [
  { name: 'Urban Comb Studio', distance: '1.2 km', rating: 4.8, hygiene: 4.9, highlight: 'Walk-ins + online catalogue' },
  { name: 'North Street Barber Co.', distance: '2.0 km', rating: 4.7, hygiene: 4.8, highlight: 'Top fades and beard work' },
  { name: 'Glow & Go Salon', distance: '2.5 km', rating: 4.6, hygiene: 4.9, highlight: 'Skin + nail specialists' },
  { name: 'Roots & Rituals', distance: '3.1 km', rating: 4.5, hygiene: 4.7, highlight: 'Spa add-ons with hair spa' },
];

const partnerPerks = [
  'Salon dashboard for calendars, staff onboarding, payouts, and GST invoices',
  'Hygiene badges, SOP checklists, and audit logs to keep standards visible',
  'Marketing boosts: featured barber cards, nearby ranking, and loyalty credits',
  'No-show protection, waitlists, and automated reminders for every booking',
];

const opsAssurances = [
  { title: 'Verified shops', copy: 'KYC + salon license, tool hygiene, and seat mapping before listing.' },
  { title: 'Reliable slots', copy: 'Atomic booking writes with retries and queue-backed notifications.' },
  { title: 'Fair reviews', copy: 'Freshness-weighted ratings with hygiene-specific scores per visit.' },
  { title: 'Support that shows up', copy: 'Hotline and in-app chat for delays, refunds, and disputes.' },
];

const hygienePractices = [
  'Mandatory tool sterilization logs per chair with photo evidence.',
  'Seat-level hygiene badges visible to customers before booking.',
  'Disposable capes, fresh towels, and skin-safe products by default.',
  'Audit-ready SOPs for clippers, wash stations, and nail tools.',
];

const experienceHighlights = [
  'One search bar for salons, barbers, beauticians, and niche experts.',
  'Live wait times with queue + appointment options.',
  'Offer engine for memberships, loyalty credits, and BOGO combos.',
  'Family accounts, saved preferences, and accessibility-friendly UI.',
];

const faqs = [
  {
    question: 'How does BarberTop pick “top barbers”?',
    answer:
      'We blend recency-weighted ratings, hygiene compliance, and specialty tags so the best-fit barbers surface for each service.',
  },
  {
    question: 'Can salons manage dynamic pricing or offers?',
    answer: 'Yes. Set happy hours, coupon windows, and bundle discounts that sync to checkout and GST invoices automatically.',
  },
  {
    question: 'What keeps hygiene scores trustworthy?',
    answer: 'Seat-level audits, proof photos, and freshness-weighted ratings ensure hygiene scores reflect recent visits.',
  },
  {
    question: 'Is booking safe for walk-ins and pre-bookings?',
    answer: 'Walk-ins get queue tokens; pre-bookings lock slots with idempotent payments and no-show protections.',
  },
];

const kpis = [
  { label: 'Payment success', value: '95%+', detail: 'Razorpay smart retries + webhooks' },
  { label: 'Hygiene compliance', value: '92%+', detail: 'Checklists + audits + photo proofing' },
  { label: 'Repeat bookings', value: '30%+', detail: 'Favorites, credits, and follow-up nudges' },
];

export default function Page() {
  return (
    <div className="page">
      <section className="hero">
        <div className="eyebrow">BarberTop · Salon + Barber Discovery</div>
        <h1 className="hero__title">Customer-friendly salon booking with hygiene-first discovery.</h1>
        <p className="hero__tagline">
          Onboard salons and every barber or beautician, publish a complete catalogue, and let customers search by salon
          or professional. Show hygiene ratings, top barber lists, and nearby salons with transparent pricing and live
          slots.
        </p>
        <div className="hero__cta">
          {heroCTA.map((item) => (
            <button key={item.label} className={`button ${item.primary ? '' : 'secondary'}`}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="hero__pills">
          <div className="pill">Full catalogue onboarding</div>
          <div className="pill">Hygiene + rating visibility</div>
          <div className="pill">Search by salon or barber</div>
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
              <select defaultValue="Haircut & Styling">
                <option>Haircut & Styling</option>
                <option>Skin & Facials</option>
                <option>Nail Care</option>
                <option>Makeup & Bridal</option>
              </select>
            </label>
            <label>
              <span>Preferred hygiene tier</span>
              <select defaultValue="4.5+ rated">
                <option>4.5+ rated</option>
                <option>4.0+ rated</option>
                <option>Any nearby</option>
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
            <button className="button full">Search salons & barbers</button>
            <p className="muted">
              We hold your slot for 5 minutes while you pay. Hygiene scores, salon ratings, and barber reviews appear
              before checkout.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="section-label">Top-rated barbers near you</div>
          <div className="list list--barbers">
            {featuredBarbers.map((barber) => (
              <div key={barber.name} className="barber">
                <div>
                  <div className="barber__name">{barber.name}</div>
                  <div className="muted">{barber.salon}</div>
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
                  <div className="muted">Hygiene {barber.hygiene}</div>
                  <div className="muted">{barber.slots}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="inline-metric">
            <div>
              <div className="metric__value">Nearby picks</div>
              <div className="muted">Sorted by hygiene + reviews</div>
            </div>
            <div>
              <div className="metric__value">Live slots</div>
              <div className="muted">Each barber’s calendar is tracked</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Built for onboarding salons, catalogues, and pros</div>
        <div className="grid grid--4">
          {platformPillars.map((item) => (
            <div key={item.title} className="card card--service">
              <div className="card__title">{item.title}</div>
              <div className="muted">{item.copy}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid--2">
        <div className="card">
          <div className="section-label">Salon onboarding in minutes</div>
          <div className="steps">
            {onboardingSteps.map((step, index) => (
              <div key={step.title} className="step">
                <div className="step__num">{index + 1}</div>
                <div>
                  <div className="card__title">{step.title}</div>
                  <div className="muted">{step.copy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="section-label">Hygiene-first by default</div>
          <ul className="list">
            {hygienePractices.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="inline-metric">
            <div>
              <div className="metric__value">4.8★</div>
              <div className="muted">Average hygiene score for top partners</div>
            </div>
            <div>
              <div className="metric__value">72h</div>
              <div className="muted">Audit freshness window for ratings</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Complete salon catalogue · every service, upfront</div>
        <div className="grid grid--3">
          {catalogueCategories.map((category) => (
            <div key={category.title} className="card">
              <div className="card__title">{category.title}</div>
              <div className="card__subtitle">{category.subtitle}</div>
              <ul className="list">
                {category.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid--2">
        <div className="card">
          <div className="section-label">Search & discovery</div>
          <div className="list">
            {searchFeatures.map((feature) => (
              <div key={feature}>• {feature}</div>
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

      <section className="grid grid--2">
        <div className="card">
          <div className="section-label">Nearby salons with hygiene ratings</div>
          <table className="table">
            <thead>
              <tr>
                <th>Salon</th>
                <th>Distance</th>
                <th>Rating</th>
                <th>Hygiene</th>
                <th>Highlights</th>
              </tr>
            </thead>
            <tbody>
              {nearbySalons.map((salon) => (
                <tr key={salon.name}>
                  <td>{salon.name}</td>
                  <td>{salon.distance}</td>
                  <td>★ {salon.rating}</td>
                  <td>{salon.hygiene}</td>
                  <td className="muted">{salon.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="section-label">Operational assurances</div>
          <div className="list list--chips">
            {opsAssurances.map((item) => (
              <div key={item.title} className="pill pill--wide">
                <div className="pill__title">{item.title}</div>
                <div className="muted">{item.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid--2">
        <div className="card">
          <div className="section-label">Customer experience</div>
          <div className="list">
            {experienceHighlights.map((highlight) => (
              <div key={highlight}>• {highlight}</div>
            ))}
          </div>
          <div className="pill-grid">
            <div className="pill">Realtime slots</div>
            <div className="pill">Hygiene filter</div>
            <div className="pill">Family profiles</div>
          </div>
        </div>
        <div className="card">
          <div className="section-label">FAQs</div>
          <div className="faq">
            {faqs.map((item) => (
              <div key={item.question} className="faq__item">
                <div className="faq__question">{item.question}</div>
                <div className="muted">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">Why salons and barbers partner with BarberTop</div>
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

      <section className="cta">
        <div>
          <div className="section-label">Ready to launch BarberTop?</div>
          <h2 className="cta__title">Onboard salons, staff, and catalogues in one place.</h2>
          <p className="muted">
            Publish every service, show hygiene scores, and help customers find the right salon or barber. Deploy with
            Docker, plug in Razorpay keys, and go live in hours.
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
