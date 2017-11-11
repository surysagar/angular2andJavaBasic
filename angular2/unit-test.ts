::::Isolated unit tests vs. the Angular testing utilities

Isolated unit tests:
 examine an instance of a class all by itself without any dependence on Angular or any injected values. 
The tester creates a test instance of the class with "New".

You should write isolated unit tests for 'pipes' and 'services'.

You can test components in isolation as well. However, isolated unit tests don't reveal how components interact with other angular components. 

Such tests require the Angular testing utilities. The Angular testing utilities include the 'TestBed' class
 and several helper functions from @angular/core/testing.

:::: The first karma test
describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});


:::: you also debug test in chrome source..