export const addMessage = (contactId, message) => {
    return {
      type: 'ADD_MESSAGE',
      payload: {
        contactId,
        message,
      },
    };
  };
  