import React, { Component } from 'react';
import {
    StatusBar,
    Alert,
    Platform,
    ActivityIndicator
} from 'react-native';

// Native Base
import {
    Text as NBText,
    Button,
    Container,
    Form,
    Item,
    Input,
    Label,
    Header,
    Title,
    Text,
    Body
} from 'native-base';
import NativeBaseStyleProvider from "../../Components/NativeBaseStyleProvider";
import SplashScreen from "react-native-splash-screen";



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //errorCleared: false
            username: 'peter@klaven',
            password: 'cityslicka'
        };

        this.showAlert = this.showAlert.bind(this);
        this.showErrorAlert = this.showErrorAlert.bind(this);

    }

    static navigationOptions = {
        headerTitle: 'iniciar sesión',
        header: null
    };

    componentDidMount() {
        // Alert.alert(`Unique ID: ${DeviceInfo.getUniqueID()}`);

        SplashScreen.hide();
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        let { loading} = this.props;
        let {
            completed, success, error, errorMessage
        } = nextProps;

        console.tron.log(`Props: ${JSON.stringify(this.props)}`);
        console.tron.log(`Next Props: ${JSON.stringify(nextProps)}`);


        if (loading && error) {
            this.showErrorAlert(errorMessage, { clearError: true });
        } else if (loading && success) {
            this.showAlert('Login exitoso!', '', 'Ok');
        }



    }


    showErrorAlert(message) {
        Alert.alert(
            'Ocurrió un error',
            message,
            [
                {
                    text: 'Ok',
                    onPress: () => {
                        this.props.clearError();
                    }
                }
            ],
            { cancelable: false }
        );
    }

    showAlert(title, message, okText, onOkPress, onCancelPress) {
        let buttons = [
            {
                text: okText,
                onPress: onOkPress
            }
        ];

        if (onCancelPress) {
            buttons = [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                    onPress: onCancelPress
                }
            ].concat(buttons);
        }

        Alert.alert(title, message, buttons, { cancelable: false });
    }


    render() {

        return <NativeBaseStyleProvider>
            <Container style={{ flex: 1 }}>
                {this.props.loading &&  <ActivityIndicator size="large" color="#0000ff" style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}/>}
                <Form style={{flex:1, marginHorizontal: 20, flexDirection: 'column', justifyContent: 'center'}}>
                    <Item floatingLabel style={{ marginVertical: 20 }}>
                        <Label>Username</Label>
                        <Input value={this.state.username} onChangeText={v => this.setState({username: v})}/>
                    </Item>
                    <Item floatingLabel last style={{ marginVertical: 20 }}>
                        <Label>Password</Label>
                        <Input value={this.state.password} secureTextEntry={true} onChangeText={v => this.setState({password: v})}/>
                    </Item>

                    <Button full info style={{ marginVertical: 20 }} onPress={() => this.props.login(this.state.username, this.state.password)}>
                        <Text> Login </Text>
                    </Button>
                    <Button full info style={{ marginVertical: 20}}><Text> Sign Up </Text></Button>
                </Form>
            </Container>
        </NativeBaseStyleProvider>;
    }
}