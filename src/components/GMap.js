// import React from 'react';
// import { StyleSheet, View,Text } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, UrlTile } from 'react-native-maps';
// import {
//   connect
// } from "react-redux";
// import USERS from '../reducers/userList.json'

// // import {List, ListItem} from 'react-native-elements'




// class GMap extends React.Component {


//   render() {
//      if (!this.props.books) {
//       return (
//         <View><Text>LOADING</Text></View>
//       )
//     } else {

//       return (
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           style={styles.container}
//           zoomEnabled={true}
//           initialRegion={{
//             latitude: 37.7749,
//             longitude: -122.4194,
//             latitudeDelta: 1, 
//             longitudeDelta: 1

//           }}
//           // onPress={this.handlePress.bind(this)}
//           >



//           {this.props.books.map(book => {
//             console.log(book)
//             return (
//               <MapView.Marker 

//                 style={styles.markerStyle}
//                 title = {book.firstname}
//                 description = "This is a description"
//                 key={book.profileId}
//                 coordinate = {
//                   {
//                     latitude: book.latitude,
//                     longitude: book.longitude
//                   }
//                 }
//               >



//             </MapView.Marker>
//           )
//           })}

//         </MapView>
//       )
//     z}
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%'
//   },
//   markerStyle: {
//     color: "pink"
//   }
// })



// const mapStateToProps = state => {
//   // console.log("=========================");
//   // console.log(Object.values(state.books)[0].loc[0]);
//   // console.log("=========================");



//   return {
//     auth: state.auth,
//     books: Object.values(USERS)
//   };
// };

// export default connect(mapStateToProps,null)(GMap);

// // AppRegistry.registerComponent('GMap',() => GMap);


import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
} from "react-native";

import MapView from "react-native-maps";


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class screens extends Component {
  state = {
    users: [
       
       {
         profileId: "1",
         name: "KartikParihar",
         firstname: "Kartik", 
         lastname: "Parihar",
         avatar: {uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/798/medium/Kartikeya_Parihar_2.jpg?1523987649"},
         coordinates: {
           latitude: 37.2249,
           longitude: -122.3457,
         }
       }, 
       {
         profileId: "2",
         name: "TiffanyTang",
         firstname: "Tiffany",
         lastname: "Tang",
         avatar: {uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/799/medium/Tiffany_Tang_2.jpg?1523989054"},
         coordinates: {
           latitude: 37.8462,
           longitude: -122.7924
         }
       }, 
       {
         profileId: "5",
         name: "FelixAlvarado",
         firstname: "Felix",
         lastname: "Alvarado",
         avatar: {
           uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/778/medium/Felix_Alvarado_1.jpg?1523987541"
         },
         coordinates: {
           latitude: 37.9824,
           longitude: -122.1379
         }
       },
       {
         profileId: "0",
         name: "RobinSunny",
         firstname: "Robin",
         lastname: "Sunny",
         avatar: {
           uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/790/medium/Robin_Sunny_1.jpg?1523988286"
         },
         coordinates: {
           latitude: 37.1578,
           longitude: -122.8943
         }
       },
       {
         profileId: "3",
         name: "NickHalloran",
         firstname: "Nick",
         lastname: "Halloran",
         avatar: {uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/772/medium/Nicholas_Halloran_2.jpg?1523988146"},
         coordinates: {
           latitude: 37.9244,
           longitude: -122.3479
         }
       }, 
       {
         profileId: "4",
         name: "NateCunha",
         firstname: "Nate",
         lastname: "Cunha",
         avatar: {uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/775/medium/Nathaniel_Cunna_2.jpg?1523988134"},
         coordinates: {
           latitude: 37.8249,
           longitude: -122.4502
         }
       }, 
       
       {
         profileId: "6",
         name: "KenChan",
         firstname: "Ken",
         lastname: "Chan",
         avatar: {uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/805/medium/Ken_Chan_2.jpg?1523987664"},
         coordinates: {
           latitude: 37.0385,
           longitude: -122.2397
         }
       }, 
       {
         profileId: "7",
         name: "FarahQuader",
         firstname: "Farah",
         lastname: "Quader",
         avatar: {uri: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/796/medium/Farah_Quader_1.jpg?1523987529"},
         coordinates: {
           latitude: 37.0385,
           longitude: -122.2397
         }
       }
  ],
region: {
  latitude: 37.7749,
  longitude: -122.4194,
  latitudeDelta: 3,
  longitudeDelta: 3,
},
};

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.users.length) {
        index = this.state.users.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.users[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.users.map((user, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.users.map((user, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={user.coordinates}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.users.map((user, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={user.avatar}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{user.firstname}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {user.lastname}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

