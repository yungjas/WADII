// to start using vue you need to create a vue js object
// controls a part of your html page using ids
// to construct a vue object you need to pass in a js object
new Vue({
  //el - compulsory to indicate, this specifies which html element to control
  el: "#app",
  //to make a html element reactive, must specify the data param
  data: {
    title: "Hello Vue js",
    id: 1234,
    counter: 0,
  },
});

//create more vue instances to control more html elements
new Vue({
  el: "#app2",
  data: {
    color: "Blue",
  },
});
