const menuItems=[
    {
        id:1,
        item:"food Item1",
        oneliner:"Biryani",
        img:"images/birayani.jpg",
        hotel:"raja rani",
        desc:"five:spicy chicken birayani with chicken fired deeply"

    },
    {
        id:2,
        item:"food Item2",
        oneliner:"pizza",
        img:"images/pizza.jpg",
        hotel:"Piza Hut",
        desc:"two:chicken pizza with extra taste and cheeze"

    },
    {
        id:3,
        item:"food Item3",
        oneliner:"noddels",
        img:"images/nodels.jpg",
        hotel:"chitti nodels point",
        desc:"Three:double egg noodels with spicy taste"

    },
    {
        id:4,
        item:"food Item4",
        oneliner:"Parrota",
        img:"images/parrota.jpg",
        hotel:"chilli Porata point",
        desc:"four:spicy chicked rolled with extra taste"

    },
    {
        id:5,
        item:"food Item5",
        oneliner:"fruitsalad",
        img:"images/fruitsald.jpg",
        hotel:"raja rani",
        desc:"five:all mixed fruits with test of honey "

    },
]
const item=document.getElementById('item');
const oneliner=document.getElementById('oneliner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu=0;
window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentMenu);
});
const allMenu=()=>{
    let menu=menuItems[currentMenu]
    item.textContent=menu.item;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc; 
}
//random
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length)
    // console.log(currentMenu)
    allMenu(currentMenu);

})
//previous btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1; 
    }
    allMenu(currentMenu)
} )
//next btn
next.addEventListener('click' ,()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
})