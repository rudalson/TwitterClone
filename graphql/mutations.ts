/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
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
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
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
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
      tweetLikesId
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
      tweetLikesId
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
      tweetLikesId
    }
  }
`;
