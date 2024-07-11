

const ProductFeatures = () => {
    return (
        <div className="hidden xl:flex flex-col gap-1.5">
            <span className="font-medium text-2xl uppercase">key features</span>
            <ul className="key-features flex flex-col gap-2.5 text-lg font-medium">
                <li>
                    <span>ram</span>
                    <span>6GB</span>
                </li>
                <li>
                    <span>battery</span>
                    <span>Li-Ion 2815 mAh</span>
                </li>
                <li>
                    <span>network support</span>
                    <span>3G / LTE / 5G</span>
                </li>
                <li>
                    <span>screen display</span>
                    <span>Super Retina XDR OLED, HDR10</span>
                </li>
                <li>
                    <span>sensors</span>
                    <span>Face ID, accelerometer, gyro, Wideband (UWB) support</span>
                </li>
            </ul>
        </div>
    )
}

export default ProductFeatures