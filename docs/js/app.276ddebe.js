(function(e){function t(t){for(var i,o,r=t[0],s=t[1],u=t[2],l=0,m=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},c=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07a3":function(e,t,n){"use strict";n("ac49")},"0c92":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a=function(e){return Object(i["m"])("data-v-5d2c5cee"),e=e(),Object(i["l"])(),e},c={class:"wrapper"},o={class:"container"},r=a((function(){return Object(i["f"])("h1",null,"Multi View Recorder",-1)})),s={class:"btns"},u={class:"wrapper"},d={class:"container"},l=a((function(){return Object(i["f"])("footer",null,[Object(i["g"])(" Presented by Open Video Game Library, "),Object(i["f"])("a",{href:"https://keita-lab.jp/",target:"_blank",rel:"noopener noreferrer"},"WATANABE LABORATORY"),Object(i["g"])(", Meiji Univ. ")],-1)}));function m(e,t,n,a,m,f){var p=Object(i["o"])("fa"),h=Object(i["o"])("Settings"),v=Object(i["o"])("Information"),b=Object(i["o"])("Recorder");return Object(i["k"])(),Object(i["e"])("div",null,[Object(i["f"])("header",c,[Object(i["f"])("div",o,[r,Object(i["f"])("div",s,[Object(i["f"])("p",{class:"btn-icon",onClick:t[0]||(t[0]=function(){return f.openInformation&&f.openInformation.apply(f,arguments)})},[Object(i["h"])(p,{icon:"question-circle"})]),Object(i["f"])("p",{class:"btn-icon",onClick:t[1]||(t[1]=function(){return f.openSettings&&f.openSettings.apply(f,arguments)})},[Object(i["h"])(p,{icon:"cog"})])])])]),Object(i["h"])(i["b"],{name:"fade"},{default:Object(i["u"])((function(){return[Object(i["v"])(Object(i["h"])(h,{onCloseSettings:f.closeSettings,onChangeCanvasSize:f.setCanvasSize,onChangeFrameRate:f.setFrameRate,onChangeMimetype:f.setMimetype,canvasHeight:m.canvasHeight,frameRate:m.frameRate,mimetype:m.mimetype},null,8,["onCloseSettings","onChangeCanvasSize","onChangeFrameRate","onChangeMimetype","canvasHeight","frameRate","mimetype"]),[[i["s"],m.showSettings]])]})),_:1}),Object(i["h"])(i["b"],{name:"fade"},{default:Object(i["u"])((function(){return[Object(i["v"])(Object(i["h"])(v,{onCloseInformation:f.closeInformation,onOpenSettings:f.openSettings},null,8,["onCloseInformation","onOpenSettings"]),[[i["s"],m.showInformation]])]})),_:1}),Object(i["f"])("main",u,[Object(i["f"])("div",d,[Object(i["h"])(b,{id:"recorder",canvasHeight:m.canvasHeight,frameRate:m.frameRate,mimetype:m.mimetype},null,8,["canvasHeight","frameRate","mimetype"])])]),l])}var f={class:"wrapper"},p={class:"movie-wrapper"},h=["width","height"],v={class:"recording-info-wrapper"};function b(e,t,n,a,c,o){var r=Object(i["o"])("CameraSelect"),s=Object(i["o"])("MicSelect");return Object(i["k"])(),Object(i["e"])("div",f,[Object(i["f"])("div",p,[Object(i["h"])(r,{disabled:c.isRecording,onChangeCamera:t[0]||(t[0]=function(e){return o.changeCamera(0,e)})},null,8,["disabled"]),Object(i["h"])(r,{disabled:c.isRecording,onChangeCamera:t[1]||(t[1]=function(e){return o.changeCamera(1,e)})},null,8,["disabled"]),Object(i["f"])("canvas",{ref:"canvas",width:c.canvasWidth,height:n.canvasHeight},"Canvas not available.",8,h),Object(i["h"])(r,{disabled:c.isRecording,onChangeCamera:t[2]||(t[2]=function(e){return o.changeCamera(2,e)})},null,8,["disabled"]),Object(i["h"])(r,{disabled:c.isRecording,onChangeCamera:t[3]||(t[3]=function(e){return o.changeCamera(3,e)})},null,8,["disabled"])]),Object(i["f"])("section",null,[Object(i["h"])(s,{disabled:c.isRecording,onChangeMic:o.changeMic},null,8,["disabled","onChangeMic"])]),Object(i["f"])("section",v,[Object(i["f"])("button",{onClick:t[4]||(t[4]=function(){return o.clickRecordingBtn&&o.clickRecordingBtn.apply(o,arguments)})},Object(i["p"])(c.record_text),1),Object(i["f"])("p",null,"Status : "+Object(i["p"])(c.record_status),1),Object(i["f"])("p",null,"Time : "+Object(i["p"])(c.record_time),1)])])}var g=n("2909"),O=(n("a9e3"),n("d81d"),n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("159b"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("ac1f"),n("466d"),n("fb6a"),n("b0c0"),["value"]);function j(e,t,n,a,c,o){return Object(i["v"])((Object(i["k"])(),Object(i["e"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.changeCamera=e})},[(Object(i["k"])(!0),Object(i["e"])(i["a"],null,Object(i["n"])(c.camera_options,(function(e){return Object(i["k"])(),Object(i["e"])("option",{value:e.value,key:e.value},Object(i["p"])(e.name),9,O)})),128))],512)),[[i["r"],o.changeCamera]])}var y=n("1da1"),S=(n("96cf"),{name:"CameraSelect",components:{},mounted:function(){var e=this;Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 2:return t.next=4,navigator.mediaDevices.enumerateDevices();case 4:n=t.sent,n.map((function(t){"videoinput"===t.kind&&e.camera_options.push({name:t.label,value:t.deviceId})}));case 6:case"end":return t.stop()}}),t)})))().then((function(){e.camera_options[0].name="Select a camera."}))},computed:{changeCamera:{get:function(){return this.camera_options[0].value},set:function(e){this.$emit("change-camera",e)}}},methods:{},data:function(){return{camera_options:[{value:"none",name:"Loading..."},{value:"displayMedia",name:"Display"},{value:"audioTime",name:"Audio Time Domain"},{value:"audioFrequency",name:"Audio Frequency Domain"}]}}}),w=n("6b0d"),_=n.n(w);const R=_()(S,[["render",j]]);var k=R,C=["value"];function I(e,t,n,a,c,o){return Object(i["v"])((Object(i["k"])(),Object(i["e"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.changeMic=e})},[(Object(i["k"])(!0),Object(i["e"])(i["a"],null,Object(i["n"])(c.mic_options,(function(e){return Object(i["k"])(),Object(i["e"])("option",{value:e.value,key:e.value},Object(i["p"])(e.name),9,C)})),128))],512)),[[i["r"],o.changeMic]])}var x={name:"MicSelect",components:{},mounted:function(){var e=this;Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 2:return t.next=4,navigator.mediaDevices.enumerateDevices();case 4:n=t.sent,n.map((function(t){"audioinput"===t.kind&&e.mic_options.push({name:t.label,value:t.deviceId})}));case 6:case"end":return t.stop()}}),t)})))().then((function(){e.mic_options[0].name="Select a microphone."}))},computed:{changeMic:{get:function(){return this.mic_options[0].value},set:function(e){this.$emit("change-mic",e)}}},methods:{},data:function(){return{mic_options:[{value:"none",name:"Loading..."}]}}};const M=_()(x,[["render",I]]);var H=M,W={name:"Recorder",components:{CameraSelect:k,MicSelect:H},props:{canvasHeight:Number,frameRate:Number,mimetype:String},mounted:function(){var e=this;this.video.map((function(t,n){e.video[n].element=document.createElement("video")})),this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d")},methods:{changeCamera:function(e,t){var n=this;switch(this.stopVideo(e),e){case 1:this.video[e].posX=this.canvasWidth/2;break;case 2:this.video[e].posY=this.canvasHeight/2;break;case 3:this.video[e].posX=this.canvasWidth/2,this.video[e].posY=this.canvasHeight/2;break}switch(t){case"none":break;case"audioTime":navigator.mediaDevices.getUserMedia({audio:{deviceId:this.audioId},video:!1}).then((function(t){n.video[e].value="audioWaveform",n.playAudioTime(e,t)})).catch((function(e){alert("ERROR: 音声の取得に失敗しました: "+e.message)}));break;case"audioFrequency":navigator.mediaDevices.getUserMedia({audio:{deviceId:this.audioId},video:!1}).then((function(t){n.video[e].value="audioWaveform",n.playAudioFrequency(e,t)})).catch((function(e){alert("ERROR: 音声の取得に失敗しました: "+e.message)}));break;case"displayMedia":navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!0}).then((function(t){n.video[e].value="displayMedia",n.playVideo(e,t)})).catch((function(e){alert("ERROR: ディスプレイのキャプチャに失敗しました: "+e.message)}));break;default:navigator.mediaDevices.getUserMedia({audio:!1,video:{width:this.canvasWidth/2,height:this.canvasHeight/2,deviceId:t}}).then((function(i){n.video[e].value=t,n.playVideo(e,i)})).catch((function(e){alert("ERROR: Webカメラの起動に失敗しました: "+e.message)}))}},changeMic:function(e){this.audioId="none"===e?"":e,console.log("this.audioId: "+this.audioId)},playVideo:function(e,t){var n=this;this.video[e].element.srcObject=t,this.video[e].element.onloadedmetadata=function(){n.video[e].element.play(),n.video[e].timer=setInterval((function(){n.context&&n.context.drawImage(n.video[e].element,n.video[e].posX,n.video[e].posY,n.canvasWidth/2,n.canvasHeight/2)}),1e3/n.fps)}},playAudioTime:function(e,t){var n=this,i=new AudioContext,a=i.createMediaStreamSource(t),c=i.createAnalyser();a.connect(c),c.fftSize=2048;var o=new Uint8Array(c.fftSize);this.video[e].timer_audio=setInterval((function(){n.context.fillStyle="#fefefe",n.context.fillRect(n.video[e].posX,n.video[e].posY,n.canvasWidth/2,n.canvasHeight/2),c.getByteTimeDomainData(o);for(var t=n.canvasWidth/2/c.fftSize,i=0;i<c.fftSize;++i){var a=o[i],r=a/255,s=n.canvasHeight/2*r,u=n.canvasHeight/2-s;n.context.fillStyle="rgb(50, "+(u+100)+", 50)",n.context.fillRect(n.video[e].posX+i*t,n.video[e].posY+u,t,2)}}),1e3/this.fps)},playAudioFrequency:function(e,t){var n=this,i=new AudioContext,a=i.createMediaStreamSource(t),c=i.createAnalyser();a.connect(c),c.fftSize=2048;var o=c.frequencyBinCount;console.log("bufferLength: "+o);var r=new Uint8Array(o);this.video[e].timer_audio=setInterval((function(){n.context.fillStyle="#fefefe",n.context.fillRect(n.video[e].posX,n.video[e].posY,n.canvasWidth/2,n.canvasHeight/2),c.getByteFrequencyData(r);for(var t,i=n.canvasWidth/2/o,a=0,s=0;s<o;s++)t=r[s],n.context.fillStyle="rgb("+(t+100)+", 50, 50)",n.context.fillRect(n.video[e].posX+a,n.video[e].posY+n.canvasHeight/2-t/2,i,t/2),a+=i;var u=r.indexOf(Math.max.apply(Math,Object(g["a"])(r)));n.context.fillStyle="rgb(50 , 50, 50)",n.context.font="48px sans-serif",n.context.fillText(Math.floor(u*(44100/c.fftSize)*1e3)/1e3+"Hz",n.video[e].posX,n.video[e].posY+48)}),1e3/this.fps)},stopVideo:function(e){switch(this.video[e].value){case"none":break;case"audioWaveform":clearInterval(this.video[e].timer_audio);break;case"displayMedia":default:null!==this.video[e].element.srcObject&&(this.video[e].element.pause(),this.video[e].element.srcObject.getTracks().forEach((function(e){e.stop()})),this.video[e].element.srcObject=null),clearInterval(this.video[e].timer)}this.video[e].value="none",this.context.clearRect(this.video[e].posX,this.video[e].posY,this.canvasWidth/2,this.canvasHeight/2)},clickRecordingBtn:function(){var e=this;if(this.isRecording){if("inactive"==this.mediaRecorder.state)return;this.mediaRecorder.stop(),this.isRecording=!1,this.mediaRecorder.addEventListener("dataavailable",(function(t){var n=document.createElement("a"),i=new Blob([t.data],{type:t.data.type}),a=window.URL.createObjectURL(i);e.mimetype.match(/webm/)&&(n.download=e.getNow()+".webm"),e.mimetype.match(/WEBM/)?n.download=e.getNow()+".WEBM":e.mimetype.match(/matroska/)?n.download=e.getNow()+".mkv":e.mimetype.match(/mpeg/)&&(n.download=e.getNow()+".mp4"),n.href=a,n.click(),clearInterval(e.timer_recording),e.record_status=e.mediaRecorder.state,e.time_recording_sec=0,e.record_text="Start recording"}))}else{if(""===this.audioId)return void alert("マイクを選択してください");if(!confirm("録画を開始します"))return;var t=this.canvas.captureStream();navigator.mediaDevices.getUserMedia({video:!1,audio:{deviceId:this.audioId}}).then((function(n){var i=new MediaStream([t.getTracks()[0],n.getAudioTracks()[0]]);e.mediaRecorder=new MediaRecorder(i,{mimeType:e.mimetype}),"recording"!=e.mediaRecorder.state&&(e.record_status=e.mediaRecorder.state,e.timer_recording=setInterval((function(){e.record_status=e.mediaRecorder.state,e.record_time=e.transSecToTime(e.time_recording_sec),e.time_recording_sec++}),1e3),e.mediaRecorder.start(),e.isRecording=!0,e.record_text="Stop recording")}))}},getNow:function(){var e=new Date,t=e.getFullYear(),n=("00"+e.getMonth()).slice(-2),i=("00"+e.getDate()).slice(-2),a=("00"+e.getHours()).slice(-2),c=("00"+e.getMinutes()).slice(-2),o=("00"+e.getSeconds()).slice(-2);return t+n+i+"_"+a+c+o},transSecToTime:function(e){var t=("00"+parseInt(e/3600)).slice(-2),n=("00"+parseInt(e/60)).slice(-2),i=("00"+(e-(3600*t+60*n))).slice(-2);return t+":"+n+":"+i}},watch:{canvasHeight:function(){this.canvasWidth=this.canvasHeight/9*16,this.selectWidth=this.canvasWidth/2+"px",this.canvas_height=this.canvasHeight+"px",this.video[1].posX=this.canvasWidth/2,this.video[2].posY=this.canvasHeight/2,this.video[3].posX=this.canvasWidth/2,this.video[3].posY=this.canvasHeight/2},frameRate:function(){console.log(this.frameRate),this.fps=this.frameRate},mimetype:function(){}},data:function(){return{canvasWidth:640,selectWidth:"320px",canvas_height:"360px",video:[{value:"none",element:null,posX:0,posY:0,timer:null,timer_audio:null},{value:"none",element:null,posX:this.canvasWidth/2,posY:0,timer:null,timer_audio:null},{value:"none",element:null,posX:0,posY:0,timer:null,timer_audio:null},{value:"none",element:null,posX:this.canvasWidth/2,posY:this.canvasHeight/2,timer:null,timer_audio:null}],audioId:"",fps:30,isRecording:!1,record_text:"Start recording",record_status:"inactive",record_time:"00:00:00",time_recording_sec:0,timer_recording:null}}},T=function(){Object(i["q"])((function(e){return{"1d65e064":e.selectWidth,43175692:e.canvas_height}}))},A=W.setup;W.setup=A?function(e,t){return T(),A(e,t)}:T;var D=W;n("07a3");const Y=_()(D,[["render",b],["__scopeId","data-v-e179d826"]]);var z=Y,U=function(e){return Object(i["m"])("data-v-37f4517f"),e=e(),Object(i["l"])(),e},F={class:"popup"},X={class:"wrapper"},P=U((function(){return Object(i["f"])("h2",null,"Settings",-1)})),V={class:"wrapper"},B={class:"setting-elem"},E=U((function(){return Object(i["f"])("h3",null,"Size : ",-1)})),N=["value"],$={class:"setting-elem"},q=U((function(){return Object(i["f"])("h3",null,"Frame rate (canvas) : ",-1)})),L=["value"],J={class:"setting-elem"},G=U((function(){return Object(i["f"])("h3",null,"Mimetype : ",-1)})),K=["value","disabled"];function Q(e,t,n,a,c,o){var r=Object(i["o"])("fa");return Object(i["k"])(),Object(i["e"])("div",{class:"background-shadow",onClick:t[4]||(t[4]=Object(i["w"])((function(){return o.closeSettings&&o.closeSettings.apply(o,arguments)}),["self"]))},[Object(i["f"])("div",F,[Object(i["f"])("header",X,[P,Object(i["f"])("p",{id:"btn-icon-times",class:"btn-icon",onClick:t[0]||(t[0]=function(){return o.closeSettings&&o.closeSettings.apply(o,arguments)})},[Object(i["h"])(r,{icon:"times"})])]),Object(i["f"])("main",V,[Object(i["f"])("section",B,[E,Object(i["v"])(Object(i["f"])("select",{id:"select-canvasSize","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.select_canvasHeight=e})},[(Object(i["k"])(!0),Object(i["e"])(i["a"],null,Object(i["n"])(c.size_options,(function(e){return Object(i["k"])(),Object(i["e"])("option",{value:e.height,key:e.width},Object(i["p"])(e.width+" * "+e.height),9,N)})),128))],512),[[i["r"],o.select_canvasHeight]])]),Object(i["f"])("section",$,[q,Object(i["v"])(Object(i["f"])("select",{id:"select-frameRate","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.select_frameRate=e})},[(Object(i["k"])(!0),Object(i["e"])(i["a"],null,Object(i["n"])(c.frame_options,(function(e){return Object(i["k"])(),Object(i["e"])("option",{value:e,key:e},Object(i["p"])(e),9,L)})),128))],512),[[i["r"],o.select_frameRate]])]),Object(i["f"])("section",J,[G,Object(i["v"])(Object(i["f"])("select",{id:"select-mimetype","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.select_mimetype=e})},[(Object(i["k"])(!0),Object(i["e"])(i["a"],null,Object(i["n"])(c.mimetype_options,(function(e){return Object(i["k"])(),Object(i["e"])("option",{value:e.name,key:e.name,disabled:!e.isSupported},Object(i["p"])(e.name),9,K)})),128))],512),[[i["r"],o.select_mimetype]])])])])])}var Z={name:"App",components:{},methods:{closeSettings:function(){this.$emit("close-settings")}},props:{canvasHeight:Number,frameRate:Number,mimetype:String},mounted:function(){var e=this;this.mimetype_options.map((function(t,n){MediaRecorder.isTypeSupported(t.name)&&(e.mimetype_options[n].isSupported=!0)}))},computed:{select_canvasHeight:{get:function(){return this.canvasHeight},set:function(e){this.$emit("change-canvas-size",e)}},select_frameRate:{get:function(){return this.frameRate},set:function(e){this.$emit("change-frame-rate",e)}},select_mimetype:{get:function(){return this.mimetype},set:function(e){this.$emit("change-mimetype",e)}}},data:function(){return{size_options:[{width:640,height:360},{width:1280,height:720},{width:1920,height:1080}],frame_options:[15,30,60],mimetype_options:[{name:"video/webm",isSupported:!1},{name:"video/webm;codecs=vp8",isSupported:!1},{name:"video/webm;codecs=vp9",isSupported:!1},{name:"video/webm;codecs=vp8.0",isSupported:!1},{name:"video/webm;codecs=vp9.0",isSupported:!1},{name:"video/webm;codecs=daala",isSupported:!1},{name:"video/webm;codecs=h264",isSupported:!1},{name:"video/webm;codecs=H264",isSupported:!1},{name:"video/webm;codecs=avc1",isSupported:!1},{name:"video/webm;codecs=vp8,opus",isSupported:!1},{name:"video/WEBM;codecs=VP8,OPUS",isSupported:!1},{name:"video/webm;codecs=vp9,opus",isSupported:!1},{name:"video/webm;codecs=vp8,vp9,opus",isSupported:!1},{name:"video/webm;codecs=h264,opus",isSupported:!1},{name:"video/webm;codecs=h264,vp9,opus",isSupported:!1},{name:"video/x-matroska;codecs=avc1",isSupported:!1},{name:"video/mpeg",isSupported:!1}]}}};n("782f"),n("674d");const ee=_()(Z,[["render",Q],["__scopeId","data-v-37f4517f"]]);var te=ee,ne=function(e){return Object(i["m"])("data-v-565a0f13"),e=e(),Object(i["l"])(),e},ie={class:"popup"},ae={class:"wrapper"},ce=ne((function(){return Object(i["f"])("h2",null,"How to use",-1)})),oe={class:"wrapper"},re=ne((function(){return Object(i["f"])("section",null,[Object(i["f"])("p",null,[Object(i["g"])("ChromeとFirefoxで動作します。"),Object(i["f"])("span",{class:"red"},"Chrome推奨です。")])],-1)})),se={class:"flex-container"},ue=ne((function(){return Object(i["f"])("h3",null,"① 録画設定",-1)})),de=ne((function(){return Object(i["f"])("p",null,[Object(i["f"])("u",null,"Size"),Object(i["g"])(": 録画する画面のサイズ。3段階から選択できます。")],-1)})),le=ne((function(){return Object(i["f"])("p",null,[Object(i["f"])("u",null,"Frame rate (canvas)"),Object(i["g"])(": キャンバスの更新頻度です。カメラのインプットのフレームレートではありません。")],-1)})),me=ne((function(){return Object(i["f"])("p",null,[Object(i["f"])("u",null,"Mimetype"),Object(i["g"])(": 出力する動画の形式です。"),Object(i["f"])("span",{class:"red"},"「video/webm」推奨です。")],-1)})),fe=ne((function(){return Object(i["f"])("h3",null,"② カメラとマイクを選択",-1)})),pe=ne((function(){return Object(i["f"])("p",null,"録画したいカメラを選択してください（最大4カメラ）。",-1)})),he=ne((function(){return Object(i["f"])("p",null,"音声の波形も表示させることができます。その場合は先にマイクを選択してから「Audio waveform」を選択してください。",-1)})),ve=ne((function(){return Object(i["f"])("p",null,"別PCの画面を表示させる場合は、別途キャプチャボードが必要です。",-1)})),be=["src"],ge=ne((function(){return Object(i["f"])("section",null,[Object(i["f"])("h3",null,"③ 録画開始＆終了"),Object(i["f"])("p",null,"「Start recording」を押すと録画が開始します。"),Object(i["f"])("p",null,"「Stop recording」を押すと録画が終了します。"),Object(i["f"])("p",null,"録画を終了すると自動的に動画がダウンロードされます。")],-1)}));function Oe(e,t,n,a,c,o){var r=Object(i["o"])("fa");return Object(i["k"])(),Object(i["e"])("div",{class:"background-shadow",onClick:t[2]||(t[2]=Object(i["w"])((function(){return o.closeInformation&&o.closeInformation.apply(o,arguments)}),["self"]))},[Object(i["f"])("div",ie,[Object(i["f"])("header",ae,[ce,Object(i["f"])("p",{id:"btn-icon-times",class:"btn-icon",onClick:t[0]||(t[0]=function(){return o.closeInformation&&o.closeInformation.apply(o,arguments)})},[Object(i["h"])(r,{icon:"times"})])]),Object(i["f"])("main",oe,[re,Object(i["f"])("section",null,[Object(i["f"])("div",se,[ue,Object(i["f"])("p",{class:"btn-icon",onClick:t[1]||(t[1]=function(){return o.openSettings&&o.openSettings.apply(o,arguments)})},[Object(i["h"])(r,{icon:"cog"})])]),de,le,me]),Object(i["f"])("section",null,[fe,pe,he,ve,Object(i["f"])("img",{src:c.imgPath_selectCamera,alt:"Tutorial - Selecting camera"},null,8,be)]),ge])])])}var je={name:"Information",components:{},methods:{closeInformation:function(){this.$emit("close-information")},openSettings:function(){this.$emit("close-information"),this.$emit("open-settings")}},data:function(){return{imgPath_selectCamera:n("c62c")}}};n("a187");const ye=_()(je,[["render",Oe],["__scopeId","data-v-565a0f13"]]);var Se=ye,we={name:"App",components:{Recorder:z,Settings:te,Information:Se},mounted:function(){this.year=(new Date).getFullYear()},methods:{setCanvasSize:function(e){this.canvasHeight=e},setFrameRate:function(e){this.frameRate=e},setMimetype:function(e){this.mimetype=e},openSettings:function(){this.showSettings=!0},closeSettings:function(){this.showSettings=!1},openInformation:function(){this.showInformation=!0},closeInformation:function(){this.showInformation=!1}},data:function(){return{canvasHeight:360,frameRate:30,mimetype:"video/webm",showSettings:!1,showInformation:!1,year:2022}}};n("5ed0"),n("67cd");const _e=_()(we,[["render",m],["__scopeId","data-v-5d2c5cee"]]);var Re=_e,ke=(n("f5df1"),n("ecee")),Ce=n("c074"),Ie=n("ad3d");ke["c"].add(Ce["a"]),Object(i["d"])(Re).component("fa",Ie["a"]).mount("#app")},"5ed0":function(e,t,n){"use strict";n("ee74")},"674d":function(e,t,n){"use strict";n("95a8")},"67cd":function(e,t,n){"use strict";n("7cf0")},"782f":function(e,t,n){"use strict";n("8b6f")},"7cf0":function(e,t,n){},"8b6f":function(e,t,n){},"95a8":function(e,t,n){},a187:function(e,t,n){"use strict";n("0c92")},ac49:function(e,t,n){},c62c:function(e,t,n){e.exports=n.p+"img/camera-select.cf7a476c.gif"},ee74:function(e,t,n){}});
//# sourceMappingURL=app.276ddebe.js.map