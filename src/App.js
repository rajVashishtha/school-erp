import {Switch, Route} from 'react-router-dom'
import AdmissionPage from './pages/admissionpage/admission.page';
import AttendencePage from './pages/attendencepage/attendence.page';
import HomePage from './pages/homepage/homepage.page';
import StudentAssignmentPage from './pages/student_assignment/student_assignment.page';
import TeacherAssignmentPage from './pages/teacher_assignment/teacher_assignment.page';
import AdminPage from './pages/adminpage/adminpage.page';
import AddClassPage from './pages/add_class_page/addclasspage.page';


function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admission" component={AdmissionPage} />
        <Route exact path="/attendence" component={AttendencePage} />
        <Route exact path="/student/assignment" component={StudentAssignmentPage} /> 
        <Route exact path="/teacher/assignment" component={TeacherAssignmentPage} /> 
        <Route exact path="/admin" component={AdminPage} /> 
        <Route exact path="/admin/add_class" component={AddClassPage} /> 
      </Switch>
  );
}

export default App;
