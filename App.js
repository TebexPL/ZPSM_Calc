import React from 'react';
import {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const math = require("mathjs");


class App extends Component{


	constructor(props){
		super(props);
		this.state = {
			result: '',
			landscape: false,
		}
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
			if (width<height) 
				this.setState({landscape: false});
 		 	else 
				this.setState({landscape: true});
    });
	}

	

	render() {

		const addToResult = (str) => {
			if(this.state.result == "Error")
				this.setState({result: str});
			else
				this.setState({
					result: this.state.result+str
				});
		}

		const calculate = () => {
			try{
				let value = math.evaluate(this.state.result);
				if(!isNaN(value))
					this.setState({result: value});
				else
					this.setState({result: 'Error'});
			}
			catch(error){
				this.setState({result: 'Error'});
			}

			
		}
		

		const styles = StyleSheet.create({
		 	container: {
		 		flex: 1,
		 		flexDirection: 'column',
				backgroundColor: '#484848',
		 	},
		 	buttonContainer: {
		 		flex: 4,
		 		flexDirection: 'row'
		 	},
			button: {
				flex: 1,
				borderWidth: 1,
				borderColor: '#484848',
				backgroundColor: '#585858',
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row"
				
			},
			textBox: {
				flex: 2,
				justifyContent: "center",
				alignItems: "flex-end"
			},
			resultText:{
				color: 'white',
				fontSize: 50,
			},
			rowContainer: {
				flex: 2,
				flexDirection: "row",
		 		backgroudColor: 'black',
			},
			buttonText: {
				color: 'white',
				fontSize: 40,
			},
			leftPanel: {
				flex: 3,
				flexDirection: 'column',
			},
			rightPanel: {
				flex: 1,
				flexDirection: 'column',
				borderLeftWidth:1,
				borderLeftColor: 'lightgrey',
				paddingLeft: "0.5%",
				marginLeft: "0.5%"
				
			},
			buttonAlt:{
				backgroundColor: '#428df5'
			},
			landscapePanel: {
				flex: 2,
				flexDirection: 'column'
			}
		 	
		 });

		
		return (
			<View style = {styles.container}>
				<View style= {styles.textBox}>
					<Text style={styles.resultText}>
						{this.state.result}
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<View style= {styles.leftPanel}>
						<View style= {styles.rowContainer}>
							<TouchableOpacity 
								style = {styles.button}
								onPress={() => addToResult('7')}>
								<Text style={styles.buttonText}>
									7
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('8')}>
								<Text style={styles.buttonText}>
									8
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('9')}>
								<Text style={styles.buttonText}>
									9
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('4')}>
								<Text style={styles.buttonText}>
									4
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('5')}>
								<Text style={styles.buttonText}>
									5
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('6')}>
								<Text style={styles.buttonText}>
									6
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('1')}>
								<Text style={styles.buttonText}>
									1
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('2')}>
								<Text style={styles.buttonText}>
								  2
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('3')}>
								<Text style={styles.buttonText}>
								  3 
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('0')}>
								<Text style={styles.buttonText}>
									0
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={() => addToResult('.')}>
								<Text style={styles.buttonText}>
									.
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {styles.button}
								onPress={calculate}>
								<Text style={styles.buttonText}>
									=
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.rightPanel}>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: ''})}>
								<Text style={styles.buttonText}>
									C
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style =  {[styles.button, styles.buttonAlt]}
								onPress={() => addToResult('/')}>
								<Text style={styles.buttonText}>
									÷
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style =  {[styles.button, styles.buttonAlt]}
								onPress={() => addToResult('*')}>
								<Text style={styles.buttonText}>
									x
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style =  {[styles.button, styles.buttonAlt]}
								onPress={() => addToResult('-')}>
								<Text style={styles.buttonText}>
									-
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style =  {[styles.button, styles.buttonAlt]}
								onPress={() => addToResult('+')}>
								<Text style={styles.buttonText}>
									+
								</Text>
							</TouchableOpacity>
					</View>
					<View style={[styles.landscapePanel, {display: this.state.landscape ? 'flex' : 'none'}]}>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: 'sqrt('+this.state.result+')'})}>
								<Text style={styles.buttonText}>
								  √
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: '('+this.state.result+')!'})}>
								<Text style={styles.buttonText}>
									x!
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: 'exp('+this.state.result+')'})}>
								<Text style={styles.buttonText}>
									e
								</Text>
								<Text style={{fontSize: 20, lineHeight: 18, color: 'white'}}>
								x
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: 'pow(10,'+this.state.result+')'})}>
								<Text style={{fontSize: 30, lineHeight: 60, color: 'white'}}>
									10
								</Text>
								<Text style={{fontSize: 20, lineHeight: 15, color: 'white'}}>
									x
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: 'log('+this.state.result+')'})}>
								<Text style={styles.buttonText}>
									ln
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: 'log10('+this.state.result+')'})}>
								<Text style={{fontSize: 30, lineHeight: 30, color: 'white'}}>
									log
								</Text>
								<Text style={{fontSize: 20, lineHeight: 70, color: 'white'}}>
									10
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => addToResult(math.e)}>
								<Text style={styles.buttonText}>
									e
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: '('+this.state.result+')^2'})}>
								<Text style={{fontSize: 30, lineHeight: 60, color: 'white'}}>
									x
								</Text>
								<Text style={{fontSize: 20, lineHeight: 20, color: 'white'}}>
									2
								</Text>
							</TouchableOpacity>
						</View>
						<View style= {styles.rowContainer}>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}	
								onPress={() => addToResult(math.pi)}>
								<Text style={styles.buttonText}>
									π
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {[styles.button, styles.buttonAlt]}
								onPress={() => this.setState({result: '('+this.state.result+')^3'})}>
								<Text style={{fontSize: 30, lineHeight: 60, color: 'white'}}>
									x
								</Text>
								<Text style={{fontSize: 20, lineHeight: 20, color: 'white'}}>
									3
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);

	}

};



export default App;
