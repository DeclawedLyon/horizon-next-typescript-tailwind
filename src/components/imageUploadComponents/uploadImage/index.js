import React, { useState } from "react";
import Head from "next/head";
import TransformImage from "../../components/userInterfaceComponents/TransformImage";

const cloudinaryAccount = "ncjeowal2u34o";
const uploadPreset = 'frpa1olz'

const IndexPage = () => {
  const [imagePublicId, setImagePublicId] = useState("");
  const [alt, setAlt] = useState("");
  const [crop, setCrop] = useState("scale");
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudinaryAccount,
        uploadPreset: uploadPreset
      },
      (error, result) => {
        if (
          result.event === "success" &&
          result.info.resource_type === "image"
        ) {
          console.log(result.info);
          setImagePublicId(result.info.public_id);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };
  return (
    <>
      <Head>
        <title>How to Crop and Resize Image in the Browser</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Head>
      <div className="main">
        <div
          className="splitdiv"
          id="leftdiv"
          style={{
            height: "100%",
            width: "50%",
            backgroundColor: "#fafafa",
            float: "left",
            height: "932px",
          }}
        >
          <h1 className="main-h1">
            How to Crop, Resize & Upload Image in the Browser using Cloudinary
            Transformation
          </h1>
          <div
            id="leftdivcard"
            style={{
              margin: "0 auto",
              width: "50%",
              backgroundColor: "green" || "white",
              marginTop: "25vh",
              transform: "translateY(-50%)",
              boxShadow: "10px 10px 1px 0px rgba(78, 205, 196, 0.2)",
              borderRadius: "10px",
            }}
          >
            <h2 className="main-h2">Resize Options</h2>
          </div>

          <button
            type="button"
            id="leftbutton"
            style={{
              backgroundColor: "#512cf3",
              borderRadius: "5px",
              color: "#fafafa",
              marginLeft: "350px",
            }}
            onClick={openWidget}
          >
            Upload Image
          </button>
        </div>

        <div
          className="splitdiv"
          id="rightdiv"
          style={{
            height: "100%",
            width: "50%",
            backgroundColor: "#cbcfcf",
            float: "right",
            height: "932px",
          }}
        >
          <h1> Image will appear here</h1>
          <div id="rightdivcard" style={{margin: '0 auto', width: '50%', marginTop: '50vh', transform: 'translateY(-50%)', backgroundPosition: 'bottom', backgroundSize: '20px 2px', backgroundRepeat: 'repeat-x'}}>
            {imagePublicId ? (
              <TransformImage
                crop={crop}
                image={imagePublicId}
                width={width}
                height={height}
                cloudName={cloudinaryAccount}
              />
            ) : (
              <h1> Image will appear here</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
