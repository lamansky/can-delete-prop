'use strict'

module.exports = function canDeleteProp (obj, key) {
  const propDesc = Object.getOwnPropertyDescriptor(obj, key)
  return !!(propDesc && propDesc.configurable)
}
