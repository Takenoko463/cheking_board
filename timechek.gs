var now=new Date();
//何時間前に知らせるか
  const standtime=6;
function timeCheck(alert) {
  //文字を取り除く
  var time=alert.replace(/[^\d*\/\s\d{2}:\d{2}]/g,'');
  if(!time){
    //過去ログならば送らない
    return 0;
  }
  //時間を配列に入れる
  var time2=time.split(/\/|:|\s/g,4);
  //現在の年
  let year=now.getFullYear();
  //現在の月
  let nowmonth=now.getMonth();
  //落ちる時間の月番号
  let fallmonth=time2[0]-1;
  if(fallmonth<nowmonth){
    year+=1;
  }
  var falltime=new Date(year,time2[0]-1,time2[1],time2[2],time2[3],0);
  //時間差を計算
  var diff=falltime.getTime()-now.getTime();
  //単位をミリ秒から時間に変換
  var diffhour=diff/3600000;
  return diffhour<standtime;
  
}
