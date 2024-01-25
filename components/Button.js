import React from 'react'

export default function Button(navigation) {
  return (
    <View style={styles.container}>
      <Text>Testing!</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
    
  });
  
