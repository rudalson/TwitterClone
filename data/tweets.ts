const tweets = [
  {
    id: 't1',
    user: {
      id: 'u1',
      username: 'Tesla',
      name: 'Elon Musk',
      image:
        'https://cdn.eyesmag.com/content/uploads/posts/2020/12/09/tesla-elon-musk-moves-to-texas-1-5b119051-2c23-449b-b554-7445558ebf62.jpg',
    },
    createdAt: '2022-05-13T12:00:00.000Z',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      'https://now.rememberapp.co.kr/wp-content/uploads/2020/02/%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%84%85%E1%85%A5%E1%86%A8.jpg',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: 't2',
    user: {
      id: 'u1',
      username: 'HarryPorter',
      name: 'Emma Watson',
      image:
        'https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png',
    },
    createdAt: '2021-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't3',
    user: {
      id: 'u1',
      username: '토튼햄',
      name: '손흥민',
      image:
        'data:image/jpeg;base64,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',
    },
    createdAt: '2021-12-27T12:00:00.000Z',
    content: 'Hello World',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't4',
    user: {
      id: 'u1',
      username: 'Tesla',
      name: 'Elon Musk',
      image:
        'https://cdn.eyesmag.com/content/uploads/posts/2020/12/09/tesla-elon-musk-moves-to-texas-1-5b119051-2c23-449b-b554-7445558ebf62.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
];

export default tweets;
