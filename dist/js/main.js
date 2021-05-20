"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  console.log('main.js is included - OK!'); // Form Validation

  (function () {
    $("#test_form").validate();
    $("#register_form").validate({
      rules: {
        password: {
          pwcheck: true
        }
      }
    });
  })();

  $.validator.addMethod("phoneCustom", function (phone_number, element) {
    var customPhone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
    return this.optional(element) || customPhone_number.length > 7 && /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(customPhone_number);
  }, "Пожалуйста, введите корректный номер телефона");
  $.validator.addMethod("pwcheck", function (value, element) {
    return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value);
  }, "Пароль может содержать буквы латинского алфавита (любого регистра), цифры и символы @ * _ - . !");

  (function (factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery", "../jquery.validate"], factory);
    } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
      module.exports = factory(require("jquery"));
    } else {
      factory(jQuery);
    }
  })(function ($) {
    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: RU (Russian; русский язык)
     */
    $.extend($.validator.messages, {
      required: "Это поле необходимо заполнить.",
      remote: "Пожалуйста, введите правильное значение.",
      email: "Пожалуйста, введите корректный адрес электронной почты.",
      url: "Пожалуйста, введите корректный URL.",
      date: "Пожалуйста, введите корректную дату.",
      dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
      number: "Пожалуйста, введите число.",
      digits: "Пожалуйста, вводите только цифры.",
      creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
      equalTo: "Пожалуйста, введите такое же значение ещё раз.",
      extension: "Пожалуйста, выберите файл с правильным расширением.",
      maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
      minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
      rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
      range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
      max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
      min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
    });
    return $;
  }); // !Form Validation
  // Smooth scroll


  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="collapse"]').not('[role="tab"]').click(function (e) {
    $('html,body').stop().animate({
      scrollTop: $(e.currentTarget.hash).offset().top
    }, 1000);
    e.preventDefault();
  });
})();