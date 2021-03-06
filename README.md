# FLUXTOOLS

Flux is a design pattern facebook created to tackle problems they had with a standarad MCV structure.
For them MVC did not scale well, flux should solve that.

Please read more on [https://facebook.github.io/flux/]()

If you feel comfortable with you implementation of the pattern there is no reason why it couldnt work on a big scale. I have personally used these tools to implement a flux pattern on bigger projects, but... if you have a big project and you need well documented structure and way of working then you really should look at [React](https://reactjs.org/) and [Redux](https://redux.js.org/) instead of this.

These tools shine best if you have a small application and need some structure to take away many of the buggs and spagetti code. There tools are here to help you implementing a simple flux pattern that is great for SPA with allot of gui.

## Example

Please look at [https://github.com/arwidt/fluxtools-example]() for a small example application using all the tools in this module.

## Usage

### defineStore
Is used to edit the stateobject in you store object/class. Will merge two objects.

### cloneObject
Will do a deep clone object, this is important to keep the main state object in the store and not pass a reference by mistake.
Optimized and copied from [https://jsperf.com/deep-cloning-of-objects/45]()

### mergeObject
Will merge two objects. Optimized and copied from [https://jsperf.com/deep-merge2/8]()

### deepObjectDiff
Will compare two objects and return the keys that differ, will work on any depth of object.

```
let a = {
	abc: "ABC",
	foo: {
		bar: 123
	}
}

let b = {
	test: "TEST",
	abc: "CBA",
	foo: {
		bar: "foobar"
	}
}

deepObjectDiff(a, b)

result ----------

['test', 'abc', 'foo.bar']

```

### shallowObjectDiff
Will compare two objects and return the keys that differ, will only give the keys on first level of the object.

```
let a = {
	abc: "ABC",
	foo: {
		bar: 123
	}
}

let b = {
	test: "TEST",
	abc: "CBA",
	foo: {
		bar: "foobar"
	}
}

shallowObjectDiff(a, b)

result ----------

['test', 'abc', 'foo']

```

### getAllPathsOfObject
Will return all paths in a object.

```
{
	test: "ABC"
	foo: {
		bar: "foobar"
	}
}

result -------------

['test', 'foo', 'foo.bar']
```

## Contribute

Install all packages `npm install`  
Run tests `npm test`  
Run tests with watch for development `npm run watch`  

