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
if (! _$jscoverage['testJs/testJs.js']) {
  _$jscoverage['testJs/testJs.js'] = [];
  _$jscoverage['testJs/testJs.js'][2] = 0;
  _$jscoverage['testJs/testJs.js'][3] = 0;
  _$jscoverage['testJs/testJs.js'][4] = 0;
  _$jscoverage['testJs/testJs.js'][6] = 0;
  _$jscoverage['testJs/testJs.js'][7] = 0;
  _$jscoverage['testJs/testJs.js'][9] = 0;
  _$jscoverage['testJs/testJs.js'][17] = 0;
  _$jscoverage['testJs/testJs.js'][19] = 0;
  _$jscoverage['testJs/testJs.js'][20] = 0;
  _$jscoverage['testJs/testJs.js'][22] = 0;
  _$jscoverage['testJs/testJs.js'][30] = 0;
  _$jscoverage['testJs/testJs.js'][32] = 0;
  _$jscoverage['testJs/testJs.js'][33] = 0;
  _$jscoverage['testJs/testJs.js'][35] = 0;
  _$jscoverage['testJs/testJs.js'][43] = 0;
  _$jscoverage['testJs/testJs.js'][45] = 0;
  _$jscoverage['testJs/testJs.js'][46] = 0;
  _$jscoverage['testJs/testJs.js'][48] = 0;
  _$jscoverage['testJs/testJs.js'][56] = 0;
  _$jscoverage['testJs/testJs.js'][58] = 0;
  _$jscoverage['testJs/testJs.js'][59] = 0;
  _$jscoverage['testJs/testJs.js'][61] = 0;
  _$jscoverage['testJs/testJs.js'][69] = 0;
  _$jscoverage['testJs/testJs.js'][71] = 0;
  _$jscoverage['testJs/testJs.js'][72] = 0;
  _$jscoverage['testJs/testJs.js'][74] = 0;
  _$jscoverage['testJs/testJs.js'][82] = 0;
  _$jscoverage['testJs/testJs.js'][84] = 0;
  _$jscoverage['testJs/testJs.js'][85] = 0;
  _$jscoverage['testJs/testJs.js'][87] = 0;
  _$jscoverage['testJs/testJs.js'][95] = 0;
  _$jscoverage['testJs/testJs.js'][96] = 0;
  _$jscoverage['testJs/testJs.js'][98] = 0;
  _$jscoverage['testJs/testJs.js'][99] = 0;
  _$jscoverage['testJs/testJs.js'][101] = 0;
  _$jscoverage['testJs/testJs.js'][109] = 0;
  _$jscoverage['testJs/testJs.js'][110] = 0;
  _$jscoverage['testJs/testJs.js'][111] = 0;
  _$jscoverage['testJs/testJs.js'][113] = 0;
  _$jscoverage['testJs/testJs.js'][114] = 0;
  _$jscoverage['testJs/testJs.js'][116] = 0;
  _$jscoverage['testJs/testJs.js'][124] = 0;
  _$jscoverage['testJs/testJs.js'][125] = 0;
  _$jscoverage['testJs/testJs.js'][127] = 0;
  _$jscoverage['testJs/testJs.js'][128] = 0;
  _$jscoverage['testJs/testJs.js'][130] = 0;
  _$jscoverage['testJs/testJs.js'][138] = 0;
  _$jscoverage['testJs/testJs.js'][140] = 0;
  _$jscoverage['testJs/testJs.js'][141] = 0;
  _$jscoverage['testJs/testJs.js'][142] = 0;
  _$jscoverage['testJs/testJs.js'][143] = 0;
  _$jscoverage['testJs/testJs.js'][145] = 0;
  _$jscoverage['testJs/testJs.js'][146] = 0;
  _$jscoverage['testJs/testJs.js'][154] = 0;
  _$jscoverage['testJs/testJs.js'][156] = 0;
  _$jscoverage['testJs/testJs.js'][157] = 0;
  _$jscoverage['testJs/testJs.js'][158] = 0;
  _$jscoverage['testJs/testJs.js'][159] = 0;
  _$jscoverage['testJs/testJs.js'][161] = 0;
  _$jscoverage['testJs/testJs.js'][162] = 0;
  _$jscoverage['testJs/testJs.js'][163] = 0;
  _$jscoverage['testJs/testJs.js'][172] = 0;
  _$jscoverage['testJs/testJs.js'][173] = 0;
}
_$jscoverage['testJs/testJs.js'].source = ["<span class=\"c\">//&#229;&#136;&#157;&#229;&#167;&#139;&#229;&#140;&#150;</span>","<span class=\"k\">function</span> init<span class=\"k\">(</span>num<span class=\"k\">,</span>option<span class=\"k\">)</span><span class=\"k\">{</span>","    $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>html<span class=\"k\">(</span><span class=\"s\">\"\"</span><span class=\"k\">);</span>","    $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>paginator<span class=\"k\">(</span>num<span class=\"k\">,</span>option<span class=\"k\">)</span>","<span class=\"k\">}</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#229;&#136;&#157;&#229;&#167;&#139;&#229;&#140;&#150;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">80</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>html<span class=\"k\">()!=</span><span class=\"s\">\"\"</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#233;&#161;&#181;&#231;&#160;&#129;&#230;&#128;&#187;&#230;&#149;&#176;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.page-link:last'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span><span class=\"s\">100</span><span class=\"k\">/</span><span class=\"s\">10</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#230;&#175;&#143;&#233;&#161;&#181;100&#230;&#157;&#161;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">100</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.page-link:last'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span><span class=\"s\">100</span><span class=\"k\">/</span><span class=\"s\">100</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#230;&#175;&#143;&#233;&#161;&#181;30&#230;&#157;&#161;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">30</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.page-link:last'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span>Math<span class=\"k\">.</span>ceil<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">/</span><span class=\"s\">30</span><span class=\"k\">));</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#230;&#175;&#143;&#233;&#161;&#181;10&#230;&#157;&#161;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.page-link:last'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span>Math<span class=\"k\">.</span>ceil<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">/</span><span class=\"s\">10</span><span class=\"k\">));</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#233;&#187;&#152;&#232;&#174;&#164;&#230;&#152;&#190;&#231;&#164;&#186;&#231;&#172;&#172;&#228;&#184;&#128;&#233;&#161;&#181;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.current'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span><span class=\"s\">1</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    $<span class=\"k\">(</span><span class=\"s\">\".next\"</span><span class=\"k\">).</span>trigger<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.current'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span><span class=\"s\">2</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    $<span class=\"k\">(</span><span class=\"s\">\".next\"</span><span class=\"k\">).</span>trigger<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">);</span>","    $<span class=\"k\">(</span><span class=\"s\">\".prev\"</span><span class=\"k\">).</span>trigger<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.current'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span><span class=\"s\">1</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#231;&#172;&#172;&#228;&#186;&#140;&#233;&#161;&#181;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">2</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    $<span class=\"k\">(</span><span class=\"s\">'[code=2]'</span><span class=\"k\">).</span>trigger<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'.current'</span><span class=\"k\">).</span>html<span class=\"k\">()==</span><span class=\"s\">2</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#232;&#190;&#185;&#231;&#188;&#152;&#233;&#161;&#181;&#230;&#149;&#176;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            console<span class=\"k\">.</span>log<span class=\"k\">(</span>index<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">3</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    assert<span class=\"k\">.</span>ok<span class=\"k\">(</span> $<span class=\"k\">(</span><span class=\"s\">'#pagation'</span><span class=\"k\">).</span>find<span class=\"k\">(</span><span class=\"s\">'[code=3]'</span><span class=\"k\">).</span>next<span class=\"k\">().</span>html<span class=\"k\">()==</span><span class=\"s\">'...'</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#229;&#188;&#130;&#230;&#173;&#165;&#229;&#155;&#158;&#232;&#176;&#131;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> text<span class=\"k\">=</span><span class=\"s\">\"\"</span><span class=\"k\">;</span>","    <span class=\"k\">var</span> done <span class=\"k\">=</span> assert<span class=\"k\">.</span>async<span class=\"k\">();</span> <span class=\"c\">//&#232;&#161;&#168;&#231;&#164;&#186;&#229;&#173;&#152;&#229;&#156;&#168;&#229;&#188;&#130;&#230;&#173;&#165;&#239;&#188;&#140;&#229;&#133;&#136;&#230;&#154;&#130;&#229;&#129;&#156;&#230;&#181;&#139;&#232;&#175;&#149;</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            assert<span class=\"k\">.</span>ok<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">,</span> <span class=\"s\">\"clicked\"</span><span class=\"k\">);</span>","            done<span class=\"k\">();</span> <span class=\"c\">//&#232;&#161;&#168;&#231;&#164;&#186;&#229;&#188;&#130;&#230;&#173;&#165;&#231;&#187;&#147;&#230;&#157;&#159;&#239;&#188;&#140;&#229;&#188;&#128;&#229;&#167;&#139;&#230;&#181;&#139;&#232;&#175;&#149;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">3</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    $<span class=\"k\">(</span><span class=\"s\">'[code=2]'</span><span class=\"k\">).</span>trigger<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","QUnit<span class=\"k\">.</span>test<span class=\"k\">(</span> <span class=\"s\">\"&#229;&#155;&#158;&#232;&#176;&#131;&#228;&#184;&#141;&#231;&#189;&#174;&#233;&#161;&#182;\"</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span> assert <span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> done <span class=\"k\">=</span> assert<span class=\"k\">.</span>async<span class=\"k\">();</span> <span class=\"c\">//&#232;&#161;&#168;&#231;&#164;&#186;&#229;&#173;&#152;&#229;&#156;&#168;&#229;&#188;&#130;&#230;&#173;&#165;&#239;&#188;&#140;&#229;&#133;&#136;&#230;&#154;&#130;&#229;&#129;&#156;&#230;&#181;&#139;&#232;&#175;&#149;</span>","    <span class=\"k\">var</span> top<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span>","    init<span class=\"k\">(</span><span class=\"s\">100</span><span class=\"k\">,</span><span class=\"k\">{</span>","        callback<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>index<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>$<span class=\"k\">(</span><span class=\"s\">'.prev'</span><span class=\"k\">)!=</span>undefined<span class=\"k\">)</span><span class=\"k\">{</span>","                assert<span class=\"k\">.</span>ok<span class=\"k\">(</span>top<span class=\"k\">==</span>$<span class=\"k\">(</span><span class=\"s\">'.prev'</span><span class=\"k\">).</span>offset<span class=\"k\">().</span>top<span class=\"k\">);</span>","                done<span class=\"k\">();</span> <span class=\"c\">//&#232;&#161;&#168;&#231;&#164;&#186;&#229;&#188;&#130;&#230;&#173;&#165;&#231;&#187;&#147;&#230;&#157;&#159;&#239;&#188;&#140;&#229;&#188;&#128;&#229;&#167;&#139;&#230;&#181;&#139;&#232;&#175;&#149;</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        items_per_page<span class=\"k\">:</span><span class=\"s\">10</span><span class=\"k\">,</span>","        current_page<span class=\"k\">:</span><span class=\"s\">0</span><span class=\"k\">,</span>","        num_edge_entries<span class=\"k\">:</span><span class=\"s\">3</span><span class=\"k\">,</span>","        prev_text<span class=\"k\">:</span><span class=\"s\">'&#228;&#184;&#138;&#228;&#184;&#128;&#233;&#161;&#181;'</span><span class=\"k\">,</span>","        next_text<span class=\"k\">:</span><span class=\"s\">\"&#228;&#184;&#139;&#228;&#184;&#128;&#233;&#161;&#181;\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    top<span class=\"k\">=</span>$<span class=\"k\">(</span><span class=\"s\">'.prev'</span><span class=\"k\">).</span>offset<span class=\"k\">().</span>top<span class=\"k\">;</span>","    $<span class=\"k\">(</span><span class=\"s\">'[code=2]'</span><span class=\"k\">).</span>trigger<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['testJs/testJs.js'][2]++;
function init(num, option) {
  _$jscoverage['testJs/testJs.js'][3]++;
  $("#pagation").html("");
  _$jscoverage['testJs/testJs.js'][4]++;
  $("#pagation").paginator(num, option);
}
_$jscoverage['testJs/testJs.js'][6]++;
QUnit.test("\u00e5\u0088\u009d\u00e5\u00a7\u008b\u00e5\u008c\u0096", (function (assert) {
  _$jscoverage['testJs/testJs.js'][7]++;
  init(80, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][9]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][17]++;
  assert.ok(($("#pagation").html() != ""));
}));
_$jscoverage['testJs/testJs.js'][19]++;
QUnit.test("\u00e9\u00a1\u00b5\u00e7\u00a0\u0081\u00e6\u0080\u00bb\u00e6\u0095\u00b0", (function (assert) {
  _$jscoverage['testJs/testJs.js'][20]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][22]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][30]++;
  assert.ok(($("#pagation").find(".page-link:last").html() == 10));
}));
_$jscoverage['testJs/testJs.js'][32]++;
QUnit.test("\u00e6\u00af\u008f\u00e9\u00a1\u00b5100\u00e6\u009d\u00a1", (function (assert) {
  _$jscoverage['testJs/testJs.js'][33]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][35]++;
  console.log(index);
}), items_per_page: 100, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][43]++;
  assert.ok(($("#pagation").find(".page-link:last").html() == 1));
}));
_$jscoverage['testJs/testJs.js'][45]++;
QUnit.test("\u00e6\u00af\u008f\u00e9\u00a1\u00b530\u00e6\u009d\u00a1", (function (assert) {
  _$jscoverage['testJs/testJs.js'][46]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][48]++;
  console.log(index);
}), items_per_page: 30, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][56]++;
  assert.ok(($("#pagation").find(".page-link:last").html() == Math.ceil(3.3333333333333335)));
}));
_$jscoverage['testJs/testJs.js'][58]++;
QUnit.test("\u00e6\u00af\u008f\u00e9\u00a1\u00b510\u00e6\u009d\u00a1", (function (assert) {
  _$jscoverage['testJs/testJs.js'][59]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][61]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][69]++;
  assert.ok(($("#pagation").find(".page-link:last").html() == Math.ceil(10)));
}));
_$jscoverage['testJs/testJs.js'][71]++;
QUnit.test("\u00e9\u00bb\u0098\u00e8\u00ae\u00a4\u00e6\u0098\u00be\u00e7\u00a4\u00ba\u00e7\u00ac\u00ac\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", (function (assert) {
  _$jscoverage['testJs/testJs.js'][72]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][74]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][82]++;
  assert.ok(($("#pagation").find(".current").html() == 1));
}));
_$jscoverage['testJs/testJs.js'][84]++;
QUnit.test("\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", (function (assert) {
  _$jscoverage['testJs/testJs.js'][85]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][87]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][95]++;
  $(".next").trigger("click");
  _$jscoverage['testJs/testJs.js'][96]++;
  assert.ok(($("#pagation").find(".current").html() == 2));
}));
_$jscoverage['testJs/testJs.js'][98]++;
QUnit.test("\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", (function (assert) {
  _$jscoverage['testJs/testJs.js'][99]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][101]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][109]++;
  $(".next").trigger("click");
  _$jscoverage['testJs/testJs.js'][110]++;
  $(".prev").trigger("click");
  _$jscoverage['testJs/testJs.js'][111]++;
  assert.ok(($("#pagation").find(".current").html() == 1));
}));
_$jscoverage['testJs/testJs.js'][113]++;
QUnit.test("\u00e7\u00ac\u00ac\u00e4\u00ba\u008c\u00e9\u00a1\u00b5", (function (assert) {
  _$jscoverage['testJs/testJs.js'][114]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][116]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 2, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][124]++;
  $("[code=2]").trigger("click");
  _$jscoverage['testJs/testJs.js'][125]++;
  assert.ok(($("#pagation").find(".current").html() == 2));
}));
_$jscoverage['testJs/testJs.js'][127]++;
QUnit.test("\u00e8\u00be\u00b9\u00e7\u00bc\u0098\u00e9\u00a1\u00b5\u00e6\u0095\u00b0", (function (assert) {
  _$jscoverage['testJs/testJs.js'][128]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][130]++;
  console.log(index);
}), items_per_page: 10, current_page: 0, num_edge_entries: 3, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][138]++;
  assert.ok(($("#pagation").find("[code=3]").next().html() == "..."));
}));
_$jscoverage['testJs/testJs.js'][140]++;
QUnit.test("\u00e5\u00bc\u0082\u00e6\u00ad\u00a5\u00e5\u009b\u009e\u00e8\u00b0\u0083", (function (assert) {
  _$jscoverage['testJs/testJs.js'][141]++;
  var text = "";
  _$jscoverage['testJs/testJs.js'][142]++;
  var done = assert.async();
  _$jscoverage['testJs/testJs.js'][143]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][145]++;
  assert.ok(true, "clicked");
  _$jscoverage['testJs/testJs.js'][146]++;
  done();
}), items_per_page: 10, current_page: 0, num_edge_entries: 3, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][154]++;
  $("[code=2]").trigger("click");
}));
_$jscoverage['testJs/testJs.js'][156]++;
QUnit.test("\u00e5\u009b\u009e\u00e8\u00b0\u0083\u00e4\u00b8\u008d\u00e7\u00bd\u00ae\u00e9\u00a1\u00b6", (function (assert) {
  _$jscoverage['testJs/testJs.js'][157]++;
  var done = assert.async();
  _$jscoverage['testJs/testJs.js'][158]++;
  var top = 0;
  _$jscoverage['testJs/testJs.js'][159]++;
  init(100, {callback: (function (index) {
  _$jscoverage['testJs/testJs.js'][161]++;
  if (($(".prev") != undefined)) {
    _$jscoverage['testJs/testJs.js'][162]++;
    assert.ok((top == $(".prev").offset().top));
    _$jscoverage['testJs/testJs.js'][163]++;
    done();
  }
}), items_per_page: 10, current_page: 0, num_edge_entries: 3, prev_text: "\u00e4\u00b8\u008a\u00e4\u00b8\u0080\u00e9\u00a1\u00b5", next_text: "\u00e4\u00b8\u008b\u00e4\u00b8\u0080\u00e9\u00a1\u00b5"});
  _$jscoverage['testJs/testJs.js'][172]++;
  top = $(".prev").offset().top;
  _$jscoverage['testJs/testJs.js'][173]++;
  $("[code=2]").trigger("click");
}));
