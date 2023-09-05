// export const GET_CONTACTS= ()=>{ return{type:'GET_CONTACTS'}}
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
  });
  
  export const removeContact = (contactId) => ({
    type: 'REMOVE_CONTACT',
    payload: contactId,
  });
  