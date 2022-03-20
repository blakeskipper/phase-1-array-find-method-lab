function superbowlWin(record){
    const foundSeason = record.find(function(season){
        return season.result === "W"
    })
    if (foundSeason){
    return foundSeason.year
    }
}