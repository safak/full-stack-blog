import { IKImage } from 'imagekitio-react'

const Image = ({ src, className, w, h, alt }) => {
    // Jika src kosong atau undefined, jangan render IKImage
    const defaultSrc = 'No_Image_Available.jpg';

    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            path={src || defaultSrc}
            className={className}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            alt={alt}
            width={w}
            height={h}
            // reduce image size with transform
            transformation={[
                {
                    width: w,
                    height: h,
                },
            ]}
        />
    );
};

export default Image