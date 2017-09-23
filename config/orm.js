var connection = require("./connection");

var orm = {
  selectAll: function(db) {
    connection.connect(function(err) {
      if (err) {
        return console.log(err);
      }
      connection.query(
        "SELECT * FROM burgers",
        function(err, results) {
          if (err) {
            return console.log(err);
          }
          return results;
        }
      )
      connection.end();
    });
  },
  insertOne: function(burgerName) {
    connection.connect(function(err) {
      if (err) {
        return console.log(err);
      }
      connection.query(
        "INSERT INTO burgers SET ?",
        {
          burger_name: burgerName,
          devoured: false
        },
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Product Added.")
        }
      )
      connection.end();
    });
  },
  updateOne: function(itemId) {
    connection.connect(function(err) {
      if (err) {
        return console.log(err);
      }
      connection.query(
        "UPDATE burgers SET ? WHERE ?",
        [{devoured: true}, { item_id: itemId}],
        function(err) {
          if(err) {
            return console.log(err)
          }
          console.log("Product Updated");
        }
      )
      connection.end();
    });
  }
}

module.exports = orm;