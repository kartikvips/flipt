import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class GMap extends React.Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        zoomEnabled={true}
        initialRegion={{
          latitude: 25.017609,
          longitude: 121.42668,
          latitudeDelta: .1,
          longitudeDelta: .1
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})

// AppRegistry.registerComponent('GMap',() => GMap);
export default GMap;