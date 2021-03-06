/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../search.pipe";
import * as i4 from "./main.component";
var styles_MainComponent = ["#ng-chat[_ngcontent-%COMP%] { position: fixed; z-index: 999; right: 0; bottom: 0; color: #5C5C5C; font-family: Arial, Helvetica, sans-serif; -webkit-box-sizing: initial; box-sizing: initial; font-size: 11pt; text-align: left; } #ng-chat-people[_ngcontent-%COMP%] { position: relative; width: 240px; height: 360px; border: 1px solid #A3A3A3; margin-right: 20px; background-color: #FFF; -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.25); box-shadow: 0 4px 8px rgba(0,0,0,.25); border-bottom: 0; } #ng-chat-people.ng-chat-people-collapsed[_ngcontent-%COMP%], .ng-chat-people-collapsed.ng-chat-window[_ngcontent-%COMP%] { height: 30px; } .ng-chat-title.shadowed[_ngcontent-%COMP%] { -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.25); box-shadow: 0 4px 8px rgba(0,0,0,.25); } .ng-chat-title[_ngcontent-%COMP%], .ng-chat-title[_ngcontent-%COMP%]:hover { position: relative; z-index: 2; height: 30px; line-height: 30px; font-size: 0.9em; padding: 0 10px; background-color: #FAFAFA; display: block; text-decoration: none; color: inherit; font-weight: 400; cursor: pointer; } #ng-chat-search_friend[_ngcontent-%COMP%] { display: block; padding: 7px 10px; margin: 0 auto; width: calc(100% - 20px); margin-top: 10px; font-size: 0.9em; -webkit-appearance: searchfield; } #ng-chat-users[_ngcontent-%COMP%] { padding: 0 10px; list-style: none; margin: 0; overflow: auto; position: absolute; top: 84px; bottom: 0; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; } #ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { clear: both; margin-bottom: 10px; overflow: hidden; cursor: pointer; max-height: 30px; } #ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], #ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > .icon-wrapper[_ngcontent-%COMP%] { float: left; margin-right: 5px; border-radius: 25px; } #ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { float: left; line-height: 30px; font-size: 0.8em; max-width: 57%; max-height: 30px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; } #ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > .ng-chat-user-status[_ngcontent-%COMP%] { float: right; } .ng-chat-user-status.online[_ngcontent-%COMP%] { background-color: #92A400; } .ng-chat-user-status.busy[_ngcontent-%COMP%] { background-color: #F91C1E; } .ng-chat-user-status.offline[_ngcontent-%COMP%] { background-color: #BABABA; } .ng-chat-user-status[_ngcontent-%COMP%] { border-radius: 25px; width: 8px; height: 8px; margin-top: 10px; }  .ng-chat-window[_ngcontent-%COMP%] { right: 260px; height: 360px; z-index: 999; bottom: 0; position: fixed; width: 300px; border: 1px solid #A3A3A3; border-bottom: 0; -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.25); box-shadow: 0 4px 8px rgba(0,0,0,.25); } .ng-chat-title[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { font-weight: 600; display: block; overflow: hidden; height: 30px; text-overflow: ellipsis; white-space: nowrap; max-width: 85%; float: left; } .ng-chat-title[_ngcontent-%COMP%]    > .ng-chat-user-status[_ngcontent-%COMP%] { float: left; margin-left: 5px; } .ng-chat-close[_ngcontent-%COMP%] { color: #5C5C5C; text-decoration: none; float: right; } .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%] { padding: 10px; height: calc(90% - 30px); -webkit-box-sizing: border-box; box-sizing: border-box; position: relative; overflow: auto; background-color: #FFF; } .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%] { clear: both; } .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { float: right; width: 65%; padding: 0; margin-top: 0; background-color: #E3E3E3; border-radius: 5px; padding: 10px; margin-top: 0; margin-bottom: 5px; font-size: 0.9em; word-wrap: break-word; } .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%]    > .icon-wrapper[_ngcontent-%COMP%] { position: absolute; left: 10px; border-radius: 25px; } .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message.ng-chat-message-received[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { float: left; margin-left: 40px; padding-top: 7px; padding-bottom: 7px; background-color: #FFF; border: 3px solid #E3E3E3; margin-top: 0; margin-bottom: 5px; } .ng-chat-window[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { font-size: 0.8em; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 5px; display: block; height: 35px; width: 100%; border: none; border-top: 1px solid #A3A3A3; } span.un-read-message[_ngcontent-%COMP%] { border-radius: 50%; padding: 3px 6px; background: #92a401; color: white; font-size: 9px; }"];
var RenderType_MainComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_MainComponent, data: {} });
export { RenderType_MainComponent as RenderType_MainComponent };
function View_MainComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "un-read-message"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.unread_message_count; _ck(_v, 1, 0, currVal_0); }); }
function View_MainComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 12, "li", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.peopleOnclick(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "img", [["alt", ""], ["class", "avatar"], ["height", "30"], ["width", "30"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(5, 0, null, null, 4, "strong", [], [[8, "title", 0]], null, null, null, null)), (_l()(), i0.ɵted(6, null, ["", " "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MainComponent_3)), i0.ɵdid(8, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(11, 0, null, null, 0, "span", [], [[8, "className", 0], [8, "title", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "]))], function (_ck, _v) { var currVal_3 = (_v.context.$implicit.unread_message_count != undefined); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.image; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_2); var currVal_4 = i0.ɵinlineInterpolate(1, "ng-chat-user-status ", _v.context.$implicit.status, ""); var currVal_5 = i0.ɵinlineInterpolate(1, "", _v.context.$implicit.name, ""); _ck(_v, 11, 0, currVal_4, currVal_5); }); }
function View_MainComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ng-chat-message"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", ""])), (_l()(), i0.ɵted(-1, null, [" "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.msg; _ck(_v, 3, 0, currVal_0); }); }
function View_MainComponent_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [["class", "ng-chat-message ng-chat-message-received"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(2, 0, null, null, 0, "img", [["alt", ""], ["class", "avatar"], ["height", "30"], ["width", "30"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵted(-1, null, [" "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selected_people.image; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.msg; _ck(_v, 5, 0, currVal_1); }); }
function View_MainComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MainComponent_6)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MainComponent_7)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, [" "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.type == "sent"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit.type == "received"); _ck(_v, 6, 0, currVal_1); }, null); }
function View_MainComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 36, "div", [["style", "right: 282px;"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(2, { "ng-chat-people-collapsed": 0, "ng-chat-window": 1 }), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(4, 0, null, null, 10, "div", [["class", "ng-chat-title"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.collapseIt("is_collapse2") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "strong", [["title", "Arya Stark"]], null, null, null, null, null)), (_l()(), i0.ɵted(7, null, [" ", " "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(9, 0, null, null, 0, "span", [], [[8, "className", 0], [8, "title", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(12, 0, null, null, 1, "a", [["class", "ng-chat-close"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeChat() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["X"])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(16, 0, null, null, 5, "div", [["class", "ng-chat-messages"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MainComponent_5)), i0.ɵdid(20, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(23, 0, null, null, 12, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 25).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 25).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendMessage() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(24, 16384, null, 0, i2.ɵbf, [], null, null), i0.ɵdid(25, 4210688, null, 0, i2.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i0.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i0.ɵdid(27, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(29, 0, [["message_box", 1]], null, 5, "input", [["class", ""], ["name", "message"], ["placeholder", "Type a message"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.message = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(30, 16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i0.ɵdid(32, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(34, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["  "])), (_l()(), i0.ɵted(-1, null, [" "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.is_collapse2, true); _ck(_v, 1, 0, currVal_0); var currVal_4 = _co.selected_people.messages; _ck(_v, 20, 0, currVal_4); var currVal_19 = "message"; var currVal_20 = _co.message; _ck(_v, 32, 0, currVal_19, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.selected_people.name; _ck(_v, 7, 0, currVal_1); var currVal_2 = i0.ɵinlineInterpolate(1, "ng-chat-user-status ", _co.selected_people.status, ""); var currVal_3 = _co.selected_people.status; _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_5 = i0.ɵnov(_v, 27).ngClassUntouched; var currVal_6 = i0.ɵnov(_v, 27).ngClassTouched; var currVal_7 = i0.ɵnov(_v, 27).ngClassPristine; var currVal_8 = i0.ɵnov(_v, 27).ngClassDirty; var currVal_9 = i0.ɵnov(_v, 27).ngClassValid; var currVal_10 = i0.ɵnov(_v, 27).ngClassInvalid; var currVal_11 = i0.ɵnov(_v, 27).ngClassPending; _ck(_v, 23, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = i0.ɵnov(_v, 34).ngClassUntouched; var currVal_13 = i0.ɵnov(_v, 34).ngClassTouched; var currVal_14 = i0.ɵnov(_v, 34).ngClassPristine; var currVal_15 = i0.ɵnov(_v, 34).ngClassDirty; var currVal_16 = i0.ɵnov(_v, 34).ngClassValid; var currVal_17 = i0.ɵnov(_v, 34).ngClassInvalid; var currVal_18 = i0.ɵnov(_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); }); }
function View_MainComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 33, "div", [["class", "my-chat"], ["id", "my-chat"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(2, 0, null, null, 30, "div", [["id", "ng-chat"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(4, 0, null, null, 23, "div", [["id", "ng-chat-people"]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(6, { "ng-chat-people-collapsed": 0 }), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(8, 0, null, null, 4, "a", [["class", "ng-chat-title shadowed"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.collapseIt("is_collapse") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" Friends "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(14, 0, null, null, 5, "input", [["class", "ng-untouched ng-pristine ng-valid"], ["id", "ng-chat-search_friend"], ["placeholder", "Search"], ["type", "search"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 15)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 15)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 15)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.search_people = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(15, 16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i0.ɵdid(17, 671744, null, 0, i2.NgModel, [[8, null], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(19, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵeld(21, 0, null, null, 5, "ul", [["id", "ng-chat-users"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_MainComponent_2)), i0.ɵdid(24, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵppd(25, 3), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MainComponent_4)), i0.ɵdid(31, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, [" "])), (_l()(), i0.ɵted(-1, null, [" "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 6, 0, _co.is_collapse); _ck(_v, 5, 0, currVal_0); var currVal_8 = _co.search_people; _ck(_v, 17, 0, currVal_8); var currVal_9 = i0.ɵunv(_v, 24, 0, _ck(_v, 25, 0, i0.ɵnov(_v.parent, 0), _co.peoples, "name", _co.search_people)); _ck(_v, 24, 0, currVal_9); var currVal_10 = (_co.selected_people != undefined); _ck(_v, 31, 0, currVal_10); }, function (_ck, _v) { var currVal_1 = i0.ɵnov(_v, 19).ngClassUntouched; var currVal_2 = i0.ɵnov(_v, 19).ngClassTouched; var currVal_3 = i0.ɵnov(_v, 19).ngClassPristine; var currVal_4 = i0.ɵnov(_v, 19).ngClassDirty; var currVal_5 = i0.ɵnov(_v, 19).ngClassValid; var currVal_6 = i0.ɵnov(_v, 19).ngClassInvalid; var currVal_7 = i0.ɵnov(_v, 19).ngClassPending; _ck(_v, 14, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
export function View_MainComponent_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i3.SearchPipe, []), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MainComponent_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.peoples != undefined); _ck(_v, 2, 0, currVal_0); }, null); }
export function View_MainComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "my-chat", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), i0.ɵdid(1, 114688, null, 0, i4.MainComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MainComponentNgFactory = i0.ɵccf("my-chat", i4.MainComponent, View_MainComponent_Host_0, { peoples: "peoples", current_user_id: "current_user_id", my_env: "my_env" }, { beforeSend: "beforeSend", afterSend: "afterSend", afterUserSelect: "afterUserSelect" }, []);
export { MainComponentNgFactory as MainComponentNgFactory };
//# sourceMappingURL=main.component.ngfactory.js.map