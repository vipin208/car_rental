import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Menu, Profile } from '../../assests'
import { SearchSvg } from '../../assests'
import * as Animatable from 'react-native-animatable';
import { useFetchCarsApiQuery } from '../../redux/query/CarsQuery';
import { shadow } from '../../common/shadow';

const Home = () => {
  const arrTypes = ["All", "Jeep", "Audi", "Bently", "Jaguar", "Volvo", "Toyota"]
  const [selType, setSelType] = useState<string>("All")
  const [arrdata, setData] = useState<any[]>();
  const { data: products = [], isSuccess }: any = useFetchCarsApiQuery("");
  const onPressType=async(item:any)=>{
    setSelType(item)
  }
  const carTypeList = () => {
    return (
      <>
        {arrTypes.map((item: any, index) => {
          return (
            <Text  suppressHighlighting={true} onPress={()=>onPressType(item) } key={index} style={{ fontSize: 18, fontWeight: '600', marginLeft: index === 0 ? 5 : 25, color:selType===item?"black":"gray" }}>{item}</Text>
          )
        })}
      </>
    )
  }
  const cardView = (item:any) => {
    return (
      <View key={item.id} style={[styles.carView]} >
        <View>
          <Text style={styles.carInfo_text}>{item.name}</Text>
          <Text style={styles.carInfo_text}>{item.modal}</Text>
          <Text style={styles.carInfo_text}>{item.brand}</Text>
          <Text style={styles.carInfo_text}>$ {item.price}</Text>
        </View>
        <Image style={{ height: 100, width: 100, borderRadius: 10 }} source={{ uri: item.avatar }} />
      </View>
    )
  }
  useEffect(() => {
    if (!isSuccess) return;
    const filteredData = products.filter(item =>{
        if(selType==='All'){
      return item
    }else {
      return item.brand===selType
    }}
    );
    setData(filteredData);
  }, [products, isSuccess, selType]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Menu width={30} height={30} />
        <Profile width={30} height={30} />
      </View>
      <Text style={styles.rent_txt}>Rent a Car</Text>
      <View style={styles.search}>
        <TextInput
          style={styles.txtInput}
          placeholder='SearchBar'
        />
        <SearchSvg height={30} width={30} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ flexDirection: 'row' }}>
          {carTypeList()}
        </ScrollView>
      </View>
      <Text style={styles.most_txt}>Most Rented</Text>
      < FlatList
        data={arrdata}
        keyExtractor={item => item.id.toString()}
        renderItem={(({ item }: any) => cardView(item))}
        ListFooterComponent={()=><View style={{height:60}}/>}
      />

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 20
  },
  rent_txt: {
    fontSize: 35,
    fontWeight: '700',
    marginTop: 30
  },
  search: {
    width: '90%',
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'black',
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: '#FFFF'
  },
  txtInput: {
    width: "82%",
    height: 25,
  },
  most_txt: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    marginTop: 20
  },

  carView: {
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10
  },
  carInfo_text: {
    marginTop: 5
  }

})