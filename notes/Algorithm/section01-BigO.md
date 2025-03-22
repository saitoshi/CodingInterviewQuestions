## Big O Notes

### What is Good Code?

Good code has the following two characteristics - Readable and Scalable.

Scalable can be expanded upon the concept of Speed and Memory.
Therefore, the three pillars of code are readable, memory (space complexity), and speed (time complexity).

### Big O Scalability

<b>Problem 1: What is the runtime of the following code></b>

```
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}
```

The runtime is O(n) because we are iterating through the n size array of input.

<b>Problem 2 - What is the runtime of the following function?</b>

```
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
  }
```

The runtime for the following function above is O(n) times because of the two loops above runs n times (with the assumption that n is the length of input).

<b>Example of a function that runs O(n!)</b>

```
void nFacRuntimeFunc(int n) {
  for(int i=0; i<n; i++) {
    nFacRuntimeFunc(n-1);
  }
}
```
