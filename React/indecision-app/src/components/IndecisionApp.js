import React from "react";
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
  
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // Do nothing at all
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  
    componentWillUnmount() {
      console.log('Component will unmount');
    }
  
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({ 
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
  
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exist';
      }
  
      this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }
  
    render() {
      const subtitle = 'Put your life in the hands of the computer';
  
      return (
        <div>
          <Header subtitle={subtitle}/>
          <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption}/>
        </div>
      );
    }
}