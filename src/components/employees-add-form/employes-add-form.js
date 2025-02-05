import './employees-add-form.css';


const EmployeesAddForm = () => {
    return (

        <div className="app-add-form">
            <h3>Einen Neuen Mitarbeiter hinzufügen</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Wie heißt er?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Gehalt in €?" />

                <button type="submit"
                    className="btn btn-outline-light">Hinzufügen</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;