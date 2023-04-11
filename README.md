
# Mandatory TODO

## Key Learnings

- Filter Array (return array except particular element)

```javascript
let characters = [
  { name: 'Batman', team: 'Justice League' },
  { name: 'Hulk', team: 'Avengers' },
  { name: 'Flash', team: 'Justice League' },
  { name: 'Iron Man', team: 'Avengers' },
  { name: 'Deadpool', team: 'X-Force' }
];

const deadpool = characters[4];

// Create a new array that excludes exactly one element
  characters = characters.filter(character => character !== deadpool);
//characters = characters.filter(item to be takern => item except deadpool)
```


## Acknowledgements

 - [Understand the JavaScript Array Filter Function in 5 Examples | Mastering JS](https://masteringjs.io/tutorials/fundamentals/array-filter-function)
 - [Remove an Item from an Array List](https://www.youtube.com/watch?v=jWWW9Wyl0mY)
-  [Color Palette](https://colorhunt.co/palette/f4eeffdcd6f7a6b1e1424874)