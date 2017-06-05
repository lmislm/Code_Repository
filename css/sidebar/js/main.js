/**
 * Created by Administrator on 2017/6/4.
 */
requirejs.config({
    paths: {
        jquery: '../node_modules/.3.2.1@jquery/dist/jquery'
    }
});
requirejs(['jquery'], function ($) {
    // $('body').css('background-color', 'red');
})