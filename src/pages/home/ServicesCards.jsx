/* eslint-disable react/prop-types */


const ServicesCards = ({ sCard }) => {
    const {  title, des, logo } = sCard;
    return (
        <div className="w-[277px] h-[220px] card rounded-xl text-[#90BD95] items-center shadow-xl">
            <img  src={logo} alt="" />
            <div className="card-body text-center ">
                <h2 className="text-center item-center mx-auto card-title">{title}</h2>
                <p className="text-center item-center">{des}</p>

            </div>
        </div>
    );
};

export default ServicesCards;