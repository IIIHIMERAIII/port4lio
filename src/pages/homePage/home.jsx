import { TabSlider } from "../../components/tabSlider/tabSlider";
import { Hero } from "../../components/hero/hero";
import { Quest } from "../../components/quest/quest";
import { Sage } from "../../components/sage/sage";

export const Home = () => {
    return (
        <>
        <TabSlider/>
        <Quest/>
        <Hero />
        <Sage/>
        </>
    )
}