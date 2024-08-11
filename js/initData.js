let blogList = [];
let blogMenu = [];
let isInitData = false;

async function initDataBlogList() {
    /*
    blogList를 초기화 하기 위한 함수
    if 로컬이라면 blogList = /data/local_blogList.json 데이터 할당
    else if 배포상태이면 blogList = GitHub에 API 데이터 할당
    */
    if (blogList.length > 0) {
        // blogList 데이터가 이미 있을 경우 다시 로딩하지 않기 위함(API 호출 최소화)
        return blogList;
    }

    // 데이터 초기화를 한 번 했다는 것을 알리기 위한 변수
    isInitData = true;

    let response = await fetch(
        url.origin
        + `/data/local_blogList.json`
    );
    blogList = await response.json()

    blogList.sort(function (a, b) {
        return b.date.localeCompare(a.date);
    });
    return blogList;
}

async function initDataBlogMenu() {
    if (blogMenu.length > 0) {
        return blogMenu;
    }

    let response;

    response = await fetch(
        url.origin
        + `/data/local_blogMenu.json`
    );
    blogMenu = await response.json();

    return blogMenu;
}
