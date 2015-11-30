
$(document).ready(function() {
    function rotateImages(){
        function minWidth() {
            if ($(window).width() < 960) {
                var e = n.css("left");
                e = e.substr(0, e.length - 2), e = parseFloat(e, 10), 263.5 > e && n.css("left", "263.5px")
            }
        }

    }

    

        setInterval(function(){
        $(".initial-bg-img").fadeOut("slow",function() {
             // $(".initial-bg-img").attr("src") = "https://mapsconnect.apple.com/assets/images/flyover/002_cp.jpg"

         }
        );
    }, 4000); 
}); 


// $(document).ready(function() {

//     function swap(img) {
//         img = (img == 'https://mapsconnect.apple.com/assets/images/flyover/001_ggb_low.jpg') ? 'http://1.bp.blogspot.com/-cFt5KNrHsHc/TZMH6XUBu-I/AAAAAAAAAR4/R6hOP7lffx0/s1600/apple-logo.png' : 'http://coreldrawtips.com/images/applebig.jpg';

//         $('#top').delay(2000).fadeOut(function() {
//             $(this).attr('src', img)
//         }).fadeIn(function() {
//             setTimeout(function() {
//                 swap(img)
//             }, 1000);
//         });
//     };
//     swap($('#top').attr('src'));

//     // setInterval(function(){
//     //     $(".initial-bg-img").fadeOut(function() {
//     //         $(this).attr("src","https://mapsconnect.apple.com/assets/images/flyover/002_cp.jpg").fadeIn().delay(1000).fadeOut(function(){
//     //             $(this).attr('src', 'https://mapsconnect.apple.com/assets/images/flyover/002_cp.jpg').fadeIn().delay(1000);
//     //         });
//     //      }
//     //     );
//     // }, 4000);   


//     // function e() {
//     //     function e() {
//     //         if ($(window).width() < 960) {
//     //             var e = n.css("left");
//     //             e = e.substr(0, e.length - 2), e = parseFloat(e, 10), 263.5 > e && n.css("left", "263.5px")
//     //         }
//     //     }
//     //    function loopImages(){
//     //     $("initial-bg-img").fadeOut(function() {
//     //     $(this).attr("src","http://1.bp.blogspot.com/-cFt5KNrHsHc/TZMH6XUBu-I/AAAAAAAAAR4/R6hOP7lffx0/s1600/apple-logo.png").fadeIn().delay(1000).fadeOut(function(){
//     //         $(this).attr('src', 'http://coreldrawtips.com/images/applebig.jpg').fadeIn().delay(1000);
//     //     });
//     //  }
//     // ); 
//     //    }, 4000)

    


//     // function n(e, o, n) {
//     // }

//     // function r(e) {
//     //     return 0 === e ? "https://mapsconnect.apple.com/assets/images/flyover/001_ggb.jpg" : 1 === e ? "https://mapsconnect.apple.com/assets/images/flyover/002_cp.jpg" : 2 === e ? "https://mapsconnect.apple.com/assets/images/flyover/005_sh.jpg" : 3 === e ? "https://mapsconnect.apple.com/assets/images/flyover/006_pw.jpg" : 4 === e ? "https://mapsconnect.apple.com/assets/images/flyover/007_cls.jpg" : 5 === e ? "https://mapsconnect.apple.com/assets/images/flyover/008_shb.jpg" : void 0
//     // }

//     // function i(e) {
//     //     return "url(" + e + ")"
//     // }

//     // function t() {
//     //     q || (q = !0, P.removeClass("bg-initial").css("background-image", i(U.src)), setTimeout(R, 7500))
//     // }
//     // var a, s = $("input[name='login']"),
//     //     c = $("input[name='password']"),
//     //     l = $(".password-button"),
//     //     p = $("form:first"),
//     //     d = $("#error-message"),
//     //     u = !0,
//     //     v = !1,
//     //     f = !1,
//     //     m = decodeURIComponent(location.search.substring(1)).split("&");
//     // m.forEach(function(e) {
//     //     e && "email" === e.split("=")[0] && (a = e.split("=")[1], setTimeout(function() {
//     //         s.val() !== a && (s.val(a), c.val(""))
//     //     }, 1e3))
//     // }), $("input").placeholder();
//     // var g = !1;
//     // if ((/Android.*Mobile/i.test(navigator.userAgent) || /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (g = !0), -1 !== BrowserInfo.browser.indexOf("Explorer") && BrowserInfo.version <= 10 && c.css("width", "248px").css("padding-right", "0"), d.length)
//     //     if (g) {
//     //         var h = d.find("#error-msg-header");
//     //         if (h.length) {
//     //             var w = h.text().trim();
//     //             if (!d.hasClass("badcred")) {
//     //                 var b = d.find("#error-msg-body").text().trim();
//     //                 b && ("." !== w.charAt(w.length - 1) && (w += "."), w += " " + b)
//     //             }
//     //             if (d.hasClass("invalid-account")) o();
//     //             else {
//     //                 var y = $("<div class='error-msg-mobile'><span class='icon-alert-small error-msg-icon'></span> " + w + "</div>");
//     //                 $(".indoor-login").after(y)
//     //             }
//     //         }
//     //     } else d.hasClass("badcred") ? e() : o();
//     // var k = 0 !== $(".placeholder").length || "Explorer" === BrowserInfo.browser,
//     //     C = function() {
//     //         var e = !1;
//     //         if (s.val() && c.val() || (e = !0), $.browser.webkit && 2 === $("input:-webkit-autofill").length) {
//     //             if (u && ("iPad" === BrowserInfo.OS || -1 !== BrowserInfo.OS.indexOf("iPhone") || -1 !== BrowserInfo.OS.indexOf("iPod"))) {
//     //                 var o = s.clone(),
//     //                     n = c.clone(),
//     //                     r = s.parent(),
//     //                     i = c.parent();
//     //                 s.remove(), c.remove(), r.prepend(o), i.prepend(n), s = o, c = n
//     //             }
//     //             e = !1
//     //         }
//     //         return e
//     //     },
//     //     I = function() {
//     //         return C() ? l.removeClass("active") : l.addClass("active"), u && (x && !k && (s.val() ? c.focus() : s.focus()), u = !1), !1
//     //     },
//     //     T = n(I, 100),
//     //     x = setInterval(T, 100);
//     // setTimeout(function() {
//     //     x && (clearInterval(x), x = null)
//     // }, 500);
//     // var B = function(e) {
//     //     var o = e.keyCode || e.which;
//     //     return 13 === o ? f ? ($(".modal").modal("hide"), !1) : (C() || p.submit(), !1) : !0
//     // };
//     // c.on("keyup", function(e) {
//     //     var o = e.keyCode || e.which;
//     //     v && o && p.popover("hide"), T()
//     // }), s.on("keyup", function(e) {
//     //     var o = e.keyCode || e.which;
//     //     v && o && p.popover("hide"), T()
//     // }), c.on("change", T), s.on("change", T), c.on("input", T), s.on("input", T), s.on("keypress", B), c.on("keypress", B), l.on("click", function(e) {
//     //     return e.keyCode = 13, B(e), !0
//     // });
//     // var O = window.location.hash;
//     // O && p.find("input[name='hash']").val(O);
//     // var j = !0;
//     // "Explorer" === BrowserInfo.browser && BrowserInfo.version < 10 && (j = !1);
//     // var D, _, E = $(".bg-images .bottom"),
//     //     P = $(".bg-images .top"),
//     //     A = $(".footer-label"),
//     //     S = 0,
//     //     M = 0,
//     //     z = !0,
//     //     F = !1,
//     //     R = function() {
//     //         function e() {
//     //             n || (n = !0, M % 2 !== 0 ? j ? (E.css("background-image", i(o.src)).css("opacity", 1), P.css("opacity", 0)) : (E.css("background-image", i(o.src)).animate({
//     //                 opacity: 1
//     //             }, 1500), P.animate({
//     //                 opacity: 0
//     //             }, 1500)) : j ? (P.css("background-image", i(o.src)).css("opacity", 1), E.css("opacity", 0)) : (P.css("background-image", i(o.src)).animate({
//     //                 opacity: 1
//     //             }, 1500), E.animate({
//     //                 opacity: 0
//     //             }, 1500)), setTimeout(function() {
//     //                 A.addClass("hidden"), A.filter(".bg-" + S + "-footer-label").removeClass("hidden")
//     //             }, 1e3), setTimeout(R, 7500))
//     //         }
//     //         if (!z) return F = !0, void(_ = new Date);
//     //         S = (S + 1) % 6, M = (M + 1) % 2;
//     //         var o = new Image,
//     //             n = !1;
//     //         o.onload = e, o.src = r(S), o.complete && e()
//     //     },
//     //     U = new Image,
//     //     q = !1;
//     // E.length && P.length && ($(window).on("blur focus", function(e) {
//     //     var o = $(this).data("prevType");
//     //     if (o !== e.type) switch (e.type) {
//     //         case "blur":
//     //             z = !1, D = new Date;
//     //             break;
//     //         case "focus":
//     //             if (z = !0, F) {
//     //                 F = !1;
//     //                 var n = 7500 - (_.getTime() - D.getTime());
//     //                 0 > n && (n = 7500), setTimeout(R, n)
//     //             }
//     //     }
//     //     $(this).data("prevType", e.type)
//     // }), U.onload = t, U.src = r(0), U.complete && t())
// });