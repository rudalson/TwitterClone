/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      content
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          items {
            id
            createdAt
            updatedAt
            userLikesId
            tweetLikesId
          }
          nextToken
        }
        createdAt
        updatedAt
        userTweetsId
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userTweetsId
      }
      createdAt
      updatedAt
      userLikesId
      tweetLikesId
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        tweet {
          id
          content
          image
          createdAt
          updatedAt
          userTweetsId
        }
        createdAt
        updatedAt
        userLikesId
        tweetLikesId
      }
      nextToken
    }
  }
`;
