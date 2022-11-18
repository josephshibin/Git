console.log(getMinimumRooms([{begin:8, end:9}, {begin:9, end:10}]));
console.log(getMinimumRooms([{begin:8, end:10}, {begin:9, end:11}]));
console.log(getMinimumRooms([{begin:8, end:9}, {begin:10, end:11}]));
console.log(getMinimumRooms([{begin:8, end:10}, {begin:9, end:11}, {begin:7, end:9}]));

function getMinimumRooms(schedule) {
  // create linear array
  var events = [];

  schedule.forEach(function(interval){
    events.push(interval.begin);
    events.push(-1 * interval.end);
  });
  console.log(events);
  events.sort(function(e1, e2){
    return Math.abs(e1) - Math.abs(e2);
  })
  console.log(events);

  var maxRooms = 0;
  var rooms = 0;
  for(var i=0; i < events.length - 1; i++) {
    if (events[i] > 0) {
      rooms++;
      if (rooms > maxRooms)
        maxRooms = rooms;
    } else {
      rooms--;
    }
  }
  return maxRooms;
}
