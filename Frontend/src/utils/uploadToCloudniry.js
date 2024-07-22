const cloud_name="drlse5soe";
const upload_preset="momentix-social";




// export const uploadToCloudniry = async(pics, fileType) => {

//     if(pics && fileType){
//         const data = new FormData();
//         data.append("file", pics);
//         data.append("upload_preset", upload_preset);
//         data.append("cloud_name", cloud_name);

//         const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}upload`,
//             {method:"post", body:data}
//         )

//         const fileData = await res.json();
//         console.log("res.....", fileData.url)
//         return fileData.url
//     }
//     else{
//         console.log("error.........")
//     }
// }



export const uploadToCloudniry = async (pics, fileType) => {
    if (pics && fileType) {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", upload_preset);
        data.append("cloud_name", cloud_name);

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`, {
                method: "post",
                body: data
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const fileData = await res.json();
            console.log("res.....", fileData.url);
            return fileData.url;
        } catch (error) {
            console.error("Failed to upload to Cloudinary", error);
            return null;
        }
    } else {
        console.log("error.........");
    }
}