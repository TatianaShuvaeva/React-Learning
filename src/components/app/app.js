import AppInfo from '../app-info/app-info';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employes-add-form';

import './app.css';

function App() {

    const data = [
        { name: 'John S.', salary: 5800, increase: false },
        { name: 'Sam K.', salary: 3600, increase: true },
        { name: 'Anne H.', salary: 3600, increase: false },

    ];
    return (
        <div className="app">

            <AppInfo />

            <div className="search-panel">
                <SeachPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;