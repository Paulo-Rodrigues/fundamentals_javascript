const scores = [6,5,7,3,9,8,10,4]
const approved = score => score >= 7
const disapproved = score => score < 7

scores.fiter(approved)
scores.fiter(disapproved)

Array.prototype.myFilter = function(fn) {
  const resultArray = []

  for(let i=0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      resultArray.push(this[i])
    }
  }

  return resultArray
}

scores.myFiter(approved)
scores.myFiter(disapproved)
