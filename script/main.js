const projectlist = [
  {
    name: "Bootstrap 5",
    text: "使用 Bootstrap 快速完成切版版型，製作SPA網站，加強切版熟練度，並套用js套件製造部份動畫效果",
    img: './images/1673503707657.jpg',
    url: "https://keon981.github.io/bootstrap_project/"
  },
  {
    name: "The F2E",
    text: "參加六角學院舉辦的THE F2E活動，使用套件 GSAP以及JQuery，製作出一個互動式網誌",
    img: './images/f2e.jpg',
    url: 'https://keon981.github.io/THE-F2E/'
  },
  {
    name: "TodoList",
    text: `利用 JavaScript 原生語法實作簡易 Todo List。TodoList 看似簡單的介面，但其實隱藏了很多小細節；`,
    more:`
      <ul class=" list-unstyled">
          <li>選取 DOM 元素</li>
          <li>監聽及更新</li>
          <li>localStorage 和 sessionStorage</li>
        </ul>
        <p class="card-text text-danger"><small>※正在學習react框架，考慮過年期間把原生與法版本的todolist改作成react版本的</small></p>
      `,
    img: './images/todolist.jpg',
    url: 'https://keon981.github.io/Todolist/'
  },
];


$(function () {
  // let button = $("#more-button").find(".btn");
  // button.on('click',function(){
  //   gsap.to(button, 0.2, {scale: 1.2, ease: Power3.easeIn});
  //   gsap.to(button, 0.2, {scale: 1, delay: 0.2, ease: Power3.easeOut});
  // });
  // console.log(1);
  $('#project main').empty()
    .append(projectlist.map(i => {
        return `<div class="col">
          <div class="card flex-row border-0">
              <figure class="card-project rounded-2 overflow-hidden">
                  <a href="${i.url}" target="_blank" class="hover hover-scale bg-img" style="background-image: url(${i.img});">
                      <span class="fs-1 fw-bolder">${i.name}</span>
                      <img src="https://picsum.photos/500/?random=10" class="card-img opacity-0">
                  </a>
              </figure>
              <div class="card-body d-none d-xl-flex flex-column justify-content-center ps-5">
                  <h5 class="card-title">${i.name}</h5>
                  <p class="card-text">${i.text}</p>
                  ${i.more}
              </div>
          </div>
        </div>`

    }));

});
