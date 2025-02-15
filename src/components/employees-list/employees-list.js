import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {

    const elements = data.map((item, idx) => {

        return (
                <EmployeesListItem
                    key={idx}
                    {...item}
                    onDelete={() => onDelete(idx)} />
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;