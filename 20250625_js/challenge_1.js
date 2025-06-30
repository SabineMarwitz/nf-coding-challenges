const input = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
]

function whoIsOnline() {
    let result = {
        online: [],
        offline: [],
        away: [],
    }

    for (let i = 0; i < input.length; i++) {
        
        if (input[i].status != 'online') {
            result.offline.push(input[i].username);
        }
        else if (input[i].lastActivity > 10) {
            result.away.push(input[i].username);
        }
        else {
            result.online.push(input[i].username);
        }        
    }
    return result;
}

console.log(whoIsOnline());



