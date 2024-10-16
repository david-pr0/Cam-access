import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [img, setImg] = useState("https://via.placeholder.com/100x100")

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4,4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    })
    if (!result.canceled) {
      setImg(result.assets[0].uri)
    }
  }

  const handlePhotoPicker = async () => {
    const photo = await ImagePicker.launchCameraAsync({
      aspect: [4,4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    })
    if (!photo.canceled) {
      setImg(photo.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: img}}
      style={{width: 100, height: 100, borderRadius: 99}}/>
      <TouchableOpacity onPress={handleImagePicker} style={{marginTop: 20}}>
        <Text>Escolha a imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePhotoPicker} style={{marginTop: 20}}>
        <Text>Tirar foto</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
