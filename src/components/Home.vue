<template>
  <div class="home">
    <div class="score abs-tr big">
      <span :class="`txt-success`">{{score}}</span> / {{total}}
    </div>
    <!-- <div class="abs-tl">
      <table>
        <tr v-for="(h, i) in history" :key="i">
          <td class="txt-c p1 txt-w">{{h.op}}</td>
          <td class="txt-c p1 txt-w"><i :class="`fa fa-${h.correct ? 'check' : 'times'}`"></i></td>
        </tr>
      </table>
    </div> -->
    <div class="settings abs-tl">
      <button
        type="button"
        class="btn btn-base1-t"
        @click="showSettings = !showSettings"
      ><i :class="`fa fa-${!showSettings ? 'wrench' : 'times'}`"></i></button>
      <p v-if="showSettings">choisi ton niveau :</p>
      <input id="settings" v-if="showSettings" type="number" v-model.number="level" min="3" max="100">
    </div>
    <div class="centered-hv col-10 txt-c big">
      <div class="calc row col-12" v-if="operator === '+'">
        <span class="col-2 txt-c" v-if="hidden !== 0">{{members[0]}}</span>
        <input v-if="hidden === 0" id="input0" class="col-2 txt-c" type="Number" placeholder="?" v-model.number="x">
        <!--  -->
        <span class="col-1 txt-c sign txt-base4">{{operator}}</span>
        <!--  -->
        <span class="col-2 txt-c" v-if="hidden !== 1">{{members[1]}}</span>
        <input v-if="hidden === 1" id="input1" class="col-2 txt-c" type="Number" placeholder="?" v-model.number="x">
        <!--  -->
        <span class="col-1 txt-c sign">=</span>
        <!--  -->
        <strong>
          <span class="col-2 txt-c txt-base2" v-if="hidden !== 2">{{members[2]}}</span>
          <input v-if="hidden === 2" id="input2" class="col-2 txt-c" type="Number" placeholder="?" v-model.number="x">
        </strong>
        <!--  -->
      </div>
      <div class="calc row col-12" v-if="operator === '-'">
        <span class="col-2 txt-c" v-if="hidden !== 2">{{members[2]}}</span>
        <input v-if="hidden === 2" id="input2" class="col-2 txt-c" type="Number" placeholder="?" v-model.number="x">
        <!--  -->
        <span class="col-1 txt-c sign txt-base3">{{operator}}</span>
        <!--  -->
        <span class="col-2 txt-c" v-if="hidden !== 0">{{members[0]}}</span>
        <input v-if="hidden === 0" id="input0" class="col-2 txt-c" type="Number" placeholder="?" v-model.number="x">
        <!--  -->
        <span class="col-1 txt-c sign">=</span>
        <!--  -->
        <strong>
          <span class="col-2 txt-c txt-base2" v-if="hidden !== 1">{{members[1]}}</span>
          <input v-if="hidden === 1" id="input1" class="col-2 txt-c" type="Number" placeholder="?" v-model.number="x">
        </strong>
        <!--  -->
      </div>
    </div>
    <div class="centered-v big" style="right:1em; left: auto">
      <button
        v-if="x !== undefined && x !== null && x !== ''"
        type="button"
        :class="`smiley btn btn-${x===members[hidden] ? 'success' : 'danger'}`"
        @click="reload()">
        <i :class="`fal fa-${x === undefined || x === null ? '' : (x === members[hidden] ? 'smile' : 'frown')}`"></i>
      </button>
    </div>
  </div>
</template>

<script src="./Home.script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
