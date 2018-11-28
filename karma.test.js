const tests = [];
for (let file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({

    baseUrl: '/base',

    paths: {
        '../dist/waves-api.min': 'dist/waves-api.min',
        '../../dist/waves-api.min': 'dist/waves-api.min',
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start

});
