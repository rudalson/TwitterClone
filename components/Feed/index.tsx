import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import { listTweets } from '../../graphql/queries';
import Tweet from '../Tweet';

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const tweetsData = await API.graphql(graphqlOperation(listTweets));
      // console.log(tweetsData);
      setTweets(tweetsData?.data?.listTweets.items);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchTweets}
      />
    </View>
  );
};

export default Feed;
