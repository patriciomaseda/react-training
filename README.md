# react-training

##Table of contents

- Introduction, what is react, basic concepts, virtual dom
- The goods and the bads
- JSX explanation
- Hello world example
- Components and props
- Events
- Components State
- Stateless functional components concept
- Component LifeCycle
- Flux Architecture
- How to setup an environment (Webpack, Babel, npm)
- Practical example and live coding

##Introduction

###What is react?
React is a JavaScript library that's used for building user interfaces. 

###From where it came from?
It started at Facebook and it's maintained by developers at Facebook and Instagram and also a huge community of contributors.

###What's de difference between React and some other js libraries like Angular or Backbone?
React is intended to be the view or the user interface, the V in MVC. One of the benefits and goals of the React project is to make developing a large scale single page application or SPA, much easier.

###Virtual DOM?
Probably the most exciting feature of React though is the virtual DOM. Whenever a change happens the virtual DOM efficiently re-renders the DOM. 

##The Goods and the bads

###Good things

1. Components are really independent from any other thing. We can know what a component is and how it works (event its styles) just looking at one file.
2. Bundling Javascript and HTML into JSX makes components easily understandable.
3. Works great for teams, strongly enforcing UI and workflow patterns

###The bads

1. You DO NOT GET any of the following:
  -  AJAX capabilities or framework.
  -  Any data layer.
  -  Promises.
  -  Any application framework at all.
We will have to use external libraries to accomplish these things.

2. React will slow you down tremendously until you get a basic knowledge about how all the thing works.
3. React does not support any browser below IE8
4. If your applicationdoesn't have very much dynamic page updating, you will be implementing a lot of code for a very small benefit.

##JSX

###What it is?
JSX is an inline markup that looks like HTML and gets transformed to JavaScript. A JSX expression starts with an HTML-like open tag, and ends with the corresponding closing tag. JSX tags support the XML self close syntax.

###Do I have to use it mandatorily?
No

###Then why should I use it? :confused:
JSX expressions are evaluated to ReactElements. Think of them as shorthand for calling `React.createElement()` a hundred times.

For example this code:
```javascript
var name = 'Patricio Gabriel Maseda';
var email = 'pmaseda@devspark.com';
var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, name),
        React.createElement('a', { href: 'mailto:' + email }, email)
      )
    )
  )

ReactDOM.render(rootElement, document.getElementById('react-app'))
```

would do the same that this jsx:
```jsx
var name = 'Patricio Gabriel Maseda';
var email = 'pmaseda@devspark.com';
var rootElement = (
  <div>
    <h1>Contacts</h1>
    <ul>
      <li>
        <h2 className="subtitle">{name}</h2>
        <a href={'mailto:' + email}>{email}</a>
      </li>
    </ul>
  </div>
);

ReactDOM.render(rootElement, document.getElementById('react-app'))
```

###Why className?
You'll notice that React uses className instead of the traditional DOM class. From the docs, _"Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like className and htmlFor, respectively."_

Which one do you like more? :sunglasses:

##Hello world in react

Clone this repo and checkout the __01-hello-world__ branch for a full hello world example :open_mouth:

##Components and props

###What is a component?

We can define a component as the minimun element on a react UI interface. Components are self-contained packages of layout, funcionality and in some cases style. That looks like a weird impossible mix at the begining but thinking a little bit more about that, it has some advantages:
- Isolation. (You can know everything about a component just looking at 1 file)
- Reusability(You can reuse a component as many times you want and they are easily portable even to other react applications)

Here it is a really simple component example:

```jsx
const MyComponent = React.createClass({
  render: function() {
    return <div className={this.props.className}/>;
  }
});
```

They’re the data that get passed into the component as element attributes. Somewhere else in the app, React listens for __state__ changes and the render() method gets called again passing the changed data into the props.

Checkout the __02-hello-components__ branch for a basic component example. :satisfied:

###Three ways of how to define components

The first one, using React.createClass() method:
```jsx
const MyComponent = React.createClass({
  render: function() {
    return <div className={this.props.className}/>;
  }
});
```
After the introduction of ES6 React let us define components as a js class:
```jsx
class MyComponent extends React.Component {
  render() {
    return <div className={this.props.className}/>;
  }
}
```

As a pure function: (From React 0.14):
```jsx
const MyComponent = props => (
  <div className={props.className}/>
);
```

###PropTypes:

They are essentially a dictionary where you define what props your component needs and what type(s) they should be. How does this look like?

```javascript
BlogSubjects.propTypes = {
  subjects: React.PropTypes.array.isRequired,
  className: React.PropTypes.string.isRequired,
  maxSubjectsShown: React.PropTypes.number,
};
```
More complex propTypes:
```javascript
Post.propTypes: {
  //Id can be a number, or a string, but it needs to be defined!
  id: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]).isRequired,
 //Messages should be an object with a title and text property of type string
  message: React.PropTypes.shape({  
    title: React.PropTypes.string,
    text: React.PropTypes.string
  }).isRequired,
  //The comments property needs to be an array of objects.
  comments: React.PropTypes.arrayOf(React.PropTypes.object),
  //The date needs to be an instance of type Date.
  date: React.PropTypes.instanceOf(Date)
}
```


###DefaultProps: (completar defaultprops y proptypes)


##Component state
Just like the props, state affects how the component behaves and is rendered. It is basically another way to add dinamicity to the components.

###Key differences between props and state:
- State is internal and controlled by the component itself while props are external and controlled by whatever renders the component
- State should be considered private data and props are more like a parameter received from the outworld.
- State needs to be initialized, props are just received.

###Initializing the component state:

####On a component created using createClass() method:
```jsx
var CounterComponent = React.createClass({
  getInitialState : function() {
    return {
      currentCount : 1,
    };
  },
  render : function() {
    return (
      <button>
        Current count: {this.state.currentCount}
      </button>
    );
  }
});
```
####ES6 flavour:
```jsx
class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCount : 1,
    };
  }
 
  render : function() {
    return (
      <button>
        Current count: {this.state.currentCount}
      </button>
    );
  }
}
```

###Updating the component state:
Here it is a simple example of how the state value has to be updated when some action is performed __over the component__.
```jsx
var CounterComponent = React.createClass({
  
  getInitialState : function() {
    return {
      currentCount : 1,
    };
  },
  
  handleClick: function(e) {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  },
  
  render : function() {
    return (
      <button onClick={this.handleClick}>
        Current count: {this.state.currentCount}
      </button>
    );
  }
});
```
To see this code working please checkout branch __03-hello-state__ on this repository.

###When should I use state?

__NEVER__, or almost never. __poner un ejemplo__

Sometimes, but rarely, it can be useful for a component to maintain internal state. Only if your state isn’t causing side-effects, __maybe__ it’s OK.

##Concept of stateless functional component

Stateless components may also be referred to as Pure Components, or even Dumb Components, and are meant to represent any React Component declared as a function that has no state and returns the same markup given the same props. 

These kind of components have to be majority in any application. B, Because of that from React 0.14 ability to write these stateless components as functions has been added.

##LifeCycle methods

Until now we have covered the `render` method and the props and state inicialization methods but we also have some other special methods that we can call. For example, what if we want to do something before or after the component has rendered or mounted ? What if we want to avoid a re-render?

Looks like we need more control over the stages that a component goes through. The process where all these stages are involved is called the component’s lifecycle and every React component goes through it. React provides several methods that notify us when certain stage of this process occurs. These methods are called the component’s lifecycle methods and they are invoked in a predictable order.

###Phases:

initialization -> mounting -> updating -> unmounting

####Initialization
Defaults and initial values for this.props and this.state are set. (_getDefaultProps()_ and _getInitialState()_)

####Mounting
When a component is being inserted into the DOM. (_componentWillMount()_ and _componentDidMount()_)

__componentWillMount()__ -> invoked once and immediately before the initial rendering occurs.

__componentDidMount()__ -> just once and immediately after React inserts the component into the DOM

####Updating
During this phase a React component is already inserted into the DOM. (_componentWillReceiveProps()_, _shouldComponentUpdate()_, _componentWillUpdate()_, _componentDidUpdate()_)

__componentWillReceiveProps()__ -> invoked when a component is receiving new props.

__shouldComponentUpdate()__ -> allows us to decide whether the next component’s state should trigger a re-render or not.

__componentWillUpdate()__ -> is called immediately before rendering.

__componentDidUpdate()__ -> is called immediately after React updates the DOM 

####Unmounting

__componentWillUnmount()__ -> immediately before the component is unmounted from the DOM.

##Getting closer to a real application architecture:

These following stuff is not really React, but the idea is to give you an insight of which tools you will need/see on a React application environment in the real life.

###Webpack
[http://webpack.github.io/](http://webpack.github.io/)
Webpack is a powerful module bundler. A bundle is a JavaScript file that incorporate assets that belong together and should be served to the client in a response to a single file request.

Webpack roams over your application source code, looking for import statements, building a dependency graph, and emitting one (or more) bundles. With plugin "loaders" Webpack can preprocess and minify different non-JavaScript files such as TypeScript, SASS, and LESS files.

###Babel
[https://babeljs.io/](https://babeljs.io/)
Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production. You need Babel because browser vendors are slow to adopt new language features.

For example for this ES6 fat arrow funcion:
```javascript
let myFunc = () => {
  console.log("Hello ES6!");
};
```

after the babel transpiling we will get:
```javascript
var myFunc = function() {
  console.log("Hello ES6!");
};
```

###Routing(https://github.com/reactjs/react-router)[https://github.com/reactjs/react-router]
As we said previously React is only the V of an MVC app, so in order to make React render different things for different routes we will be using an external library. Thats where react-router comes in.

To an easy react-router example checkout the branch 05-hello-router in this repo.

####Steps to get the app up:
- cd to the repo directory
- run `npm install`
- run `npm run start`
- goto `http://localhost` and see the app running.

####React Router basic implementation:
```jsx
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
```
React Router is rendered as any other component.

#####What is that `history` thing?
[https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md)
The <Router> needs to know which history tracking strategy to use. React Router docs recommend browserHistory

Some available histories that we can use are:
- hashHistory. Easy to implement. (url like: lalala.com/#/users?_k=ckuvup)
- browserHistory. Hard to implement. (needs server side routing) (urls like: lalala.com/users)

#####Route matching
```jsx
<Route path="users/:userId" component={UserProfile} />
```
This route will match when the user visits any path that starts with users/ and has any value afterwards. It will match /users/1, /users/143, or even /users/abc (which you'll need to validate on your own).

React Router will pass the value for :userId as a prop to the UserProfile. This props is accessed as this.props.params.userId inside UserProfile

##Fetching info from the outworld
Lets say we need to call some API to get a list of users for example. As we said previously React does not provide any ajax capabilities or framework. So, in first instance we will need an external tool:

Lets use axios
[https://github.com/mzabriskie/axios](https://github.com/mzabriskie/axios)

Axios is a promise-based Ajax tool that’s very similar (in terms of API) to jQuery’s promise-based Ajax features. How similar are they?
```javascript
// jQuery
$.get('/path/to/user-api').then(function(response) { ... });

// Axios
axios.get('/path/to/user-api').then(function(response) { ... });
```

##Forms

##Flux Architecture

##Useful links:
- Official JSX docs: [https://facebook.github.io/react/docs/jsx-in-depth.html](https://facebook.github.io/react/docs/jsx-in-depth.html)
- React Router (https://github.com/reactjs/react-router)[https://github.com/reactjs/react-router]
- Webpack official: [http://webpack.github.io/](http://webpack.github.io/)
- Babel [https://babeljs.io/](https://babeljs.io/)
- Babel Loader [https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)
