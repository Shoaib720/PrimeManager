const express = require('express');
const Assignment = require('../models/assignment');

const router = express.Router();

router.get('', (req, res, next) => {
  Assignment.find().then(
    fetchedAsgns => {
      res.status(200).json({
        message: "Success",
        data: fetchedAsgns
      });
    }
  )
  .catch(err => {
    res.status(404).json({
      error: err
    });
  });
});

router.post('', (req, res, next) => {
  const asgn = new Assignment({
    date: req.body.date,
    subject: req.body.subject,
    asgnNo: req.body.asgnNo,
    lastDate: req.body.lastDate,
    email: req.body.email,
    content: req.body.content
  });
  asgn.save()
  .then(postedAsgn => {
    res.status(201).json({
      message: "Posted Success",
      data: postedAsgn
    });
  })
  .catch(err => {
    res.status(404).json({
      error: err
    });
  });
});

router.put('/:id', (req, res, next) => {
  Assignment.findByIdAndUpdate(
    { _id : req.params.id },
    {
      date: req.body.date,
      subject: req.body.subject,
      asgnNo: req.body.asgnNo,
      lastDate: req.body.lastDate,
      email: req.body.email,
      content: req.body.content
    },
    { new: true},
    (err, response) => {
      if(err){
        res.status(500).json({
          error: err
        });
      }else{
        res.status(200).json({
          message: "Success",
          data: response
        });
      }
    }
  );
});

router.delete('/:id', (req, res, next) => {
  Assignment.deleteOne({ _id: req.params.id })
  .then( () => {
    res.status(200).json({
      message: "Success",
    });
  })
  .catch(err => {
    res.status(404).json({
      error: err
    });
  });
})

module.exports = router;
