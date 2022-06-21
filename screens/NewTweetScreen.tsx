import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';

import { createTweet } from '../graphql/mutations';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import Feed from '../components/Feed';
import tweets from '../data/tweets';

export default function NewTweetScreen() {
  const [tweet, setTweet] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(imageUrl);

      const blob = await response.blob();

      const urlParts = imageUrl.split('.');
      const extension = urlParts[urlParts.length - 1];
      const key = `${uuid.v4()}.${extension}`;

      await Storage.put(key, blob);
      return key;
    } catch (e) {
      console.log(e);
    }
    return '';
  };

  const onPostTweet = async () => {
    let image;
    if (!!imageUrl) {
      image = await uploadImage();
    }

    try {
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const newTweet = {
        content: tweet,
        image,
        userTweetsId: currentUser.attributes.sub,
      };
      await API.graphql(graphqlOperation(createTweet, { input: newTweet }));

      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='close' size={30} color={Colors.light.tint} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newTweetContainer}>
        <ProfilePicture image='https://cdn.eyesmag.com/content/uploads/posts/2020/12/09/tesla-elon-musk-moves-to-texas-1-5b119051-2c23-449b-b554-7445558ebf62.jpg' />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening"}
          />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.pickImage}>Pick a image</Text>
          </TouchableOpacity>
          {/* <TextInput
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            style={styles.imageInput}
            placeholder={'Image url (optional)'}
          /> */}
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  pickImage: {
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
