import { useContext } from "react";
import { loadingContext } from "../context/Context"
import "./LoadingScreen.css"

const LoadingScreen = () => {
    const {setLoading} = useContext(loadingContext)

    const DeactivateLoading = () => {
        setTimeout(stopLoading, 2500);
    }

    const stopLoading = () => {
        setLoading(false);
    }

    DeactivateLoading();


    return ( 
        <section className="loadingSection">
            <div className="loading">
                <div className="pokeball">
                    <div className="upperBall">

                    </div>

                    <div className="ballMid">
                        <div className="ballMidDot"></div>
                    </div>

                    <div className=" lowerBall">

                    </div>
                </div>
            </div>
        </section>
);
}
 
export default LoadingScreen;