/**
 * A function to create a password policy.
 * @param {(((str: string) => string | undefined))[]} rules
 * @returns A string if there is an error, undefined otherwise.
 */
export function password(...rules: ((str: string) => string | undefined)[]): (str: any) => string;
/**
   * @test 3 ~> 'hi' returns truthy
   * @test 3 ~> 'hi hi hi' returns undefined
   *
   * Checks the password for a minimum length.
   * @param {number} num
   * @returns A string if there is an error, undefined otherwise.
   */
export function min(num: number): (str: any) => string;
/**
   * @test 3 ~> 'hi' returns undefined
   * @test 3 ~> 'hi hi hi' returns truthy
   *
   * Checks the password for a maximum length.
   * @param {number} num
   * @returns A string if there is an error, undefined otherwise.
   */
export function max(num: number): (str: any) => string;
/**
   * @test ['ø'], 1 ~> 'Test' returns truthy
   * @test ['ø'], 1 ~> 'Testø' returns undefined
   *
   * Checks if certain characters are present in the password.
   * @param {string} charSet The characters to check for.
   * @param {number} [num] The minimum characters required.
   * @param {string} [name]
   * @returns A string if there is an error, undefined otherwise.
   */
export function has(charSet: string, num?: number, name?: string): (str: any) => string;
/**
   * @test 1 ~> 'HELLO' returns truthy
   * @test 1 ~> 'Hello' returns undefined
   *
   * Checks if the password has lowercase letters.
   * @param {number} [num] The minimum characters required.
   * @returns A string if there is an error, undefined otherwise.
   */
export function hasLowerCase(num?: number): (str: any) => string;
/**
   * @test 1 ~> 'hello' returns truthy
   * @test 1 ~> 'Hello' returns undefined
   *
   * Checks if the password has uppercase letters.
   * @param {number} [num] The minimum characters required.
   * @returns A string if there is an error, undefined otherwise.
   */
export function hasUpperCase(num?: number): (str: any) => string;
/**
   * @test 1 ~> 'Hello' returns truthy
   * @test 1 ~> 'He!lo' returns undefined
   *
   * Checks if the password has special characters. i.e. !@#$%^&*()_+-=[]{}|;\':",./<>?
   * @param {number} [num] The minimum characters required.
   * @returns A string if there is an error, undefined otherwise.
   */
export function hasSpecial(num?: number): (str: any) => string;
/**
   * @test 1 ~> 'Hello' returns truthy
   * @test 1 ~> 'Hell0' returns undefined
   *
   * Checks if the password has digits.
   * @param {number} [num] The minimum characters required.
   * @returns A string if there is an error, undefined otherwise.
   */
export function hasDigit(num?: number): (str: any) => string;
/**
   * @test 'Hello' ~> 'Hello World' returns undefined
   * @test 'Hello' ~> '' returns truthy
   *
   * Checks if the password includes the required text.
   * @param {string | string[]} requiredText
   * @returns A string if there is an error, undefined otherwise.
   */
export function includes(requiredText: string | string[]): (str: any) => string;
/**
   * @test 'Kevin' ~> 'Kevin' returns truthy
   * @test 'Kevin' ~> 'Steve' returns undefined
   * @test 'Kevin', false ~> 'Kevin'
   * @test 'Kevin', true ~> 'Kevin'
   * @test 'Kevin', 'This is a message.' ~> 'Kevin'
   * @test ['password01', 'yeet'] ~> 'password01'
   * @test ['password01'] ~> 'yeet'
   *
   * Checks if the password includes forbidden text.
   * @param {string | string[]} requiredText
   * @param {boolean | string | ((text: string) => string)} substitute Allows you to conceal the text passed in that's forbidden, or replace the error with a specific string.
   * @returns A string if there is an error, undefined otherwise.
   */
export function notIncludes(requiredText: string | string[], substitute?: string | boolean | ((text: string) => string)): (str: any) => string;
/**
   * Checks if some of the rules were followed, if a number is included at the end, it will check if at least
   * that many rules were followed.
   * @param {(((str: string) => string | undefined) | number)[]} rules
   * @returns A string if there is an error, undefined otherwise.
   */
export function some(...rules: (number | ((str: string) => string | undefined))[]): (str: any) => string;
/**
   * Inverts the result of a rule, allowing you to specify text.
   * @param {(str: string) => string} rule
   * @param {string} error
   * @returns A string if there is an error, undefined otherwise.
   */
export function not(rule: (str: string) => string, error: string): (str: any) => string;
/**
   * Parses the string template to make it simple to create templates.
   * "$" is the magic symbol that lets you reference the argument.
   * Only works with template functions with less than 10 arguments,
   * and doesn't let you traverse (input to the function should be strings).
   *
   * @test 'Hello, $0' ~> 'World' returns 'Hello, World'
   * @test '$0, $1' ~> 'Hello', 'World' returns 'Hello, World'
   * @test 'Hey $0' ~> 'Steve' returns 'Hey Steve'
   * @test 'Fuzzed: $0' ~> #string returns cat('Fuzzed: ', args.0)
   *
   * @param {string} stringTemplate
   * @returns {(...args: string[]) => string}
   */
export function template(stringTemplate: string): (...args: string[]) => string;
