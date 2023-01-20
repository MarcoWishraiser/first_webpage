class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of the computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should i do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Option component here
      </div>
    );
  }
}

class AddOptionComponent extends React.Component {
  render() {
    return (
      <div>
        AddOptionComponent here
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOptionComponent />
  </div>
)

ReactDOM.render(jsx, document.getElementById("app"));