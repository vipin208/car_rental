import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
const Map = () => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const zirakpur={
    latitude: 30.6425,
    longitude: 76.8173,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }
  const mapRef = useRef<any>(null);
  const goToZirakpur = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(zirakpur, 3 * 1000);
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
       ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={region}
        onRegionChangeComplete={(region) => console.log("")
        }
      >
        <Marker coordinate={region} />
      </MapView>
      <Pressable style={styles.button} onPress={()=>goToZirakpur()}>
       <Text style={{textAlign:'center'}}>Zirakpur</Text>
      </Pressable>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
  color: "#fff",   
  },
  button:{
    position:'absolute',
    width:'90%',
    backgroundColor:'white',
    justifyContent:'center',
    alignSelf:'center',
    padding:20,
    borderRadius:20,
    bottom:100
  }
})