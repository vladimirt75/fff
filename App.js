// class app extends React.Component {
// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
// targetUrl = 'f0436716.xsph.ru/api/auth.php'
// fetch(proxyUrl + targetUrl, {
// body: JSON.stringify({action: 'auth', phone_user: '79537615033 '}),
// React Native Fetch – To make HTTP API call in React Native
// https://aboutreact.com/react-native-http-networking/

// import React in our code
import React, { Component }  from 'react';
console.reportErrorsAsExceptions = false;
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';

const App = () => {




  const getDataUsingPost = () => {
    //POST json
    var dataToSend = {action:'verif_sms', phone_user: '79537615033', sms: '59399', ver_product:'v1.00'};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    //fetch('http://f0436716.xsph.ru/api/verif_sms.php', {


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://f0436716.xsph.ru/api/verif_sms.php'
    fetch(proxyUrl + targetUrl, {

      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const handlePress = () => false
  return (
    
    <Button 
   // style={styles.buttonStyle}
    onPress = {handlePress}
    title = "Red button!"
    color = "darkgreen"
 />




  );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#0a401e',
    padding: 10,
    marginVertical: 10,
  },
});

 export default App;
