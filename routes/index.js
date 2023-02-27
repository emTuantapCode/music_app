const userRouter = require('./user')
const { notFound, errorHandler } = require('../middlewares/errorHandler')

const initWebRoutes = (app) => {
    app.use('/api/user', userRouter)


    app.use(notFound)
    app.use(errorHandler)
}

module.exports = initWebRoutes