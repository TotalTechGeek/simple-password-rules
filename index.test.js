
import { password, template, hasDigit, hasLowerCase, hasSpecial, hasUpperCase, some, notIncludes, not, has } from './index.js'

/**
 * @test 'Hello'
 * @test 'Hello World'
 * @test 'HelloW0rld!'
 */
export const commonRule = password(
  some(
    hasDigit(1),
    hasLowerCase(1),
    hasSpecial(1),
    hasUpperCase(1),
    3
  ),
  not(has(' ', 1), 'You may not have spaces.'),
  notIncludes(['12', '23', '34', '45', '56', '67', '78', '89', '01'], 'You may not have sequential numbers in your password.')
)

/**
 * @test 'hello' returns truthy
 * @test 'hell0' returns falsy
 */
export const someWithoutNumber = password(
  // must have one of the next 3.
  some(
    hasDigit(1),
    hasSpecial(1),
    hasUpperCase(1)
  )
)

/**
 *
 * @test ['password01'], 'You failed! You used $0.' ~> 'Jessepassword01'
 * @test ['password01'], 'You failed! You used $0.' ~> 'Jesse' returns undefined
 * @param {string | string[]} items
 * @param {string} stringTemplate
 */
export function notIncludesFunction (items, stringTemplate) {
  return notIncludes(items, template(stringTemplate))
}
