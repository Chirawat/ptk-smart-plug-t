/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};

//===============================================================
const APPKEY = "1l4nYdDBtuDPeLP";
const APPSECRET = "CSGW3mwLBoa0JgKeFHSYA58rm3PbDl";
const APPID = "ptk";
var microgear = Microgear.create({
    gearkey: APPKEY,
    gearsecret: APPSECRET
});

microgear.on('connected', function() {
    microgear.setname('controllerplug');
    console.log("Device connected.")
    var status = document.getElementById("status");
    status.innerHTML = "Device connected";
    
});

microgear.resettoken(function(err){
    microgear.connect(APPID);
    console.log("Reset Token");
});

function changeImage(){
    var image = document.getElementById('myImage');
    if(image.src.match("img/light.png")){
        image.src = "img/dark.png";
        microgear.chat("ptkplug", "OFF")
    }
    else{
        image.src = "img/light.png";
        microgear.chat("ptkplug", "ON")
    }
}

