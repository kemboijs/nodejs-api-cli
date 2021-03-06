/**
 * import all data modules in this file
 * e.g import envExample from ./config/envexample
 * make it easy to import in other modules and files
 */
const envExample = require("./config/envexample");
const packageJson = require("./config/packagejson");
const gitIgnore = require("./config/gitignore");
const readMe = require("./config/readme");
const controllers = require("./controllers");
const userController = require("./controllers/user");
const services = require("./services");
const userService = require("./services/user");
const userModelData = require("./models/sequelizeusermodel");
const noSequelizeSetupData = require("./database/nosequelizesetup");
const sequelizeSetupData = require("./database/sequelizedata");
const middlewares = require("./middlewares");
const userMiddleware = require("./middlewares/user");
const noSequelizeUserModelData = require("./models/nosequelizeusermodel");
const routes = require("./routes");
const userRouter = require("./routes/user");
const routeTest = require("./tests/routes");
const middlewareTest = require("./tests/middlewares");
const useControllerTest = require("./tests/userController");
const appJs = require("./app");
const noOrmUserController = require("./controllers/noormuser");
const userQueries = require("./database/userqueries");
const noOrmDropDb = require("./database/noormdropdb");
const noOrmcreateDb = require("./database/noormcreatedb");
const dropTables = require("./database/drop-tables");
const createTables = require("./database/create-tables");
const mongoDbSetup = require("./database/mongodbsetup");
const mongoDbUserModelData = require("./models/mongodbusermodel");
const responseHelper = require("./helpers/responsehelper");
const databaseScripts = require("./database/scripts");
const license = require("./config/license");

module.exports = {
  packageJson,
  gitIgnore,
  readMe,
  envExample,
  controllers,
  userController,
  services,
  userService,
  userModelData,
  noSequelizeSetupData,
  sequelizeSetupData,
  middlewares,
  userMiddleware,
  noSequelizeUserModelData,
  routes,
  userRouter,
  routeTest,
  middlewareTest,
  useControllerTest,
  appJs,
  noOrmUserController,
  userQueries,
  noOrmDropDb,
  noOrmcreateDb,
  dropTables,
  createTables,
  mongoDbSetup,
  mongoDbUserModelData,
  responseHelper,
  databaseScripts,
  license,
};
