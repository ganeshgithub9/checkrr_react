import { BrowserRouter as Router } from 'react-router-dom';
import HomeTemplate from './components/templates/Home';
import SidebarComponent from './components/organisms/Sidebar';
import AppRoutes from './AppRoutes';

const App = () => (
  <Router>
    <HomeTemplate sideBar={<SidebarComponent />} main={<AppRoutes />} />
  </Router>
);

export default App;
