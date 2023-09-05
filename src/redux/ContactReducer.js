// contactReducer.js
const initialState = {
    contacts: [
        {
            id:1,
            "first_name":"Nady",
            "last_name":"MacAdam",
            "email":"nmacadam1@rediff.com",
            "phone":"379-372-8782",
            "city":"Nizhyn",
            "state":"",
            "country":"Ukraine",
            "company":"Oyonder"
        },

    ], // Your contact data
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case 'REMOVE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  