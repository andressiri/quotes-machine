import domtoimage from 'dom-to-image';

async function getUrl (blob) {
  return new Promise( async function (resolve, reject) {
    const formData = new FormData();
    formData.append("image", blob);
    await fetch( 'https://api.imgur.com/3/image', {
        method: 'POST',
        headers: { Authorization: "Bearer 7a79cd2434e467f3a6460bb7bbdbea8e6f01e222" }, 
        body: formData    //Notice that imgur API doesn't work from localhost
    })                    //while testing this functionality must change localhost:port: to 127.0.0.1:port:
    .then(data => data.json())
    .then(data => {
        const link = data.data.link;
        resolve(link);
    })
    .catch(function (error) {
        reject(console.error('oops, something went wrong uploading the image!', error));
    });
});    
}

async function getImgUrl (imgRef) {
  const imgBlob = await domtoimage.toBlob(imgRef);
  const imgUrl = await getUrl(imgBlob);
  return imgUrl;
};

export default getImgUrl;
