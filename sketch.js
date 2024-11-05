let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 5
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/NotoSansHK-VariableFont_wght.ttf") 
}
//===================================================


function setup() { //設定環境
  createCanvas(windowWidth, windowHeight); //設定畫布的寬高
  angleMode(DEGREES) //設定三角函數的角度用0~360度
  background("#caf1f7")  //背景顏色
  //==============================================================
  points = font.textToPoints("TKUET", -285, 80, 200, { 
    sampleFactor:0.2 //數字越多點數越多
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小。值越小代表點數越少
  //==============================================================
 
}

function draw() { //畫圖，每秒會進入執行程式60次
  background("#caf1f7");
  textSize(30)
  text(mouseX+":"+mouseY,width/2,height/2)

  //translate(mouseX,mouseY) //原點隨滑鼠移動(圓點是整個圖形的左上角頂點)
  translate(width/2,height/2) //把原本的圓點(0,0)改到畫布中心點
  rotate((frameCount)%360)
  for (let i=0; i<points.length-1; i++) { //i從0開始循環執行指令
    //text(str(i),points[i].x,points[i].y) //在(points[i].x,points[i].y)座標上顯示一個數字
    //fill("#ffc2d1") //畫的圓充滿顏色
    //noStroke()
    strokeWeight(1) //畫圓
    //ellipse(points[i].x+r*sin(angle+i*0.5),points[i].y+r*sin(angle+i*0.5),10) //在(points[i].x,points[i].y)座標上顯示圓圈
    //x+sin()的部分是為了把圖片做出扭曲化的行為
    stroke("#4361ee") //線條顏色
    strokeWeight(3) //線條粗細
    line(points[i].x+r*sin(angle+i*0.5),points[i].y+r*sin(angle+i*0.5),points[i+1].x+r*sin(angle+i*0.5),points[i+1].y+r*sin(angle+i*0.5)) //畫線，兩個點構成一條線
    //i執行到199時後面i+1會進入到200，所以第19行的length需要-1防止錯誤訊息
 } 
  //==============================================================
  angle = angle+10
}
