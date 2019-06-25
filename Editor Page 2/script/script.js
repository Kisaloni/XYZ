function update (src,des) {
    /** logic here */
    des.innerHTML = src.value;
    if (src.value.trim() == 0) {
        des.innerHTML = '<span style="color:red;">Write somthing...<span>'
    }
    /** we are done */
}



// function fun (id) {
//   /** logs */
//   console.log(id)
//   console.log(id.value)
//   /** logic here */
//   let viewer = document.getElementById('ades')
//   viewer.innerHTML = id.value
//   if (id.value.trim() == 0) {
//     viewer.innerHTML = 'Write here...'
//   }
//   /** we are done */
// }


  