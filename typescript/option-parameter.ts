
::Method parameter optional will be empty object we can decide.
initializeForm(channelConfig = {}) {
	// if dont found any parameter, default will be passed as an empty object(channelConfig = {}).
	// else 'channelConfig' will be passed as an object.
}

initializeForm(); // default channelConfig = {} will be passed in above method.

const CF = {a:"a", b:"b"};
initializeForm(CF);  // CF will be passed correctly in above method.