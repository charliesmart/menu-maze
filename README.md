# Menu Maze

## Levels

This needs lots more documentation and the code needs to be cleaned up and expanded, but here is the basics of how it works:

The `menu()` function is passed an object of type `{type: 'elementType', contents: []}`. The contents array is optional and is only used when the element of the menu is another menu.

It then parses the elements of the contents array, creating a tree of DOM elements corresponding to the menu structure and recursively adds submenus as they come up.


## events.js

This is just a simple pub/sub implementation to decouple modules in the app. `events.subscribe(eventName, callback)` listens for an event and fires the corresponding function when the event gets fired, and `event.fire(eventName, args)` fires the event and passes a single arg or array of args to any listening functions.
