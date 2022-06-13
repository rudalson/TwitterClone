/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
