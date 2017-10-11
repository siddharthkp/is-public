import test from 'ava'
import isPublic from './index'

test('public repo', t => {
  return isPublic('siddharthkp/bundlesize').then(result => {
    t.is(result, true)
  })
})

test('fake repo', t => {
  return isPublic('siddharthkp/pancakes').then(result => {
    t.is(result, false)
  })
})

test('private repo', t => {
  return isPublic('siddharthkp/does-not-exist').then(result => {
    t.is(result, false)
  })
})
