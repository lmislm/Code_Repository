/**
 * Created by Administrator on 2017/6/9.
 */
define(['jquery'],function ($) {
    function ScrollTo(opts) {
        //默认参数
        this.opts = $.extend({},ScrollTo.DEFAULTS, opts);// 覆盖新的对象
        this.$el = $('html, body');
    }
    ScrollTo.prototype.move = function () {
        var opts = this.opts,
            dest = opts.dest;

        if($(window).scrollTop() !=  dest) {
            if(!this.$el.is(':animated')) {
                this.$el.animate({ //this指向问题  ,animate的性能问题
                    scrollTop: dest
                }, opts.speed);
            }
        }
    }
    ScrollTo.prototype.quickBack = function () {
        var dest = this.opts.dest;

        if($(window).scrollTop() != dest) {
            this.$el.scrollTop(dest);
        }
    }
    ScrollTo.DEFAULTS = {
        dest: 0, //destination,
        speed: 800
    };

    return {
        ScrollTo: ScrollTo
    }
});