/**
 * Created by Administrator on 2017/6/9.
 */
define(['jquery'],function ($) {
    function ScrollTo(opts) {
        //默认参数
        this.opts = $.extend({},ScrollTo.DEFAUKTS, opts);// 覆盖新的对象
        this.$el = $('html, body');
    }
    ScrollTo.prototype.move = function () {
        var opts = this.opts;
        this.$el.animate({ //this指向问题  ,animate的性能问题
            scrollTop: this.opts.dest
        },opts.speed);
    }
    ScrollTo.prototype.quickBack = function () {
        this.$el.scrollTop(this.opts.dest);
    }
    ScrollTo.DEFAUKTS = {
        dest: 0, //destination,
        speed: 80
    };

    return {
        ScrollTo: ScrollTo
    }
});