import './app-filter.css';


const AppFilter = () => {
return (
    <div className="btn-group">
        <button
            className="btn btn-ligth"
            type="button">
                Alle Mitarbeiter
        </button>
        <button
            className="btn btn-outline-ligth"
            type="button">
                Zur Beförderung
        </button>
        <button
            className="btn btn-outline-ligth"
            type="button">
            Gehalt über 1000€
        </button>
    </div>
    );
}

export default AppFilter
