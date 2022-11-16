import './App.css';
import Employee from './components/Employee.js';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState("No.1 Lolster");
  const [employees, setEmployees] = useState(
    [
      {name: "Caleb", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
      {name: "Taleb", role: "Dev", img:"https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg"},
      {name: "Aaleb", role: "Dev", img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"},
    ]
  );
  const showEmployee = true;
  return (
    <div className="App ">
      {showEmployee ? (
        <div className="App Wrapper flex flex-wrap justify-center">
          {employees.map((e) => {
            return(
            <Employee name={e.name} role={e.role} img={e.img}/>
            )
          })}
        </div>

      ) : <p>No Access</p>}
    </div>
  );
}
export default App;




