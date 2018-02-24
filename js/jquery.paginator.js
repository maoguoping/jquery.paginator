/*
* jQuery翻页插件
* 根据jquery.pagination.js简化而来
* by:maoguoping
* github:https://github.com/maoguoping/jquery.paginator
* */
jQuery.fn.paginator = function (maxentries, opts) {
    opts = jQuery.extend({
        items_per_page: 10,
        num_display_entries: 10,
        current_page: 0,
        num_edge_entries: 0,
        prev_text: "Prev",
        next_text: "Next",
        prev_show_always: true,
        next_show_always: true,
        callback: function () {
            return false;
        }
    }, opts || {});

    return this.each(function () {
        /**
         * 计算最大分页显示数目
         */
        function numPages() {
            return Math.ceil(maxentries / opts.items_per_page);
        }

        /**
         * 下一页
         */
        function next() {
            if (current_page < pageNum - 1) {
                current_page++;
                draw();
                opts.callback(current_page, this);
            }
        }

        /**
         *上一页
         */
        function prev() {
            if (current_page > 0) {
                current_page--;
                draw();
                opts.callback(current_page, this);
            }
        }

        /**
         *添加新链接
         */
        function addDisplayLink(index) {
            if (index != current_page) {
                return "<a code='" + (index + 1) + "' class='page-link'>" + (index + 1) + "</a>";
            } else {
                return "<a code='" + (index + 1) + "' class='page-link current'>" + (index + 1) + "</a>";
            }
        }

        /**
         *绘制面板
         */
        function draw() {
            var html = "";
            var prevHtml = "<a class='prev'>" + opts.prev_text + "</a>";
            var nextHtml = "<a class='next'>" + opts.next_text + "</a>";
            var otherHtml = "<a class=other'>" + "..." + "</a>";
            var startHtml = "", middleHtml = "", endHtml = "";
            var block = "";
            html = prevHtml;
            if (pageNum <= (opts.num_edge_entries * 2 + 3)) {
                for (var i = 0; i < pageNum; i++) {
                    html += addDisplayLink(i);
                }
            } else {
                //输出前部
                for (var i = 0; i < opts.num_edge_entries; i++) {
                    html += addDisplayLink(i);
                }
                if (current_page >= opts.num_edge_entries + 1 && current_page <= pageNum - opts.num_edge_entries - 2) {
                    html += otherHtml;
                    html += addDisplayLink(current_page);
                    html += otherHtml;
                } else if (current_page == opts.num_edge_entries) {
                    html += addDisplayLink(current_page);
                    html += otherHtml;
                } else if (current_page == pageNum - opts.num_edge_entries - 1) {
                    html += otherHtml;
                    html += addDisplayLink(current_page);
                } else {
                    html += otherHtml;
                }
                //输出尾部
                for (var i = opts.num_edge_entries; i > 0; i--) {
                    html += addDisplayLink(pageNum - i);
                }
            }
            html += nextHtml;
            content.html(html);
            content.find('.prev').click(prev);
            content.find('.next').click(next);
            content.find('.page-link').click(function () {
                current_page = parseInt($(this).attr('code')) - 1;
                draw();
                opts.callback(current_page, this);
            })
        }

        var content = jQuery(this);
        var pageNum = numPages();
        var current_page = opts.current_page;
        // 回调函数
        opts.callback(current_page, this);
        draw();
    });
}


