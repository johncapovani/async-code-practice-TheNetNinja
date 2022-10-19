# async-code-practice-TheNetNinja

This repo will show the main take aways from the net ninja Asynchronous JavaScript tutorial. 

Youtube Link: https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu

Async Javascript: One of the most important pieces of javascript
- Governs how we perform tasks which take some time to complete
-> Start now -> Finish later -> Resulting in non blocking code

JavaScript by default is a synchronous language, async code allows developers the ability to await specific tasks. Break out of the single threaded language.

Scenerio: We want to call a bunch of files, one step must make a request to a server. In a traditional sychronous programming the function that runs to return a response from a server will stall the program.

Solution: Async code comes in because it allows us to pause the program in a sense as the one task is running and the other items can continue.

