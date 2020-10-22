var btn = document.querySelector('.btn');
var list = document.querySelector('.list');
//取出存在localStorage裡的資料並轉為陣列型別，如果瀏覽器裡沒存資料則跑空值
var data = JSON.parse(localStorage.getItem('datalist')) || [];

//事件監聽並更新頁面
btn.addEventListener('click',additem,false)
list.addEventListener('click',delitem,false)
//將儲存在localestorage的資料載入到頁面上
updatelist(data);

//更新網頁
function additem(e){
  e.preventDefault();
  var txt = document.querySelector('.textbox').value;
  //定義todo等於陣列{content: 字串}
  var todo = {
    content: txt
  };
  //將todo新增到localstorage
  data.push(todo);
  //再將陣列轉為字串，並將處理好的資料更新
  localStorage.setItem('datalist',JSON.stringify(data));
  //將儲存在localestorage的資料載入到頁面上
  updatelist(data);
  //輸入事項後刪除欄位中的文字
  document.querySelector('.textbox').value = '';
}

//將data裡的資料新增到網頁並更新頁面
function updatelist(data){
  var str = '';
  var len = data.length;
  for(var i=0;i<len;i++){
    //新增刪除圖案並給予data-index
    var button = '<a href="#" class="fas fa-trash" data-index ="'+ i +'"></a>';
    str += '<li data-num = "'+i+'">'+'<span>'+button+data[i].content+'</button>'+'</li>';
  }
  list.innerHTML = str;
}
//刪除新增的待辦事項
function delitem(e){
  e.preventDefault();
  //若節點等於A則往下執行，不等於A即中斷
  var icon = e.target.nodeName;
  if(icon !== 'A'){return;};
  //取得待辦事項編號(A)
  var index = e.target.dataset.index;
    data.splice(index,1);
  //陣列轉為字串儲存到localstorage
    localStorage.setItem('datalist',JSON.stringify(data));
    //將儲存在localestorage的資料載入到頁面上
    updatelist(data);
}

