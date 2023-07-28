const test_data_url = "../json/code-test.json";
 
async function getData(url) {
    const response = await fetch(url);
    var data = await response.json();
    if (response) {
      show(data);
    }
}

getData(test_data_url);

function show(data) {
  document.getElementById('categoryBox').innerHTML = data?.articles?.map((articles, index) => {
   return (`<a href=${articles?.link} class='category-link' id=${index}>
              <div class='box-container' key=${index}>
                <div class='left-container'>
                  <div class='primary-name'>${articles?.primarySectionRouteName}</div>
                  <div class='headline'>${articles?.headline}</div>
                  <div class='standfirst'>${articles?.standfirst}</div>
                </div>
                <div class='right-container'>
                  <img class='thumbnail' src=${articles?.thumbnail?.src} alt=${articles?.thumbnail?.title} />
                </div>
              </div>
            </a>
            <hr>`
)}).join('')};