const initialState = [
  ];
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
        case "UPDATE_CONTACT":
          const contactUpdate = state.map((contact) =>
            contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
          );
          return contactUpdate;        
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };