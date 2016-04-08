/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import codePush from "react-native-code-push";

class CodePushDemo extends Component {

  componentDidMount() {
    codePush.sync();
    // codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });
  }

  render() {
    return (
      <View style={styles.container}>
       <Image
       style={{width: 178, height: 243}}
       source={{uri: "http://7xiunj.com1.z0.glb.clouddn.com/caoyuan.jpg"}}/>
       <Text style = {{marginTop: 20, fontSize: 18}}>版本：1.0.0
       </Text>
       <Text style = {{marginTop: 20, fontSize: 18}}>JS 版本：0.0.1
       </Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CodePushDemo', () => CodePushDemo);
