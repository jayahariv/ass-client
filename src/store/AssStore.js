class AssStoreInstance {
  users: Map;
  key: string;
  secret: string;

  getUsers() {
    return this.users;
  }

  getKey(){
    return this.key;
  }

  getSecret() {
    return this.secret;
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
