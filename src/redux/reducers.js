const initialState = {
    conversations: [
      {
        contactId: 1, // Replace with the actual ID of the contact
        messages: [
          {
            text: 'Hello there!',
            sender: 'user',
          },
          {
            text: 'Hi, how are you?',
            sender: 'contact',
          },
          // More messages can be added here
        ],
      },
      {
        contactId: 2, // Replace with the actual ID of another contact
        messages: [
          {
            text: 'Hey, what\'s up?',
            sender: 'user',
          },
          // More messages can be added here
        ],
      },
      // More conversations can be added here
    ],
  };
  
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        const { contactId, message } = action.payload;
        return {
          ...state,
          conversations: state.conversations.map((conversation) =>
            conversation.contactId === contactId
              ? {
                  ...conversation,
                  messages: [...conversation.messages, message],
                }
              : conversation
          ),
        };
      default:
        return state;
    }
  };
  
  export default chatReducer;
  