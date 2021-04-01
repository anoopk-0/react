import { Component } from "react";

import './App.scss';
import AppAccessDOM from './components/access-dom /AppAccessDOM';
import AppHOC from './components/advance/hoc/AppHOC';
import AppRenderProps from './components/advance/render-props/AppRenderProps';
import AppCodeSpliting from './components/code-spliting/AppCodeSpliting';
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

