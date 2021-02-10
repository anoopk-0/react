import { Component } from "react";

import AppLifeCycle from './components/life-cycle/AppLifeCycle';


class App extends Component {
	state = {
		title: 'hello world!!'
	}

	render() {
		return (
			<>
				<AppLifeCycle />
			</>
		)
	}
}

export default App;