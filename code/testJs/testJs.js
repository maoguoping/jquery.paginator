//初始化
function init(num,option){
    $('#pagation').html("");
    $('#pagation').paginator(num,option)
}
QUnit.test( "初始化", function( assert ) {
    init(80,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').html()!="");
});
QUnit.test( "页码总数", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').find('.page-link:last').html()==100/10);
});
QUnit.test( "每页100条", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:100,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').find('.page-link:last').html()==100/100);
});
QUnit.test( "每页30条", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:30,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').find('.page-link:last').html()==Math.ceil(100/30));
});
QUnit.test( "每页10条", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').find('.page-link:last').html()==Math.ceil(100/10));
});
QUnit.test( "默认显示第一页", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').find('.current').html()==1);
});
QUnit.test( "下一页", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    $(".next").trigger("click");
    assert.ok( $('#pagation').find('.current').html()==2);
});
QUnit.test( "上一页", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    $(".next").trigger("click");
    $(".prev").trigger("click");
    assert.ok( $('#pagation').find('.current').html()==1);
});
QUnit.test( "第二页", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:2,
        prev_text:'上一页',
        next_text:"下一页"
    });
    $('[code=2]').trigger("click");
    assert.ok( $('#pagation').find('.current').html()==2);
});
QUnit.test( "边缘页数", function( assert ) {
    init(100,{
        callback:function (index) {
            console.log(index);
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:3,
        prev_text:'上一页',
        next_text:"下一页"
    });
    assert.ok( $('#pagation').find('[code=3]').next().html()=='...');
});
QUnit.test( "异步回调", function( assert ) {
    var text="";
    var done = assert.async(); //表示存在异步，先暂停测试
    init(100,{
        callback:function (index) {
            assert.ok(true, "clicked");
            done(); //表示异步结束，开始测试
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:3,
        prev_text:'上一页',
        next_text:"下一页"
    });
    $('[code=2]').trigger("click");
});
QUnit.test( "回调不置顶", function( assert ) {
    var done = assert.async(); //表示存在异步，先暂停测试
    var top=0;
    init(100,{
        callback:function (index) {
            if($('.prev')!=undefined){
                assert.ok(top==$('.prev').offset().top);
                done(); //表示异步结束，开始测试
            }
        },
        items_per_page:10,
        current_page:0,
        num_edge_entries:3,
        prev_text:'上一页',
        next_text:"下一页"
    });
    top=$('.prev').offset().top;
    $('[code=2]').trigger("click");
});