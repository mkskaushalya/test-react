import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App({name, children}){
    const items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
        'San Diego',
        'Dallas',
        'San Jose',
        'Austin',
        'Jacksonville',
        "San Francisco"
    ];
    const contries = [
        "Sri Lanka",
        "India",
        "Afganistan",
        "Pakistan",
        "Bhootan",
        "Maldives",
        "Nepal"
    ];
    return(
        <>
            <h1>{children + " " + name}</h1>

            <ListGroup items={items} contries={contries}>Contries</ListGroup>
            <Button onClick={()=> alert("Button Clicked")} color="primary">Click Me</Button>
        </>
    );
}

export default App;