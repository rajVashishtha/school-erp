import {Switch, Route} from 'react-router-dom'
import AdmissionPage from './pages/admissionpage/admission.page';
import AttendencePage from './pages/attendencepage/attendence.page';
function App() {
  return (
      <Switch>
        <Route exact path="/" component={AdmissionPage} />
        <Route exact path="/attendence" component={AttendencePage} />
      </Switch>
  );
}

export default App;
