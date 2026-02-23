import './DashboardLayout.scss';
import MapView from '../components/map/MapView';
import NotificationPanel from '../components/notifications/NotificationPanel';
import FiltersPanel from '../components/filters/FiltersPanel';

function DashboardLayout() {
  return (
    <div className="dashboard">

      <div className="panel panel--left">
        <div className="panel__body">
          <NotificationPanel />
        </div>
      </div>

      <div className="panel panel--center">
        <div className="panel__body panel__body--map">
          <MapView />
        </div>
      </div>

      <div className="panel panel--right">
        <div className="panel__body">
          <FiltersPanel />
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;