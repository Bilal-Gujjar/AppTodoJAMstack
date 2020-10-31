import React from "react";
import { Container,Heading,Button,Flex} from "theme-ui";

export default props => (
    <Container>
        <Flex sx={{flexDirection :"column",padding:30}}>
            <Heading as = "h1">Todo App</Heading>
            <Button sx ={{ marginTop:20}} 
                onClick = {() => {alert("Login  SucessFully ")}}>
                Login
                </Button>
        </Flex>
    </Container>
);