import { DNA } from "react-loader-spinner";


const Spinner = () => {
    return (
        <div className="h-screen mx-auto items-center flex justify-center"> 
            <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    />
        </div>
    );
};

export default Spinner;