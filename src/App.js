import { Component } from "react";
import AppPortal from './components/portal/AppPortal';

class App extends Component {
	state = {
		title: 'hello world!!'
	}

	render() {
		return (
			<>
				<AppPortal />
			</>
		)
	}
}

export default App;

