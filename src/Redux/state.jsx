let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, my name is Oleh", likes: 40 },
        { id: 2, message: "Its my first post", likes: 20 },
      ],
      newPostText: "some text",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Oleh" },
        { id: 2, name: "Ihor" },
        { id: 3, name: "Lena" },
        { id: 4, name: "Anastsia" },
        { id: 5, name: "Jhon" },
        { id: 6, name: "Oleh" },
      ],

      messages: [
        { id: 1, message: "hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hi, man" },
      ],
      newMessageText: "",
    },

    sidebar: {
      navItems: [
        { name: "Profile", id: 1 },
        { name: "Message", id: 2 },
        { name: "News", id: 3 },
        { name: "Music", id: 4 },
        { name: "Settings", id: 5 },
      ],
      friends: [{ name: "Oleh" }, { name: "Lena" }, { name: "Ihor" }],
    },
  },

  getState() {
    return this._state;
  },

  rerenderEntierTree() {},

  addMessage() {
    const newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this.rerenderEntierTree(this._state);
  },

  updateNewMessageText(newText) {
    store._state.dialogsPage.newMessageText = newText;
    this.rerenderEntierTree(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likes: 100,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this.rerenderEntierTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this.rerenderEntierTree(this._state);
    }

    // if (action.type === "ADD-MESSAGE") {
    //   const newMessage = {
    //     id: 4,
    //     message: this._state.dialogsPage.newMessageText,
    //   };
    //   this._state.dialogsPage.messages.push(newMessage);
    //   this._state.dialogsPage.newMessageText = "";
    //   this.rerenderEntierTree(this._state);
    // } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
    //   store._state.dialogsPage.newMessageText = action.newText;
    //   this.rerenderEntierTree(this._state);
    // }
  },

  subscribe(observer) {
    this.rerenderEntierTree = observer;
  },
};

export default store;
window.store = store;
