import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var window:any;

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  devices: any;
  device: any;
  data: string;
  connected: boolean;
  bluetooth: any;
  constructor(public navCtrl: NavController, private cd: ChangeDetectorRef) {
    this.connected = false;
  }
  disconnect(){
    let self = this;
    window.BTPrinter.disconnect(function(data){
        console.log("disconnected: ", data);
        self.connected = false;
        self.cd.detectChanges();
    },function(err){
        console.log("Disconnect failed: ", err);
    })
  }
  connect(){
    console.log('connecting to: ',this.device);
    let self = this;
    return new Promise(function(resolve, reject){
      window.BTPrinter.connect(function(data){
          console.log("Successfully connected: ", data);
          self.connected = true;
          resolve(true);
      },function(err){
          console.log("connect failed ", err);
          reject(err);
      }, self.device);
    })
  }
  sendCommand(){
    window.BTPrinter.printPOSCommand(function(data){
        console.log("Success", data);
    },function(err){
        console.log("Error", err);
    }, "0D");
  }
  send(){
    console.log("Writing: ", this.data);
    window.BTPrinter.printText(function(data){
        console.log("Write successful: ", data);
    },function(err){
        console.log("Error writing: ", err);
    }, this.data)
  }
  
  listDevices(){
    let self = this;
    window.BTPrinter.list(function(data){
        console.log("Success");
        console.log(data); //list of printer in data array
        self.devices = data;
    },function(err){
        console.log("Error: ", err);
    })
  }
}
