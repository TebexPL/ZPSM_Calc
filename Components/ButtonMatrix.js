import React from 'react';
import {Component} from 'react';
import {View, StyleSheet} from "react-native";

import Button from './Button';



class ButtonMatrix extends Component {


	constructor(props){
		super(props);
		this.state ={
			labelArr: props.labelArr,
			callback: props.callback,
			buttonTheme: props.buttonTheme,
			style: props.style
		}

	};


	style = StyleSheet.create({
		row: {
			flex: 1,
			flexDirection: "row"
		},
		matrix: {
			flexDirection: "column"
		}
	})




	render() {
		return(
			<View style={[this.state.style, this.style.matrix, {display: this.props.hidden ? 'none' : 'flex'}]}>{
				this.state.labelArr.map((row, rowKey) => 
					<View style={this.style.row} key={rowKey}>{
						row.map((item, itemKey) => 
							<Button 
								label={item}
								callback={() => this.state.callback(item)}
								theme={this.state.buttonTheme}
								key={itemKey}

							/>
						)}
					</View>
				)}
			</View>
		)
	}

	


	
};

export default ButtonMatrix;
