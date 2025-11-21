const highlights = [
  {
    title: 'Book by name, not by chance',
    description: 'Pick the exact barber you trust with transparent ratings, specialties, and real-time slots.',
  },
  {
    title: 'Frictionless payments',
    description: 'Razorpay-powered checkout with automated commission handling and receipts.',
  },
  {
    title: 'Fair reviews',
    description: 'One review per completed booking, weighted freshness, and fraud controls baked in.',
  },
];

const features = [
  {
    title: 'Customer web app',
    subtitle: 'Next.js 15, SSR + React 18',
    bullets: ['Discovery by location, specialty, rating', 'Real-time availability and pricing', 'Secure payments + receipts'],
  },
  {
    title: 'Shop dashboard',
    subtitle: 'Scheduling + earnings',
    bullets: ['Manage barber calendars and time off', 'Track commissions and payouts', 'Respond to reviews in context'],
  },
  {
    title: 'Admin console',
    subtitle: 'Quality + compliance',
    bullets: ['Onboard/verify shops', 'Moderate reviews and disputes', 'Monitor KPIs and uptime'],
  },
];

const flows = [
  'Customer selects barber → picks service + time',
  'Atomic booking check with DB locking + idempotency key',
  'Razorpay payment confirmation webhook → booking confirmed',
  'SMS/WhatsApp confirmation for customer and barber',
  'Service completion → review prompt in 30 minutes',
  'Weighted rating update + leaderboard refresh every 6 hours',
];

const architecture = [
  'API Gateway → v1 routes, auth, rate limits, circuit breakers',
  'Microservices: user/shop, booking slots, payments, reviews, analytics, notifications',
  'Data: PostgreSQL (Supabase) + Redis cache + ClickHouse analytics',
  'Async queue (RabbitMQ/Kafka) for bookings, analytics, and notifications',
  'Background workers for slot processing, review triggers, and reporting',
  'Provider adapters: Razorpay, Gupshup/Textlocal/Twilio, SendGrid, Google Maps',
];

const metrics = [
  { label: 'Booking success', value: '>99%', detail: 'Idempotent payments, retry/backoff on third-party calls' },
  { label: 'API latency', value: '<200ms', detail: 'Redis caching, connection pooling, read replicas' },
  { label: 'Uptime target', value: '99.5%', detail: 'Health checks, circuit breakers, autoscaling' },
  { label: 'Notification SLA', value: '<30s', detail: 'Queue-first delivery with provider failover' },
];

const roadmap = [
  {
    phase: 'MVP (0-3 months)',
    items: ['10-15 salons onboarded', '100+ bookings', 'Payment success >95%', 'Repeat bookings >30%'],
  },
  {
    phase: 'City scale (3-12 months)',
    items: ['500 salons across 3 cities', 'Leaderboards + loyalty', 'Automated waitlist + cancellations'],
  },
  {
    phase: 'Advanced (12-24 months)',
    items: ['AI recommendations', 'Predictive slot pricing', 'Video consultations', 'Salon CRM + analytics'],
  },
];

export default function Page() {
  return (
    <div className="hero">
      <div className="badge">MVP Blueprint · Barbertop</div>
      <div className="hero__title">Book your trusted barber, not just any salon.</div>
      <div className="hero__tagline">
        Loyalty-first two-sided marketplace with transparent ratings, real-time availability, fair reviews, and
        Razorpay-powered checkout. Built for urban India to reduce wait times, boost repeat bookings, and grow barber
        brands.
      </div>
      <div className="hero__cta">
        <button className="button">View booking flow</button>
        <button className="button secondary">Download architecture</button>
      </div>

      <div className="tagline-grid">
        {highlights.map((item) => (
          <div key={item.title} className="card">
            <div className="card__title">{item.title}</div>
            <div className="card__subtitle">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="section-title">Experience pillars</div>
      <div className="grid grid--3">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <div className="card__title">{feature.title}</div>
            <div className="card__subtitle">{feature.subtitle}</div>
            <ul className="list">
              {feature.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section-title">Booking + review flow</div>
      <div className="timeline">
        {flows.map((step) => (
          <div key={step} className="timeline__step">
            {step}
          </div>
        ))}
      </div>

      <div className="section-title">Architecture in brief</div>
      <div className="grid grid--3">
        {architecture.map((item) => (
          <div key={item} className="card">
            <div className="card__subtitle">{item}</div>
          </div>
        ))}
      </div>

      <div className="section-title">SLAs and observability</div>
      <div className="grid grid--3">
        {metrics.map((metric) => (
          <div key={metric.label} className="card">
            <div className="card__title">{metric.value}</div>
            <div className="card__subtitle">{metric.label}</div>
            <div className="card__subtitle">{metric.detail}</div>
          </div>
        ))}
      </div>

      <div className="section-title">Roadmap</div>
      <div className="grid grid--3">
        {roadmap.map((stage) => (
          <div key={stage.phase} className="card">
            <div className="card__title">{stage.phase}</div>
            <ul className="list">
              {stage.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section-title">Data model and security highlights</div>
      <div className="grid grid--3">
        <div className="card">
          <div className="card__title">Core entities</div>
          <div className="list">
            <div>Users, Shops, Barbers, Services</div>
            <div>Bookings with unique (barber, date, time)</div>
            <div>Reviews one-per-completed-booking</div>
            <div>Barber availability overrides</div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Protections</div>
          <div className="list">
            <div>RLS: customers and barbers see only their data</div>
            <div>Rate limiting: 100 req/min per user</div>
            <div>Idempotency keys on payments + bookings</div>
            <div>Input validation with schema guards</div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Caching + perf</div>
          <div className="list">
            <div>Redis for sessions, slots, barber cards</div>
            <div>ETag + CDN for static assets</div>
            <div>Read replicas for analytics queries</div>
            <div>Partitioned bookings table by month</div>
          </div>
        </div>
      </div>

      <div className="section-title">Sample KPI dashboard tiles</div>
      <table className="table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Target</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Average rating</td>
            <td>{'> 4.0/5'}</td>
            <td>Quality</td>
          </tr>
          <tr>
            <td>Repeat booking rate</td>
            <td>30%+</td>
            <td>Growth</td>
          </tr>
          <tr>
            <td>Payment success</td>
            <td>95%+</td>
            <td>Ops</td>
          </tr>
          <tr>
            <td>Cancellation rate</td>
            <td>{'< 5%'}</td>
            <td>Support</td>
          </tr>
        </tbody>
      </table>

      <div className="footer">
        Built to launch fast: Dockerized microservices, API gateway, Supabase Auth, Razorpay, Redis, ClickHouse, and
        queue-backed workers. Extend with AI recommendations, loyalty, and salon CRM without rework.
      </div>
    </div>
  );
}
