function convertSourceToImage(source) {
    // convertIpynbToHtml.js에서 사용
    // Base64 이미지 데이터 식별을 위한 정규 표현식
    const base64ImageRegex = /!\[.*?]\(data:image\/(png|jpeg);base64,(.*?)\)/g;

    // 이미지 데이터를 찾고, 각 매치에 대해 이미지 태그 생성
    return source.replace(base64ImageRegex, (match, fileType, imageData) => {
        return `<img src="data:image/${fileType};base64,${imageData}" alt="Embedded Image" />`;
    });
}

function escapeHtml(text) {
    // convertIpynbToHtml.js에서 사용
    return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
    // render.js에서 사용
    // YYYYMMDD 형식의 문자열을 받아 YYYY/MM/DD 형식으로 변환
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);

    return `${year}/${month}/${day}`;
}
