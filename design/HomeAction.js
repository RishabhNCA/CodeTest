import data from 'C:/Users/Rishabh/Desktop/NCA-Code-Test/code-test/json/code-test.json' assert { type: 'json' };

document.getElementById('categoryBox').innerHTML = data?.articles?.map((articles, index) => {
   return (`<a href=${articles?.link} class='category-link' id=${index}>
              <div class='box-container' key=${index}>
                <div class='left-container'>
                  <div class='primary-name'>${articles?.primarySectionRouteName}</div>
                  <div class='headline'>${articles?.headline}</div>
                  <div class='standfirst'>${articles?.standfirst}</div>
                </div>
                <div class='right-container'>
                  <img src=${articles?.thumbnail?.src} alt=${articles?.thumbnail?.title} width=${articles?.thumbnail?.width} height=${articles?.thumbnail?.height} />
                </div>
              </div>
            </a>
            <hr>`
)}).join('')