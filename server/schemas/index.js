const buildSchema = require('graphql').buildSchema;

module.exports = {
  greeting: buildSchema(`
    type Query {
      hello: String
    }
  `)
}
