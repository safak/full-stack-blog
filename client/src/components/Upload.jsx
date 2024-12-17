import { IKContext, IKUpload } from "imagekitio-react";


const Upload = () => {

    return (
        <IKContext
            publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            authenticator=''
        >
            <IKUpload
                useUniqueFileName
                // onError=''
                // onSuccess=''
                // onUploadProgress=''
                className="hidden"
            // ref=""
            // accept=""
            />
            <div className="cursor-pointer" onClick=''>

            </div>
        </IKContext>
    )
}

export default Upload