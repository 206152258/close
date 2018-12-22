
//js 实现
// var close=document.getElementById('close');
// var wrapper=document.getElementById("wrapper");
// var clickme=document.getElementById("clickme");
// clickme.addEventListener('click',function(){
//     close.style.display="block";

// })

// wrapper.addEventListener('click',function(e){
//     e.stopPropagation();
// })
// document.addEventListener('click',function(){
//     close.style.display='none';
// })



//jQuery实现
$("#clickme").on('click',function(){
    $("#close").show();
    setTimeout(() => {
        $(document).one('click',function(){
            $("#close").hide();
        })
    }, 0);

    // $(document).one('click',function(){
        // $("#close").hide();
    // })
})



$("#wrapper").on('click',function(e){
    e.stopPropagation();
})
// $(document).on('click',function(){ 
    // $("#close").hide();
// })