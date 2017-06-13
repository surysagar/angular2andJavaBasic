URL encoding is normally performed to convert data passed via html forms, because such data may contain special character,
 such as "/", ".", "#", and so on, which could either: a) have special meanings; or b) is not a valid character for an URL; 
or c) could be altered during transfer.   For instance, the "#" character needs to be encoded because it has a special 
meaning of that of an html anchor.   The <space> character also needs to be encoded because is not allowed on a valid URL format.
 Also, some characters, such as "~" might not transport properly across the internet. 



Some Common Special Characters
Here's a table of some of often used characters and their URL encodings. 

Character	
URL Encoded

;	%3B
?	%3F
/	%2F
:	%3A
#	%23
&	%26
=	%3D
+	%2B
$	%24
,	%2C
<space>	%20 or +
%	%25
<	%3C
>	%3E
~	%7E
%	%25
Note that because the <space> character is very commonly used, a special code ( the "+" sign) has been reserved as its URL encoding.  Thus the string "A B" can be URL encoded as either "A%20B" or "A+B".

::::: escape and unescape::::::

var str="this is some text &')";

document.write(str);         // this is some text &')

document.write("<br>");

document.write(escape(str))  // this%20is%20some%20text%20%26%27%29

document.write("<br>");

document.write(unescape(str));// this is some text &')