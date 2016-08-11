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
var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, "Patricio Gabriel Maseda"),
        React.createElement('a', {href: 'mailto:pmaseda@devspark.com'}, 'pmaseda@devspark.com')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, "Leandro Mastakas"),
        React.createElement('a', {href: 'mailto:lmastakas@devspark.com'}, 'lmastakas@devspark.com')
      )
    )
  )

ReactDOM.render(rootElement, document.getElementById('react-app'))
```

would do the same that this jsx:
```jsx
var rootElement = (
  <div>
    <h1>Contacts</h1>
    <ul>
      <li>
        <h2>Patricio Gabriel Maseda</h2>
        <a href="mailto:pmaseda@devspark.com">pmaseda@devspark.com</a>
      </li>
      <li>
        <h2>Leandro Mastakas</h2>
        <a href="mailto:lmastakas@devspark.com">lmastakas@devspark.com</a>
      </li>
    </ul>
  </div>
);

ReactDOM.render(rootElement, document.getElementById('react-app'))
```

Which one do you like more? :sunglasses:

##Hello world in react

Clone this repo and checkout the 01-hello-world branch for a full hello world example

##Components and props

##Events

##Components state

##Concept of stateless functional component

##LifeCycle methods

##Flux Architecture

##Environment Setup

###Webpack

###Babel

##Practical Example
