import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Observable } from "rxjs";
import { NgxMqttClientModule } from "ngx-mqtt-client";

import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";

import { AppComponent } from "./app.component";
import { MqttService } from "./mqtt.service.ts";

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "broker.hivemq.com",
  port: 8000,
  path: ""
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
    NgxMqttClientModule.withOptions({
      manageConnectionManually: true, //this flag will prevent the service to connection automatically
      host: "broker.hivemq.com",
      protocol: "ws",
      port: 8000,
      path: "/mqtt"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
