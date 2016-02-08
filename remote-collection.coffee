RemoteCollection = (name, connectionString) ->
  options = if Meteor.isClient then null
  else _driver: new MongoInternals.RemoteCollectionDriver connectionString
  new Mongo.Collection name, options
