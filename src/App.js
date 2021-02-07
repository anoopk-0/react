import { Component } from "react";


class App extends Component {
	state = {
		title: 'hello world!!'
	}

	render() {
		return <h1>{this.state.title}</h1>
	}
}

export default App;