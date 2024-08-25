import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import './App.css'

function App() {
  
  const [ShowUserList, setShowUserList] = useState(()=>{
    const feedbackLocalStorage = window.localStorage.getItem('ShowUserList');
    if (feedbackLocalStorage !== null) {
      return JSON.parse(feedbackLocalStorage);
    }

    return [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
  });
  useEffect(() => {
    window.localStorage.setItem('ShowUserList', JSON.stringify(ShowUserList));
  }, [ShowUserList]);
  const [inputValue, setInputValue] = useState("");

  const onAddContact = (contact) => {
    const newContact = {
      ...contact, 
      id: nanoid(),
    }
    setShowUserList([...ShowUserList, newContact]);
    
  }
  
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
   const filteredContacts = ShowUserList.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
const onDeleteContact = (profileId) => {
    setShowUserList(ShowUserList.filter((item) => item.id !== profileId));
  };

  return (
     <div>
    <h1 className='title'>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} /> 
  </div>
  )
}

export default App
