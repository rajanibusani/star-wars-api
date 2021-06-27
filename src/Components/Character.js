import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import Avatar from 'avataaars'

function Character() {
    const [character, setCharacter] = useState();
    const location = useLocation();

    // getting the character detailes by using location state peoperty
    useEffect(() => {
        setCharacter(location.state.character)
    }, [location.state.character])

    return (
        <Container>
            {character &&
                <Card style={{ width: '18rem' }} className="card-container">
                    <div className="avatar">
                        <Avatar
                            style={{ width: '100px', height: '100px' }}
                            name={character.name}
                            color='green'
                            avatarStyle='Circle'
                            sex="man"
                            hairColor={character.hair_color}
                            faceColor={character.skin_color}
                        />
                    </div>
                    <Card.Body>
                        <Card.Title>Name : {character.name}</Card.Title>
                        <Card.Title>Gender : {character.gender}</Card.Title>
                        <Card.Title>Skin-Color : {character.skin_color}</Card.Title>
                        <Card.Title>Hair-Color : {character.hair_color}</Card.Title>
                        <Card.Title>Eye-Color : {character.eye_color}</Card.Title>
                        <Button variant="secondary">
                            <Link to="/">Go Back</Link>
                        </Button>
                    </Card.Body>
                </Card>
            }
        </Container>
    )
}
export default Character;

