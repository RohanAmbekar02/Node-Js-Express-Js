const reqFilter = (req ,res ,next ) =>{
    const salary  = req.query.salary;
    if(!salary){
        res.send("Please Provide Salary")
    }
    else if(Number(salary) < 50000){
        res.send("You salary is below 50000 , So You Cannot Access This Page")
    }
    else{
        next();
    }

}
module.exports = reqFilter;
