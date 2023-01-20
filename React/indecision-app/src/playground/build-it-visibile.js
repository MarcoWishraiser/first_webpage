let visibility = false;


const makeItVisibile = () => {
    visibility = !visibility;
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={makeItVisibile}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>Hey some details you can see now!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();