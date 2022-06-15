let $searchWord = $("#gifs");
let $gifTable = $("#giftable");

function gifAdder(image) {
    let request = image.data.length;
    if(request){
        let index = Math.floor(Math.random() * request);
        let $column = $("<div>");
        let $addedImage = $("<img>", {src: image.data[index].images.original.url});
        $column.append($addedImage);
        $gifTable.append($column);
    }
}

$("form").on("submit", async function(event) {
    event.preventDefault();
    let info = $searchWord.val();
    $searchWord.val("");
    const serverResponse = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: { q: info, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    });
    gifAdder(serverResponse.data);
});

$("#deleteGif").on("click", function(){
    $gifTable.empty();
});