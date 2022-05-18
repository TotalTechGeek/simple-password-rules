## Simple Password Rules


Have you ever needed to implement password policies for your codebase? This module attempts to simplify that.


---


<!-- Generated by documentation.js. Update this documentation by updating the source code. -->


### password

A function to create a password policy.

#### Parameters

*   `rules` **...[Array][27]\<function (str: [string][28]): ([string][28] | [undefined][29])>** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### min

#### Parameters

*   `num` **[number][30]** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### max

#### Parameters

*   `num` **[number][30]** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### has

#### Parameters

*   `charSet` **[string][28]** The characters to check for.
*   `num` **[number][30]?** The minimum characters required.
*   `name` **[string][28]?** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### hasLowerCase

#### Parameters

*   `num` **[number][30]?** The minimum characters required.

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### hasUpperCase

#### Parameters

*   `num` **[number][30]?** The minimum characters required.

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### hasSpecial

#### Parameters

*   `num` **[number][30]?** The minimum characters required.

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### hasDigit

#### Parameters

*   `num` **[number][30]?** The minimum characters required.

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### includes

#### Parameters

*   `requiredText` **([string][28] | [Array][27]<[string][28]>)** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### notIncludes

#### Parameters

*   `requiredText` **([string][28] | [Array][27]<[string][28]>)** 
*   `substitute` **([string][28] | [boolean][31] | function (text: [string][28]): [string][28])?** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### some

Checks if some of the rules were followed, if a number is included at the end, it will check if at least
that many rules were followed.

#### Parameters

*   `rules` **...[Array][27]<([number][30] | function (str: [string][28]): ([string][28] | [undefined][29]))>** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### not

Inverts the result of a rule, allowing you to specify text.

#### Parameters

*   `rule` **function (str: [string][28]): [string][28]** 
*   `error` **[string][28]** 

Returns **function (str: any): [string][28]** A string if there is an error, undefined otherwise.

### template

Parses the string template to make it simple to create templates.
"$" is the magic symbol that lets you reference the argument.
Only works with template functions with less than 10 arguments,
and doesn't let you traverse (input to the function should be strings).

#### Parameters

*   `stringTemplate` **[string][28]** 

Returns **function (...args: [Array][27]<[string][28]>): [string][28]** 

[1]: #password

[2]: #parameters

[3]: #min

[4]: #parameters-1

[5]: #max

[6]: #parameters-2

[7]: #has

[8]: #parameters-3

[9]: #haslowercase

[10]: #parameters-4

[11]: #hasuppercase

[12]: #parameters-5

[13]: #hasspecial

[14]: #parameters-6

[15]: #hasdigit

[16]: #parameters-7

[17]: #includes

[18]: #parameters-8

[19]: #notincludes

[20]: #parameters-9

[21]: #some

[22]: #parameters-10

[23]: #not

[24]: #parameters-11

[25]: #template

[26]: #parameters-12

[27]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[28]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[31]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
