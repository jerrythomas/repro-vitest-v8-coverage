import { describe, expect, it } from 'vitest'
import { runningOn } from './constants'

/**
 * @vitest-environment jsdom
 */
describe('Logger on browser', () => {
	it('should identify running_on as "browser"', () => {
		console.log('Running on environment:', runningOn)
		expect(runningOn).toEqual('browser')
	})
})
