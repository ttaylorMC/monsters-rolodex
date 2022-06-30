// import { Component }  from 'react';

// useState gives the ability to encapsulate the local state in a functional component
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // The callback function will only run whenever the values in the dependency array (second parameter) have changed
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   //constructor is uniqe to class components
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
  
//   //Use when you need to make an API request so that your component can have the appropriate data
//   //Is unique to class components
//   componentDidMount() {
//     fetch('http://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return { searchField };
//     });
//   }

//   // The moment a state changes, the render method is called again
//   //unique to class components
//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
    
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox 
//           classname = 'monsters-search-box'
//           onChangeHandler = {onSearchChange} 
//           placeholder='search monsters'/>
//         <CardList monsters = {filteredMonsters}/>
        
//         {/*filteredMonsters.map((monster) => {
//             return (
//               <div key={monster.id}><h1>{monster.name}</h1></div>
//             );
//           }) */}
//       </div>
//     );
//   }
// }

// This is needed whether it's a class or a function
export default App;
