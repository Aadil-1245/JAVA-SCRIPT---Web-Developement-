function lifetime(age){
    var liferem = 90 - age ;
    var days  = liferem * 365 ;
    var weeks = liferem * 52 ;
    var month = liferem * 12;

    console.log(days)
    console.log(weeks)
    console.log(month)

}
lifetime(20)