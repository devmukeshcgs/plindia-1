!function () { "use strict"; const e = (e, t = !1) => (e = e.trim(), t ? [...document.querySelectorAll(e)] : document.querySelector(e)), t = (t, i, s, l = !1) => { l ? e(i, l).forEach(e => e.addEventListener(t, s)) : e(i, l).addEventListener(t, s) }, i = (e, t) => { e.addEventListener("scroll", t) }; let s = e("#navbar .scrollto", !0); const l = () => { let t = window.scrollY + 200; s.forEach(i => { if (!i.hash) return; let s = e(i.hash); s && (t >= s.offsetTop && t <= s.offsetTop + s.offsetHeight ? i.classList.add("active") : i.classList.remove("active")) }) }; window.addEventListener("load", l), i(document, l); const o = t => { let i = e("#header"), s = i.offsetHeight; i.classList.contains("header-scrolled") || (s -= 10); let l = e(t).offsetTop; window.scrollTo({ top: l - s, behavior: "smooth" }) }; let a = e("#header"); if (a) { const e = () => { window.scrollY > 100 ? a.classList.add("header-scrolled") : a.classList.remove("header-scrolled") }; window.addEventListener("load", e), i(document, e) } let n = e("#partner_with_us"); if (n) { const e = () => { window.scrollY > 500 ? n.classList.add("page-scrolled") : n.classList.remove("page-scrolled") }; window.addEventListener("load", e), i(document, e) } let r = e(".back-to-top"); if (r) { const e = () => { window.scrollY > 100 ? r.classList.add("active") : r.classList.remove("active") }; window.addEventListener("load", e), i(document, e) } t("click", ".mobile-nav-toggle", function (t) { e("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x") }), t("click", ".navbar .dropdown > a", function (t) { e("#navbar").classList.contains("navbar-mobile") && (t.preventDefault(), this.nextElementSibling.classList.toggle("dropdown-active")) }, !0), t("click", ".scrollto", function (t) { if (e(this.hash)) { t.preventDefault(); let i = e("#navbar"); if (i.classList.contains("navbar-mobile")) { i.classList.remove("navbar-mobile"); let t = e(".mobile-nav-toggle"); t.classList.toggle("bi-list"), t.classList.toggle("bi-x") } o(this.hash) } }, !0), window.addEventListener("load", () => { window.location.hash && e(window.location.hash) && o(window.location.hash) }), new Swiper(".hero-left-slider", { speed: 400, effect: "fade", autoHeight: !1, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }), new Swiper(".clients-slider", { speed: 400, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 }, breakpoints: { 320: { slidesPerView: 2, spaceBetween: 40 }, 480: { slidesPerView: 3, spaceBetween: 60 }, 640: { slidesPerView: 4, spaceBetween: 80 }, 992: { slidesPerView: 6, spaceBetween: 120 } } }), window.addEventListener("load", () => { let i = e(".portfolio-container"); if (i) { let s = new Isotope(i, { itemSelector: ".portfolio-item", layoutMode: "fitRows" }), l = e("#portfolio-flters li", !0); t("click", "#portfolio-flters li", function (e) { e.preventDefault(), l.forEach(function (e) { e.classList.remove("filter-active") }), this.classList.add("filter-active"), s.arrange({ filter: this.getAttribute("data-filter") }) }, !0) } }); GLightbox({ selector: ".portfokio-lightbox" }); new Swiper(".portfolio-details-slider", { speed: 400, autoplay: { delay: 5e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }), new Swiper(".testimonials-slider2", { speed: 600, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 }, breakpoints: { 320: { slidesPerView: 1, spaceBetween: 40 }, 1200: { slidesPerView: 1 } } }), new Swiper(".testimonials-slider", { speed: 600, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 }, breakpoints: { 320: { slidesPerView: 1, spaceBetween: 40 }, 1200: { slidesPerView: 3 } } }), window.addEventListener("load", () => { }) }();

var url_string = window.location.href
var url = new URL(url_string);
// LEADCF14
var url_utm_source = url.searchParams.get("utm_source");
document.getElementById("LEADCF14").value = url_utm_source;

// LEADCF15
var url_utm_medium = url.searchParams.get("utm_medium");
document.getElementById("LEADCF15").value = url_utm_medium;

// LEADCF172
var url_utm_campaign = url.searchParams.get("utm_campaign");
document.getElementById("LEADCF172").value = url_utm_campaign;

// LEADCF16
var url_utm_content = url.searchParams.get("utm_content");
document.getElementById("LEADCF16").value = url_utm_content;

console.log("-------------->", url_utm_source);
console.log("-------------->", url_utm_medium);
console.log("-------------->", url_utm_campaign);
console.log("-------------->", url_utm_content);

$(function () {
    console.log("ready!");
});
var number = $("#Mobile").val();
function sendOTP() {
    console.log("SEND OTP");
    number = $("#Mobile").val();
    $(".error").html("").hide();
    if (number.length == 10 && number != null) {
        console.log(number);
        var input = {
            "mobileno": number,
            "application": "APP1"
        };
        $.ajax({
            url: 'https://uatutilities.plindia.com/apiutilities/api/guest/requestotp',
            type: 'POST',
            data: input,
            success: function (response) {
                console.log(response);
                if (response == "OTP SENT SUCCESSFULLY") {
                    $("#send_otp_btn").hide()
                    $("#verify").show()
                    $("#otp").show()
                }
                // $(".container").html(response);
            }
        });
    } else {
        $(".error").html('Please enter a valid number!')
        $(".error").show();
    }
}

function verifyOTP() {
    number = $("#Mobile").val();
    console.log(number);
    $(".error").html("").hide();
    $(".success").html("").hide();
    var otp = $("#mobileOtp").val();
    var input = {
        "otp": otp,
        "mobileno": number
    };
    if (otp.length == 6 && otp != null) {
        $.ajax({
            url: 'https://uatutilities.plindia.com/apiutilities/api/guest/verifyotp',
            type: 'POST',
            dataType: "json",
            data: input,
            success: function (response) {
                $("." + response.type).html(response.message)
                $("." + response.type).show();
                console.log(response.type);
                console.log(response);
                if (response == "VALIDOTP") {
                    $("#otp-cta").hide()
                }
            },
            error: function () {
                alert("ss");
            }
        });
    } else {
        $(".error").html('You have entered wrong OTP.')
        $(".error").show();
    }
}