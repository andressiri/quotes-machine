const getUrl = async (blob) => {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append('image', blob);
    await fetch( 'https://api.imgur.com/3/image', {
      method: 'POST',
      headers: { Authorization: 'Bearer 7a79cd2434e467f3a6460bb7bbdbea8e6f01e222' }, 
      body: formData    //Notice that imgur API doesn't work from localhost
    })                  //while testing this functionality must change localhost:port: to 127.0.0.1:port:
    .then(data => data.json())
    .then(data => {
      resolve(data);
    })
    .catch((error) => {
      console.error('oops, something went wrong uploading the image!');
      console.log(error);
      reject(error);
    });
  });
};

const getImgUrl = async (imgBlob) => {
  const imgurData = await getUrl(imgBlob);
  return imgurData;
};

export default getImgUrl;