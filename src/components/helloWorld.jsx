import {Typography, Button} from '@mui/material'

const HelloWorld = () => {
    return (
        <>
            <Typography variant="h1">Hello World!</Typography>
            <Button variant="contained">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
        </>
    );
};

export default HelloWorld;