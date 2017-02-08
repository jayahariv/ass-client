class AssStoreInstance {
  users: Map;
  key: string;
  secret: string;
  author_id: string;
  space_id: string;

  getUsers() {
    return this.users;
  }

  getKey(){
    return this.key;
  }

  getSecret() {
    return this.secret;
  }

  getSpaceID() {
    return this.space_id;
  }

  getAuthorID() {
    return this.author_id;
  }
}

const AssStore = (function () {
    var instance;

    function createInstance() {
        var object = new AssStoreInstance();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = AssStore;
