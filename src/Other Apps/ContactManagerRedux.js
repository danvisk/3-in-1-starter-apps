import "./ContactManager.css";
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

// Action creator
function addPerson(name) {
  return { type: 'ADD_NAME', name: name }
}

function setPerson(name) {
  return { type: 'SET_NAME', name: name }
}

const initialState = {
  namePart: '',
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_NAME':
      return { namePart: state.namePart,
      contacts: [...state.contacts, action.name]};
    case 'SET_NAME':
      return { namePart: action.name, contacts: state.contacts}    
    default:
      return state;
  }
}

 function AddPersonForm(props) {
  function handleChange(e) {
    props.setPerson(e.target.value);
    console.log(props.namePart);
  }
    
  function handleSubmit(e) {
    if(props.namePart !== '') {
      props.addPerson(props.namePart);
      props.setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className='form2'>
      <input type="text" placeholder="Add new contact" 
        onChange={handleChange} value={props.namePart} className="box"/>
      <button type="submit" className="add">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, i) =>
    <li key={i}>{val}</li>
  );
  return <ul>{listItems}</ul>;
};

const mapDispatchToProps = {
  addPerson,
  setPerson
}

const PeopleListCon = connect(mapStateToProps)(PeopleList)
const AddPersonFormCon = connect(mapStateToProps, mapDispatchToProps)(AddPersonForm)

function ContactManager() {
  return (
    <div>
      <AddPersonFormCon />
      <PeopleListCon />
    </div>
  );
} 

function mapStateToProps(state) {
  return {
    namePart: state.namePart,
    contacts: state.contacts
  };
} 

const store = createStore(reducer);

const el = (
  <div className = "manager">
    <h1 className="header">Contact Manager</h1>
    <Provider store={store}>
      <ContactManager />
    </Provider>
  </div> );

function App() {
  return el;
}

export default App;


/*
function setPerson(name) {
  return { type: 'SET_NAME', name: name }
}
*/