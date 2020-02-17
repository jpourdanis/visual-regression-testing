# visual-regression-testing

Here is a sample for visual regression testing . We used cypress for faster results, easy-to-use tooling and headless run!

### RUN TESTS

1. Run 'npm install'
2. Run 'npm start' to a thread to run the node server.
3. Run to another thread on comand line 'npm run test:base'
4. Run 'npm run test:actual'

* All results are under [cypress/snapshots] folder

Note that if you change the host variable on 'test:actual' to 'http://localhost:8081/' all tests should pass.
