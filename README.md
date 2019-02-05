# ![CF](http://i.imgur.com/7v5ASc8.png) LAB - Component Based UI

### Author: Matthew McQuain

#### Collaborator: Hai

### Links and Resources

- [repo](https://github.com/mattoattacko/lab-26-Component-Based-UI)
- [back-end](https://codesandbox.io/s/m3y3z0o3yx)
- [front-end](https://m3y3z0o3yx.codesandbox.io/)

### Modules

### `app.js`

#### Exported Values and Methods

##### `Class Counter`

###### `constructor(props)`

Declares the state

###### `goUp(e)`

Increases `this.state.counter` by 1

###### `goDown(e)`

Decreases `this.state.counter` by 1

###### `render() -> div`

Returns state.counter, resulting goUp() link, and resulting goDown() link

##### `Class App`

###### `render() -> React.Fragment`

Returns Header, Counter, Footer

### `index.js`

#### Exported Values and Methods

##### `Class Main`

###### `render() -> Component`

Returns App

### `header.js`

#### Exported Values and Methods

##### `Class Header`

###### `render() -> Header`

Returns Header

### `footer.js`

#### Exported Values and Methods

##### `Class Footer`

###### `render() -> Footer`

Returns Footer

#### UML

[Link to UML](assets/image.jpg)
