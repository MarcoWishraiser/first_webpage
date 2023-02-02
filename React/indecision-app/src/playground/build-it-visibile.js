class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey some details you can see now!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/* 
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

renderApp(); */