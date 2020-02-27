function doGet() {
  return HtmlService.createTemplateFromFile('Index.html').evaluate().setTitle("Earned Value Tool");
}

function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();
}

function calcEV(data){
  Logger.log(data);
  
  //Budget
  var budget = data.budget*1;
  var bud_4  = budget/4;
  
  var wday = data.wday*1;
  Logger.log(wday);
  
  // Progress % of each fence
  var fence1 = data.fence1/100;
  var fence2 = data.fence2/100;
  var fence3 = data.fence3/100;
  var fence4 = data.fence4/100;
  
  var money1 = data.money1*1;
  var money2 = data.money2*1;
  var money3 = data.money3*1;
  var money4 = data.money4*1;
  
  var spent1 = fence1 * money1;
  var spent2 = fence2 * money2;
  var spent3 = fence3 * money3;
  var spent4 = fence4 * money4;
  
  var BAC = budget;
  var studentBAC = data.BAC*1;
  var studentPV = data.PV*1;
  var studentEV = data.EV*1;
  var studentAC = data.AC*1;
  var studentCV = data.CV*1;
  var studentCPI = data.CPI*1;
  var studentSV = data.SV*1;
  var studentSPI = data.SPI*1;
  var studentEAC = data.EAC*1;
  var studentEAC2 = data.EAC2*1;
  var studentEAC3 = data.EAC3*1;
  var studentETC = data.ETC*1;
  var studentVAC = data.VAC*1;
  
  return [budget,
          bud_4,
          wday,
          fence1, 
          fence2,
          fence3,
          fence4,
          money1,
          money2,
          money3,
          money4,
          spent1,
          spent2,
          spent3,
          spent4,
          BAC,
          studentBAC,
          studentPV,
          studentEV,
          studentAC,
          studentCV,
          studentCPI,
          studentSV,
          studentSPI,
          studentEAC,
          studentEAC2,
          studentEAC3,
          studentETC,
          studentVAC
         ];
} //close calcEV

