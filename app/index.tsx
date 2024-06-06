import { useRootNavigationState, Redirect } from 'expo-router';


export default function InitalRouting() {
  const rootNavigationState = useRootNavigationState();


  if (!rootNavigationState?.key) return null;


  return <Redirect href={'/(tabs)/Home'} />
}

/*export default StartPage; 
import "react-native-gesture-handler"
import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./(tabs)/Home"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { useNavigation } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Login(){
  const [phoneNumber, setPhoneNumber] = useState("")
  const [code,setCode] = useState("")
  const [confirm,setConfirm] = useState("")
  const navigation= useNavigation("")

  const signInWithPhone = async() => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
      //setConfirm(confirmation)
    } catch (error) {
      console.log("Error sending code: ", error)
    }
  }

  const confirmCode = async () => {
    try {
      //const userCredential = await confirm.confirm(code);
      //const user = userCredential.user;

      const userDocument = await firestore()
      .collection("users")
      //.doc(user.uid)
      .get

      if (userDocument.exists){
        //navigation.navigate('Home')
      } else {

      }
    } catch (error) {
      console.log("invalid code", error)
    }
  }

}*/
