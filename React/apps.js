
const App = (props) => {
    return (
        < div >
            <h1>Hi from React</h1>
            <h2>one more heading</h2>
            <hr></hr>
            {props.children}

        </div >
    )
}
const List = (props) => {
    return (<ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    )
}
const Separator = () => {
    return <hr />
}

const Title = (props) => {
    return <h2>{props.title}</h2>
}

const fruits = [
    'apple',
    'orange',
    'banana'
]
const drinks = [
    'fanta',
    'coca-cola'
]

const ProductItem = (props) => {
    return <p>{props.name}</p>
}

const ProductList = (props) => {
    return props.productData.map((prod) => {
        return <ProductItem name={prod} />
    })
}

const rootElement = document.querySelector('.root')
ReactDOM.render(
    <App>
        <List />
        <Separator />
        <Title title="Fruits" />
        <ProductList productData={fruits} />
        <Title title="Drinks" />
        <ProductList productData={drinks} />
    </App>,
    rootElement
) 