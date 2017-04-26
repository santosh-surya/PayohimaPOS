import { BlueToothPrinter } from './../../providers/bluetooth-printer';
import { Component, ChangeDetectorRef } from '@angular/core';

import { NavController, Platform, Events } from 'ionic-angular';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  device: any;
  data: string;
  constructor(
    public navCtrl: NavController, 
    private cd: ChangeDetectorRef,
    private platform: Platform,
    private printer: BlueToothPrinter,
    private events: Events
    ) {
      this.platform.ready().then(()=>{
        this.events.subscribe("bt:ready", this.updateUI.bind(this) );
        this.events.subscribe("bt:listdevices", this.updateUI.bind(this) );
        this.events.subscribe("bt:connect", this.updateUI.bind(this) );
        this.events.subscribe("bt:connect:error", this.updateUI.bind(this) );
        this.events.subscribe("bt:disconnect", this.updateUI.bind(this) );
        this.events.subscribe("bt:disconnect:error", this.updateUI.bind(this) );
      })
  }
  updateUI(){
    this.cd.detectChanges();
  }
  disconnect(){
    let self = this;
    this.printer.disconnect().then((value)=>{
        self.cd.detectChanges();
    }).catch((error)=>{
      console.log(error);
      self.cd.detectChanges();
    });
  }
  connect(){
    console.log('connecting to: ',this.device);
    let self = this;
    this.printer.connect(this.device).then((success)=>{
          console.log("connected");
          self.cd.detectChanges();
        }).catch((error)=>{
          console.log("connect failed: ", error);
        })   
  }
  listDevices(){
    let self = this;
    this.printer.listDevices().then(()=>{
      self.cd.detectChanges();
    }).catch((error)=>{
      console.log(error);
      if (error == "bluetooth not enabled"){
        //tell the user
      }
    })
  }

  print(){
    if (typeof this.data != 'undefined'){
      console.log("Writing: ", this.data)
      this.printer.printLine(this.data).then((success)=>{
            console.log("write successfull");
          })
          .catch((error)=>{
              console.log("write failed: ", error);
          })
    }
  }
  nextline(){
    this.printer.feedLines(1).then((value)=>{
        console.log("nextline successful");
      })
      .catch((error)=>{
        console.log("nextline failed", error)
      })
  }
  feedFiveLines(){
    this.printer.feedLines(5).then((value)=>{
        console.log("feed 5 successful");
      })
      .catch((error)=>{
        console.log("feed 5 failed", error)
      })
  }
  setEmphasiedOn(){
    this.printer.setEscEmphasizedOn().then(()=>{
      console.log("setEmphasiedOn");
    }).catch((error)=>{
      console.log("setEmphasiedOn ", error);
    })
  }
  setEmphasiedOff(){
    this.printer.setEscEmphasizedOff().then(()=>{
      console.log("setEmphasiedOff");
    }).catch((error)=>{
      console.log("setEmphasiedOff ", error);
    })
  }
  setCharA(){
    this.printer.setEscFontA().then(()=>{
      console.log("setCharA");
    }).catch((error)=>{
      console.log("setCharA ", error);
    })
  }
  setCharB(){
    this.printer.setEscFontB().then(()=>{
      console.log("setCharB");
    }).catch((error)=>{
      console.log("setCharB ", error);
    })
  }
  setUnderlineOn(){
    this.printer.setEscUnderlineOn().then(()=>{
      console.log("setUnderlineOn");
    }).catch((error)=>{
      console.log("setUnderlineOn ", error);
    })
  }
  setUnderlineOff(){
    this.printer.setEscUnderlineOff().then(()=>{
      console.log("setUnderlineOff");
    }).catch((error)=>{
      console.log("setUnderlineOff ", error);
    })
  }
  setDoubleWidthOn(){
    this.printer.setEscDoubleWidthOn().then(()=>{
      console.log("setDoubleWidthOn");
    }).catch((error)=>{
      console.log("setDoubleWidthOn ", error);
    })
  }
  setDoubleWidthOff(){
    this.printer.setEscDoubleWidthOff().then(()=>{
      console.log("setDoubleWidthOff");
    }).catch((error)=>{
      console.log("setDoubleWidthOff ", error);
    })
  }
  setDoubleHeightOn(){
    this.printer.setEscDoubleHeightOn().then(()=>{
      console.log("setDoubleHeightOn");
    }).catch((error)=>{
      console.log("setDoubleHeightOn ", error);
    })
  }
  setDoubleHeightOff(){
    this.printer.setEscDoubleHeightOff().then(()=>{
      console.log("setDoubleHeightOff");
    }).catch((error)=>{
      console.log("setDoubleHeightOff ", error);
    })
  }
  setJustificationLeft(){
    this.printer.setJustificationLeft().then(()=>{
      console.log("setJustificationLeft");
    }).catch((error)=>{
      console.log("setJustificationLeft ", error);
    })
  }
  setJustifiationCentre(){
    this.printer.setJustificationCentre().then(()=>{
      console.log("setJustifiationCentre");
    }).catch((error)=>{
      console.log("setJustifiationCentre ", error);
    })
  }
  setJustifiationRight(){
    this.printer.setJustificationRight().then(()=>{
      console.log("setJustifiationRight");
    }).catch((error)=>{
      console.log("setJustifiationRight ", error);
    })
  } 
  
}
