import React, { Component } from 'react';
import { 
 ListView,
 Text,
 View,
 Image,
 TextInput,
} from 'react-native';

export default class ListViewBasics extends Component {
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
		  	<View>
		  		<Text>Hello this is a p tag</Text>
		  		<Image
		  			style={{width: 50, height: 50}}
		  			source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
		  		/>
		  		<Image
		  			style={{width: 50, height: 50}}
		  			source={require('../localImage.png')}
		  		/>
		  		<TextInput
					placeholder="Type here to translate!"
				/>
		    	<ListView
			      dataSource={this.state.dataSource}
			      renderRow={(rowData) => <Text>{rowData}</Text>}
			    />
		  	</View>
		);
	}
}