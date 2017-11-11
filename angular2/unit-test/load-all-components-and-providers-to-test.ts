
:::: You could just have imports: [AppModule], but then your tests have to reload everything every time, 
and the state of each test becomes hugely complex. Perhaps you could break out more feature and 
shared modules to reduce the boilerplate