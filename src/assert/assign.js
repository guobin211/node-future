const data = {
  name: 'app',
  data: {
    user: {
      id: ''
    },
    live: {
      title: 'live'
    }
  }
}


const newData = Object.assign( data, {data: {live: {time: 20}}})

console.log(newData);
console.log(data);
