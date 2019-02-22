module.exports = {
  registerUser: (req, res) => {
    const {username, password} = req.body;
    const db = req.app.get('db');
    db.registerUser([username, password]).then(instance => {
      console.log(instance);
      res.status(200).send(instance);
    });
  },
  loginUser: (req, res) => {
    const {username, password} = req.body;
    console.log('here');
    const db = req.app.get('db');
    db.loginUser([username, password]).then(instance => {
      res.status(200).send(instance[0]);
    });
  },
};
