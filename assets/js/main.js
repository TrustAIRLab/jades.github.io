$(function () {

  function initSearchBox() {
    var pages = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      // datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,

      prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead({
      minLength: 0,
      highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
      });

    $('#search-box').bind('typeahead:select', function (ev, suggestion) {
      window.location.href = suggestion.url;
    });
  }

  function styleContentToMD() {
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');
  }

  initSearchBox();
  styleContentToMD();
});

$(document).ready(function() {
    $('#example').DataTable({
        // 在这里加入DataTable的配置选项
        "paging":   false, // 开启表格的分页功能
        "ordering": true, // 启用表格的排序功能
        "info":     true,  // 显示底部信息
        "scrollX": true, // 启用水平滚动
    });
});
