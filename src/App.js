import { Component } from "react";

import HomeCompoundCompo from './components/compount-component/HomeCompoundCompo';
import './App.scss';

class App extends Component {
	state = {
		title: 'hello world!!'
	}

	render() {
		return (
			<>
				<HomeCompoundCompo />
			</>
		)
	}
}

export default App;

