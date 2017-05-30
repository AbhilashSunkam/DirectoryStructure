import React , {Component} from 'react';
import { Icon } from 'semantic-ui-react'

class FolderList extends Component{

	constructor(props){
		super(props);
		this.state = {
			margins : {
				'margin-0' : '0px'
			},
			current_level: 0 
		}
	}

	createFolder = (key) => {
		var folder = prompt("Enter folder name");
		if(typeof folder === 'string' && folder.length > 0) {
		  var res = parseInt(key.split("-",3)[2]);
		  var level = res+1;
		  this.state.margins['margin-'+level] = level*100;
		  console.log(this.state.margins);
		  this.setState({margins: this.state.margins, current_level: level});	
          this.props.addFolder(folder, level);
      	} 	
	}

	render() {
		return (
          <div className="container">
            <ul className="list-group text-center">
              {
                Object.keys(this.props.folders).map(function(key) {
                  var cl = parseInt(key.split("-",3)[2]) + 1;
                  var margin = cl*100+'px';
                  return <div><li className="list-group-item list-group-item-info" style={{marginLeft: margin}} onClick={()=> this.createFolder(key)}><span><Icon name='folder'/></span>{this.props.folders[key]}</li></div>
                }.bind(this))
              }
            </ul>
           </div>
        );
	}
}

export default FolderList;