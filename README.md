# Repro of coverage issue

vitest runs the two tests in different environments 'jsdom' and 'node'. Bot the tests pass but the coverage is not reported correctly.

## Steps to reproduce

```bash
pnpm i
pnpm coverage
```

## Expected output

```text
stdout | src/run_on_server.spec.js > Logger on browser > should identify running_on as "server"
Running on environment: server

stdout | src/run_on_browser.spec.js > Logger on browser > should identify running_on as "browser"
Running on environment: browser

 ✓ src/run_on_server.spec.js (1)
 ✓ src/run_on_browser.spec.js (1)

 Test Files  2 passed (2)
      Tests  2 passed (2)
   Start at  10:46:12
   Duration  1.12s (transform 61ms, setup 0ms, collect 31ms, tests 8ms, environment 635ms, prepare 288ms)

 % Coverage report from v8
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |        0 |     100 |     100 |
 constants.js |     100 |        0 |     100 |     100 | 1
--------------|---------|----------|---------|---------|-------------------
```
