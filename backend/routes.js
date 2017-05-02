
var Problem     = require('./models/problem');
var Solution    = require('./models/solution');

module.exports = function(router) {

  router.route('/problems')

    // create a problem (accessed at POST http://localhost:8080/problems)
    .post(function(req, res) {
      
      var problem = new Problem();    // create a new instance of the Problem model
      problem.name = req.body.name;  // set the problems name (comes from the request)
      problem.save(function(err, problem) {
        if (err)
          res.send(err);

        res.json(problem);
      });

      
    })

    // get all the problems (accessed at GET http://localhost:8080/api/problems)
    .get(function(req, res) {
      Problem.find(function(err, problems) {
        if (err)
          res.send(err);

        res.json(problems);
      });
    });

  // on routes that end in /problems/:problem_id
  // ----------------------------------------------------
  router.route('/problems/:problem_id')

    // get the problem with that id
    .get(function(req, res) {
      Problem.findById(req.params.problem_id, function(err, problem) {
        if (err)
          res.send(err);
        res.json(problem);
      });
    })

    // update the problem with this id
    .put(function(req, res) {
      Problem.findById(req.params.problem_id, function(err, problem) {

        if (err)
          res.send(err);

        problem.name = req.body.name;
        problem.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Problem updated!' });
        });

      });
    })

    // delete the problem with this id
    .delete(function(req, res) {
      Problem.remove({
        _id: req.params.problem_id
      }, function(err, problem) {
        if (err)
          res.send(err);

        res.json(req.params.problem_id);
      });
    });





  router.route('/solutions')

    // create a solution (accessed at POST http://localhost:8080/solutions)
    .post(function(req, res) {
      
      var solution = new Solution();    // create a new instance of the Solution model
      solution.name = req.body.name;  // set the solutions name (comes from the request)
      solution.save(function(err, solution) {
        if (err)
          res.send(err);

        res.json(solution);
      });

      
    })

    // get all the solutions (accessed at GET http://localhost:8080/api/solutions)
    .get(function(req, res) {
      Solution.find(function(err, solutions) {
        if (err)
          res.send(err);

        res.json(solutions);
      });
    });

  // on routes that end in /solutions/:solution_id
  // ----------------------------------------------------
  router.route('/solutions/:solution_id')

    // get the solution with that id
    .get(function(req, res) {
      Solution.findById(req.params.solution_id, function(err, solution) {
        if (err)
          res.send(err);
        res.json(solution);
      });
    })

    // update the solution with this id
    .put(function(req, res) {
      Solution.findById(req.params.solution_id, function(err, solution) {

        if (err)
          res.send(err);

        solution.name = req.body.name;
        solution.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Solution updated!' });
        });

      });
    })

    // delete the solution with this id
    .delete(function(req, res) {
      Solution.remove({
        _id: req.params.solution_id
      }, function(err, solution) {
        if (err)
          res.send(err);

        res.json(req.params.solution_id);
      });
    });






}