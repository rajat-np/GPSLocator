import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import image from './images/flag-pink.png';

export default class App extends PureComponent {  
  constructor(props){
    super(props)
    this.state = {
      coordinates :{
          longitude: 74.954000,
          latitude: 32.940000
      }
    }
  }

  async function getLocation = () => {
  	let latsRequest = await getIndividualField('lats');
  	let longsRequest = await getIndividualField('longs');
	let latsBody = latsRequest._bodyText.toString().split('"');
  	let longsBody = = longsRequest._bodyText.toString().split('"');
  	let lats = latsBody[latsBody.indexOf('field1')+2];
  	let longs = longsBody[longsBody.indexOf('field2'+2)];
  	console.log(lats, longs)
  	this.setState({
          coordinates :{
            longitude: Number(longs),
            latitude: Number(lats)
      }
    })

}
  getIndividualField = (field) => {
  	if (field === 'lats'){
  		return fetch('https://thingspeak.com/channels/407273/field/1/last.json');
  	}
  	else {
  		return fetch('https://thingspeak.com/channels/407273/field/2/last.json');
  	}
}

  render() {
    return (
        <View>
              <View style = {styles.mapContainer}>
                    <MapView
                      initialRegion={{
                        longitude: 74.95400,
                        latitude: 32.940000,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021,
                      }}
                      style={styles.map}>
                    <MapView.Marker key = {''} image={image} coordinate={this.state.coordinates}/>
                    </MapView>
                </View>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this.getLocation}
                    >
                    <Text style = {styles.buttontext}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:2
  },
   mapContainer: {
    width: "100%",
    height: 500,
    padding:10
  },
  map: {
    width: "100%",
    height: "100%"
  },
  buttonContainer:{
    marginTop: 5,
    paddingHorizontal : 50
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
    },
  buttontext:{
    fontWeight: 'bold',
    color:'black'
  }  
})