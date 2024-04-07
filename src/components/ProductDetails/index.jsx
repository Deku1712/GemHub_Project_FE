import React, { useState } from 'react';
import productsImage from "../../assets/imgs/imageProduct.webp";
import productsImage2 from "../../assets/imgs/imageProduct2.webp";
import productsImage3 from "../../assets/imgs/ring1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="sm:w-full pr-4 pl-4">
            <div class="flex flex-wrap mr-[-15px] ml-[-15px]">
                <div className="sm:w-full pr-4 pl-4 md:w-1/2 lg:w-1/2 relative flex">
                    <div className="large-image w-4/5 pr-4">
                        <a href="//bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-editted-cropvi-2311-4-033-1-1.jpg?v=1703586081773" data-rel="prettyPhoto[product-gallery]">
                            <img id="zoom_01" src={productsImage} alt="R MIDI BUBBLE HEART" className="img-responsive center-block" />
                        </a>
                        <div className="hidden">
                            <div className="item">
                                <a href="https://bizweb.dktcdn.net/100/302/551/products/compressed-editted-cropvi-2311-4-033-1-1.jpg?v=1703586081773" data-image="https://bizweb.dktcdn.net/100/302/551/products/compressed-editted-cropvi-2311-4-033-1-1.jpg?v=1703586081773" data-zoom-image="https://bizweb.dktcdn.net/100/302/551/products/compressed-editted-cropvi-2311-4-033-1-1.jpg?v=1703586081773" data-rel="prettyPhoto[product-gallery]">
                                </a>
                            </div>
                            <div className="item">
                                <a href="https://bizweb.dktcdn.net/100/302/551/products/compressed-editted-cropvi-2311-4-033-1.jpg?v=1703586087400" data-image="https://bizweb.dktcdn.net/100/302/551/products/compressed-editted-cropvi-2311-4-033-1.jpg?v=1703586087400" data-zoom-image="https://bizweb.dktcdn.net/100/302/551/products/compressed-editted-cropvi-2311-4-033-1.jpg?v=1703586087400" data-rel="prettyPhoto[product-gallery]">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="gallery_01" className="w-1/5" data-margin="10" data-items="5" data-direction="vertical" style={{ height: 470, cursor: "grab" }}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active mb-2 overflow-hidden" style={{ height: 94 }}>
                                <a href="//bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-editted-cropvi-2311-4-033-1-1.jpg?v=1703586081773" className="thumb-link" title="" rel="//bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-editted-cropvi-2311-4-033-1-1.jpg?v=1703586081773">
                                    <img src={productsImage2} alt="R MIDI BUBBLE HEART" />
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-next" style={{ height: 94 }}>
                                <a href="//bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-editted-cropvi-2311-4-033-1.jpg?v=1703586087400" className="thumb-link" title="" rel="//bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-editted-cropvi-2311-4-033-1.jpg?v=1703586087400">
                                    <img src={productsImage3} alt="R MIDI BUBBLE HEART" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-full pr-4 pl-4 md:w-1/2 lg:w-1/2 details-pro">
                    <h1 className="text-2xl font-sans font-normal text-[#363636] mt-0 mb-3">TR DOUBLE BUBBLE HEART OXIDIZE</h1>
                    <div className="text-sm mb-3 pb-3 border-b-[#ebebeb] border-b border-solid text-stone-950 font-normal font-sans">
                        Tình trạng:
                        <a href="https://m.me/katjewelry" target="_blank" title="Liên hệ FB"><span className="text-rose-600">Liên hệ Facebook để check số lượng 4 sản phẩm</span></a>
                        <span className="-translate-y-px inline-block mx-[5px] my-0">|</span>
                        Mã SP:
                        <span className="text-stone-500">
                            NA-2311-4-089
                        </span>
                    </div>
                    <div className="text-sm mb-3 text-stone-500 font-normal font-sans">
                        <div className="rte description">
                            Thông tin sản phẩm đang được cập nhật.
                        </div>
                    </div>
                    <div className="mt-2.5 mb-[25px] mx-0 pt-[30px] border-t-[#ebebeb] border-t border-solid">
                        <div className="special-price"><span className="text-[2.50000em] inline-block text-[#42210b] leading-5 font-medium">270.000<span class="text-2xl align-text-top">đ</span></span> </div> {/* Giá */}
                    </div>
                    <div className="form-product">
                        <form enctype="multipart/form-data" id="add-to-cart-form" action="/cart/add" method="post" className="form-inline margin-bottom-10">
                            <div className="box-variant clearfix ">
                                <input type="hidden" name="variantId" value="103696454" />
                            </div>
                            <div className="w-full">
                                <label className="inline-block align-middle mb-0">Số lượng: </label>
                                <div className="relative shadow-none w-[calc(100%_-_85px)] inline-block mb-3 p-0 border-[none] ml-4">
                                    <span onClick={handleDecrement} className="absolute text-center w-10 h-10 leading-[39px] text-[25px] cursor-pointer text-[#898989] left-2.5 top-0">-</span>
                                    <input type="text" className="text-[1em] text-center m-0 p-0 rounded-none h-10 border w-full max-w-full text-[#1c1c1c] min-h-[40px] block border-solid border-[#e1e1e1]" title="Số lượng" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} id="qty" name="quantity" />
                                    <span onClick={handleIncrement} className="absolute text-center w-10 h-10 leading-10 text-xl cursor-pointer text-[#898989] right-2.5 top-0">+</span>
                                </div>
                                <div className="text-center bg-[#2e1c11] border-solid border-[10px] border-[#2e1c11]"><a href="https://m.me/katjewelry" target="_blank" title="Liên hệ FB"><span className="text-white text-[15px]">Click để inbox FB check hàng ngay!</span></a></div>
                                {/*<button type="submit" className="btn btn-lg btn-primary btn-cart btn-cart2 add_to_cart btn_buy add_to_cart" title="Cho vào giỏ hàng">
										<span>Thêm vào giỏ hàng</span>
									</button>*/}
                            </div>
                            <a className="inline-flex items-center border relative m-[5px] rounded-sm border-solid border-gray-500" href="javascript:;" data-customer-id="0" data-product="33572594" data-variant="103696454">
                                <span className="inline-block border border-r-solid border-gray-500 p-[5px]"><img className="w-[30px] h-[30px] max-w-full mx-0.5 my-0 border-0 border-none" src="https://wishlists.sapoapps.vn/content/images/iwish_add.png" /></span>
                                <span className="inline-block p-[5px]">Thêm vào yêu thích</span>
                            </a>
                            <a className="hidden relative m-[5px] rounded-sm border border-solid border-gray-500" href="javascript:;" data-customer-id="0" data-product="33572594" data-variant="103696454"><span className="iwishAddChild iwishAddBorder"><img className="iWishImg" src="https://wishlists.sapoapps.vn/content/images/iwish_added.png" /></span><span className="iwishAddChild">Đã yêu thích</span></a>
                        </form>
                        <div className="md-discount-box-inform" id="md-discount-box-inform"></div>
                        <div className="social-sharing">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="text-[1em]" data-permalink="https://katjewelry.vn/tr-double-bubble-heart-oxidize">
                                        Chia sẻ:
                                        <a target="_blank" href="//www.facebook.com/sharer.php?u=https://katjewelry.vn/tr-double-bubble-heart-oxidize" className="mx-[5px] my-0 text-[#42210b] no-underline" title="Chia sẻ lên Facebook">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        <a target="_blank" href="//twitter.com/share?text=TR DOUBLE BUBBLE HEART OXIDIZE&url=https://katjewelry.vn/tr-double-bubble-heart-oxidize" className="mx-[5px] my-0 text-[#42210b] no-underline" title="Chia sẻ lên Twitter">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a target="_blank" href="//pinterest.com/pin/create/button/?url=https://katjewelry.vn/tr-double-bubble-heart-oxidize&media=http://bizweb.dktcdn.net/thumb/1024x1024/100/302/551/products/compressed-editted-cropna-2311-4-089-1.jpg?v=1703585982850&description=TR DOUBLE BUBBLE HEART OXIDIZE" className="mx-[5px] my-0 text-[#42210b] no-underline" title="Chia sẻ lên pinterest">
                                            <FontAwesomeIcon icon={faPinterest} />
                                        </a>
                                        <a target="_blank" href="//plus.google.com/share?url=https://katjewelry.vn/tr-double-bubble-heart-oxidize" className="mx-[5px] my-0 text-[#42210b] no-underline" title="+1">
                                            <FontAwesomeIcon icon={faGooglePlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="contact">Click <a href="https://m.me/katjewelry">[ĐÂY] </a> để liên hệ Facebook tư vấn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;