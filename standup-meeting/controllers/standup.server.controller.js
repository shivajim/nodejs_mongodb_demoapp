var Standup = require('../models/standup.server.models.js');

exports.list = function(req, res){
    var query = Standup.find();
    query.sort({createdOn: 'asc'}).limit(12).exec(function(err, result){
        res.render('index',{ title:'Standup List', notes: result});
    });
}

exports.create = function(req, res){
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    entry.save();
    
    //redirect to home page...
    res.redirect(301,'/');
}


exports.getNote = function(req, res){
    res.render('newnote',{title:'Standup - New Note'});
} 