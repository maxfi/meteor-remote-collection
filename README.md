# meteor-remote-collection
Use additional MongoDB databases in your Meteor app.

## Installation

```sh
$ meteor add maxfi:remote-collection
```

## Usage

On client or server:

```coffee
MyCollection = new RemoteCollection 'mongodb://username:password@localhost:27017/database'
```

## To Do

* Potentially reuse `MongoInternals.RemoteCollectionDriver` across multiple `RemoteCollection` instances.
