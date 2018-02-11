<template>
    <div class="component-wrapper">
        <b-row>
            <b-col></b-col>
            <b-col >
                <div class="fractions-wrapper d-flex flex-row-reverse">
                    <span class="fraction result-fraction d-flex flex-row justify-content-around">
                       <div class="d-flex flex-column justify-content-between align-items-center">
                           <vue-numeric class="number" :empty-value="1" :max="99" ></vue-numeric>
                           <span class="line"></span>
                           <vue-numeric class="number" :empty-value="1" :max="99" ></vue-numeric>
                       </div>

                    </span>
                    <span v-for="(frac, index) in fractions" class="fraction d-flex flex-row justify-content-around">
                        <div class="d-flex flex-column justify-content-between align-items-center">
                            <vue-numeric class="number" :empty-value="1" :max="99" v-model="frac.numer"></vue-numeric>
                            <span class="line"></span>
                            <vue-numeric class="number" :empty-value="1" :max="99" v-model="frac.denom"></vue-numeric>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <input class="operation-field" type="text" pattern="[\+\-\*\/]*" :value="frac.op" v-on:input="setAndFilter(index, $event.target.value)">
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
  import VueNumeric from 'vue-numeric';
  export default {
    name: "fractions",
    computed: {
      numer_id() {
        return 1;
      }
    },
    data: () => ({
      numer: 0,
      denom: 1,
      i: 1,
      fractions: [
        {
          numer: 0,
          denom: 0,
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
      setAndFilter(idx, event) {
        let value = event.target.value;
        value = value.replace(/[^\+\-\*\\/=]*/gi, "");
        this.fractions[idx].op = value.charAt(0);
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
    border-bottom: 1px solid #000; /* whichever color you prefer */
}
.btn-wrapper {
    margin-top: 10px;
}    
</style>