import React from "react";


class TestState{

	public count: number = 0;

	public copyWith(count: number): TestState{
		let state = new TestState();
		state.count = count;
		return state;
	}

}


class TestViewModel extends GenericViewModel<TestState>{

	
	constructor(state: TestState, stateSetter: Function){
		super(state, stateSetter);
		this.increment = this.increment.bind(this);
	}



	public increment(){
		this.state.count += 1;
		this.syncState();
	}

}


export class TestComponent extends React.Component {

	public viewModel: TestViewModel;

  constructor(props) {
    super(props);
    this.state = new TestState();
	this.viewModel = new TestViewModel(this.state, this.setState.bind(this));
	this.viewModel.increment.bind(this.viewModel)
  }

  handleIncrement = () => {
	this.viewModel.increment();
  };

  render() {
	this.setState = this.setState.bind(this);
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.viewModel.increment}>Increment</button>
      </div>
    );
  }
}