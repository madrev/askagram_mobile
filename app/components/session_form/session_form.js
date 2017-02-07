
import React from 'react';
import { Text,
        TextInput,
        View,
        KeyboardAvoidingView,
        TouchableHighlight } from 'react-native';
import * as Styles from '../../assets/stylesheets';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDemoButton = this.handleDemoButton.bind(this);
  }

  //
  // componentWillReceiveProps(newProps) {
  //   if(this.props.errors) this.props.clearErrors();
  // }

  // componentDidUpdate() {
  //   this.redirect();
  // }

  handleSubmit() {
    const user = Object.assign({}, this.state);
    this.props.processForm({ user }).then( () => this.redirect());
  }

  redirect() {
    this.props.navigator.push({title: "Question Index", index: 1});
  }

  handleDemoButton() {
    this.props.demoLogin().then( () => this.redirect() );
  }

  handleChange(field) {
    return (text) => {
      this.setState( { [field]: text});
    };
  }

  errorList() {
    console.log(this.props.errors);
  return this.props.errors.map( (err, idx) =>  <Text key={idx}>{err}</Text>);
  }

  // linkAway() {
  //   if(this.props.formType === 'signup') {
  //     return <Link to="/login">Been here before?  Log in.</Link>;
  //   } else {
  //     return <Link to="/signup">New here? Sign up.</Link>;
  //   }
  // }

  // redirect() {
  //   if(this.props.loggedIn) this.props.router.push("/questions");
  // }

  render(){
    return <View className="session-form"
                  style={Styles.sessionForm.container}>
      { this.props.currentUser && <Text>Welcome, {this.props.currentUser.username}</Text>}
      <Text>Log in</Text>
      {this.props.errors && this.errorList() }
      <TextInput type="text"
                 placeholder="Username"
                 style={Styles.global.textInput}
                 onChangeText={this.handleChange("username")}
                 value= {this.state.username}/>
      <TextInput type="password"
                 placeholder="Password"
                 style={Styles.global.textInput}
                 secureTextEntry={true}
                 onChangeText={this.handleChange("password")}
                 value= {this.state.password}/>
     <View style={Styles.global.flexRow}>
        <TouchableHighlight onPress={this.handleSubmit}
                           style={Styles.global.button}>
          <Text>Submit</Text>
        </TouchableHighlight>
       <TouchableHighlight onPress={this.handleDemoButton}
                           style={Styles.global.button}>
          <Text>Demo Login</Text>
        </TouchableHighlight>
    </View>
    </View>;
  }

}

export default SessionForm;
