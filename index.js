require('enb').make().then(
    function () {
        !process.env.ONLY_BUILD && require('./server/app');
    },
    function () { console.error(arguments); }
);