export default {
  name: 'Home',
  data () {
    return {
      operator: undefined,
      level: 10,
      x: undefined,
      hidden: undefined,
      score: 0,
      total: -1,
      members: [0, 0, 0],
      history: [],
      showSettings: false
    }
  },
  methods: {
    '+' (a, b) {
      return a+b
    },
    '-' (a, b) {
      return a-b
    },
    inv (o) {
      return o === '+' ? '-' : '+'
    },
    reload () {
      if(this.operator !== undefined) {
        if (this.operator === '+') {
          this.history.push({
            op: `${this.members[0]} ${this.operator} ${this.members[1]} = ${this.members[2]}`,
            correct: this.x === this.members[this.hidden] 
          })
        } else if (this.operator === '-') {
          this.history.push({
            op: `${this.members[2]} ${this.operator} ${this.members[1]} = ${this.members[0]}`,
            correct: this.x === this.members[this.hidden] 
          })
        }
      }
      this.total ++
      if ( this.x !== undefined && this.x === this.members[this.hidden]) this.score ++
      
      this.operator = Math.round(Math.random()) === 1 ? '+' : '-'
      // this.operator = '-'
      this.members[2] = Math.floor(Math.random()*this.level+.99999999) 
      this.members[1] = Math.floor(Math.random()*this.members[2]+.99999999) 
      this.members[0] = this['-'](this.members[2], this.members[1])
      this.hidden = Math.floor(Math.random()*2.9999)
      this.x = undefined
      setTimeout(function () {
        document.getElementById('input'+this.hidden).focus()
      }.bind(this), 100)
    }
  },
  watch: {
    'showSettings' () {
      if (this.showSettings) {
        setTimeout(function () {
          document.getElementById('settings').focus()
        }.bind(this), 100)
      } else {
        setTimeout(function () {
          document.getElementById('input'+this.hidden).focus()
        }.bind(this), 100)
      }
    }
  },
  mounted () {
    this.reload()
    
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 13 && this.x !== undefined) {
        this.reload()
      }
    }.bind(this))
  }
}