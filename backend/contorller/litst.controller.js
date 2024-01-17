const express = require('express')
const List = require('../models/list.model')
const router = express.Router()

router.post('/createList', async (req, res) => {
  const date = req.body.date
  const list = new List({
    date
   });

    list.save()
     .then(list => res.json(list._id))
})

router.post('/addTask/:listId', async (req,res) => {
    const task = req.body.task
    const listId = req.params.listId

    List.findById(listId)
      .then(list => {
        list.tasks.push(task)
        list.save()
          .then(() => res.json('Task added to list!'))
      })
})

router.post('/removeTask/:listId', async(req,res) => {
    const listId = req.params.listId
    const task = req.body.task

    List.findById(listId)
        .then(list => {
            list.tasks.pull(task)
            list.save()
            .then(() => res.json('Task removed from list!'))
        })
})


router.post('/getTasks/:listId', async(req,res) => {
    const listId = req.params.listId

    List.findById(listId)
    .then(list => res.json(list.tasks))

})