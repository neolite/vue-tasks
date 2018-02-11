<template>
    <div class="component-wrapper">
        <b-row>
            <b-col >
                <div class="fractions-wrapper d-flex flex-row-reverse">
                    <span class="fraction result-fraction d-flex flex-row justify-content-around">
                       <div class="d-flex flex-column justify-content-between align-items-center">
                           <vue-numeric class="number" :empty-value="1" :max="99" :value="fraction.n"></vue-numeric>
                           <span class="line"></span>
                           <vue-numeric class="number" :empty-value="1" :max="99" :value="fraction.d"></vue-numeric>
                       </div>

                    </span>
                    <span v-for="(frac, index) in fractions" class="fraction d-flex flex-row justify-content-around">
                        <div class="d-flex flex-column justify-content-between align-items-center">
                            <vue-numeric class="number" :empty-value="1" :max="99" v-model="frac.numer"></vue-numeric>
                            <span class="line"></span>
                            <vue-numeric class="number" :empty-value="1" :max="99" v-model="frac.denom"></vue-numeric>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <input class="operation-field" type="text" pattern="[\+\-\*\/]*" :value="frac.op" v-on:input="setAndFilter(frac, index, $event.target.value)">
                       </div>
                    </span>
                </div>
            </b-col>

        </b-row>

        <b-row>
            <b-col></b-col>
            <b-col cols="3" md="auto">
                <div class="btn-wrapper d-flex flex-row-reverse">
                    <button class="btn btn-primary" @click="addFraction">
                        Add fraction
                    </button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  const Fraction = require('fraction.js');
  import VueNumeric from 'vue-numeric';

  export default {
    name: "fractions",
    computed: {
      fraction() {
        return this.fractions.reduce((acc, n) => this.calculateFraction(acc, new Fraction(n.numer, n.denom), n.op), new Fraction(0,1));
      },
    },
    data: () => ({
      fractions: [
        {
          numer: 0,
          denom: 1,
          op: '='
        }
      ]
    }),
    components: {
      VueNumeric
    },
    methods: {
      addFraction() {
        this.fractions.push(
          {
            numer: 0,
            denom: 1,
            op: ''
          }
        )
      },
      setAndFilter(el, idx, value) {
        value = value.replace(/[^\+\-\*\\/=]*/gi, "");
        let op =  value.charAt(0);
        this.$set(this.fractions, idx, Object.assign({}, el, { op: op}));
      },
      calculateFraction(a, b, op = '=') {
        if (op.length < 1) {
          op = '=';
        };
        switch(op) {
          case '+':
            return a.add(b);
          case '-':
            return a.sub(b);
          case '*':
            return a.mul(b);
          case '/':
            return a.div(b);
          case '=':
            return b;
        }
      }
    }
  }
</script>

<style scoped>
.number {
    width: 1.75em;
    text-align: right;
}
.operation-field {
    width: 1.75em;
    height: 1.75em;
    text-align: center;
}
.fraction {
    display: flex;
    width: 4em;
    height: 4.2em;
}
.result-fraction {
    width: 2em;
}
.line {
    display: block;
    position: relative;
    width: 1.75em;
    border-bottom: 1px solid #000;
}
.btn-wrapper {
    margin-top: 10px;
}    
</style>