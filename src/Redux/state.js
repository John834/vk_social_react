import { rerenderEntireTree } from './../render';
const state = {
  profile: {
    countData: [
      {count: 80, label: 'friends'},
      {count: 840231, label: 'followers'},
      {count: 4, label: 'photos'},
      {count: 0, label: 'videos'},
      {count: 0, label: 'gifts'},
      {count: 20, label: 'tracks'},
    ],
    imageData: [
      {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwuv6WYHNdq9u5H31Y9r6t3rlzTp0ttgjSVg&usqp=CAU", alt: "photo"},
      {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd2m9KKQw7mmq1FUIe5T2uP6OLTMXu_9yoJw&usqp=CAU", alt: "photo"},
      {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzIxbHIZxVLw2oe7AgdoMBbfuRhqMlZWKOfA&usqp=CAU", alt: "photo"},
      {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3HrDB0gl-WDIrut-0gib0XxQDfXqbMRQpIQ&usqp=CAU", alt: "photo"},
    ],
    postsData: [
      /*{name: "Ghloe", surname: 'Moretz', info: 'что то то ав рпв', like: 32232},
      {name: "Ghloe", surname: 'Moretz', info: 'что то то ав рпв', like: 32141},
      {name: "Ghloe", surname: 'Moretz', info: 'что то то ав рпв', like: 45335},*/
    ],
    newPostText: 'I will star in a new film'
  },
  message: {
    messageData: [
      {id: 1, name: 'Sylvester', surname: 'Stallone' },
      {id: 2, name: 'Matthew', surname: 'McConaughey' },
      {id: 3, name: 'Angelina', surname: 'Jolie' },
      {id: 4, name: 'Scarlett', surname: 'Johansson' },
    ]
  }
}

export let addPost = (postsData) => {
  let newPost = {
    name: "Ghloe",
    surname: "Moretz",
    info: state.profile.newPostText,
    like: 0,
  }
  state.profile.postsData.push(newPost)
  state.profile.newPostText = ''
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
  state.profile.newPostText = newText
  rerenderEntireTree(state)
}

export default state

