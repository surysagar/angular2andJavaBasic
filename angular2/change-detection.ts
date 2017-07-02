Changes come from events***


Data flows from top to bottom,Angular data flow is a one way street.
data doesn't flow from children to parents. 
data flow : parent to children : for instance via the @Input tag.

The only way to make a upper component aware of some change in a child is through an event. 

Angular checks every components after an event has been fired. 
Say you have a click event on a component that is the component at the lowest level, 
meaning it has parents but no children. That click could trigger a change in a parent component via an event emitter, a service, etc.. 
Angular doesn't know if the parents will change or not. That is why Angular checks every components after an event has been fired by default.

***Every component has a change detector class attached to it.

 concept is same similar to detect change in angular 1.X but the new change detection approach gives us 
 the option to limit change detection to only areas of the application where it's needed.

 we are able to limit change detection to only changes that directly affect the bindings in the component.

 we can drastically reduce the number of bindings to consider during a digest cycle. 