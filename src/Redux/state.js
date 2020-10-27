const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

// dialogs

const ADD_MESSAGE = "ADD-MESSAGE"
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

let store = {
  _state: {
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
      ],
      sendMessageUserData: [
        {nameUser: "Ghloe", sendtime: "12:59 pm", messuser: "I was approved for the lead role the film"}
      ],
      newSendMess: ''
    }
  },
  _callSubscriber() {
    console.log("state")
  },

  /*_addPost(postsData) {
    let newPost = {
      name: "Ghloe",
      surname: "Moretz",
      info: this._state.profile.newPostText,
      like: 0,
    }
    this._state.profile.postsData.push(newPost)
    this._state.profile.newPostText = ''
    this._callSubscriber(this._state)
  },
  _updateNewPostText(newText) {
    this._state.profile.newPostText = newText
    this._callSubscriber(this._state)
  },*/

  // меняют только эти наш стейт
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    if(action.type === ADD_POST) {
      let newPost = {
        name: "Ghloe",
        surname: "Moretz",
        info: this._state.profile.newPostText,
        like: 0,
      }
      this._state.profile.postsData.push(newPost)
      this._state.profile.newPostText = ''
      this._callSubscriber(this._state)
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profile.newPostText = action.newText
        this._callSubscriber(this._state)
    } else if(action.type === ADD_MESSAGE) {
      let newMess = {
        nameUser: "Ghloe",
        sendtime: "12:59 pm",
        messuser: this._state.message.newSendMess
      }
      this._state.message.sendMessageUserData.push(newMess)
      this._state.message.newSendMess = ''
      this._callSubscriber(this._state)
    } else if(action.type === SEND_NEW_MESSAGE) {
        this._state.message.newSendMess = action.newText
        this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text,
})

// mess 

export const addNewMessage = () => ({type: ADD_MESSAGE})

export const updateAddNewMessage = (text) => ({
  type: SEND_NEW_MESSAGE,
  newText: text
})


window.store = store

export default store

