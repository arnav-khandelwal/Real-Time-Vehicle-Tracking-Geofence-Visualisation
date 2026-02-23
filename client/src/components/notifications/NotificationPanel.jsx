import './NotificationPanel.scss';

const notifications = [
  {
    id: 1,
    type: 'geofence-exit',
    title: 'Geofence Boundary Crossed',
    message: 'Vehicle #3 has exited the Connaught Place zone.',
    time: '2 min ago',
  },
  {
    id: 2,
    type: 'geofence-entry',
    title: 'Arrived at Pickup Zone',
    message: 'Vehicle #1 arrived at Sector 21 pickup geofence.',
    time: '5 min ago',
  },
  {
    id: 3,
    type: 'speeding',
    title: 'Speeding Alert',
    message: 'Vehicle #4 exceeded 80 km/h on NH-48.',
    time: '8 min ago',
  },
  {
    id: 4,
    type: 'geofence-exit',
    title: 'Geofence Boundary Crossed',
    message: 'Vehicle #2 has exited the Dwarka Sector 10 zone.',
    time: '11 min ago',
  },
  {
    id: 5,
    type: 'speeding',
    title: 'Speeding Alert',
    message: 'Vehicle #5 exceeded 65 km/h in a 40 km/h zone.',
    time: '15 min ago',
  },
  {
    id: 6,
    type: 'geofence-entry',
    title: 'Arrived at Pickup Zone',
    message: 'Vehicle #2 arrived at Noida Sector 62 pickup geofence.',
    time: '18 min ago',
  },
  {
    id: 7,
    type: 'geofence-exit',
    title: 'Geofence Boundary Crossed',
    message: 'Vehicle #5 has exited the Lajpat Nagar zone.',
    time: '22 min ago',
  },
  {
    id: 8,
    type: 'speeding',
    title: 'Speeding Alert',
    message: 'Vehicle #3 exceeded 90 km/h on the Ring Road.',
    time: '30 min ago',
  },
];

const typeLabel = {
  'geofence-exit':  'EXIT',
  'geofence-entry': 'ENTRY',
  'speeding':       'SPEED',
};

function NotificationPanel() {
  return (
    <div className="notification-panel">
      <div className="notification-panel__header">NOTIFICATIONS</div>
      <ul className="notification-panel__list">
        {notifications.map((n) => (
          <li key={n.id} className={`notification-item notification-item--${n.type}`}>
            <span className="notification-item__badge">{typeLabel[n.type]}</span>
            <div className="notification-item__content">
              <p className="notification-item__title">{n.title}</p>
              <p className="notification-item__message">{n.message}</p>
              <p className="notification-item__time">{n.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationPanel;
