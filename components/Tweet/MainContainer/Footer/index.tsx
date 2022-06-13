import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import { TweetType } from '../../../../types';
import styles from './styles';
import { createLike } from '../../../../graphql/mutations';

export type FooterContainerProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterContainerProps) => {
  const [user, setUser] = useState(null);
  const [myLike, setMyLike] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      // console.log({ user });
      setUser(currentUser);

      const searchedLike = tweet.likes.items.find(
        (like) => like.userLikesId === currentUser.attributes.sub
      );
      setMyLike(searchedLike);
    };

    fetchUser();
  }, []);

  const onLike = async () => {
    const like = {
      userLikesId: user?.attributes.sub,
      tweetLikesId: tweet.id,
    };

    try {
      const res = await API.graphql(
        graphqlOperation(createLike, { input: like })
      );
      setMyLike(res.data.createLike);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={'message-circle'} size={20} color={'grey'} />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={'retweet'} size={28} color={'grey'} />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onLike}>
          <AntDesign
            name={!myLike ? 'hearto' : 'heart'}
            size={20}
            color={!myLike ? 'grey' : 'red'}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={'share-google'} size={28} color={'grey'} />
      </View>
    </View>
  );
};

export default Footer;
