function generateHashtag(str) {
    if (str.length ===0) {return false};

    const tag = str.split(" ").reduce((hashtag, word) => {
        const trimmed = word.trim();
        hashtag = hashtag + trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        return hashtag;
    }, "#")

    return tag.length < 141 ? tag : false;
}
console.log(generateHashtag(""))
module.exports = generateHashtag;
