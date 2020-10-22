import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (

    <View style={styles.container}>
      <View><Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Vertical Progress Bar</Text></View>  
      <View style={[styles.directionColumn, styles.paddingLeftRight, styles.paddingFromTop, styles.paddingFromBottom]}>
          <View style={styles.progressBarLine}>
            <View style={styles.progressBarLabel}>
              <Text style={styles.progressBarBoldText}>Step 1</Text>
              <Text style={styles.progressSmallText}>Step 1 description</Text>
            </View>
            <TouchableOpacity style={styles.progressBarStepCircle} />
            <View style={[styles.progressBar, styles.progressBarLine]}></View>
          </View>
          <View style={styles.progressBarLine}>					
            <View style={styles.progressBarLabel}>
              <Text style={styles.progressBarBoldText}>Step 2</Text>
              <Text style={styles.progressSmallText}>Step 2 description</Text>
            </View>
            <TouchableOpacity style={styles.progressBarStepCircle} />
            <View style={[styles.progressBar, styles.progressBarLine]}></View>
          </View>
          <View style={styles.progressBarLine}>
            <View style={styles.progressBarLabel}>
              <Text style={styles.progressBarBoldText}>Step 3</Text>
              <Text style={styles.progressSmallText}>Step 3 description</Text>
            </View>
            <TouchableOpacity style={[styles.progressBarStepCircle, {backgroundColor: 'black'}]} />  {/* For showing active */}
            <View style={[styles.progressBar, styles.progressBarLine]}></View>
          </View>
          <View>
            <View style={styles.progressBarLabel}>
              <Text style={styles.progressBarBoldText}>Step 4</Text>
              <Text style={styles.progressSmallText}>Step 4 description</Text>
            </View>
            <TouchableOpacity style={styles.progressBarStepCircle} />
            <View style={[styles.progressBar, styles.progressBarLine]}></View>
          </View>
          <View>
            <View style={styles.progressBarLabel}>
              <Text style={styles.progressBarBoldText}>Step 5</Text>
              <Text style={styles.progressSmallText}>Step 5 description</Text>
            </View>
            <TouchableOpacity style={styles.progressBarStepCircle} />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	flex: 1, 
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  /* for vertical progress bar */
  paddingFromTop: {
  	paddingTop: 20
  },
  paddingFromBottom: {
  	paddingBottom: 50
  },
  paddingLeftRight: {
    paddingLeft: 15, 
    paddingRight: 15
  },
  directionColumn: {
  	flexDirection: 'column',
  },
  progressBar: {
    color: 'grey',
    borderLeftWidth: 0.8,
    left: 3
  },
  progressBarLabel: {
  	position: 'absolute', top: -8, left: 16
  },
  progressBarBoldText: {
  	fontWeight: 'bold'
  },
  progressSmallText:{
  	fontSize: 12
  },
  progressBarLine: {
  	height: Dimensions.get('window').height / 8,
  },
  progressBarStepCircle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.02,
    height: Dimensions.get('window').width * 0.02,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
