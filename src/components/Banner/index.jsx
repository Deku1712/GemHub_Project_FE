import bannerImage from "../../assets/imgs/bannerImage.webp";

const Banner = (props) => {
    return (
        <div className="bg-[#efefef] my-[10px] bg-[url(https://bizweb.dktcdn.net/100/302/551/collections/danen-untitled-1-08.jpg?v=1657274283870)] bg-cover lg:min-h-[450px]">
            <section className="bg-center mt-2.5 text-[#333] text-left mb-2.5 px-0 py-[42px]">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="sm:w-full pr-4 pl-4"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner;