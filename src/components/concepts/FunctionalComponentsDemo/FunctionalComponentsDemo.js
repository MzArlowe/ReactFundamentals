import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

const FunctionalComponentsDemo = () => {
    return (
        <Container className='main'>
            <Row>
                <Col xs='12'>
                    <h1>
                        Functional Component
                    </h1>
                    <p>
                        Functional Components are the primary tool in React to build a small, modular piece of your page.
                    </p>
                    <dl>
                        <dt>Can use state</dt>
                        <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown. </dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Older class components in React use 'this'. Functional components have no 'this' object.</dd>
                        <dt>Can use effects</dt>
                        <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element, but this element may have nested elements inside of it.</dd>
                        <h1>Functional Syntax vs Arrow Function</h1>
                    </dl>
                </Col>
            </Row>
            <hr />
            <h1>Challenge 1</h1>
            <Row>
                <Col md='6'>
                    <HelloWorldFatArrow className='logo' />
                </Col>
                <Col md='6'>
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
        //     <h1>Functional Syntax vs Arrow Function</h1>
        // </div>
        // {/* <div>
        //     Hello React
        // </div>
        // <div>
        //     How are you today?
        // </div> */}
        //     </div>
        // </div>
    );
};

// let add = function (x, y) {
//     return x + y;
// }

// let add = (x, y) => x + y;

// //concise body syntax: Implied return
// let func = x => x * x;
// //block body syntax: explicit return needed
// let func = (x, y) => {
//     return x + y;
// }

// let greetUser = username => `Hello, ${username}!`;//version 1

// let greetUserTwo = username => { //version 2; both 1 and 2 are exactly the same. 
//     return `Hello, ${username}!`;
// }

// console.log(greetUser('Kenn') === greetUserTwo('Kenn')); //true

// // simple version that represents the syntax of our React Component
// let function = () => {
//     console.log('Hello React');
// };


export default FunctionalComponentsDemo;

const HelloWorld = function() {
    return(
        <div>
            <Card>
                <img width='100%' height='280px' src='https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg' alt='card cap' />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function()</pre></CardText>
                    <Button>Go somewhere, yo</Button>
                </CardBody>
            </Card>
        </div>
    );
};

//fat arrow function component - 3 fewer lines. Common in React...
const HelloWorldFatArrow = () =>
<div>
    <Card>
        <img width='100%' height='280px' src='https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg' alt='card cap' />
        <CardBody>
            <CardTitle>Fat Arrow</CardTitle>
            <CardSubtitle>A JS Library</CardSubtitle>
                <CardText><pre>const HelloWorld = () {'=>'}</pre></CardText>
                <Button>Go somewhere, man</Button>
        </CardBody>
    </Card>
</div>