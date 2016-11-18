/**
 *
 * Simple pubsub implementation for dispatching and listening
 * for events between objects.
 *
 * To listen for an event, call events.
 * To fire an event, call events.fire('eventName', [parameters])
 */

var events = (function() {

    // Store all events in an object
    var eventList = {};

    var eventToken = -1;

    // Fire event to all subscribers
    function fire(eventName, args) {

        // Return false if event doesn't exist
        if (!eventList[eventName]) {
            return false;
        }

        // Get all subscribers
        var subscribers = eventList[eventName],
            numSubscribers = subscribers.length;

        // Call function for all subscribers and pass parameters
        for (var i = 0; i < numSubscribers; i++) {
            subscribers[i].func(args);
        }

        return this;
    }

    // Subscribe to an event so that a function gets called with the event
    // args whenever the event is fired
    function subscribe(eventName, func) {

        // If there aren't already subscribers to the event, create an
        // array to hold them
        if (!eventList[eventName]) {
            eventList[eventName] = [];
        }

        // Implement unique token to identify events
        var token = (++eventToken).toString();

        // Add subscriber to list for that event
        eventList[eventName].push({
            token: token,
            func: func
        })

        return token;
    }

    return {
        fire: fire,
        subscribe: subscribe
    }

}());
