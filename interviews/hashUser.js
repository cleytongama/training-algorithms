let user = {
    age: 31,
    name: 'cleyton',
    magic: true,
    scream: function () {
        console.log(this.name)
    }
}

user.scream()