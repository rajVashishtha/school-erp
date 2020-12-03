import {Switch, Route} from 'react-router-dom'
import AdmissionPage from './pages/admissionpage/admission.page';
function App() {
  return (
      <Switch>
        <Route path="/" component={AdmissionPage} />
      </Switch>
  );
}

export default App;
