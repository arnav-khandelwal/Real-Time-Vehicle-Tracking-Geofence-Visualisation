import './FiltersPanel.scss';

// ─── Summary stats ────────────────────────────────────────────────────────────

const stats = [
  { label: 'Active Trips',              value: 24, type: 'active'  },
  { label: 'Delayed Trips',             value: 5,  type: 'delayed' },
  { label: 'Inside Office Geofence',    value: 8,  type: 'office'  },
  { label: 'Approaching Pickup',        value: 11, type: 'pickup'  },
];

// ─── Filter options ───────────────────────────────────────────────────────────

const regions  = ['All Regions',  'North Delhi', 'South Delhi', 'Noida', 'Gurgaon'];
const offices  = ['All Offices',  'HQ Sector 21', 'Cyber City', 'Connaught Place'];
const routes   = ['All Routes',   'Route A', 'Route B', 'Route C', 'Route D'];
const statuses = ['All Statuses', 'On Time', 'Delayed', 'Completed', 'Cancelled'];
const windows  = ['All Times',    'Last 30 min', 'Last 1 hr', 'Last 3 hrs', 'Today'];

// ─── Trip list ─────────────────────────────────────────────────────────────────

const trips = [
  { id: 'TRP-001', driver: 'Ravi Kumar',    status: 'On Time',  eta: '08:15 AM' },
  { id: 'TRP-002', driver: 'Anjali Singh',  status: 'Delayed',  eta: '08:42 AM' },
  { id: 'TRP-003', driver: 'Suresh Mehra',  status: 'On Time',  eta: '08:20 AM' },
  { id: 'TRP-004', driver: 'Priya Nair',    status: 'Delayed',  eta: '09:05 AM' },
  { id: 'TRP-005', driver: 'Deepak Yadav',  status: 'On Time',  eta: '08:30 AM' },
  { id: 'TRP-006', driver: 'Neha Sharma',   status: 'On Time',  eta: '08:10 AM' },
  { id: 'TRP-007', driver: 'Amit Tiwari',   status: 'Delayed',  eta: '09:15 AM' },
];

function FiltersPanel() {
  return (
    <div className="filters-panel">

      <div className="filters-panel__header">FILTERS &amp; UPDATES</div>

      {/* ── Trip Summary ─────────────────────────────────────────── */}
      <section className="filters-panel__section">
        <p className="filters-panel__section-title">Trip Summary</p>
        <div className="stat-grid">
          {stats.map((s) => (
            <div key={s.label} className={`stat-card stat-card--${s.type}`}>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────────── */}
      <section className="filters-panel__section">
        <p className="filters-panel__section-title">Filter Trips</p>
        <div className="filter-group">

          <label className="filter-group__label">Region</label>
          <select className="filter-group__select">
            {regions.map((r) => <option key={r}>{r}</option>)}
          </select>

          <label className="filter-group__label">Office</label>
          <select className="filter-group__select">
            {offices.map((o) => <option key={o}>{o}</option>)}
          </select>

          <label className="filter-group__label">Route</label>
          <select className="filter-group__select">
            {routes.map((r) => <option key={r}>{r}</option>)}
          </select>

          <label className="filter-group__label">Status</label>
          <select className="filter-group__select">
            {statuses.map((s) => <option key={s}>{s}</option>)}
          </select>

          <label className="filter-group__label">Time Window</label>
          <select className="filter-group__select">
            {windows.map((w) => <option key={w}>{w}</option>)}
          </select>

        </div>
      </section>

      {/* ── Trip List ────────────────────────────────────────────── */}
      <section className="filters-panel__section filters-panel__section--list">
        <p className="filters-panel__section-title">Trips ({trips.length})</p>
        <ul className="trip-list">
          {trips.map((t) => (
            <li key={t.id} className={`trip-item trip-item--${t.status === 'Delayed' ? 'delayed' : 'ontime'}`}>
              <div className="trip-item__row">
                <span className="trip-item__id">{t.id}</span>
                <span className={`trip-item__status trip-item__status--${t.status === 'Delayed' ? 'delayed' : 'ontime'}`}>
                  {t.status}
                </span>
              </div>
              <div className="trip-item__row">
                <span className="trip-item__driver">{t.driver}</span>
                <span className="trip-item__eta">ETA {t.eta}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}

export default FiltersPanel;
