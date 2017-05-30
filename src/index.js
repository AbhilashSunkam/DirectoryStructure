import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { List, Button } from 'semantic-ui-react';
import FolderList from './components/FolderList';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			folders: {
				'folder-1-0': 'src'
				
			}
		}
	}

	addFolder = (folder, level) => {
		var timestamp = (new Date()).getTime();
		this.state.folders['folder-'+timestamp+'-'+level] = folder;
		console.log(this.state.folders);
		this.setState({folders: this.state.folders});
	}


	render(){
		return (
			<div>
			<FolderList folders={this.state.folders} addFolder={this.addFolder}/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));
