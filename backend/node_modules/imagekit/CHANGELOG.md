## Changelog

### SDK Version 6.0.0

### Breaking changes

**1. `listFiles` API response type**
* The `listFiles` method now returns a unified response type, ListFileResponse, which is an array of both `FileObject` and `FolderObject`. Previously, the response contained only `FileObject`. The `type` property in the response object indicates whether the object is a file or a folder. Even though this change has been made to just the type of the return object, it can be considered a breaking change so it may require require any code relying on the `listFiles` response to be updated.

```
const result = await imagekit.listFiles({ skip: 0, limit: 10 });

# Before (Pre-version 5.3.0)
result.forEach((item) => {
    console.log(item);
});

# After (Version 5.3.0 and above)
result.forEach((item) => {
    if (item.type === "folder") {
        console.log(item) // item is of type FolderObject
    } else {
        console.log(item) // item is of type FileObject
    }
});
```


### SDK Version 5.0.0

#### Breaking changes

**1. Overlay syntax update**
* In version 5.0.0, we've removed the old overlay syntax parameters for transformations, such as `oi`, `ot`, `obg`, and [more](https://docs.imagekit.io/features/image-transformations/overlay). These parameters are deprecated and will start returning errors when used in URLs. Please migrate to the new layers syntax that supports overlay nesting, provides better positional control, and allows more transformations at the layer level. You can start with [examples](https://docs.imagekit.io/features/image-transformations/overlay-using-layers#examples) to learn quickly.
* You can migrate to the new layers syntax using the `raw` transformation parameter.

**2. Remove Node.js 10.x support**
* In version 5.0.0, we've removed support for Node.js version 10.x.
