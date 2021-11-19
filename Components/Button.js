import React from 'react';
import {Component} from 'react';
import { 
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';


class Button extends Component {

	constructor(props){
		super(props);
		this.state = {
			label: props.label,
			callback: props.callback,
			theme: props.theme
		}
	}
	
	style = StyleSheet.create({
				regular: {
					flex: 1,
					borderWidth: 1,
					borderColor: '#484848',
					backgroundColor: '#585858',
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row"
				},
				alternative:{
					flex: 1,
					borderWidth: 1,
					borderColor: '#484848',
					backgroundColor: '#428df5',
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row"
				},
				text: {
					color: 'white',
					fontSize: 40,
				}
				
	});
			
	render() {

		return (
			<TouchableOpacity 
					style={this.state.theme=="regular" ? this.style.regular : this.style.alternative }
					onPress={() => (this.state.callback(this.state.label))}
			>
				<Text style={this.style.text}>
					{this.state.label}
				</Text>
			</TouchableOpacity>
		);

	

	}


	
};

export default Button;
