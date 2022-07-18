const userApiRouter = require("./User.api.router");
const initApi = (app)=>{
    app.use('/api/user', userApiRouter);
}
module.exports = initApi;