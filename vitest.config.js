import { defineConfig } from 'vite'

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['html', 'lcov', 'text'],
			all: false,
			include: ['src']
		}
	}
})
