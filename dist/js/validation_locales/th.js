(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(n,t,e){n.exports=function(){"use strict";var n,t={name:"th",messages:{_default:function(n){return"ข้อมูล "+n+" ไม่ถูกต้อง"},after:function(n,t){return n+" ต้องเป็นวันที่หลังจาก "+t[0]},alpha:function(n){return n+" ต้องเป็นตัวอักษรเท่านั้น"},alpha_dash:function(n){return n+" สามารถมีตัวอักษร ตัวเลข เครื่องหมายขีดกลาง (-) และเครื่องหมายขีดล่าง (_)"},alpha_num:function(n){return n+" ต้องเป็นตัวอักษร และตัวเลขเท่านั้น"},alpha_spaces:function(n){return n+" ต้องเป็นตัวอักษร และช่องว่างเท่านั้น"},before:function(n,t){return n+" ต้องเป็นวันที่ก่อน "+t[0]},between:function(n,t){return n+" ต้องเป็นค่าระหว่าง "+t[0]+" และ "+t[1]},confirmed:function(n){return"การยืนยันข้อมูลของ "+n+" ไม่ตรงกัน"},credit_card:function(n){return"หมายเลขบัตรเครดิตของ "+n+" ไม่ถูกต้อง"},date_between:function(n,t){return"วันที่ "+n+" ต้องอยู่ระหว่าง "+t[0]+" และ "+t[1]},date_format:function(n,t){return"วันที่ "+n+" ต้องเป็นรูปแบบ "+t[0]},decimal:function(n,t){void 0===t&&(t=[]);var e=t[0];return void 0===e&&(e="*"),n+" ต้องเป็นตัวเลข และสามารถมีจุดทศนิยม "+("*"===e?"":e+" จุด")},digits:function(n,t){return n+" ต้องเป็นตัวเลขจำนวน "+t[0]+" หลักเท่านั้น"},dimensions:function(n,t){return n+" ต้องมีขนาด "+t[0]+"x"+t[1]+" px"},email:function(n){return n+" ต้องเป็นรูปแบบอีเมล"},excluded:function(n){return n+" ต้องเป็นค่าที่กำหนดเท่านั้น"},ext:function(n){return n+" สกุลไฟล์ไม่ถูกต้อง"},image:function(n){return n+" ต้องเป็นรูปภาพเท่านั้น"},included:function(n){return n+" ต้องเป็นค่าที่กำหนดเท่านั้น"},integer:function(n){return n+" ต้องเป็นเลขจำนวนเต็ม"},ip:function(n){return n+" ไม่ถูกต้องตามรูปแบบ IP address"},length:function(n,t){var e=t[0],r=t[1];return r?n+" ต้องมีความยาวระหว่าง "+e+" และ "+r:n+" ต้องมีความยาว "+e},max:function(n,t){return n+" ต้องมีความยาวไม่เกิน "+t[0]+" ตัวอักษร"},max_value:function(n,t){return n+" ต้องมีค่าไม่เกิน "+t[0]},mimes:function(n){return n+" ประเภทไฟล์ไม่ถูกต้อง"},min:function(n,t){return n+" ต้องมีความยาวอย่างน้อย "+t[0]+" ตัวอักษร"},min_value:function(n,t){return n+" ต้องมีค่าตั้งแต่ "+t[0]+" ขึ้นไป"},numeric:function(n){return n+" ต้องเป็นตัวเลขเท่านั้น"},regex:function(n){return"รูปแบบ "+n+" ไม่ถูกต้อง"},required:function(n){return"กรุณากรอก "+n},size:function(n,t){return n+" ต้องมีขนาดไฟล์ไม่เกิน "+function(n){var t=1024,e=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}(t[0])},url:function(n){return n+" ไม่ใช่รูปแบบของ URL ที่ถูกต้อง"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t}()}}]);