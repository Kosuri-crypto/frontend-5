import './tokens.css';
import './index.scss';
import $ from "jquery";

$(function () {
    $('.nav-item').click(function () {
        $('.nav-item--active').toggleClass('nav-item--active');
        $(this).toggleClass('nav-item--active');
    });
});
