import React, { useState } from 'react';

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="border border-b-[none] border-solid border-[#e1e1e1]">
            <a
                className="block leading-[35px] text-lg bg-[#42210b] text-white uppercase font-bold relative px-5 py-0"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen ? "true" : "false"}
            >
                {title}
                <span className="ml-[10px]">
                    <i className={`fa ${isOpen ? 'fa-minus-square' : 'fa-plus-square'}`} />
                </span>
            </a>
            <div className={`p-[20px] border-t-[#ebebeb] border-t border-solid opacity-1 ${isOpen ? '' : 'hidden'}`} role="tabpanel">
                {content}
            </div>
        </li>
    );
}

const ProductSupport = (props) => {
    return (
        <div className="flex flex-wrap xs:mt-[15px] mr-[-15px] ml-[-15px]">
            <div className="sm:w-full pr-4 pl-4">
                <ul className="mb-[30px] list-none pl-0">
                    <AccordionItem
                        title="Our story - Chuyện chưa kể"
                        content={<div className="rte"></div>}
                    />
                    <AccordionItem
                        title="Cách đo size - size guide"
                        content={
                            <div className="p-[20px] border-t-[#ebebeb] border-t border-solid opacity-1" id="profile" role="tabpanel">
                                <p class="text-start">
                                    <span class="text-base font-sans font-medium leading-normal text-gray-700">
                                        Chắc rằng các bạn đã nhiều lần gặp khó khăn khi nhẫn và vòng tay có quá nhiều cỡ
                                        với số đo đa dạng, bạn không biết tay mình là số mấy mới vừa? Từ giờ bạn không
                                        phải băn khoăn nữa, vì KaT Jewelry sẽ mách bạn những cách đo nhẫn cực kỳ dễ và hiệu quả nhé.
                                    </span>
                                </p>
                                <p className="text-start">
                                    <span class="text-base text-gray-700 font-sans font-medium">
                                        Có hai cách rất đơn giản để biết được size nhẫn và vòng của bạn.
                                    </span>
                                </p>
                                <p className="text-start">
                                    <span class="text-base text-gray-700 font-sans font-medium">
                                        <strong><u>Cách thứ nhất:</u></strong> Nếu bạn có sẵn chiếc nhẫn hoặc vòng tay
                                    </span>
                                </p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    Bước 1: Dùng thước đặt ngang ở giữa nhẫn của bạn để đo đường kính, nhớ đo khoảng cách lòng bên trong của nhẫn.
                                </p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    Bước 2: Gửi kaT jewelry số đo theo đơn vị cm nhé (centi mét).
                                </p>
                                <div className="text-start">
                                    <img className="h-250 w-600" src="//bizweb.dktcdn.net/100/302/551/files/ringsize1.png?v=1526066732119" />
                                </div>
                                <p className="text-start">
                                    <strong><u className="text-base">Cách thứ hai:</u></strong>
                                </p>
                                <p className="text-start">
                                    <span className="text-base text-gray-700 font-sans font-medium">
                                        Bước 1: Dùng một sợi chỉ, quấn quanh ngón tay/cổ tay bạn muốn đo, làm dấu lại.
                                    </span>
                                </p>
                                <p className="text-start">
                                    <span className="text-base text-gray-700 font-sans font-medium">
                                        Bước 2: Đo chiều dài sợi chỉ, chiều dài đó là chu vi của ngón tay/cổ tay bạn.
                                        Đối với cổ tay, hãy nhớ trừ đi một ít để đảm bảo vừa vặn thoải mái.
                                    </span>
                                </p>
                                <p className="mb-6">
                                    <span className="text-base text-gray-700 font-sans font-medium">
                                        Bước 3: Gửi số đo cho KaT Jewelry với đơn vị là cm nhé (centi mét).
                                    </span>
                                </p>
                                <div className="w-full">
                                    <img src="//bizweb.dktcdn.net/100/302/551/files/edited-download-1.jpg?v=1584990767436" alt="Image" class="w-full h-auto" />
                                </div>

                                <div className="w-full">
                                    <img src="//bizweb.dktcdn.net/100/302/551/files/edited-download-copy.jpg?v=1584990860831" alt="Image" class="w-full h-auto" />
                                </div>
                                <p style={{ WebkitTextStrokeWidth: 0, margin: "0in 0in 6pt" }}>
                                    <u>
                                        <strong>BẢNG GIÁ DÂY CHUYỀN</strong>
                                    </u>
                                </p>
                                <p className="mt-6 text-base text-gray-700 font-sans font-medium">
                                    Lưu ý: Các bạn nên đo khớt đốt ngón tay trước bụng ngón tay, chu vi của phần nào lớn hơn bạn sẽ lấy số chu vi đó làm size nhẫn. Vì nhẫn phải lọt qua khớp đốt ngón tay mới vào được tới bụng ngón tay được nè :D. Nếu khớp đốt ngón tay to hơn bụng ngón tay mà size nhận bạn chọn lại là bụng ngón tay thì nhẫn sẽ không bao giờ lọt vào trong bụng ngón tay được nhé.
                                </p>
                                <p className="mt-6">&nbsp;</p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    Dây chuyền bạc của KaT có nhiều độ dài và kích cỡ khác nhau phù hợp
                                    với nhiều loại mặt dây và độ dài mong muốn. Được kết bằng bạc chất
                                    lượng cao đủ tiêu chuẩn 925. Giá niêm yết theo bảng sau:
                                </p>
                                <p>
                                    <img src="//bizweb.dktcdn.net/100/302/551/files/sod-necklace-size-02-1024x1024-3f92e076-0f03-4a1a-a0d9-cb4bea02df16.jpg?v=1584990951171" />
                                </p>
                                <table
                                    align="left"
                                    border={1}
                                    cellPadding={1}
                                    cellSpacing={1}
                                    className="w-full border-spacing-0 mb-[1em] border-collapse border border-solid border-[#42210b] mt-3 text-gray-700 font-sans font-medium"
                                >
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td style={{ textAlign: "center" }}>Dài 40 cm</td>
                                            <td style={{ textAlign: "center" }}>Dài 45 cm</td>
                                            <td style={{ textAlign: "center" }}>Dài 50 cm</td>
                                            <td style={{ textAlign: "center" }}>Dài 55 cm</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>Mắt xích nhỏ</td>
                                            <td style={{ textAlign: "center" }}>140k</td>
                                            <td style={{ textAlign: "center" }}>180k</td>
                                            <td style={{ textAlign: "center" }}>220k</td>
                                            <td style={{ textAlign: "center" }}>không có</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>Mắt xích trung</td>
                                            <td style={{ textAlign: "center" }}>180k</td>
                                            <td style={{ textAlign: "center" }}>220k</td>
                                            <td style={{ textAlign: "center" }}>260k</td>
                                            <td style={{ textAlign: "center" }}>không có</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>Mắt xích lớn</td>
                                            <td style={{ textAlign: "center" }}>220k</td>
                                            <td style={{ textAlign: "center" }}>260k</td>
                                            <td style={{ textAlign: "center" }}>300k</td>
                                            <td style={{ textAlign: "center" }}>340k</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p style={{ WebkitTextStrokeWidth: 0, margin: "0in 0in 6pt" }}>
                                    &nbsp;
                                </p>
                                <p>&nbsp;</p>
                            </div>
                        }
                    />
                    <AccordionItem
                        title="vận chuyển - shipping"
                        content={
                            <div className="p-[20px] border-t-[#ebebeb] border-t border-solid opacity-1" id="messages4" role="tabpanel">
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    Nếu các bạn,&nbsp;vì lý do nào đó không thể ghé thăm cửa hàng của
                                    KaT,&nbsp;thì các bạn vẫn có&nbsp;thể đặt hàng qua website,
                                    Facebook, Tin nhắn,&nbsp;viber, email,...&nbsp;nhé.
                                </p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    sau khi đặt hàng thành công, team KaT sẽ liên hệ bạn sớm nhất có thể
                                    để chốt thông tin order trước khi đưa qua bộ phận shipping gồm các
                                    thông tin sau:
                                </p>
                                <p className="text-base text-gray-700 font-sans font-medium">1 - Số lượng và loại đơn hàng</p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    2 - Phương thức vận chuyển và chi phí vận chuyển (giá ship 40k chỉ
                                    mang tính chất tham khảo, giá thực tế sẽ được báo khi nhân viên liên
                                    lạc bạn nhé)
                                </p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    3 - Phương thức thanh toán (COD thu tiền tại nhà hoặc chuyển khoản)
                                </p>
                                <p className="text-base text-gray-700 font-sans font-medium">4 - Thời gian nhận hàng</p>
                                <p className="text-base text-gray-700 font-sans font-medium">
                                    KaT Jewelry sử dụng dịch vụ chuyển phát nên thời gian bắt đầu chuyển
                                    sẽ chậm 1 ngày so với ngày chốt các bạn nhé. Tùy vị trí sẽ có thời
                                    gian ship và giá ship&nbsp;khác nhau phụ thuộc vào công ty chuyển
                                    phát.
                                </p>
                            </div>
                        }
                    />
                </ul>
            </div>
        </div>

    )
}

export default ProductSupport;