class -3
Polypill
We need to convert our code in to older version of browser.

What convert it Is called babel(for eg, if u are using old browser and u r using es6 which won’t support the browser.then browser create a new code which support the browser.that is polypill.)

pollyfill ->if the browser doesnot understand a code then `babel` convert that code in to older code which browser understand.
`babel`- it's a js code which convert a code into another code.     compiler/transpiler
git init init - This command will make your repo compatible with git.

 browserlist confirms which version of browser will be working. 
package.json -> scripts -> "start": "parcel index.html"
use `npm run start`

build command used in the previous class -> `npx parcel build index.html`
npx  -> it is exactly npm,  but execute a package without downloading it.
npm install the packages u want in your project.
npx for executing.
`npx = npm run`
`npm build .`
`
To remove our console one package is there.`babel-plugin-transform-remove-console.`
Parcel need to configure plugin to remove console.
render  —> Updating dom -> loading something in the browser

babel.rc
It’s a babel configuration
 
 -React.createElement gives us an object
 -object will convert into html content and then puts up into DOM

 So JSX was developed by facebook developers. It is Javascript XML
language. JSX is not HTML inside JS, it is a HTML-like syntax used in JS. For example :- in jsx, React keeps a track of our key,
but not our id prop, even though they uniquely identify that child element

`JSX and Babel`
JSX cannot be understood by our browser, that’s why if we write the heading1 in the browser and console log it, it will
throw an error because the browser’s JS engine cannot read JSX. Here comes Babel, which is JS compiler which transforms
these JSX into ECMAScript that the browser can read.
Now how is JSX read ? : - When Babel encounters a JSX syntax, it converts that into a React element using  React.createElement().

JSX is not a part of React. It is a completely different thing
• Babel is already installed as a dependency for Parcel, we don’t need to intall it seperately

`React Components `
There are 2 types
• Functional Components => New way
• Class Based Components => Old way

• To use a React element inside a functional component :- write { name_of_react_element} inside the JSX

• To use a component inside another functional component :- We can include the former component as a tag inside
the latter one or just calling the former component within “{}” (since it’s a normal JS function) 

We can write any piece of JS code inside the JSX by writing it within the curly braces “ { } “,

Component Composition :- If I have to use a component inside another component, then it’s called that
Polyfill :- It is the old piece of code that Babel generates so that our app can be compatible with the older versions of
browsers