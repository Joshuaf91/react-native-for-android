import React, { Component } from 'react';

class ListViewBasics extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			text: "",
	  		dataSource: ds.cloneWithRows([
		    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Joshua'
			])
		};
	}
	render() {
		return (
		  <View style={{flex: 1, paddingTop: 22}}>
		    <ListView
		      dataSource={this.state.dataSource}
		      renderRow={(rowData) => <Text>{rowData}</Text>}
		    />
		  </View>
		);
	}
}