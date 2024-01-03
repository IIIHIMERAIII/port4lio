import { SageListContainer, List, ListItem} from "./styled"

const items = [
    {title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam in, nobis dignissimos accusantium vel consequuntur soluta numquam illo rerum dolorem eum alias sed ipsum quia itaque saepe earum enim? Harum esse ipsum ducimus laudantium dignissimos, doloribus labore. Porro odit ea quis ad repellat dolorem molestias ipsum, minima eum labore, laboriosam quaerat. Sunt itaque et cumque quae consequatur molestiae deserunt."}, 
    {title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam in, nobis dignissimos accusantium vel consequuntur soluta numquam illo rerum dolorem eum alias sed ipsum quia itaque saepe earum enim? Harum esse ipsum ducimus laudantium dignissimos, doloribus labore. Porro odit ea quis ad repellat dolorem molestias ipsum, minima eum labore, laboriosam quaerat. Sunt itaque et cumque quae consequatur molestiae deserunt."}, 
    {title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam in, nobis dignissimos accusantium vel consequuntur soluta numquam illo rerum dolorem eum alias sed ipsum quia itaque saepe earum enim? Harum esse ipsum ducimus laudantium dignissimos, doloribus labore. Porro odit ea quis ad repellat dolorem molestias ipsum, minima eum labore, laboriosam quaerat. Sunt itaque et cumque quae consequatur molestiae deserunt."}, 
]

export const SageList = () => {
    return (
        <SageListContainer>
            <List>
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        index={index}
                    > <a>
                        {item.title}
                    </a>
                    </ListItem>
                ))}
            </List>
        </SageListContainer>
    )
}

