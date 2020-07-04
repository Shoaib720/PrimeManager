const express = require('express');
const Complaint = require('../models/complaint');

const router = express.Router();

router.get('', (req, res, next) => {
  Complaint.find().then(
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
  const complaint = new Complaint({
    date: req.body.date,
    content: req.body.content,
    complainerName: req.body.name,
    complainerEmail: req.body.email
  });
  complaint.save()
  .then(postedComplaint => {
    res.status(201).json({
      message: "Posted Success",
      data: postedComplaint
    });
  })
  .catch(err => {
    res.status(404).json({
      error: err
    });
  });
});

router.put('/:id', (req, res, next) => {
  Complaint.findByIdAndUpdate(
    { _id : req.params.id },
    {
      date: req.body.date,
      content: req.body.content,
      complainerName: req.body.name,
      complainerEmail: req.body.email
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
  Complaint.deleteOne({ _id: req.params.id })
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
