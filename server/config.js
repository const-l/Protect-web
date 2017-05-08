module.exports = {
    express: {
        port: 3000
    },
    /**
    * file session.js look like this
    * module.exports = { secret: 'some_secret_phrase' };
    */
    session: require('./session'),
    cacheAge: 30 * 60 * 1000,
    public: './public',
    settings: {
        baseUrl: 'http://localhost:3000/'
    },
    bem: {
        bundles: ['index']
    }
};