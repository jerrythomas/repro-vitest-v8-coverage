import { describe, expect, it } from 'vitest'
import { runningOn } from './constants'

/**
 * @vitest-environment node
 */
describe('Logger on browser', () => {
	it('should identify running_on as "server"', () => {
		console.log('Running on environment:', runningOn)
		expect(runningOn).toEqual('server')
	})
})
