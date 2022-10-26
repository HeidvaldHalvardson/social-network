const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogsData: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
  ],
  messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is yor it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
  ]
}

export const dialogReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE :
      const newMessage = {
        id: 6,
        message: action.newMessageText
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      }

    default :
      return state;
  }
}

export const sendMessageCreator = (newMessageText) => (
  {
    type: SEND_MESSAGE,
    newMessageText
  }
);