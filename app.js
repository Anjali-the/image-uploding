
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,Text ,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    else {
         alert('You did not select any image.');
       }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center',marginTop:10, justifyContent: 'center',backgroundColor:'aqua',borderRadius:90,borderColor:'navy',borderWidth:4,}}>
      <Text style={{fontSize:20,paddingLeft:21,margin:100,backgroundColor:'pink',borderRadius:30,height:31,width:160}}>File expload : </Text>
      <Button title="Upload image"onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
  const style = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius:30,
        justifyContent: 'center',
      },
    });
