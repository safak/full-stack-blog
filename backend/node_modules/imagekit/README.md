[<img width="250" alt="ImageKit.io" src="https://raw.githubusercontent.com/imagekit-developer/imagekit-javascript/master/assets/imagekit-light-logo.svg"/>](https://imagekit.io)

# ImageKit.io Node.js SDK

[![Node CI](https://github.com/imagekit-developer/imagekit-nodejs/workflows/Node%20CI/badge.svg)](https://github.com/imagekit-developer/imagekit-nodejs/)
[![npm version](https://img.shields.io/npm/v/imagekit)](https://www.npmjs.com/package/imagekit)
[![codecov](https://codecov.io/gh/imagekit-developer/imagekit-nodejs/branch/master/graph/badge.svg)](https://codecov.io/gh/imagekit-developer/imagekit-nodejs)
[![Try imagekit on RunKit](https://badge.runkitcdn.com/imagekit.svg)](https://npm.runkit.com/imagekit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/imagekitio?label=Follow&style=social)](https://twitter.com/ImagekitIo)

Node.js SDK for [ImageKit](https://imagekit.io/) implements the new APIs and interface for different file operations.

ImageKit is complete media storage, optimization, and transformation solution that comes with an [image and video CDN](https://imagekit.io/features/imagekit-infrastructure). It can be integrated with your existing infrastructure - storage like AWS S3, web servers, your CDN, and custom domain names, allowing you to deliver optimized images in minutes with minimal code changes.

##### Table of contents
* [Changelog](#changelog)
* [Installation](#installation)
* [Initialization](#initialization)
* [URL generation](#url-generation)
* [File upload](#file-upload)
* [File management](#file-management)
* [Utility functions](#utility-functions)
* [Rate limits](#rate-limits)
* [Support](#support)
* [Links](#links)

## Installation

Use the following command to download this module. Use the optional `--save` parameter if you wish to save the dependency in your `package.json` file.

```
npm install imagekit --save
# or
pnpm install imagekit --save
# or
bun install imagekit // if you are using [Bun](https://bun.sh/) compiler
# or
yarn add imagekit
```

## Initialization

```js
import ImageKit from "imagekit";

// or

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : "your_public_api_key",
    privateKey : "your_private_api_key",
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
});
```

## Usage
You can use this Node.js SDK for three different methods - URL generation, file upload, and media management operations. The usage of the SDK has been explained below.

* `URL Generation`
* `File Upload`
* `File Management`

## URL Generation

**1. Using image path and image hostname or endpoint**

This method allows you to create an URL to access a file using the relative file path and the ImageKit URL endpoint (`urlEndpoint`). The file can be an image, video or any other static file supported by ImageKit.

```js
// For URL Generation, works for both images and videos
var imageURL = imagekit.url({
    path : "/default-image.jpg",
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/endpoint/",
    transformation : [{
        "height" : "300",
        "width" : "400"
    }]
});
```

This results in a URL like

```
https://ik.imagekit.io/your_imagekit_id/endpoint/tr:h-300,w-400/default-image.jpg
```

**2. Using full image URL**

This method allows you to add transformation parameters to an absolute URL. For example, if you have configured a custom CNAME and have absolute asset URLs in your database or CMS, you will often need this.


```js
var imageURL = imagekit.url({
    src : "https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg",
    transformation : [{
        "height" : "300",
        "width" : "400"
    }]
});
```

This results in a URL like

```
https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg?tr=h-300%2Cw-400
```


The `.url()` method accepts the following parameters

| Option           | Description                    |
| :----------------| :----------------------------- |
| urlEndpoint      | Optional. The base URL to be appended before the path of the image. If not specified, the URL Endpoint specified at the time of SDK initialization is used. For example, https://ik.imagekit.io/your_imagekit_id/endpoint/ |
| path             | Conditional. This is the path at which the image exists. For example, `/path/to/image.jpg`. Either the `path` or `src` parameter needs to be specified for URL generation. |
| src              | Conditional. This is the complete URL of an image already mapped to ImageKit. For example, `https://ik.imagekit.io/your_imagekit_id/endpoint/path/to/image.jpg`. Either the `path` or `src` parameter needs to be specified for URL generation. |
| transformation   | Optional. An array of objects specifying the transformation to be applied in the URL. The transformation name and the value should be specified as a key-value pair in the object. Different steps of a [chained transformation](https://docs.imagekit.io/features/image-transformations/chained-transformations) can be specified as different objects of the array. The complete list of supported transformations in the SDK and some examples of using them are given later. If you use a transformation name that is not specified in the SDK, it gets applied as it is in the URL. |
| transformationPosition | Optional. The default value is `path` that places the transformation string as a path parameter in the URL. It can also be specified as `query`, which adds the transformation string as the URL's query parameter `tr`. If you use the `src` parameter to create the URL, then the transformation string is always added as a query parameter. |
| queryParameters  | Optional. These are the other query parameters that you want to add to the final URL. These can be any query parameters and not necessarily related to ImageKit. Especially useful if you want to add some versioning parameter to your URLs. |
| signed           | Optional. Boolean. Default is `false`. If set to `true`, the SDK generates a signed image URL adding the image signature to the image URL. If you create a URL using the `src` parameter instead of `path`, then do correct `urlEndpoint` for this to work. Otherwise returned URL will have the wrong signature |
| expireSeconds    | Optional. Integer. Meant to be used along with the `signed` parameter to specify the time in seconds from now when the URL should expire. If specified, the URL contains the expiry timestamp in the URL, and the image signature is modified accordingly. |

#### Examples of generating URLs

**1. Chained Transformations as a query parameter**
```js
var imageURL = imagekit.url({
    path : "/default-image.jpg",
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/endpoint/",
    transformation : [{
        "height" : "300",
        "width" : "400"
    }, {
        "rotation" : 90
    }],
    transformationPosition : "query"
});
```
```
https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg?tr=h-300%2Cw-400%3Art-90
```

**2. Sharpening and contrast transforms and a progressive JPG image**

There are some transforms like [Sharpening](https://docs.imagekit.io/features/image-transformations/image-enhancement-and-color-manipulation) that can be added to the URL with or without any other value. To use such transforms without specifying a value, specify the value as "-" in the transformation object. Otherwise, specify the value that you want to be added to this transformation.

```js
var imageURL = imagekit.url({
    src : "https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg",
    transformation : [{
        "format" : "jpg",
        "progressive" : "true",
        "effectSharpen" : "-",
        "effectContrast" : "1"
    }]
});
```
```
//Note that because the `src` parameter was used, the transformation string gets added as a query parameter `tr`
https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg?tr=f-jpg%2Cpr-true%2Ce-sharpen%2Ce-contrast-1
```

**3. Signed URL that expires in 300 seconds with the default URL endpoint and other query parameters**
```js
var imageURL = imagekit.url({
    path : "/default-image.jpg",
    queryParameters : {
        "v" : "123"
    },
    transformation : [{
        "height" : "300",
        "width" : "400"
    }],
    signed : true,
    expireSeconds : 300
});
```
```
https://ik.imagekit.io/your_imagekit_id/tr:h-300,w-400/default-image.jpg?v=123&ik-t=1567358667&ik-s=f2c7cdacbe7707b71a83d49cf1c6110e3d701054
```

**4. Adding overlays**

ImageKit.io enables you to apply overlays to [images](https://docs.imagekit.io/features/image-transformations/overlay-using-layers) and [videos](https://docs.imagekit.io/features/video-transformation/overlay) using the raw parameter with the concept of [layers](https://docs.imagekit.io/features/image-transformations/overlay-using-layers#layers). The raw parameter facilitates incorporating transformations directly in the URL. A layer is a distinct type of transformation that allows you to define an asset to serve as an overlay, along with its positioning and additional transformations.

**Text as overlays**

You can add any text string over a base video or image using a text layer (l-text).

For example:

```js
var imageURL = imagekit.url({
    src: "https://ik.imagekit.io/your_imagekit_id/default-image.jpg",
    transformation: [{
        "width": 400,
        "height": 300
        "raw": "l-text,i-Imagekit,fs-50,l-end"
    }]
});
```
**Sample Result URL**
```
https://ik.imagekit.io/your_imagekit_id/tr:h-300,w-400,l-text,i-Imagekit,fs-50,l-end/default-image.jpg
```

**Image as overlays**

You can add an image over a base video or image using an image layer (l-image).

For example:

```js
var imageURL = imagekit.url({
    src: "https://ik.imagekit.io/your_imagekit_id/default-image.jpg",
    transformation: [{
        "width": 400,
        "height": 300
        "raw": "l-image,i-default-image.jpg,w-100,b-10_CDDC39,l-end"
    }]
});
```
**Sample Result URL**
```
https://ik.imagekit.io/your_imagekit_id/tr:h-300,w-400,l-image,i-default-image.jpg,w-100,b-10_CDDC39,l-end/default-image.jpg
```

**Solid color blocks as overlays**

You can add solid color blocks over a base video or image using an image layer (l-image).

For example:

```js
var imageURL = imagekit.url({
    src: "https://ik.imagekit.io/your_imagekit_id/img/sample-video.mp4",
    transformation: [{
        "width": 400,
        "height": 300
        "raw": "l-image,i-ik_canvas,bg-FF0000,w-300,h-100,l-end"
    }]
});
```
**Sample Result URL**
```
https://ik.imagekit.io/your_imagekit_id/tr:h-300,w-400,l-image,i-ik_canvas,bg-FF0000,w-300,h-100,l-end/img/sample-video.mp4
```

**5. Arithmetic expressions in transformations**

ImageKit allows use of [arithmetic expressions](https://docs.imagekit.io/features/arithmetic-expressions-in-transformations) in certain dimension and position-related parameters, making media transformations more flexible and dynamic.

For example:

```js
var imageURL = imagekit.url({
    src: "https://ik.imagekit.io/your_imagekit_id/default-image.jpg",
    transformation: [{
        "width": "iw_div_4",
        "height": "ih_div_2",
        "border": "cw_mul_0.05_yellow"
    }]
});
```

**Sample Result URL**
```
https://ik.imagekit.io/your_imagekit_id/tr:w-iw_div_4,h-ih_div_2,b-cw_mul_0.05_yellow/default-image.jpg
```


#### List of supported transformations

See the complete list of transformations supported in ImageKit [here](https://docs.imagekit.io/features/image-transformations). The SDK gives a name to each transformation parameter e.g. `height` for `h` and `width` for `w` parameter. It makes your code more readable. If the property does not match any of the following supported options, it is added as it is.

If you want to generate transformations in your application and add them to the URL as it is, use the `raw` parameter.


| Supported Transformation Name | Translates to parameter |
|-------------------------------|-------------------------|
| height | h |
| width | w |
| aspectRatio | ar |
| quality | q |
| crop | c |
| cropMode | cm |
| x | x |
| y | y |
| focus | fo |
| format | f |
| radius | r |
| background | bg |
| border | b |
| rotation | rt |
| blur | bl |
| named | n |
| progressive | pr |
| lossless | lo |
| trim | t |
| metadata | md |
| colorProfile | cp |
| defaultImage | di |
| dpr | dpr |
| effectSharpen | e-sharpen |
| effectUSM | e-usm |
| effectContrast | e-contrast |
| effectGray | e-grayscale |
| effectShadow | e-shadow |
| effectGradient | e-gradient |
| original | orig |
| raw | `replaced by the parameter value` |



## File Upload

The SDK provides a simple interface using the `.upload()` method to upload files to the ImageKit Media Library. It accepts all the parameters supported by the [ImageKit Upload API](https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload).

The `upload()` method requires at least the `file` and the `fileName` parameter to upload a file and returns a callback with the `error` and `result` as arguments. You can pass other parameters supported by the ImageKit upload API using the same parameter name as specified in the upload API documentation. For example, to set tags for a file at the upload time, use the `tags` parameter as defined in the [documentation here](https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload).

Sample usage
```js
// Using Callback Function

imagekit.upload({
    file : <url|base_64|binary>, //required
    fileName : "my_file_name.jpg",   //required
    extensions: [
        {
            name: "google-auto-tagging",
            maxTags: 5,
            minConfidence: 95
        }
    ],
    transformation: {
        pre: 'l-text,i-Imagekit,fs-50,l-end',
        post: [
            {
                type: 'transformation',
                value: 'w-100'
            }
        ]
    },
    checks: {`"file.size" < "1mb"`}, // To run server side checks before uploading files. Notice the quotes around file.size and 1mb.
    isPublished: true
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.upload({
    file : <url|base_64|binary>, //required
    fileName : "my_file_name.jpg",   //required
    extensions: [
        {
            name: "google-auto-tagging",
            maxTags: 5,
            minConfidence: 95
        }
    ],
    transformation: {
        pre: 'l-text,i-Imagekit,fs-50,l-end',
        post: [
            {
                type: 'transformation',
                value: 'w-100'
            }
        ]
    },
    checks={`"file.size" < "1mb"`}
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

If the upload succeeds, `error` will be `null,` and the `result` will be the same as what is received from ImageKit's servers.
If the upload fails, the `error` will be the same as what is received from ImageKit's servers, and the `result` will be null.



## File Management

The SDK provides a simple interface for all the [media APIs mentioned here](https://docs.imagekit.io/api-reference/media-api) to manage your files. You can use a callback function with all API interfaces. The first argument of the callback function is the error, and the second is the result of the API call. The error will be `null` if the API succeeds.

**List & Search Files**

Accepts an object specifying the parameters used to list and search files. All parameters specified in the [documentation here](https://docs.imagekit.io/api-reference/media-api/list-and-search-files) can be passed as-is with the correct values to get the results.

```js
// Using Callback Function

imagekit.listFiles({
    skip : 10,
    limit : 10
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.listFiles({
    skip : 10,
    limit : 10
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Get File Details**

Accepts the file ID and fetches the details as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/get-file-details).

```js
// Using Callback Function

imagekit.getFileDetails("file_id", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.getFileDetails("file_id")
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Get File Versions**

Accepts the file ID and fetches all the versions of that file as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/get-file-versions).

```js
// Using Callback Function

imagekit.getFileVersions("file_id", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.getFileVersions("file_id")
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Get File version details**

Accepts the file ID & version ID and returns the details of that specific version as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/get-file-version-details).

```js
// Using Callback Function

imagekit.getFileVersionDetails({
    fileId: "file_id",
    versionId: "version_id"
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.getFileVersionDetails({
    fileId: "file_id",
    versionId: "version_id"
})
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Update File Details**

Update parameters associated with the file as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/update-file-details). The first argument to the `updateFileDetails` method is the file ID, and the second argument is an object with the parameters to be updated.

Note: If `publish` is included in the update options, no other parameters are allowed. If any are present, an error will be returned: `Your request cannot contain any other parameters when publish is present`.

```js
// Using Callback Function

imagekit.updateFileDetails("file_id", {
    tags : ['image_tag'],
    customCoordinates : "10,10,100,100",
    extensions: [
        {
            name: "google-auto-tagging",
            maxTags: 5,
            minConfidence: 95
        }
    ]
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.updateFileDetails("file_id", {
    publish: {
        isPublished: true,
        includeFileVersions: true
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Bulk Add tags**

Add tags to multiple files in a single request as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/add-tags-bulk). The method accepts an array of fileIDs of the files and an array of tags that have to be added to those files.

```js
// Using Callback Function

imagekit.bulkAddTags(["file_id_1", "file_id_2"], ["tag1", "tag2"], function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.bulkAddTags(["file_id_1", "file_id_2"], ["tag1", "tag2"]).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Bulk Remove tags**

Remove tags from multiple files in a single request as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/remove-tags-bulk). The method accepts an array of fileIDs of the files and an array of tags that have to be removed from those files.

```js
// Using Callback Function

imagekit.bulkRemoveTags(["file_id_1", "file_id_2"], ["tags"], function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.bulkRemoveTags(["file_id_1", "file_id_2"], ["tags"]).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Bulk Remove AI Tags**

Remove AI tags from multiple files in a single request as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/remove-aitags-bulk). The method accepts an array of fileIDs of the files and an array of tags that have to be removed from those files.

```js
// Using Callback Function

imagekit.bulkRemoveAITags(["file_id_1", "file_id_2"], ["ai-tag1", "ai-tag2"], function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.bulkRemoveAITags(["file_id_1", "file_id_2"], ["ai-tag1", "ai-tag2"]).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Delete File**

Delete a file as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/delete-file). The method accepts the file ID of the file that has to be deleted.

```js
// Using Callback Function

imagekit.deleteFile("file_id", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.deleteFile("file_id").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Delete File Version**

Delete any non-current version of a file as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/delete-file-version).

```js
// Using Callback Function

imagekit.deleteFileVersion({
    fileId: "file_id",
    versionId: "version_id",
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.deleteFile({
    fileId: "file_id",
    versionId: "version_id",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Bulk Delete Files**

Delete multiple files as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/delete-files-bulk). The method accepts an array of file IDs of the files that have to be deleted.

```js
// Using Callback Function

imagekit.bulkDeleteFiles(["file_id_1", "file_id_2"], function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.bulkDeleteFiles(["file_id_1", "file_id_2"]).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Copy File**

This will copy a file from one location to another as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/copy-file).

```js
// Using Callback Function

imagekit.copyFile({
    sourceFilePath: "/path/to/file.jpg",
    destinationPath: "/folder/to/copy/into/"
    includeFileVersions: false // optional
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.copyFile({
    sourceFilePath: "/path/to/file.jpg",
    destinationPath: "/folder/to/copy/into/",
     includeFileVersions: false // optional
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Move File**

This will move a file from one location to another as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/move-file).

```js
// Using Callback Function

imagekit.moveFile({
    sourceFilePath: "/path/to/file.jpg",
    destinationPath: "/folder/to/copy/into/",
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.moveFile({
    sourceFilePath: "/path/to/file.jpg",
    destinationPath: "/folder/to/copy/into/",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Rename File**

Rename the file as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/rename-file).

```js
// Using Callback Function

imagekit.renameFile({
    filePath: "/path/to/old-file-name.jpg",
    newFileName: "new-file-name.jpg",
    purgeCache: false // optional
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.renameFile({
    filePath: "/path/to/old-file-name.jpg",
    newFileName: "new-file-name.jpg",
    purgeCache: false // optional
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Restore File Version**

Restore the file version as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/restore-file-version).

```js
// Using Callback Function

imagekit.restoreFileVersion({
    fileId: "file_id",
    versionId: "version_id"
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.restoreFileVersion({
    fileId: "file_id",
    versionId: "version_id"
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Create Folder**

This will create a new folder as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/create-folder).

```js
// Using Callback Function

imagekit.createFolder({
    folderName: "new_folder",
    parentFolderPath: "source/folder/path"
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.createFolder({
    folderName: "new_folder",
    parentFolderPath: "source/folder/path"
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Delete Folder**

This will delete the specified Folder and all nested files & folders as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/delete-folder).

```js
// Using Callback Function

imagekit.deleteFolder("folderPath", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.deleteFolder("folderPath").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Copy Folder**

This will copy one Folder into another as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/copy-folder).

```js
// Using Callback Function

imagekit.copyFolder({
    sourceFolderPath: "/folder/to/copy",
    destinationPath: "/folder/to/copy/into/",
    includeFileVersions: false // optional
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.copyFolder({
    sourceFolderPath: "/folder/to/copy",
    destinationPath: "/folder/to/copy/into/",
    includeFileVersions: false // optional
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Move Folder**

This will move one Folder into another as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/move-folder).

```js
// Using Callback Function

imagekit.moveFolder({
    sourceFolderPath: "/folder/to/move",
    destinationPath: "/folder/to/move/into/"
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.moveFolder({
    sourceFolderPath: "/folder/to/move",
    destinationPath: "/folder/to/move/into/"
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Get bulk job status**

This allows us to get a bulk operation status e.g. copy or move Folder as per [API documentation here](https://docs.imagekit.io/api-reference/media-api/copy-move-folder-status). This method accepts `jobId` that is returned by copy and move folder operations.

```js
// Using Callback Function

imagekit.getBulkJobStatus("jobId", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});

// Using Promises

imagekit.getBulkJobStatus("jobId").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Purge Cache**

Programmatically issue a clear cache request as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/purge-cache). Accepts the full URL of the file for which the cache has to be cleared.

```js
// Using Callback Function

imagekit.purgeCache("full_url", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.purgeCache("full_url").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Purge Cache Status**

Get the purge cache request status using the request ID returned when a purge cache request gets submitted as per the [API documentation here](https://docs.imagekit.io/api-reference/media-api/purge-cache-status)

```js
// Using Callback Function

imagekit.getPurgeCacheStatus("cache_request_id", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises

imagekit.getPurgeCacheStatus("cache_request_id").then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Get File Metadata**

Accepts the file ID and fetches the metadata as per the [API documentation here](https://docs.imagekit.io/api-reference/metadata-api/get-image-metadata-for-uploaded-media-files).

```js
// Using Callback Function
imagekit.getFileMetadata("file_id", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises
imagekit.getFileMetadata("file_id")
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

You can also pass the remote URL of the image to get metadata.

```js
// Using Callback Function
imagekit.getFileMetadata("https://ik.imagekit.io/your_imagekit_id/sample.jpg", function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});


// Using Promises
imagekit.getFileMetadata("https://ik.imagekit.io/your_imagekit_id/sample.jpg")
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Create a custom metadata field**

Create a new custom metadata field as per the [API documentation here](https://docs.imagekit.io/api-reference/custom-metadata-fields-api/create-custom-metadata-field)

```js
// Using Callback Function

imagekit.createCustomMetadataField(
    {
        name: "price",
        label: "price",
        schema: {
            type: "Number",
            minValue: 1000,
            maxValue: 3000
        }
    },
    function(error, result) {
        if(error) console.log(error);
        else console.log(result);
    }
);


// Using Promises

imagekit.createCustomMetadataField(
    {
        name: "price",
        label: "price",
        schema: {
            type: "Number",
            minValue: 1000,
            maxValue: 3000
        }
    }
).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Get all custom metadata fields**

Get the list of all custom metadata fields as per the [API documentation here](https://docs.imagekit.io/api-reference/custom-metadata-fields-api/get-custom-metadata-field)

```js
// Using Callback Function

imagekit.getCustomMetadataFields(
    {
       includeDeleted: false // optional
    },
    function(error, result) {
        if(error) console.log(error);
        else console.log(result);
    }
);


// Using Promises

imagekit.getCustomMetadataFields(
    {
       includeDeleted: false // optional
    }
).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Update a custom metadata field**

Update a custom metadata field as per the [API documentation here](https://docs.imagekit.io/api-reference/custom-metadata-fields-api/update-custom-metadata-field)

```js
// Using Callback Function

imagekit.updateCustomMetadataField(
    "field_id",
    {
        schema: {
            minValue: 500,
            maxValue: 2500
        }
    },
    function(error, result) {
        if(error) console.log(error);
        else console.log(result);
    }
);


// Using Promises

imagekit.updateCustomMetadataField(
    "field_id",
    {
        schema: {
            minValue: 500,
            maxValue: 2500
        }
    },
).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

**Delete a custom metadata field**

delete a custom metadata field as per the [API documentation here](https://docs.imagekit.io/api-reference/custom-metadata-fields-api/delete-custom-metadata-field)

```js
// Using Callback Function

imagekit.deleteCustomMetadataField(
    "field_id",
    function(error, result) {
        if(error) console.log(error);
        else console.log(result);
    }
);


// Using Promises

imagekit.deleteCustomMetadataField(
    "field_id"
).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Utility functions

We have included the following commonly used utility functions in this package.

### Authentication parameter generation

If you want to implement client-side file upload, you will need a token, expiry timestamp, and a valid signature for that upload. The SDK provides a simple method you can use in your backend code to generate these authentication parameters.

*Note: The Private API Key should never be exposed in any client-side code. You must always generate these authentication parameters on the server-side*

```js
var authenticationParameters = imagekit.getAuthenticationParameters(token, expire);
```

Returns
```js
{
    token : "unique_token",
    expire : "valid_expiry_timestamp",
    signature : "generated_signature"
}
```

Both the `token` and `expire` parameters are optional. If not specified, the SDK uses the [uuid](https://www.npmjs.com/package/uuid) package to generate a random token and generate a valid expiry timestamp internally. `token` and `expire` are always returned in the response, no matter if they are provided as an input to this method or not.

### Distance calculation between two pHash values

Perceptual hashing allows you to construct a hash value that uniquely identifies an input image based on an image's contents. For example, [ImageKit.io metadata API](https://docs.imagekit.io/api-reference/metadata-api) returns the pHash value of an image in the response. You can use this value to [find a duplicate (or similar) image](https://docs.imagekit.io/api-reference/metadata-api#using-phash-to-find-similar-or-duplicate-images) by calculating the distance between the two images' pHash value.

This SDK exposes the `pHashDistance` function to calculate the distance between two pHash values. It accepts two pHash hexadecimal strings and returns a numeric value indicative of the level of difference between the two images.

```js
const calculateDistance = () => {
    // asynchronously fetch metadata of two uploaded image files
    // ...
    // Extract pHash strings from both: say 'firstHash' and 'secondHash'
    // ...
    // Calculate the distance between them:
    const distance = imagekit.pHashDistance(firstHash, secondHash);
    return distance;
}
```
#### Distance calculation examples

```js
imagekit.pHashDistance('f06830ca9f1e3e90', 'f06830ca9f1e3e90');
// output: 0 (same image)

imagekit.pHashDistance('2d5ad3936d2e015b', '2d6ed293db36a4fb');
// output: 17 (similar images)

imagekit.pHashDistance('a4a65595ac94518b', '7838873e791f8400');
// output: 37 (dissimilar images)
```
## Access request-id, other response headers and HTTP status code
You can access `$ResponseMetadata` on success or error object to access the HTTP status code and response headers.

```javascript
// Success
var response = await imagekit.getPurgeCacheStatus(requestId);
console.log(response.$ResponseMetadata.statusCode); // 200

// {'content-type': 'application/json', 'x-request-id': 'ee560df4-d44f-455e-a48e-29dfda49aec5'}
console.log(response.$ResponseMetadata.headers);

// Error
try {
    await imagekit.getPurgeCacheStatus(requestId);
} catch (ex) {
    console.log(response.$ResponseMetadata.statusCode); // 404

    // {'content-type': 'application/json', 'x-request-id': 'ee560df4-d44f-455e-a48e-29dfda49aec5'}
    console.log(response.$ResponseMetadata.headers);
}
```

## Rate limits
Except for upload API, all [ImageKit APIs are rate limited](https://docs.imagekit.io/api-reference/api-introduction/rate-limits) to protect the infrastructure from excessive requests rates and to keep ImageKit.io fast and stable for everyone.

When you exceed the rate limits for an endpoint, you will receive a `429` status code. The Node.js library reads the [rate limiting response headers](https://docs.imagekit.io/api-reference/api-introduction/rate-limits#response-headers-to-understand-rate-limits) provided in the API response and adds these in the error argument of the callback or `.catch` when using promises. Please sleep/pause for the number of milliseconds specified by the value of the `X-RateLimit-Reset` property before making additional requests to that endpoint.

| Property | Description |
|----------|-------------|
| `X-RateLimit-Limit` | The maximum number of requests that can be made to this endpoint in the interval specified by the `X-RateLimit-Interval` response header. |
| `X-RateLimit-Reset` | The amount of time in milliseconds before you can make another request to this endpoint. Pause/sleep your workflow for this duration. |
| `X-RateLimit-Interval` | The duration of interval in milliseconds for which this rate limit was exceeded. |

## Verify webhook events

ImageKit sends `x-ik-signature` in the webhook request header, which can be used to verify the authenticity of the webhook request.

Verifying webhook signature is easy with imagekit SDK. All you need is the value of the `x-ik-signature` header, request body, and [webhook secret](https://imagekit.io/dashboard/developer/webhooks) from the ImageKit dashboard.

Here is an example using the express.js server.

```js
const express = require('express');
const Imagekit = require('imagekit');

// Webhook configs
const WEBHOOK_SECRET = 'whsec_...'; // Copy from Imagekit dashboard
const WEBHOOK_EXPIRY_DURATION = 300 * 1000; // 300 seconds for example

const imagekit = new Imagekit({
  publicKey: 'public_...',
  urlEndpoint: 'https://ik.imagekit.io/imagekit_id',
  privateKey: 'private_...',
})

const app = express();

app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const signature = req.headers["x-ik-signature"];
    const requestBody = req.body;
    let webhookResult;
    try {
        webhookResult = imagekit.verifyWebhookEvent(requestBody, signature, WEBHOOK_SECRET);
    } catch (e) {
        // `verifyWebhookEvent` method will throw an error if signature is invalid
        console.log(e);
        res.status(400).send(`Webhook Error`);
    }

    const { timestamp, event } = webhookResult;

    // Check if webhook has expired
    if (timestamp + WEBHOOK_EXPIRY_DURATION < Date.now()) {
        res.status(400).send(`Webhook Error`);
    }

    // Handle webhook
    switch (event.type) {
        case 'video.transformation.accepted':
            // It is triggered when a new video transformation request is accepted for processing. You can use this for debugging purposes.
            break;
        case 'video.transformation.ready':
            // It is triggered when a video encoding is finished, and the transformed resource is ready to be served. You should listen to this webhook and update any flag in your database or CMS against that particular asset so your application can start showing it to users.
            break;
        case 'video.transformation.error':
            // It is triggered if an error occurs during encoding. Listen to this webhook to log the reason. You should check your origin and URL-endpoint settings if the reason is related to download failure. If the reason seems like an error on the ImageKit side, then raise a support ticket at support@imagekit.io.
            break;
        default:
            // ... handle other event types
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    res.send();
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})
```

## Support

For any feedback or to report any issues or general implementation support, please reach out to [support@imagekit.io](mailto:support@imagekit.io)

## Links
* [Documentation](https://docs.imagekit.io)
* [Main website](https://imagekit.io)

## License

Released under the MIT license.
