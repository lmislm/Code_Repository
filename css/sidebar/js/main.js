/**
 * Created by Administrator on 2017/6/4.
 */
//入口文件
requirejs.config({
    paths: {
        jquery: '../node_modules/.3.2.1@jquery/dist/jquery'
    }
});
// requirejs(['jquery','scrollto'], function ($,scrollto) {
requirejs(['jquery','backtop'], function ($,backtop) {

    // new backtop.BackTop($('#backTop'), {
    //     mode: 'move', //move  ||  quickBack
    //     pos: 100,
    //     speed: 2000
    // });

    //注册成插件
    $('#backTop').backtop({
        mode: 'move'
    });




    //使用scrollto函数，模块化一下
    // var scroll = new scrollto.ScrollTo({
    //     //即scrollto函数中return的ScrollTo
    //     dest: 0,
    //     speed: 2000
    // });
    //
    // $('body').css('background-color', 'red');
    // //unndefined the animate,
    // //$.proxy，第二个参数即this指向实例对象
    // $('#backTop').on('click', $.proxy(scroll.move,scroll)); //替换quickBack即可
    // $(window).on('scroll',function () {
    //     checkPosition($(window).height()); //匿名函数调用,判断可视高度
    // });//检查位置
    // //solve bug,加载的时候就执行函数。进行判断
    // checkPosition($(window).height()); //匿名函数调用,判断可视高度
    //
    // function move() {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     },800);
    // }
    //
    // function quickBack() {
    //     $('html, body').scrollTop(0);
    // }

    // function checkPosition(pos) {
    //     //每次滚动条滚动的时候执行，bug，刷新时重新显示返回顶部
    //     if ($(window).scrollTop() > pos) {
    //         $('#backTop').fadeIn();
    //     }else {
    //         $('#backTop').fadeOut();
    //     }
    // }
})