!function (e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var o = t[s] = {exports: {}, id: s, loaded: !1};
        return e[s].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
    }

    i.m = e, i.c = t, i.p = "/passport-node/20180827154234934/script/", i(0)
}([function (e, t, i) {
    "use strict";
    t.__esModule = !0, i(1);
    var s = i(4), o = i(7), r = i(14), a = i(15), n = i(17), l = i(18), d = i(20), c = i(22), u = i(8), g = i(19),
        h = function () {
            function e() {
                this.submitLock = !1, this.redirectUrl = u["default"].getUrlParam("redirectUrl"), 0 != s["default"].trim(this.redirectUrl).length && (s["default"](".sina").attr("href", s["default"](".sina").attr("href") + "?r=" + u["default"].setEncodeUrlParam(this.redirectUrl)), s["default"](".qq").attr("href", s["default"](".qq").attr("href") + "?r=" + u["default"].setEncodeUrlParam(this.redirectUrl)))
            }

            return e.prototype.bindEvent = function () {
                var e = this;
                this.reg_mobileTextbox = new o["default"]("reg_mobile"), this.reg_mobileTextbox.onValidFunction = this.validateMobile.bind(this), this.reg_mobileTextbox.setPlaceHolderText("常用手机号"), this.reg_password = new o["default"]("reg_password"), this.reg_password.setPlaceHolderText("密码 (6-20位字母与数字、符号组合)");
                var t = new d.PasswordControl("reg_password", "levelDiv", "showPwdBtn ");
                t.validationCallback = function (e) {
                    p.validPassWord(e)
                }, this.reg_imgVcodeControl = new n["default"]("vcodeRegion"), this.reg_imgVcodeControl.showVCode(), this.reg_imgVcodeTextbox = new o["default"]("reg_vcode"), this.reg_imgVcodeTextbox.onValidFunction = this.validVcode.bind(this), this.reg_imgVcodeTextbox.setPlaceHolderText(r["default"].VCODE_TEXT_TIP), this.reg_smsVcodeControl = new c["default"]("reg_smscodeBtn", "reg_mobile", "reg_vcode"), this.reg_smsVcodeControl.setBusinessType(1), this.reg_smsVcodeControl.onValidFunction = this.onValidBeforeSendSmsCode.bind(this), this.reg_smsVcodeControl.imgVcodeFailCallback = this.imgVcodeFailCallback.bind(this), this.reg_smsVcodeControl.mobileValidFailCallback = this.mobileValidFailCallback.bind(this), this.reg_smsVcodeTextbox = new o["default"]("reg_smscode"), this.reg_smsVcodeTextbox.setPlaceHolderText("短信验证码"), this.reg_checkbox = s["default"](".reg_checkbox"), this.reg_hidSexValue = s["default"]("#hidSexValue"), this.reg_sexErrorMsg = s["default"]("#sexErrorMsg"), this.reg_checkbox.on("click", function (e) {
                    this.reg_checkbox.removeClass("on"), s["default"](e.target).addClass("on"), this.reg_hidSexValue.val(s["default"](e.target).attr("data-sex"))
                }.bind(this)), this.reg_policy = s["default"]("#reg_policy"), this.reg_policy.on("click", function () {
                    this.reg_policy.hasClass("on") ? this.reg_policy.removeClass("on") : this.reg_policy.addClass("on")
                }.bind(this)), this.reg_mobileRegisterBtn = s["default"]("#mobileRegisterBtn"), this.reg_mobileRegisterBtn.on("click", function () {
                    if (this.regClear(), p.validPolicy()) {
                        var e = p.validateMobile(this.reg_mobileTextbox.getInputValue()),
                            i = p.validPassWord(t.onValidPassword()), o = p.validVcode(), a = p.validSmsCode(),
                            n = p.validSet();
                        if (e && i && o && a && n) {
                            if (this.submitLock) return;
                            this.submitLock = !0, s["default"].ajax({
                                type: "POST",
                                url: "/member/mobileRegister",
                                data: {
                                    reg_mobile: this.reg_mobileTextbox.getInputValue(),
                                    reg_password: u["default"].md5(this.reg_password.getInputValue()),
                                    reg_vsmscode: this.reg_smsVcodeTextbox.getInputValue(),
                                    reg_vsmscodeId: this.reg_smsVcodeControl.getSmsCodeId(),
                                    reg_sex: this.reg_hidSexValue.val()
                                },
                                success: function (e) {
                                    if (e.result) if (e.result.success) 0 != s["default"].trim(this.redirectUrl).length ? this.$redirect(this.redirectUrl) : this.$redirect(e.defaultredirectUrl); else switch (e.result.code) {
                                        case r["default"].NICK_MOBILE_EMAIL_EXIST:
                                            this.reg_mobileTextbox.showErrTip(r["default"].duplicateMobileMessage);
                                            break;
                                        case r["default"].MOBILE_ERROR:
                                            this.reg_mobileTextbox.showErrTip(r["default"].errorMobileMessage);
                                            break;
                                        case r["default"].VERIFICATION_CODE_ERROR:
                                            this.reg_smsVcodeTextbox.showErrTip(r["default"].errorSmsMessage);
                                            break;
                                        case r["default"].VERIFICATION_CODE_TIMEEXPIRE_ERROR:
                                            this.reg_smsVcodeTextbox.showErrTip(r["default"].registerFailureVcodeMessage);
                                            break;
                                        case r["default"].SERVER_ERROR:
                                            this.$alert(r["default"].errorMessage);
                                            break;
                                        case r["default"].REGISTER_FREQUENTLY_ERROR:
                                            this.$alert(r["default"].rigsterFrequentlyMessage)
                                    } else this.$alert(r["default"].errorMessage);
                                    this.submitLock = !1
                                }.bind(this),
                                error: function () {
                                    this.submitLock = !1
                                }
                            })
                        }
                    }
                }.bind(this)), this.login_EmailText = new o["default"]("loginEmailText"), this.login_EmailText.setPlaceHolderText("输入邮箱 / 手机号码"), this.login_PasswordText = new o["default"]("loginPasswordText"), this.login_PasswordText.setPlaceHolderText("请输入密码"), this.login_imgVcodeControl = new n["default"]("login_vcodeRegion"), this.login_imgVcodeTextbox = new o["default"]("login_vcode"), this.login_imgVcodeTextbox.onValidFunction = this.validLoginVcode.bind(this), this.login_imgVcodeTextbox.setPlaceHolderText(r["default"].VCODE_TEXT_TIP), this.login_vcode_hidden = s["default"]("#login_vcode_hidden"), this.login_isAutoSign = s["default"]("#isAutoSign"), this.cookieloginEmail = "loginEmail", this.login_cookieEmailText = s["default"].cookie(this.cookieloginEmail), null != this.login_cookieEmailText && "" != this.login_cookieEmailText.toString() && (this.login_EmailText.setInputValue(this.login_cookieEmailText.toString()), this.login_isAutoSign.addClass("on")), this.login_isAutoSign.on("click", function () {
                    this.login_isAutoSign.hasClass("on") ? this.login_isAutoSign.removeClass("on") : this.login_isAutoSign.addClass("on")
                }.bind(this)), this.login_forget_password = s["default"]("#forget_password"), this.login_forget_password.on("click", function () {
                    g["default"].validMobile(this.login_EmailText.getInputValue()) ? l["default"].jumpPhoneFindPwd(this.login_EmailText.getInputValue()) : g["default"].validEmail(this.login_EmailText.getInputValue()) ? l["default"].jumpEmailFindPwd(this.login_EmailText.getInputValue()) : l["default"].jumpPhoneFindPwd("")
                }.bind(this)), this.login_errtxt = s["default"]("#login_errtxt"), this.login_loginButton = s["default"]("#loginButton"), this.login_loginButton.on("click", function () {
                    this.loginClear();
                    var e = !0;
                    "" == this.login_EmailText.getInputValue() ? (this.login_EmailText.showErrTip(r["default"].registerEmptyAccountMessage), e = !1) : this.login_EmailText.clearErrTip(), "" == this.login_PasswordText.getInputValue() ? (this.login_PasswordText.showErrTip(r["default"].emptyPasswordMessage), e = !1) : this.login_PasswordText.clearErrTip(), p.validLoginVcode() || (e = !1), e && s["default"].ajax({
                        type: "POST",
                        url: "/member/signinLogin",
                        data: {
                            loginEmailText: this.login_EmailText.getInputValue(),
                            loginPasswordText: u["default"].md5(this.login_PasswordText.getInputValue()),
                            vcodeId: this.login_imgVcodeControl.getVCodeId(),
                            inputVcode: this.login_imgVcodeTextbox.getInputValue(),
                            isvcode: this.login_vcode_hidden.is(":hidden"),
                            isAutoSign: this.login_isAutoSign.hasClass("on")
                        },
                        success: function (e) {
                            if (e.imgVcodeSuccess) if (e.result) if (e.result.success) if (this.login_isAutoSign.hasClass("on") ? s["default"].cookie(this.cookieloginEmail, this.login_EmailText.getInputValue()) : s["default"].cookie(this.cookieloginEmail, ""), null === e.isBindMobile) this.$alert(r["default"].errorMessage); else if (e.isBindMobile) {
                                var t = e.defaultredirectUrl;
                                0 != s["default"].trim(this.redirectUrl).length && (t = t + "?redirectUrl=" + u["default"].setEncodeUrlParam(this.redirectUrl)), window.location.href = t
                            } else 0 != s["default"].trim(this.redirectUrl).length ? window.location.href = this.redirectUrl : window.location.href = e.defaultredirectUrl; else {
                                switch (e.result.code) {
                                    case r["default"].USER_NOT_EXIST:
                                    case r["default"].PASSWORD_ERROR:
                                    case r["default"].USER_STATUS_SHIELDED:
                                        this.loginPrompt(r["default"].registerErrorLoginMessage);
                                        break;
                                    case r["default"].USER_STATUS_LOCK:
                                        this.loginPrompt(r["default"].lockMessage);
                                        break;
                                    case r["default"].USER_STATUS_INVALID:
                                        this.loginPrompt(r["default"].registerErrorLoginMessage);
                                        break;
                                    case r["default"].USER_STATUS_SECURITYRISK:
                                        this.loginPrompt(r["default"].securityRisksMessage);
                                        break;
                                    case r["default"].USER_STATUS_NEEDRESETPASSWORD:
                                        this.loginPrompt(r["default"].toResetYourPasswordMessage);
                                        break;
                                    case r["default"].SERVER_ERROR:
                                        this.loginPrompt(r["default"].errorMessage)
                                }
                                e.loginCount >= 3 && (this.login_imgVcodeControl.showVCode(), this.login_vcode_hidden.show())
                            } else this.$alert(r["default"].errorMessage); else this.login_imgVcodeTextbox.showErrTip(r["default"].errorVcodeMessage), this.login_imgVcodeControl.showVCode()
                        }.bind(this)
                    })
                }.bind(this)), this.reg_smsLoginIpt = new o["default"]("smsLoginIpt"), this.reg_smsLoginIpt.onValidFunction = this.validLoginMobile.bind(this), this.reg_smsLoginIpt.setPlaceHolderText("请输入手机号"), this.reg_smsImageIpt = new o["default"]("smsImageIpt"), this.reg_smsImageIpt.setPlaceHolderText(r["default"].VCODE_TEXT_TIP), this.reg_smsIpt = new o["default"]("smsIpt"), this.reg_smsIpt.setPlaceHolderText("短信验证码"), this.reg_smsGet = s["default"]("#smsGet"), this.reg_smsGet.on("click", function () {
                    var t = s["default"]("#constScript").data("sitedomain"), i = e.reg_smsLoginIpt.getInputValue(),
                        o = e.reg_smsLoginImgvcode.getVCodeId(), a = e.reg_smsImageIpt.getInputValue();
                    e.validLoginMobile() && e.imageVcodeCheck() && !e.reg_smsGet.hasClass("no-work") && s["default"].ajax({
                        url: "https://service" + t + "/Service/Manager.msi",
                        dataType: "script",
                        type: "get",
                        crossDomain: !0,
                        cache: !1,
                        data: {
                            Ajax_CallBack: !0,
                            Ajax_CallBackType: "Mtime.Service.Pages.ManagerService",
                            Ajax_CallBackMethod: "SendSmsLoginCode",
                            Ajax_CrossDomain: 1,
                            Ajax_RequestUrl: encodeURIComponent(location.href),
                            t: (new Date).getTime(),
                            Ajax_CallBackArgument0: i,
                            Ajax_CallBackArgument1: o,
                            Ajax_CallBackArgument2: a
                        },
                        success: function (t) {
                            var i = window.sendSmsLoginCodeResult;
                            if (i.value && i.value.success) {
                                e.reg_smsGet.addClass("no-work"), e.reg_smsGet.attr("data-smscodeid", i.value.smsCodeId), e.reg_smsImageIpt.clearErrTip();
                                var s = 60, o = setInterval(function () {
                                    s ? (e.reg_smsGet[0].innerHTML = s + "s重新获取", s--) : (clearInterval(o), e.reg_smsGet[0].innerHTML = "重新获取", e.reg_smsGet.removeClass("no-work"))
                                }, 1e3)
                            } else i.value && i.value.errCode == r["default"].CODE_OUTOF_LIMIT_CONFIG_DAY || i.value.errCode == r["default"].CODE_OUTOF_LIMIT_CONFIG_HOUR ? e.reg_smsImageIpt.showErrTip(r["default"].oftenSmsMessage) : e.reg_smsImageIpt.showErrTip(r["default"].errorVcodeMessage), e.reg_smsLoginImgvcode.showVCode()
                        }
                    })
                }), this.reg_smsLoginImgvcode = new n["default"]("smsLoginImgvcode"), this.reg_smsLoginImgvcode.showVCode(), this.reg_smsLoginButton = s["default"]("#smsLoginButton"), this.reg_smsLoginButton.on("click", function () {
                    var t = s["default"]("#constScript").data("sitedomain");
                    e.reg_smsLoginIpt.getInputValue();
                    e.validLoginMobile() && e.imageVcodeCheck() && e.smsVcodeCheck() && s["default"].ajax({
                        url: "https://service" + t + "/Service/Manager.msi",
                        dataType: "script",
                        type: "get",
                        crossDomain: !0,
                        cache: !1,
                        data: {
                            Ajax_CallBack: !0,
                            Ajax_CallBackType: "Mtime.Service.Pages.ManagerService",
                            Ajax_CallBackMethod: "SignInBySms",
                            Ajax_CrossDomain: 1,
                            Ajax_RequestUrl: encodeURIComponent(location.href),
                            t: (new Date).getTime(),
                            Ajax_CallBackArgument0: e.reg_smsLoginIpt.getInputValue(),
                            Ajax_CallBackArgument1: e.reg_smsGet.data("smscodeid") || 0,
                            Ajax_CallBackArgument2: s["default"]("#smsIpt").val(),
                            Ajax_CallBackArgument3: !0,
                            Ajax_CallBackArgument4: !0,
                            Ajax_CallBackArgument5: e.reg_smsLoginImgvcode.getVCodeId(),
                            Ajax_CallBackArgument6: s["default"]("#smsImageIpt").val()
                        },
                        success: function (t) {
                            var i = window.signInBySmsResult;
                            if (i.value.success) if (0 != s["default"].trim(e.redirectUrl).length) window.location.href = e.redirectUrl; else {
                                var o = i.defaultredirectUrl || "http://www.mtime.com";
                                window.location.href = o
                            } else 0 == i.value.vcodeValid && (e.reg_smsImageIpt.showErrTip(r["default"].errorVcodeMessage), e.reg_smsLoginImgvcode.showVCode()), 0 == i.value.smsCodeValid && e.reg_smsIpt.showErrTip(r["default"].errorSmsMessage)
                        }
                    })
                }), this.reg_loginWayChange = s["default"]('[data-login="loginWayChange"]'), this.reg_loginWayChange.on("click", function (t) {
                    t.preventDefault(), e.loginForm = s["default"]("#loginForm"), "none" != e.loginForm.css("display") ? (s["default"]("#smsLoginBox").show(), e.loginForm.hide()) : "none" == e.loginForm.css("display") && (e.loginForm.show(), s["default"]("#smsLoginBox").hide())
                })
            }, e.prototype.onValidBeforeSendSmsCode = function () {
                return !!this.validateMobile(this.reg_mobileTextbox.getInputValue()) && !!this.reg_imgVcodeTextbox.onValid()
            }, e.prototype.imgVcodeFailCallback = function () {
                this.reg_imgVcodeTextbox.showErrTip(r["default"].errorVcodeMessage), this.reg_imgVcodeControl.showVCode()
            }, e.prototype.mobileValidFailCallback = function () {
                this.reg_mobileTextbox.showErrTip(r["default"].duplicateMobileMessage)
            }, e.prototype.validateMobile = function (e, t) {
                var i = this;
                return void 0 === t && (t = !1), 0 === s["default"].trim(e).length ? (this.reg_mobileTextbox.showErrTip(r["default"].emptyMobileMessage), !1) : g["default"].validMobile(e) ? t ? void g["default"].checkMobileHasRegisted(e, function (e) {
                    return e ? (i.reg_mobileTextbox.showErrTip(r["default"].duplicateMobileMessage), !1) : (i.reg_mobileTextbox.clearErrTip(), !0)
                }) : (this.reg_mobileTextbox.clearErrTip(), !0) : (this.reg_mobileTextbox.showErrTip(r["default"].errorMobileMessage), !1)
            }, e.prototype.validPassWord = function (e) {
                var t;
                switch (e) {
                    case d.PasswordValidResult.Fail_Empty:
                        this.reg_password.showErrTip(r["default"].emptyPasswordMessage), t = !1;
                        break;
                    case d.PasswordValidResult.Fail_WrongFormat:
                        this.reg_password.showErrTip(r["default"].errorPasswordMessage), t = !1;
                        break;
                    case d.PasswordValidResult.Fail_ContainSpaceOrChinese:
                        this.reg_password.showErrTip(r["default"].blankPasswordMessage), t = !1;
                        break;
                    case d.PasswordValidResult.Fail_LowLevel:
                        this.reg_password.showErrTip(r["default"].strengthPasswordMessage), t = !1;
                        break;
                    case d.PasswordValidResult.Success:
                        this.reg_password.clearErrTip(), t = !0
                }
                return t
            }, e.prototype.validVcode = function () {
                return this.loginForm = s["default"]("#loginForm"), "none" != this.loginForm.css("display") ? "" == this.reg_imgVcodeTextbox.getInputValue() ? (this.reg_imgVcodeTextbox.showErrTip(r["default"].emptyVcodeMessage), !1) : (this.reg_imgVcodeTextbox.clearErrTip(), !0) : "none" == this.loginForm.css("display") ? "" == this.reg_smsImageIpt.getInputValue() ? (this.reg_smsImageIpt.showErrTip(r["default"].emptyVcodeMessage), !1) : (this.reg_smsImageIpt.clearErrTip(), !0) : void 0
            }, e.prototype.validSmsCode = function () {
                return "" == this.reg_smsVcodeTextbox.getInputValue() ? (this.reg_smsVcodeTextbox.showErrTip(r["default"].emptySmsMessage), !1) : (this.reg_smsVcodeTextbox.clearErrTip(), !0)
            }, e.prototype.validSet = function () {
                return this.reg_checkbox.hasClass("on") ? (this.reg_sexErrorMsg.hide(), !0) : (this.reg_sexErrorMsg.show(), !1)
            }, e.prototype.validPolicy = function () {
                if (this.reg_policy.hasClass("on")) return !0;
                var e = '<p class="notice">' + r["default"].registerRuleMessage + "</p>";
                return new a["default"](window, {
                    c: e,
                    b: '\n            <div class="m-popbtn">\n                <a data-dialog="bsk" class="btnblue">确 定</a>\n            </div>'
                }), !1
            }, e.prototype.validLoginMobile = function () {
                if (this.loginForm = s["default"]("#loginForm"), "none" != this.loginForm.css("display")) return "" == this.login_EmailText.getInputValue() ? (this.login_EmailText.showErrTip(r["default"].registerEmptyAccountMessage), !1) : g["default"].validMobile(this.login_EmailText.getInputValue()) || g["default"].validEmail(this.login_EmailText.getInputValue()) ? (this.login_EmailText.clearErrTip(), !0) : (this.login_EmailText.showErrTip(r["default"].registerErrorAccountMessage), !1);
                if ("none" == this.loginForm.css("display")) {
                    var e = this.reg_smsLoginIpt.getInputValue();
                    return e ? g["default"].validMobile(e) ? (this.reg_smsLoginIpt.clearErrTip(), !0) : (this.reg_smsLoginIpt.showErrTip(r["default"].errorMobileMessage), !1) : (this.reg_smsLoginIpt.showErrTip(r["default"].registerEmptySMSMessage), !1)
                }
            }, e.prototype.imageVcodeCheck = function () {
                var e = this.reg_smsImageIpt.getInputValue();
                return e ? this.validLoginMobile() && !/[0-9a-zA-Z]{4}$/.test(e) ? (this.reg_smsImageIpt.showErrTip(r["default"].errorVcodeMessage), !1) : (this.reg_smsImageIpt.clearErrTip(), !0) : (this.reg_smsImageIpt.showErrTip(r["default"].emptyVcodeMessage), !1)
            }, e.prototype.smsVcodeCheck = function () {
                var e = this.reg_smsIpt.getInputValue();
                return e ? this.validLoginMobile() && !/[0-9a-zA-Z]$/.test(e) ? (this.reg_smsIpt.showErrTip(r["default"].errorVcodeMessage), !1) : (this.reg_smsIpt.clearErrTip(), !0) : (this.reg_smsIpt.showErrTip(r["default"].emptySmsMessage), !1)
            }, e.prototype.validLoginPassword = function () {
                return "" == this.login_PasswordText.getInputValue() ? (this.login_PasswordText.showErrTip(r["default"].emptyPasswordMessage), !1) : g["default"].validPassword(this.login_PasswordText.getInputValue()) ? (this.login_PasswordText.clearErrTip(), !0) : (this.login_PasswordText.showErrTip(r["default"].registerErrorPasswordMessage), !1)
            }, e.prototype.validLoginVcode = function () {
                return !!this.login_vcode_hidden.is(":hidden") || ("" == this.login_imgVcodeTextbox.getInputValue() ? (this.login_imgVcodeTextbox.showErrTip(r["default"].emptyVcodeMessage), !1) : (this.login_imgVcodeTextbox.clearErrTip(), !0))
            }, e.prototype.loginPrompt = function (e) {
                this.login_errtxt.text(e), this.login_errtxt.show()
            }, e.prototype.loginClear = function () {
                this.login_EmailText.clearErrTip(), this.login_PasswordText.clearErrTip(), this.login_imgVcodeTextbox.clearErrTip(), this.login_errtxt.text(""), this.login_errtxt.hide()
            }, e.prototype.regClear = function () {
                this.reg_mobileTextbox.clearErrTip(), this.reg_password.clearErrTip(), this.reg_imgVcodeTextbox.clearErrTip(), this.reg_smsVcodeTextbox.clearErrTip(), this.reg_sexErrorMsg.hide()
            }, e.prototype.$alert = function (e) {
                var t = '<p class="notice">' + e + "</p>";
                new a["default"](window, {
                    c: t,
                    b: '<div class="m-popbtn"><a data-dialog="bsk" class="btnblue">确 定</a></div>'
                })
            }, e.prototype.$redirect = function (e) {
                this.url = e, new a["default"](window, {
                    c: '<p class="notice">注册完成，开启您的电影之旅！</p>',
                    b: '<div class="m-popbtn"><a data-dialog="bsk" class="btnblue">确 定</a></div>',
                    bse: this.PopupAction.bind(this),
                    x: !1
                })
            }, e.prototype.PopupAction = function () {
                window.location.href = this.url, s["default"]('[data-dialog="layout"]').remove(), s["default"]('[data-dialog="bback"]').remove()
            }, e
        }();
    t["default"] = h;
    var p = new h;
    p.bindEvent()
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0, i(2);
    var s = i(4), o = window;
    s["default"].ajaxSetup({
        async: !0, error: function () {
        }
    }), o.$ = s["default"], o.jQuery = s["default"], "undefined" == typeof Function.prototype.bind && (Function.prototype.bind = function (e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), i = this, s = function () {
        }, o = function () {
            return i.apply(this instanceof s && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
        return s.prototype = this.prototype, o.prototype = new s, o
    })
}, function (e, t, i) {
    e.exports = i(3)(2)
}, function (e, t) {
    e.exports = mtimeVendor
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0, i(2);
    var s = i(5);
    s.prototype.name = "MtimejQuery", s.ajaxSetup({
        async: !0, cache: !1, error: function () {
        }
    });
    var o = window;
    o.$ = s, o.jQuery = s, t["default"] = s
}, function (e, t, i) {
    e.exports = i(3)(1)
}, , function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(4), o = i(8), r = function () {
        function e(e) {
            this.placeHolderText = "", this.inputObj = s["default"]("#" + e), this.isExist() && (this.errTipObj = this.inputObj.next("p")), this.initEvent()
        }

        return e.prototype.initEvent = function () {
            var e = this;
            this.isExist() && (this.inputObj.click(function () {
                e.onFocusInputObj()
            }), this.inputObj.blur(function () {
                e.onBlurInputObj()
            }))
        }, e.prototype.onFocusInputObj = function () {
            this.inputObj.parent("div").removeClass("reg_err"), this.inputObj.parent("div").addClass("reg_focus"), this.inputObj.attr("placeholder", "")
        }, e.prototype.onBlurInputObj = function () {
            this.inputObj.parent("div").removeClass("reg_focus"), this.inputObj.attr("placeholder", this.placeHolderText), this.onValidFunction && this.onValidFunction(this.getInputValue(), !0)
        }, e.prototype.isExist = function () {
            return this.inputObj.length > 0
        }, e.prototype.setPlaceHolderText = function (e) {
            this.placeHolderText = e, this.inputObj.length > 0 && this.inputObj.attr("placeholder", e)
        }, e.prototype.showErrTip = function (e) {
            this.errTipObj.html(e), this.inputObj.length > 0 && this.inputObj.parent("div").addClass("reg_err")
        }, e.prototype.clearErrTip = function () {
            this.errTipObj.html(""), this.inputObj.length > 0 && this.inputObj.parent("div").removeClass("reg_err")
        }, e.prototype.getInputValue = function () {
            return this.inputObj.length > 0 ? this.inputObj.val() : null
        }, e.prototype.getMd5InputValue = function () {
            return this.isExist() ? o["default"].md5(this.getInputValue()) : null
        }, e.prototype.setInputValue = function (e) {
            this.inputObj.length > 0 && this.inputObj.val(e)
        }, e.prototype.onValid = function (e) {
            return void 0 === e && (e = !1), !this.onValidFunction || this.onValidFunction(this.getInputValue(), e)
        }, e
    }();
    t["default"] = r
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(9), o = i(10), r = function () {
        function e() {
        }

        return e.getByteLength = function (e) {
            return e.replace(/[^\x00-\xff]/g, "xx").length
        }, e.getUrlParam = function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(t);
            return null != i ? decodeURIComponent(i[2]) : null
        }, e.setEncodeUrlParam = function (e) {
            return encodeURIComponent(e)
        }, e.getNotDecodeUrlParam = function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(t);
            return null != i ? i[2] : null
        }, e.isEmpty = function (e) {
            return null == e || "" == e || undefined == e || "undefined" == e
        }, e.base64Encode = function (e) {
            return s["default"].encode(e)
        }, e.base64Decode = function (e) {
            return s["default"].decode(e)
        }, e.md5 = function (e) {
            return o(e)
        }, e
    }();
    t["default"] = r
}, function (e, t) {
    "use strict";
    t.__esModule = !0;
    var i = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
            var t, s, o, r, a, n, l, d = "", c = 0;
            for (e = i._utf8_encode(e); c < e.length;) r = (t = e.charCodeAt(c++)) >> 2, a = (3 & t) << 4 | (s = e.charCodeAt(c++)) >> 4, n = (15 & s) << 2 | (o = e.charCodeAt(c++)) >> 6, l = 63 & o, isNaN(s) ? n = l = 64 : isNaN(o) && (l = 64), d = d + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(n) + this._keyStr.charAt(l);
            return d
        }, decode: function (e) {
            var t, s, o, r, a, n, l = "", d = 0;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < e.length;) t = this._keyStr.indexOf(e.charAt(d++)) << 2 | (r = this._keyStr.indexOf(e.charAt(d++))) >> 4, s = (15 & r) << 4 | (a = this._keyStr.indexOf(e.charAt(d++))) >> 2, o = (3 & a) << 6 | (n = this._keyStr.indexOf(e.charAt(d++))), l += String.fromCharCode(t), 64 != a && (l += String.fromCharCode(s)), 64 != n && (l += String.fromCharCode(o));
            return l = i._utf8_decode(l)
        }, _utf8_encode: function (e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", i = 0; i < e.length; i++) {
                var s = e.charCodeAt(i);
                s < 128 ? t += String.fromCharCode(s) : s > 127 && s < 2048 ? (t += String.fromCharCode(s >> 6 | 192), t += String.fromCharCode(63 & s | 128)) : (t += String.fromCharCode(s >> 12 | 224), t += String.fromCharCode(s >> 6 & 63 | 128), t += String.fromCharCode(63 & s | 128))
            }
            return t
        }, _utf8_decode: function (e) {
            for (var t = "", i = 0, s = 0, o = 0, r = 0; i < e.length;) (s = e.charCodeAt(i)) < 128 ? (t += String.fromCharCode(s), i++) : s > 191 && s < 224 ? (o = e.charCodeAt(i + 1), t += String.fromCharCode((31 & s) << 6 | 63 & o), i += 2) : (o = e.charCodeAt(i + 1), r = e.charCodeAt(i + 2), t += String.fromCharCode((15 & s) << 12 | (63 & o) << 6 | 63 & r), i += 3);
            return t
        }
    };
    t["default"] = i
}, function (e, t, i) {
    var s, o, r, a, n;
    s = i(11), o = i(12).utf8, r = i(13), a = i(12).bin, (n = function (e, t) {
        e.constructor == String ? e = t && "binary" === t.encoding ? a.stringToBytes(e) : o.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
        for (var i = s.bytesToWords(e), l = 8 * e.length, d = 1732584193, c = -271733879, u = -1732584194, g = 271733878, h = 0; h < i.length; h++) i[h] = 16711935 & (i[h] << 8 | i[h] >>> 24) | 4278255360 & (i[h] << 24 | i[h] >>> 8);
        i[l >>> 5] |= 128 << l % 32, i[14 + (l + 64 >>> 9 << 4)] = l;
        var p = n._ff, f = n._gg, _ = n._hh, m = n._ii;
        for (h = 0; h < i.length; h += 16) {
            var v = d, b = c, E = u, w = g;
            c = m(c = m(c = m(c = m(c = _(c = _(c = _(c = _(c = f(c = f(c = f(c = f(c = p(c = p(c = p(c = p(c, u = p(u, g = p(g, d = p(d, c, u, g, i[h + 0], 7, -680876936), c, u, i[h + 1], 12, -389564586), d, c, i[h + 2], 17, 606105819), g, d, i[h + 3], 22, -1044525330), u = p(u, g = p(g, d = p(d, c, u, g, i[h + 4], 7, -176418897), c, u, i[h + 5], 12, 1200080426), d, c, i[h + 6], 17, -1473231341), g, d, i[h + 7], 22, -45705983), u = p(u, g = p(g, d = p(d, c, u, g, i[h + 8], 7, 1770035416), c, u, i[h + 9], 12, -1958414417), d, c, i[h + 10], 17, -42063), g, d, i[h + 11], 22, -1990404162), u = p(u, g = p(g, d = p(d, c, u, g, i[h + 12], 7, 1804603682), c, u, i[h + 13], 12, -40341101), d, c, i[h + 14], 17, -1502002290), g, d, i[h + 15], 22, 1236535329), u = f(u, g = f(g, d = f(d, c, u, g, i[h + 1], 5, -165796510), c, u, i[h + 6], 9, -1069501632), d, c, i[h + 11], 14, 643717713), g, d, i[h + 0], 20, -373897302), u = f(u, g = f(g, d = f(d, c, u, g, i[h + 5], 5, -701558691), c, u, i[h + 10], 9, 38016083), d, c, i[h + 15], 14, -660478335), g, d, i[h + 4], 20, -405537848), u = f(u, g = f(g, d = f(d, c, u, g, i[h + 9], 5, 568446438), c, u, i[h + 14], 9, -1019803690), d, c, i[h + 3], 14, -187363961), g, d, i[h + 8], 20, 1163531501), u = f(u, g = f(g, d = f(d, c, u, g, i[h + 13], 5, -1444681467), c, u, i[h + 2], 9, -51403784), d, c, i[h + 7], 14, 1735328473), g, d, i[h + 12], 20, -1926607734), u = _(u, g = _(g, d = _(d, c, u, g, i[h + 5], 4, -378558), c, u, i[h + 8], 11, -2022574463), d, c, i[h + 11], 16, 1839030562), g, d, i[h + 14], 23, -35309556), u = _(u, g = _(g, d = _(d, c, u, g, i[h + 1], 4, -1530992060), c, u, i[h + 4], 11, 1272893353), d, c, i[h + 7], 16, -155497632), g, d, i[h + 10], 23, -1094730640), u = _(u, g = _(g, d = _(d, c, u, g, i[h + 13], 4, 681279174), c, u, i[h + 0], 11, -358537222), d, c, i[h + 3], 16, -722521979), g, d, i[h + 6], 23, 76029189), u = _(u, g = _(g, d = _(d, c, u, g, i[h + 9], 4, -640364487), c, u, i[h + 12], 11, -421815835), d, c, i[h + 15], 16, 530742520), g, d, i[h + 2], 23, -995338651), u = m(u, g = m(g, d = m(d, c, u, g, i[h + 0], 6, -198630844), c, u, i[h + 7], 10, 1126891415), d, c, i[h + 14], 15, -1416354905), g, d, i[h + 5], 21, -57434055), u = m(u, g = m(g, d = m(d, c, u, g, i[h + 12], 6, 1700485571), c, u, i[h + 3], 10, -1894986606), d, c, i[h + 10], 15, -1051523), g, d, i[h + 1], 21, -2054922799), u = m(u, g = m(g, d = m(d, c, u, g, i[h + 8], 6, 1873313359), c, u, i[h + 15], 10, -30611744), d, c, i[h + 6], 15, -1560198380), g, d, i[h + 13], 21, 1309151649), u = m(u, g = m(g, d = m(d, c, u, g, i[h + 4], 6, -145523070), c, u, i[h + 11], 10, -1120210379), d, c, i[h + 2], 15, 718787259), g, d, i[h + 9], 21, -343485551), d = d + v >>> 0, c = c + b >>> 0, u = u + E >>> 0, g = g + w >>> 0
        }
        return s.endian([d, c, u, g])
    })._ff = function (e, t, i, s, o, r, a) {
        var n = e + (t & i | ~t & s) + (o >>> 0) + a;
        return (n << r | n >>> 32 - r) + t
    }, n._gg = function (e, t, i, s, o, r, a) {
        var n = e + (t & s | i & ~s) + (o >>> 0) + a;
        return (n << r | n >>> 32 - r) + t
    }, n._hh = function (e, t, i, s, o, r, a) {
        var n = e + (t ^ i ^ s) + (o >>> 0) + a;
        return (n << r | n >>> 32 - r) + t
    }, n._ii = function (e, t, i, s, o, r, a) {
        var n = e + (i ^ (t | ~s)) + (o >>> 0) + a;
        return (n << r | n >>> 32 - r) + t
    }, n._blocksize = 16, n._digestsize = 16, e.exports = function (e, t) {
        if (e === undefined || null === e) throw new Error("Illegal argument " + e);
        var i = s.wordsToBytes(n(e, t));
        return t && t.asBytes ? i : t && t.asString ? a.bytesToString(i) : s.bytesToHex(i)
    }
}, function (e, t) {
    var i, s;
    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = {
        rotl: function (e, t) {
            return e << t | e >>> 32 - t
        }, rotr: function (e, t) {
            return e << 32 - t | e >>> t
        }, endian: function (e) {
            if (e.constructor == Number) return 16711935 & s.rotl(e, 8) | 4278255360 & s.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = s.endian(e[t]);
            return e
        }, randomBytes: function (e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
        }, bytesToWords: function (e) {
            for (var t = [], i = 0, s = 0; i < e.length; i++, s += 8) t[s >>> 5] |= e[i] << 24 - s % 32;
            return t
        }, wordsToBytes: function (e) {
            for (var t = [], i = 0; i < 32 * e.length; i += 8) t.push(e[i >>> 5] >>> 24 - i % 32 & 255);
            return t
        }, bytesToHex: function (e) {
            for (var t = [], i = 0; i < e.length; i++) t.push((e[i] >>> 4).toString(16)), t.push((15 & e[i]).toString(16));
            return t.join("")
        }, hexToBytes: function (e) {
            for (var t = [], i = 0; i < e.length; i += 2) t.push(parseInt(e.substr(i, 2), 16));
            return t
        }, bytesToBase64: function (e) {
            for (var t = [], s = 0; s < e.length; s += 3) for (var o = e[s] << 16 | e[s + 1] << 8 | e[s + 2], r = 0; r < 4; r++) 8 * s + 6 * r <= 8 * e.length ? t.push(i.charAt(o >>> 6 * (3 - r) & 63)) : t.push("=");
            return t.join("")
        }, base64ToBytes: function (e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var t = [], s = 0, o = 0; s < e.length; o = ++s % 4) 0 != o && t.push((i.indexOf(e.charAt(s - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | i.indexOf(e.charAt(s)) >>> 6 - 2 * o);
            return t
        }
    }, e.exports = s
}, function (e, t) {
    var i = {
        utf8: {
            stringToBytes: function (e) {
                return i.bin.stringToBytes(unescape(encodeURIComponent(e)))
            }, bytesToString: function (e) {
                return decodeURIComponent(escape(i.bin.bytesToString(e)))
            }
        }, bin: {
            stringToBytes: function (e) {
                for (var t = [], i = 0; i < e.length; i++) t.push(255 & e.charCodeAt(i));
                return t
            }, bytesToString: function (e) {
                for (var t = [], i = 0; i < e.length; i++) t.push(String.fromCharCode(e[i]));
                return t.join("")
            }
        }
    };
    e.exports = i
}, function (e, t) {
    function i(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    e.exports = function (e) {
        return null != e && (i(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t) {
    "use strict";
    t.__esModule = !0;
    var i = function () {
        return function () {
        }
    }();
    i.HOME_PAGE_URL = "http://www.mtime.com/", i.REGISTER_LOGIN_URL = "/member/signin", i.FIND_PWD_BY_PHONE = "/findpwd/phone", i.FIND_PWD_PWD_SET = "/findpwd/pwd_set", i.FIND_PWD_SUCCESS = "/findpwd/success", i.FIND_PWD_BY_EMAIL = "/findpwd/email", i.FIND_PWD_BY_EMAIL_STEP2 = "/findpwd/email_code", i.SMS_VALID_CODE_SECOND = 60, i.emptyMobileMessage = "请输入手机号码", i.duplicateMobileMessage = "此手机号已被注册，请登录或更换手机号注册", i.duplicateMobileMessage2 = "此手机号已被注册，请更换手机号验证", i.errorMobileMessage = "请输入有效的手机号码", i.emptyPasswordMessage = "请输入密码", i.strengthPasswordMessage = "密码强度太低，请使用6-20位字母与数字、符号的组合", i.errorPasswordMessage = "请使用6-20位数字、字母符号组合", i.blankPasswordMessage = "请使用6-20位数字、字母符号组合，不支持中文、空格", i.emptyConfirmPasswordMessage = "请输入确认密码", i.passwordNotConsistentMessage = "两次密码输入不一致", i.passwordModifyFailedMessage = "密码修改失败，请重试", i.emptyVcodeMessage = "请输入图片验证码", i.errorVcodeMessage = "图片验证码错误", i.oftenSmsMessage = "您获取短信超过限制，请稍后再试", i.emptySmsMessage = "请输入短信验证码", i.errorSmsMessage = "短信验证码错误", i.oftenEmailMessage = "您获取验证码超过限制，请稍后再试", i.registerRuleMessage = "您需要阅读并同意服务条款才能注册", i.registerErrorVcodeMessage = "验证码不正确，请重新输入", i.registerFailureVcodeMessage = "验证码已失效，请重新获取验证码", i.registerEmptyAccountMessage = "请使用邮箱/手机号登录", i.registerEmptyAccountMessage2 = "请输入邮箱/手机号", i.registerErrorAccountMessage = "对不起，你输入的账号错误", i.registerEmptySMSMessage = "请输入手机号", i.registerErrorPasswordMessage = "密码错误", i.registerErrorLoginMessage = "帐号或密码错误", i.mobileAlreadyReg = "该手机号已被注册，请绑定其他手机", i.VCODE_TEXT_TIP = "图片验证码", i.processMessage = "信息提交中，请稍候", i.failureMessage = "注册失败，请检查输入是否正确，谢谢", i.errorMessage = "操作失败，请稍候再试", i.securityRisksMessage = "您的账号异常，暂时无法使用", i.lockMessage = "您的账号已锁定，暂时无法使用", i.rigsterFrequentlyMessage = "操作过于频繁，请稍后再试", i.toResetYourPasswordMessage = "由于长时间未登录，您的账号已被临时冻结", i.SERVER_ERROR = 91880001, i.PARAM_ERROR = 91880002, i.NICK_NAME_EXIST = 91880003, i.MOBILE_EXIST = 91880004, i.EMAIL_EXIST = 91880005, i.NICK_MOBILE_EMAIL_EXIST = 91880006, i.PASSWORD_NOT_MATCH = 91880007, i.VERIFICATION_CODE_ERROR = 91880008, i.TOKEN_ERROR = 91880009, i.MOBILE_NOT_MATCH = 91880010, i.EMAIL_NOT_MATCH = 91880011, i.USER_NOT_EXIST = 91880012, i.PASSWORD_ERROR = 91880013, i.DB_INSERT_FAILD = 91880014, i.DB_UPDATE_FAILD = 91880015, i.DB_DELETE_FAILD = 91880016, i.MONGO_INSERT_FAILD = 91880017, i.MONGO_UPDATE_FAILD = 91880018, i.MONGO_DELETE_FAILD = 91880019, i.MOBILE_ERROR = 91880020, i.EMAIL_ERROR = 91880021, i.CODE_OUTOF_LIMIT_CONFIG = 91880032, i.SINA_ERROR = 91880023, i.QQ_ERROR = 91880024, i.SINA_QQ_EXIST = 91880025, i.VERIFICATION_CODE_TIMEEXPIRE_ERROR = 91880026, i.WECHAT_ERROR = 91880027, i.PASSWORD_EQUAL_ERROR = 91880028, i.PASSWORD_OLD_ERROR = 91880029, i.THIRD_EXISTS_ERROR = 91880030, i.THIRDUSER_EXISTS_ERROR = 91880031, i.CODE_OUTOF_LIMIT_CONFIG_HOUR = 91880032, i.CODE_OUTOF_LIMIT_CONFIG_DAY = 91880033, i.USER_STATUS_SHIELDED = 91880030, i.USER_STATUS_LOCK = 91880031, i.USER_STATUS_INVALID = 91880032, i.USER_STATUS_SECURITYRISK = 91880033, i.USER_STATUS_NEEDRESETPASSWORD = 91880034, i.REGISTER_FREQUENTLY_ERROR = 91880038, t["default"] = i
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(4), o = function () {
        function e(e, t) {
            this.opt = this.setOption(t), this.obj = e, this.init()
        }

        return e.prototype.setOption = function (e) {
            var t = {
                t: "",
                c: "",
                b: "",
                x: !0,
                bse: null,
                bce: null,
                xe: null,
                tk: 'data-dialog="tk"',
                ck: 'data-dialog="ck"',
                bsk: 'data-dialog="bsk"',
                bck: 'data-dialog="bck"',
                xk: 'data-dialog="xk"'
            };
            return "object" == typeof e ? e = s["default"].extend(t, e) : "string" == typeof e && (e = s["default"].extend(t, {c: '<p class="alert">' + e + "</p>"})), e
        }, e.prototype.init = function () {
            s["default"]("body").append(this.dialogHtml()), this.popTop(), this.afterRender()
        }, e.prototype.dialogHtml = function () {
            var e = null != this.opt.t ? this.opt.t : "", t = null != this.opt.c ? this.opt.c : "",
                i = null != this.opt.b ? this.opt.b : "";
            return '\t          <div data-dialog="bback" style="background:#000; opacity: 0.6; z-index: 110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>\t          <div data-dialog="layout" class="m-popbox">\t            ' + (1 == (null != this.opt.x ? this.opt.x : "") ? '<a class="i-pop-close" ' + this.opt.xk + ' href="javascript:void(0)" title="关闭"></a>' : "") + "\t            " + e + '\t            <div class="m-popcont">' + t + "</div>\t            " + i + "\t          </div>"
        }, e.prototype.afterRender = function () {
            var e = this;
            s["default"]("[" + e.opt.xk + "]").on("click", function () {
                e.opt.xe ? e.opt.xe.apply(s["default"].extend({}, e)) : (s["default"]('[data-dialog="layout"]').remove(), s["default"]('[data-dialog="bback"]').remove())
            }), s["default"]("[" + e.opt.bsk + "]").on("click", function () {
                e.opt.bse ? e.opt.bse.apply(s["default"].extend({}, e)) : (s["default"]('[data-dialog="layout"]').remove(), s["default"]('[data-dialog="bback"]').remove())
            }), s["default"]("[" + e.opt.bck + "]").on("click", function () {
                e.opt.bce ? e.opt.bce.apply(s["default"].extend({}, e)) : (s["default"]('[data-dialog="layout"]').remove(), s["default"]('[data-dialog="bback"]').remove())
            })
        }, e.prototype.popTop = function () {
            var e = s["default"]('[data-dialog="layout"]'), t = e.height(), i = e.width() / 2,
                o = window.screen.availHeight, r = parseInt((o - t) / 2 - 30 + "");
            r = r >= 0 ? r : 0, e.css({top: r, "margin-left": -i})
        }, e
    }();
    t["default"] = o
}, , function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(4), o = function () {
        function e(e) {
            this.vcodeRegion = s["default"]("#" + e), this.vcodeImage = this.vcodeRegion.children("span:first"), this.refreshBtn = this.vcodeRegion.children("a:first"), this.initEvent()
        }

        return e.prototype.initEvent = function () {
            this.vcodeImage.click(this.showVCode.bind(this)), this.refreshBtn.click(this.showVCode.bind(this))
        }, e.prototype.showVCode = function () {
            var e = this;
            s["default"].ajax({
                type: "get",
                cache: !1,
                url: "/api/get_image_vcode?" + (new Date).getTime(),
                success: function (t) {
                    t && (e.vcodeImage.data("vcodeid", t.codeId), e.vcodeImage.html('<img width="120" height="60" alt="点击更新新图" src="' + t.url + '" style="cursor:pointer" class="v_m mr6" />'))
                }
            })
        }, e.prototype.validVCode = function (e, t) {
            var i = !1, o = this.getVCodeId();
            return s["default"].ajax({
                type: "get",
                cache: !1,
                url: "/api/valid_image_vcode",
                data: {vcodeid: o, inputvcode: e},
                success: function (e) {
                    i = e && e.success, t && t(i)
                }.bind(this)
            }), i
        }, e.prototype.getVCodeId = function () {
            return this.vcodeImage.data("vcodeid")
        }, e
    }();
    t["default"] = o
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(14), o = i(8), r = function () {
        function e() {
        }

        return e.jumpHomePage = function () {
            $.ajax({
                type: "get", url: "/api/get_home_url", data: {}, success: function (e) {
                    e && e.homeUrl ? window.location.href = e.homeUrl : window.location.href = s["default"].HOME_PAGE_URL
                }
            })
        }, e.jumpEmailFindPwd = function (e) {
            var t = {};
            t.email = e;
            var i = o["default"].base64Encode(JSON.stringify(t));
            window.location.href = s["default"].FIND_PWD_BY_EMAIL + "?token=" + i
        }, e.jumpEmailVCodeFindPwd = function (e, t, i) {
            var r = {};
            r.type = e, r.loginName = t, r.codeId = i;
            var a = o["default"].base64Encode(JSON.stringify(r));
            window.location.href = s["default"].FIND_PWD_BY_EMAIL_STEP2 + "/?token=" + a
        }, e.jumpPwdSet = function (e, t, i, r) {
            var a = {};
            a.type = e, a.loginName = t, a.codeId = i, a.code = r;
            var n = o["default"].base64Encode(JSON.stringify(a));
            window.location.href = s["default"].FIND_PWD_PWD_SET + "/?token=" + n
        }, e.jumpFindPwdSuccess = function () {
            window.location.href = s["default"].FIND_PWD_SUCCESS
        }, e.jumpPhoneFindPwd = function (e) {
            var t = {};
            t.mobile = e;
            var i = o["default"].base64Encode(JSON.stringify(t));
            window.location.href = s["default"].FIND_PWD_BY_PHONE + "?token=" + i
        }, e.jumpRegisterLoginPage = function () {
            window.location.href = s["default"].REGISTER_LOGIN_URL
        }, e
    }();
    t["default"] = r
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(4), o = i(20), r = i(14), a = function () {
        function e() {
        }

        return e.validMobile = function (e) {
            return /^((13[0-9])|(14[0-9])|(15[^4,\\D])|(16[^4,\\D])|(18[0,0-9])|(19[0,0-9])|(17[0-9]))\d{8}$/.test(e)
        }, e.validEmail = function (e) {
            return new RegExp(/\w+([-+.\w]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i).test(e)
        }, e.validPassword = function (e) {
            return /^\S{6,20}$/.test(e)
        }, e.validPassWord = function (e, t, i) {
            s["default"]("#" + t);
            var a, n = s["default"]("#" + i);
            switch (e) {
                case o.PasswordValidResult.Fail_Empty:
                    n.text(r["default"].emptyPasswordMessage), n.parent().removeClass("reg_focus").addClass("reg_err"), a = !1;
                    break;
                case o.PasswordValidResult.Fail_WrongFormat:
                    n.text(r["default"].errorPasswordMessage), n.parent().removeClass("reg_focus").addClass("reg_err"), a = !1;
                    break;
                case o.PasswordValidResult.Fail_ContainSpaceOrChinese:
                    n.text(r["default"].blankPasswordMessage), n.parent().removeClass("reg_focus").addClass("reg_err"), a = !1;
                    break;
                case o.PasswordValidResult.Fail_LowLevel:
                    n.text(r["default"].strengthPasswordMessage), n.parent().removeClass("reg_focus").addClass("reg_err"), a = !1;
                    break;
                case o.PasswordValidResult.Success:
                    n.text(""), n.parent().removeClass("reg_err").addClass("reg_focus"), a = !0
            }
            return a
        }, e.checkMobileHasRegisted = function (e, t) {
            var i = !1;
            s["default"].ajax({
                type: "get",
                dataType: "json",
                url: "/api/check_unique_loginname",
                data: {loginName: e},
                cache: !1,
                success: function (e) {
                    i = e.exist, t(i)
                }
            })
        }, e.validImageCode = function (e, t, i) {
            var o = !1;
            s["default"].ajax({
                type: "get",
                cache: !1,
                url: "/api/valid_image_vcode",
                data: {inputvcode: e, vcodeid: t},
                success: function (e) {
                    o = e && e.success, i(o)
                }
            })
        }, e.validSmsVCode = function (e, t, i, o) {
            var r = !1;
            s["default"].ajax({
                type: "get",
                cache: !1,
                url: "/api/valid_sms_vcode",
                data: {mobile: e, code: t, codeId: i},
                success: function (e) {
                    r = e && e.isValidate, o(r)
                }
            })
        }, e
    }();
    t["default"] = a
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s, o, r = i(4), a = i(19), n = i(8);
    !function (e) {
        e[e.Undefined = 0] = "Undefined", e[e.Low = 1] = "Low", e[e.Medium = 2] = "Medium", e[e.High = 3] = "High"
    }(s || (s = {})), function (e) {
        e[e.Fail_Undefined = 0] = "Fail_Undefined", e[e.Fail_Empty = 1] = "Fail_Empty", e[e.Fail_WrongFormat = 2] = "Fail_WrongFormat", e[e.Fail_ContainSpaceOrChinese = 3] = "Fail_ContainSpaceOrChinese", e[e.Fail_LowLevel = 4] = "Fail_LowLevel", e[e.Success = 5] = "Success"
    }(o = t.PasswordValidResult || (t.PasswordValidResult = {}));
    var l = function () {
        function e(e, t, i) {
            this.passwordInput = r["default"]("#" + e), this.levelDiv = r["default"]("#" + t), this.levelDiv.length > 0 && (this.levelTip = this.levelDiv.children(":first")), this.showBtn = r["default"]("#" + i), this.initEvent()
        }

        return e.prototype.initEvent = function () {
            this.passwordInput.length > 0 && (this.passwordInput.keyup(this.onKeyupPasswordInput.bind(this)), this.passwordInput.blur(this.onBlurPasswordInput.bind(this))), this.showBtn.length > 0 && this.showBtn.click(this.onClickShowBtn.bind(this))
        }, e.prototype.onValidPassword = function () {
            var e = o.Fail_Undefined;
            if (0 == this.passwordInput.length) return e;
            var t = this.passwordInput.val();
            return e = 0 == r["default"].trim(t).length ? o.Fail_Empty : a["default"].validPassword(t) ? /.*[\u4e00-\u9fa5]+.*$/.test(t) || -1 != t.indexOf(" ") ? o.Fail_ContainSpaceOrChinese : this.checkLevel() == s.Low ? o.Fail_LowLevel : o.Success : o.Fail_WrongFormat, this.validationCallback && this.validationCallback(e), e
        }, e.prototype.onKeyupPasswordInput = function (e) {
            this.checkSpace(e);
            var t = this.passwordInput.val();
            /.*[\u4e00-\u9fa5]+.*$/.test(t) || -1 != t.indexOf(" ") ? this.validationCallback(o.Fail_ContainSpaceOrChinese) : (this.checkLevel(), this.validationCallback && this.validationCallback(o.Success))
        }, e.prototype.onBlurPasswordInput = function () {
            this.onValidPassword()
        }, e.prototype.onClickShowBtn = function () {
            "password" == this.passwordInput.attr("type").toLowerCase() ? (this.passwordInput.attr("type", "text"), this.showBtn.addClass("active")) : (this.passwordInput.attr("type", "password"), this.showBtn.removeClass("active"))
        }, e.prototype.checkSpace = function (e) {
            if (32 == (window.event ? e.keyCode : e.which)) {
                var t = this.passwordInput.val();
                this.passwordInput.val(t.replace(/\s+/g, ""))
            }
        }, e.prototype.checkLevel = function () {
            var e = this.passwordInput.val();
            if (0 == e.length) return this.levelDiv.attr("class", "fl password_box"), this.levelTip.html("密码强度"), s.Undefined;
            var t = this.getLevelNew(e);
            return t <= 25 ? (this.levelDiv.attr("class", "fl password_box password_l"), this.levelTip.html("弱"), s.Low) : t > 25 && t < 75 ? (this.levelDiv.attr("class", "fl password_box password_m"), this.levelTip.html("中"), s.Medium) : (this.levelDiv.attr("class", "fl password_box password_h"), this.levelTip.html("强"), s.High)
        }, e.prototype.getLevelNew = function (e) {
            var t = n["default"].getByteLength(e);
            return t < 6 ? 0 : e.match(/^[A-Z]+$/) || e.match(/^[a-z]+$/) || e.match(/^[0-9]+$/) || e.match(/^(\W|[_])+$/) ? 0 : e.match(/^[A-Za-z]+$/) || e.match(/^[A-Z0-9]+$/) || e.match(/^([A-Z_]|\W)+$/) || e.match(/^[0-9a-z]+$/) || e.match(/^([a-z_]|\W)+$/) || e.match(/^([0-9_]|\W)+$/) ? 50 : e.match(/^[0-9A-Za-z]+$/) || e.match(/^([A-Za-z_]|\W)+$/) || e.match(/^([0-9a-z_]|\W)+$/) || e.match(/^([0-9A-Za-z_]|\W)+$/) ? t > 10 ? 100 : 50 : void 0
        }, e.prototype.getLevel = function (e) {
            var t = 0, i = n["default"].getByteLength(e);
            return i < 6 ? t = -25 : i >= 6 && i < 16 ? t = 25 : i >= 16 && i <= 20 && (t = 50), e.match(/^[A-Z]+$/) || e.match(/^[a-z]+$/) || e.match(/^[0-9]+$/) || e.match(/^(\W|[_])+$/) ? t += -25 : e.match(/^[A-Za-z]+$/) || e.match(/^[A-Z0-9]+$/) || e.match(/^([A-Z_]|\W)+$/) || e.match(/^[0-9a-z]+$/) || e.match(/^([a-z_]|\W)+$/) || e.match(/^([0-9_]|\W)+$/) ? t += 25 : (e.match(/^[0-9A-Za-z]+$/) || e.match(/^([A-Za-z_]|\W)+$/) || e.match(/^([0-9a-z_]|\W)+$/) || e.match(/^([0-9A-Za-z_]|\W)+$/)) && (t += 50), this.checkContinue(e) && (t += -10), this.checkRepeat(e) && (t += -10), t
        }, e.prototype.checkContinue = function (e) {
            if (e.length < 3) return !1;
            for (var t = 0, i = 1, s = "", o = 0, r = e.length, a = void 0, n = void 0, l = void 0; o < r && (n = e.charCodeAt(o), s = e.charAt(o), a && s.match(/^[0-9A-Za-z]+$/) && (l = n - a, 1 == Math.abs(l) ? (1 == l && (1 == i ? ++t : t = 1, i = 1), -1 == l && (-1 == i ? ++t : t = 1, i = -1)) : t = 0), !(t >= 2)); o++) a = n;
            return t >= 2
        }, e.prototype.checkRepeat = function (e) {
            if (e.length < 2) return !1;
            for (var t = "", i = 0, s = e.length; i < s; i++) if ((t = e.charAt(i)).match(/^[0-9A-Za-z]+$/) && i < s - 1 && t == e.substr(i + 1, 1)) return !0;
            return !1
        }, e
    }();
    t.PasswordControl = l
}, , function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(4), o = i(15), r = i(14), a = i(19), n = function () {
        function e(e, t, i) {
            this.smsLock = !1, this.countdownSecs = r["default"].SMS_VALID_CODE_SECOND, this.smsCodeId = "", this.getSmsCodeBtn = s["default"]("#" + e), this.mobileInput = s["default"]("#" + t), this.imgVcodeInput = s["default"]("#" + i), this.imgVcodeRegion = this.imgVcodeInput.parent("div").next("span").children("span"), this.initEvent()
        }

        return e.prototype.initEvent = function () {
            this.getSmsCodeBtn.click(this.onClickGetSmsCodeBtn.bind(this))
        }, e.prototype.setCountdownSec = function (e) {
            this.countdownSecs = e
        }, e.prototype.setBusinessType = function (e) {
            this.businessType = e
        }, e.prototype.getSmsCodeId = function () {
            return this.smsCodeId
        }, e.prototype.onClickGetSmsCodeBtn = function () {
            var e = this;
            this.smsLock || this.onValidFunction() && a["default"].checkMobileHasRegisted(this.mobileInput.val(), function (t) {
                if (2 == e.businessType) {
                    if (!t) return void (e.mobileValidFailCallback && e.mobileValidFailCallback());
                    e.sendSms()
                } else {
                    if (t) return void (e.mobileValidFailCallback && e.mobileValidFailCallback());
                    e.sendSms()
                }
            })
        }, e.prototype.sendSms = function () {
            var e = this;
            s["default"].ajax({
                type: "get",
                url: "/api/get_sms_vcode",
                cache: !1,
                data: {
                    mobile: this.mobileInput.val(),
                    businessType: this.businessType,
                    vcodeId: this.imgVcodeRegion.data("vcodeid"),
                    inputVcode: this.imgVcodeInput.val()
                },
                success: function (t) {
                    t && (t.imgVcodeSuccess ? t.smsResult && t.smsResult.result && (t.smsResult.result.success ? (e.smsCodeId = t.smsResult.codeId, e.setSmsTimer()) : t.smsResult.result.code == r["default"].CODE_OUTOF_LIMIT_CONFIG && e.$alert(r["default"].oftenSmsMessage)) : e.imgVcodeFailCallback && e.imgVcodeFailCallback())
                }
            })
        }, e.prototype.setSmsTimer = function () {
            this.smsLock = !0, this.smsTimer = setInterval(function () {
                this.countdownSecs - 1 > 0 ? this.getSmsCodeBtn.html(this.countdownSecs-- + "秒后重获") : (clearInterval(this.smsTimer), this.getSmsCodeBtn.html("获取验证码"), this.smsLock = !1, this.countdownSecs = r["default"].SMS_VALID_CODE_SECOND)
            }.bind(this), 1e3)
        }, e.prototype.$alert = function (e) {
            var t = '<p class="notice">' + e + "</p>";
            new o["default"](window, {
                c: t,
                b: '<div class="m-popbtn"><a data-dialog="bsk" class="btnblue">确 定</a></div>'
            })
        }, e
    }();
    t["default"] = n
}]);