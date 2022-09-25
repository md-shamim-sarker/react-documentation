## JSX Simple Element
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

const element = <h1>Hello World!</h1>;

export default App;
```

## JSX Complex Element
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

const element = (
  <div>
    <h1>This is heading.</h1>
    <p>
      <strong>Author: </strong>Md. Shamim Sarker <br />
      <strong>Date: </strong>25-09-2022
    </p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quos obcaecati tenetur sint aperiam praesentium aliquam unde itaque sunt alias esse incidunt quod ipsa repellat, eaque dolorum atque eius ea sit repudiandae eligendi! At magni atque officia exercitationem inventore eaque sequi voluptates aliquam nihil molestiae, saepe vitae provident eligendi fugiat?</p>
  </div>
);

export default App;
```

## JSX Element With Variable
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

const name = "Md. Shamim Sarker";
const element = <h1>Hello {name}.</h1>;

export default App;
```

## JSX Element With Function, Object
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Shamim",
  lastName: "Sarker"
};

const element = <h1>My full name is {formatName(user)}</h1>;

export default App;
```

## JSX Expression With Condition
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {getGreeting(user)}
      {getGreeting()}
    </div>
  );
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Shamim",
  lastName: "Snigdha"
};

function getGreeting(user) {
  if(user) {
    return <h1>Hello {formatName(user)}.</h1>;
  }
  return <h1>Hello Stranger.</h1>;
}

export default App;
```