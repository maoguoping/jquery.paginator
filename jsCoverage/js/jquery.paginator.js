/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['js/jquery.paginator.js']) {
  _$jscoverage['js/jquery.paginator.js'] = [];
  _$jscoverage['js/jquery.paginator.js'][7] = 0;
  _$jscoverage['js/jquery.paginator.js'][8] = 0;
  _$jscoverage['js/jquery.paginator.js'][18] = 0;
  _$jscoverage['js/jquery.paginator.js'][22] = 0;
  _$jscoverage['js/jquery.paginator.js'][26] = 0;
  _$jscoverage['js/jquery.paginator.js'][27] = 0;
  _$jscoverage['js/jquery.paginator.js'][33] = 0;
  _$jscoverage['js/jquery.paginator.js'][34] = 0;
  _$jscoverage['js/jquery.paginator.js'][35] = 0;
  _$jscoverage['js/jquery.paginator.js'][36] = 0;
  _$jscoverage['js/jquery.paginator.js'][37] = 0;
  _$jscoverage['js/jquery.paginator.js'][44] = 0;
  _$jscoverage['js/jquery.paginator.js'][45] = 0;
  _$jscoverage['js/jquery.paginator.js'][46] = 0;
  _$jscoverage['js/jquery.paginator.js'][47] = 0;
  _$jscoverage['js/jquery.paginator.js'][48] = 0;
  _$jscoverage['js/jquery.paginator.js'][55] = 0;
  _$jscoverage['js/jquery.paginator.js'][56] = 0;
  _$jscoverage['js/jquery.paginator.js'][57] = 0;
  _$jscoverage['js/jquery.paginator.js'][59] = 0;
  _$jscoverage['js/jquery.paginator.js'][66] = 0;
  _$jscoverage['js/jquery.paginator.js'][67] = 0;
  _$jscoverage['js/jquery.paginator.js'][68] = 0;
  _$jscoverage['js/jquery.paginator.js'][69] = 0;
  _$jscoverage['js/jquery.paginator.js'][70] = 0;
  _$jscoverage['js/jquery.paginator.js'][71] = 0;
  _$jscoverage['js/jquery.paginator.js'][72] = 0;
  _$jscoverage['js/jquery.paginator.js'][73] = 0;
  _$jscoverage['js/jquery.paginator.js'][74] = 0;
  _$jscoverage['js/jquery.paginator.js'][75] = 0;
  _$jscoverage['js/jquery.paginator.js'][76] = 0;
  _$jscoverage['js/jquery.paginator.js'][80] = 0;
  _$jscoverage['js/jquery.paginator.js'][81] = 0;
  _$jscoverage['js/jquery.paginator.js'][83] = 0;
  _$jscoverage['js/jquery.paginator.js'][84] = 0;
  _$jscoverage['js/jquery.paginator.js'][85] = 0;
  _$jscoverage['js/jquery.paginator.js'][86] = 0;
  _$jscoverage['js/jquery.paginator.js'][87] = 0;
  _$jscoverage['js/jquery.paginator.js'][88] = 0;
  _$jscoverage['js/jquery.paginator.js'][89] = 0;
  _$jscoverage['js/jquery.paginator.js'][90] = 0;
  _$jscoverage['js/jquery.paginator.js'][91] = 0;
  _$jscoverage['js/jquery.paginator.js'][92] = 0;
  _$jscoverage['js/jquery.paginator.js'][94] = 0;
  _$jscoverage['js/jquery.paginator.js'][97] = 0;
  _$jscoverage['js/jquery.paginator.js'][98] = 0;
  _$jscoverage['js/jquery.paginator.js'][101] = 0;
  _$jscoverage['js/jquery.paginator.js'][102] = 0;
  _$jscoverage['js/jquery.paginator.js'][103] = 0;
  _$jscoverage['js/jquery.paginator.js'][104] = 0;
  _$jscoverage['js/jquery.paginator.js'][105] = 0;
  _$jscoverage['js/jquery.paginator.js'][106] = 0;
  _$jscoverage['js/jquery.paginator.js'][107] = 0;
  _$jscoverage['js/jquery.paginator.js'][108] = 0;
  _$jscoverage['js/jquery.paginator.js'][112] = 0;
  _$jscoverage['js/jquery.paginator.js'][113] = 0;
  _$jscoverage['js/jquery.paginator.js'][114] = 0;
  _$jscoverage['js/jquery.paginator.js'][116] = 0;
}
_$jscoverage['js/jquery.paginator.js'].source = ["<span class=\"c\">/*</span>","<span class=\"c\">* jQuery&#231;&#191;&#187;&#233;&#161;&#181;&#230;&#143;&#146;&#228;&#187;&#182;</span>","<span class=\"c\">* &#230;&#160;&#185;&#230;&#141;&#174;jquery.pagination.js&#231;&#174;&#128;&#229;&#140;&#150;&#232;&#128;&#140;&#230;&#157;&#165;</span>","<span class=\"c\">* by:maoguoping</span>","<span class=\"c\">* github:https://github.com/maoguoping/jquery.paginator</span>","<span class=\"c\">* */</span>","jQuery<span class=\"k\">.</span>fn<span class=\"k\">.</span>paginator <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>maxentries<span class=\"k\">,</span> opts<span class=\"k\">)</span> <span class=\"k\">{</span>","    opts <span class=\"k\">=</span> jQuery<span class=\"k\">.</span>extend<span class=\"k\">(</span><span class=\"k\">{</span>","        items_per_page<span class=\"k\">:</span> <span class=\"s\">10</span><span class=\"k\">,</span>","        num_display_entries<span class=\"k\">:</span> <span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span> <span class=\"s\">\"Prev\"</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span> <span class=\"s\">\"Next\"</span><span class=\"k\">,</span>","        prev_show_always<span class=\"k\">:</span> <span class=\"k\">true</span><span class=\"k\">,</span>","        next_show_always<span class=\"k\">:</span> <span class=\"k\">true</span><span class=\"k\">,</span>","        callback<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">false</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">,</span> opts <span class=\"k\">||</span> <span class=\"k\">{}</span><span class=\"k\">);</span>","","    <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>each<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"c\">/**</span>","<span class=\"c\">         * &#232;&#174;&#161;&#231;&#174;&#151;&#230;&#156;&#128;&#229;&#164;&#167;&#229;&#136;&#134;&#233;&#161;&#181;&#230;&#152;&#190;&#231;&#164;&#186;&#230;&#149;&#176;&#231;&#155;&#174;</span>","<span class=\"c\">         */</span>","        <span class=\"k\">function</span> numPages<span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> Math<span class=\"k\">.</span>ceil<span class=\"k\">(</span>maxentries <span class=\"k\">/</span> opts<span class=\"k\">.</span>items_per_page<span class=\"k\">);</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">/**</span>","<span class=\"c\">         * &#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;</span>","<span class=\"c\">         */</span>","        <span class=\"k\">function</span> next<span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>current_page <span class=\"k\">&lt;</span> pageNum <span class=\"k\">-</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                current_page<span class=\"k\">++;</span>","                draw<span class=\"k\">();</span>","                opts<span class=\"k\">.</span>callback<span class=\"k\">(</span>current_page<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">/**</span>","<span class=\"c\">         *&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;</span>","<span class=\"c\">         */</span>","        <span class=\"k\">function</span> prev<span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>current_page <span class=\"k\">&gt;</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                current_page<span class=\"k\">--;</span>","                draw<span class=\"k\">();</span>","                opts<span class=\"k\">.</span>callback<span class=\"k\">(</span>current_page<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">/**</span>","<span class=\"c\">         *&#230;&#183;&#187;&#229;&#138;&#160;&#230;&#150;&#176;&#233;&#147;&#190;&#230;&#142;&#165;</span>","<span class=\"c\">         */</span>","        <span class=\"k\">function</span> addDisplayLink<span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>index <span class=\"k\">!=</span> current_page<span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">return</span> <span class=\"s\">\"&lt;a code='\"</span> <span class=\"k\">+</span> <span class=\"k\">(</span>index <span class=\"k\">+</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\"' class='page-link'&gt;\"</span> <span class=\"k\">+</span> <span class=\"k\">(</span>index <span class=\"k\">+</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\"&lt;/a&gt;\"</span><span class=\"k\">;</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                <span class=\"k\">return</span> <span class=\"s\">\"&lt;a code='\"</span> <span class=\"k\">+</span> <span class=\"k\">(</span>index <span class=\"k\">+</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\"' class='page-link current'&gt;\"</span> <span class=\"k\">+</span> <span class=\"k\">(</span>index <span class=\"k\">+</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\"&lt;/a&gt;\"</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">/**</span>","<span class=\"c\">         *&#231;&#187;&#152;&#229;&#136;&#182;&#233;&#157;&#162;&#230;&#157;&#191;</span>","<span class=\"c\">         */</span>","        <span class=\"k\">function</span> draw<span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> html <span class=\"k\">=</span> <span class=\"s\">\"\"</span><span class=\"k\">;</span>","            <span class=\"k\">var</span> prevHtml <span class=\"k\">=</span> <span class=\"s\">\"&lt;a class='prev'&gt;\"</span> <span class=\"k\">+</span> opts<span class=\"k\">.</span>prev_text <span class=\"k\">+</span> <span class=\"s\">\"&lt;/a&gt;\"</span><span class=\"k\">;</span>","            <span class=\"k\">var</span> nextHtml <span class=\"k\">=</span> <span class=\"s\">\"&lt;a class='next'&gt;\"</span> <span class=\"k\">+</span> opts<span class=\"k\">.</span>next_text <span class=\"k\">+</span> <span class=\"s\">\"&lt;/a&gt;\"</span><span class=\"k\">;</span>","            <span class=\"k\">var</span> otherHtml <span class=\"k\">=</span> <span class=\"s\">\"&lt;a class=other'&gt;\"</span> <span class=\"k\">+</span> <span class=\"s\">\"...\"</span> <span class=\"k\">+</span> <span class=\"s\">\"&lt;/a&gt;\"</span><span class=\"k\">;</span>","            <span class=\"k\">var</span> startHtml <span class=\"k\">=</span> <span class=\"s\">\"\"</span><span class=\"k\">,</span> middleHtml <span class=\"k\">=</span> <span class=\"s\">\"\"</span><span class=\"k\">,</span> endHtml <span class=\"k\">=</span> <span class=\"s\">\"\"</span><span class=\"k\">;</span>","            <span class=\"k\">var</span> block <span class=\"k\">=</span> <span class=\"s\">\"\"</span><span class=\"k\">;</span>","            html <span class=\"k\">=</span> prevHtml<span class=\"k\">;</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>pageNum <span class=\"k\">&lt;=</span> <span class=\"k\">(</span>opts<span class=\"k\">.</span>num_edge_entries <span class=\"k\">*</span> <span class=\"s\">2</span> <span class=\"k\">+</span> <span class=\"s\">3</span><span class=\"k\">))</span> <span class=\"k\">{</span>","                <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span> i <span class=\"k\">&lt;</span> pageNum<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> addDisplayLink<span class=\"k\">(</span>i<span class=\"k\">);</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                <span class=\"c\">//&#232;&#190;&#147;&#229;&#135;&#186;&#229;&#137;&#141;&#233;&#131;&#168;</span>","                <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span> i <span class=\"k\">&lt;</span> opts<span class=\"k\">.</span>num_edge_entries<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> addDisplayLink<span class=\"k\">(</span>i<span class=\"k\">);</span>","                <span class=\"k\">}</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>current_page <span class=\"k\">&gt;=</span> opts<span class=\"k\">.</span>num_edge_entries <span class=\"k\">+</span> <span class=\"s\">1</span> <span class=\"k\">&amp;&amp;</span> current_page <span class=\"k\">&lt;=</span> pageNum <span class=\"k\">-</span> opts<span class=\"k\">.</span>num_edge_entries <span class=\"k\">-</span> <span class=\"s\">2</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> otherHtml<span class=\"k\">;</span>","                    html <span class=\"k\">+=</span> addDisplayLink<span class=\"k\">(</span>current_page<span class=\"k\">);</span>","                    html <span class=\"k\">+=</span> otherHtml<span class=\"k\">;</span>","                <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">if</span> <span class=\"k\">(</span>current_page <span class=\"k\">==</span> opts<span class=\"k\">.</span>num_edge_entries<span class=\"k\">)</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> addDisplayLink<span class=\"k\">(</span>current_page<span class=\"k\">);</span>","                    html <span class=\"k\">+=</span> otherHtml<span class=\"k\">;</span>","                <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">if</span> <span class=\"k\">(</span>current_page <span class=\"k\">==</span> pageNum <span class=\"k\">-</span> opts<span class=\"k\">.</span>num_edge_entries <span class=\"k\">-</span> <span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> otherHtml<span class=\"k\">;</span>","                    html <span class=\"k\">+=</span> addDisplayLink<span class=\"k\">(</span>current_page<span class=\"k\">);</span>","                <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> otherHtml<span class=\"k\">;</span>","                <span class=\"k\">}</span>","                <span class=\"c\">//&#232;&#190;&#147;&#229;&#135;&#186;&#229;&#176;&#190;&#233;&#131;&#168;</span>","                <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> opts<span class=\"k\">.</span>num_edge_entries<span class=\"k\">;</span> i <span class=\"k\">&gt;</span> <span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">--)</span> <span class=\"k\">{</span>","                    html <span class=\"k\">+=</span> addDisplayLink<span class=\"k\">(</span>pageNum <span class=\"k\">-</span> i<span class=\"k\">);</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","            html <span class=\"k\">+=</span> nextHtml<span class=\"k\">;</span>","            content<span class=\"k\">.</span>html<span class=\"k\">(</span>html<span class=\"k\">);</span>","            content<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'.prev'</span><span class=\"k\">).</span>click<span class=\"k\">(</span>prev<span class=\"k\">);</span>","            content<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'.next'</span><span class=\"k\">).</span>click<span class=\"k\">(</span>next<span class=\"k\">);</span>","            content<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'.page-link'</span><span class=\"k\">).</span>click<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","                current_page <span class=\"k\">=</span> parseInt<span class=\"k\">(</span>$<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>attr<span class=\"k\">(</span><span class=\"s\">'code'</span><span class=\"k\">))</span> <span class=\"k\">-</span> <span class=\"s\">1</span><span class=\"k\">;</span>","                draw<span class=\"k\">();</span>","                opts<span class=\"k\">.</span>callback<span class=\"k\">(</span>current_page<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">);</span>","            <span class=\"k\">}</span><span class=\"k\">)</span>","        <span class=\"k\">}</span>","","        <span class=\"k\">var</span> content <span class=\"k\">=</span> jQuery<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">);</span>","        <span class=\"k\">var</span> pageNum <span class=\"k\">=</span> numPages<span class=\"k\">();</span>","        <span class=\"k\">var</span> current_page <span class=\"k\">=</span> opts<span class=\"k\">.</span>current_page<span class=\"k\">;</span>","        <span class=\"c\">// &#229;&#155;&#158;&#232;&#176;&#131;&#229;&#135;&#189;&#230;&#149;&#176;</span>","        draw<span class=\"k\">();</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span>","",""];
_$jscoverage['js/jquery.paginator.js'][7]++;
jQuery.fn.paginator = (function (maxentries, opts) {
  _$jscoverage['js/jquery.paginator.js'][8]++;
  opts = jQuery.extend({items_per_page: 10, num_display_entries: 10, current_page: 0, num_edge_entries: 0, prev_text: "Prev", next_text: "Next", prev_show_always: true, next_show_always: true, callback: (function () {
  _$jscoverage['js/jquery.paginator.js'][18]++;
  return false;
})}, (opts || {}));
  _$jscoverage['js/jquery.paginator.js'][22]++;
  return this.each((function () {
  _$jscoverage['js/jquery.paginator.js'][26]++;
  function numPages() {
    _$jscoverage['js/jquery.paginator.js'][27]++;
    return Math.ceil((maxentries / opts.items_per_page));
}
  _$jscoverage['js/jquery.paginator.js'][33]++;
  function next() {
    _$jscoverage['js/jquery.paginator.js'][34]++;
    if ((current_page < (pageNum - 1))) {
      _$jscoverage['js/jquery.paginator.js'][35]++;
      (current_page++);
      _$jscoverage['js/jquery.paginator.js'][36]++;
      draw();
      _$jscoverage['js/jquery.paginator.js'][37]++;
      opts.callback(current_page, this);
    }
}
  _$jscoverage['js/jquery.paginator.js'][44]++;
  function prev() {
    _$jscoverage['js/jquery.paginator.js'][45]++;
    if ((current_page > 0)) {
      _$jscoverage['js/jquery.paginator.js'][46]++;
      (current_page--);
      _$jscoverage['js/jquery.paginator.js'][47]++;
      draw();
      _$jscoverage['js/jquery.paginator.js'][48]++;
      opts.callback(current_page, this);
    }
}
  _$jscoverage['js/jquery.paginator.js'][55]++;
  function addDisplayLink(index) {
    _$jscoverage['js/jquery.paginator.js'][56]++;
    if ((index != current_page)) {
      _$jscoverage['js/jquery.paginator.js'][57]++;
      return ("<a code='" + (index + 1) + "' class='page-link'>" + (index + 1) + "</a>");
    }
    else {
      _$jscoverage['js/jquery.paginator.js'][59]++;
      return ("<a code='" + (index + 1) + "' class='page-link current'>" + (index + 1) + "</a>");
    }
}
  _$jscoverage['js/jquery.paginator.js'][66]++;
  function draw() {
    _$jscoverage['js/jquery.paginator.js'][67]++;
    var html = "";
    _$jscoverage['js/jquery.paginator.js'][68]++;
    var prevHtml = ("<a class='prev'>" + opts.prev_text + "</a>");
    _$jscoverage['js/jquery.paginator.js'][69]++;
    var nextHtml = ("<a class='next'>" + opts.next_text + "</a>");
    _$jscoverage['js/jquery.paginator.js'][70]++;
    var otherHtml = "<a class=other'>...</a>";
    _$jscoverage['js/jquery.paginator.js'][71]++;
    var startHtml = "", middleHtml = "", endHtml = "";
    _$jscoverage['js/jquery.paginator.js'][72]++;
    var block = "";
    _$jscoverage['js/jquery.paginator.js'][73]++;
    html = prevHtml;
    _$jscoverage['js/jquery.paginator.js'][74]++;
    if ((pageNum <= ((opts.num_edge_entries * 2) + 3))) {
      _$jscoverage['js/jquery.paginator.js'][75]++;
      for (var i = 0; (i < pageNum); (i++)) {
        _$jscoverage['js/jquery.paginator.js'][76]++;
        html += addDisplayLink(i);
}
    }
    else {
      _$jscoverage['js/jquery.paginator.js'][80]++;
      for (var i = 0; (i < opts.num_edge_entries); (i++)) {
        _$jscoverage['js/jquery.paginator.js'][81]++;
        html += addDisplayLink(i);
}
      _$jscoverage['js/jquery.paginator.js'][83]++;
      if (((current_page >= (opts.num_edge_entries + 1)) && (current_page <= (pageNum - opts.num_edge_entries - 2)))) {
        _$jscoverage['js/jquery.paginator.js'][84]++;
        html += otherHtml;
        _$jscoverage['js/jquery.paginator.js'][85]++;
        html += addDisplayLink(current_page);
        _$jscoverage['js/jquery.paginator.js'][86]++;
        html += otherHtml;
      }
      else {
        _$jscoverage['js/jquery.paginator.js'][87]++;
        if ((current_page == opts.num_edge_entries)) {
          _$jscoverage['js/jquery.paginator.js'][88]++;
          html += addDisplayLink(current_page);
          _$jscoverage['js/jquery.paginator.js'][89]++;
          html += otherHtml;
        }
        else {
          _$jscoverage['js/jquery.paginator.js'][90]++;
          if ((current_page == (pageNum - opts.num_edge_entries - 1))) {
            _$jscoverage['js/jquery.paginator.js'][91]++;
            html += otherHtml;
            _$jscoverage['js/jquery.paginator.js'][92]++;
            html += addDisplayLink(current_page);
          }
          else {
            _$jscoverage['js/jquery.paginator.js'][94]++;
            html += otherHtml;
          }
        }
      }
      _$jscoverage['js/jquery.paginator.js'][97]++;
      for (var i = opts.num_edge_entries; (i > 0); (i--)) {
        _$jscoverage['js/jquery.paginator.js'][98]++;
        html += addDisplayLink((pageNum - i));
}
    }
    _$jscoverage['js/jquery.paginator.js'][101]++;
    html += nextHtml;
    _$jscoverage['js/jquery.paginator.js'][102]++;
    content.html(html);
    _$jscoverage['js/jquery.paginator.js'][103]++;
    content.find(".prev").click(prev);
    _$jscoverage['js/jquery.paginator.js'][104]++;
    content.find(".next").click(next);
    _$jscoverage['js/jquery.paginator.js'][105]++;
    content.find(".page-link").click((function () {
  _$jscoverage['js/jquery.paginator.js'][106]++;
  current_page = (parseInt($(this).attr("code")) - 1);
  _$jscoverage['js/jquery.paginator.js'][107]++;
  draw();
  _$jscoverage['js/jquery.paginator.js'][108]++;
  opts.callback(current_page, this);
}));
}
  _$jscoverage['js/jquery.paginator.js'][112]++;
  var content = jQuery(this);
  _$jscoverage['js/jquery.paginator.js'][113]++;
  var pageNum = numPages();
  _$jscoverage['js/jquery.paginator.js'][114]++;
  var current_page = opts.current_page;
  _$jscoverage['js/jquery.paginator.js'][116]++;
  draw();
}));
});
