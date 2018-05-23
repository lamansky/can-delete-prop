'use strict'

const assert = require('assert')
const canDeleteProp = require('.')

describe('canDeleteProp()', function () {
  it('should return true for a regular ol’ property', function () {
    const obj = {key: 'value'}
    assert.strictEqual(canDeleteProp(obj, 'key'), true)
    delete obj.key
    assert.strictEqual(typeof obj.key, 'undefined')
  })

  it('should return false for a non-existent property', function () {
    const obj = {}
    assert.strictEqual(canDeleteProp(obj, 'key'), false)
  })

  it('should return false for an inherited property', function () {
    class A {}
    A.prototype.key = 'value'
    const obj = new A()
    assert.strictEqual(canDeleteProp(obj, 'key'), false)
    delete obj.key
    assert.strictEqual(obj.key, 'value')
  })

  it('should return true for a configurable property', function () {
    const obj = {}
    Object.defineProperty(obj, 'key', {value: 'value', configurable: true})
    assert.strictEqual(canDeleteProp(obj, 'key'), true)
    delete obj.key
    assert.strictEqual(typeof obj.key, 'undefined')
  })

  it('should return false for a non-configurable property', function () {
    const obj = {}
    Object.defineProperty(obj, 'key', {value: 'value', configurable: false})
    assert.strictEqual(canDeleteProp(obj, 'key'), false)
    assert.throws(() => { delete obj.key })
  })
})
