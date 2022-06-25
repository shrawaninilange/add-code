 
 let API =   "AIzaSyDiBe_qt0Yt0GWSwim5f44MOvJHJNF0BzU"
 let con = document.getElementById("con");
 
 async function searchVideos() {
   try {
    //  let inp = document.getElementById("search").value;
 
     let res = await fetch(
       `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=${API}&part=snippet`
     );
 
     let data = await res.json();
     console.log("data:", data);
 
     let array_of_videos = data.items;
     
     appendVideos(array_of_videos);
   } catch (err) {
     console.log("err:", err);
   }
 }

 searchVideos()
     
 const appendVideos = (arr) => {
   arr.forEach(({ id: { videoId } }) => {
     // console.log("videoId:", videoId);
     let div = document.createElement("div");
 
     let iframe = document.createElement("iframe");
     iframe.src = `https://www.youtube.com/embed/${videoId}`;
     iframe.width = "460px";
     iframe.height = "260px";
     iframe.allowfullscreen = "true";
 
     iframe.setAttribute("allowfullscreen", true);
 
     div.append(iframe);
 
    con.append(div);
   });
 };
 
 
 
 
 
 
 
  