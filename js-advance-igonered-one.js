	
*** make a function call without parathesis ()  ***


Lets take this function for example:

function test(){
return 123;
}
//if you log "test" - without ()

console.log(test); 

---outout------
function test(){
return 123;
}






Using no () means to fetch the function itself. You would do this if you want it to be passed along as a callback.

if you log "test()" - with ()

console.log(test());
-----output-----
 123


..invoking..
 Namespace1.get(para1).always(function(){
 	...logic
 });

 Namespace1 = (function(){
 	function get(para){
 		return "abcd" + para;
 	}

 	function httpGet(accessToken) {
		return Project.api.request({ //common service for http
			type: 'GET',
			url: getUrl(para1)
		});
	}

 	return{
 		get : httpget
 	}
 })()




 *** flow  ****

 $.when(something).then(function () {
	ProjectName.flows.begin('first-check');
});


ProjectName.flows = (function () {
		var flows = {};
		var flowStack = [];
		var eventStack = [];
		var currentEventIndex = -1;

		/** Begin the named flow */
		function beginFlow(name, settings) {

			var flow = flows[name];

			if (flow) {
				pushFlowEvent(name, settings);
				advanceFlow(settings);
			}
		}

})();



















