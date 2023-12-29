import { 
    SliderOverlay,
    SliderContainer, 
    SliderList, 
    SliderItem, 
    SliderImg 
} from './styled'

import h1 from '../../../images/h1.jpg'
import h2 from '../../../images/h2.jpg'
import h3 from '../../../images/h3.jpg'
import h4 from '../../../images/h4.jpg'
import h5 from '../../../images/h5.jpg'
import h6 from '../../../images/h6.jpg'
import h7 from '../../../images/h7.jpg'

const items = [h1, h2, h3, h4, h5, h6, h7];

export const HeroSlider = () => {
    return (
        <SliderOverlay>
            <SliderContainer>
                <SliderList>
                {items.map((item, index) => (
                        <SliderItem 
                        key={index}
                        index={index}
                        >
                            <SliderImg
                                src={item}
                            />
                        </SliderItem>
                ))}
                </SliderList>
            </SliderContainer>
        </SliderOverlay>
    )
}