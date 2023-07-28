const test_data_url = "../json/code-test.json";
 
async function getData(url) {
    const response = await fetch(url);
    var data = await response.json();
    if (response.status === 200) {
      show(data);
    } else {
      return Promise.reject(response);
  }
}

getData(test_data_url);

function redirect(link) {
  window.location = link;
}

function show(data) {
  document.getElementById('category-box').innerHTML = data?.articles?.map((articles, index) => {
   return (`<div class='box-container' key=${index}>
                <div class='left-container'>
                  <div class='primary-name' onclick=(redirect('${articles?.link}'))>${articles?.primarySectionRouteName}</div>
                  <div class='headline' onclick=(redirect('${articles?.link}'))>${articles?.headline}</div>
                  <div class='standfirst' onclick=(redirect('${articles?.link}'))>${articles?.standfirst}</div>
                </div>
                <div class='right-container'>
                  <img class='thumbnail' src=${articles?.thumbnail?.src} alt=${articles?.thumbnail?.title} onclick=(redirect('${articles?.link}')) />
                </div>
              </div>
            <hr>`
)}).join('')};