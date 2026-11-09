import { describe, expect, it } from 'vitest'
import { createContactSchema } from './contact-schema'

const schema = createContactSchema({
  required: 'required',
  invalidEmail: 'invalidEmail',
  tooLong: 'tooLong'
})
const valid = { name: 'Ana', email: 'ana@example.com', message: 'Hi there' }

describe('createContactSchema', () => {
  it('accepts a complete message', () => {
    expect(schema.safeParse(valid).success).toBe(true)
  })

  it('reports the translated message for each invalid field', () => {
    const result = schema.safeParse({ name: '  ', email: 'nope', message: '' })

    expect(result.success).toBe(false)
    expect(
      result.error?.issues.map((issue) => [issue.path[0], issue.message])
    ).toEqual([
      ['name', 'required'],
      ['email', 'invalidEmail'],
      ['message', 'required']
    ])
  })

  it('rejects text longer than the limits', () => {
    expect(schema.safeParse({ ...valid, name: 'a'.repeat(201) }).success).toBe(
      false
    )
    expect(
      schema.safeParse({ ...valid, message: 'a'.repeat(5001) }).success
    ).toBe(false)
  })
})
