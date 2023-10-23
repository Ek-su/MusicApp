import React, { useState } from 'react';
import {Text,View,FlatList, StyleSheet,TextInput} from 'react-native';
import music_data from './src/music-data.json';
import SongCard from './src/components/SongCard';
import SearchBar from './src/components/SearchBar/SearchBar';

function App () {
  const renderSong = ({item}) => <SongCard song={item} /> ;
  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const serachedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(serachedText) > -1;

    });

    setList(filteredList);

  };

  const [list, setList] = useState(music_data)

  return(
    <View style={styles.container}> 
     <SearchBar onSearch={handleSearch} /> 
      <FlatList 
      keyExtractor={item => item.id}
      data={list}
      renderItem={renderSong}
      ItemSeparatorComponent={renderSeperator}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth:2,
    borderColor:'#e0e0e0'
  }
})
