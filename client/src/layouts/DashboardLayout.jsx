import './DashboardLayout.scss';
import MapView from '../components/map/MapView';

function DashboardLayout() {
  return (
    <div className="dashboard">

      <div className="panel panel--left">
        <div className="panel__body" />
      </div>

      <div className="panel panel--center">
        <div className="panel__body">
          <MapView />
        </div>
      </div>

      <div className="panel panel--right">
        <div className="panel__body" />
      </div>

    </div>
  );
}

export default DashboardLayout;