import { Routes, Route } from 'react-router-dom';
import HomeTemplate from './components/templates/Home';
import Home from './components/pages/Home';
import AdverseActions from './components/pages/AdverseActions';
import Logs from './components/pages/Logs';
import Analytics from './components/pages/Analytics';
import Account from './components/pages/Account';
import Screenings from './components/pages/Screenings';
import CandidateInfoPage from './components/pages/CandidateInfo';
import CandidatesPage from './components/pages/Candidates';
import PreAdverseActionNoticePage from './components/pages/PreAdverseActionNotice';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route path="" element={<Home />} />
        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="adverse-actions" element={<AdverseActions />} />
        <Route path="logs" element={<Logs />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="account" element={<Account />} />
        <Route path="screenings" element={<Screenings />} />
        <Route
          path="candidates/:candId/pre-adverse-action"
          element={<PreAdverseActionNoticePage />}
        />
        <Route path="candidates/:id" element={<CandidateInfoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
