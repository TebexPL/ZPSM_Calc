import React from 'react';
import {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

import ButtonMatrix from "./ButtonMatrix";

import SplashScreen from 'react-native-splash-screen';

const math = require("mathjs");

class App extends Component {

	componentDidMount(){
		SplashScreen.hide();
	}

	constructor(props){
		super(props);
		this.state = {
			isLandscape: this.checkLandscape(),
			mainString: ''
		}
		Dimensions.addEventListener("change", () => {
			this.setState({isLandscape: this.checkLandscape()});
		})
		this.parseInput = this.parseInput.bind(this)
		
	}

	checkLandscape = function() {
	  const dim = Dimensions.get("screen")
	  return dim.height >= dim.width
	}

	parseInput = function(value){

		if(isNaN(value)){
			switch(value){	 
			 
				 case 'C':
					this.setState({
						mainString: ''
					})
				 break;		 
				 case '=':
					try{
						let result = math.evaluate(this.state.mainString);
						if(!isNaN(result) && result != Infinity)
							this.setState({mainString: math.round(result, 4).toString()});
						else 
							this.setState({mainString: 'Error'});
					}
					catch(error){
						this.setState({mainString: 'Error'});
					}
  
				 break;
				 case '-':
				 case '+':
				 case '.':
					this.setState({
						mainString: this.state.mainString+value
					})
				 break;
				 case '÷':
					this.setState({
						mainString: this.state.mainString+'/'
					})
				 break;
				 case 'x':
					this.setState({
						mainString: this.state.mainString+'*'
					})
				 break;
				case '√': 
					this.setState({
						mainString: 'sqrt('+this.state.mainString+')'
					})
				break;
				case 'x!': 
					this.setState({
						mainString: '('+this.state.mainString+')!'
					})
				break;
				case 'eˣ': 
					this.setState({
						mainString: 'e^('+this.state.mainString+')'
					})
				break;
				case '10ˣ': 
					this.setState({
						mainString: '10^('+this.state.mainString+')'
					})
				break;
				case 'ln': 
					this.setState({
						mainString: 'ln('+this.state.mainString+')'
					})
				break;
				case 'log₁₀': 
					this.setState({
						mainString: 'log10('+this.state.mainString+')'
					})
				break;
				case 'e': 
					this.setState({
						mainString: this.state.mainString+'e'
					})
				break;
				case 'x²': 
					this.setState({
						mainString: '('+this.state.mainString+')^2'
					})
				break;
				case 'π': 
					this.setState({
						mainString: this.state.mainString+math.round(math.pi, 4)
					})
				break; 
				case 'x³': 
					this.setState({
						mainString: '('+this.state.mainString+')^3'
					})
				break;


				
			}
		}
		else
			this.setState({
				mainString: this.state.mainString+value
			})


	}

	numberPad = [
		['7','8','9'],
		['4','5','6'],
		['1','2','3'],
		['0','.','=']
	]

	simpleOps = [
		['C'],
		['÷'],
		['x'],
		['-'],
		['+']
	]

	advancedOps = [
		['√' , 'x!'   ],
		['eˣ', '10ˣ'  ],
		['ln', 'log₁₀'],
		['e' , 'x²'   ],
		['π' , 'x³'   ]
	]


	style = StyleSheet.create({
		main: {
			flex: 1,
			backgroundColor: '#484848',
		},
		resultDisplay: {
			flex: 1,	
			alignItems: "center",
			flexDirection: "row",
			justifyContent: "flex-end"
		},
		resultText: {
			fontSize: 60,
			color: "white"
		},
		buttonContainer: {
			flex: 2,
			flexDirection: "row"
		},
		numberPad: {
			flex: 3,
		},
		simpleOps: {
			flex: 1,
			borderLeftWidth: 1,
			borderLeftColor: 'lightgrey',
			paddingLeft: "0.5%",
			marginLeft: "0.5%"
		},		
		advancedOps: {
			flex: 2,
		},
		
	
		
	})
	

	render(){


		return (
			<View style={this.style.main}>

				<View style={this.style.resultDisplay}>
					<Text style={this.style.resultText}>
						{this.state.mainString}
					</Text>
				</View>
				<View style={[this.style.buttonContainer, {flex: this.state.isLandscape ? 3 : 2}]}>
						<ButtonMatrix 
							callback={this.parseInput} 
							labelArr={this.numberPad} 
							buttonTheme="regular" 
							style={this.style.numberPad}
							hidden={false}/>
						<ButtonMatrix 
							callback={this.parseInput}
							labelArr={this.simpleOps} 
							buttonTheme="alternative" 
							style={this.style.simpleOps} 
							hidden={false}/>
						<ButtonMatrix 
							callback={this.parseInput} 
							labelArr={this.advancedOps} 
							buttonTheme="alternative" 
							style={this.style.advancedOps}
							hidden={this.state.isLandscape}
						/>
				</View>
			</View>
		);

		
	}

	
};

export default App;
