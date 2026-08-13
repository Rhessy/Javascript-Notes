# JavaScript Concepts — Running Notes

> Organized by topic, not by video number. When a concept resurfaces later in the course, add to its existing section instead of creating a new one.

---

## How to use this doc

1. Don't transcribe the video — write the explanation in your own words, as if teaching a friend.
2. Every concept gets a **"When I'd use this"** line — that's the part that actually gets applied later.
3. Every concept gets a **tiny code example you typed yourself**, not copy-pasted.
4. End of each week: close this doc, try to answer 3-4 concepts from memory on a blank page, then compare.

---

## Variables & Data Types

**What it is:**
A variable is a named reference that points to a value, letting you store, reuse, and (depending on how it's declared) update that value later in your code.

**When I'd use this:**
I would use this pretty much in every program, it is one of the building blocks of programming

**Example:**

```js
let variableName = 10; // VariableName is declared as an integer data type that can be changed later 'let'
const variableName = 10; // VariableName is declared as an integra data type that is constant and cannont be changed later 'const'
```

**Gotchas / things that tripped me up:**

---

## Functions

**What it is:**

A function is a reuseable chunk of code that can take in 0-any number of inputs(parameters) and return a value or undefined as it doesn't have to return anything. Additionally it has to be called/invoked in order to run.

**When I'd use this:**
I'd use this when there is a section of code that I need to run multiple times throughout my program, this was I can call/invoke the function in multiple places rather than re typing it multiple times. Additionally abstraction and organizaion, as using functions makes the code easier to read.

**Example:**

```js
// Standard (function declaration)
function addNumbers(a, b) {
  return a + b;
}
// Arrow function (assigned to a variable)
const addNumbersArrow = (a, b) => {
  return a + b;
};
```

**Gotchas:**

- Make sure to call/invoke the function otherwise the code specific to the function will not run.

---

## Arrays & Objects

**What it is:**

Arrays: An array is an ordered collection of values, accessed by numeric index starting at 0. It can hold any type of value — strings, numbers, objects, functions, even other arrays (nested) — and can be empty.

Object: An object is a collection of related data and behavior stored as key-value pairs (called properties). Values can be any type — strings, numbers, arrays, functions, even other objects (nested). Objects are how you group things that describe one entity together (e.g. a user's name, email, and login function) rather than tracking them as separate loose variables. They're also the foundation JavaScript's OOP features (classes, this, inheritance) are built on top of.

**When I'd use this:**

**Example:**

```js

```

**Gotchas:**

---

## The DOM (querySelector, addEventListener, etc.)

**What it is:**

Structured representation of the HTML document. Allows javascript to access the HTML elements and styles to manipulate them. This is represented by the 'Dom Tree'

**When I'd use this:**

> e.g. rendering a list of forum posts, handling a login button click

**Example:**

```js

let button = document.querySelector('.button');
button.addEventListener(Event, function, options);

event: A string specifying the event name (e.g., 'click', 'submit', 'keydown'). Do not include the "on" prefix.function: The callback function that runs when the event fires.options (Optional): An object specifying characteristics about the listener (e.g., { once: true }).

** This is actually a web API **
```

**Gotchas:**

---

## Scope & Closures

**What it is:**

**When I'd use this:**

**Example:**

```js

```

**Gotchas:**

---

## `this` keyword

**What it is:**

**When I'd use this:**

**Example:**

```js

```

**Gotchas:**

---

## Asynchronous JS (Promises, async/await)

**What it is:**

**When I'd use this:**

> e.g. fetching posts from the backend, waiting for login to succeed before redirecting

**Example:**

```js

```

**Gotchas:**

---

## Fetch / APIs

**What it is:**

**When I'd use this:**

**Example:**

```js

```

**Gotchas:**

---

## Weekly Retrieval Check

### Week of: \***\*\_\_\*\***

Answer from memory, no notes, then check yourself:

1. Q:
   A:

2. Q:
   A:

3. Q:
   A:

**What I got wrong / need to reread:**

---

## Checkpoint Projects Log

| Project                   | Concepts it forced me to use | Where I got stuck | Date completed |
| ------------------------- | ---------------------------- | ----------------- | -------------- |
| To-do list (DOM + arrays) |                              |                   |                |
| API fetch + render        |                              |                   |                |
|                           |                              |                   |                |
