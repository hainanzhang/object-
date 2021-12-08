<template>
  <div>
    <h1>描述</h1>

    <h3>可以用constructor 来判断变量的属性</h3>

    所有对象都会从它的原型上继承一个 constructor 属性：
    <div>
      var o = {}
      console.log('o = {}', o.constructor === Object) // true
      <br />
      var o = new Object;
      console.log('o = new Object', o.constructor === Object)// true
      <br />
      var a = [];
      console.log('a = []', a.constructor === Array)// true
      <br />
      var a = new Array;
      console.log('a = new Array', a.constructor === Array)// true
      <br />
      var n = new Number(3);
      console.log('n = new Number(3)', n.constructor === Number)// true
      <br />
      var N = 9
      console.log('N = 9', N.constructor === Number)// true
      <br />
      var f = function () { }
      console.log('f = function () { }', f.constructor === Function)// true
      <br />
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

    this.attribute()

    function tree (name) {
      this.name = name
    }
    var theTree = new tree('redwood')
    console.log("tree ", 2321, theTree.constructor == Function)
    console.log("theTree.constructor is " + theTree.constructor)
  },
  methods: {

    attribute () {
      var o = {}
      console.log('o = {}', o.constructor === Object)
      var o = new Object;

      console.log('o = new Object', o.constructor === Object)

      var a = [];
      // true
      console.log('a = []', a.constructor === Array)

      var a = new Array;
      a.constructor === Array // true

      console.log('a = new Array', a.constructor === Array)


      var n = new Number(3);

      console.log('n = new Number(3)', n.constructor === Number)

      var N = 9
      console.log('N = 9', N.constructor === Number)
      console.log('N = 9', N, N.constructor)

      var f = function () { }
      console.log('f = function () { }', f.constructor === Function)
      console.log('f = function () { }', f, f.constructor)
    }
  },
}
</script>

<style>
</style>